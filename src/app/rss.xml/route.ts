import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const revalidate = 3600
import { getAllPosts } from '@/lib/markdown'
import { site } from '@/lib/site'

function escape(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function GET() {
  const baseUrl = site.url
  const posts = getAllPosts()
  const lastBuildDate = posts.length
    ? new Date(posts[0].date).toUTCString()
    : new Date(0).toUTCString()

  const items = posts
    .map(
      (post) => `
    <item>
      <title>${escape(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escape(post.excerpt)}</description>
    </item>`
    )
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(site.name)} — iOS Development Blog</title>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Articles on iOS development, Swift, SwiftUI, testing, and mobile app craftsmanship by ${escape(site.name)}.</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <managingEditor>${site.email} (${escape(site.name)})</managingEditor>
    <webMaster>${site.email} (${escape(site.name)})</webMaster>
    <generator>Next.js</generator>
    <image>
      <url>${baseUrl}${site.ogImage}</url>
      <title>${escape(site.name)}</title>
      <link>${baseUrl}</link>
    </image>${items}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}

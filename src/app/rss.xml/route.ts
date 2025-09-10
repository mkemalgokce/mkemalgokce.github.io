import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const revalidate = 3600
import { getAllPosts } from '@/lib/markdown'

function escape(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function GET() {
  const baseUrl = 'https://mkemalgokce.github.io'
  const posts = getAllPosts()

  const items = posts
    .map(
      (post) => `
    <item>
      <title>${escape(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escape(post.excerpt)}</description>
    </item>`
    )
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Mustafa Kemal GÖKÇE</title>
      <link>${baseUrl}</link>
      <description>iOS Development blog by Mustafa Kemal GÖKÇE</description>
      ${items}
    </channel>
  </rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate'
    },
  })
}


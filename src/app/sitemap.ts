import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400
import { getAllPosts } from '@/lib/markdown'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mkemalgokce.github.io'
  const posts = getAllPosts()

  const routes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  return [...routes, ...postRoutes]
}


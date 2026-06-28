import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400
import { getAllPosts } from '@/lib/markdown'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mkemalgokce.github.io'
  const posts = getAllPosts()

  const routes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/fauxcam`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/sayar`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/sayar/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${baseUrl}/sayar/terms`, lastModified: new Date(), priority: 0.3 },
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  return [...routes, ...postRoutes]
}


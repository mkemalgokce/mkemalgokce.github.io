import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400
import { getAllPosts } from '@/lib/markdown'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url
  const posts = getAllPosts()
  const now = new Date()

  const routes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/fauxcam`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/sayar`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/sayar/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/sayar/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.7,
  }))

  return [...routes, ...postRoutes]
}

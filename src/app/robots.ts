import { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export const dynamic = 'force-static'
export const revalidate = 86400

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}

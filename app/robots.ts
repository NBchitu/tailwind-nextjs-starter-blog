import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteMetadata.mainSiteUrl}/sitemap.xml`,
    host: siteMetadata.mainSiteUrl,
  }
}

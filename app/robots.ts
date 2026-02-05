import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/van-de'],
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://fixpc.vercel.app/sitemap.xml',
  }
}
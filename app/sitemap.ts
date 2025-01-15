import { MetadataRoute } from 'next'
import { categories } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tapclack.com'

  // Base route
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]

  // Category routes
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}#${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...routes, ...categoryRoutes]
} 
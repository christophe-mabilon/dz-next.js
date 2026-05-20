import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dzmaconnerie.fr',
      lastModified: new Date(),
    },
  ]
}
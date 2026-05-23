import type { Realisation } from '@/data/realisations'

const SITE_URL = 'https://www.dz-maconnerie.fr'

export function generateRealisationMetadata(
  project: Realisation
) {
  const title =
    `${project.service} à ${project.city} | ${project.title} | DZ Maçonnerie`

  const description =
    `${project.description} Découvrez cette réalisation de ${project.service.toLowerCase()} réalisée à ${project.city} par DZ Maçonnerie & Terrassement.`

  const canonical =
    `${SITE_URL}/realisations/${project.slug}`

  const ogImage =
    project.images?.[0]?.src
      ? `${SITE_URL}${project.images[0].src}`
      : `${SITE_URL}/og-default.jpg`

  return {
    title,

    description,

    keywords: [
      project.service,
      project.city,
      'maçonnerie',
      'terrassement',
      ...(project.keywords || []),
    ],

    alternates: {
      canonical,
    },

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'DZ Maçonnerie',
      locale: 'fr_FR',
      type: 'article',

      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,

      images: [ogImage],
    },

    robots: {
      index: true,
      follow: true,
    },
  }
}
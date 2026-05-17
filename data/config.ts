import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  siteName: 'DZ Maçonnerie & Terrassement',
  siteDescription: 'Maçon expert à Artas, Bourgoin-Jallieu et région. Maçonnerie générale, rénovation, terrassement. Devis gratuit et garantie décennale.',
  siteUrl: 'https://dzmaconnerie.fr', // À remplacer par votre domaine
  ogImage: '/og-image.jpg',
  locale: 'fr_FR',
  business: {
    name: 'DZ Maçonnerie & Terrassement',
    description: 'Expert en maçonnerie générale, rénovation et terrassement dans la région Rhône-Alpes',
    phone: '06.88.14.42.57', // À remplacer
    email: 'contact@dzmaconnerie.fr', // À remplacer
    address: '130 sentier du taillis', // À remplacer
    zipCode: '38440', // À remplacer
    city: 'Artas', // À remplacer
    country: 'FR',
    socialProfiles: {
      facebook: '', // À remplir
      instagram: '', // À remplir
      google: '', // Google Business Profile URL
    },
  },
};

// Métadonnées par défaut
export const defaultMetadata = {
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  language: 'fr-FR',
};

// Config SEO
export const SEO_CONFIG = {
  titleTemplate: `%s | ${siteConfig.siteName}`,
  defaultTitle: siteConfig.siteName,
  description: siteConfig.siteDescription,
  canonical: siteConfig.siteUrl,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
  },
  twitter: {
    handle: '@dzmaconnerie', // À adapter
    site: '@dzmaconnerie',
    cardType: 'summary_large_image',
  },
};

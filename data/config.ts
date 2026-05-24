import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  siteName: "DZ Maçonnerie & Terrassement",
  siteDescription:
    "Entreprise de maçonnerie à Artas et Bourgoin-Jallieu spécialisée en maçonnerie générale, rénovation, terrassement, dalle béton et extension maison. Devis gratuit et garantie décennale.",

  siteUrl: "https://www.dzmaconnerie38.fr",

  ogImage: "/og-image.jpg",

  locale: "fr_FR",

  business: {
    name: "DZ Maçonnerie & Terrassement",

    legalName: "DZ Maçonnerie & Terrassement",
    description:
      "Expert en maçonnerie générale, terrassement, dalle béton, rénovation et extension maison en Isère.",

    phone: "+336.88.14.42.57",

    email: "dz.maconnerie38@gmail.com",

    address: "130 Sentier du Taillis",

    zipCode: "38440",

    city: "Artas",
    region: "Auvergne-Rhône-Alpes",
    country: "FR",

    priceRange: "€€",

    openingHours: [
      "Mo 09:00-17:00",
      "Tu 09:00-17:00",
      "We 09:00-17:00",
      "Th 09:00-17:00",
      "Fr 09:00-17:00",
    ],

    coordinates: {
      latitude: 45.536842,
      longitude: 5.165274,
    },

    serviceArea: [
      "Artas",

      "Bourgoin-Jallieu",

      "Vienne",

      "Villefontaine",

      "L'Isle-d'Abeau",

      "La Verpillière",

      "Saint-Jean-de-Bournay",

      "Heyrieux",

      "La Tour-du-Pin",

      "Nord-Isère",
    ],

    socialProfiles: {
      facebook: "https://www.facebook.com/dz.maconnerie38",
      google: "https://share.google/cqOcenarz7ledaiiN",
    },
  },
};

// Métadonnées par défaut
export const defaultMetadata = {
  charset: "utf-8",

  viewport: "width=device-width, initial-scale=1",

  robots: "index, follow",

  language: "fr-FR",
};

// Config SEO
export const SEO_CONFIG = {
  titleTemplate: `%s | ${siteConfig.siteName}`,

  defaultTitle: siteConfig.siteName,

  description: siteConfig.siteDescription,

  canonical: siteConfig.siteUrl,

  openGraph: {
    type: "website",

    locale: siteConfig.locale,

    url: siteConfig.siteUrl,

    siteName: siteConfig.siteName,

    images: [
      {
        url: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.siteName,
      },
    ],
  },

  twitter: {
    cardType: "summary_large_image",
  },
};

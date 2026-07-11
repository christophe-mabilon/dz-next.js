import { SiteConfig } from "@/types";
// Horaires réels : 8h-12h / 14h-18h (fiche Google Business alignée).
// Schema.org : une entrée par plage horaire (matin + après-midi).
const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export const openingHoursSpecification = WEEKDAYS.flatMap((dayOfWeek) => [
  { dayOfWeek, opens: "08:00", closes: "12:00" },
  { dayOfWeek, opens: "14:00", closes: "18:00" },
]);

export const openingHoursDisplay = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
].map((day) => ({
  day,
  hours: "08h00 - 12h00 / 14h00 - 18h00",
}));
export const siteConfig: SiteConfig = {
  siteName: "DZ Maçonnerie & Terrassement",
  siteDescription:
    "Entreprise de maçonnerie générale située à Artas près de Bourgoin-Jallieu. Construction, rénovation, extension de maison, terrassement, fondations, terrasses, murs porteurs avec IPN, piscines maçonnées et aménagements extérieurs. Devis gratuit et garantie décennale.",

  siteUrl: "https://www.dzmaconnerie38.fr",
  ogImage: "/images/og-image.jpg",
  locale: "fr_FR",
  business: {
    name: "DZ Maçonnerie & Terrassement",
    legalName: "DZ Maçonnerie & Terrassement",
    description:
      "Entreprise spécialisée en maçonnerie générale, construction, rénovation, terrassement, fondations, dalles béton, terrasses, murs porteurs avec pose d'IPN, piscines maçonnées et aménagements extérieurs en Nord-Isère.",

    phone: "+33688144257",

    email: "dz.maconnerie38@gmail.com",

    address: "130 Sentier du Taillis",

    zipCode: "38440",

    city: "Artas",
    region: "Auvergne-Rhône-Alpes",
    country: "FR",

    priceRange: "€€",

    openingHoursSpecification,
    openingHoursDisplay,

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
      "Domarin",
      "Maubec",
      "Nivolas-Vermelle",
      "Saint-Savin",
      "Châtonnay",
      "Charantonnay",
      "Meyrié",
      "Culin",
      "Les Éparres",
      "Ruy-Montceau",
      "Saint-Quentin-Fallavier",
      "Diémoz",
      "Frontonas",
      "Four",
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

  defaultTitle: `Artisan maçon à Bourgoin-Jallieu | ${siteConfig.siteName}`,

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

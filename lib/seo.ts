import { Metadata } from "next";
import { siteConfig } from "@/data/config";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import reviewsLive from "@/data/reviews-live.json";

export function generateMetadata(
  title: string,
  description: string,
  path: string = "",
  image?: string,
  ogType: "website" | "article" = "website",
): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;

  return {
    title: `${title} | ${siteConfig.siteName}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: ogType,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      images: [
        {
          url: image ? image : `${siteConfig.siteUrl}${siteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image ? image : `${siteConfig.siteUrl}${siteConfig.ogImage}`],
    },
  };
}

// LocalBusiness Schema (nœud central du graphe, référencé partout via @id)
export const BUSINESS_ID = `${siteConfig.siteUrl}/#business`;

// Note et volume d'avis : données Google live (scripts/fetch-reviews.mjs)
// en priorité, sinon calcul depuis les avis manuels de data/reviews.ts.
export function getRatingSummary() {
  if (reviewsLive.ratingValue && reviewsLive.reviewCount) {
    return {
      ratingValue: String(reviewsLive.ratingValue),
      reviewCount: String(reviewsLive.reviewCount),
    };
  }
  if (!reviews.length) return undefined;
  return {
    ratingValue: (
      reviews.reduce((sum, r) => sum + (r.rating ?? 5), 0) / reviews.length
    ).toFixed(1),
    reviewCount: String(reviews.length),
  };
}

export function generateLocalBusinessSchema() {
  const rating = getRatingSummary();

  return {
    "@context": "https://schema.org",

    // types schema.org VALIDES (ConstructionCompany n'existe pas)
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"],

    "@id": BUSINESS_ID,

    name: siteConfig.business.name,
    legalName: siteConfig.business.legalName,

    url: siteConfig.siteUrl,

    image: [
      `${siteConfig.siteUrl}/images/og-image.jpg`,
      `${siteConfig.siteUrl}/images/chantiers/DZ-maconnerie_logo1.webp`,
    ],

    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.siteUrl}/images/chantiers/DZ-maconnerie_logo1.webp`,
    },

    description: siteConfig.business.description,

    telephone: siteConfig.business.phone,

    // email volontairement absent du schema : cible n°1 des harvesters de
    // spam, et champ optionnel pour Google (le téléphone suffit au local pack)

    priceRange: siteConfig.business.priceRange || "€€",

    slogan: "La qualité est notre fondation !",

    knowsLanguage: "fr",

    currenciesAccepted: "EUR",
    paymentAccepted: "Espèces, Chèque, Virement bancaire",

    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address,
      addressLocality: siteConfig.business.city,
      postalCode: siteConfig.business.zipCode,
      addressRegion: siteConfig.business.region,
      addressCountry: siteConfig.business.country,
    },

    geo: siteConfig.business.coordinates
      ? {
          "@type": "GeoCoordinates",
          latitude: siteConfig.business.coordinates.latitude,
          longitude: siteConfig.business.coordinates.longitude,
        }
      : undefined,

    // zone de chalandise réelle : cercle de 35 km autour d'Artas
    // + villes principales nommées (double signal pour le local pack)
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.business.coordinates?.latitude,
          longitude: siteConfig.business.coordinates?.longitude,
        },
        geoRadius: "35000",
      },
      ...(siteConfig.business.serviceArea ?? []).slice(0, 15).map((city) => ({
        "@type": "City" as const,
        name: city,
      })),
    ],

    openingHoursSpecification:
      siteConfig.business.openingHoursSpecification?.map((item) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: item.dayOfWeek,
        opens: item.opens,
        closes: item.closes,
      })) || [],

    // catalogue construit depuis les VRAIS services (avec URLs)
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de maçonnerie et terrassement",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: `${siteConfig.siteUrl}/services/${service.slug}`,
        },
      })),
    },

    aggregateRating: rating
      ? {
          "@type": "AggregateRating",
          ratingValue: rating.ratingValue,
          bestRating: "5",
          worstRating: "1",
          reviewCount: rating.reviewCount,
        }
      : undefined,

    sameAs: [
      siteConfig.business.socialProfiles.google || "",
      siteConfig.business.socialProfiles.facebook || "",
      siteConfig.business.socialProfiles.instagram || "",
    ].filter(Boolean),
  };
}
// Service Schema pour les pages services (et service×ville via `city`)
export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string,
  city?: { name: string; zipCode?: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: serviceName,
    description: serviceDescription,
    url: serviceUrl,
    serviceType: serviceName,
    inLanguage: "fr-FR",
    // référence le nœud LocalBusiness du layout (graphe @id) au lieu de
    // dupliquer un provider incomplet sur chaque page
    provider: { "@id": BUSINESS_ID },
    areaServed: city
      ? {
          "@type": "City",
          name: city.name,
          ...(city.zipCode ? { postalCode: city.zipCode } : {}),
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Isère, Auvergne-Rhône-Alpes",
          },
        }
      : {
          "@type": "AdministrativeArea",
          name: "Nord-Isère",
        },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      description: "Devis gratuit et sans engagement sous 24h",
      availability: "https://schema.org/InStock",
    },
  };
}
export function generateCitySchema(cityName: string, cityUrl: string) {
  return {
    "@context": "https://schema.org",

    "@type": "City",

    name: cityName,

    url: cityUrl,
  };
}

// BreadcrumbList Schema
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.url}`,
    })),
  };
}

// FAQPage Schema
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Organization Schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.business.name,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo.png`,
    description: siteConfig.business.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address,
      addressLocality: siteConfig.business.city,
      postalCode: siteConfig.business.zipCode,
      addressCountry: siteConfig.business.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.business.phone,
      contactType: "Customer Service",
    },
    sameAs: [
      siteConfig.business.socialProfiles.google,
      siteConfig.business.socialProfiles.facebook || "",
      siteConfig.business.socialProfiles.instagram || "",
    ].filter(Boolean),
  };
}

// WebSite Schema
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    name: siteConfig.business.name,
    url: siteConfig.siteUrl,
    inLanguage: "fr-FR",
    publisher: { "@id": BUSINESS_ID },
  };
}

// Avis clients : Review[] rattachées au LocalBusiness (rich snippets étoiles)
export function generateReviewsSchema(
  items: Array<{
    author: string;
    rating: number;
    text: string;
    service?: string;
  }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: siteConfig.business.name,
    review: items.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.text,
      ...(r.service ? { about: r.service } : {}),
    })),
    // note/volume : Google live si dispo (getRatingSummary), sinon la liste affichée
    aggregateRating: (() => {
      const rating = getRatingSummary();
      if (rating)
        return {
          "@type": "AggregateRating",
          ratingValue: rating.ratingValue,
          bestRating: "5",
          worstRating: "1",
          reviewCount: rating.reviewCount,
        };
      return undefined;
    })(),
  };
}

// Pages hub (villes, services, blog, réalisations) : CollectionPage + ItemList
export function generateCollectionSchema(
  name: string,
  description: string,
  path: string,
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.siteUrl}${path}#collection`,
    name,
    description,
    url: `${siteConfig.siteUrl}${path}`,
    inLanguage: "fr-FR",
    isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
    about: { "@id": BUSINESS_ID },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: `${siteConfig.siteUrl}${item.url}`,
      })),
    },
  };
}

// Fiche réalisation : Article + lieu du chantier + galerie photos
export function generateRealisationSchema(realisation: {
  slug: string;
  title: string;
  city: string;
  service: string;
  description: string;
  images: { src: string; alt: string }[];
}) {
  const url = `${siteConfig.siteUrl}/realisations/${realisation.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#realisation`,
    headline: realisation.title,
    description: realisation.description,
    url,
    inLanguage: "fr-FR",
    author: { "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
    about: {
      "@type": "Service",
      name: realisation.service,
      provider: { "@id": BUSINESS_ID },
    },
    // signal local fort : le chantier a eu lieu dans cette commune
    contentLocation: {
      "@type": "City",
      name: realisation.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Isère, Auvergne-Rhône-Alpes",
      },
    },
    image: realisation.images.map((img) => ({
      "@type": "ImageObject",
      url: `${siteConfig.siteUrl}${img.src}`,
      caption: img.alt,
    })),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

// Article Schema pour le blog
export function generateArticleSchema(
  title: string,
  description: string,
  image: string,
  datePublished: string,
  dateModified: string,
  author: string,
  articleUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: {
      "@type": "ImageObject",
      url: image,
      width: 1200,
      height: 630,
    },
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: siteConfig.business.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/images/chantiers/DZ-maconnerie_logo1.webp`,
      },
    },
    inLanguage: "fr-FR",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };
}

export function generateSeoTitle(
  service: string,
  city: string,
  zipCode?: string,
) {
  const templates = [
    `${service} à ${city}${zipCode ? ` (${zipCode})` : ""} | DZ Maçonnerie`,

    `${service} à ${city} - Devis Gratuit | DZ Maçonnerie`,

    `Entreprise de ${service.toLowerCase()} à ${city}`,

    `${service} professionnel à ${city} | Garantie décennale`,
  ];

  return templates[(service.length + city.length) % templates.length];
}

export function generateSeoDescription(
  service: string,
  city: string,
  zipCode?: string,
) {
  const templates = [
    `DZ Maçonnerie réalise vos travaux de ${service.toLowerCase()} à ${city}${zipCode ? ` (${zipCode})` : ""}. Devis gratuit et intervention rapide.`,

    `Entreprise spécialisée en ${service.toLowerCase()} à ${city}. Artisan qualifié avec garantie décennale.`,

    `Besoin d’un expert en ${service.toLowerCase()} à ${city} ? Notre équipe intervient rapidement pour tous vos projets.`,

    `Travaux de ${service.toLowerCase()} à ${city} : rénovation, terrassement, construction et gros œuvre.`,
  ];

  return templates[(service.length + city.length) % templates.length];
}

export function generateH1(service: string, city: string) {
  const templates = [
    `${service} à ${city}`,
    `Entreprise de ${service.toLowerCase()} à ${city}`,
    `${service} professionnel à ${city}`,
  ];

  return templates[(service.length + city.length) % templates.length];
}

export function generateLocalIntroduction(
  service: string,
  city: string,
  region: string,
  projects?: string[],
) {
  return `
DZ Maçonnerie intervient à ${city} dans la région ${region}
pour tous vos projets de ${service.toLowerCase()}.

Nous réalisons régulièrement des travaux de
${projects?.join(", ") || "construction et rénovation"}
avec un accompagnement personnalisé et un devis gratuit.
  `.trim();
}

export function generateServiceFaq(service: string, city: string) {
  return [
    {
      question: `Proposez-vous des travaux de ${service.toLowerCase()} à ${city} ?`,
      answer: `Oui, nous intervenons à ${city} pour tous vos projets de ${service.toLowerCase()}.`,
    },
    {
      question: `Quel est le délai pour un chantier à ${city} ?`,
      answer: `Nous proposons une intervention rapide à ${city} selon la nature du chantier.`,
    },
  ];
}

// (generateProjectSchema supprimé : "ConstructionProject" n'est pas un type
// schema.org valide — utiliser generateRealisationSchema à la place)

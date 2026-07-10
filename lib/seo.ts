import { Metadata } from "next";
import { siteConfig } from "@/data/config";

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

// LocalBusiness Schema pour la page d'accueil
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",

    "@type": ["LocalBusiness", "ConstructionCompany"],

    "@id": `${siteConfig.siteUrl}/#business`,

    name: siteConfig.business.name,

    url: siteConfig.siteUrl,

    image: [
      `${siteConfig.siteUrl}/images/og-image.jpg`,
      `${siteConfig.siteUrl}/images/hero/hero-maconnerie.avif`,
    ],

    logo: `${siteConfig.siteUrl}/logo.png`,

    description: siteConfig.business.description,

    telephone: siteConfig.business.phone,

    email: siteConfig.business.email,

    priceRange: siteConfig.business.priceRange || "€€",

    slogan: "Entreprise de maçonnerie et terrassement en Nord-Isère",

    address: {
      "@type": "PostalAddress",

      streetAddress: siteConfig.business.address,

      addressLocality: siteConfig.business.city,

      postalCode: siteConfig.business.zipCode,

      addressCountry: siteConfig.business.country,
    },

    geo: siteConfig.business.coordinates
      ? {
          "@type": "GeoCoordinates",

          latitude: siteConfig.business.coordinates.latitude,

          longitude: siteConfig.business.coordinates.longitude,
        }
      : undefined,

    areaServed:
      siteConfig.business.serviceArea?.map((city) => ({
        "@type": "City",

        name: city,
      })) || [],

    openingHoursSpecification:
      siteConfig.business.openingHoursSpecification?.map((item) => ({
        "@type": "OpeningHoursSpecification",

        dayOfWeek: item.dayOfWeek,

        opens: item.opens,

        closes: item.closes,
      })) || [],

    hasOfferCatalog: {
      "@type": "OfferCatalog",

      name: "Services de maçonnerie",

      itemListElement: [
        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            name: "Maçonnerie générale",
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            name: "Terrassement",
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            name: "Extension maison",
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            name: "Dalle béton",
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            name: "Ouverture mur porteur",
          },
        },
      ],
    },

    aggregateRating: {
      "@type": "AggregateRating",

      ratingValue: "5",

      reviewCount: "15",
    },

    sameAs: [
      siteConfig.business.socialProfiles.google || "",

      siteConfig.business.socialProfiles.facebook || "",

      siteConfig.business.socialProfiles.instagram || "",
    ].filter(Boolean),
  };
}
// Service Schema pour les pages services
export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    url: serviceUrl,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.business.name,
      url: siteConfig.siteUrl,
      telephone: siteConfig.business.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.business.address,
        addressLocality: siteConfig.business.city,
        postalCode: siteConfig.business.zipCode,
        addressCountry: siteConfig.business.country,
      },
    },
    areaServed: {
      "@type": "Region",
      name: "Nord-Isère",
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

// WebSite Schema avec SearchAction
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.business.name,
    url: siteConfig.siteUrl,
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
      name: siteConfig.business.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/DZ-maconnerie_logo1.webp`,
      },
    },
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

export function generateProjectSchema(
  title: string,
  description: string,
  image: string,
  city: string,
  url: string,
) {
  return {
    "@context": "https://schema.org",

    "@type": "ConstructionProject",

    name: title,

    description,

    image,

    url,

    location: {
      "@type": "City",
      name: city,
    },
  };
}

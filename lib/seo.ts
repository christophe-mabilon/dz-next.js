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
    "@type": "ConstructionCompany",
    "@id": `${siteConfig.siteUrl}/#business`,
    name: siteConfig.business.name,
    image: `${siteConfig.siteUrl}/og-image.jpg`,
    description: siteConfig.business.description,
    url: siteConfig.siteUrl,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address,
      addressLocality: siteConfig.business.city,
      postalCode: siteConfig.business.zipCode,
      addressCountry: siteConfig.business.country,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 45.537,
        longitude: 5.163,
      },
      geoRadius: 40, // Rayon en kilomètres
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "45.537",
      longitude: "5.163",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "15",
    },
    priceRange: "€€",
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

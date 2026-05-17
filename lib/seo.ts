import { Metadata } from 'next';
import { siteConfig, SEO_CONFIG } from '@/data/config';

export function generateMetadata(
  title: string,
  description: string,
  path: string = '',
  image?: string,
  ogType: 'website' | 'article' = 'website'
): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;

  return {
    title: `${title} | ${siteConfig.siteName}`,
    description,
    canonical: url,
    openGraph: {
      title,
      description,
      url,
      type: ogType,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image || siteConfig.ogImage],
    },
  };
}

// LocalBusiness Schema pour la page d'accueil
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.siteUrl}/#business`,
    name: siteConfig.business.name,
    image: `${siteConfig.siteUrl}/og-image.jpg`,
    description: siteConfig.business.description,
    url: siteConfig.siteUrl,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.business.address,
      addressLocality: siteConfig.business.city,
      postalCode: siteConfig.business.zipCode,
      addressCountry: siteConfig.business.country,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '42',
    },
    priceRange: '€€',
    sameAs: [
      siteConfig.business.socialProfiles.facebook || '',
      siteConfig.business.socialProfiles.instagram || '',
    ].filter(Boolean),
  };
}

// Service Schema pour les pages services
export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    url: serviceUrl,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.business.name,
      url: siteConfig.siteUrl,
      telephone: siteConfig.business.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.business.address,
        addressLocality: siteConfig.business.city,
        postalCode: siteConfig.business.zipCode,
        addressCountry: siteConfig.business.country,
      },
    },
    areaServed: {
      '@type': 'Region',
      name: 'Isère, Rhône',
    },
  };
}

// BreadcrumbList Schema
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.url}`,
    })),
  };
}

// FAQPage Schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Organization Schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.business.name,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo.png`,
    description: siteConfig.business.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.business.address,
      addressLocality: siteConfig.business.city,
      postalCode: siteConfig.business.zipCode,
      addressCountry: siteConfig.business.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.business.phone,
      contactType: 'Customer Service',
    },
    sameAs: [
      siteConfig.business.socialProfiles.facebook || '',
      siteConfig.business.socialProfiles.instagram || '',
    ].filter(Boolean),
  };
}

// WebSite Schema avec SearchAction
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.business.name,
    url: siteConfig.siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// Article Schema pour le blog
export function generateArticleSchema(
  title: string,
  description: string,
  content: string,
  image: string,
  datePublished: string,
  dateModified: string,
  author: string,
  articleUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.business.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };
}

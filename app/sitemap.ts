import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";
import { services } from "@/data/services";
import { articles } from "@/data/blog";
import { realisations } from "@/data/realisations";
import { cities } from "@/data/cities";

const BASE_URL = siteConfig.siteUrl;

// URL absolue d'une image locale (Google exige des URLs absolues dans le sitemap)
const img = (path?: string): string[] =>
  path ? [path.startsWith("http") ? path : `${BASE_URL}${path}`] : [];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/contact",
    "/services",
    "/realisations",
    "/blog",
    "/avis",
    "/villes",
    "/mentions-legales",
    "/politique-confidentialite",
    "/conditions",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
    images: route === "" ? img(siteConfig.ogImage) : undefined,
  }));

  const servicePages = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
    images: img(service.heroImage || service.image),
  }));

  const cityPages = cities.map((city) => ({
    url: `${BASE_URL}/villes/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: city.featured ? 0.8 : 0.6,
  }));

  // pages service × ville (maillage local)
  const serviceCityPages = services.flatMap((service) =>
    cities.map((city) => ({
      url: `${BASE_URL}/services/${service.slug}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: city.featured ? 0.7 : 0.5,
    })),
  );

  const blogPages = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: img(article.image),
  }));

  const realisationPages = realisations.map((realisation) => ({
    url: `${BASE_URL}/realisations/${realisation.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    // toutes les photos de la réalisation → indexation Google Images
    images: (realisation.images || []).flatMap((i) => img(i.src)),
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...serviceCityPages,
    ...blogPages,
    ...realisationPages,
  ];
}

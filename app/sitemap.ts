import type { MetadataRoute } from "next";

import { services } from "@/data/services";
import { articles } from "@/data/blog";
import { realisations } from "@/data/realisations";
import { cities } from "@/data/cities";

const BASE_URL = "https://www.dzmaconnerie.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/contact",
    "/services",
    "/realisations",
    "/blog",
    "/avis",
    "/mentions-legales",
    "/politique-confidentialite",
    "/conditions",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const servicePages = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const cityPages = cities.map((city) => ({
    url: `${BASE_URL}/villes/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPages = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const realisationPages = realisations.map((realisation) => ({
    url: `${BASE_URL}/realisations/${realisation.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...blogPages,
    ...realisationPages,
  ];
}
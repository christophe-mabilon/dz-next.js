import { Metadata } from "next";

import BlogPageClient from "@/components/blog/BlogPageClient";

import { generateMetadata as generatePageMetadata } from "@/lib/seo";

import { siteConfig } from "@/data/config";

const { business } = siteConfig;

export const metadata: Metadata = generatePageMetadata(
  `Blog maçonnerie en Isère | Conseils rénovation & terrassement | ${business.name}`,
  `Découvrez nos conseils en maçonnerie, rénovation, terrassement, dalle béton et extension maison en Isère et dans le Nord-Isère.`,
  "/blog",
  `${siteConfig.siteUrl}/og-blog.jpg`,
);

export default function BlogPage() {
  return <BlogPageClient />;
}

import { Metadata } from "next";

import BlogPageClient from "@/components/blog/BlogPageClient";

import {
  generateMetadata as generatePageMetadata,
  generateCollectionSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";

import { siteConfig } from "@/data/config";
import { articles } from "@/data/blog";

const { business } = siteConfig;

export const metadata: Metadata = generatePageMetadata(
  `Blog maçonnerie en Isère | Conseils rénovation & terrassement | ${business.name}`,
  `Découvrez nos conseils en maçonnerie, rénovation, terrassement, dalle béton et extension maison en Isère et dans le Nord-Isère.`,
  "/blog",
);

export default function BlogPage() {
  return (
    <>
      {/* Schema : liste des guides du blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateCollectionSchema(
              "Blog — guides et prix maçonnerie en Isère",
              "Guides pratiques, prix et conseils : terrassement, dalle béton, extension, rénovation en Nord-Isère.",
              "/blog",
              articles.map((a) => ({ name: a.title, url: `/blog/${a.slug}` })),
            ),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Blog", url: "/blog" },
            ]),
          ),
        }}
      />
      <BlogPageClient />
    </>
  );
}

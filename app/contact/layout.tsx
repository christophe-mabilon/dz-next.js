import { Metadata } from "next";
import {
  generateMetadata as generatePageMetadata,
  generateBreadcrumbSchema,
  BUSINESS_ID,
} from "@/lib/seo";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = generatePageMetadata(
  "Contact | DZ Maçonnerie – Devis gratuit en Isère",
  "Contactez DZ Maçonnerie pour un devis gratuit. Maçonnerie, terrassement, rénovation à Bourgoin-Jallieu et dans tout le Nord-Isère.",
  "/contact",
);

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteConfig.siteUrl}/contact#page`,
  name: "Contact — DZ Maçonnerie & Terrassement",
  url: `${siteConfig.siteUrl}/contact`,
  inLanguage: "fr-FR",
  isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
  about: { "@id": BUSINESS_ID },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Contact", url: "/contact" },
            ]),
          ),
        }}
      />
      {children}
    </>
  );
}

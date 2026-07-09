import { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = generatePageMetadata(
  "Contact | DZ Maçonnerie – Devis gratuit en Isère",
  "Contactez DZ Maçonnerie pour un devis gratuit. Maçonnerie, terrassement, rénovation à Bourgoin-Jallieu et dans tout le Nord-Isère.",
  "/contact",
  `${siteConfig.siteUrl}/og-contact.jpg`,
);

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.siteName,
    short_name: "DZ Maçonnerie",
    description: siteConfig.siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d9488",
    lang: "fr",
    icons: [
      {
        src: "/images/chantiers/DZ-maconnerie_logo1.webp",
        sizes: "any",
        type: "image/webp",
      },
    ],
  };
}

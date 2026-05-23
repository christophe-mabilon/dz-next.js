export interface Realisation {
  slug: string;
  title: string;
  city: string;
  service: string;
  date: string;
  description: string;
  content: string;
  images: {
    src: string;
    alt: string;
  }[];
  materials?: string[];
  keywords?: string[];
}

export const realisations: Realisation[] = [
  {
    slug: "extension-maison-bourgoin-jallieu",

    title: "Extension maison à Bourgoin-Jallieu",

    city: "Bourgoin-Jallieu",

    service: "Extension maison",

    date: "Mars 2024",

    description: "Extension moderne de 40m² avec ouvertures cintrées.",

    content:
      "Le client souhaitait agrandir son espace de vie avec une extension moderne parfaitement intégrée à la maison existante...",

    images: [
      {
        src: "/images/realisations/extension-bourgoin-1.webp",
        alt: "Extension maison Bourgoin-Jallieu",
      },
    ],

    materials: ["Parpaing", "Béton armé"],
    keywords: [
      "maçonnerie Bourgoin-Jallieu",
      "extension maison Bourgoin-Jallieu",
      "terrassement Isère",
      "entreprise maçonnerie Nord-Isère",
    ],
  },
];

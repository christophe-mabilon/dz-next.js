import { City } from "@/types";

export const cities: City[] = [
  {
    id: "1",
    slug: "bourgoin-jallieu",
    name: "Bourgoin-Jallieu",
    zipCode: "38300",
    region: "Isère",
    description:
      "Entreprise de maçonnerie à Bourgoin-Jallieu (38300) spécialisée en maçonnerie générale, rénovation, terrassement, dalle béton et extension maison.",
    keywords: [
      "maçon Bourgoin-Jallieu",
      "entreprise maçonnerie Bourgoin-Jallieu",
      "terrassement Bourgoin-Jallieu",
      "dalle béton Bourgoin",
      "devis maçon Bourgoin-Jallieu",
    ],
  },
  {
    id: "2",
    slug: "artas",
    name: "Artas",
    zipCode: "38440",
    region: "Isère",
    description:
      "Entreprise de maçonnerie à Artas (38440) pour construction, rénovation, terrassement et travaux de maçonnerie générale.",
    keywords: [
      "maçon Artas",
      "maçonnerie Artas",
      "terrassement Artas",
      "rénovation maison Artas",
      "devis maçon Artas",
    ],
  },
  {
    id: "3",
    slug: "saint-jean-de-bournay",
    name: "Saint-Jean-de-Bournay",
    zipCode: "38440",
    region: "Isère",
    description:
      "Maçon à Saint-Jean-de-Bournay (38440) pour travaux de maçonnerie générale, rénovation, terrassement et aménagement extérieur.",
    keywords: [
      "maçon Saint-Jean-de-Bournay",
      "maçonnerie 38440",
      "terrassement Saint-Jean-de-Bournay",
      "rénovation maison Saint-Jean-de-Bournay",
      "devis maçon Saint-Jean-de-Bournay",
    ],
  },

  {
    id: "4",
    slug: "l-isle-d-abeau",
    name: "L'Isle-d'Abeau",
    zipCode: "38080",
    region: "Isère",
    description:
      "Entreprise de maçonnerie à L'Isle-d'Abeau (38080) pour rénovation, extension maison, dalle béton et travaux de gros œuvre.",
    keywords: [
      "maçon L'Isle-d'Abeau",
      "maçonnerie 38080",
      "extension maison L'Isle-d'Abeau",
      "dalle béton L'Isle-d'Abeau",
      "devis maçon L'Isle-d'Abeau",
    ],
  },

  {
    id: "5",
    slug: "villefontaine",
    name: "Villefontaine",
    zipCode: "38090",
    region: "Isère",
    description:
      "Maçon à Villefontaine (38090) spécialisé en maçonnerie générale, terrassement, rénovation et construction de murs extérieurs.",
    keywords: [
      "maçon Villefontaine",
      "maçonnerie 38090",
      "terrassement Villefontaine",
      "mur extérieur Villefontaine",
      "devis maçon Villefontaine",
    ],
  },
  {
    id: "6",
    slug: "la-verpilliere",
    name: "La Verpillière",
    zipCode: "38290",
    region: "Isère",
    description:
      "Maçon à La Verpillière (38290) pour travaux de maçonnerie générale, rénovation et aménagement extérieur.",
    keywords: [
      "maçon La Verpillière",
      "maçonnerie 38290",
      "rénovation La Verpillière",
      "terrassement La Verpillière",
      "devis maçon La Verpillière",
    ],
  },
  {
    id: "7",
    slug: "la-tour-du-pin",
    name: "La Tour-du-Pin",
    zipCode: "38110",
    region: "Isère",
    description:
      "Entreprise de maçonnerie à La Tour-du-Pin (38110) spécialisée en maçonnerie générale, rénovation, terrassement et dalle béton.",
    keywords: [
      "maçon La Tour-du-Pin",
      "maçonnerie 38110",
      "terrassement La Tour-du-Pin",
      "dalle béton La Tour-du-Pin",
      "devis maçon La Tour-du-Pin",
    ],
  },
  {
    id: "8",
    slug: "vienne",
    name: "Vienne",
    zipCode: "38200",
    region: "Isère",
    description:
      "Entreprise de maçonnerie à Vienne (38200) pour travaux de maçonnerie générale, rénovation, terrassement, extension maison et dalle béton.",
    keywords: [
      "maçon Vienne",
      "maçonnerie 38200",
      "terrassement Vienne",
      "rénovation maison Vienne",
      "devis maçon Vienne",
    ],
  },
  {
    id: "9",
    slug: "saint-quentin-fallavier",
    name: "Saint-Quentin-Fallavier",
    zipCode: "38070",
    region: "Isère",
    description:
      "Entreprise de maçonnerie à Saint-Quentin-Fallavier (38070) spécialisée en maçonnerie générale, rénovation, terrassement et aménagement extérieur.",
    keywords: [
      "maçon Saint-Quentin-Fallavier",
      "maçonnerie 38070",
      "terrassement Saint-Quentin-Fallavier",
      "rénovation maison Saint-Quentin-Fallavier",
      "devis maçon Saint-Quentin-Fallavier",
    ],
  },
];

export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find((c) => c.slug === slug);
};

export const getCityById = (id: string): City | undefined => {
  return cities.find((c) => c.id === id);
};

export const getCitySlugs = (): string[] => {
  return cities.map((c) => c.slug);
};

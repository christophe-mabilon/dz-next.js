import { City } from '@/types';

export const cities: City[] = [
  {
    id: '1',
    slug: 'bourgoin-jallieu',
    name: 'Bourgoin-Jallieu',
    zipCode: '38300',
    region: 'Isère',
    description: 'Maçon à Bourgoin-Jallieu (38300) pour tous vos travaux de maçonnerie générale, rénovation et terrassement.',
    keywords: ['maçon Bourgoin-Jallieu', 'maçonnerie 38300', 'devis gratuit Bourgoin'],
  },
  {
    id: '2',
    slug: 'vienne',
    name: 'Vienne',
    zipCode: '38200',
    region: 'Isère',
    description: 'Maçon à Vienne (38200), expert en maçonnerie générale et rénovation de bâtiments.',
    keywords: ['maçon Vienne', 'maçonnerie 38200', 'devis gratuit Vienne'],
  },
  {
    id: '3',
    slug: 'lisle-dabeau',
    name: "L'Isle-d'Abeau",
    zipCode: '38080',
    region: 'Isère',
    description: "Maçon à L'Isle-d'Abeau (38080) pour rénovation, extension et construction maçonnerie.",
    keywords: ["maçon L'Isle-d'Abeau", 'maçonnerie 38080', "devis gratuit L'Isle-d'Abeau"],
  },
  {
    id: '4',
    slug: 'villefontaine',
    name: 'Villefontaine',
    zipCode: '38090',
    region: 'Isère',
    description: 'Maçon à Villefontaine (38090) - Services complètes en maçonnerie générale et terrassement.',
    keywords: ['maçon Villefontaine', 'maçonnerie 38090', 'devis gratuit Villefontaine'],
  },
  {
    id: '5',
    slug: 'saint-jean-de-bournay',
    name: 'Saint-Jean-de-Bournay',
    zipCode: '38440',
    region: 'Isère',
    description: 'Maçon à Saint-Jean-de-Bournay (38440) pour tous vos travaux maçonnerie.',
    keywords: ['maçon Saint-Jean-de-Bournay', 'maçonnerie 38440', 'devis gratuit Saint-Jean'],
  },
  {
    id: '6',
    slug: 'meyzieu',
    name: 'Meyzieu',
    zipCode: '69330',
    region: 'Rhône',
    description: 'Maçon à Meyzieu (69330) - Construction et rénovation maçonnerie générale.',
    keywords: ['maçon Meyzieu', 'maçonnerie 69330', 'devis gratuit Meyzieu'],
  },
];

export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find(c => c.slug === slug);
};

export const getCityById = (id: string): City | undefined => {
  return cities.find(c => c.id === id);
};

export const getCitySlugs = (): string[] => {
  return cities.map(c => c.slug);
};

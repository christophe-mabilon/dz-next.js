import { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    slug: 'maconnerie-neuf',
    name: 'Maçonnerie générale neuf',
    description: 'Construction de gros œuvre et maçonnerie générale pour bâtiments neufs',
    longDescription: 'Nous assurons la construction complète du gros œuvre pour vos projets neufs. Maçonnerie de qualité, respectant les normes RT 2012 et les standards de construction modernes. Nos équipes expérimentées garantissent une réalisation conforme aux plans et délais.',
    keywords: ['maçonnerie neuf', 'gros œuvre', 'construction neuf', 'maçonnerie bâtiment'],
  },
  {
    id: '2',
    slug: 'renovation-maconnerie',
    name: 'Rénovation maçonnerie',
    description: 'Travaux de rénovation de murs, enduits, et ravalement',
    longDescription: 'Spécialistes en rénovation maçonnerie, nous prenons en charge le ravalement, la réfection des murs, les enduits de façade et l\'étanchéité. Restauration de bâtiments anciens et mise aux normes de l\'existant.',
    keywords: ['rénovation maçonnerie', 'ravalement', 'enduit façade', 'réparation murs'],
  },
  {
    id: '3',
    slug: 'agrandissement-maison',
    name: 'Agrandissement maison',
    description: 'Extension et surélévation de votre habitation',
    longDescription: 'Augmentez la surface habitable de votre maison avec nos solutions d\'agrandissement. Extension latérale, surélévation ou ajout d\'étage. Nous gérons l\'ensemble du projet de la conception à la finition.',
    keywords: ['agrandissement maison', 'extension maison', 'surélévation', 'augmentation surface'],
  },
  {
    id: '4',
    slug: 'extension-maison',
    name: 'Extension maison',
    description: 'Création de pièces supplémentaires et extension latérale',
    longDescription: 'Ajouter une chambre, un garage, une cuisine plus grande ou une véranda à votre maison. Nos extensions s\'intègrent parfaitement à votre architecture existante.',
    keywords: ['extension maison', 'véranda', 'garage maçonnerie', 'extension latérale'],
  },
  {
    id: '5',
    slug: 'piscine-terrasse',
    name: 'Piscine et terrasse',
    description: 'Construction de piscines et terrasses en maçonnerie',
    longDescription: 'Créez votre espace extérieur de détente. Construction de piscines, terrasses en dalle béton, allées, zones de loisirs. Aménagements durables et esthétiques.',
    keywords: ['piscine maçonnerie', 'terrasse béton', 'construction piscine', 'dalle terrasse'],
  },
  {
    id: '6',
    slug: 'clotures-murs',
    name: 'Clôtures et murs',
    description: 'Construction de clôtures, murs de soutènement et murs de séparation',
    longDescription: 'Clôtures en parpaing, pierre, béton. Murs de séparation et de soutènement. Aménagement des terrains avec gabions ou éléments décoratifs.',
    keywords: ['clôture', 'mur de clôture', 'mur de soutènement', 'mur de séparation'],
  },
  {
    id: '7',
    slug: 'terrassement',
    name: 'Terrassement',
    description: 'Préparation de terrain, dallage et assainissement',
    longDescription: 'Préparation et terrassement des terrains pour vos constructions. Dallage, drainage, assainissement. Travaux de terrassement pour aménagement d\'accès et routes.',
    keywords: ['terrassement', 'préparation terrain', 'dallage', 'assainissement terrain'],
  },
  {
    id: '8',
    slug: 'abri-de-jardin',
    name: 'Abri de jardin',
    description: 'Construction d\'abris et cabanons en maçonnerie',
    longDescription: 'Créez un abri fonctionnel pour stocker vos outils et équipements. Cabanons en parpaing, pierre ou béton, avec finition adaptée à votre jardin.',
    keywords: ['abri de jardin', 'cabanon', 'construction abri', 'cabane jardin'],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(s => s.id === id);
};

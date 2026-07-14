import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    slug: "maconnerie-neuf",
    name: "Maçonnerie générale neuf",
    description:
      "Construction de maisons, garages, bâtiments et ouvrages en gros œuvre avec des fondations solides et une maçonnerie durable.",
    longDescription:
      "Nous assurons la construction complète du gros œuvre pour vos projets neufs. Maçonnerie de qualité, respectant les normes RT 2012 et les standards de construction modernes. Nos équipes expérimentées garantissent une réalisation conforme aux plans et délais.",
    image: "/images/services/maconnerie-generale.webp",
    heroImage: "/images/services/maconnerie-maison.webp",
    galleryImages: [
      "/images/services/maconnerie-generale.webp",
      "/images/services/maconnerie-maison.webp",
      "/images/chantiers/artisan-macon.webp",
    ],
    processSteps: [
      "Étude de votre projet et relevé de terrain",
      "Terrassement et réalisation des fondations",
      "Montage des murs et structure gros œuvre",
      "Finitions et réception du chantier",
    ],
    keywords: [
      "maçonnerie neuf",
      "gros œuvre",
      "construction neuf",
      "maçonnerie bâtiment",
    ],
  },
  {
    id: "2",
    slug: "renovation-maconnerie",
    name: "Rénovation maçonnerie",
    description:
      "Rénovation de maçonnerie, ouverture de murs porteurs, reprises structurelles et transformation de bâtiments anciens ou récents.",
    longDescription:
      "Spécialistes en rénovation maçonnerie, nous prenons en charge la réfection des murs, les reprises structurelles et les ouvertures de murs porteurs. Restauration de bâtiments anciens et mise aux normes de l'existant.",
    image: "/images/services/renovations-maison.webp",
    heroImage: "/images/services/renovations-maison.webp",
    galleryImages: [
      "/images/services/renovations-maison.webp",
      "/images/blog/facade-maison.webp",
      "/images/blog/facade-maison2.webp",
    ],
    processSteps: [
      "Diagnostic de l'état existant et devis détaillé",
      "Préparation des surfaces et protection du chantier",
      "Réalisation des travaux de rénovation",
      "Nettoyage et contrôle qualité final",
    ],
    keywords: [
      "rénovation maçonnerie",
      "ouverture mur porteur",
      "reprise en sous-œuvre",
      "réparation murs",
    ],
  },
  {
    id: "3",
    slug: "agrandissement-maison",
    name: "Agrandissement maison",
    description:
      "Agrandissez votre habitation avec une extension sur mesure : création de nouvelles pièces, garage ou surélévation.",
    longDescription:
      "Augmentez la surface habitable de votre maison avec nos solutions d'agrandissement. Extension latérale, surélévation ou ajout d'étage. Nous gérons l'ensemble du projet de la conception à la finition.",
    image: "/images/services/agrandissement-maison.webp",
    heroImage: "/images/services/agrandissement-maison.webp",
    galleryImages: [
      "/images/services/agrandissement-maison.webp",
      "/images/services/extension.webp",
      "/images/blog/extension-maison.webp",
    ],
    processSteps: [
      "Étude de faisabilité et dépôt du permis de construire",
      "Terrassement et fondations de l'extension",
      "Construction des murs et toiture",
      "Raccordement à l'existant et finitions",
    ],
    keywords: [
      "agrandissement maison",
      "extension maison",
      "surélévation",
      "augmentation surface",
    ],
  },
  {
    id: "4",
    slug: "extension-maison",
    name: "Extension maison",
    description:
      "Réalisation d'extensions de maison pour gagner en surface habitable tout en respectant l'architecture existante.",
    longDescription:
      "Ajouter une chambre, un garage, une cuisine plus grande ou une véranda à votre maison. Nos extensions s'intègrent parfaitement à votre architecture existante.",
    image: "/images/services/extension-maison.webp",
    heroImage: "/images/services/extension.webp",
    galleryImages: [
      "/images/services/extension-maison.webp",
      "/images/services/extension.webp",
      "/images/blog/extension-maison.webp",
    ],
    processSteps: [
      "Visite technique et étude d'intégration architecturale",
      "Obtention des autorisations et préparation du chantier",
      "Gros œuvre de l'extension",
      "Jonction avec l'existant et finitions intérieures",
    ],
    keywords: [
      "extension maison",
      "véranda",
      "garage maçonnerie",
      "extension latérale",
    ],
  },
  {
    id: "5",
    slug: "piscine-terrasse",
    name: "Piscine et terrasse",
    description:
      "Construction de piscines maçonnées, plages de piscine et terrasses en béton adaptées à vos aménagements extérieurs.",
    longDescription:
      "Créez votre espace extérieur de détente. Construction de piscines, terrasses en dalle béton, allées, zones de loisirs. Aménagements durables et esthétiques.",
    image: "/images/services/piscine.webp",
    heroImage: "/images/services/piscine.webp",
    galleryImages: [
      "/images/services/piscine.webp",
      "/images/blog/terrasse-beton.webp",
      "/images/blog/terrasse-beton-exterieure-maison.webp",
    ],
    processSteps: [
      "Étude du terrain et conception du projet extérieur",
      "Terrassement et préparation du sol",
      "Réalisation du coffrage béton et ferraillage",
      "Finitions et aménagements paysagers",
    ],
    keywords: [
      "piscine maçonnerie",
      "terrasse béton",
      "construction piscine",
      "dalle terrasse",
    ],
  },
  {
    id: "6",
    slug: "clotures-murs",
    name: "Clôtures et murs",
    description:
      "Réalisation de murs de clôture, murets, murs de soutènement et séparations extérieures solides et durables.",
    longDescription:
      "Clôtures en parpaing, pierre, béton. Murs de séparation et de soutènement. Aménagement des terrains avec gabions ou éléments décoratifs.",
    image: "/images/services/realisation-cloture-muret.webp",
    heroImage: "/images/services/realisation-cloture-muret.webp",
    galleryImages: [
      "/images/services/realisation-cloture-muret.webp",
      "/images/blog/muret-beton-jardin.webp",
      "/images/blog/pourquoi-construire-un-mur-de-soutènement.webp",
    ],
    processSteps: [
      "Bornage du terrain et étude des contraintes",
      "Fouilles et fondations du mur",
      "Montage en parpaing, pierre ou béton banché",
      "Enduit, chaperon et finitions",
    ],
    keywords: [
      "clôture",
      "mur de clôture",
      "mur de soutènement",
      "mur de séparation",
    ],
  },
  {
    id: "7",
    slug: "terrassement",
    name: "Terrassement",
    description:
      "Préparation du terrain, décaissement, nivellement et fouilles pour assurer des fondations solides avant vos travaux.",
    longDescription:
      "Préparation et terrassement des terrains pour vos constructions. Dallage, drainage et gestion des eaux pluviales. Travaux de terrassement pour aménagement d'accès et routes.",
    image: "/images/services/terrassement.webp",
    heroImage: "/images/services/terrassement.webp",
    galleryImages: [
      "/images/services/terrassement.webp",
      "/images/blog/tractopelle-action.webp",
      "/images/blog/terrassement-decaissement.webp",
    ],
    processSteps: [
      "Analyse géotechnique et plan de terrassement",
      "Décaissement et évacuation des terres",
      "Nivellement et compactage du sol",
      "Pose des réseaux et remise en état",
    ],
    keywords: [
      "terrassement",
      "préparation terrain",
      "dallage",
      "nivellement terrain",
    ],
  },
  {
    id: "8",
    slug: "abri-de-jardin",
    name: "Abri de jardin",
    description:
      "Construction d'abris de jardin, locaux techniques et dépendances en maçonnerie, adaptés à vos besoins.",
    longDescription:
      "Créez un abri fonctionnel pour stocker vos outils et équipements. Cabanons en parpaing, pierre ou béton, avec finition adaptée à votre jardin.",
    image: "/images/services/abri-de-jardin.webp",
    heroImage: "/images/services/abri-de-jardin.webp",
    galleryImages: [
      "/images/services/abri-de-jardin.webp",
      "/images/services/maconnerie-generale.webp",
      "/images/chantiers/artisan-macon.webp",
    ],
    processSteps: [
      "Choix des dimensions et matériaux",
      "Dalle de fondation et implantation",
      "Montage des murs et couverture",
      "Menuiseries et finitions extérieures",
    ],
    keywords: [
      "abri de jardin",
      "cabanon",
      "construction abri",
      "cabane jardin",
    ],
  },
  {
    id: "9",
    slug: "dalle-beton",
    name: "Dalle béton",
    description:
      "Réalisation de dalles béton pour maisons, garages, terrasses, abris de jardin et autres projets de construction.",
    longDescription:
      "Spécialistes en création de dalles béton. Dallages pour habitations, terrasses, allées, parkings. Béton armé de qualité avec finition lisse ou striée selon vos préférences. Travaux durables et résistants aux charges.",
    image: "/images/services/dalles.webp",
    heroImage: "/images/services/dalles.webp",
    galleryImages: [
      "/images/services/dalles.webp",
      "/images/blog/coulage-beton.webp",
      "/images/blog/comment-realiser-une-dalle-beton-pour-garage.webp",
    ],
    processSteps: [
      "Mesure de la surface et calcul du volume béton",
      "Décaissement et pose du hérisson drainant",
      "Ferraillage et coulage du béton",
      "Lissage, traitement et cure du béton",
    ],
    keywords: [
      "dalle béton",
      "dallage béton",
      "terrasse béton",
      "dalle garage",
      "béton coulé",
    ],
  },
  {
    id: "10",
    slug: "dalles-sur-plot",
    name: "Dalles sur plot",
    description:
      "Pose de dalles sur plots pour créer des terrasses modernes, esthétiques et parfaitement drainées.",
    longDescription:
      "Solutions modernes de dalles sur plots pour terrasses, accès surélevés et aménagements extérieurs. Réglables et évolutives, parfaites pour les terrains en pente. Drainage excellent et rapidité d'installation. Esthétique contemporaine et polyvalente.",
    image: "/images/services/dalles-sur-plot.webp",
    heroImage: "/images/services/dalles-sur-plot.webp",
    galleryImages: [
      "/images/services/dalles-sur-plot.webp",
      "/images/blog/terrasse-beton.webp",
      "/images/blog/terrasse-beton-exterieure-maison.webp",
    ],
    processSteps: [
      "Étude du niveau et choix des dalles",
      "Préparation et mise à niveau du sol",
      "Pose des plots réglables",
      "Calepinage et pose des dalles",
    ],
    keywords: [
      "dalles sur plot",
      "terrasse sur plot",
      "dalle surélevée",
      "plot terrasse",
      "aménagement extérieur",
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((s) => s.slug === slug);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find((s) => s.id === id);
};

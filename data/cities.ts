import { City } from "@/types";

export const cities: City[] = [
  {
    id: "1",
    slug: "bourgoin-jallieu",
    name: "Bourgoin-Jallieu",
    zipCode: "38300",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",
    featured: true,
    population: "29 000 habitants",

    description:
      "Entreprise de maçonnerie à Bourgoin-Jallieu spécialisée en rénovation, terrassement, extension maison et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie intervient à Bourgoin-Jallieu pour tous vos projets de construction, rénovation et terrassement.",

    nearbyCities: [
      "L'Isle-d'Abeau",
      "Villefontaine",
      "Nivolas-Vermelle",
      "La Verpillière",
    ],

    neighborhoods: ["Champaret", "Mozas", "Pré-Bénit", "Centre-ville"],

    terrainTypes: [
      "terrain argileux",
      "lotissements récents",
      "terrains pavillonnaires",
    ],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "mur de clôture",
      "extension maison",
      "terrassement terrain",
    ],

    landmarks: ["gare SNCF", "centre-ville", "zone commerciale"],

    architectureStyles: [
      "maisons contemporaines",
      "pavillons récents",
      "maisons traditionnelles",
    ],

    commonIssues: ["terrains en pente", "humidité", "stabilité des fondations"],

    seoVariations: [
      "artisan maçon",
      "entreprise de maçonnerie",
      "spécialiste gros œuvre",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Bourgoin-Jallieu",
      "entreprise maçonnerie Bourgoin-Jallieu",
      "terrassement Bourgoin-Jallieu",
      "dalle béton Bourgoin",
      "devis maçon Bourgoin-Jallieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Bourgoin-Jallieu ?",
        answer:
          "Oui, nous intervenons dans tous les quartiers de Bourgoin-Jallieu et les communes voisines.",
      },
      {
        question: "Réalisez-vous des terrasses béton ?",
        answer:
          "Nous réalisons des terrasses béton, dalles et aménagements extérieurs sur mesure.",
      },
    ],
  },

  {
    id: "2",
    slug: "vienne",
    name: "Vienne",
    zipCode: "38200",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",
    featured: true,
    population: "30 000 habitants",

    description:
      "Entreprise de maçonnerie à Vienne spécialisée en rénovation, terrassement, gros œuvre et extension maison.",

    introduction:
      "DZ Maçonnerie accompagne particuliers et professionnels à Vienne pour tous types de travaux de maçonnerie.",

    nearbyCities: [
      "Seyssuel",
      "Pont-Évêque",
      "Chasse-sur-Rhône",
      "Reventin-Vaugris",
    ],

    neighborhoods: [
      "Centre historique",
      "Estressin",
      "Malissol",
      "Mont Salomon",
    ],

    terrainTypes: ["terrains en pente", "sols urbains", "terrains rocheux"],

    commonProjects: [
      "rénovation façade",
      "terrasse béton",
      "mur de soutènement",
      "extension maison",
    ],

    landmarks: [
      "Temple d’Auguste",
      "Théâtre antique",
      "centre-ville historique",
    ],

    architectureStyles: [
      "maisons anciennes",
      "immeubles urbains",
      "maisons de ville",
    ],

    commonIssues: ["humidité", "rénovation ancienne", "fissures façade"],

    seoVariations: [
      "entreprise de maçonnerie",
      "artisan maçon",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Vienne",
      "maçonnerie Vienne",
      "terrassement Vienne",
      "devis maçon Vienne",
    ],

    faq: [
      {
        question: "Intervenez-vous dans le centre de Vienne ?",
        answer:
          "Oui, nous intervenons dans tous les quartiers de Vienne et les communes voisines.",
      },
    ],
  },

  {
    id: "3",
    slug: "villefontaine",
    name: "Villefontaine",
    zipCode: "38090",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "19 000 habitants",

    description:
      "Maçon à Villefontaine spécialisé en maçonnerie générale, terrassement, rénovation et construction extérieure.",

    introduction:
      "DZ Maçonnerie réalise vos travaux à Villefontaine avec expertise et garantie décennale.",

    nearbyCities: ["L'Isle-d'Abeau", "La Verpillière", "Vaulx-Milieu"],

    neighborhoods: ["Les Roches", "Servenoble", "Saint-Bonnet"],

    terrainTypes: [
      "lotissements modernes",
      "terrains plats",
      "zones pavillonnaires",
    ],

    commonProjects: ["terrasse béton", "garage", "clôture", "extension"],

    landmarks: ["centre-ville", "zones résidentielles"],

    architectureStyles: ["maisons modernes", "pavillons récents"],

    commonIssues: ["gestion eaux pluviales", "terrains argileux"],

    seoVariations: ["maçon professionnel", "spécialiste terrassement"],

    keywords: [
      "maçon Villefontaine",
      "maçonnerie 38090",
      "terrassement Villefontaine",
      "devis maçon Villefontaine",
    ],
  },

  {
    id: "4",
    slug: "l-isle-d-abeau",
    name: "L'Isle-d'Abeau",
    zipCode: "38080",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",
    featured: true,
    population: "17 000 habitants",

    description:
      "Entreprise de maçonnerie à L'Isle-d'Abeau pour rénovation, gros œuvre, terrassement et extension maison.",

    introduction:
      "DZ Maçonnerie intervient à L'Isle-d'Abeau pour tous vos projets de maçonnerie générale.",

    nearbyCities: ["Villefontaine", "Bourgoin-Jallieu", "Vaulx-Milieu"],

    neighborhoods: ["Pierre Louve", "Triforium", "Centre-ville"],

    terrainTypes: ["terrains pavillonnaires", "lotissements"],

    commonProjects: ["terrassement", "dalle béton", "extension maison"],

    landmarks: ["centre commercial", "gare SNCF"],

    architectureStyles: ["maisons modernes", "constructions récentes"],

    commonIssues: ["stabilité terrain", "gestion fondations"],

    seoVariations: ["entreprise de maçonnerie", "artisan maçon"],

    keywords: [
      "maçon L'Isle-d'Abeau",
      "maçonnerie 38080",
      "extension maison L'Isle-d'Abeau",
      "devis maçon L'Isle-d'Abeau",
    ],
  },

  {
    id: "5",
    slug: "saint-quentin-fallavier",
    name: "Saint-Quentin-Fallavier",
    zipCode: "38070",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",
    featured: true,
    population: "6500 habitants",

    description:
      "Entreprise de maçonnerie à Saint-Quentin-Fallavier spécialisée en rénovation, terrassement et gros œuvre.",

    introduction:
      "DZ Maçonnerie accompagne vos projets à Saint-Quentin-Fallavier avec devis gratuit et intervention rapide.",

    nearbyCities: ["Heyrieux", "La Verpillière", "Villefontaine"],

    neighborhoods: ["centre-ville", "zones pavillonnaires"],

    terrainTypes: ["terrains plats", "zones résidentielles"],

    commonProjects: ["dalle béton", "terrasse béton", "garage"],

    landmarks: ["zone industrielle", "centre-ville"],

    architectureStyles: ["maisons modernes", "habitations pavillonnaires"],

    commonIssues: ["fondations", "gestion eaux"],

    seoVariations: ["maçon professionnel", "spécialiste maçonnerie"],

    keywords: [
      "maçon Saint-Quentin-Fallavier",
      "maçonnerie 38070",
      "terrassement Saint-Quentin-Fallavier",
    ],
  },
  {
    id: "6",
    slug: "la-verpilliere",
    name: "La Verpillière",
    zipCode: "38290",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",
    featured: true,
    population: "8 000 habitants",

    description:
      "Entreprise de maçonnerie à La Verpillière spécialisée en rénovation, terrassement, extension maison et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à La Verpillière pour tous vos projets de maçonnerie générale, rénovation et terrassement.",

    nearbyCities: [
      "Villefontaine",
      "Saint-Quentin-Fallavier",
      "Heyrieux",
      "Vaulx-Milieu",
    ],

    neighborhoods: [
      "centre-ville",
      "quartiers résidentiels",
      "zones pavillonnaires",
    ],

    terrainTypes: [
      "terrains plats",
      "zones résidentielles",
      "lotissements récents",
    ],

    commonProjects: [
      "terrasse béton",
      "mur de clôture",
      "garage",
      "dalle béton",
      "extension maison",
    ],

    landmarks: ["gare SNCF", "centre-ville", "zones pavillonnaires"],

    architectureStyles: [
      "maisons modernes",
      "pavillons récents",
      "maisons individuelles",
    ],

    commonIssues: ["gestion eaux pluviales", "fondations", "stabilité terrain"],

    seoVariations: [
      "artisan maçon",
      "entreprise de maçonnerie",
      "maçon professionnel",
      "spécialiste terrassement",
    ],

    keywords: [
      "maçon La Verpillière",
      "maçonnerie 38290",
      "terrassement La Verpillière",
      "dalle béton La Verpillière",
      "devis maçon La Verpillière",
    ],

    faq: [
      {
        question: "Intervenez-vous à La Verpillière ?",

        answer:
          "Oui, nous intervenons dans tous les quartiers de La Verpillière et les communes voisines.",
      },

      {
        question: "Réalisez-vous des extensions maison ?",

        answer:
          "Oui, nous réalisons tous types d’extensions maison et travaux de gros œuvre à La Verpillière.",
      },
    ],
  },

  {
    id: "7",
    slug: "la-tour-du-pin",
    name: "La Tour-du-Pin",
    zipCode: "38110",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",
    featured: true,
    population: "8 500 habitants",

    description:
      "Entreprise de maçonnerie à La Tour-du-Pin spécialisée en rénovation, terrassement, gros œuvre et dalle béton.",

    introduction:
      "DZ Maçonnerie accompagne particuliers et professionnels à La Tour-du-Pin pour tous leurs projets de maçonnerie.",

    nearbyCities: [
      "Rochetoirin",
      "Saint-Clair-de-la-Tour",
      "Cessieu",
      "Nivolas-Vermelle",
    ],

    neighborhoods: ["centre-ville", "quartiers résidentiels"],

    terrainTypes: [
      "terrains en pente",
      "sols argileux",
      "zones pavillonnaires",
    ],

    commonProjects: [
      "dalle béton",
      "terrassement",
      "extension maison",
      "mur de soutènement",
    ],

    landmarks: ["centre-ville", "gare SNCF"],

    architectureStyles: [
      "maisons traditionnelles",
      "maisons anciennes",
      "pavillons",
    ],

    commonIssues: ["terrain en pente", "humidité", "fondations"],

    seoVariations: [
      "entreprise de maçonnerie",
      "artisan maçon",
      "maçon rénovation",
    ],

    keywords: [
      "maçon La Tour-du-Pin",
      "maçonnerie 38110",
      "terrassement La Tour-du-Pin",
      "dalle béton La Tour-du-Pin",
      "devis maçon La Tour-du-Pin",
    ],

    faq: [
      {
        question: "Proposez-vous vos services à La Tour-du-Pin ?",

        answer:
          "Oui, DZ Maçonnerie intervient à La Tour-du-Pin et dans toutes les communes voisines.",
      },

      {
        question: "Réalisez-vous des murs de soutènement ?",

        answer:
          "Oui, nous réalisons des murs de soutènement adaptés aux terrains en pente de la région.",
      },
    ],
  },

  {
    id: "8",
    slug: "saint-jean-de-bournay",
    name: "Saint-Jean-de-Bournay",
    zipCode: "38440",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",
    featured: true,
    population: "4 800 habitants",

    description:
      "Maçon à Saint-Jean-de-Bournay pour rénovation, terrassement, maçonnerie générale et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Saint-Jean-de-Bournay pour tous vos travaux de construction et rénovation.",

    nearbyCities: [
      "Artas",
      "Meyrieu-les-Étangs",
      "Villeneuve-de-Marc",
      "Chatonnay",
    ],

    neighborhoods: ["centre-ville", "zones pavillonnaires"],

    terrainTypes: [
      "terrains agricoles",
      "sols argileux",
      "terrains résidentiels",
    ],

    commonProjects: ["terrasse béton", "clôture", "garage", "extension"],

    landmarks: ["centre historique", "place du village"],

    architectureStyles: ["maisons traditionnelles", "maisons rurales"],

    commonIssues: ["drainage", "gestion humidité"],

    seoVariations: [
      "artisan maçon",
      "spécialiste maçonnerie",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Saint-Jean-de-Bournay",
      "maçonnerie 38440",
      "terrassement Saint-Jean-de-Bournay",
      "devis maçon Saint-Jean-de-Bournay",
    ],

    faq: [
      {
        question: "Intervenez-vous à Saint-Jean-de-Bournay ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Saint-Jean-de-Bournay et dans les communes voisines.",
      },
    ],
  },

  {
    id: "9",
    slug: "artas",
    name: "Artas",
    zipCode: "38440",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",
    featured: true,
    population: "1 900 habitants",

    description:
      "Entreprise de maçonnerie à Artas spécialisée en rénovation, terrassement, dalle béton et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants d’Artas pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Saint-Jean-de-Bournay", "Meyrieu-les-Étangs", "Chatonnay"],

    neighborhoods: ["centre village", "zones résidentielles"],

    terrainTypes: ["terrains ruraux", "terrains en pente"],

    commonProjects: ["dalle béton", "terrassement", "terrasse béton"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons traditionnelles"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: ["maçon professionnel", "entreprise maçonnerie"],

    keywords: [
      "maçon Artas",
      "maçonnerie Artas",
      "terrassement Artas",
      "devis maçon Artas",
    ],

    faq: [
      {
        question: "Intervenez-vous à Artas ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale et terrassement à Artas et dans les environs.",
      },
    ],
  },
  {
    id: "10",
    slug: "heyrieux",
    name: "Heyrieux",
    zipCode: "38540",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",
    featured: true,
    population: "5 000 habitants",

    description:
      "Entreprise de maçonnerie à Heyrieux spécialisée en rénovation, terrassement, dalle béton et extension maison.",

    introduction:
      "DZ Maçonnerie intervient à Heyrieux pour tous vos projets de maçonnerie générale et aménagement extérieur.",

    nearbyCities: ["Saint-Quentin-Fallavier", "Diémoz", "Valencin", "Grenay"],

    neighborhoods: [
      "centre-ville",
      "quartiers résidentiels",
      "zones pavillonnaires",
    ],

    terrainTypes: ["terrains plats", "sols argileux", "zones résidentielles"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
      "mur de clôture",
    ],

    landmarks: ["centre du village", "zones pavillonnaires"],

    architectureStyles: [
      "maisons individuelles",
      "pavillons récents",
      "maisons traditionnelles",
    ],

    commonIssues: ["gestion humidité", "fondations", "drainage"],

    seoVariations: [
      "artisan maçon",
      "entreprise de maçonnerie",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Heyrieux",
      "maçonnerie Heyrieux",
      "terrassement Heyrieux",
      "dalle béton Heyrieux",
      "devis maçon Heyrieux",
    ],

    faq: [
      {
        question: "Intervenez-vous à Heyrieux ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Heyrieux et dans les communes voisines.",
      },

      {
        question: "Réalisez-vous des extensions maison à Heyrieux ?",

        answer:
          "Oui, nous réalisons des extensions maison, garages et travaux de gros œuvre sur mesure.",
      },
    ],
  },

  {
    id: "11",
    slug: "tignieu-jameyzieu",
    name: "Tignieu-Jameyzieu",
    zipCode: "38230",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "8 000 habitants",

    description:
      "Entreprise de maçonnerie à Tignieu-Jameyzieu spécialisée en terrassement, rénovation et construction extérieure.",

    introduction:
      "DZ Maçonnerie accompagne particuliers et professionnels à Tignieu-Jameyzieu pour leurs travaux de construction et rénovation.",

    nearbyCities: [
      "Pont-de-Chéruy",
      "Meyzieu",
      "Charvieu-Chavagneux",
      "Villette-d’Anthon",
    ],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains plats", "zones pavillonnaires"],

    commonProjects: ["terrasse béton", "dalle béton", "garage", "clôture"],

    landmarks: ["centre commercial", "zones résidentielles"],

    architectureStyles: ["maisons modernes", "pavillons"],

    commonIssues: ["drainage", "gestion eaux pluviales"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Tignieu-Jameyzieu",
      "maçonnerie 38230",
      "terrassement Tignieu",
      "devis maçon Tignieu-Jameyzieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Tignieu-Jameyzieu ?",

        answer:
          "Oui, nous intervenons dans tous les quartiers de Tignieu-Jameyzieu et ses environs.",
      },
    ],
  },

  {
    id: "12",
    slug: "nivolas-vermelle",
    name: "Nivolas-Vermelle",
    zipCode: "38300",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "2 700 habitants",

    description:
      "Maçon à Nivolas-Vermelle pour travaux de rénovation, terrassement, gros œuvre et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie réalise vos travaux à Nivolas-Vermelle avec devis gratuit et accompagnement personnalisé.",

    nearbyCities: ["Bourgoin-Jallieu", "La Tour-du-Pin", "Cessieu"],

    neighborhoods: ["centre village", "zones résidentielles"],

    terrainTypes: ["terrains en pente", "sols argileux"],

    commonProjects: ["dalle béton", "terrasse béton", "extension maison"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons individuelles"],

    commonIssues: ["fondations", "humidité"],

    seoVariations: ["artisan maçon", "maçon professionnel"],

    keywords: [
      "maçon Nivolas-Vermelle",
      "maçonnerie Nivolas-Vermelle",
      "terrassement Nivolas-Vermelle",
      "devis maçon Nivolas-Vermelle",
    ],

    faq: [
      {
        question: "Intervenez-vous à Nivolas-Vermelle ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Nivolas-Vermelle et dans les communes voisines.",
      },
    ],
  },

  {
    id: "13",
    slug: "vaulx-milieu",
    name: "Vaulx-Milieu",
    zipCode: "38090",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "2 500 habitants",

    description:
      "Entreprise de maçonnerie à Vaulx-Milieu spécialisée en terrassement, rénovation et dalle béton.",

    introduction:
      "DZ Maçonnerie intervient à Vaulx-Milieu pour tous vos projets de maçonnerie et aménagement extérieur.",

    nearbyCities: ["Villefontaine", "L'Isle-d'Abeau", "La Verpillière"],

    neighborhoods: ["centre village", "quartiers résidentiels"],

    terrainTypes: ["terrains résidentiels", "lotissements récents"],

    commonProjects: ["terrasse béton", "garage", "mur de clôture"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons modernes", "pavillons"],

    commonIssues: ["drainage", "gestion terrain"],

    seoVariations: ["entreprise maçonnerie", "artisan maçon"],

    keywords: [
      "maçon Vaulx-Milieu",
      "maçonnerie Vaulx-Milieu",
      "terrassement Vaulx-Milieu",
      "devis maçon Vaulx-Milieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Vaulx-Milieu ?",

        answer:
          "Oui, nous intervenons rapidement à Vaulx-Milieu pour tous vos travaux de maçonnerie.",
      },
    ],
  },
  {
    id: "14",
    slug: "diemoz",
    name: "Diémoz",
    zipCode: "38790",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "2 900 habitants",

    description:
      "Entreprise de maçonnerie à Diémoz spécialisée en rénovation, terrassement, dalle béton et extension maison.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Diémoz pour tous leurs projets de construction et rénovation.",

    nearbyCities: [
      "Heyrieux",
      "Saint-Georges-d’Espéranche",
      "Valencin",
      "Grenay",
    ],

    neighborhoods: ["centre village", "quartiers résidentiels"],

    terrainTypes: [
      "terrains argileux",
      "terrains résidentiels",
      "zones pavillonnaires",
    ],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "extension maison",
    ],

    landmarks: ["centre du village", "zones pavillonnaires"],

    architectureStyles: [
      "maisons individuelles",
      "maisons rurales",
      "pavillons modernes",
    ],

    commonIssues: ["fondations", "drainage", "gestion humidité"],

    seoVariations: [
      "artisan maçon",
      "entreprise de maçonnerie",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Diémoz",
      "maçonnerie Diémoz",
      "terrassement Diémoz",
      "dalle béton Diémoz",
      "devis maçon Diémoz",
    ],

    faq: [
      {
        question: "Intervenez-vous à Diémoz ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Diémoz et dans les communes voisines.",
      },

      {
        question: "Réalisez-vous des terrasses béton à Diémoz ?",

        answer:
          "Oui, nous réalisons des terrasses béton, dalles et aménagements extérieurs sur mesure.",
      },
    ],
  },

  {
    id: "15",
    slug: "frontonas",
    name: "Frontonas",
    zipCode: "38290",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "2 200 habitants",

    description:
      "Entreprise de maçonnerie à Frontonas spécialisée en terrassement, rénovation et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie intervient à Frontonas pour tous vos travaux de construction, rénovation et aménagement extérieur.",

    nearbyCities: [
      "La Verpillière",
      "Chamagnieu",
      "Villefontaine",
      "Vaulx-Milieu",
    ],

    neighborhoods: ["centre village", "zones résidentielles"],

    terrainTypes: ["terrains plats", "zones pavillonnaires"],

    commonProjects: ["dalle béton", "garage", "terrasse béton", "clôture"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons traditionnelles", "pavillons récents"],

    commonIssues: ["gestion eaux pluviales", "fondations"],

    seoVariations: ["artisan maçon", "maçon professionnel"],

    keywords: [
      "maçon Frontonas",
      "maçonnerie Frontonas",
      "terrassement Frontonas",
      "devis maçon Frontonas",
    ],

    faq: [
      {
        question: "Intervenez-vous à Frontonas ?",

        answer:
          "Oui, DZ Maçonnerie intervient à Frontonas et dans les communes voisines pour tous vos travaux.",
      },
    ],
  },

  {
    id: "16",
    slug: "roche",
    name: "Roche",
    zipCode: "38090",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "2 000 habitants",

    description:
      "Maçon à Roche spécialisé en maçonnerie générale, rénovation, terrassement et construction extérieure.",

    introduction:
      "DZ Maçonnerie accompagne les particuliers à Roche pour leurs projets de rénovation et maçonnerie.",

    nearbyCities: ["Villefontaine", "Nivolas-Vermelle", "L'Isle-d'Abeau"],

    neighborhoods: ["centre village", "quartiers résidentiels"],

    terrainTypes: ["terrains résidentiels", "terrains en pente"],

    commonProjects: ["terrasse béton", "extension maison", "garage"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons individuelles"],

    commonIssues: ["stabilité terrain", "humidité"],

    seoVariations: ["entreprise maçonnerie", "artisan maçon"],

    keywords: [
      "maçon Roche",
      "maçonnerie Roche",
      "terrassement Roche",
      "devis maçon Roche",
    ],

    faq: [
      {
        question: "Intervenez-vous à Roche ?",

        answer:
          "Oui, nous intervenons à Roche pour tous types de travaux de maçonnerie et terrassement.",
      },
    ],
  },

  {
    id: "17",
    slug: "bonnefamille",
    name: "Bonnefamille",
    zipCode: "38090",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 200 habitants",

    description:
      "Entreprise de maçonnerie à Bonnefamille spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie intervient à Bonnefamille pour tous vos projets de construction et rénovation.",

    nearbyCities: ["Villefontaine", "Roche", "Diémoz"],

    neighborhoods: ["centre village", "zones pavillonnaires"],

    terrainTypes: ["terrains résidentiels", "sols argileux"],

    commonProjects: ["terrasse béton", "dalle béton", "garage"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "pavillons modernes"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: ["artisan maçon", "spécialiste maçonnerie"],

    keywords: [
      "maçon Bonnefamille",
      "maçonnerie Bonnefamille",
      "terrassement Bonnefamille",
      "devis maçon Bonnefamille",
    ],

    faq: [
      {
        question: "Intervenez-vous à Bonnefamille ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Bonnefamille et dans les communes voisines.",
      },
    ],
  },
  {
    id: "18",
    slug: "four",
    name: "Four",
    zipCode: "38080",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 400 habitants",

    description:
      "Entreprise de maçonnerie à Four spécialisée en rénovation, terrassement, dalle béton et construction extérieure.",

    introduction:
      "DZ Maçonnerie intervient à Four pour tous vos travaux de maçonnerie générale et rénovation.",

    nearbyCities: ["L'Isle-d'Abeau", "Roche", "Succieu", "Bourgoin-Jallieu"],

    neighborhoods: ["centre village", "zones résidentielles"],

    terrainTypes: [
      "terrains résidentiels",
      "sols argileux",
      "terrains en pente",
    ],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "mur de clôture",
      "garage",
    ],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons individuelles"],

    commonIssues: ["drainage", "stabilité terrain"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Four",
      "maçonnerie Four",
      "terrassement Four",
      "dalle béton Four",
      "devis maçon Four",
    ],

    faq: [
      {
        question: "Intervenez-vous à Four ?",

        answer:
          "Oui, nous intervenons à Four et dans les communes voisines pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "19",
    slug: "succieu",
    name: "Succieu",
    zipCode: "38300",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "750 habitants",

    description:
      "Maçon à Succieu spécialisé en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Succieu pour leurs projets de rénovation et construction.",

    nearbyCities: ["Four", "Ruy-Montceau", "Bourgoin-Jallieu"],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["terrains ruraux", "terrains en pente"],

    commonProjects: ["terrasse béton", "garage", "clôture"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons traditionnelles"],

    commonIssues: ["fondations", "gestion humidité"],

    seoVariations: ["maçon professionnel", "artisan maçon"],

    keywords: [
      "maçon Succieu",
      "maçonnerie Succieu",
      "terrassement Succieu",
      "devis maçon Succieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Succieu ?",

        answer:
          "Oui, DZ Maçonnerie réalise des travaux de maçonnerie à Succieu et dans les communes environnantes.",
      },
    ],
  },

  {
    id: "20",
    slug: "ruy-montceau",
    name: "Ruy-Montceau",
    zipCode: "38300",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "4 800 habitants",

    description:
      "Entreprise de maçonnerie à Ruy-Montceau spécialisée en rénovation, gros œuvre, terrassement et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Ruy-Montceau pour tous vos travaux de maçonnerie générale et rénovation.",

    nearbyCities: ["Bourgoin-Jallieu", "Succieu", "Nivolas-Vermelle"],

    neighborhoods: ["centre-ville", "quartiers résidentiels"],

    terrainTypes: ["terrains pavillonnaires", "sols argileux"],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "extension maison",
      "garage",
    ],

    landmarks: ["centre-ville"],

    architectureStyles: ["maisons individuelles", "pavillons modernes"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Ruy-Montceau",
      "maçonnerie Ruy-Montceau",
      "terrassement Ruy-Montceau",
      "devis maçon Ruy-Montceau",
    ],

    faq: [
      {
        question: "Intervenez-vous à Ruy-Montceau ?",

        answer:
          "Oui, nous intervenons rapidement à Ruy-Montceau pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "21",
    slug: "meyrieu-les-etangs",
    name: "Meyrieu-les-Étangs",
    zipCode: "38440",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 000 habitants",

    description:
      "Entreprise de maçonnerie à Meyrieu-les-Étangs spécialisée en rénovation, dalle béton et terrassement.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Meyrieu-les-Étangs pour tous leurs projets de construction.",

    nearbyCities: ["Artas", "Saint-Jean-de-Bournay", "Villeneuve-de-Marc"],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["terrains ruraux", "terrains agricoles"],

    commonProjects: ["terrasse béton", "garage", "dalle béton"],

    landmarks: ["étangs", "centre du village"],

    architectureStyles: ["maisons rurales", "maisons anciennes"],

    commonIssues: ["gestion humidité", "fondations"],

    seoVariations: ["artisan maçon", "entreprise maçonnerie"],

    keywords: [
      "maçon Meyrieu-les-Étangs",
      "maçonnerie Meyrieu-les-Étangs",
      "terrassement Meyrieu-les-Étangs",
      "devis maçon Meyrieu-les-Étangs",
    ],

    faq: [
      {
        question: "Intervenez-vous à Meyrieu-les-Étangs ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Meyrieu-les-Étangs et dans les communes voisines.",
      },
    ],
  },
  {
    id: "22",
    slug: "villeneuve-de-marc",
    name: "Villeneuve-de-Marc",
    zipCode: "38440",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 200 habitants",

    description:
      "Entreprise de maçonnerie à Villeneuve-de-Marc spécialisée en rénovation, terrassement, dalle béton et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie intervient à Villeneuve-de-Marc pour tous vos travaux de rénovation et construction.",

    nearbyCities: ["Meyrieu-les-Étangs", "Saint-Jean-de-Bournay", "Artas"],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["terrains agricoles", "terrains argileux"],

    commonProjects: ["dalle béton", "terrasse béton", "garage"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons traditionnelles"],

    commonIssues: ["fondations", "gestion humidité"],

    seoVariations: ["artisan maçon", "entreprise maçonnerie"],

    keywords: [
      "maçon Villeneuve-de-Marc",
      "maçonnerie Villeneuve-de-Marc",
      "terrassement Villeneuve-de-Marc",
      "devis maçon Villeneuve-de-Marc",
    ],

    faq: [
      {
        question: "Intervenez-vous à Villeneuve-de-Marc ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Villeneuve-de-Marc et dans les communes voisines.",
      },
    ],
  },

  {
    id: "23",
    slug: "chatonnay",
    name: "Chatonnay",
    zipCode: "38440",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "2 000 habitants",

    description:
      "Entreprise de maçonnerie à Chatonnay spécialisée en rénovation, terrassement et gros œuvre.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Chatonnay pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Saint-Jean-de-Bournay", "Artas", "Villeneuve-de-Marc"],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains ruraux", "terrains en pente"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
    ],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons individuelles"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: ["maçon professionnel", "artisan maçon"],

    keywords: [
      "maçon Chatonnay",
      "maçonnerie Chatonnay",
      "terrassement Chatonnay",
      "devis maçon Chatonnay",
    ],

    faq: [
      {
        question: "Intervenez-vous à Chatonnay ?",

        answer:
          "Oui, nous intervenons rapidement à Chatonnay pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "24",
    slug: "cessieu",
    name: "Cessieu",
    zipCode: "38110",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "3 200 habitants",

    description:
      "Entreprise de maçonnerie à Cessieu spécialisée en rénovation, terrassement, dalle béton et extension maison.",

    introduction:
      "DZ Maçonnerie intervient à Cessieu pour tous vos projets de maçonnerie générale et aménagement extérieur.",

    nearbyCities: ["La Tour-du-Pin", "Nivolas-Vermelle", "Rochetoirin"],

    neighborhoods: ["centre-ville", "quartiers résidentiels"],

    terrainTypes: ["terrains en pente", "terrains résidentiels"],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "mur de soutènement",
    ],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons individuelles", "maisons traditionnelles"],

    commonIssues: ["fondations", "terrain en pente"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "spécialiste terrassement",
    ],

    keywords: [
      "maçon Cessieu",
      "maçonnerie Cessieu",
      "terrassement Cessieu",
      "devis maçon Cessieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Cessieu ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Cessieu et dans les communes voisines.",
      },
    ],
  },

  {
    id: "25",
    slug: "rochetoirin",
    name: "Rochetoirin",
    zipCode: "38110",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 100 habitants",

    description:
      "Maçon à Rochetoirin spécialisé en rénovation, maçonnerie générale et terrassement.",

    introduction:
      "DZ Maçonnerie accompagne les particuliers de Rochetoirin pour leurs travaux de construction et rénovation.",

    nearbyCities: ["La Tour-du-Pin", "Cessieu", "Saint-Clair-de-la-Tour"],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["terrains en pente", "sols argileux"],

    commonProjects: ["garage", "terrasse béton", "dalle béton"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons anciennes"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: ["artisan maçon", "maçon professionnel"],

    keywords: [
      "maçon Rochetoirin",
      "maçonnerie Rochetoirin",
      "terrassement Rochetoirin",
      "devis maçon Rochetoirin",
    ],

    faq: [
      {
        question: "Intervenez-vous à Rochetoirin ?",

        answer:
          "Oui, nous intervenons à Rochetoirin et dans les communes voisines pour tous types de travaux de maçonnerie.",
      },
    ],
  },
  {
    id: "26",
    slug: "saint-clair-de-la-tour",
    name: "Saint-Clair-de-la-Tour",
    zipCode: "38110",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "3 500 habitants",

    description:
      "Entreprise de maçonnerie à Saint-Clair-de-la-Tour spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie intervient à Saint-Clair-de-la-Tour pour tous vos projets de construction et rénovation.",

    nearbyCities: ["La Tour-du-Pin", "Rochetoirin", "Cessieu"],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains en pente", "terrains pavillonnaires"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "extension maison",
      "dalle béton",
    ],

    landmarks: ["centre-ville"],

    architectureStyles: ["maisons individuelles", "maisons traditionnelles"],

    commonIssues: ["fondations", "gestion humidité"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Saint-Clair-de-la-Tour",
      "maçonnerie Saint-Clair-de-la-Tour",
      "terrassement Saint-Clair-de-la-Tour",
      "devis maçon Saint-Clair-de-la-Tour",
    ],

    faq: [
      {
        question: "Intervenez-vous à Saint-Clair-de-la-Tour ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Saint-Clair-de-la-Tour et dans les communes voisines.",
      },
    ],
  },

  {
    id: "27",
    slug: "grenay",
    name: "Grenay",
    zipCode: "38540",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 700 habitants",

    description:
      "Entreprise de maçonnerie à Grenay spécialisée en rénovation, terrassement, dalle béton et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Grenay pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Heyrieux", "Diémoz", "Saint-Quentin-Fallavier"],

    neighborhoods: ["centre village", "zones pavillonnaires"],

    terrainTypes: ["terrains plats", "sols argileux"],

    commonProjects: ["terrasse béton", "dalle béton", "garage"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons modernes", "maisons individuelles"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: ["entreprise maçonnerie", "artisan maçon"],

    keywords: [
      "maçon Grenay",
      "maçonnerie Grenay",
      "terrassement Grenay",
      "devis maçon Grenay",
    ],

    faq: [
      {
        question: "Intervenez-vous à Grenay ?",

        answer:
          "Oui, nous intervenons à Grenay et dans les communes voisines pour tous vos travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "28",
    slug: "valencin",
    name: "Valencin",
    zipCode: "38540",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "2 800 habitants",

    description:
      "Entreprise de maçonnerie à Valencin spécialisée en terrassement, rénovation et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie intervient à Valencin pour tous vos travaux de maçonnerie et aménagement extérieur.",

    nearbyCities: ["Heyrieux", "Diémoz", "Saint-Pierre-de-Chandieu"],

    neighborhoods: ["centre village", "quartiers résidentiels"],

    terrainTypes: ["terrains résidentiels", "terrains agricoles"],

    commonProjects: ["terrasse béton", "extension maison", "garage", "clôture"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons individuelles"],

    commonIssues: ["gestion eaux pluviales", "fondations"],

    seoVariations: ["artisan maçon", "maçon professionnel"],

    keywords: [
      "maçon Valencin",
      "maçonnerie Valencin",
      "terrassement Valencin",
      "devis maçon Valencin",
    ],

    faq: [
      {
        question: "Intervenez-vous à Valencin ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Valencin et dans les communes voisines.",
      },
    ],
  },

  {
    id: "29",
    slug: "chamagnieu",
    name: "Chamagnieu",
    zipCode: "38460",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 800 habitants",

    description:
      "Entreprise de maçonnerie à Chamagnieu spécialisée en rénovation, terrassement et construction extérieure.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Chamagnieu pour tous leurs projets de rénovation et maçonnerie générale.",

    nearbyCities: ["Frontonas", "Tignieu-Jameyzieu", "Villette-d’Anthon"],

    neighborhoods: ["centre village", "zones résidentielles"],

    terrainTypes: ["terrains plats", "terrains pavillonnaires"],

    commonProjects: ["dalle béton", "terrasse béton", "garage"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons individuelles", "pavillons modernes"],

    commonIssues: ["drainage", "gestion humidité"],

    seoVariations: ["entreprise maçonnerie", "artisan maçon"],

    keywords: [
      "maçon Chamagnieu",
      "maçonnerie Chamagnieu",
      "terrassement Chamagnieu",
      "devis maçon Chamagnieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Chamagnieu ?",

        answer:
          "Oui, nous intervenons à Chamagnieu pour tous types de travaux de maçonnerie et terrassement.",
      },
    ],
  },

  {
    id: "30",
    slug: "pont-de-cheruy",
    name: "Pont-de-Chéruy",
    zipCode: "38230",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "6 000 habitants",

    description:
      "Entreprise de maçonnerie à Pont-de-Chéruy spécialisée en rénovation, terrassement, gros œuvre et dalle béton.",

    introduction:
      "DZ Maçonnerie intervient à Pont-de-Chéruy pour tous vos projets de construction et rénovation.",

    nearbyCities: ["Tignieu-Jameyzieu", "Charvieu-Chavagneux", "Meyzieu"],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains urbains", "terrains résidentiels"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
    ],

    landmarks: ["centre-ville", "zones commerciales"],

    architectureStyles: ["maisons de ville", "pavillons modernes"],

    commonIssues: ["fondations", "drainage"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Pont-de-Chéruy",
      "maçonnerie Pont-de-Chéruy",
      "terrassement Pont-de-Chéruy",
      "devis maçon Pont-de-Chéruy",
    ],

    faq: [
      {
        question: "Intervenez-vous à Pont-de-Chéruy ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Pont-de-Chéruy et dans les communes voisines.",
      },
    ],
  },
  {
    id: "31",
    slug: "meyzieu",
    name: "Meyzieu",
    zipCode: "69330",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "35 000 habitants",

    description:
      "Entreprise de maçonnerie à Meyzieu spécialisée en rénovation, terrassement, gros œuvre et extension maison.",

    introduction:
      "DZ Maçonnerie intervient à Meyzieu pour tous vos projets de construction, rénovation et aménagement extérieur.",

    nearbyCities: ["Décines-Charpieu", "Genas", "Jonage", "Pusignan"],

    neighborhoods: [
      "centre-ville",
      "Les Plantées",
      "Le Carreau",
      "zones pavillonnaires",
    ],

    terrainTypes: [
      "terrains urbains",
      "terrains résidentiels",
      "zones pavillonnaires",
    ],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
      "mur de clôture",
    ],

    landmarks: ["Grand Large", "centre-ville", "zones commerciales"],

    architectureStyles: [
      "maisons contemporaines",
      "pavillons modernes",
      "maisons de ville",
    ],

    commonIssues: ["fondations", "gestion eaux pluviales", "drainage"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon rénovation",
      "spécialiste terrassement",
    ],

    keywords: [
      "maçon Meyzieu",
      "maçonnerie Meyzieu",
      "terrassement Meyzieu",
      "dalle béton Meyzieu",
      "devis maçon Meyzieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Meyzieu ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Meyzieu et dans les communes voisines.",
      },

      {
        question: "Réalisez-vous des extensions maison à Meyzieu ?",

        answer:
          "Oui, nous réalisons des extensions maison, garages et travaux de gros œuvre sur mesure.",
      },
    ],
  },

  {
    id: "32",
    slug: "decines-charpieu",
    name: "Décines-Charpieu",
    zipCode: "69150",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "29 000 habitants",

    description:
      "Entreprise de maçonnerie à Décines-Charpieu spécialisée en rénovation, terrassement et construction extérieure.",

    introduction:
      "DZ Maçonnerie accompagne particuliers et professionnels à Décines-Charpieu pour leurs projets de rénovation et maçonnerie générale.",

    nearbyCities: ["Meyzieu", "Chassieu", "Bron", "Vaulx-en-Velin"],

    neighborhoods: ["centre-ville", "Charpieu", "Cornavent"],

    terrainTypes: ["terrains urbains", "terrains résidentiels"],

    commonProjects: ["terrasse béton", "dalle béton", "garage", "clôture"],

    landmarks: ["Groupama Stadium", "centre-ville"],

    architectureStyles: ["maisons modernes", "maisons de ville", "pavillons"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: [
      "maçon professionnel",
      "artisan maçon",
      "entreprise maçonnerie",
    ],

    keywords: [
      "maçon Décines-Charpieu",
      "maçonnerie Décines",
      "terrassement Décines",
      "devis maçon Décines-Charpieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Décines-Charpieu ?",

        answer:
          "Oui, nous intervenons rapidement à Décines-Charpieu pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "33",
    slug: "genas",
    name: "Genas",
    zipCode: "69740",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "13 000 habitants",

    description:
      "Entreprise de maçonnerie à Genas spécialisée en rénovation, terrassement, dalle béton et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Genas pour tous vos travaux de construction et rénovation.",

    nearbyCities: ["Meyzieu", "Chassieu", "Saint-Bonnet-de-Mure", "Pusignan"],

    neighborhoods: ["centre-ville", "quartiers résidentiels"],

    terrainTypes: ["terrains résidentiels", "zones pavillonnaires"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
    ],

    landmarks: ["centre-ville", "zones commerciales"],

    architectureStyles: ["maisons individuelles", "pavillons modernes"],

    commonIssues: ["gestion eaux pluviales", "fondations"],

    seoVariations: ["artisan maçon", "spécialiste maçonnerie"],

    keywords: [
      "maçon Genas",
      "maçonnerie Genas",
      "terrassement Genas",
      "devis maçon Genas",
    ],

    faq: [
      {
        question: "Intervenez-vous à Genas ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Genas et dans les communes voisines.",
      },
    ],
  },

  {
    id: "34",
    slug: "saint-priest",
    name: "Saint-Priest",
    zipCode: "69800",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "48 000 habitants",

    description:
      "Entreprise de maçonnerie à Saint-Priest spécialisée en rénovation, gros œuvre, terrassement et extension maison.",

    introduction:
      "DZ Maçonnerie accompagne particuliers et professionnels à Saint-Priest pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Bron", "Mions", "Corbas", "Genas"],

    neighborhoods: [
      "centre-ville",
      "Manissieux",
      "Bel Air",
      "zones résidentielles",
    ],

    terrainTypes: ["terrains urbains", "terrains pavillonnaires"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "mur de clôture",
      "extension maison",
    ],

    landmarks: ["centre-ville", "zones industrielles"],

    architectureStyles: [
      "maisons modernes",
      "maisons de ville",
      "immeubles résidentiels",
    ],

    commonIssues: ["fondations", "gestion drainage", "stabilité terrain"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Saint-Priest",
      "maçonnerie Saint-Priest",
      "terrassement Saint-Priest",
      "devis maçon Saint-Priest",
    ],

    faq: [
      {
        question: "Intervenez-vous à Saint-Priest ?",

        answer:
          "Oui, nous intervenons à Saint-Priest pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },
  {
    id: "35",
    slug: "bron",
    name: "Bron",
    zipCode: "69500",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "42 000 habitants",

    description:
      "Entreprise de maçonnerie à Bron spécialisée en rénovation, terrassement, gros œuvre et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Bron pour tous vos projets de rénovation, construction et maçonnerie générale.",

    nearbyCities: ["Saint-Priest", "Décines-Charpieu", "Villeurbanne", "Lyon"],

    neighborhoods: [
      "centre-ville",
      "Terraillon",
      "Parilly",
      "zones résidentielles",
    ],

    terrainTypes: [
      "terrains urbains",
      "zones résidentielles",
      "terrains pavillonnaires",
    ],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "rénovation façade",
      "extension maison",
    ],

    landmarks: ["Parc de Parilly", "centre-ville", "zones commerciales"],

    architectureStyles: [
      "maisons de ville",
      "immeubles résidentiels",
      "pavillons modernes",
    ],

    commonIssues: ["fissures façade", "gestion drainage", "fondations"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon rénovation",
      "spécialiste gros œuvre",
    ],

    keywords: [
      "maçon Bron",
      "maçonnerie Bron",
      "terrassement Bron",
      "dalle béton Bron",
      "devis maçon Bron",
    ],

    faq: [
      {
        question: "Intervenez-vous à Bron ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Bron et dans les communes voisines.",
      },

      {
        question: "Réalisez-vous des rénovations façade à Bron ?",

        answer:
          "Oui, nous réalisons des travaux de rénovation façade, maçonnerie et aménagement extérieur à Bron.",
      },
    ],
  },

  {
    id: "36",
    slug: "mions",
    name: "Mions",
    zipCode: "69780",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "14 000 habitants",

    description:
      "Entreprise de maçonnerie à Mions spécialisée en rénovation, terrassement, dalle béton et extension maison.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Mions pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Saint-Priest", "Corbas", "Chaponnay", "Vénissieux"],

    neighborhoods: [
      "centre-ville",
      "quartiers résidentiels",
      "zones pavillonnaires",
    ],

    terrainTypes: ["terrains plats", "terrains résidentiels"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "mur de clôture",
    ],

    landmarks: ["centre-ville", "zones commerciales"],

    architectureStyles: ["maisons individuelles", "pavillons récents"],

    commonIssues: ["drainage", "gestion eaux pluviales"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Mions",
      "maçonnerie Mions",
      "terrassement Mions",
      "devis maçon Mions",
    ],

    faq: [
      {
        question: "Intervenez-vous à Mions ?",

        answer:
          "Oui, nous intervenons à Mions pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },

  {
    id: "37",
    slug: "corbas",
    name: "Corbas",
    zipCode: "69960",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "11 000 habitants",

    description:
      "Entreprise de maçonnerie à Corbas spécialisée en terrassement, rénovation, gros œuvre et dalle béton.",

    introduction:
      "DZ Maçonnerie intervient à Corbas pour tous vos travaux de maçonnerie générale et rénovation.",

    nearbyCities: ["Mions", "Saint-Priest", "Vénissieux", "Feyzin"],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains urbains", "terrains pavillonnaires"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
    ],

    landmarks: ["centre-ville", "zones industrielles"],

    architectureStyles: ["maisons modernes", "maisons individuelles"],

    commonIssues: ["fondations", "drainage"],

    seoVariations: ["artisan maçon", "entreprise maçonnerie"],

    keywords: [
      "maçon Corbas",
      "maçonnerie Corbas",
      "terrassement Corbas",
      "devis maçon Corbas",
    ],

    faq: [
      {
        question: "Intervenez-vous à Corbas ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Corbas et dans les communes voisines.",
      },
    ],
  },

  {
    id: "38",
    slug: "chassieu",
    name: "Chassieu",
    zipCode: "69680",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "10 000 habitants",

    description:
      "Entreprise de maçonnerie à Chassieu spécialisée en rénovation, terrassement et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie accompagne particuliers et professionnels à Chassieu pour leurs projets de construction et rénovation.",

    nearbyCities: ["Décines-Charpieu", "Genas", "Bron", "Meyzieu"],

    neighborhoods: ["centre-ville", "quartiers résidentiels"],

    terrainTypes: ["terrains résidentiels", "terrains plats"],

    commonProjects: ["terrasse béton", "garage", "clôture", "dalle béton"],

    landmarks: ["centre-ville", "zones pavillonnaires"],

    architectureStyles: ["maisons individuelles", "maisons contemporaines"],

    commonIssues: ["gestion humidité", "drainage"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Chassieu",
      "maçonnerie Chassieu",
      "terrassement Chassieu",
      "devis maçon Chassieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Chassieu ?",

        answer:
          "Oui, nous intervenons à Chassieu et dans les communes voisines pour tous vos travaux de maçonnerie.",
      },
    ],
  },
  {
    id: "39",
    slug: "villeurbanne",
    name: "Villeurbanne",
    zipCode: "69100",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "160 000 habitants",

    description:
      "Entreprise de maçonnerie à Villeurbanne spécialisée en rénovation, gros œuvre, terrassement et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Villeurbanne pour tous vos projets de rénovation, maçonnerie générale et extension maison.",

    nearbyCities: ["Lyon", "Bron", "Vaulx-en-Velin", "Décines-Charpieu"],

    neighborhoods: ["Gratte-Ciel", "Cusset", "Charpennes", "Croix-Luizet"],

    terrainTypes: [
      "terrains urbains",
      "zones résidentielles",
      "zones commerciales",
    ],

    commonProjects: [
      "rénovation façade",
      "terrasse béton",
      "dalle béton",
      "extension maison",
      "mur de clôture",
    ],

    landmarks: ["Gratte-Ciel", "campus universitaire", "centre-ville"],

    architectureStyles: [
      "immeubles urbains",
      "maisons de ville",
      "pavillons modernes",
    ],

    commonIssues: ["fissures façade", "rénovation ancienne", "fondations"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon rénovation",
      "spécialiste gros œuvre",
    ],

    keywords: [
      "maçon Villeurbanne",
      "maçonnerie Villeurbanne",
      "terrassement Villeurbanne",
      "dalle béton Villeurbanne",
      "devis maçon Villeurbanne",
    ],

    faq: [
      {
        question: "Intervenez-vous à Villeurbanne ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Villeurbanne et dans les communes voisines.",
      },
    ],
  },

  {
    id: "40",
    slug: "lyon",
    name: "Lyon",
    zipCode: "69000",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "520 000 habitants",

    description:
      "Entreprise de maçonnerie à Lyon spécialisée en rénovation, terrassement, gros œuvre et extension maison.",

    introduction:
      "DZ Maçonnerie accompagne particuliers et professionnels à Lyon pour tous leurs projets de maçonnerie générale et rénovation.",

    nearbyCities: ["Villeurbanne", "Bron", "Saint-Priest", "Vénissieux"],

    neighborhoods: ["Croix-Rousse", "Part-Dieu", "Monplaisir", "Confluence"],

    terrainTypes: [
      "terrains urbains",
      "zones résidentielles",
      "terrains en pente",
    ],

    commonProjects: [
      "rénovation façade",
      "terrasse béton",
      "dalle béton",
      "mur de soutènement",
      "extension maison",
    ],

    landmarks: ["Part-Dieu", "Vieux Lyon", "Confluence"],

    architectureStyles: [
      "immeubles anciens",
      "maisons de ville",
      "bâtiments historiques",
    ],

    commonIssues: ["rénovation ancienne", "fissures façade", "humidité"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "spécialiste rénovation",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Lyon",
      "maçonnerie Lyon",
      "terrassement Lyon",
      "dalle béton Lyon",
      "devis maçon Lyon",
    ],

    faq: [
      {
        question: "Intervenez-vous à Lyon ?",

        answer:
          "Oui, nous intervenons dans tous les arrondissements de Lyon pour vos travaux de maçonnerie et rénovation.",
      },

      {
        question: "Réalisez-vous des rénovations façade à Lyon ?",

        answer:
          "Oui, nous réalisons des rénovations façade, gros œuvre et aménagements extérieurs à Lyon.",
      },
    ],
  },

  {
    id: "41",
    slug: "venissieux",
    name: "Vénissieux",
    zipCode: "69200",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "67 000 habitants",

    description:
      "Entreprise de maçonnerie à Vénissieux spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie intervient à Vénissieux pour tous vos projets de rénovation et construction extérieure.",

    nearbyCities: ["Saint-Priest", "Bron", "Corbas", "Lyon"],

    neighborhoods: ["Minguettes", "Parilly", "centre-ville"],

    terrainTypes: ["terrains urbains", "zones résidentielles"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "rénovation façade",
    ],

    landmarks: ["Parc de Parilly", "centre-ville"],

    architectureStyles: ["immeubles urbains", "maisons individuelles"],

    commonIssues: ["rénovation ancienne", "fondations"],

    seoVariations: [
      "artisan maçon",
      "maçon rénovation",
      "entreprise maçonnerie",
    ],

    keywords: [
      "maçon Vénissieux",
      "maçonnerie Vénissieux",
      "terrassement Vénissieux",
      "devis maçon Vénissieux",
    ],

    faq: [
      {
        question: "Intervenez-vous à Vénissieux ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Vénissieux et dans les communes voisines.",
      },
    ],
  },

  {
    id: "42",
    slug: "vaulx-en-velin",
    name: "Vaulx-en-Velin",
    zipCode: "69120",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "52 000 habitants",

    description:
      "Entreprise de maçonnerie à Vaulx-en-Velin spécialisée en rénovation, gros œuvre et terrassement.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Vaulx-en-Velin pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Villeurbanne", "Décines-Charpieu", "Bron", "Meyzieu"],

    neighborhoods: ["centre-ville", "La Soie", "Mas du Taureau"],

    terrainTypes: ["terrains urbains", "terrains résidentiels"],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "extension maison",
      "mur de clôture",
    ],

    landmarks: ["Carré de Soie", "centre-ville"],

    architectureStyles: ["immeubles modernes", "maisons de ville"],

    commonIssues: ["fissures façade", "fondations", "gestion drainage"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Vaulx-en-Velin",
      "maçonnerie Vaulx-en-Velin",
      "terrassement Vaulx-en-Velin",
      "devis maçon Vaulx-en-Velin",
    ],

    faq: [
      {
        question: "Intervenez-vous à Vaulx-en-Velin ?",

        answer:
          "Oui, nous intervenons rapidement à Vaulx-en-Velin pour tous types de travaux de maçonnerie.",
      },
    ],
  },
  {
    id: "43",
    slug: "charvieu-chavagneux",
    name: "Charvieu-Chavagneux",
    zipCode: "38230",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "10 000 habitants",

    description:
      "Entreprise de maçonnerie à Charvieu-Chavagneux spécialisée en rénovation, terrassement, dalle béton et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Charvieu-Chavagneux pour tous vos travaux de maçonnerie générale et rénovation.",

    nearbyCities: [
      "Pont-de-Chéruy",
      "Tignieu-Jameyzieu",
      "Meyzieu",
      "Villette-d’Anthon",
    ],

    neighborhoods: [
      "centre-ville",
      "quartiers résidentiels",
      "zones pavillonnaires",
    ],

    terrainTypes: ["terrains plats", "terrains résidentiels"],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "extension maison",
      "clôture",
    ],

    landmarks: ["centre-ville", "zones commerciales"],

    architectureStyles: ["maisons individuelles", "pavillons modernes"],

    commonIssues: ["drainage", "gestion eaux pluviales", "fondations"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Charvieu-Chavagneux",
      "maçonnerie Charvieu-Chavagneux",
      "terrassement Charvieu-Chavagneux",
      "devis maçon Charvieu-Chavagneux",
    ],

    faq: [
      {
        question: "Intervenez-vous à Charvieu-Chavagneux ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Charvieu-Chavagneux et dans les communes voisines.",
      },
    ],
  },

  {
    id: "44",
    slug: "villette-d-anthon",
    name: "Villette-d’Anthon",
    zipCode: "38280",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "5 500 habitants",

    description:
      "Entreprise de maçonnerie à Villette-d’Anthon spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Villette-d’Anthon pour leurs projets de construction et rénovation.",

    nearbyCities: [
      "Charvieu-Chavagneux",
      "Meyzieu",
      "Pusignan",
      "Tignieu-Jameyzieu",
    ],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains résidentiels", "terrains plats"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "mur de clôture",
    ],

    landmarks: ["centre-ville", "canal de Jonage"],

    architectureStyles: ["maisons contemporaines", "pavillons récents"],

    commonIssues: ["gestion humidité", "fondations"],

    seoVariations: ["entreprise maçonnerie", "artisan maçon"],

    keywords: [
      "maçon Villette-d’Anthon",
      "maçonnerie Villette-d’Anthon",
      "terrassement Villette-d’Anthon",
      "devis maçon Villette-d’Anthon",
    ],

    faq: [
      {
        question: "Intervenez-vous à Villette-d’Anthon ?",

        answer:
          "Oui, nous intervenons rapidement à Villette-d’Anthon pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "45",
    slug: "pusignan",
    name: "Pusignan",
    zipCode: "69330",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "4 500 habitants",

    description:
      "Entreprise de maçonnerie à Pusignan spécialisée en terrassement, rénovation et construction extérieure.",

    introduction:
      "DZ Maçonnerie intervient à Pusignan pour tous vos projets de maçonnerie générale et aménagement extérieur.",

    nearbyCities: ["Meyzieu", "Genas", "Villette-d’Anthon", "Janneyrias"],

    neighborhoods: ["centre-ville", "zones pavillonnaires"],

    terrainTypes: ["terrains plats", "terrains pavillonnaires"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
    ],

    landmarks: ["centre-ville", "zones résidentielles"],

    architectureStyles: ["maisons individuelles", "maisons modernes"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: [
      "artisan maçon",
      "maçon professionnel",
      "entreprise maçonnerie",
    ],

    keywords: [
      "maçon Pusignan",
      "maçonnerie Pusignan",
      "terrassement Pusignan",
      "devis maçon Pusignan",
    ],

    faq: [
      {
        question: "Intervenez-vous à Pusignan ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Pusignan et dans les communes voisines.",
      },
    ],
  },

  {
    id: "46",
    slug: "jonage",
    name: "Jonage",
    zipCode: "69330",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "6 000 habitants",

    description:
      "Entreprise de maçonnerie à Jonage spécialisée en rénovation, terrassement, dalle béton et extension maison.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Jonage pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Meyzieu", "Pusignan", "Jons", "Décines-Charpieu"],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains plats", "terrains résidentiels"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "mur de soutènement",
    ],

    landmarks: ["Grand Large", "canal de Jonage"],

    architectureStyles: ["maisons contemporaines", "pavillons modernes"],

    commonIssues: ["gestion eaux pluviales", "fondations"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Jonage",
      "maçonnerie Jonage",
      "terrassement Jonage",
      "devis maçon Jonage",
    ],

    faq: [
      {
        question: "Intervenez-vous à Jonage ?",

        answer:
          "Oui, nous intervenons à Jonage pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },
  {
    id: "47",
    slug: "jons",
    name: "Jons",
    zipCode: "69330",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "1 600 habitants",

    description:
      "Entreprise de maçonnerie à Jons spécialisée en rénovation, terrassement, dalle béton et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Jons pour tous vos travaux de maçonnerie générale et rénovation.",

    nearbyCities: ["Jonage", "Pusignan", "Meyzieu", "Villette-d’Anthon"],

    neighborhoods: ["centre village", "zones résidentielles"],

    terrainTypes: [
      "terrains plats",
      "terrains proches du Rhône",
      "zones pavillonnaires",
    ],

    commonProjects: ["terrasse béton", "dalle béton", "garage", "clôture"],

    landmarks: ["canal de Jonage", "centre du village"],

    architectureStyles: ["maisons individuelles", "maisons contemporaines"],

    commonIssues: ["gestion humidité", "drainage", "fondations"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Jons",
      "maçonnerie Jons",
      "terrassement Jons",
      "devis maçon Jons",
    ],

    faq: [
      {
        question: "Intervenez-vous à Jons ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Jons et dans les communes voisines.",
      },
    ],
  },

  {
    id: "48",
    slug: "janneyrias",
    name: "Janneyrias",
    zipCode: "38280",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 900 habitants",

    description:
      "Entreprise de maçonnerie à Janneyrias spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Janneyrias pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Pusignan", "Villette-d’Anthon", "Charvieu-Chavagneux"],

    neighborhoods: ["centre village", "zones résidentielles"],

    terrainTypes: ["terrains résidentiels", "terrains plats"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
    ],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "pavillons modernes"],

    commonIssues: ["fondations", "gestion eaux pluviales"],

    seoVariations: ["entreprise maçonnerie", "artisan maçon"],

    keywords: [
      "maçon Janneyrias",
      "maçonnerie Janneyrias",
      "terrassement Janneyrias",
      "devis maçon Janneyrias",
    ],

    faq: [
      {
        question: "Intervenez-vous à Janneyrias ?",

        answer:
          "Oui, nous intervenons à Janneyrias pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },

  {
    id: "49",
    slug: "saint-bonnet-de-mure",
    name: "Saint-Bonnet-de-Mure",
    zipCode: "69720",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "7 000 habitants",

    description:
      "Entreprise de maçonnerie à Saint-Bonnet-de-Mure spécialisée en rénovation, terrassement et extension maison.",

    introduction:
      "DZ Maçonnerie intervient à Saint-Bonnet-de-Mure pour tous vos travaux de construction et maçonnerie générale.",

    nearbyCities: ["Genas", "Saint-Laurent-de-Mure", "Mions", "Pusignan"],

    neighborhoods: ["centre-ville", "quartiers résidentiels"],

    terrainTypes: ["terrains résidentiels", "zones pavillonnaires"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "extension maison",
      "dalle béton",
    ],

    landmarks: ["centre-ville", "zones commerciales"],

    architectureStyles: ["maisons contemporaines", "maisons individuelles"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: [
      "artisan maçon",
      "maçon rénovation",
      "entreprise maçonnerie",
    ],

    keywords: [
      "maçon Saint-Bonnet-de-Mure",
      "maçonnerie Saint-Bonnet-de-Mure",
      "terrassement Saint-Bonnet-de-Mure",
      "devis maçon Saint-Bonnet-de-Mure",
    ],

    faq: [
      {
        question: "Intervenez-vous à Saint-Bonnet-de-Mure ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Saint-Bonnet-de-Mure et dans les communes voisines.",
      },
    ],
  },

  {
    id: "50",
    slug: "saint-laurent-de-mure",
    name: "Saint-Laurent-de-Mure",
    zipCode: "69720",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "5 500 habitants",

    description:
      "Entreprise de maçonnerie à Saint-Laurent-de-Mure spécialisée en rénovation, terrassement et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie accompagne particuliers et professionnels à Saint-Laurent-de-Mure pour leurs projets de rénovation et construction.",

    nearbyCities: [
      "Saint-Bonnet-de-Mure",
      "Genas",
      "Pusignan",
      "Colombier-Saugnieu",
    ],

    neighborhoods: ["centre-ville", "zones pavillonnaires"],

    terrainTypes: ["terrains plats", "terrains résidentiels"],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "mur de clôture",
    ],

    landmarks: ["centre-ville", "zones résidentielles"],

    architectureStyles: ["maisons modernes", "pavillons récents"],

    commonIssues: ["gestion humidité", "fondations"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Saint-Laurent-de-Mure",
      "maçonnerie Saint-Laurent-de-Mure",
      "terrassement Saint-Laurent-de-Mure",
      "devis maçon Saint-Laurent-de-Mure",
    ],

    faq: [
      {
        question: "Intervenez-vous à Saint-Laurent-de-Mure ?",

        answer:
          "Oui, nous intervenons rapidement à Saint-Laurent-de-Mure pour tous types de travaux de maçonnerie.",
      },
    ],
  },
  {
    id: "51",
    slug: "chaponnay",
    name: "Chaponnay",
    zipCode: "69970",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "4 500 habitants",

    description:
      "Entreprise de maçonnerie à Chaponnay spécialisée en rénovation, terrassement, dalle béton et extension maison.",

    introduction:
      "DZ Maçonnerie intervient à Chaponnay pour tous vos projets de construction, rénovation et aménagement extérieur.",

    nearbyCities: ["Mions", "Marennes", "Corbas", "Saint-Pierre-de-Chandieu"],

    neighborhoods: [
      "centre-ville",
      "zones résidentielles",
      "quartiers pavillonnaires",
    ],

    terrainTypes: [
      "terrains plats",
      "terrains résidentiels",
      "zones pavillonnaires",
    ],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
      "mur de clôture",
    ],

    landmarks: ["centre-ville", "zones commerciales"],

    architectureStyles: [
      "maisons contemporaines",
      "maisons individuelles",
      "pavillons récents",
    ],

    commonIssues: ["gestion eaux pluviales", "fondations", "drainage"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "spécialiste terrassement",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Chaponnay",
      "maçonnerie Chaponnay",
      "terrassement Chaponnay",
      "dalle béton Chaponnay",
      "devis maçon Chaponnay",
    ],

    faq: [
      {
        question: "Intervenez-vous à Chaponnay ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Chaponnay et dans les communes voisines.",
      },

      {
        question: "Réalisez-vous des extensions maison à Chaponnay ?",

        answer:
          "Oui, nous réalisons des extensions maison, garages et travaux de gros œuvre sur mesure.",
      },
    ],
  },

  {
    id: "52",
    slug: "saint-pierre-de-chandieu",
    name: "Saint-Pierre-de-Chandieu",
    zipCode: "69780",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "4 700 habitants",

    description:
      "Entreprise de maçonnerie à Saint-Pierre-de-Chandieu spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Saint-Pierre-de-Chandieu pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Chaponnay", "Valencin", "Mions", "Heyrieux"],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains résidentiels", "terrains agricoles"],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "mur de clôture",
    ],

    landmarks: ["centre-ville", "zones pavillonnaires"],

    architectureStyles: ["maisons individuelles", "maisons rurales"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Saint-Pierre-de-Chandieu",
      "maçonnerie Saint-Pierre-de-Chandieu",
      "terrassement Saint-Pierre-de-Chandieu",
      "devis maçon Saint-Pierre-de-Chandieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Saint-Pierre-de-Chandieu ?",

        answer:
          "Oui, nous intervenons rapidement à Saint-Pierre-de-Chandieu pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "53",
    slug: "colombier-saugnieu",
    name: "Colombier-Saugnieu",
    zipCode: "69124",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "2 800 habitants",

    description:
      "Entreprise de maçonnerie à Colombier-Saugnieu spécialisée en rénovation, terrassement et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Colombier-Saugnieu pour tous vos travaux de maçonnerie générale et rénovation.",

    nearbyCities: [
      "Saint-Laurent-de-Mure",
      "Pusignan",
      "Genas",
      "Satolas-et-Bonce",
    ],

    neighborhoods: ["centre village", "zones résidentielles"],

    terrainTypes: ["terrains plats", "zones pavillonnaires"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
    ],

    landmarks: ["Aéroport Lyon-Saint-Exupéry", "centre du village"],

    architectureStyles: ["maisons modernes", "maisons individuelles"],

    commonIssues: ["gestion drainage", "fondations"],

    seoVariations: ["artisan maçon", "entreprise maçonnerie"],

    keywords: [
      "maçon Colombier-Saugnieu",
      "maçonnerie Colombier-Saugnieu",
      "terrassement Colombier-Saugnieu",
      "devis maçon Colombier-Saugnieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Colombier-Saugnieu ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Colombier-Saugnieu et dans les communes voisines.",
      },
    ],
  },

  {
    id: "54",
    slug: "satolas-et-bonce",
    name: "Satolas-et-Bonce",
    zipCode: "38290",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "2 500 habitants",

    description:
      "Entreprise de maçonnerie à Satolas-et-Bonce spécialisée en rénovation, terrassement, dalle béton et gros œuvre.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Satolas-et-Bonce pour tous leurs projets de construction et rénovation.",

    nearbyCities: [
      "Colombier-Saugnieu",
      "Frontonas",
      "La Verpillière",
      "Chamagnieu",
    ],

    neighborhoods: ["centre village", "zones résidentielles"],

    terrainTypes: ["terrains plats", "terrains résidentiels"],

    commonProjects: ["terrasse béton", "dalle béton", "garage", "clôture"],

    landmarks: ["centre du village", "zones logistiques"],

    architectureStyles: ["maisons contemporaines", "pavillons modernes"],

    commonIssues: ["fondations", "gestion humidité"],

    seoVariations: [
      "maçon professionnel",
      "artisan maçon",
      "entreprise maçonnerie",
    ],

    keywords: [
      "maçon Satolas-et-Bonce",
      "maçonnerie Satolas-et-Bonce",
      "terrassement Satolas-et-Bonce",
      "devis maçon Satolas-et-Bonce",
    ],

    faq: [
      {
        question: "Intervenez-vous à Satolas-et-Bonce ?",

        answer:
          "Oui, nous intervenons à Satolas-et-Bonce pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },
  {
    id: "55",
    slug: "chasse-sur-rhone",
    name: "Chasse-sur-Rhône",
    zipCode: "38670",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "6 000 habitants",

    description:
      "Entreprise de maçonnerie à Chasse-sur-Rhône spécialisée en rénovation, terrassement, gros œuvre et dalle béton.",

    introduction:
      "DZ Maçonnerie intervient à Chasse-sur-Rhône pour tous vos projets de maçonnerie générale et rénovation.",

    nearbyCities: ["Vienne", "Seyssuel", "Givors", "Ternay"],

    neighborhoods: [
      "centre-ville",
      "zones résidentielles",
      "quartiers pavillonnaires",
    ],

    terrainTypes: [
      "terrains urbains",
      "terrains en pente",
      "zones résidentielles",
    ],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "mur de soutènement",
      "extension maison",
    ],

    landmarks: ["zone industrielle", "centre-ville", "bord du Rhône"],

    architectureStyles: [
      "maisons individuelles",
      "maisons de ville",
      "pavillons modernes",
    ],

    commonIssues: ["drainage", "fondations", "gestion humidité"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon rénovation",
      "spécialiste terrassement",
    ],

    keywords: [
      "maçon Chasse-sur-Rhône",
      "maçonnerie Chasse-sur-Rhône",
      "terrassement Chasse-sur-Rhône",
      "dalle béton Chasse-sur-Rhône",
      "devis maçon Chasse-sur-Rhône",
    ],

    faq: [
      {
        question: "Intervenez-vous à Chasse-sur-Rhône ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Chasse-sur-Rhône et dans les communes voisines.",
      },
    ],
  },

  {
    id: "56",
    slug: "seyssuel",
    name: "Seyssuel",
    zipCode: "38200",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "2 200 habitants",

    description:
      "Entreprise de maçonnerie à Seyssuel spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Seyssuel pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Vienne", "Chasse-sur-Rhône", "Estrablin"],

    neighborhoods: ["centre village", "zones résidentielles"],

    terrainTypes: ["terrains en pente", "sols argileux"],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "mur de soutènement",
    ],

    landmarks: ["centre du village", "vignobles"],

    architectureStyles: ["maisons traditionnelles", "maisons individuelles"],

    commonIssues: ["terrain en pente", "fondations", "drainage"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Seyssuel",
      "maçonnerie Seyssuel",
      "terrassement Seyssuel",
      "devis maçon Seyssuel",
    ],

    faq: [
      {
        question: "Intervenez-vous à Seyssuel ?",

        answer:
          "Oui, nous intervenons à Seyssuel pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },

  {
    id: "57",
    slug: "estrablin",
    name: "Estrablin",
    zipCode: "38780",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "3 500 habitants",

    description:
      "Entreprise de maçonnerie à Estrablin spécialisée en rénovation, terrassement et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Estrablin pour tous vos travaux de maçonnerie générale et construction.",

    nearbyCities: ["Vienne", "Seyssuel", "Pont-Évêque"],

    neighborhoods: ["centre-ville", "zones pavillonnaires"],

    terrainTypes: ["terrains résidentiels", "terrains agricoles"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
    ],

    landmarks: ["centre-ville", "zones rurales"],

    architectureStyles: ["maisons rurales", "maisons individuelles"],

    commonIssues: ["gestion humidité", "fondations"],

    seoVariations: ["artisan maçon", "entreprise maçonnerie"],

    keywords: [
      "maçon Estrablin",
      "maçonnerie Estrablin",
      "terrassement Estrablin",
      "devis maçon Estrablin",
    ],

    faq: [
      {
        question: "Intervenez-vous à Estrablin ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Estrablin et dans les communes voisines.",
      },
    ],
  },

  {
    id: "58",
    slug: "pont-eveque",
    name: "Pont-Évêque",
    zipCode: "38780",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "5 000 habitants",

    description:
      "Entreprise de maçonnerie à Pont-Évêque spécialisée en rénovation, terrassement, gros œuvre et dalle béton.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Pont-Évêque pour tous leurs projets de rénovation et construction.",

    nearbyCities: ["Vienne", "Estrablin", "Septème"],

    neighborhoods: ["centre-ville", "quartiers résidentiels"],

    terrainTypes: ["terrains urbains", "terrains résidentiels"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "mur de clôture",
    ],

    landmarks: ["centre-ville", "zones commerciales"],

    architectureStyles: ["maisons individuelles", "maisons modernes"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Pont-Évêque",
      "maçonnerie Pont-Évêque",
      "terrassement Pont-Évêque",
      "devis maçon Pont-Évêque",
    ],

    faq: [
      {
        question: "Intervenez-vous à Pont-Évêque ?",

        answer:
          "Oui, nous intervenons rapidement à Pont-Évêque pour tous types de travaux de maçonnerie.",
      },
    ],
  },
  {
    id: "59",
    slug: "reventin-vaugris",
    name: "Reventin-Vaugris",
    zipCode: "38121",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "2 000 habitants",

    description:
      "Entreprise de maçonnerie à Reventin-Vaugris spécialisée en rénovation, terrassement, gros œuvre et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Reventin-Vaugris pour tous vos projets de construction, rénovation et maçonnerie générale.",

    nearbyCities: ["Vienne", "Chonas-l’Amballan", "Seyssuel", "Ampuis"],

    neighborhoods: ["centre village", "zones résidentielles"],

    terrainTypes: [
      "terrains en pente",
      "terrains résidentiels",
      "sols argileux",
    ],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "mur de soutènement",
      "extension maison",
    ],

    landmarks: ["centre du village", "bord du Rhône"],

    architectureStyles: ["maisons traditionnelles", "maisons individuelles"],

    commonIssues: ["terrain en pente", "fondations", "gestion humidité"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Reventin-Vaugris",
      "maçonnerie Reventin-Vaugris",
      "terrassement Reventin-Vaugris",
      "devis maçon Reventin-Vaugris",
    ],

    faq: [
      {
        question: "Intervenez-vous à Reventin-Vaugris ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Reventin-Vaugris et dans les communes voisines.",
      },
    ],
  },

  {
    id: "60",
    slug: "ampuis",
    name: "Ampuis",
    zipCode: "69420",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "2 800 habitants",

    description:
      "Entreprise de maçonnerie à Ampuis spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants d’Ampuis pour tous leurs projets de rénovation et construction.",

    nearbyCities: ["Condrieu", "Seyssuel", "Vienne", "Reventin-Vaugris"],

    neighborhoods: ["centre village", "zones résidentielles"],

    terrainTypes: ["terrains viticoles", "terrains en pente", "sols argileux"],

    commonProjects: [
      "mur de soutènement",
      "terrasse béton",
      "dalle béton",
      "garage",
    ],

    landmarks: ["vignobles Côte-Rôtie", "centre du village"],

    architectureStyles: ["maisons anciennes", "maisons rurales"],

    commonIssues: ["terrain en pente", "drainage", "fondations"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "spécialiste gros œuvre",
    ],

    keywords: [
      "maçon Ampuis",
      "maçonnerie Ampuis",
      "terrassement Ampuis",
      "devis maçon Ampuis",
    ],

    faq: [
      {
        question: "Intervenez-vous à Ampuis ?",

        answer:
          "Oui, nous intervenons à Ampuis pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },

  {
    id: "61",
    slug: "condrieu",
    name: "Condrieu",
    zipCode: "69420",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "4 000 habitants",

    description:
      "Entreprise de maçonnerie à Condrieu spécialisée en rénovation, terrassement, gros œuvre et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Condrieu pour tous vos projets de construction et rénovation.",

    nearbyCities: ["Ampuis", "Les Roches-de-Condrieu", "Vienne"],

    neighborhoods: ["centre-ville", "bord du Rhône"],

    terrainTypes: ["terrains en pente", "terrains viticoles"],

    commonProjects: [
      "terrasse béton",
      "mur de soutènement",
      "dalle béton",
      "garage",
    ],

    landmarks: ["port de plaisance", "vignobles", "centre-ville"],

    architectureStyles: ["maisons anciennes", "maisons traditionnelles"],

    commonIssues: ["fondations", "terrain en pente", "humidité"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Condrieu",
      "maçonnerie Condrieu",
      "terrassement Condrieu",
      "devis maçon Condrieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Condrieu ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Condrieu et dans les communes voisines.",
      },
    ],
  },

  {
    id: "62",
    slug: "givors",
    name: "Givors",
    zipCode: "69700",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "21 000 habitants",

    description:
      "Entreprise de maçonnerie à Givors spécialisée en rénovation, terrassement, gros œuvre et dalle béton.",

    introduction:
      "DZ Maçonnerie accompagne particuliers et professionnels à Givors pour tous leurs projets de rénovation et construction.",

    nearbyCities: ["Chasse-sur-Rhône", "Grigny", "Ternay", "Loire-sur-Rhône"],

    neighborhoods: ["centre-ville", "Les Vernes", "Bans"],

    terrainTypes: [
      "terrains urbains",
      "terrains en pente",
      "zones résidentielles",
    ],

    commonProjects: [
      "terrasse béton",
      "rénovation façade",
      "garage",
      "extension maison",
      "dalle béton",
    ],

    landmarks: ["centre-ville", "bord du Rhône", "zones commerciales"],

    architectureStyles: [
      "maisons de ville",
      "immeubles anciens",
      "pavillons modernes",
    ],

    commonIssues: ["rénovation ancienne", "fissures façade", "fondations"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "spécialiste rénovation",
    ],

    keywords: [
      "maçon Givors",
      "maçonnerie Givors",
      "terrassement Givors",
      "devis maçon Givors",
    ],

    faq: [
      {
        question: "Intervenez-vous à Givors ?",

        answer:
          "Oui, nous intervenons rapidement à Givors pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },
  {
    id: "63",
    slug: "grigny",
    name: "Grigny",
    zipCode: "69520",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "10 000 habitants",

    description:
      "Entreprise de maçonnerie à Grigny spécialisée en rénovation, terrassement, gros œuvre et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Grigny pour tous vos projets de rénovation, construction et maçonnerie générale.",

    nearbyCities: ["Givors", "Ternay", "Feyzin", "Solaize"],

    neighborhoods: [
      "centre-ville",
      "zones résidentielles",
      "quartiers pavillonnaires",
    ],

    terrainTypes: [
      "terrains urbains",
      "terrains résidentiels",
      "terrains en pente",
    ],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
      "rénovation façade",
    ],

    landmarks: ["bord du Rhône", "centre-ville"],

    architectureStyles: [
      "maisons de ville",
      "pavillons modernes",
      "immeubles résidentiels",
    ],

    commonIssues: ["fissures façade", "drainage", "fondations"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Grigny",
      "maçonnerie Grigny",
      "terrassement Grigny",
      "devis maçon Grigny",
    ],

    faq: [
      {
        question: "Intervenez-vous à Grigny ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Grigny et dans les communes voisines.",
      },
    ],
  },

  {
    id: "64",
    slug: "ternay",
    name: "Ternay",
    zipCode: "69360",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "5 600 habitants",

    description:
      "Entreprise de maçonnerie à Ternay spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Ternay pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Givors", "Grigny", "Solaize", "Communay"],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains résidentiels", "terrains en pente"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "mur de soutènement",
    ],

    landmarks: ["centre-ville", "zones pavillonnaires"],

    architectureStyles: ["maisons contemporaines", "maisons individuelles"],

    commonIssues: ["terrain en pente", "fondations"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "spécialiste gros œuvre",
    ],

    keywords: [
      "maçon Ternay",
      "maçonnerie Ternay",
      "terrassement Ternay",
      "devis maçon Ternay",
    ],

    faq: [
      {
        question: "Intervenez-vous à Ternay ?",

        answer:
          "Oui, nous intervenons rapidement à Ternay pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "65",
    slug: "feyzin",
    name: "Feyzin",
    zipCode: "69320",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "10 000 habitants",

    description:
      "Entreprise de maçonnerie à Feyzin spécialisée en rénovation, terrassement, gros œuvre et dalle béton.",

    introduction:
      "DZ Maçonnerie intervient à Feyzin pour tous vos travaux de rénovation et maçonnerie générale.",

    nearbyCities: ["Vénissieux", "Corbas", "Solaize", "Saint-Fons"],

    neighborhoods: ["centre-ville", "quartiers résidentiels"],

    terrainTypes: ["terrains urbains", "terrains résidentiels"],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "rénovation façade",
    ],

    landmarks: ["centre-ville", "bord du Rhône"],

    architectureStyles: ["maisons de ville", "pavillons modernes"],

    commonIssues: ["fissures façade", "drainage", "fondations"],

    seoVariations: [
      "artisan maçon",
      "maçon rénovation",
      "entreprise maçonnerie",
    ],

    keywords: [
      "maçon Feyzin",
      "maçonnerie Feyzin",
      "terrassement Feyzin",
      "devis maçon Feyzin",
    ],

    faq: [
      {
        question: "Intervenez-vous à Feyzin ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Feyzin et dans les communes voisines.",
      },
    ],
  },

  {
    id: "66",
    slug: "saint-fons",
    name: "Saint-Fons",
    zipCode: "69190",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "19 000 habitants",

    description:
      "Entreprise de maçonnerie à Saint-Fons spécialisée en rénovation, gros œuvre et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne particuliers et professionnels à Saint-Fons pour tous leurs projets de rénovation et construction.",

    nearbyCities: ["Feyzin", "Vénissieux", "Lyon"],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains urbains", "terrains résidentiels"],

    commonProjects: [
      "rénovation façade",
      "terrasse béton",
      "garage",
      "dalle béton",
    ],

    landmarks: ["centre-ville", "zones industrielles"],

    architectureStyles: ["immeubles anciens", "maisons de ville"],

    commonIssues: ["rénovation ancienne", "fondations", "fissures façade"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Saint-Fons",
      "maçonnerie Saint-Fons",
      "terrassement Saint-Fons",
      "devis maçon Saint-Fons",
    ],

    faq: [
      {
        question: "Intervenez-vous à Saint-Fons ?",

        answer:
          "Oui, nous intervenons à Saint-Fons pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },
  {
    id: "67",
    slug: "solaize",
    name: "Solaize",
    zipCode: "69360",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "3 200 habitants",

    description:
      "Entreprise de maçonnerie à Solaize spécialisée en rénovation, terrassement, dalle béton et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Solaize pour tous vos projets de construction, rénovation et maçonnerie générale.",

    nearbyCities: [
      "Feyzin",
      "Ternay",
      "Saint-Symphorien-d’Ozon",
      "Sérézin-du-Rhône",
    ],

    neighborhoods: [
      "centre-ville",
      "zones résidentielles",
      "quartiers pavillonnaires",
    ],

    terrainTypes: ["terrains résidentiels", "terrains plats", "sols argileux"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "mur de clôture",
      "extension maison",
    ],

    landmarks: ["centre-ville", "bord du Rhône"],

    architectureStyles: [
      "maisons individuelles",
      "pavillons modernes",
      "maisons contemporaines",
    ],

    commonIssues: ["fondations", "gestion humidité", "drainage"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Solaize",
      "maçonnerie Solaize",
      "terrassement Solaize",
      "devis maçon Solaize",
    ],

    faq: [
      {
        question: "Intervenez-vous à Solaize ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Solaize et dans les communes voisines.",
      },
    ],
  },

  {
    id: "68",
    slug: "communay",
    name: "Communay",
    zipCode: "69360",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "4 500 habitants",

    description:
      "Entreprise de maçonnerie à Communay spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Communay pour tous leurs projets de rénovation et construction.",

    nearbyCities: ["Ternay", "Solaize", "Marennes", "Chaponnay"],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains plats", "terrains pavillonnaires"],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "extension maison",
    ],

    landmarks: ["centre-ville", "zones résidentielles"],

    architectureStyles: ["maisons contemporaines", "pavillons récents"],

    commonIssues: ["gestion eaux pluviales", "fondations"],

    seoVariations: ["entreprise maçonnerie", "artisan maçon"],

    keywords: [
      "maçon Communay",
      "maçonnerie Communay",
      "terrassement Communay",
      "devis maçon Communay",
    ],

    faq: [
      {
        question: "Intervenez-vous à Communay ?",

        answer:
          "Oui, nous intervenons rapidement à Communay pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "69",
    slug: "marennes",
    name: "Marennes",
    zipCode: "69970",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "1 800 habitants",

    description:
      "Entreprise de maçonnerie à Marennes spécialisée en rénovation, terrassement et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Marennes pour tous vos travaux de maçonnerie générale et rénovation.",

    nearbyCities: ["Chaponnay", "Communay", "Simandres", "Mions"],

    neighborhoods: ["centre village", "zones résidentielles"],

    terrainTypes: ["terrains résidentiels", "terrains agricoles"],

    commonProjects: ["terrasse béton", "garage", "dalle béton", "clôture"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons individuelles"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: ["artisan maçon", "maçon professionnel"],

    keywords: [
      "maçon Marennes",
      "maçonnerie Marennes",
      "terrassement Marennes",
      "devis maçon Marennes",
    ],

    faq: [
      {
        question: "Intervenez-vous à Marennes ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Marennes et dans les communes voisines.",
      },
    ],
  },

  {
    id: "70",
    slug: "simandres",
    name: "Simandres",
    zipCode: "69360",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",

    population: "1 900 habitants",

    description:
      "Entreprise de maçonnerie à Simandres spécialisée en rénovation, terrassement, dalle béton et gros œuvre.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Simandres pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Marennes", "Communay", "Saint-Symphorien-d’Ozon", "Corbas"],

    neighborhoods: ["centre village", "zones pavillonnaires"],

    terrainTypes: ["terrains plats", "sols argileux"],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "extension maison",
    ],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons modernes", "maisons individuelles"],

    commonIssues: ["fondations", "gestion humidité", "drainage"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Simandres",
      "maçonnerie Simandres",
      "terrassement Simandres",
      "devis maçon Simandres",
    ],

    faq: [
      {
        question: "Intervenez-vous à Simandres ?",

        answer:
          "Oui, nous intervenons à Simandres pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },
  {
    id: "71",
    slug: "meyrieu-les-etangs",
    name: "Meyrieu-les-Étangs",
    zipCode: "38440",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 000 habitants",

    description:
      "Entreprise de maçonnerie à Meyrieu-les-Étangs spécialisée en rénovation, terrassement, dalle béton et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie intervient à Meyrieu-les-Étangs pour tous vos projets de construction et rénovation proche d’Artas.",

    nearbyCities: [
      "Artas",
      "Saint-Jean-de-Bournay",
      "Villeneuve-de-Marc",
      "Charantonnay",
    ],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["terrains agricoles", "sols argileux", "terrains en pente"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "mur de soutènement",
    ],

    landmarks: ["étangs", "centre du village"],

    architectureStyles: [
      "maisons rurales",
      "fermes rénovées",
      "maisons traditionnelles",
    ],

    commonIssues: ["fondations", "drainage", "gestion humidité"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Meyrieu-les-Étangs",
      "maçonnerie Meyrieu-les-Étangs",
      "terrassement Meyrieu-les-Étangs",
      "devis maçon Meyrieu-les-Étangs",
    ],

    faq: [
      {
        question: "Intervenez-vous à Meyrieu-les-Étangs ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Meyrieu-les-Étangs et dans les communes voisines.",
      },
    ],
  },

  {
    id: "72",
    slug: "charantonnay",
    name: "Charantonnay",
    zipCode: "38790",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "2 000 habitants",

    description:
      "Entreprise de maçonnerie à Charantonnay spécialisée en rénovation, terrassement et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Charantonnay pour tous leurs projets de construction et rénovation.",

    nearbyCities: [
      "Artas",
      "Saint-Jean-de-Bournay",
      "Heyrieux",
      "Meyrieu-les-Étangs",
    ],

    neighborhoods: ["centre village", "zones pavillonnaires"],

    terrainTypes: ["terrains résidentiels", "terrains agricoles"],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "extension maison",
    ],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons individuelles"],

    commonIssues: ["fondations", "drainage"],

    seoVariations: ["entreprise maçonnerie", "artisan maçon"],

    keywords: [
      "maçon Charantonnay",
      "maçonnerie Charantonnay",
      "terrassement Charantonnay",
      "devis maçon Charantonnay",
    ],

    faq: [
      {
        question: "Intervenez-vous à Charantonnay ?",

        answer:
          "Oui, nous intervenons rapidement à Charantonnay pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "73",
    slug: "savas-mepin",
    name: "Savas-Mépin",
    zipCode: "38440",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "900 habitants",

    description:
      "Entreprise de maçonnerie à Savas-Mépin spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie intervient à Savas-Mépin pour tous vos travaux de maçonnerie proche d’Artas.",

    nearbyCities: ["Artas", "Saint-Jean-de-Bournay", "Meyrieu-les-Étangs"],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["sols argileux", "terrains agricoles"],

    commonProjects: ["garage", "terrasse béton", "dalle béton"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "fermes anciennes"],

    commonIssues: ["gestion humidité", "fondations"],

    seoVariations: ["artisan maçon", "maçon professionnel"],

    keywords: [
      "maçon Savas-Mépin",
      "maçonnerie Savas-Mépin",
      "terrassement Savas-Mépin",
      "devis maçon Savas-Mépin",
    ],

    faq: [
      {
        question: "Intervenez-vous à Savas-Mépin ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Savas-Mépin et dans les communes voisines.",
      },
    ],
  },

  {
    id: "74",
    slug: "commelle",
    name: "Commelle",
    zipCode: "38260",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "700 habitants",

    description:
      "Entreprise de maçonnerie à Commelle spécialisée en rénovation, terrassement et dalle béton.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Commelle pour leurs projets de rénovation et construction.",

    nearbyCities: ["Artas", "Sardieu", "La Côte-Saint-André"],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["terrains agricoles", "terrains en pente"],

    commonProjects: ["terrasse béton", "garage", "dalle béton"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons anciennes"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: ["artisan maçon", "entreprise maçonnerie"],

    keywords: [
      "maçon Commelle",
      "maçonnerie Commelle",
      "terrassement Commelle",
      "devis maçon Commelle",
    ],

    faq: [
      {
        question: "Intervenez-vous à Commelle ?",

        answer:
          "Oui, nous intervenons à Commelle pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },
  {
    id: "75",
    slug: "tramole",
    name: "Tramolé",
    zipCode: "38300",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "700 habitants",

    description:
      "Entreprise de maçonnerie à Tramolé spécialisée en rénovation, terrassement, dalle béton et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie intervient à Tramolé pour tous vos projets de construction et rénovation proche d’Artas et Bourgoin-Jallieu.",

    nearbyCities: [
      "Artas",
      "Bourgoin-Jallieu",
      "Meyrieu-les-Étangs",
      "Succieu",
    ],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["terrains agricoles", "sols argileux", "terrains en pente"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "mur de soutènement",
    ],

    landmarks: ["centre du village"],

    architectureStyles: [
      "maisons rurales",
      "fermes rénovées",
      "maisons traditionnelles",
    ],

    commonIssues: ["fondations", "drainage", "gestion humidité"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Tramolé",
      "maçonnerie Tramolé",
      "terrassement Tramolé",
      "devis maçon Tramolé",
    ],

    faq: [
      {
        question: "Intervenez-vous à Tramolé ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Tramolé et dans les communes voisines.",
      },
    ],
  },

  {
    id: "76",
    slug: "succieu",
    name: "Succieu",
    zipCode: "38300",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "800 habitants",

    description:
      "Entreprise de maçonnerie à Succieu spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Succieu pour tous leurs projets de rénovation et construction.",

    nearbyCities: ["Tramolé", "Bourgoin-Jallieu", "Artas", "Ruy-Montceau"],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["terrains agricoles", "terrains résidentiels"],

    commonProjects: [
      "garage",
      "terrasse béton",
      "dalle béton",
      "extension maison",
    ],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons anciennes"],

    commonIssues: ["fondations", "drainage"],

    seoVariations: ["artisan maçon", "maçon rénovation"],

    keywords: [
      "maçon Succieu",
      "maçonnerie Succieu",
      "terrassement Succieu",
      "devis maçon Succieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Succieu ?",

        answer:
          "Oui, nous intervenons rapidement à Succieu pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "77",
    slug: "ruzieu",
    name: "Ruy-Montceau",
    zipCode: "38300",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "4 800 habitants",

    description:
      "Entreprise de maçonnerie à Ruy-Montceau spécialisée en rénovation, terrassement, gros œuvre et dalle béton.",

    introduction:
      "DZ Maçonnerie intervient à Ruy-Montceau pour tous vos travaux de maçonnerie générale et rénovation proche de Bourgoin-Jallieu.",

    nearbyCities: [
      "Bourgoin-Jallieu",
      "Succieu",
      "Nivolas-Vermelle",
      "Saint-Savin",
    ],

    neighborhoods: [
      "centre-ville",
      "quartiers résidentiels",
      "zones pavillonnaires",
    ],

    terrainTypes: ["terrains résidentiels", "terrains en pente"],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "extension maison",
      "mur de clôture",
    ],

    landmarks: ["centre-ville", "zones résidentielles"],

    architectureStyles: ["maisons individuelles", "pavillons modernes"],

    commonIssues: ["drainage", "fondations", "terrain en pente"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Ruy-Montceau",
      "maçonnerie Ruy-Montceau",
      "terrassement Ruy-Montceau",
      "devis maçon Ruy-Montceau",
    ],

    faq: [
      {
        question: "Intervenez-vous à Ruy-Montceau ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Ruy-Montceau et dans les communes voisines.",
      },
    ],
  },

  {
    id: "78",
    slug: "saint-savin",
    name: "Saint-Savin",
    zipCode: "38300",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "4 000 habitants",

    description:
      "Entreprise de maçonnerie à Saint-Savin spécialisée en rénovation, terrassement, dalle béton et extension maison.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Saint-Savin pour tous leurs projets de construction et rénovation.",

    nearbyCities: [
      "Ruy-Montceau",
      "Bourgoin-Jallieu",
      "Succieu",
      "L’Isle-d’Abeau",
    ],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains résidentiels", "terrains agricoles"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
    ],

    landmarks: ["centre-ville", "zones pavillonnaires"],

    architectureStyles: ["maisons modernes", "maisons individuelles"],

    commonIssues: ["gestion humidité", "fondations"],

    seoVariations: ["artisan maçon", "entreprise maçonnerie"],

    keywords: [
      "maçon Saint-Savin",
      "maçonnerie Saint-Savin",
      "terrassement Saint-Savin",
      "devis maçon Saint-Savin",
    ],

    faq: [
      {
        question: "Intervenez-vous à Saint-Savin ?",

        answer:
          "Oui, nous intervenons à Saint-Savin pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },
  {
    id: "79",
    slug: "nivolas-vermelle",
    name: "Nivolas-Vermelle",
    zipCode: "38300",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "2 700 habitants",

    description:
      "Entreprise de maçonnerie à Nivolas-Vermelle spécialisée en rénovation, terrassement, dalle béton et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie intervient à Nivolas-Vermelle pour tous vos projets de construction et rénovation proche de Bourgoin-Jallieu.",

    nearbyCities: [
      "Bourgoin-Jallieu",
      "Ruy-Montceau",
      "Cessieu",
      "L’Isle-d’Abeau",
    ],

    neighborhoods: [
      "centre-ville",
      "zones résidentielles",
      "quartiers pavillonnaires",
    ],

    terrainTypes: ["terrains résidentiels", "terrains plats", "sols argileux"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
      "mur de clôture",
    ],

    landmarks: ["centre-ville", "zones commerciales"],

    architectureStyles: [
      "maisons individuelles",
      "maisons modernes",
      "pavillons récents",
    ],

    commonIssues: ["fondations", "gestion humidité", "drainage"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Nivolas-Vermelle",
      "maçonnerie Nivolas-Vermelle",
      "terrassement Nivolas-Vermelle",
      "devis maçon Nivolas-Vermelle",
    ],

    faq: [
      {
        question: "Intervenez-vous à Nivolas-Vermelle ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Nivolas-Vermelle et dans les communes voisines.",
      },
    ],
  },

  {
    id: "80",
    slug: "domarin",
    name: "Domarin",
    zipCode: "38300",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 800 habitants",

    description:
      "Entreprise de maçonnerie à Domarin spécialisée en rénovation, terrassement et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Domarin pour tous leurs projets de rénovation et construction.",

    nearbyCities: ["Bourgoin-Jallieu", "L’Isle-d’Abeau", "Maubec"],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains résidentiels", "terrains plats"],

    commonProjects: ["terrasse béton", "dalle béton", "garage", "clôture"],

    landmarks: ["centre-ville"],

    architectureStyles: ["maisons contemporaines", "maisons individuelles"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: ["entreprise maçonnerie", "artisan maçon"],

    keywords: [
      "maçon Domarin",
      "maçonnerie Domarin",
      "terrassement Domarin",
      "devis maçon Domarin",
    ],

    faq: [
      {
        question: "Intervenez-vous à Domarin ?",

        answer:
          "Oui, nous intervenons rapidement à Domarin pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "81",
    slug: "maubec",
    name: "Maubec",
    zipCode: "38300",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 700 habitants",

    description:
      "Entreprise de maçonnerie à Maubec spécialisée en rénovation, terrassement, dalle béton et gros œuvre.",

    introduction:
      "DZ Maçonnerie intervient à Maubec pour tous vos travaux de maçonnerie générale et rénovation proche de Bourgoin-Jallieu.",

    nearbyCities: ["Domarin", "Bourgoin-Jallieu", "Saint-Alban-de-Roche"],

    neighborhoods: ["centre village", "zones pavillonnaires"],

    terrainTypes: ["terrains plats", "terrains résidentiels"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
    ],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons modernes", "maisons individuelles"],

    commonIssues: ["gestion humidité", "fondations"],

    seoVariations: ["artisan maçon", "maçon professionnel"],

    keywords: [
      "maçon Maubec",
      "maçonnerie Maubec",
      "terrassement Maubec",
      "devis maçon Maubec",
    ],

    faq: [
      {
        question: "Intervenez-vous à Maubec ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Maubec et dans les communes voisines.",
      },
    ],
  },

  {
    id: "82",
    slug: "saint-alban-de-roche",
    name: "Saint-Alban-de-Roche",
    zipCode: "38080",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "2 000 habitants",

    description:
      "Entreprise de maçonnerie à Saint-Alban-de-Roche spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Saint-Alban-de-Roche pour tous leurs projets de construction et rénovation.",

    nearbyCities: [
      "L’Isle-d’Abeau",
      "Maubec",
      "Bourgoin-Jallieu",
      "Villefontaine",
    ],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains en pente", "terrains résidentiels"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "mur de soutènement",
      "dalle béton",
    ],

    landmarks: ["centre-ville"],

    architectureStyles: ["maisons contemporaines", "pavillons modernes"],

    commonIssues: ["terrain en pente", "fondations", "drainage"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Saint-Alban-de-Roche",
      "maçonnerie Saint-Alban-de-Roche",
      "terrassement Saint-Alban-de-Roche",
      "devis maçon Saint-Alban-de-Roche",
    ],

    faq: [
      {
        question: "Intervenez-vous à Saint-Alban-de-Roche ?",

        answer:
          "Oui, nous intervenons à Saint-Alban-de-Roche pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },
  {
    id: "83",
    slug: "les-epares",
    name: "Les Éparres",
    zipCode: "38300",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 000 habitants",

    description:
      "Entreprise de maçonnerie aux Éparres spécialisée en rénovation, terrassement, dalle béton et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie intervient aux Éparres pour tous vos projets de construction et rénovation proche de Bourgoin-Jallieu.",

    nearbyCities: ["Bourgoin-Jallieu", "Ruy-Montceau", "Tramolé", "Succieu"],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["terrains agricoles", "terrains en pente", "sols argileux"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "mur de soutènement",
    ],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "fermes rénovées"],

    commonIssues: ["drainage", "fondations", "gestion humidité"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Les Éparres",
      "maçonnerie Les Éparres",
      "terrassement Les Éparres",
      "devis maçon Les Éparres",
    ],

    faq: [
      {
        question: "Intervenez-vous aux Éparres ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie aux Éparres et dans les communes voisines.",
      },
    ],
  },

  {
    id: "84",
    slug: "saint-chef",
    name: "Saint-Chef",
    zipCode: "38890",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "3 800 habitants",

    description:
      "Entreprise de maçonnerie à Saint-Chef spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Saint-Chef pour tous leurs projets de rénovation et construction.",

    nearbyCities: [
      "Bourgoin-Jallieu",
      "Ruy-Montceau",
      "Saint-Savin",
      "Salagnon",
    ],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: [
      "terrains agricoles",
      "terrains résidentiels",
      "terrains en pente",
    ],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "extension maison",
    ],

    landmarks: ["Abbaye de Saint-Chef", "centre-ville"],

    architectureStyles: [
      "maisons anciennes",
      "maisons rurales",
      "pavillons modernes",
    ],

    commonIssues: ["terrain en pente", "fondations", "humidité"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Saint-Chef",
      "maçonnerie Saint-Chef",
      "terrassement Saint-Chef",
      "devis maçon Saint-Chef",
    ],

    faq: [
      {
        question: "Intervenez-vous à Saint-Chef ?",

        answer:
          "Oui, nous intervenons rapidement à Saint-Chef pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "85",
    slug: "salagnon",
    name: "Salagnon",
    zipCode: "38890",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 300 habitants",

    description:
      "Entreprise de maçonnerie à Salagnon spécialisée en rénovation, terrassement et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Salagnon pour tous vos travaux de maçonnerie générale et rénovation.",

    nearbyCities: ["Saint-Chef", "Morestel", "Trept"],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["terrains agricoles", "sols argileux"],

    commonProjects: ["terrasse béton", "garage", "dalle béton", "clôture"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons individuelles"],

    commonIssues: ["drainage", "gestion humidité"],

    seoVariations: ["artisan maçon", "maçon professionnel"],

    keywords: [
      "maçon Salagnon",
      "maçonnerie Salagnon",
      "terrassement Salagnon",
      "devis maçon Salagnon",
    ],

    faq: [
      {
        question: "Intervenez-vous à Salagnon ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Salagnon et dans les communes voisines.",
      },
    ],
  },

  {
    id: "86",
    slug: "trept",
    name: "Trept",
    zipCode: "38460",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "2 200 habitants",

    description:
      "Entreprise de maçonnerie à Trept spécialisée en rénovation, terrassement, dalle béton et gros œuvre.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Trept pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Saint-Chef", "Crémieu", "Salagnon", "Chamagnieu"],

    neighborhoods: ["centre-ville", "zones pavillonnaires"],

    terrainTypes: ["terrains en pente", "terrains résidentiels"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "mur de soutènement",
    ],

    landmarks: ["centre-ville"],

    architectureStyles: ["maisons individuelles", "maisons traditionnelles"],

    commonIssues: ["terrain en pente", "fondations", "drainage"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Trept",
      "maçonnerie Trept",
      "terrassement Trept",
      "devis maçon Trept",
    ],

    faq: [
      {
        question: "Intervenez-vous à Trept ?",

        answer:
          "Oui, nous intervenons à Trept pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },
  {
    id: "87",
    slug: "cremieu",
    name: "Crémieu",
    zipCode: "38460",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "3 500 habitants",

    description:
      "Entreprise de maçonnerie à Crémieu spécialisée en rénovation, terrassement, gros œuvre et maçonnerie traditionnelle.",

    introduction:
      "DZ Maçonnerie intervient à Crémieu pour tous vos projets de rénovation et construction dans le respect du patrimoine local.",

    nearbyCities: [
      "Trept",
      "Chamagnieu",
      "Tignieu-Jameyzieu",
      "Saint-Romain-de-Jalionas",
    ],

    neighborhoods: ["centre historique", "zones résidentielles"],

    terrainTypes: ["terrains anciens", "terrains en pente", "sols argileux"],

    commonProjects: [
      "rénovation façade",
      "terrasse béton",
      "dalle béton",
      "mur en pierre",
      "extension maison",
    ],

    landmarks: ["cité médiévale", "halles de Crémieu"],

    architectureStyles: [
      "maisons anciennes",
      "bâtiments en pierre",
      "maisons traditionnelles",
    ],

    commonIssues: ["rénovation ancienne", "humidité", "fissures façade"],

    seoVariations: [
      "artisan maçon",
      "maçon rénovation",
      "entreprise maçonnerie",
    ],

    keywords: [
      "maçon Crémieu",
      "maçonnerie Crémieu",
      "terrassement Crémieu",
      "rénovation maison Crémieu",
      "devis maçon Crémieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Crémieu ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Crémieu et dans les communes voisines.",
      },
    ],
  },

  {
    id: "88",
    slug: "morestel",
    name: "Morestel",
    zipCode: "38510",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "4 500 habitants",

    description:
      "Entreprise de maçonnerie à Morestel spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Morestel pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Saint-Chef", "Salagnon", "Les Avenières", "Dolomieu"],

    neighborhoods: ["centre-ville", "quartiers résidentiels"],

    terrainTypes: ["terrains résidentiels", "terrains agricoles"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
    ],

    landmarks: ["vieille ville", "centre-ville"],

    architectureStyles: ["maisons traditionnelles", "maisons individuelles"],

    commonIssues: ["fondations", "gestion humidité"],

    seoVariations: ["entreprise maçonnerie", "artisan maçon"],

    keywords: [
      "maçon Morestel",
      "maçonnerie Morestel",
      "terrassement Morestel",
      "devis maçon Morestel",
    ],

    faq: [
      {
        question: "Intervenez-vous à Morestel ?",

        answer:
          "Oui, nous intervenons rapidement à Morestel pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "89",
    slug: "dolomieu",
    name: "Dolomieu",
    zipCode: "38110",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "3 200 habitants",

    description:
      "Entreprise de maçonnerie à Dolomieu spécialisée en rénovation, terrassement, dalle béton et gros œuvre.",

    introduction:
      "DZ Maçonnerie intervient à Dolomieu pour tous vos projets de maçonnerie générale et rénovation.",

    nearbyCities: [
      "Morestel",
      "La Tour-du-Pin",
      "Saint-Clair-de-la-Tour",
      "Les Avenières",
    ],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains en pente", "terrains résidentiels"],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "mur de soutènement",
    ],

    landmarks: ["centre-ville"],

    architectureStyles: ["maisons individuelles", "maisons rurales"],

    commonIssues: ["terrain en pente", "fondations", "drainage"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Dolomieu",
      "maçonnerie Dolomieu",
      "terrassement Dolomieu",
      "devis maçon Dolomieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Dolomieu ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Dolomieu et dans les communes voisines.",
      },
    ],
  },

  {
    id: "90",
    slug: "les-avenieres-veyrins-thuellin",
    name: "Les Avenières Veyrins-Thuellin",
    zipCode: "38630",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "8 000 habitants",

    description:
      "Entreprise de maçonnerie aux Avenières Veyrins-Thuellin spécialisée en rénovation, terrassement et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie accompagne les habitants des Avenières Veyrins-Thuellin pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Morestel", "Dolomieu", "Aoste", "Saint-Genix-les-Villages"],

    neighborhoods: ["centre-ville", "zones pavillonnaires"],

    terrainTypes: ["terrains plats", "terrains agricoles"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "clôture",
      "extension maison",
    ],

    landmarks: ["Walibi Rhône-Alpes", "centre-ville"],

    architectureStyles: ["maisons modernes", "maisons individuelles"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Les Avenières",
      "maçonnerie Les Avenières",
      "terrassement Les Avenières",
      "devis maçon Les Avenières",
    ],

    faq: [
      {
        question: "Intervenez-vous aux Avenières Veyrins-Thuellin ?",

        answer:
          "Oui, nous intervenons aux Avenières Veyrins-Thuellin pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },
  {
    id: "91",
    slug: "aoste",
    name: "Aoste",
    zipCode: "38490",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "3 000 habitants",

    description:
      "Entreprise de maçonnerie à Aoste spécialisée en rénovation, terrassement, gros œuvre et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie intervient à Aoste pour tous vos projets de construction et rénovation en Nord-Isère.",

    nearbyCities: [
      "Les Avenières",
      "Saint-Genix-les-Villages",
      "La Bâtie-Montgascon",
      "Morestel",
    ],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains agricoles", "terrains plats"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
      "mur de clôture",
    ],

    landmarks: ["centre-ville", "zones commerciales"],

    architectureStyles: ["maisons traditionnelles", "maisons individuelles"],

    commonIssues: ["fondations", "drainage"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Aoste",
      "maçonnerie Aoste",
      "terrassement Aoste",
      "devis maçon Aoste",
    ],

    faq: [
      {
        question: "Intervenez-vous à Aoste ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Aoste et dans les communes voisines.",
      },
    ],
  },

  {
    id: "92",
    slug: "la-batie-montgascon",
    name: "La Bâtie-Montgascon",
    zipCode: "38110",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 900 habitants",

    description:
      "Entreprise de maçonnerie à La Bâtie-Montgascon spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de La Bâtie-Montgascon pour tous leurs projets de rénovation et construction.",

    nearbyCities: ["Aoste", "Dolomieu", "Les Avenières", "La Tour-du-Pin"],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["terrains agricoles", "sols argileux"],

    commonProjects: ["terrasse béton", "garage", "dalle béton", "clôture"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons anciennes"],

    commonIssues: ["gestion humidité", "fondations"],

    seoVariations: ["entreprise maçonnerie", "artisan maçon"],

    keywords: [
      "maçon La Bâtie-Montgascon",
      "maçonnerie La Bâtie-Montgascon",
      "terrassement La Bâtie-Montgascon",
      "devis maçon La Bâtie-Montgascon",
    ],

    faq: [
      {
        question: "Intervenez-vous à La Bâtie-Montgascon ?",

        answer:
          "Oui, nous intervenons rapidement à La Bâtie-Montgascon pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "93",
    slug: "saint-genix-les-villages",
    name: "Saint-Genix-les-Villages",
    zipCode: "73240",
    region: "Auvergne-Rhône-Alpes",
    department: "Savoie",

    population: "3 000 habitants",

    description:
      "Entreprise de maçonnerie à Saint-Genix-les-Villages spécialisée en rénovation, terrassement et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Saint-Genix-les-Villages pour tous vos travaux de maçonnerie générale et rénovation.",

    nearbyCities: ["Aoste", "Les Avenières", "Le Pont-de-Beauvoisin"],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains en pente", "terrains agricoles"],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "mur de soutènement",
    ],

    landmarks: ["centre-ville", "bord du Rhône"],

    architectureStyles: ["maisons anciennes", "maisons rurales"],

    commonIssues: ["terrain en pente", "drainage", "fondations"],

    seoVariations: [
      "artisan maçon",
      "maçon rénovation",
      "entreprise maçonnerie",
    ],

    keywords: [
      "maçon Saint-Genix-les-Villages",
      "maçonnerie Saint-Genix-les-Villages",
      "terrassement Saint-Genix-les-Villages",
      "devis maçon Saint-Genix-les-Villages",
    ],

    faq: [
      {
        question: "Intervenez-vous à Saint-Genix-les-Villages ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Saint-Genix-les-Villages et dans les communes voisines.",
      },
    ],
  },

  {
    id: "94",
    slug: "le-pont-de-beauvoisin",
    name: "Le Pont-de-Beauvoisin",
    zipCode: "38480",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "3 500 habitants",

    description:
      "Entreprise de maçonnerie au Pont-de-Beauvoisin spécialisée en rénovation, gros œuvre et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants du Pont-de-Beauvoisin pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Saint-Genix-les-Villages", "Aoste", "Les Abrets"],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains urbains", "terrains en pente"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "rénovation façade",
    ],

    landmarks: ["centre-ville", "pont historique"],

    architectureStyles: ["maisons de ville", "immeubles anciens"],

    commonIssues: ["fissures façade", "fondations", "humidité"],

    seoVariations: [
      "entreprise maçonnerie",
      "artisan maçon",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Le Pont-de-Beauvoisin",
      "maçonnerie Le Pont-de-Beauvoisin",
      "terrassement Le Pont-de-Beauvoisin",
      "devis maçon Le Pont-de-Beauvoisin",
    ],

    faq: [
      {
        question: "Intervenez-vous au Pont-de-Beauvoisin ?",

        answer:
          "Oui, nous intervenons au Pont-de-Beauvoisin pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },
  {
    id: "95",
    slug: "les-abrets-en-dauphine",
    name: "Les Abrets-en-Dauphiné",
    zipCode: "38490",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "6 500 habitants",

    description:
      "Entreprise de maçonnerie aux Abrets-en-Dauphiné spécialisée en rénovation, terrassement, dalle béton et gros œuvre.",

    introduction:
      "DZ Maçonnerie intervient aux Abrets-en-Dauphiné pour tous vos projets de construction et rénovation en Nord-Isère.",

    nearbyCities: ["Le Pont-de-Beauvoisin", "Aoste", "Fitilieu", "Charancieu"],

    neighborhoods: [
      "centre-ville",
      "zones résidentielles",
      "quartiers pavillonnaires",
    ],

    terrainTypes: ["terrains plats", "terrains agricoles", "sols argileux"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
      "mur de clôture",
    ],

    landmarks: ["centre-ville", "zones commerciales"],

    architectureStyles: [
      "maisons individuelles",
      "maisons traditionnelles",
      "pavillons modernes",
    ],

    commonIssues: ["fondations", "gestion humidité", "drainage"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Les Abrets-en-Dauphiné",
      "maçonnerie Les Abrets-en-Dauphiné",
      "terrassement Les Abrets-en-Dauphiné",
      "devis maçon Les Abrets-en-Dauphiné",
    ],

    faq: [
      {
        question: "Intervenez-vous aux Abrets-en-Dauphiné ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie aux Abrets-en-Dauphiné et dans les communes voisines.",
      },
    ],
  },

  {
    id: "96",
    slug: "charancieu",
    name: "Charancieu",
    zipCode: "38490",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "750 habitants",

    description:
      "Entreprise de maçonnerie à Charancieu spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Charancieu pour tous leurs projets de rénovation et construction.",

    nearbyCities: ["Les Abrets-en-Dauphiné", "Aoste", "Le Pont-de-Beauvoisin"],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["terrains agricoles", "terrains en pente"],

    commonProjects: ["terrasse béton", "garage", "dalle béton", "clôture"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons anciennes"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: ["artisan maçon", "maçon professionnel"],

    keywords: [
      "maçon Charancieu",
      "maçonnerie Charancieu",
      "terrassement Charancieu",
      "devis maçon Charancieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Charancieu ?",

        answer:
          "Oui, nous intervenons rapidement à Charancieu pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "97",
    slug: "fitilieu",
    name: "Fitilieu",
    zipCode: "38490",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "800 habitants",

    description:
      "Entreprise de maçonnerie à Fitilieu spécialisée en rénovation, terrassement et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Fitilieu pour tous vos travaux de maçonnerie générale et rénovation.",

    nearbyCities: ["Les Abrets-en-Dauphiné", "Charancieu", "Aoste"],

    neighborhoods: ["centre village", "zones résidentielles"],

    terrainTypes: ["terrains plats", "terrains agricoles"],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "extension maison",
    ],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons individuelles", "maisons rurales"],

    commonIssues: ["gestion humidité", "fondations"],

    seoVariations: ["entreprise maçonnerie", "artisan maçon"],

    keywords: [
      "maçon Fitilieu",
      "maçonnerie Fitilieu",
      "terrassement Fitilieu",
      "devis maçon Fitilieu",
    ],

    faq: [
      {
        question: "Intervenez-vous à Fitilieu ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Fitilieu et dans les communes voisines.",
      },
    ],
  },

  {
    id: "98",
    slug: "chimilin",
    name: "Chimilin",
    zipCode: "38490",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 500 habitants",

    description:
      "Entreprise de maçonnerie à Chimilin spécialisée en rénovation, terrassement, dalle béton et gros œuvre.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Chimilin pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["Les Abrets-en-Dauphiné", "Le Pont-de-Beauvoisin", "Aoste"],

    neighborhoods: ["centre village", "zones pavillonnaires"],

    terrainTypes: ["terrains résidentiels", "terrains agricoles"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "mur de soutènement",
    ],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons modernes", "maisons rurales"],

    commonIssues: ["fondations", "drainage", "terrain humide"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon rénovation",
    ],

    keywords: [
      "maçon Chimilin",
      "maçonnerie Chimilin",
      "terrassement Chimilin",
      "devis maçon Chimilin",
    ],

    faq: [
      {
        question: "Intervenez-vous à Chimilin ?",

        answer:
          "Oui, nous intervenons à Chimilin pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },
  {
    id: "99",
    slug: "la-cote-saint-andre",
    name: "La Côte-Saint-André",
    zipCode: "38260",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "5 000 habitants",

    description:
      "Entreprise de maçonnerie à La Côte-Saint-André spécialisée en rénovation, terrassement, gros œuvre et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie intervient à La Côte-Saint-André pour tous vos projets de construction et rénovation en Isère.",

    nearbyCities: ["Commelle", "Sardieu", "Gillonnay", "Ornacieux-Balbins"],

    neighborhoods: ["centre-ville", "quartiers résidentiels"],

    terrainTypes: ["terrains agricoles", "terrains en pente", "sols argileux"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "rénovation façade",
      "extension maison",
    ],

    landmarks: ["Château Louis XI", "centre-ville", "Halle médiévale"],

    architectureStyles: [
      "maisons anciennes",
      "maisons de ville",
      "maisons traditionnelles",
    ],

    commonIssues: ["fissures façade", "fondations", "gestion humidité"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon rénovation",
    ],

    keywords: [
      "maçon La Côte-Saint-André",
      "maçonnerie La Côte-Saint-André",
      "terrassement La Côte-Saint-André",
      "devis maçon La Côte-Saint-André",
    ],

    faq: [
      {
        question: "Intervenez-vous à La Côte-Saint-André ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à La Côte-Saint-André et dans les communes voisines.",
      },
    ],
  },

  {
    id: "100",
    slug: "gillonnay",
    name: "Gillonnay",
    zipCode: "38260",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 100 habitants",

    description:
      "Entreprise de maçonnerie à Gillonnay spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Gillonnay pour tous leurs projets de rénovation et construction.",

    nearbyCities: [
      "La Côte-Saint-André",
      "Saint-Étienne-de-Saint-Geoirs",
      "Brézins",
    ],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["terrains agricoles", "terrains plats"],

    commonProjects: ["terrasse béton", "dalle béton", "garage", "clôture"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons individuelles"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: ["entreprise maçonnerie", "artisan maçon"],

    keywords: [
      "maçon Gillonnay",
      "maçonnerie Gillonnay",
      "terrassement Gillonnay",
      "devis maçon Gillonnay",
    ],

    faq: [
      {
        question: "Intervenez-vous à Gillonnay ?",

        answer:
          "Oui, nous intervenons rapidement à Gillonnay pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "101",
    slug: "saint-etienne-de-saint-geoirs",
    name: "Saint-Étienne-de-Saint-Geoirs",
    zipCode: "38590",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "3 200 habitants",

    description:
      "Entreprise de maçonnerie à Saint-Étienne-de-Saint-Geoirs spécialisée en rénovation, terrassement et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie intervient à Saint-Étienne-de-Saint-Geoirs pour tous vos travaux de maçonnerie générale et rénovation.",

    nearbyCities: ["Gillonnay", "Brézins", "La Côte-Saint-André"],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains plats", "terrains agricoles"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
    ],

    landmarks: ["aéroport Grenoble-Alpes-Isère", "centre-ville"],

    architectureStyles: ["maisons modernes", "maisons individuelles"],

    commonIssues: ["gestion humidité", "fondations"],

    seoVariations: [
      "artisan maçon",
      "maçon rénovation",
      "entreprise maçonnerie",
    ],

    keywords: [
      "maçon Saint-Étienne-de-Saint-Geoirs",
      "maçonnerie Saint-Étienne-de-Saint-Geoirs",
      "terrassement Saint-Étienne-de-Saint-Geoirs",
      "devis maçon Saint-Étienne-de-Saint-Geoirs",
    ],

    faq: [
      {
        question: "Intervenez-vous à Saint-Étienne-de-Saint-Geoirs ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Saint-Étienne-de-Saint-Geoirs et dans les communes voisines.",
      },
    ],
  },

  {
    id: "102",
    slug: "brezins",
    name: "Brézins",
    zipCode: "38590",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "2 000 habitants",

    description:
      "Entreprise de maçonnerie à Brézins spécialisée en rénovation, terrassement, dalle béton et gros œuvre.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Brézins pour tous leurs projets de construction et rénovation.",

    nearbyCities: [
      "Saint-Étienne-de-Saint-Geoirs",
      "Gillonnay",
      "La Côte-Saint-André",
    ],

    neighborhoods: ["centre village", "zones pavillonnaires"],

    terrainTypes: ["terrains résidentiels", "terrains agricoles"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "mur de clôture",
    ],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons individuelles", "maisons rurales"],

    commonIssues: ["fondations", "drainage"],

    seoVariations: [
      "artisan maçon",
      "entreprise maçonnerie",
      "maçon professionnel",
    ],

    keywords: [
      "maçon Brézins",
      "maçonnerie Brézins",
      "terrassement Brézins",
      "devis maçon Brézins",
    ],

    faq: [
      {
        question: "Intervenez-vous à Brézins ?",

        answer:
          "Oui, nous intervenons à Brézins pour tous types de travaux de maçonnerie et rénovation.",
      },
    ],
  },
  {
    id: "103",
    slug: "ornacieux-balbins",
    name: "Ornacieux-Balbins",
    zipCode: "38260",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 300 habitants",

    description:
      "Entreprise de maçonnerie à Ornacieux-Balbins spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie intervient à Ornacieux-Balbins pour tous vos projets de rénovation et construction en Isère.",

    nearbyCities: ["La Côte-Saint-André", "Gillonnay", "Faramans"],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["terrains agricoles", "sols argileux"],

    commonProjects: ["terrasse béton", "garage", "dalle béton", "clôture"],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "maisons anciennes"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: ["artisan maçon", "entreprise maçonnerie"],

    keywords: [
      "maçon Ornacieux-Balbins",
      "maçonnerie Ornacieux-Balbins",
      "terrassement Ornacieux-Balbins",
      "devis maçon Ornacieux-Balbins",
    ],

    faq: [
      {
        question: "Intervenez-vous à Ornacieux-Balbins ?",

        answer:
          "Oui, nous réalisons tous types de travaux de maçonnerie à Ornacieux-Balbins et dans les communes voisines.",
      },
    ],
  },

  {
    id: "104",
    slug: "faramans",
    name: "Faramans",
    zipCode: "38260",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 000 habitants",

    description:
      "Entreprise de maçonnerie à Faramans spécialisée en rénovation, terrassement, dalle béton et gros œuvre.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Faramans pour tous leurs projets de construction et rénovation.",

    nearbyCities: ["La Côte-Saint-André", "Ornacieux-Balbins", "Mottier"],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["terrains agricoles", "terrains plats"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
    ],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons rurales", "fermes rénovées"],

    commonIssues: ["fondations", "gestion humidité"],

    seoVariations: ["artisan maçon", "maçon professionnel"],

    keywords: [
      "maçon Faramans",
      "maçonnerie Faramans",
      "terrassement Faramans",
      "devis maçon Faramans",
    ],

    faq: [
      {
        question: "Intervenez-vous à Faramans ?",

        answer:
          "Oui, nous intervenons rapidement à Faramans pour tous types de travaux de maçonnerie.",
      },
    ],
  },

  {
    id: "105",
    slug: "mottier",
    name: "Mottier",
    zipCode: "38260",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "700 habitants",

    description:
      "Entreprise de maçonnerie à Mottier spécialisée en rénovation, terrassement et maçonnerie générale.",

    introduction:
      "DZ Maçonnerie intervient à Mottier pour tous vos travaux de maçonnerie générale et rénovation.",

    nearbyCities: ["Faramans", "La Côte-Saint-André", "Champier"],

    neighborhoods: ["centre village", "zones rurales"],

    terrainTypes: ["sols argileux", "terrains agricoles"],

    commonProjects: [
      "terrasse béton",
      "dalle béton",
      "garage",
      "mur de clôture",
    ],

    landmarks: ["centre du village"],

    architectureStyles: ["maisons anciennes", "maisons rurales"],

    commonIssues: ["gestion humidité", "fondations"],

    seoVariations: ["entreprise maçonnerie", "artisan maçon"],

    keywords: [
      "maçon Mottier",
      "maçonnerie Mottier",
      "terrassement Mottier",
      "devis maçon Mottier",
    ],

    faq: [
      {
        question: "Intervenez-vous à Mottier ?",

        answer:
          "Oui, nous réalisons des travaux de maçonnerie générale à Mottier et dans les communes voisines.",
      },
    ],
  },

  {
    id: "106",
    slug: "champier",
    name: "Champier",
    zipCode: "38260",
    region: "Auvergne-Rhône-Alpes",
    department: "Isère",

    population: "1 500 habitants",

    description:
      "Entreprise de maçonnerie à Champier spécialisée en rénovation, terrassement, dalle béton et aménagement extérieur.",

    introduction:
      "DZ Maçonnerie accompagne les habitants de Champier pour tous leurs projets de construction et rénovation en Isère.",

    nearbyCities: ["Mottier", "La Côte-Saint-André", "Eclose-Badinières"],

    neighborhoods: ["centre-ville", "zones résidentielles"],

    terrainTypes: ["terrains agricoles", "terrains résidentiels"],

    commonProjects: [
      "terrasse béton",
      "garage",
      "dalle béton",
      "extension maison",
    ],

    landmarks: ["centre-ville"],

    architectureStyles: ["maisons individuelles", "maisons rurales"],

    commonIssues: ["drainage", "fondations"],

    seoVariations: [
      "artisan maçon",
      "maçon rénovation",
      "entreprise maçonnerie",
    ],

    keywords: [
      "maçon Champier",
      "maçonnerie Champier",
      "terrassement Champier",
      "devis maçon Champier",
    ],

    faq: [
      {
        question: "Intervenez-vous à Champier ?",

        answer:
          "Oui, nous intervenons à Champier pour tous types de travaux de maçonnerie et rénovation.",
      },
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

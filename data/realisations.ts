export type PhotoPhase = "avant" | "pendant" | "apres";

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
    /** pour les filtres de galerie et le bloc avant/après */
    phase?: PhotoPhase;
  }[];
  materials?: string[];
  keywords?: string[];
  // ---- champs fiche détaillée (tous optionnels, remplir avec les VRAIES
  // données du chantier — les sections correspondantes n'apparaissent que
  // si le champ est renseigné) ----
  /** ex. "6 semaines" */
  duration?: string;
  /** ex. "Particulier" | "Professionnel" */
  clientType?: string;
  /** ex. "45 m²", "45 ml", "10 × 4 m" */
  surface?: string;
  /** paragraphes du bloc « Contexte du projet » (sinon: description) */
  context?: string[];
  /** « Les contraintes rencontrées » (liste à coches) */
  challenges?: string[];
  /** encart « Notre solution » sous les contraintes */
  solution?: string;
  /** « Réalisation étape par étape » */
  steps?: { title: string; description: string; image?: string }[];
  /** bande « Chiffres clés » (sinon: auto surface + durée) */
  keyFigures?: { value: string; label: string }[];
}

export const realisations: Realisation[] = [
  // ------------------------------------------------------------------
  // AGRANDISSEMENT 20 m² — BADINIÈRES
  // ------------------------------------------------------------------
  {
    slug: "agrandissement-maison-badinieres",
    title: "Agrandissement de maison de 20 m² à Badinières",
    city: "Badinières",
    service: "Agrandissement",
    date: "2023",
    surface: "20 m²",
    clientType: "Particulier",
    keyFigures: [
      { value: "20 m²", label: "de surface créée" },
      { value: "Gros œuvre", label: "de la dalle au chaînage de toit" },
      { value: "+1", label: "mezzanine intérieure créée" },
    ],
    description:
      "Agrandissement maçonné de 20 m² à Badinières : dallage béton, élévation des murs en parpaing, chaînage de toiture, charpente bois et création d'une mezzanine intérieure.",
    context: [
      "Les propriétaires de cette maison de Badinières manquaient de place et souhaitaient gagner une pièce supplémentaire sans déménager. Nous avons réalisé l'intégralité du gros œuvre de leur agrandissement de 20 m², dans la continuité du bâti existant.",
    ],
    challenges: [
      "Raccorder proprement la nouvelle structure à la maison existante",
      "Assurer la continuité de la toiture entre l'existant et l'extension",
      "Exploiter la hauteur disponible pour créer un espace en plus",
    ],
    solution:
      "Un chaînage béton armé ceinture l'ensemble de la nouvelle structure au niveau de la toiture : il solidarise les murs neufs entre eux et garantit la stabilité de l'ouvrage dans le temps. La charpente bois a ensuite été posée dans la continuité du toit existant, et la hauteur sous plafond a permis de créer une mezzanine qui ajoute une surface utile au projet.",
    content:
      "Le chantier a démarré par la préparation du dallage : mise en forme du sol, puis coulage d'une dalle béton armée qui sert d'assise à toute l'extension. Les murs ont ensuite été montés en parpaing, avec les réservations prévues pour les menuiseries.\n\nEn tête de murs, nous avons coulé un chaînage béton armé périphérique avant de poser la charpente bois. Cette étape est déterminante sur un agrandissement : c'est elle qui lie la maçonnerie neuve et permet à la toiture de reprendre ses charges sans désordre.\n\nÀ l'intérieur, la hauteur disponible a été mise à profit pour créer une mezzanine, qui offre un couchage ou un espace de rangement supplémentaire au-dessus de la pièce principale. Le gros œuvre a été livré prêt à recevoir les corps d'état secondaires.",
    images: [
      {
        src: "/images/realisations/agrandissement-badinieres/agrandissement-maison-badinieres-elevation-murs.webp",
        alt: "Élévation des murs en parpaing de l'agrandissement de maison à Badinières — DZ Maçonnerie",
        phase: "pendant",
      },
      {
        src: "/images/realisations/agrandissement-badinieres/dallage-beton-agrandissement-maison-preparation.webp",
        alt: "Préparation du dallage béton de l'agrandissement de 20 m² à Badinières",
        phase: "pendant",
      },
      {
        src: "/images/realisations/agrandissement-badinieres/dalle-beton-agrandissement-maison-coulage.webp",
        alt: "Coulage de la dalle béton de l'extension de maison à Badinières",
        phase: "pendant",
      },
      {
        src: "/images/realisations/agrandissement-badinieres/agrandissement-maison-20m2-gros-oeuvre-parpaing.webp",
        alt: "Gros œuvre en parpaing de l'agrandissement de 20 m² — DZ Maçonnerie Badinières",
        phase: "pendant",
      },
      {
        src: "/images/realisations/agrandissement-badinieres/chainage-beton-toiture-agrandissement.webp",
        alt: "Chaînage béton armé en tête de murs avant pose de la toiture de l'agrandissement",
        phase: "pendant",
      },
      {
        src: "/images/realisations/agrandissement-badinieres/charpente-bois-agrandissement-maison-pose.webp",
        alt: "Pose de la charpente bois sur l'agrandissement de maison à Badinières",
        phase: "pendant",
      },
      {
        src: "/images/realisations/agrandissement-badinieres/creation-mezzanine-agrandissement-interieur.webp",
        alt: "Création d'une mezzanine à l'intérieur de l'agrandissement de maison",
        phase: "apres",
      },
    ],
    steps: [
      {
        title: "Dallage béton",
        description:
          "Préparation du sol puis coulage de la dalle béton armée qui sert d'assise à l'extension.",
        image:
          "/images/realisations/agrandissement-badinieres/dalle-beton-agrandissement-maison-coulage.webp",
      },
      {
        title: "Élévation des murs en parpaing",
        description:
          "Montage des murs porteurs en parpaing avec réservations pour les menuiseries, dans l'alignement du bâti existant.",
        image:
          "/images/realisations/agrandissement-badinieres/agrandissement-maison-badinieres-elevation-murs.webp",
      },
      {
        title: "Chaînage de toiture",
        description:
          "Coulage du chaînage béton armé périphérique en tête de murs : il solidarise la structure avant la pose de la charpente.",
        image:
          "/images/realisations/agrandissement-badinieres/chainage-beton-toiture-agrandissement.webp",
      },
      {
        title: "Charpente bois",
        description:
          "Pose de la charpente bois dans la continuité de la toiture existante, prête à recevoir la couverture.",
        image:
          "/images/realisations/agrandissement-badinieres/charpente-bois-agrandissement-maison-pose.webp",
      },
      {
        title: "Mezzanine intérieure",
        description:
          "Création d'une mezzanine pour exploiter la hauteur sous toiture et gagner une surface utile supplémentaire.",
        image:
          "/images/realisations/agrandissement-badinieres/creation-mezzanine-agrandissement-interieur.webp",
      },
    ],
    materials: ["Parpaing 20 cm", "Béton armé", "Chaînage béton armé", "Charpente bois"],
    keywords: [
      "agrandissement maison Badinières",
      "extension maison Nord-Isère",
      "gros œuvre agrandissement Isère",
      "maçon agrandissement Bourgoin-Jallieu",
    ],
  },

  // ------------------------------------------------------------------
  // OUVERTURES DE MURS PORTEURS — SÉRIE (BOURGOIN-JALLIEU ET ALENTOURS)
  // ------------------------------------------------------------------
  {
    slug: "ouverture-mur-porteur-bourgoin-jallieu",
    title: "Ouvertures de murs porteurs à Bourgoin-Jallieu et alentours",
    city: "Bourgoin-Jallieu",
    service: "Ouverture mur porteur",
    date: "2021 – 2025",
    clientType: "Particuliers",
    keyFigures: [
      { value: "1,20 à 2 m", label: "de largeurs d'ouvertures réalisées" },
      { value: "Pisé", label: "intervention en bâtisse ancienne" },
      { value: "Ascenseur", label: "création de trémie" },
    ],
    description:
      "Créations d'ouvertures dans des murs porteurs autour de Bourgoin-Jallieu : passages de 1,20 m à 2 m, linteaux béton armé, bâtisse ancienne en pisé et trémie d'ascenseur.",
    context: [
      "Ouvrir un mur porteur, c'est l'une des interventions les plus techniques de la maçonnerie de rénovation : le mur reprend des charges, et la moindre improvisation peut fragiliser toute la maison. C'est un travail que nous réalisons régulièrement autour de Bourgoin-Jallieu, aussi bien dans des maisons récentes en parpaing que dans des bâtisses anciennes en pisé.",
      "Cette page regroupe plusieurs de nos chantiers d'ouvertures : passages de 1,20 m, 1,35 m, 1,70 m et 2 m, ainsi qu'une trémie créée pour l'installation d'un ascenseur privatif.",
    ],
    challenges: [
      "Reprendre les charges du mur pendant toute la durée des travaux",
      "Dimensionner le linteau selon la largeur d'ouverture et les charges reprises",
      "Intervenir dans des murs anciens en pisé sans fragiliser la bâtisse",
      "Travailler dans des maisons habitées, en limitant poussière et gravats",
    ],
    solution:
      "Chaque ouverture suit la même méthode rigoureuse : étaiement de part et d'autre du mur pour reprendre les charges, découpe soignée, pose d'un linteau en béton armé dimensionné pour la portée, puis reprise des tableaux. L'étaiement n'est déposé qu'une fois le linteau en charge. Sur le pisé, matériau fragile, la découpe et la reprise se font par passes courtes pour ne jamais laisser le mur travailler à vide.",
    content:
      "Les largeurs varient selon les projets : un passage de 1,20 m pour ouvrir une cuisine, 1,35 m ou 1,70 m pour relier deux pièces de vie, jusqu'à 2 m pour créer une grande baie entre séjour et extension. À chaque fois, le linteau en béton armé est dimensionné en conséquence et repose sur des appuis sains.\n\nNous intervenons aussi dans le bâti ancien du Nord-Isère, notamment les murs en pisé. Ce matériau en terre crue, très répandu dans la région, demande une approche spécifique : passes de découpe courtes, appuis élargis et reprise immédiate, pour que la bâtisse ne souffre jamais de l'intervention.\n\nParmi ces chantiers figure également la création d'une trémie pour un ascenseur privatif : une découpe verticale précise à travers la structure, préparée pour recevoir l'équipement dans le respect des cotes du fabricant.",
    images: [
      {
        src: "/images/realisations/ouvertures-murs-porteurs/ouverture-mur-porteur-2m-grande-baie-finitions.webp",
        alt: "Grande baie de 2 m terminée dans un mur porteur, tableaux enduits et finitions propres — DZ Maçonnerie Bourgoin-Jallieu",
        phase: "apres",
      },
      {
        src: "/images/realisations/ouvertures-murs-porteurs/ouverture-mur-porteur-2m-grande-baie.webp",
        alt: "Ouverture de 2 m en cours : étaiement complet et linteau béton armé coulé au-dessus de la baie",
        phase: "avant",
      },
      {
        src: "/images/realisations/ouvertures-murs-porteurs/ouverture-mur-porteur-1m20-linteau.webp",
        alt: "Ouverture de 1,20 m dans un mur porteur avec pose de linteau béton",
        phase: "pendant",
      },
      {
        src: "/images/realisations/ouvertures-murs-porteurs/ouverture-mur-porteur-1m20-vue-2.webp",
        alt: "Passage de 1,20 m créé dans un mur porteur, tableaux repris",
        phase: "apres",
      },
      {
        src: "/images/realisations/ouvertures-murs-porteurs/ouverture-mur-porteur-1m35-creation.webp",
        alt: "Création d'une ouverture de 1,35 m dans un mur porteur en Nord-Isère",
        phase: "pendant",
      },
      {
        src: "/images/realisations/ouvertures-murs-porteurs/ouverture-mur-porteur-1m70-passage.webp",
        alt: "Passage de 1,70 m ouvert dans un mur porteur — maçonnerie de rénovation",
        phase: "apres",
      },
      {
        src: "/images/realisations/ouvertures-murs-porteurs/linteau-beton-arme-1m70-pose.webp",
        alt: "Pose d'un linteau béton armé de 1,70 m au-dessus d'une ouverture",
        phase: "pendant",
      },
      {
        src: "/images/realisations/ouvertures-murs-porteurs/ouverture-mur-porteur-pise-batisse-ancienne.webp",
        alt: "Ouverture d'un mur porteur en pisé dans une bâtisse ancienne du Nord-Isère",
        phase: "pendant",
      },
      {
        src: "/images/realisations/ouvertures-murs-porteurs/ouverture-tremie-ascenseur-creation.webp",
        alt: "Création d'une trémie d'ascenseur privatif à travers un plancher porteur",
        phase: "pendant",
      },
      {
        src: "/images/realisations/ouvertures-murs-porteurs/ouverture-tremie-ascenseur-finitions.webp",
        alt: "Trémie d'ascenseur terminée : parois enduites et ascenseur privatif en service",
        phase: "apres",
      },
      {
        src: "/images/realisations/ouvertures-murs-porteurs/chainage-linteau-beton-arme.webp",
        alt: "Chaînage et linteau béton armé coulés lors d'une ouverture de mur porteur",
        phase: "pendant",
      },
      {
        src: "/images/realisations/ouvertures-murs-porteurs/ouverture-mur-porteur-realisation.webp",
        alt: "Ouverture de mur porteur terminée, prête pour les finitions",
        phase: "apres",
      },
    ],
    steps: [
      {
        title: "Étaiement du mur",
        description:
          "Mise en place d'étais de part et d'autre du mur pour reprendre les charges de la structure pendant l'intervention.",
        image:
          "/images/realisations/ouvertures-murs-porteurs/ouverture-mur-porteur-2m-grande-baie.webp",
      },
      {
        title: "Découpe de l'ouverture",
        description:
          "Sciage et dépose du mur aux cotes prévues — par passes courtes dans le pisé et les murs anciens.",
        image:
          "/images/realisations/ouvertures-murs-porteurs/ouverture-mur-porteur-1m35-creation.webp",
      },
      {
        title: "Pose du linteau béton armé",
        description:
          "Le linteau, dimensionné selon la portée et les charges, est posé sur des appuis sains puis mis en charge.",
        image:
          "/images/realisations/ouvertures-murs-porteurs/linteau-beton-arme-1m70-pose.webp",
      },
      {
        title: "Reprise des tableaux et finitions",
        description:
          "Reprise des jambages et des tableaux, dépose de l'étaiement une fois le linteau en charge, enduit de finition.",
        image:
          "/images/realisations/ouvertures-murs-porteurs/ouverture-mur-porteur-2m-grande-baie-finitions.webp",
      },
    ],
    materials: ["Linteau béton armé", "Étaiement", "Béton armé", "Pisé"],
    keywords: [
      "ouverture mur porteur Bourgoin-Jallieu",
      "ouverture mur porteur Isère",
      "linteau béton armé Nord-Isère",
      "ouverture mur pisé",
      "trémie ascenseur maçonnerie",
    ],
  },

  // ------------------------------------------------------------------
  // PISCINE MAÇONNÉE 8×4 — SAINT-AGNIN-SUR-BION
  // ------------------------------------------------------------------
  {
    slug: "piscine-maconnee-saint-agnin-sur-bion",
    title: "Piscine maçonnée 8×4 m à Saint-Agnin-sur-Bion",
    city: "Saint-Agnin-sur-Bion",
    service: "Piscine",
    date: "2022",
    surface: "8 × 4 m",
    clientType: "Particulier",
    keyFigures: [
      { value: "8 × 4 m", label: "de bassin maçonné" },
      { value: "Escalier", label: "en béton, maçonné sur mesure" },
      { value: "Plage", label: "en dalles sur plots avec parement" },
    ],
    description:
      "Construction d'une piscine maçonnée de 8×4 m à Saint-Agnin-sur-Bion : radier béton armé, escalier béton sur mesure, enduit d'étanchéité et plage en dalles sur plots.",
    context: [
      "Au pied d'une ancienne ferme en pisé de Saint-Agnin-sur-Bion, nous avons construit une piscine entièrement maçonnée de 8 × 4 m. Contrairement à une coque livrée en une pièce, une piscine maçonnée se construit intégralement sur place : chaque dimension, l'escalier, la profondeur — tout est fait sur mesure.",
    ],
    challenges: [
      "Construire un bassin parfaitement étanche et indéformable",
      "Intégrer un escalier d'angle maçonné aux dimensions voulues par le client",
      "Créer une plage qui s'accorde avec le cadre de la ferme en pisé",
    ],
    solution:
      "Le bassin repose sur un radier en béton armé soigneusement ferraillé — c'est lui qui garantit qu'aucun tassement ne viendra déformer la structure. Les murs maçonnés reçoivent ensuite un enduit de préparation avant la pose du revêtement d'étanchéité. L'escalier en béton, maçonné dans l'angle du bassin, offre une entrée dans l'eau confortable et durable, sans pièce rapportée.",
    content:
      "Le chantier a débuté par le ferraillage du radier : une nappe d'armatures dimensionnée pour reprendre le poids de l'eau et les poussées du terrain. Le radier de 8 × 4 m a ensuite été coulé d'un seul tenant pour former un fond monolithique sans point faible.\n\nLes parois du bassin ont été montées puis enduites pour préparer l'étanchéité. L'escalier a été entièrement maçonné en béton : intégré à la structure, il ne bougera jamais et se nettoie comme le reste du bassin.\n\nAutour du bassin, nous avons réalisé une plage en dalles posées sur plots, avec un parement soigné en rive. L'ensemble s'intègre dans la cour de la ferme en pisé, entre bâti ancien et confort moderne.",
    images: [
      {
        src: "/images/realisations/piscine-maconnee/piscine-et-terrasse-beton-amenagement.webp",
        alt: "Piscine maçonnée 8x4 m et terrasse aménagée à Saint-Agnin-sur-Bion — DZ Maçonnerie",
        phase: "apres",
      },
      {
        src: "/images/realisations/piscine-maconnee/preparation-dallage-piscine-ferraillage.webp",
        alt: "Ferraillage du radier de la piscine maçonnée avant coulage du béton",
        phase: "pendant",
      },
      {
        src: "/images/realisations/piscine-maconnee/dalle-beton-piscine-8x4m-radier.webp",
        alt: "Radier béton armé de 8x4 m coulé pour la piscine maçonnée",
        phase: "pendant",
      },
      {
        src: "/images/realisations/piscine-maconnee/escalier-piscine-beton-maconne.webp",
        alt: "Escalier de piscine maçonné en béton, réalisé sur mesure",
        phase: "pendant",
      },
      {
        src: "/images/realisations/piscine-maconnee/enduit-piscine-maconnee-etancheite.webp",
        alt: "Enduit de préparation d'étanchéité appliqué sur les parois de la piscine",
        phase: "pendant",
      },
      {
        src: "/images/realisations/piscine-maconnee/piscine-maconnee-enduit-escalier-beton-avant-liner.webp",
        alt: "Piscine maçonnée enduite avec escalier béton, avant pose du revêtement d'étanchéité",
        phase: "pendant",
      },
      {
        src: "/images/realisations/piscine-maconnee/plage-piscine-dalles-sur-plots-parement.webp",
        alt: "Plage de piscine en dalles sur plots avec parement en rive",
        phase: "apres",
      },
    ],
    steps: [
      {
        title: "Ferraillage du radier",
        description:
          "Mise en place des armatures du fond de bassin, dimensionnées pour reprendre le poids de l'eau et les poussées du terrain.",
        image:
          "/images/realisations/piscine-maconnee/preparation-dallage-piscine-ferraillage.webp",
      },
      {
        title: "Coulage du radier 8 × 4 m",
        description:
          "Le radier est coulé d'un seul tenant : un fond monolithique en béton armé, sans point faible.",
        image: "/images/realisations/piscine-maconnee/dalle-beton-piscine-8x4m-radier.webp",
      },
      {
        title: "Escalier béton maçonné",
        description:
          "L'escalier est maçonné dans l'angle du bassin, intégré à la structure : confortable, durable, sur mesure.",
        image: "/images/realisations/piscine-maconnee/escalier-piscine-beton-maconne.webp",
      },
      {
        title: "Enduit d'étanchéité",
        description:
          "Les parois et l'escalier reçoivent un enduit de préparation avant la pose du revêtement d'étanchéité.",
        image: "/images/realisations/piscine-maconnee/enduit-piscine-maconnee-etancheite.webp",
      },
      {
        title: "Plage en dalles sur plots",
        description:
          "Autour du bassin, plage en dalles posées sur plots avec parement en rive : plane, drainante et démontable.",
        image:
          "/images/realisations/piscine-maconnee/plage-piscine-dalles-sur-plots-parement.webp",
      },
    ],
    materials: ["Béton armé", "Treillis soudé", "Enduit hydraulique", "Dalles sur plots"],
    keywords: [
      "piscine maçonnée Isère",
      "construction piscine béton Saint-Agnin-sur-Bion",
      "piscine 8x4 maçonnée Nord-Isère",
      "escalier piscine béton",
      "maçon piscine Bourgoin-Jallieu",
    ],
  },

  // ------------------------------------------------------------------
  // TERRASSE BÉTON — DOLOMIEU
  // ------------------------------------------------------------------
  {
    slug: "terrasse-beton-dolomieu",
    title: "Terrasse béton à Dolomieu",
    city: "Dolomieu",
    service: "Terrasse",
    date: "2023",
    clientType: "Particulier",
    keyFigures: [
      { value: "Béton armé", label: "treillis soudé sur toute la surface" },
      { value: "Pente", label: "d'écoulement vers l'extérieur" },
      { value: "Prêt à vivre", label: "dès la fin du chantier" },
    ],
    description:
      "Réalisation d'une terrasse en béton à Dolomieu : une surface plane, résistante et durable, prête à vivre ou à recevoir un revêtement.",
    context: [
      "À Dolomieu, ces propriétaires souhaitaient une vraie terrasse à l'extérieur de leur maison : une surface stable et propre pour installer salon de jardin et barbecue, en remplacement d'un extérieur difficile à vivre.",
    ],
    challenges: [
      "Créer une surface parfaitement plane avec la pente nécessaire à l'écoulement des eaux",
      "Garantir une dalle qui ne fissure pas dans le temps",
    ],
    solution:
      "Une terrasse béton réussie se joue avant le coulage : une assise correctement préparée et compactée, une armature adaptée, puis un béton mis en œuvre avec une légère pente pour évacuer les eaux de pluie loin de la maison. C'est cette méthode que nous appliquons sur chaque terrasse.",
    content:
      "La terrasse a été coulée en béton armé sur une assise préparée, avec une pente d'écoulement orientée vers l'extérieur de l'habitation pour que l'eau de pluie ne stagne jamais contre les murs.\n\nLa finition de la surface a été soignée pour offrir un sol agréable pieds nus, facile à entretenir, qui peut rester tel quel ou recevoir un carrelage extérieur plus tard.\n\nRésultat : un espace de vie extérieur durable, utilisable dès la fin du chantier, qui valorise la maison.",
    images: [
      {
        src: "/images/realisations/terrasse-beton-dolomieu/terrasse-beton-dolomieu-vue-ensemble.webp",
        alt: "Terrasse béton terminée à Dolomieu, vue d'ensemble — DZ Maçonnerie",
        phase: "apres",
      },
      {
        src: "/images/realisations/terrasse-beton-dolomieu/terrasse-beton-dolomieu-realisation.webp",
        alt: "Réalisation de la terrasse en béton à Dolomieu",
        phase: "apres",
      },
    ],
    materials: ["Béton armé", "Treillis soudé"],
    keywords: [
      "terrasse béton Dolomieu",
      "dalle terrasse extérieure Isère",
      "maçon terrasse La Tour-du-Pin",
      "terrasse béton Nord-Isère",
    ],
  },

  // ------------------------------------------------------------------
  // TERRASSE BÉTON TALOCHÉE AVEC CANIVEAU — VILLEFONTAINE
  // ------------------------------------------------------------------
  {
    slug: "terrasse-beton-talochee-villefontaine",
    title: "Terrasse béton talochée avec caniveau à Villefontaine",
    city: "Villefontaine",
    service: "Terrasse",
    date: "2025",
    clientType: "Particulier",
    keyFigures: [
      { value: "Hérisson", label: "graviers compactés en assise" },
      { value: "Caniveau", label: "intégré au coulage" },
      { value: "Taloché", label: "finition fine et régulière" },
    ],
    description:
      "Terrasse béton talochée réalisée dans les règles de l'art à Villefontaine : hérisson de graviers compacté, treillis soudé sur polyane, béton taloché et caniveau d'évacuation intégré au coulage.",
    context: [
      "Sur ce chantier de Villefontaine, nous avons réalisé une terrasse béton complète, de la préparation du sol à la finition talochée. C'est le chantier idéal pour montrer, étape par étape, ce qui fait la différence entre une dalle qui dure des décennies et une dalle qui fissure au bout de deux hivers.",
    ],
    challenges: [
      "Préparer une assise stable qui ne bougera pas avec les cycles de gel",
      "Bloquer les remontées d'humidité sous la dalle",
      "Gérer les eaux de pluie au pied de la terrasse",
    ],
    solution:
      "Tout se joue sous le béton : un hérisson de graviers compacté qui draine et stabilise, un film polyane qui coupe les remontées d'humidité, et un treillis soudé qui arme la dalle sur toute sa surface. Le caniveau d'évacuation a été intégré directement au coulage — pas de saignée après coup, l'eau est collectée dès le premier jour de pluie.",
    content:
      "La première étape a consisté à décaisser puis à mettre en place un hérisson de graviers concassés, compacté et réglé dans le coffrage. Cette couche drainante fait office de fondation pour la terrasse : elle répartit les charges et met la dalle à l'abri des mouvements de terrain.\n\nUn film polyane a ensuite été déroulé sur toute la surface, remonté en périphérie, avant la pose du treillis soudé sur cales. L'armature travaille ainsi au cœur du béton, là où elle est efficace contre la fissuration.\n\nLe béton a été coulé, tiré à la règle puis taloché pour une finition fine et régulière. Le caniveau d'évacuation, posé avant coulage, affleure parfaitement la surface finie : l'eau de pluie est collectée en rive de terrasse et dirigée hors de la zone de vie.",
    images: [
      {
        src: "/images/realisations/terrasse-beton-talochee/dalle-terrasse-beton-taloche-caniveau-frais.webp",
        alt: "Terrasse béton talochée avec caniveau intégré, béton frais — DZ Maçonnerie Villefontaine",
        phase: "apres",
      },
      {
        src: "/images/realisations/terrasse-beton-talochee/preparation-terrasse-herisson-gravier-coffrage.webp",
        alt: "Hérisson de graviers compacté dans le coffrage de la terrasse béton",
        phase: "pendant",
      },
      {
        src: "/images/realisations/terrasse-beton-talochee/preparation-dalle-terrasse-treillis-polyane.webp",
        alt: "Treillis soudé posé sur film polyane avant coulage de la terrasse",
        phase: "pendant",
      },
    ],
    steps: [
      {
        title: "Hérisson de graviers compacté",
        description:
          "Décaissement puis mise en place d'une couche de graviers concassés, compactée et réglée dans le coffrage : l'assise drainante de la terrasse.",
        image:
          "/images/realisations/terrasse-beton-talochee/preparation-terrasse-herisson-gravier-coffrage.webp",
      },
      {
        title: "Polyane + treillis soudé",
        description:
          "Film anti-remontées d'humidité sur toute la surface, puis treillis soudé posé sur cales pour armer le cœur de la dalle.",
        image:
          "/images/realisations/terrasse-beton-talochee/preparation-dalle-terrasse-treillis-polyane.webp",
      },
      {
        title: "Coulage, talochage et caniveau",
        description:
          "Béton tiré à la règle avec la pente d'écoulement, finition talochée, et caniveau intégré au coulage qui affleure la surface finie.",
        image:
          "/images/realisations/terrasse-beton-talochee/dalle-terrasse-beton-taloche-caniveau-frais.webp",
      },
    ],
    materials: ["Gravier concassé", "Film polyane", "Treillis soudé", "Béton armé"],
    keywords: [
      "terrasse béton Villefontaine",
      "dalle béton talochée Isère",
      "terrasse béton caniveau",
      "maçon terrasse Villefontaine",
    ],
  },

  // ------------------------------------------------------------------
  // TERRASSE EN L, DALLES IMITATION BOIS SUR PLOTS — L'ISLE-D'ABEAU
  // ------------------------------------------------------------------
  {
    slug: "terrasse-dalles-plots-isle-abeau",
    title: "Terrasse en dalles imitation bois sur plots à L'Isle-d'Abeau",
    city: "L'Isle-d'Abeau",
    service: "Dalles sur plots",
    date: "2025",
    clientType: "Particulier",
    keyFigures: [
      { value: "En L", label: "le long de deux façades" },
      { value: "Laser", label: "implantation et niveaux au millimètre" },
      { value: "Zéro", label: "entretien, l'aspect du bois en plus" },
    ],
    description:
      "Terrasse en L autour de la maison à L'Isle-d'Abeau : implantation au laser, dalle béton armée, puis pose de dalles céramiques imitation bois sur plots réglables.",
    context: [
      "Les propriétaires de cette maison récente de L'Isle-d'Abeau voulaient une terrasse qui épouse deux façades de la maison, avec l'aspect chaleureux du bois mais sans son entretien. Nous avons réalisé une terrasse en L en dalles céramiques imitation bois posées sur plots.",
    ],
    challenges: [
      "Implanter une terrasse en L parfaitement alignée sur deux façades",
      "Créer un support stable et pérenne pour la pose sur plots",
      "Obtenir l'esthétique du bois sans les contraintes d'entretien",
    ],
    solution:
      "L'implantation a été tracée au laser rotatif pour garantir niveaux et alignements sur les deux ailes de la terrasse. Le support a été armé d'un treillis soudé sur polyane avant coulage. Les dalles céramiques imitation bois, posées sur plots réglables, offrent le rendu du bois véritable avec la résistance du grès cérame : pas de lasure, pas d'écharde, pas de grisaillement.",
    content:
      "Tout commence par l'implantation : traçage au sol et calage des niveaux au laser rotatif, pour que la terrasse en L file parfaitement droit le long des deux façades, avec le bon niveau sous les portes-fenêtres.\n\nLe support a ensuite été préparé : polyane, treillis soudé et coulage d'une dalle béton suivant la forme en L. C'est cette assise qui garantit que la terrasse ne bougera pas dans le temps.\n\nEnfin, les dalles céramiques imitation bois ont été posées sur plots réglables. Ce système laisse l'eau s'écouler sous la terrasse, permet un accès aux réseaux si besoin, et rattrape les niveaux au millimètre. Le rendu final a l'aspect chaleureux d'une terrasse en bois — sans aucun entretien.",
    images: [
      {
        src: "/images/realisations/terrasse-plots-imitation-bois/terrasse-dalles-imitation-bois-sur-plots-terminee.webp",
        alt: "Terrasse en L en dalles céramiques imitation bois sur plots à L'Isle-d'Abeau — DZ Maçonnerie",
        phase: "apres",
      },
      {
        src: "/images/realisations/terrasse-plots-imitation-bois/implantation-tracage-terrasse-laser-rotatif.webp",
        alt: "Implantation et traçage de la terrasse au laser rotatif le long de la maison",
        phase: "avant",
      },
      {
        src: "/images/realisations/terrasse-plots-imitation-bois/terrasse-en-l-treillis-soude-avant-coulage.webp",
        alt: "Treillis soudé et polyane posés en L avant coulage de la dalle support",
        phase: "pendant",
      },
    ],
    steps: [
      {
        title: "Implantation au laser rotatif",
        description:
          "Traçage de la forme en L au sol et calage des niveaux au laser : alignements et pentes sont fixés avant le premier coup de pelle.",
        image:
          "/images/realisations/terrasse-plots-imitation-bois/implantation-tracage-terrasse-laser-rotatif.webp",
      },
      {
        title: "Dalle support armée",
        description:
          "Polyane et treillis soudé sur toute la surface en L, puis coulage de la dalle béton qui servira d'assise à la pose sur plots.",
        image:
          "/images/realisations/terrasse-plots-imitation-bois/terrasse-en-l-treillis-soude-avant-coulage.webp",
      },
      {
        title: "Pose des dalles sur plots",
        description:
          "Les dalles céramiques imitation bois sont posées sur plots réglables : niveaux au millimètre, eau évacuée sous la terrasse, zéro entretien.",
        image:
          "/images/realisations/terrasse-plots-imitation-bois/terrasse-dalles-imitation-bois-sur-plots-terminee.webp",
      },
    ],
    materials: ["Dalles grès cérame 2 cm", "Plots réglables", "Treillis soudé", "Film polyane"],
    keywords: [
      "terrasse dalles sur plots L'Isle-d'Abeau",
      "dalles imitation bois sur plots Isère",
      "terrasse céramique imitation bois",
      "pose dalles sur plots Nord-Isère",
    ],
  },

  // ------------------------------------------------------------------
  // TERRASSE GRÈS CÉRAME BORDURE ANTHRACITE — NIVOLAS-VERMELLE
  // ------------------------------------------------------------------
  {
    slug: "terrasse-gres-cerame-nivolas-vermelle",
    title: "Terrasse en grès cérame sur plots à Nivolas-Vermelle",
    city: "Nivolas-Vermelle",
    service: "Dalles sur plots",
    date: "2025",
    clientType: "Particulier",
    keyFigures: [
      { value: "2 cm", label: "dalles grès cérame pleine masse" },
      { value: "Plots", label: "réglables, terrasse drainante" },
      { value: "Anthracite", label: "bordure contrastée en ceinture" },
    ],
    description:
      "Terrasse en dalles grès cérame grand format posées sur plots à Nivolas-Vermelle, soulignée d'une bordure anthracite contrastée en pourtour.",
    context: [
      "Pour cette maison de Nivolas-Vermelle, le projet était une terrasse contemporaine au ras des portes-fenêtres du séjour : dalles grès cérame grand format ton clair, posées sur plots, avec une rive anthracite qui souligne le contour de la terrasse.",
    ],
    challenges: [
      "Régler la terrasse au niveau exact des seuils de portes-fenêtres",
      "Maintenir des joints alignés sur toute la surface en grand format",
      "Réaliser une rive propre et contrastée en périphérie",
    ],
    solution:
      "La pose sur plots réglables permet d'ajuster chaque dalle au millimètre : la terrasse affleure les seuils sans marche disgracieuse, et l'eau de pluie s'écoule librement dessous, loin de la façade. La bordure en dalles anthracite, posée en ceinture, encadre le calepinage clair et donne le caractère contemporain recherché.",
    content:
      "Les dalles en grès cérame grand format ont été posées sur plots réglables, rangée par rangée, avec un calepinage tiré au cordeau : les joints filent droit sur toute la longueur de la terrasse.\n\nEn périphérie, une ceinture de dalles anthracite vient contraster avec le ton clair du platelage : un détail de finition qui structure visuellement la terrasse et marque proprement la limite avec le jardin.\n\nLe résultat est une terrasse plane, stable et drainante, au ras du séjour, qui agrandit visuellement la maison côté jardin — et qui se nettoie d'un simple jet d'eau.",
    images: [
      {
        src: "/images/realisations/terrasse-gres-cerame/terrasse-gres-cerame-bordure-anthracite-terminee.webp",
        alt: "Terrasse en grès cérame clair avec bordure anthracite terminée à Nivolas-Vermelle — DZ Maçonnerie",
        phase: "apres",
      },
      {
        src: "/images/realisations/terrasse-gres-cerame/pose-dalles-gres-cerame-sur-plots-en-cours.webp",
        alt: "Pose en cours des dalles grès cérame grand format sur plots réglables",
        phase: "pendant",
      },
      {
        src: "/images/realisations/terrasse-gres-cerame/terrasse-gres-cerame-sur-plots-vue-jardin.webp",
        alt: "Terrasse grès cérame sur plots terminée, vue depuis le jardin",
        phase: "apres",
      },
    ],
    steps: [
      {
        title: "Pose sur plots réglables",
        description:
          "Chaque dalle est posée sur plots et réglée au millimètre pour affleurer les seuils des portes-fenêtres.",
        image:
          "/images/realisations/terrasse-gres-cerame/pose-dalles-gres-cerame-sur-plots-en-cours.webp",
      },
      {
        title: "Calepinage au cordeau",
        description:
          "Les joints sont alignés sur toute la surface : en grand format, la moindre dérive se voit — la rigueur de pose fait le rendu.",
        image:
          "/images/realisations/terrasse-gres-cerame/terrasse-gres-cerame-sur-plots-vue-jardin.webp",
      },
      {
        title: "Bordure anthracite en ceinture",
        description:
          "Une rive de dalles anthracite encadre la terrasse : finition contrastée qui marque la limite avec le jardin.",
        image:
          "/images/realisations/terrasse-gres-cerame/terrasse-gres-cerame-bordure-anthracite-terminee.webp",
      },
    ],
    materials: ["Dalles grès cérame 2 cm", "Plots réglables"],
    keywords: [
      "terrasse grès cérame Nivolas-Vermelle",
      "dalles sur plots Bourgoin-Jallieu",
      "terrasse dalles grand format Isère",
      "terrasse sur plots Nord-Isère",
    ],
  },

  // ------------------------------------------------------------------
  // MUR DE SOUTÈNEMENT EN RESTANQUES — RUY-MONTCEAU
  // ------------------------------------------------------------------
  {
    slug: "mur-soutenement-ruy-montceau",
    title: "Mur de soutènement en restanques à Ruy-Montceau",
    city: "Ruy-Montceau",
    service: "Mur de soutènement",
    date: "2025",
    clientType: "Particulier",
    keyFigures: [
      { value: "2", label: "niveaux de murs en restanque" },
      { value: "Pierre", label: "reprise sur le mur ancien conservé" },
      { value: "Drainage", label: "galets et barbacanes intégrés" },
    ],
    description:
      "Murs de soutènement maçonnés sur deux niveaux à Ruy-Montceau, avec reprise sur un mur en pierre existant, barbacanes et drainage en galets sous couvertine.",
    context: [
      "Sur ce terrain en pente de Ruy-Montceau, l'ancien mur en pierre ne suffisait plus à retenir les terres du jardin. Nous avons construit deux niveaux de murs de soutènement en restanque, en conservant et en intégrant le mur en pierre d'origine à l'ouvrage neuf.",
    ],
    challenges: [
      "Retenir les terres d'un jardin en surplomb, au plus près de l'habitation",
      "Se raccorder proprement au mur en pierre ancien conservé",
      "Évacuer l'eau derrière les murs pour éviter toute poussée hydrostatique",
    ],
    solution:
      "Un mur de soutènement ne cède presque jamais sous le poids de la terre : c'est l'eau accumulée derrière qui le pousse. Nous avons donc traité le drainage aussi sérieusement que la structure : lit de galets drainants derrière les murs, barbacanes traversantes pour laisser l'eau s'échapper, arases béton et couvertines pour protéger les têtes de murs. Les raidisseurs en béton armé reprennent les efforts aux points singuliers, notamment à la jonction avec le mur en pierre.",
    content:
      "Les murs ont été montés en parpaing bétonné sur deux niveaux, en escalier — le principe des restanques : deux murs plus bas retiennent mieux qu'un seul mur haut, avec moins de poussée sur chaque ouvrage.\n\nLa partie ancienne en pierre a été conservée : le mur neuf vient s'y raccorder par l'intermédiaire d'un poteau raidisseur en béton armé, et l'arase filante rattrape les niveaux entre l'ancien et le neuf. Les barbacanes ménagées en pied de mur laissent l'eau du talus s'évacuer librement.\n\nEn arrière des murs, un lit de galets drainants collecte les eaux de ruissellement, et les couvertines posées en tête protègent la maçonnerie des infiltrations. Chaperons et arases ont été coffrés et coulés sur place pour une finition durable.",
    images: [
      {
        src: "/images/realisations/mur-soutenement/mur-soutenement-deux-niveaux-reprise-pierre.webp",
        alt: "Murs de soutènement sur deux niveaux avec reprise sur mur en pierre à Ruy-Montceau — DZ Maçonnerie",
        phase: "pendant",
      },
      {
        src: "/images/realisations/mur-soutenement/drainage-galets-mur-soutenement-couvertine.webp",
        alt: "Drainage en galets derrière le mur de soutènement, couvertine posée",
        phase: "pendant",
      },
      {
        src: "/images/realisations/mur-soutenement/mur-soutenement-parpaing-barbacane-restanque.webp",
        alt: "Barbacane d'évacuation d'eau dans le mur de soutènement en restanque",
        phase: "pendant",
      },
      {
        src: "/images/realisations/mur-soutenement/mur-soutenement-parpaing-arase-beton-terrain-pente.webp",
        alt: "Arase béton coulée sur un mur de soutènement en terrain en pente",
        phase: "pendant",
      },
      {
        src: "/images/realisations/mur-soutenement/mur-soutenement-chaperon-coffrage-beton-frais.webp",
        alt: "Chaperon coffré et coulé en béton frais en tête de mur de soutènement",
        phase: "pendant",
      },
    ],
    steps: [
      {
        title: "Élévation des murs en restanque",
        description:
          "Deux niveaux de murs en parpaing bétonné montés en escalier : chaque ouvrage reprend une hauteur de terre raisonnable.",
        image:
          "/images/realisations/mur-soutenement/mur-soutenement-parpaing-arase-beton-terrain-pente.webp",
      },
      {
        title: "Raccord au mur en pierre",
        description:
          "Le mur ancien est conservé : un raidisseur béton armé assure la jonction entre la pierre et la maçonnerie neuve.",
        image:
          "/images/realisations/mur-soutenement/mur-soutenement-deux-niveaux-reprise-pierre.webp",
      },
      {
        title: "Barbacanes et drainage",
        description:
          "Barbacanes en pied de mur et lit de galets drainants en arrière : l'eau s'évacue au lieu de pousser sur l'ouvrage.",
        image:
          "/images/realisations/mur-soutenement/drainage-galets-mur-soutenement-couvertine.webp",
      },
      {
        title: "Arases, chaperons et couvertines",
        description:
          "Têtes de murs coffrées et coulées sur place, puis protégées par couvertines : la finition qui fait durer l'ouvrage.",
        image:
          "/images/realisations/mur-soutenement/mur-soutenement-chaperon-coffrage-beton-frais.webp",
      },
    ],
    materials: ["Parpaing 20 cm", "Béton armé", "Galets drainants", "Couvertine", "Chaperon béton"],
    keywords: [
      "mur de soutènement Ruy-Montceau",
      "mur soutènement terrain en pente Isère",
      "restanque maçonnée Nord-Isère",
      "drainage mur de soutènement",
    ],
  },

  // ------------------------------------------------------------------
  // MURS DE CLÔTURE — SÉRIE (MAUBEC ET NORD-ISÈRE)
  // ------------------------------------------------------------------
  {
    slug: "murs-cloture-maubec",
    title: "Murs de clôture à Maubec et en Nord-Isère",
    city: "Maubec",
    service: "Clôture",
    date: "2021 – 2025",
    clientType: "Particuliers",
    keyFigures: [
      { value: "Parpaing", label: "ou blocs à bancher selon l'ouvrage" },
      { value: "Redans", label: "fondations qui suivent la pente" },
      { value: "Arases", label: "coffrées, contrôlées au niveau" },
    ],
    description:
      "Nos chantiers de murs de clôture en Nord-Isère : fondations, élévation en parpaing ou blocs à bancher, chaînages, arases soignées et finitions enduites.",
    context: [
      "Le mur de clôture est un grand classique de nos chantiers autour de Maubec et Bourgoin-Jallieu : délimiter un terrain en lotissement neuf, fermer un jardin avec piscine, ou reconstruire un mur fatigué. Cette page rassemble plusieurs de nos réalisations, du soubassement aux finitions.",
      "Un mur de clôture paraît simple. C'est pourtant un ouvrage complet : une fondation dimensionnée, une élévation d'aplomb, des chaînages qui l'empêchent de fissurer, et une arase qui le protège pour des décennies.",
    ],
    challenges: [
      "Fonder correctement sur des terrains parfois en pente",
      "Tenir des alignements et des niveaux parfaits sur de grandes longueurs",
      "Protéger la tête de mur contre la pluie et le gel",
    ],
    solution:
      "Chaque mur suit la même exigence : semelle de fondation adaptée au terrain, élévation en parpaing ou en blocs à bancher selon les efforts à reprendre, chaînages verticaux et horizontaux, puis arase coffrée et coulée au niveau — nous la contrôlons à l'instrument. En pente, le mur descend en redans successifs qui suivent le terrain proprement.",
    content:
      "En lotissement neuf, nous montons des murs en parpaing sur semelle filante : joints réguliers, aplomb contrôlé en continu et chaînages d'angle. Sur les terrains en pente, le soubassement est fondé en escalier — chaque redan repose sur une assise horizontale saine.\n\nQuand le mur doit résister à des poussées (terre, portail lourd), nous passons en blocs à bancher : les blocs sont empilés, ferraillés puis remplis de béton, pour un mur monolithique d'une grande solidité.\n\nLa finition fait la durée de vie : arases coffrées et coulées d'un trait, contrôle du niveau à l'instrument, chaperons lissés à l'échafaudage sur les murs enduits. Certains chantiers intègrent aussi un espace de rangement extérieur maçonné dans la continuité du mur — un mètre carré utile gagné sur la clôture.",
    images: [
      {
        src: "/images/realisations/murs-cloture/mur-cloture-redans-enduit-cloture-occultee-pente.webp",
        alt: "Mur de clôture enduit à redans avec clôture occultée sur terrain en pente — DZ Maçonnerie",
        phase: "apres",
      },
      {
        src: "/images/realisations/murs-cloture/mur-cloture-parpaing-en-cours-lotissement.webp",
        alt: "Mur de clôture en parpaing en cours de montage dans un lotissement",
        phase: "pendant",
      },
      {
        src: "/images/realisations/murs-cloture/mur-cloture-parpaing-joints-frais-elevation.webp",
        alt: "Élévation d'un mur de clôture en parpaing, joints frais",
        phase: "pendant",
      },
      {
        src: "/images/realisations/murs-cloture/murs-cloture-parpaing-angle-terrain-neuf.webp",
        alt: "Angle de murs de clôture en parpaing sur un terrain neuf",
        phase: "pendant",
      },
      {
        src: "/images/realisations/murs-cloture/soubassement-mur-cloture-fondation-pente.webp",
        alt: "Soubassement de mur de clôture fondé en redans sur terrain en pente",
        phase: "pendant",
      },
      {
        src: "/images/realisations/murs-cloture/mur-cloture-blocs-a-bancher-elevation.webp",
        alt: "Mur de clôture monté en blocs à bancher avant remplissage béton",
        phase: "pendant",
      },
      {
        src: "/images/realisations/murs-cloture/mur-blocs-a-bancher-beton-arme.webp",
        alt: "Mur en blocs à bancher ferraillé et rempli de béton armé",
        phase: "pendant",
      },
      {
        src: "/images/realisations/murs-cloture/mur-cloture-parpaing-coffrage-arase-chainage.webp",
        alt: "Coffrage de l'arase et du chaînage en tête de mur de clôture",
        phase: "pendant",
      },
      {
        src: "/images/realisations/murs-cloture/mur-cloture-parpaing-arase-terminee.webp",
        alt: "Mur de clôture en parpaing avec arase béton terminée",
        phase: "apres",
      },
      {
        src: "/images/realisations/murs-cloture/mur-cloture-parpaing-arase-jardin-piscine.webp",
        alt: "Mur de clôture avec arase terminée autour d'un jardin avec piscine",
        phase: "apres",
      },
      {
        src: "/images/realisations/murs-cloture/controle-niveau-arase-beton-precision.webp",
        alt: "Contrôle du niveau de l'arase béton à l'instrument",
        phase: "pendant",
      },
      {
        src: "/images/realisations/murs-cloture/arase-chaperon-beton-lisse-echafaudage.webp",
        alt: "Chaperon béton lissé en tête de mur, travail à l'échafaudage",
        phase: "pendant",
      },
      {
        src: "/images/realisations/murs-cloture/arase-de-mur-finition-beton.webp",
        alt: "Arase de mur en béton, finition soignée",
        phase: "apres",
      },
      {
        src: "/images/realisations/murs-cloture/mur-de-cloture-parpaing-construction.webp",
        alt: "Construction d'un mur de clôture en parpaing en Nord-Isère",
        phase: "pendant",
      },
      {
        src: "/images/realisations/murs-cloture/mur-cloture-espace-rangement-exterieur.webp",
        alt: "Mur de clôture intégrant un espace de rangement extérieur maçonné",
        phase: "apres",
      },
    ],
    steps: [
      {
        title: "Fondation adaptée au terrain",
        description:
          "Semelle filante horizontale, ou fondation en redans sur les terrains en pente : chaque mur part d'une assise saine.",
        image:
          "/images/realisations/murs-cloture/soubassement-mur-cloture-fondation-pente.webp",
      },
      {
        title: "Élévation parpaing ou blocs à bancher",
        description:
          "Parpaing pour les clôtures courantes, blocs à bancher ferraillés et bétonnés quand le mur doit reprendre des poussées.",
        image:
          "/images/realisations/murs-cloture/mur-cloture-blocs-a-bancher-elevation.webp",
      },
      {
        title: "Chaînages et arase",
        description:
          "Chaînages d'angle et arase coffrée puis coulée au niveau — contrôlée à l'instrument sur toute la longueur.",
        image:
          "/images/realisations/murs-cloture/mur-cloture-parpaing-coffrage-arase-chainage.webp",
      },
      {
        title: "Finitions",
        description:
          "Chaperons lissés, enduit éventuel et pose de la clôture en tête de mur : l'ouvrage est protégé pour des décennies.",
        image:
          "/images/realisations/murs-cloture/mur-cloture-redans-enduit-cloture-occultee-pente.webp",
      },
    ],
    materials: ["Parpaing 20 cm", "Blocs à bancher", "Béton armé", "Chaperon béton"],
    keywords: [
      "mur de clôture Maubec",
      "mur de clôture parpaing Bourgoin-Jallieu",
      "mur clôture blocs à bancher Isère",
      "construction mur de clôture Nord-Isère",
    ],
  },

  // ------------------------------------------------------------------
  // CLÔTURE RIGIDE SUR PLATINES + PORTAIL COULISSANT 9 M — MEYRIÉ
  // ------------------------------------------------------------------
  {
    slug: "cloture-rigide-portail-meyrie",
    title: "Clôture rigide et portail coulissant à Meyrié",
    city: "Meyrié",
    service: "Clôture",
    date: "2023",
    clientType: "Particulier",
    keyFigures: [
      { value: "9 m", label: "de seuil béton pour portail coulissant" },
      { value: "Platines", label: "poteaux fixés sur massifs béton" },
      { value: "Occultants", label: "posés en lamelles sur panneaux" },
    ],
    description:
      "Clôture rigide posée sur platines avec occultants, piliers de portail maçonnés et seuil béton de 9 m pour portail coulissant à Meyrié.",
    context: [
      "Fermer entièrement une propriété, c'est plus que planter des poteaux : sur ce type de chantier autour de Meyrié, nous réalisons les massifs béton, les seuils, les piliers maçonnés — puis la pose de la clôture rigide et de ses occultants.",
    ],
    challenges: [
      "Ancrer solidement chaque poteau pour résister à la prise au vent des occultants",
      "Réaliser un seuil parfaitement rectiligne et de niveau sur 9 m pour le rail du portail",
      "Aligner panneaux et occultants sur toute la longueur",
    ],
    solution:
      "Chaque poteau repose sur un massif béton coulé en pleine fouille, avec une semelle talochée qui reçoit la platine de fixation : c'est ce qui permet à la clôture d'encaisser le vent une fois les occultants posés. Pour le portail coulissant, un seuil béton filant de 9 m a été coulé au cordeau — le rail doit être parfaitement rectiligne et de niveau pour que le portail coulisse sans effort pendant des années.",
    content:
      "Le chantier commence sous terre : fouilles aux emplacements des poteaux, hérisson de graviers, puis coulage des massifs béton. Chaque massif est surfacé à la taloche pour recevoir sa platine parfaitement à plat.\n\nLes panneaux de clôture rigide sont ensuite posés sur les platines, alignés au cordeau, puis garnis d'occultants en lamelles : intimité immédiate, sans entretien, et une prise au vent que les massifs sont dimensionnés pour encaisser.\n\nCôté entrée, les piliers de portail ont été maçonnés et un seuil béton de 9 mètres coulé d'un seul tenant pour le portail coulissant : une longueur inhabituelle qui exige une rectitude parfaite, contrôlée au niveau sur toute la portée.",
    images: [
      {
        src: "/images/realisations/clotures-portails/cloture-rigide-panneaux-sur-platines.webp",
        alt: "Clôture rigide posée sur platines et muret béton à Meyrié — DZ Maçonnerie",
        phase: "apres",
      },
      {
        src: "/images/realisations/clotures-portails/fouille-massif-fondation-platine-avant-coulage.webp",
        alt: "Fouille de massif de fondation avant coulage pour platine de poteau",
        phase: "avant",
      },
      {
        src: "/images/realisations/clotures-portails/massif-beton-scellement-platine-poteau.webp",
        alt: "Massif béton coulé pour le scellement d'une platine de poteau de clôture",
        phase: "pendant",
      },
      {
        src: "/images/realisations/clotures-portails/semelle-beton-talochee-platine-scellement.webp",
        alt: "Semelle béton talochée prête à recevoir la platine de fixation",
        phase: "pendant",
      },
      {
        src: "/images/realisations/clotures-portails/massif-beton-platine-fixation-pelouse.webp",
        alt: "Massif béton avec platine de fixation coulé en limite de pelouse",
        phase: "pendant",
      },
      {
        src: "/images/realisations/clotures-portails/pose-occultants-cloture-rigide.webp",
        alt: "Pose des occultants en lamelles sur la clôture rigide",
        phase: "pendant",
      },
      {
        src: "/images/realisations/clotures-portails/pose-occultants-cloture-vue-2.webp",
        alt: "Clôture rigide avec occultants posés, vue d'ensemble",
        phase: "apres",
      },
      {
        src: "/images/realisations/clotures-portails/piliers-de-portail-maconnes.webp",
        alt: "Piliers de portail maçonnés encadrant l'entrée de la propriété",
        phase: "apres",
      },
      {
        src: "/images/realisations/clotures-portails/seuil-beton-portail-coulissant-9m.webp",
        alt: "Seuil béton de 9 m coulé pour un portail coulissant",
        phase: "apres",
      },
    ],
    steps: [
      {
        title: "Fouilles et massifs béton",
        description:
          "Fouille à chaque emplacement de poteau, puis coulage d'un massif béton dimensionné pour la prise au vent des occultants.",
        image:
          "/images/realisations/clotures-portails/fouille-massif-fondation-platine-avant-coulage.webp",
      },
      {
        title: "Semelles talochées et platines",
        description:
          "Chaque massif est surfacé à la taloche pour poser la platine parfaitement à plat — l'aplomb du poteau en dépend.",
        image:
          "/images/realisations/clotures-portails/semelle-beton-talochee-platine-scellement.webp",
      },
      {
        title: "Panneaux et occultants",
        description:
          "Pose des panneaux rigides alignés au cordeau, puis garnissage en occultants pour une intimité immédiate et durable.",
        image: "/images/realisations/clotures-portails/pose-occultants-cloture-rigide.webp",
      },
      {
        title: "Piliers et seuil de portail 9 m",
        description:
          "Maçonnerie des piliers et coulage du seuil filant de 9 m, rectiligne et de niveau, prêt à recevoir le rail du portail coulissant.",
        image: "/images/realisations/clotures-portails/seuil-beton-portail-coulissant-9m.webp",
      },
    ],
    materials: ["Béton armé", "Platines de fixation", "Panneaux de clôture rigides", "Occultants"],
    keywords: [
      "clôture rigide Meyrié",
      "seuil portail coulissant béton Isère",
      "pose clôture rigide occultants Bourgoin-Jallieu",
      "piliers portail maçonnés Nord-Isère",
    ],
  },

  // ------------------------------------------------------------------
  // DALLAGE BÉTON 100 m² — ARTAS
  // ------------------------------------------------------------------
  {
    slug: "dallage-beton-100m2-artas",
    title: "Dallage béton de 100 m² à Artas",
    city: "Artas",
    service: "Dalle béton",
    date: "2024",
    surface: "100 m²",
    keyFigures: [
      { value: "100 m²", label: "de dallage armé" },
      { value: "Pisé", label: "dallage d'une bâtisse ancienne" },
      { value: "Soubassement", label: "dalle portée sur parpaing" },
    ],
    description:
      "Dallage béton armé de 100 m² réalisé à Artas pour une bâtisse ancienne en pisé : coffrage, polyane, treillis soudé sur toute la surface et finition lissée sur soubassement en parpaing.",
    context: [
      "À Artas, notre commune d'implantation, nous avons réalisé le dallage béton de 100 m² d'une ancienne bâtisse en pisé, en partie à l'intérieur des murs et en partie devant le bâtiment. Sur une telle surface, la méthode ne pardonne pas : c'est la préparation qui fait toute la qualité du résultat.",
    ],
    challenges: [
      "Créer un sol sain et hors d'humidité dans une bâtisse ancienne sans dalle",
      "Rattraper les niveaux entre l'intérieur des murs et l'extérieur du bâtiment",
      "Armer 100 m² en continu pour éviter toute fissuration",
    ],
    solution:
      "La dalle extérieure a été portée sur un soubassement maçonné en parpaing, coffré et réglé au niveau. Sur toute la surface, un film polyane coupe les remontées d'humidité — indispensable dans le bâti ancien — et le treillis soudé, posé avec recouvrement des nappes, arme la dalle en continu. Un isolant périphérique désolidarise la dalle des murs et absorbe les dilatations.",
    content:
      "La préparation a représenté la moitié du chantier : coffrage périphérique, mise en place du soubassement en parpaing côté extérieur, puis déroulage du polyane sur toute la surface pour bloquer les remontées d'humidité du sol.\n\nLe treillis soudé a ensuite été déployé à l'intérieur comme à l'extérieur, avec recouvrement des nappes aux jonctions pour une armature réellement continue sur les 100 m².\n\nLe béton a été coulé, tiré à la règle puis lissé : un sol plan, fermé et régulier, qui donne une seconde vie à cette bâtisse en pisé — prêt à l'usage ou à recevoir un revêtement.",
    images: [
      {
        src: "/images/realisations/dallage-100m2/dallage-beton-100m2-dalle-terminee-soubassement.webp",
        alt: "Dallage béton de 100 m² terminé sur soubassement en parpaing devant la bâtisse en pisé à Artas — DZ Maçonnerie",
        phase: "apres",
      },
      {
        src: "/images/realisations/dallage-100m2/dallage-100m2-coffrage-treillis-avant-coulage.webp",
        alt: "Coffrage et treillis soudé en place devant la bâtisse, avant coulage du dallage",
        phase: "pendant",
      },
      {
        src: "/images/realisations/dallage-100m2/dallage-treillis-soude-polyane-interieur.webp",
        alt: "Treillis soudé posé sur film polyane à l'intérieur de la bâtisse",
        phase: "pendant",
      },
      {
        src: "/images/realisations/dallage-100m2/dallage-beton-100m2-finition-lissage.webp",
        alt: "Béton frais lissé du dallage de 100 m², isolant périphérique en place",
        phase: "pendant",
      },
    ],
    steps: [
      {
        title: "Coffrage et soubassement",
        description:
          "Coffrage périphérique réglé au niveau et soubassement en parpaing côté extérieur : la dalle part d'une assise saine.",
        image:
          "/images/realisations/dallage-100m2/dallage-100m2-coffrage-treillis-avant-coulage.webp",
      },
      {
        title: "Polyane et treillis soudé",
        description:
          "Film anti-humidité sur toute la surface puis treillis soudé avec recouvrement des nappes : l'armature travaille en continu au cœur de la dalle.",
        image:
          "/images/realisations/dallage-100m2/dallage-treillis-soude-polyane-interieur.webp",
      },
      {
        title: "Coulage et lissage",
        description:
          "Le béton est coulé, tiré à la règle puis lissé, avec l'isolant périphérique qui désolidarise la dalle des murs.",
        image: "/images/realisations/dallage-100m2/dallage-beton-100m2-finition-lissage.webp",
      },
      {
        title: "Dalle terminée",
        description:
          "Un sol plan et régulier, à l'intérieur comme devant la bâtisse : 100 m² prêts à l'usage ou à recevoir un revêtement.",
        image:
          "/images/realisations/dallage-100m2/dallage-beton-100m2-dalle-terminee-soubassement.webp",
      },
    ],
    materials: ["Béton armé", "Treillis soudé", "Film polyane", "Isolant périphérique", "Parpaing 20 cm"],
    keywords: [
      "dallage béton Artas",
      "dalle béton 100m2 Isère",
      "dallage béton armé Nord-Isère",
      "maçon dalle béton Bourgoin-Jallieu",
    ],
  },

  // ------------------------------------------------------------------
  // CARRELAGE IMITATION PARQUET — CRACHIER
  // ------------------------------------------------------------------
  {
    slug: "carrelage-imitation-parquet-crachier",
    title: "Carrelage imitation parquet à Crachier",
    city: "Crachier",
    service: "Carrelage",
    date: "2025",
    clientType: "Particulier",
    keyFigures: [
      { value: "Format lame", label: "pose à joints décalés" },
      { value: "2 matières", label: "jonction bois / ton pierre calepinée" },
      { value: "Zéro", label: "ponçage, zéro vitrification" },
    ],
    description:
      "Pose d'un carrelage imitation parquet dans une pièce de vie en rénovation à Crachier, avec jonction soignée sur un sol en carreaux ton pierre.",
    context: [
      "Dans cette maison ancienne en cours de rénovation à Crachier, la pièce de vie devait retrouver un sol chaleureux, facile à vivre et compatible avec l'ambiance de la bâtisse. Le choix s'est porté sur un carrelage imitation parquet, posé dans le sens de la lumière.",
    ],
    challenges: [
      "Rattraper et préparer le support d'une maison ancienne avant la pose",
      "Gérer la jonction entre les lames imitation parquet et le sol ton pierre attenant",
      "Aligner des carreaux longs et étroits sans tuilage apparent",
    ],
    solution:
      "Les carreaux format lame ont été posés à joints décalés, comme un vrai parquet, avec un contrôle de planéité permanent — sur ce format, le moindre défaut de support se voit en lumière rasante. La jonction avec les carreaux ton pierre de la pièce voisine a été calepinée pour que la transition tombe juste, sans coupe disgracieuse.",
    content:
      "Le support a d'abord été préparé et remis à niveau : dans l'ancien, c'est l'étape qui conditionne tout le résultat final.\n\nLes lames en grès cérame imitation bois ont été posées à joints décalés dans le sens de la lumière, joints fins, pour un rendu qui se confond avec un parquet massif — la robustesse et la facilité d'entretien du carrelage en plus : aucun ponçage, aucune vitrification, insensible à l'eau.\n\nLa transition avec le sol en carreaux ton pierre de l'entrée a été traitée en calepinage droit : deux matières qui cohabitent proprement, dans l'esprit de la maison.",
    images: [
      {
        src: "/images/realisations/carrelage-interieur/carrelage-imitation-parquet-sejour-renove.webp",
        alt: "Carrelage imitation parquet posé dans le séjour rénové à Crachier — DZ Maçonnerie",
        phase: "apres",
      },
      {
        src: "/images/realisations/carrelage-interieur/carrelage-interieur-jonction-parquet-pierre.webp",
        alt: "Jonction soignée entre carrelage imitation parquet et carreaux ton pierre",
        phase: "apres",
      },
      {
        src: "/images/realisations/carrelage-interieur/carrelage-imitation-parquet-renovation-interieure.webp",
        alt: "Pose du carrelage imitation parquet dans la maison en rénovation",
        phase: "pendant",
      },
      {
        src: "/images/realisations/carrelage-interieur/carrelage-imitation-parquet-pose.webp",
        alt: "Carrelage imitation parquet en cours de pose, joints décalés",
        phase: "pendant",
      },
    ],
    materials: ["Carrelage imitation parquet", "Mortier-colle"],
    keywords: [
      "carrelage imitation parquet Crachier",
      "pose carrelage Bourgoin-Jallieu",
      "carrelage rénovation maison ancienne Isère",
      "carreleur Nord-Isère",
    ],
  },

  // ------------------------------------------------------------------
  // ABRI DE JARDIN MAÇONNÉ — SAINT-QUENTIN-FALLAVIER
  // ------------------------------------------------------------------
  {
    slug: "abri-jardin-maconne-saint-quentin-fallavier",
    title: "Abri de jardin maçonné à Saint-Quentin-Fallavier",
    city: "Saint-Quentin-Fallavier",
    service: "Abri de jardin",
    date: "2023",
    clientType: "Particulier",
    keyFigures: [
      { value: "Maçonné", label: "construit comme une maison" },
      { value: "Dalle", label: "béton armée en fondation" },
      { value: "Tuiles", label: "couverture en terre cuite" },
    ],
    description:
      "Construction complète d'un abri de jardin maçonné à Saint-Quentin-Fallavier : dalle béton, murs en parpaing, pignon avec linteau et toiture en tuiles.",
    context: [
      "Plutôt qu'un abri en kit qui vieillit mal, ces clients de Saint-Quentin-Fallavier ont choisi un abri de jardin maçonné : un vrai petit bâtiment, construit comme une maison, qui dure des décennies et valorise le terrain.",
    ],
    challenges: [
      "Construire un ouvrage durable dans les règles de l'art, à l'échelle d'un abri",
      "Monter un pignon avec linteau pour une porte de bonne largeur",
      "Couvrir en tuiles en s'accordant à la maison principale",
    ],
    solution:
      "Un abri maçonné se construit avec la même méthode qu'une maison : dalle béton armée en fondation, murs en parpaing d'aplomb, linteau au-dessus de l'ouverture, charpente et couverture en tuiles. C'est ce sérieux à petite échelle qui fait la différence avec un abri préfabriqué : ni humidité, ni déformation, ni entretien.",
    content:
      "La dalle béton a d'abord été coulée : elle sert à la fois de fondation et de sol fini pour l'abri, plane et hors d'eau.\n\nLes murs ont été montés en parpaing, avec un pignon maçonné et un linteau au-dessus de la porte, dimensionné pour laisser un passage confortable pour l'outillage et les machines de jardin.\n\nLa charpente et la couverture en tuiles terminent l'ouvrage dans l'esprit de la maison principale. Le résultat : un abri sain et sec en toute saison, sans aucun entretien à prévoir.",
    images: [
      {
        src: "/images/realisations/abri-jardin/abri-jardin-maconne-parpaing-toiture-tuiles.webp",
        alt: "Abri de jardin maçonné avec toiture en tuiles à Saint-Quentin-Fallavier — DZ Maçonnerie",
        phase: "apres",
      },
      {
        src: "/images/realisations/abri-jardin/dalle-beton-abri-de-jardin.webp",
        alt: "Dalle béton coulée pour l'abri de jardin maçonné",
        phase: "pendant",
      },
      {
        src: "/images/realisations/abri-jardin/abri-jardin-parpaing-elevation-pignon-linteau.webp",
        alt: "Élévation des murs en parpaing de l'abri, pignon et linteau posé",
        phase: "pendant",
      },
      {
        src: "/images/realisations/abri-jardin/abri-de-jardin-maconne-construction.webp",
        alt: "Construction de l'abri de jardin maçonné en cours",
        phase: "pendant",
      },
      {
        src: "/images/realisations/abri-jardin/petite-charpente-bois-appentis.webp",
        alt: "Petite charpente bois posée sur la maçonnerie de l'abri",
        phase: "pendant",
      },
    ],
    steps: [
      {
        title: "Dalle béton",
        description:
          "Coulage de la dalle armée qui sert de fondation et de sol fini : l'abri part sur une base saine et hors d'eau.",
        image: "/images/realisations/abri-jardin/dalle-beton-abri-de-jardin.webp",
      },
      {
        title: "Murs et pignon en parpaing",
        description:
          "Élévation des murs, pignon maçonné et linteau au-dessus de la porte pour un passage confortable.",
        image:
          "/images/realisations/abri-jardin/abri-jardin-parpaing-elevation-pignon-linteau.webp",
      },
      {
        title: "Charpente et couverture en tuiles",
        description:
          "Petite charpente bois et couverture en tuiles dans l'esprit de la maison : l'abri est hors d'eau pour des décennies.",
        image: "/images/realisations/abri-jardin/abri-jardin-maconne-parpaing-toiture-tuiles.webp",
      },
    ],
    materials: ["Parpaing 20 cm", "Béton armé", "Charpente bois", "Tuiles terre cuite"],
    keywords: [
      "abri de jardin maçonné Saint-Quentin-Fallavier",
      "construction abri jardin parpaing Isère",
      "abri jardin dur Nord-Isère",
      "maçon abri de jardin Bourgoin-Jallieu",
    ],
  },

  // ------------------------------------------------------------------
  // RÉSEAUX D'EAUX PLUVIALES — LA VERPILLIÈRE
  // ------------------------------------------------------------------
  {
    slug: "reseaux-eaux-pluviales-la-verpilliere",
    title: "Réseaux d'eaux pluviales à La Verpillière",
    city: "La Verpillière",
    service: "VRD",
    date: "2024",
    clientType: "Particulier",
    keyFigures: [
      { value: "Regards", label: "de visite aux points clés du réseau" },
      { value: "Pentes", label: "contrôlées au niveau à la pose" },
      { value: "Ventilation", label: "secondaire intégrée au réseau" },
    ],
    description:
      "Travaux de VRD à La Verpillière : tranchées, pose de canalisations d'eaux pluviales, regards de visite et évacuation des eaux usées avec ventilation secondaire.",
    context: [
      "L'eau mal gérée est la première cause de désordres autour d'une maison : terrasses qui se déchaussent, sous-sols humides, fondations fragilisées. Sur ce chantier de La Verpillière, nous avons repris les réseaux enterrés : collecte des eaux pluviales, évacuation des eaux usées et ventilation secondaire.",
    ],
    challenges: [
      "Creuser les tranchées aux bonnes profondeurs avec les pentes d'écoulement réglementaires",
      "Positionner les regards pour un entretien facile du réseau",
      "Raccorder eaux usées et ventilation secondaire dans les règles",
    ],
    solution:
      "Un réseau enterré ne se rattrape pas après remblaiement : chaque canalisation est posée sur un lit de pose, avec une pente contrôlée au niveau, et chaque changement de direction reçoit un regard de visite. La ventilation secondaire, souvent oubliée, évite le désiphonnage des équipements de la maison — nous l'intégrons systématiquement.",
    content:
      "Les tranchées ont été ouvertes à la mini-pelle aux profondeurs requises, avec des pentes régulières contrôlées tout au long de la pose : c'est la pente qui fait fonctionner un réseau gravitaire, pas le diamètre du tuyau.\n\nLes canalisations d'eaux pluviales ont été posées et raccordées vers l'exutoire, avec des regards de visite aux points stratégiques : en cas de bouchon dans dix ans, tout reste accessible sans casser.\n\nLe réseau d'eaux usées a été repris avec sa ventilation secondaire : une colonne qui équilibre les pressions dans le réseau et protège les siphons de la maison. Après essais d'écoulement, les tranchées ont été remblayées et compactées.\n\nÀ l'intérieur, les attentes d'évacuation et de ventilation ont été positionnées avant coulage puis intégrées à la dalle béton, lissée en finition : chaque équipement futur trouvera son raccordement exactement là où il faut.",
    images: [
      {
        src: "/images/realisations/vrd-eaux-pluviales/evacuation-eaux-usees-ventilation-vrd-finition-beton-lisse.webp",
        alt: "Attentes d'évacuation des eaux usées et ventilation intégrées à la dalle béton lissée — DZ Maçonnerie",
        phase: "apres",
      },
      {
        src: "/images/realisations/vrd-eaux-pluviales/tranchee-eaux-pluviales-terrassement.webp",
        alt: "Tranchée d'eaux pluviales creusée à La Verpillière — DZ Maçonnerie Terrassement",
        phase: "pendant",
      },
      {
        src: "/images/realisations/vrd-eaux-pluviales/reseau-eaux-pluviales-regard-pose.webp",
        alt: "Regard de visite posé sur le réseau d'eaux pluviales",
        phase: "pendant",
      },
      {
        src: "/images/realisations/vrd-eaux-pluviales/evacuation-eaux-usees-ventilation-vrd.webp",
        alt: "Évacuation des eaux usées et ventilation secondaire raccordées",
        phase: "pendant",
      },
    ],
    steps: [
      {
        title: "Ouverture des tranchées",
        description:
          "Tranchées creusées à la mini-pelle aux profondeurs requises, fond réglé pour des pentes d'écoulement régulières.",
        image:
          "/images/realisations/vrd-eaux-pluviales/tranchee-eaux-pluviales-terrassement.webp",
      },
      {
        title: "Pose des canalisations et regards",
        description:
          "Canalisations posées sur lit de pose, pentes contrôlées au niveau, regards de visite aux changements de direction.",
        image: "/images/realisations/vrd-eaux-pluviales/reseau-eaux-pluviales-regard-pose.webp",
      },
      {
        title: "Eaux usées et ventilation secondaire",
        description:
          "Reprise de l'évacuation des eaux usées avec sa ventilation secondaire, essais d'écoulement puis remblaiement compacté.",
        image:
          "/images/realisations/vrd-eaux-pluviales/evacuation-eaux-usees-ventilation-vrd.webp",
      },
    ],
    materials: ["Canalisations PVC", "Regard de visite", "Gravier concassé"],
    keywords: [
      "eaux pluviales La Verpillière",
      "VRD Nord-Isère",
      "tranchée évacuation eaux usées Isère",
      "raccordement eaux pluviales maçon",
    ],
  },
];

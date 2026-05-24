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
    description:
      "Extension de 42 m² sur deux niveaux, intégrée harmonieusement à la maison existante. Murs en parpaing, dalle béton armé et enduit finition lisse.",
    content:
      "Un particulier de Bourgoin-Jallieu nous a confié l'extension de sa maison pour créer un espace séjour supplémentaire au rez-de-chaussée et une chambre à l'étage. Le chantier a débuté par des travaux de fondation en béton armé, suivis de l'élévation des murs en parpaing creux 20 cm.\n\nLa dalle de plancher intermédiaire a été réalisée avec des poutrelles et hourdis, puis coulée en béton. L'ensemble a été enduit en finition lisse ton pierre pour s'harmoniser avec l'existant. Le gros œuvre a été livré dans les délais prévus, prêt pour les corps d'état secondaires.\n\nLe client dispose désormais de 42 m² supplémentaires entièrement neufs, avec une garantie décennale couvrant l'intégralité de notre intervention.",
    images: [
      {
        src: "/images/realisations/extension-maison-bourgoin-jallieu-facade.webp",
        alt: "Extension maison deux niveaux façade terminée à Bourgoin-Jallieu — DZ Maçonnerie",
      },
      {
        src: "/images/realisations/extension-maison-bourgoin-jallieu-structure.webp",
        alt: "Structure parpaing extension maison en cours de montage à Bourgoin-Jallieu",
      },
      {
        src: "/images/realisations/extension-maison-bourgoin-jallieu-interieur.webp",
        alt: "Intérieur extension maison dalle béton et finitions à Bourgoin-Jallieu",
      },
    ],
    materials: ["Parpaing 20 cm", "Béton armé", "Poutrelles hourdis", "Enduit finition lisse"],
    keywords: [
      "extension maison Bourgoin-Jallieu",
      "agrandissement maison Nord-Isère",
      "gros œuvre Bourgoin-Jallieu",
      "maçonnerie extension Isère",
    ],
  },
  {
    slug: "dalle-beton-artas",
    title: "Dalle béton intérieure à Artas",
    city: "Artas",
    service: "Dalle béton",
    date: "Janvier 2024",
    description:
      "Réalisation d'une dalle béton armée de 80 m² pour un garage-atelier à Artas. Ferraillage sur treillis soudé, béton C25/30 lissé mécaniquement.",
    content:
      "Ce chantier consistait à couler une dalle béton armée de 80 m² pour la construction d'un garage-atelier à Artas. Après terrassement et mise en forme du fond de fouille, nous avons posé un film polyane anti-humidité, puis un isolant périphérique.\n\nLe ferraillage a été réalisé avec du treillis soudé ST25 disposé en deux lits croisés sur les zones de forte charge. La dalle a été coulée en béton C25/30 dosé à 350 kg/m³ et talochée mécaniquement pour obtenir une surface parfaitement plane et prête à recevoir un revêtement.\n\nL'ensemble des travaux a été réalisé en une seule journée de coulage. Le résultat est une dalle de haute qualité répondant aux normes DTU 13.3, garantissant solidité et longévité.",
    images: [
      {
        src: "/images/realisations/dalle-beton-artas-resultat.webp",
        alt: "Dalle béton lissée mécaniquement 80 m² terminée à Artas — DZ Maçonnerie",
      },
      {
        src: "/images/realisations/dalle-beton-artas-ferraillage.webp",
        alt: "Ferraillage treillis soudé avant coulage dalle béton à Artas",
      },
      {
        src: "/images/realisations/dalle-beton-artas-coulage.webp",
        alt: "Coulage béton C25/30 dalle garage-atelier à Artas par DZ Maçonnerie",
      },
    ],
    materials: ["Béton C25/30", "Treillis soudé ST25", "Film polyane", "Isolant périphérique"],
    keywords: [
      "dalle béton Artas",
      "sol béton garage Isère",
      "chape béton armé Nord-Isère",
      "DZ Maçonnerie Artas",
    ],
  },
  {
    slug: "terrassement-la-verpilliere",
    title: "Terrassement terrain à La Verpillière",
    city: "La Verpillière",
    service: "Terrassement",
    date: "Avril 2024",
    description:
      "Terrassement et nivellement d'un terrain de 600 m² à La Verpillière pour la construction d'une maison individuelle. Déblai, remblai et préparation des accès.",
    content:
      "Nous avons réalisé le terrassement complet d'un terrain de 600 m² à La Verpillière, préalablement à la construction d'une maison individuelle. Le chantier comprenait le déblaiement de la couche végétale, l'excavation pour les fondations et la création d'une plateforme parfaitement nivelée.\n\nLes terres excédentaires ont été évacuées et remplacées par du tout-venant 0/31.5 compacté par couches successives à l'aide d'une plaque vibrante. Un géotextile a été posé en fond de fouille pour limiter la remontée capillaire et garantir la stabilité du sol à long terme.\n\nLes accès au chantier ont également été traités avec du gravier concassé pour permettre la circulation des engins de construction pendant toute la durée des travaux. Le terrain a été rendu en état de recevoir les fondations dans les délais impartis.",
    images: [
      {
        src: "/images/realisations/terrassement-la-verpilliere-vue-generale.webp",
        alt: "Terrassement terrain 600 m² vue générale à La Verpillière — DZ Maçonnerie",
      },
      {
        src: "/images/realisations/terrassement-la-verpilliere-engins.webp",
        alt: "Engins de terrassement excavatrice au travail à La Verpillière",
      },
      {
        src: "/images/realisations/terrassement-la-verpilliere-nivellement.webp",
        alt: "Nivellement et compactage plateforme terrain à La Verpillière",
      },
    ],
    materials: ["Tout-venant 0/31.5", "Géotextile", "Gravier concassé", "Remblai sélectionné"],
    keywords: [
      "terrassement La Verpillière",
      "terrassement terrain Isère",
      "préparation terrain construction Nord-Isère",
      "entreprise terrassement 38",
    ],
  },
  {
    slug: "renovation-facade-vienne",
    title: "Rénovation façade à Vienne",
    city: "Vienne",
    service: "Rénovation",
    date: "Juin 2024",
    description:
      "Réfection complète de la façade d'une maison des années 1970 à Vienne. Piquage de l'ancien enduit, application d'un enduit hydraulique armé et finition grattée ton naturel.",
    content:
      "Cette maison des années 1970 à Vienne présentait une façade fortement dégradée, avec des zones de décollement, des fissures et des traces d'humidité. Après un diagnostic complet, nous avons procédé au piquage intégral de l'ancien enduit sur l'ensemble des façades.\n\nUn enduit de gobetis a d'abord été appliqué pour assurer l'accroche sur le support. Puis un corps d'enduit hydraulique armé d'une fibre de verre a été réalisé pour garantir la résistance mécanique et la protection contre les fissures. La finition choisie par le client est un enduit grattée gros grain ton naturel, conforme à la couleur du secteur patrimonial de Vienne.\n\nLes travaux ont inclus la reprise des encadrements de fenêtres, des appuis et des bandeaux décoratifs. La maison a retrouvé une façade neuve, étanche et isolante, pour une durabilité estimée à plus de 20 ans.",
    images: [
      {
        src: "/images/realisations/renovation-facade-vienne-resultat.webp",
        alt: "Rénovation façade maison années 70 enduit grattée ton naturel à Vienne — DZ Maçonnerie",
      },
      {
        src: "/images/realisations/renovation-facade-vienne-avant-travaux.webp",
        alt: "Façade avant rénovation état dégradé fissures à Vienne",
      },
      {
        src: "/images/realisations/renovation-facade-vienne-pose-enduit.webp",
        alt: "Pose enduit hydraulique armé fibre de verre façade à Vienne",
      },
    ],
    materials: ["Enduit hydraulique", "Fibre de verre armée", "Gobetis d'accroche", "Finition grattée"],
    keywords: [
      "ravalement façade Vienne",
      "rénovation façade Isère",
      "enduit extérieur Nord-Isère",
      "maçonnerie rénovation Vienne 38",
    ],
  },
  {
    slug: "construction-garage-saint-quentin-fallavier",
    title: "Construction garage à Saint-Quentin-Fallavier",
    city: "Saint-Quentin-Fallavier",
    service: "Construction garage",
    date: "Septembre 2023",
    description:
      "Construction d'un garage double de 45 m² à Saint-Quentin-Fallavier. Fondations semelles filantes, murs parpaing, dalle béton, toiture tuile romane.",
    content:
      "Construction complète d'un garage double pour un particulier de Saint-Quentin-Fallavier. Les travaux ont démarré par l'implantation et le terrassement, suivi du coulage des semelles filantes en béton armé dosé à 350 kg/m³.\n\nL'élévation des murs a été réalisée en parpaing creux 20 cm, avec chaînages verticaux et horizontaux conformes aux règles parasismiques de la zone. La dalle de sol, coulée en béton C25/30 sur hérisson et film polyane, a ensuite été réalisée avant la mise hors d'eau. La charpente en bois lamellé-collé a été posée et couverte de tuiles romane ton vieilli, assortie à la maison existante.\n\nLe garage dispose d'une porte sectionnelle motorisée et de deux fenêtres coulissantes. L'ensemble du gros œuvre a été livré en 6 semaines, avec remise du certificat de garantie décennale à la livraison.",
    images: [
      {
        src: "/images/realisations/construction-garage-saint-quentin-fallavier-resultat.webp",
        alt: "Garage double parpaing tuile romane terminé à Saint-Quentin-Fallavier — DZ Maçonnerie",
      },
      {
        src: "/images/realisations/construction-garage-saint-quentin-fallavier-structure.webp",
        alt: "Structure parpaing garage double en cours de montage à Saint-Quentin-Fallavier",
      },
      {
        src: "/images/realisations/construction-garage-saint-quentin-fallavier-toiture.webp",
        alt: "Pose charpente bois et tuiles romane garage à Saint-Quentin-Fallavier",
      },
    ],
    materials: ["Parpaing 20 cm", "Béton armé C25/30", "Charpente bois", "Tuile romane", "Semelles filantes"],
    keywords: [
      "construction garage Saint-Quentin-Fallavier",
      "garage maçonnerie Nord-Isère",
      "gros œuvre garage Isère",
      "entreprise construction garage 38",
    ],
  },
  {
    slug: "terrasse-beton-villefontaine",
    title: "Terrasse béton désactivé à Villefontaine",
    city: "Villefontaine",
    service: "Terrasse",
    date: "Mai 2024",
    description:
      "Création d'une terrasse extérieure de 55 m² en béton désactivé à Villefontaine. Préparation du fond de forme, ferraillage treillis, béton lavé finition granulat gris anthracite.",
    content:
      "Ce chantier consistait en la création d'une terrasse extérieure de 55 m² pour une villa à Villefontaine. Après décaissement et compactage du fond de forme en tout-venant, nous avons posé le treillis soudé sur chandelles pour un béton parfaitement armé.\n\nLe béton désactivé a été coulé en une journée sur l'ensemble de la surface, avec une pente de 2% vers l'extérieur pour un bon écoulement des eaux pluviales. Le désactivant a été appliqué immédiatement après le coulage, puis la surface a été lavée au jet haute pression après 24h de prise pour révéler les granulats gris anthracite choisis par le client.\n\nDes joints de dilatation ont été prévus tous les 25 m² pour prévenir les fissurations. La terrasse a également été équipée d'une rigole de drainage en périphérie. Le résultat est à la fois esthétique, antidérapant et très résistant aux cycles gel-dégel.",
    images: [
      {
        src: "/images/realisations/terrasse-beton-villefontaine-resultat.webp",
        alt: "Terrasse béton désactivé granulat anthracite 55 m² à Villefontaine — DZ Maçonnerie",
      },
      {
        src: "/images/realisations/terrasse-beton-villefontaine-coulage.webp",
        alt: "Coulage béton désactivé terrasse avec pente drainage à Villefontaine",
      },
      {
        src: "/images/realisations/terrasse-beton-villefontaine-detail-granulat.webp",
        alt: "Détail granulat gris anthracite béton désactivé lavé terrasse Villefontaine",
      },
    ],
    materials: ["Béton désactivé", "Treillis soudé", "Granulat gris anthracite", "Désactivant", "Tout-venant compacté"],
    keywords: [
      "terrasse béton désactivé Villefontaine",
      "terrasse extérieure béton Isère",
      "béton désactivé Nord-Isère",
      "création terrasse maçonnerie 38",
    ],
  },
  {
    slug: "piscine-maubec",
    title: "Construction piscine à Maubec",
    city: "Maubec",
    service: "Piscine",
    date: "Juillet 2024",
    description:
      "Construction d'une piscine de 10 x 4 m en béton armé à Maubec. Terrassement, ferraillage, coulage béton, pose liner et équipements hydrauliques.",
    content:
      "Réalisation complète d'une piscine de 10 x 4 m avec bassin béton armé pour une famille de Maubec. Le chantier a débuté par le terrassement de 220 m³ de terre, suivi de la création du radier de fond en béton armé de 25 cm d'épaisseur.\n\nLes parois verticales ont été réalisées par coffrage et coulage de béton armé dosé à 350 kg/m³ avec étanchéité incorporée. Les buses de refoulement, les skimmers et les prises balais ont été positionnés avant le coulage final. Après séchage, le liner armé 75/100 en coloris gris clair a été posé et soudé, puis les équipements de filtration ont été raccordés.\n\nLa plage périphérique a été réalisée en béton désactivé gris pour un résultat harmonieux. Le client dispose désormais d'une piscine entièrement maçonnée, garantie 10 ans, parfaitement intégrée à son jardin.",
    images: [
      {
        src: "/images/realisations/piscine-maubec-resultat.webp",
        alt: "Piscine béton armé liner gris clair plage désactivée terminée à Maubec — DZ Maçonnerie",
      },
      {
        src: "/images/realisations/piscine-maubec-construction-beton.webp",
        alt: "Construction piscine coffrage béton armé parois à Maubec",
      },
      {
        src: "/images/realisations/piscine-maubec-pose-liner.webp",
        alt: "Pose liner armé 75/100 gris clair piscine béton à Maubec",
      },
    ],
    materials: ["Béton armé C30/37", "Liner armé 75/100", "Skimmer", "Filtre à sable", "Pompe filtration"],
    keywords: [
      "construction piscine Maubec",
      "piscine béton Isère",
      "piscine maçonnerie Nord-Isère",
      "entreprise piscine béton 38",
    ],
  },
  {
    slug: "mur-cloture-ruy-montceau",
    title: "Mur de clôture à Ruy-Montceau",
    city: "Ruy-Montceau",
    service: "Clôture",
    date: "Octobre 2023",
    description:
      "Construction d'un mur de clôture de 45 ml en parpaing enduit à Ruy-Montceau. Fondations béton, élévation parpaing 15 cm, chaperon béton et enduit ton sablé.",
    content:
      "Ce chantier consistait à construire un mur de clôture de 45 mètres linéaires à Ruy-Montceau pour délimiter une propriété et garantir l'intimité du jardin. Les fondations ont été réalisées en tranchée filante avec béton de propreté et semelles armées.\n\nL'élévation a été montée en parpaing creux 15 cm jusqu'à 1,80 m de hauteur, avec des chaînages tous les 4 mètres pour garantir la stabilité. Des barbacanes ont été prévues à la base pour permettre l'écoulement des eaux pluviales et éviter les poussées. Un chaperon béton penté a été coulé sur toute la longueur du mur pour l'imperméabilisation du couronnement.\n\nL'ensemble a été enduit en finition sablée ton blanc cassé, côté rue, avec une grille de portail double vantaux intégrée en milieu de clôture. Le résultat offre une clôture robuste, esthétique et durable pour plusieurs décennies.",
    images: [
      {
        src: "/images/realisations/mur-cloture-ruy-montceau-resultat.webp",
        alt: "Mur clôture parpaing enduit sablé portail double vantaux terminé à Ruy-Montceau — DZ Maçonnerie",
      },
      {
        src: "/images/realisations/mur-cloture-ruy-montceau-elevation-parpaing.webp",
        alt: "Élévation mur parpaing 15 cm avec chaînages clôture à Ruy-Montceau",
      },
      {
        src: "/images/realisations/mur-cloture-ruy-montceau-chaperon.webp",
        alt: "Détail chaperon béton penté couronnement mur clôture à Ruy-Montceau",
      },
    ],
    materials: ["Parpaing 15 cm", "Béton armé", "Chaperon béton", "Enduit finition sablée"],
    keywords: [
      "mur clôture Ruy-Montceau",
      "clôture maçonnerie Isère",
      "construction mur béton Nord-Isère",
      "clôture parpaing enduit 38",
    ],
  },
  {
    slug: "chape-beton-crachier",
    title: "Chape béton à Crachier",
    city: "Crachier",
    service: "Chape",
    date: "Février 2024",
    description:
      "Réalisation d'une chape béton de 120 m² à Crachier pour un plancher chauffant. Isolation phonique, treillis chauffant, chape fluide autonivelante.",
    content:
      "Ce chantier de chape a été réalisé pour un particulier rénovant sa maison à Crachier, en préparation de la pose d'un carrelage grand format sur plancher chauffant. Après dépose de l'ancienne chape et vérification de la planéité du support, nous avons posé l'isolation phonique Tramichape 5 mm.\n\nLe réseau de tubes du plancher chauffant a été fixé sur le treillis de chauffage avant le coulage. La chape liquide autonivelante à base de sulfoaluminate de calcium a été coulée à 5 cm d'épaisseur sur l'ensemble des 120 m², garantissant une parfaite planéité (±2 mm au règle de 2 m) et une conductivité thermique optimale.\n\nLa chape a séché en 24h à la marche et en 7 jours pour la pose du carrelage. Le client a pu faire intervenir le carreleur dans les délais prévus, sans retard de chantier.",
    images: [
      {
        src: "/images/realisations/chape-beton-crachier-resultat.webp",
        alt: "Chape fluide autonivelante 120 m² plancher chauffant terminée à Crachier — DZ Maçonnerie",
      },
      {
        src: "/images/realisations/chape-beton-crachier-isolation.webp",
        alt: "Pose isolation phonique Tramichape et treillis chauffant à Crachier",
      },
      {
        src: "/images/realisations/chape-beton-crachier-coulage.webp",
        alt: "Coulage chape liquide autonivelante plancher chauffant à Crachier",
      },
    ],
    materials: ["Chape fluide autonivelante", "Isolation phonique Tramichape", "Treillis chauffant", "Sulfoaluminate de calcium"],
    keywords: [
      "chape béton Crachier",
      "chape plancher chauffant Isère",
      "chape autonivelante Nord-Isère",
      "maçonnerie chape 38",
    ],
  },
  {
    slug: "gros-oeuvre-isle-abeau",
    title: "Gros œuvre maison à L'Isle-d'Abeau",
    city: "L'Isle-d'Abeau",
    service: "Gros œuvre",
    date: "Novembre 2023",
    description:
      "Gros œuvre complet d'une maison individuelle de 120 m² à L'Isle-d'Abeau. Fondations, sous-sol, élévation R+1, dalle de compression et toiture terrasse.",
    content:
      "Construction du gros œuvre complet d'une maison individuelle de 120 m² à L'Isle-d'Abeau pour un client en auto-construction accompagnée. Le chantier a débuté par le terrassement de la cave et le coulage des fondations en béton armé avec semelles filantes et radier.\n\nLes murs du sous-sol ont été réalisés en béton banché avec imperméabilisation extérieure. L'élévation du rez-de-chaussée et du premier étage a été montée en bloc béton à coller PSE 30, offrant d'excellentes performances thermiques (U = 0,17 W/m².K). Les dalles intermédiaires et de toiture ont été réalisées en plancher poutrelles-hourdis EPS, avec dalle de compression de 5 cm.\n\nLes chaînages, linteaux et poteaux en béton armé ont été coulés en coffrages perdus. Le gros œuvre a été livré hors d'eau en 5 mois, conformément au planning convenu, et certifié par un contrôleur technique agréé.",
    images: [
      {
        src: "/images/realisations/gros-oeuvre-isle-abeau-resultat.webp",
        alt: "Gros œuvre maison individuelle R+1 hors d'eau à L'Isle-d'Abeau — DZ Maçonnerie",
      },
      {
        src: "/images/realisations/gros-oeuvre-isle-abeau-fondations.webp",
        alt: "Fondations béton armé semelles filantes radier maison à L'Isle-d'Abeau",
      },
      {
        src: "/images/realisations/gros-oeuvre-isle-abeau-elevation-murs.webp",
        alt: "Élévation murs bloc PSE 30 et plancher poutrelles-hourdis maison à L'Isle-d'Abeau",
      },
    ],
    materials: ["Bloc béton PSE 30", "Béton armé C25/30", "Poutrelles hourdis EPS", "Membrane bitumineuse", "Béton banché"],
    keywords: [
      "gros œuvre maison L'Isle-d'Abeau",
      "construction maison béton Nord-Isère",
      "gros œuvre Isère",
      "maçonnerie gros œuvre 38",
    ],
  },
];

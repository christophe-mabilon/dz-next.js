/**
 * Enrichissement éditorial des fiches réalisations, construit UNIQUEMENT
 * à partir des données existantes (matériaux, service, ville) — aucun fait
 * inventé sur les chantiers.
 */

// Glossaire technique : chaque matériau réellement utilisé sur un chantier
// est expliqué au visiteur (contenu unique par fiche, pédagogie = confiance).
export const materialsGlossary: Record<string, string> = {
  "Parpaing 20 cm":
    "Bloc béton de 20 cm d'épaisseur, le standard des murs porteurs : robuste, économique et durable.",
  "Parpaing 15 cm":
    "Bloc béton de 15 cm, adapté aux murs de clôture et cloisons lourdes.",
  "Béton armé":
    "Béton coulé sur armatures acier : la résistance à la compression du béton alliée à celle de l'acier en traction.",
  "Béton C25/30":
    "Béton structurel dosé pour résister à 25 MPa : le standard des dalles et fondations de maison individuelle.",
  "Béton armé C25/30":
    "Béton structurel armé (25 MPa), utilisé pour les ouvrages porteurs courants.",
  "Béton armé C30/37":
    "Béton haute résistance (30 MPa), prescrit pour les ouvrages fortement sollicités comme les piscines.",
  "Béton banché":
    "Béton coulé entre banches (coffrages verticaux) : murs monolithiques d'une grande solidité, parfaits pour les bassins.",
  "Poutrelles hourdis":
    "Système de plancher préfabriqué : poutrelles béton et entrevous, recouverts d'une dalle de compression.",
  "Poutrelles hourdis EPS":
    "Plancher poutrelles avec entrevous en polystyrène expansé : isolation thermique intégrée au plancher.",
  "Treillis soudé":
    "Nappe d'acier soudée noyée dans le béton pour reprendre les efforts de traction et limiter la fissuration.",
  "Treillis soudé ST25":
    "Treillis d'armature standard pour dalles de maison : anti-fissuration et répartition des charges.",
  "Treillis chauffant":
    "Réseau de chauffage au sol fixé avant coulage de la chape : chaleur douce et invisible.",
  "Film polyane":
    "Membrane polyéthylène posée sous la dalle : barrière contre les remontées d'humidité du sol.",
  "Isolant périphérique":
    "Bande isolante en pourtour de dalle : rupture des ponts thermiques et absorption des dilatations.",
  "Tout-venant 0/31.5":
    "Grave naturelle calibrée servant de couche de forme compactée sous les ouvrages.",
  "Tout-venant compacté":
    "Matériau granulaire compacté par couches : une assise stable qui ne bougera pas.",
  Géotextile:
    "Feutre technique séparant les couches du sol : il empêche les matériaux de se mélanger et stabilise l'ouvrage.",
  "Gravier concassé":
    "Granulat anguleux drainant, utilisé en hérisson sous dalle ou en assise stabilisée.",
  "Remblai sélectionné":
    "Matériaux de remblai triés et compactables, garantissant une plateforme homogène.",
  "Enduit hydraulique":
    "Enduit à base de liants hydrauliques : protection durable des maçonneries contre l'eau et les intempéries.",
  "Fibre de verre armée":
    "Armature souple noyée dans l'enduit pour ponter les microfissures du support.",
  "Gobetis d'accroche":
    "Première couche d'enduit projetée qui assure l'adhérence des couches suivantes au mur.",
  "Finition grattée":
    "Finition d'enduit traditionnelle, grattée à la règle : aspect mat et minéral, très résistant.",
  "Enduit finition lisse":
    "Enduit taloché fin pour un rendu contemporain uniforme.",
  "Enduit finition sablée":
    "Finition d'enduit à grain fin, sobre et durable, classique des clôtures.",
  "Charpente bois":
    "Ossature de toiture en bois massif, dimensionnée selon les charges de neige locales.",
  "Tuile romane":
    "Tuile galbée traditionnelle de la région, esthétique méditerranéenne et excellente évacuation des eaux.",
  "Semelles filantes":
    "Fondations linéaires continues sous les murs porteurs, dimensionnées selon la portance du sol.",
  "Liner armé 75/100":
    "Membrane d'étanchéité piscine renforcée de 1,5 mm : bien plus résistante qu'un liner standard.",
  Skimmer: "Dispositif d'aspiration de surface qui capte les impuretés flottantes du bassin.",
  "Filtre à sable":
    "Système de filtration robuste et simple d'entretien, adapté aux piscines familiales.",
  "Pompe filtration":
    "Cœur du circuit hydraulique : elle assure la circulation et la filtration de l'eau du bassin.",
  "Chaperon béton":
    "Couvre-mur en béton qui protège la tête du mur des infiltrations et donne la finition.",
  "Chape fluide autonivelante":
    "Chape liquide qui se met en place d'elle-même : planéité parfaite, idéale sur plancher chauffant.",
  "Isolation phonique Tramichape":
    "Sous-couche acoustique posée sous la chape pour couper les bruits d'impact.",
  "Sulfoaluminate de calcium":
    "Liant à prise rapide et faible retrait, utilisé dans les chapes fluides techniques.",
  "Bloc béton PSE 30":
    "Bloc à bancher isolant (polystyrène 30 cm) : structure et isolation en une seule opération.",
  "Membrane bitumineuse":
    "Étanchéité soudée au chalumeau, référence pour les toitures-terrasses.",
  "Chaînage béton armé":
    "Ceinture de béton armé coulée en tête de murs : elle solidarise la structure et évite les fissurations.",
  "Linteau béton armé":
    "Poutre en béton armé posée au-dessus d'une ouverture pour reprendre les charges du mur.",
  Étaiement:
    "Étais métalliques qui reprennent provisoirement les charges du mur pendant la création d'une ouverture.",
  Pisé:
    "Terre crue compactée en banches, typique du bâti ancien du Nord-Isère : solide mais fragile à travailler, il exige une intervention par passes courtes.",
  "Dalles sur plots":
    "Dalles posées sur supports réglables : terrasse plane, drainante et démontable, sans colle ni joint.",
  "Dalles grès cérame 2 cm":
    "Céramique pleine masse de 20 mm d'épaisseur, ingélive et antidérapante, conçue pour la pose extérieure sur plots.",
  "Plots réglables":
    "Supports à vis placés sous chaque angle de dalle : réglage du niveau au millimètre et libre écoulement de l'eau dessous.",
  "Galets drainants":
    "Lit de galets placé derrière un mur de soutènement : l'eau percole et s'évacue au lieu de pousser sur l'ouvrage.",
  Couvertine:
    "Profil de couronnement posé en tête de mur pour le protéger des infiltrations d'eau de pluie.",
  "Blocs à bancher":
    "Blocs creux empilés à sec, ferraillés puis remplis de béton : un mur monolithique d'une grande solidité.",
  "Platines de fixation":
    "Plaques d'ancrage fixées sur massif béton pour recevoir les poteaux : pose précise et démontable.",
  "Panneaux de clôture rigides":
    "Panneaux de treillis soudé galvanisé : une clôture indéformable et sans entretien.",
  Occultants:
    "Lamelles insérées dans les panneaux rigides pour créer un brise-vue opaque et durable.",
  "Mortier-colle":
    "Colle à carrelage adaptée au format et au support, garante d'une adhérence totale sous chaque carreau.",
  "Carrelage imitation parquet":
    "Grès cérame en format lame reproduisant le bois : l'esthétique du parquet, la robustesse du carrelage.",
  "Tuiles terre cuite":
    "Couverture traditionnelle de la région : durable, réparable et parfaitement intégrée au bâti local.",
  "Canalisations PVC":
    "Tuyaux d'assainissement posés sur lit de pose avec pente contrôlée, pour un écoulement gravitaire fiable.",
  "Regard de visite":
    "Boîte d'accès placée aux points clés du réseau enterré : contrôle et débouchage sans terrassement.",
};

// service (libellé réalisation) -> slug du service correspondant
export const realisationServiceSlug: Record<string, string> = {
  Terrassement: "terrassement",
  "Dalle béton": "dalle-beton",
  Chape: "dalle-beton",
  Terrasse: "piscine-terrasse",
  Piscine: "piscine-terrasse",
  "Extension maison": "extension-maison",
  Agrandissement: "agrandissement-maison",
  "Construction garage": "maconnerie-neuf",
  "Gros œuvre": "maconnerie-neuf",
  Rénovation: "renovation-maconnerie",
  "Ouverture mur porteur": "renovation-maconnerie",
  Carrelage: "renovation-maconnerie",
  Clôture: "clotures-murs",
  "Mur de soutènement": "clotures-murs",
  "Dalles sur plots": "dalles-sur-plot",
  "Abri de jardin": "abri-de-jardin",
  VRD: "terrassement",
};

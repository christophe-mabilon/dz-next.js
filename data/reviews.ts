import reviewsLive from "./reviews-live.json";

export interface Review {
  author: string;
  rating: number;
  text: string;
  source: string;
  relativeDate?: string;
  /** renseignés sur les avis curatés à la main, absents des avis API */
  city?: string;
  service?: string;
}

export const reviews: Review[] = [
  {
    author: "Valerie Sperti",
    city: "Artas",
    rating: 5,
    service: "Terrasse béton",
    relativeDate: "il y a 8 mois",
    source: "Google",
    text: "Nous avons fait appel à David pour notre terrasse et nous en sommes ravis. Un artisan sérieux, sympathique et très professionnel. Le travail est soigné et de grande qualité. Je recommande à 100 %.",
  },

  {
    author: "Julien Gandit",
    city: "Bourgoin-Jallieu",
    rating: 5,
    service: "Murets de soutènement",
    relativeDate: "il y a 1 an",
    source: "Google",
    text: "J’ai fait appel à David pour deux murets de soutènement. Je suis très satisfait du résultat. Artisan très professionnel qui donne de bons conseils et réalise un travail impeccable.",
  },

  {
    author: "Seve Long",
    city: "Vienne",
    rating: 5,
    service: "Dalle béton terrasse",
    relativeDate: "il y a 7 mois",
    source: "Google",
    text: "Artisan sérieux, minutieux et très professionnel. Nous avons fait appel à lui pour une dalle béton de terrasse et le résultat est superbe. Je recommande sans hésitation.",
  },

  {
    author: "Christian Cioffi",
    city: "Saint-Jean-de-Bournay",
    rating: 5,
    service: "Travaux techniques",
    relativeDate: "il y a 1 an",
    source: "Google",
    text: "Un maçon comme on en trouve rarement aujourd’hui. Sérieux, très minutieux et extrêmement professionnel. Les travaux réalisés chez moi sont proches de la perfection.",
  },

  {
    author: "Nic Olas",
    city: "Villefontaine",
    rating: 5,
    service: "Pose de clôture",
    relativeDate: "il y a 9 mois",
    source: "Google",
    text: "Travail très sérieux et professionnel pour la pose de notre clôture. Résultat impeccable et chantier propre. Nous referons appel à cette entreprise sans hésiter.",
  },

  {
    author: "Mabilon Sandrine",
    city: "Artas",
    rating: 5,
    service: "Maçonnerie générale",
    relativeDate: "il y a 6 mois",
    source: "Google",
    text: "Travail très soigné et appliqué. Entreprise à l’écoute et très professionnelle. Nous sommes ravis du résultat et recommandons vivement DZ Maçonnerie.",
  },

  {
    author: "Philippe G.",
    city: "Nord-Isère",
    rating: 5,
    service: "Création de plancher",
    relativeDate: "il y a 11 mois",
    source: "Google",
    text: "Travail parfait, rapide et efficace avec un excellent rapport qualité-prix. Très satisfait de la création du plancher au-dessus de notre salon.",
  },

  {
    author: "Michael R.",
    city: "Bourgoin-Jallieu",
    rating: 5,
    service: "Terrasse et piscine",
    relativeDate: "il y a 1 an",
    source: "Google",
    text: "Très bon artisan. Travail minutieux et de qualité avec respect des délais. Enfin une entreprise sérieuse qui inspire confiance.",
  },

  {
    author: "Alexis H.",
    city: "Vienne",
    rating: 5,
    service: "Travaux de maçonnerie",
    relativeDate: "il y a 5 mois",
    source: "Google",
    text: "Nous avons confié plusieurs travaux de maçonnerie à David et tout a été parfaitement réalisé. Travail propre, soigné et communication excellente.",
  },

  {
    author: "Client Bourgoin-Jallieu",
    city: "Bourgoin-Jallieu",
    rating: 5,
    service: "Extension maison",
    relativeDate: "il y a 10 mois",
    source: "Google",
    text: "Entreprise très sérieuse avec un excellent suivi du chantier. Travail propre et conforme à nos attentes. Nous recommandons vivement.",
  },

  {
    author: "Client Artas",
    city: "Artas",
    rating: 5,
    service: "Terrassement",
    relativeDate: "il y a 4 mois",
    source: "Google",
    text: "Très satisfait des travaux de terrassement réalisés. Professionnel ponctuel, efficace et très à l’écoute du client.",
  },

  {
    author: "Client Nord-Isère",
    city: "Nord-Isère",
    rating: 5,
    service: "Dalle béton",
    relativeDate: "il y a 1 an",
    source: "Google",
    text: "Excellent travail pour notre dalle béton. Chantier propre, délais respectés et résultat impeccable.",
  },

  {
    author: "Client Vienne",
    city: "Vienne",
    rating: 5,
    service: "Rénovation maçonnerie",
    relativeDate: "il y a 7 mois",
    source: "Google",
    text: "Très bon artisan maçon avec de très belles finitions. Communication simple et efficace du début à la fin des travaux.",
  },

  {
    author: "Client Villefontaine",
    city: "Villefontaine",
    rating: 5,
    service: "Mur de clôture",
    relativeDate: "il y a 8 mois",
    source: "Google",
    text: "Travail très professionnel avec un rendu final de grande qualité. Chantier bien organisé et propre.",
  },

  {
    author: "Client Saint-Jean-de-Bournay",
    city: "Saint-Jean-de-Bournay",
    rating: 5,
    service: "Maçonnerie extérieure",
    relativeDate: "il y a 6 mois",
    source: "Google",
    text: "Entreprise fiable et sérieuse. Les délais ont été respectés et le chantier a été parfaitement réalisé. Très satisfait du résultat final.",
  },
];

/**
 * Avis affichés sur le site : les avis Google récupérés automatiquement
 * (scripts/fetch-reviews.mjs) en tête, dédoublonnés par auteur avec la
 * liste curatée ci-dessus. Se met à jour à chaque build (hook prebuild).
 */
export const allReviews: Review[] = [
  ...((reviewsLive.reviews ?? []) as Review[]).filter(
    (live) => !reviews.some((m) => m.author === live.author),
  ),
  ...reviews,
];

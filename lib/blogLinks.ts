import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { Service, City } from "@/types";

type ArticleLike = {
  slug: string;
  category?: string;
};

// mots-clés du slug d'article -> slug de service (du plus spécifique au plus large)
const SLUG_RULES: [RegExp, string][] = [
  [/extension|agrandissement/, "extension-maison"],
  [/renovation|fissures|ancienne/, "renovation-maconnerie"],
  // « terrassement » avant « terrasse » (terrassement contient terrasse)
  [/terrassement|evacuation|mini-pelle|drainage|preparer-terrain/, "terrassement"],
  [/terrasse/, "piscine-terrasse"],
  [/dalle|chape|beton-desactive|allee|amenagement/, "dalle-beton"],
  [/mur-soutenement|cloture/, "clotures-murs"],
  [/fondation|construction|escalier/, "maconnerie-neuf"],
];

// catégorie d'article -> slug de service (fallback)
const CATEGORY_MAP: Record<string, string> = {
  Terrassement: "terrassement",
  "Dalle béton": "dalle-beton",
  Terrasse: "piscine-terrasse",
  Maçonnerie: "maconnerie-neuf",
  Rénovation: "renovation-maconnerie",
  Extension: "extension-maison",
  Construction: "maconnerie-neuf",
  "Aménagement extérieur": "dalle-beton",
  Entretien: "renovation-maconnerie",
  Conseils: "maconnerie-neuf",
};

/** Service correspondant au sujet d'un article de blog. */
export function getArticleService(article: ArticleLike): Service | undefined {
  const bySlug = SLUG_RULES.find(([re]) => re.test(article.slug))?.[1];
  const slug = bySlug ?? CATEGORY_MAP[article.category ?? ""] ?? "maconnerie-neuf";
  return services.find((s) => s.slug === slug);
}

/** Grandes villes (Isère d'abord) pour les liens service×ville des articles. */
export function getStrategicCities(limit = 5): City[] {
  return cities
    .filter((c) => c.featured)
    .sort(
      (a, b) =>
        Number(b.department === "38") - Number(a.department === "38") ||
        (b.population ?? 0) - (a.population ?? 0),
    )
    .slice(0, limit);
}

/** Articles de blog liés à un service (pour le maillage inverse service -> guides). */
export function getServiceArticles<T extends ArticleLike>(
  serviceSlug: string,
  articles: T[],
  limit = 4,
): T[] {
  return articles
    .filter((a) => getArticleService(a)?.slug === serviceSlug)
    .slice(0, limit);
}

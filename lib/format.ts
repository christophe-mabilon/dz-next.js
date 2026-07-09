/**
 * Formatage de la population INSEE (nombre brut) en chaîne lisible.
 * Ex. 30151 -> "30 151 habitants" (espace insécable fine, locale fr-FR).
 */
export function formatPopulation(population?: number): string | undefined {
  if (population == null || !Number.isFinite(population)) return undefined;
  return `${population.toLocaleString("fr-FR")} habitants`;
}

/**
 * Formatage court d'un nombre en fr-FR (ex. 30151 -> "30 151").
 */
export function formatNumberFr(value?: number): string | undefined {
  if (value == null || !Number.isFinite(value)) return undefined;
  return value.toLocaleString("fr-FR");
}

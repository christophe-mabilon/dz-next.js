import { City, Service, SeoFaq } from "@/types";
import { deVille } from "@/lib/format";

function getStableIndex(seed: string, length: number): number {
  const hash = seed
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return hash % length;
}

function pickTemplate(templates: string[], seed: string): string {
  return templates[getStableIndex(seed, templates.length)];
}

// "a, b et c" (max n éléments)
function listFr(items: string[] | undefined, max = 3): string {
  const a = (items ?? []).slice(0, max);
  if (a.length <= 1) return a[0] ?? "";
  return a.slice(0, -1).join(", ") + " et " + a[a.length - 1];
}

/**
 * Génère un title SEO dynamique
 */
export function generateSeoTitle(service: Service, city?: City): string {
  if (!city) {
    const templates = [
      `${service.name} | DZ Maçonnerie`,

      `${service.name} - Devis Gratuit | DZ Maçonnerie`,

      `Entreprise de ${service.name.toLowerCase()} | DZ Maçonnerie`,

      `${service.name} professionnel | Garantie décennale`,

      `Expert en ${service.name.toLowerCase()} en Isère`,

      `${service.name} pour maison et rénovation`,

      `Travaux de ${service.name.toLowerCase()} | Artisan qualifié`,

      `${service.name} et terrassement en Nord-Isère`,
    ];

    return pickTemplate(templates, service.slug);
  }

  const templates = [
    `${service.name} à ${city.name} (${city.zipCode}) | DZ Maçonnerie`,

    `${service.name} à ${city.name} - Devis Gratuit`,

    `Entreprise de ${service.name.toLowerCase()} à ${city.name}`,

    `${service.name} professionnel à ${city.name} | Garantie décennale`,

    `Artisan spécialisé en ${service.name.toLowerCase()} à ${city.name}`,

    `${service.name} en Isère - ${city.name}`,

    `Entreprise bâtiment à ${city.name} - ${service.name}`,

    `${service.name} pour particuliers à ${city.name}`,

    `Expert en ${service.name.toLowerCase()} à ${city.name}`,

    `${service.name} et rénovation à ${city.name}`,

    `Travaux de ${service.name.toLowerCase()} à ${city.name}`,

    `${service.name} avec devis gratuit à ${city.name}`,

    `Artisan maçon à ${city.name} spécialisé en ${service.name.toLowerCase()}`,

    `${service.name} pour maison et extension à ${city.name}`,

    `${service.name} générale à ${city.name}`,

    `Entreprise bâtiment et ${service.name.toLowerCase()} à ${city.name}`,

    `${service.name} et terrassement à ${city.name}`,

    `Rénovation et ${service.name.toLowerCase()} à ${city.name}`,

    `${service.name} de qualité à ${city.name}`,

    `${service.name} artisanale à ${city.name}`,
  ];

  return pickTemplate(templates, `${service.slug}-${city.slug}`);
}

/**
 * Génère une meta description SEO dynamique
 */
export function generateSeoDescription(service: Service, city?: City): string {
  if (!city) {
    const templates = [
      `${service.description}. Devis gratuit et intervention rapide.`,

      `DZ Maçonnerie réalise vos travaux de ${service.name.toLowerCase()} avec garantie décennale.`,

      `Entreprise spécialisée en ${service.name.toLowerCase()} pour tous vos projets de construction et rénovation.`,

      `Artisan qualifié en ${service.name.toLowerCase()} en Nord-Isère.`,

      `Travaux de ${service.name.toLowerCase()} pour particuliers et professionnels.`,
    ];

    return pickTemplate(templates, service.slug);
  }

  const templates = [
    `DZ Maçonnerie réalise vos travaux de ${service.name.toLowerCase()} à ${city.name} (${city.zipCode}). Devis gratuit et intervention rapide.`,

    `Entreprise spécialisée en ${service.name.toLowerCase()} à ${city.name}. Artisan qualifié avec garantie décennale.`,

    `Besoin d’un expert en ${service.name.toLowerCase()} à ${city.name} ? Notre équipe intervient rapidement pour tous vos projets.`,

    `Travaux de ${service.name.toLowerCase()} à ${city.name} : rénovation, terrassement, construction et gros œuvre.`,

    `${service.name} à ${city.name} avec accompagnement personnalisé, matériaux de qualité et respect des délais.`,

    `Entreprise artisanale à ${city.name} spécialisée en ${service.name.toLowerCase()} et rénovation bâtiment.`,

    `DZ Maçonnerie intervient à ${city.name} pour tous vos travaux de ${service.name.toLowerCase()} et aménagement extérieur.`,

    `Artisan maçon à ${city.name} pour terrasse béton, rénovation et extension maison.`,

    `${service.name} professionnel à ${city.name} avec devis gratuit et garantie décennale.`,

    `Travaux de ${service.name.toLowerCase()} à ${city.name} pour maison, garage et rénovation extérieure.`,

    `Entreprise locale de ${service.name.toLowerCase()} à ${city.name} avec plus de 10 ans d’expérience.`,

    `DZ Maçonnerie accompagne vos projets de ${service.name.toLowerCase()} à ${city.name} avec intervention rapide.`,
  ];

  return pickTemplate(templates, `${service.slug}-${city.slug}`);
}

/**
 * Génère un H1 SEO dynamique
 */
export function generateH1(service: Service, city?: City): string {
  if (!city) {
    return service.name;
  }

  const templates = [
    `${service.name} à ${city.name}`,

    `Entreprise de ${service.name.toLowerCase()} à ${city.name}`,

    `Artisan spécialisé en ${service.name.toLowerCase()} à ${city.name}`,

    `Travaux de ${service.name.toLowerCase()} à ${city.name}`,

    `Expert en ${service.name.toLowerCase()} à ${city.name}`,

    `${service.name} professionnel à ${city.name}`,

    `${service.name} et rénovation à ${city.name}`,

    `Entreprise bâtiment à ${city.name}`,
  ];

  return pickTemplate(templates, `${service.slug}-${city.slug}-h1`);
}

/**
 * Génère une introduction locale dynamique
 */
export function generateLocalIntroduction(
  service: Service,
  city: City,
): string {
  const svc = service.name.toLowerCase();
  const pop = city.population
    ? `, commune de ${city.population.toLocaleString("fr-FR")} habitants`
    : "";

  const introBlocks = [
    `DZ Maçonnerie intervient à ${city.name}${pop ? ` (${city.zipCode})${pop}` : ""}, pour tous vos travaux de ${svc}.`,

    `Notre entreprise accompagne les habitants ${deVille(city.name)}${pop} pour leurs projets de ${svc}.`,

    `Vous recherchez un artisan spécialisé en ${svc} à ${city.name}${pop ? ` (${city.zipCode})` : ""} ? DZ Maçonnerie, basée à Artas, intervient dans toute la commune.`,

    `DZ Maçonnerie réalise des prestations de ${svc} à ${city.name}${pop} pour particuliers et professionnels.`,
  ];

  // quartiers réels (OSM) — spécifique à chaque commune
  const hoods = city.neighborhoods?.length
    ? ` Nous intervenons dans tous les quartiers, notamment ${listFr(city.neighborhoods, 3)}.`
    : "";

  // contraintes réelles du terrain (Géorisques) croisées avec le service
  const issues = city.commonIssues?.length
    ? pickTemplate(
        [
          ` À ${city.name}, les terrains exigent une attention particulière : ${listFr(city.commonIssues, 2)}. Nous en tenons compte dès l'étude de votre projet de ${svc}.`,

          ` Le secteur présente des enjeux de ${listFr(city.commonIssues, 2)} — notre équipe adapte les techniques de ${svc} en conséquence.`,

          ` Particularité locale : ${listFr(city.commonIssues, 2)}. Chaque chantier de ${svc} démarre par une analyse du terrain.`,
        ],
        `${service.slug}-${city.slug}-issues`,
      )
    : "";

  const guaranteeBlocks = [
    ` Tous nos travaux sont couverts par une garantie décennale, avec devis gratuit sous 24h.`,

    ` Devis gratuit et sans engagement, garantie décennale sur l'ensemble du chantier.`,

    ` Notre équipe vous accompagne de l'étude du projet jusqu'à la livraison, garantie décennale incluse.`,
  ];

  return `${pickTemplate(introBlocks, `${service.slug}-${city.slug}-intro`)}${hoods}${issues}${pickTemplate(guaranteeBlocks, `${service.slug}-${city.slug}-guarantee`)}`
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Génère une FAQ SEO dynamique
 */
export function generateSeoFaqs(service: Service, city?: City): SeoFaq[] {
  if (!city) {
    return [
      {
        question: `Quels types de travaux propose DZ Maçonnerie ?`,

        answer: `Nous réalisons des travaux de maçonnerie générale, rénovation, terrassement, dalle béton et extension maison.`,
      },

      {
        question: `Proposez-vous un devis gratuit ?`,

        answer: `Oui, nous proposons un devis gratuit et sans engagement pour tous vos projets.`,
      },
    ];
  }

  const svc = service.name.toLowerCase();
  const faqs: SeoFaq[] = [
    {
      question: `Intervenez-vous à ${city.name} pour des travaux de ${svc} ?`,

      answer: `Oui, DZ Maçonnerie (basée à Artas) intervient à ${city.name}${city.zipCode ? ` (${city.zipCode})` : ""} et dans les communes voisines pour tous types de travaux de ${svc}. Déplacement et devis gratuits.`,
    },
  ];

  // question terrain — données Géorisques propres à la commune
  if (city.commonIssues?.length) {
    faqs.push({
      question: `Quelles précautions pour ${svc ? `un chantier de ${svc}` : "construire"} à ${city.name} ?`,

      answer: `Le secteur ${deVille(city.name)} présente des enjeux de ${listFr(city.commonIssues, 2)}${city.terrainTypes?.length ? ` (${listFr(city.terrainTypes, 2)})` : ""}. Nous adaptons fondations, drainage et mise en œuvre en conséquence, après étude du terrain.`,
    });
  }

  // question quartiers — noms réels OSM
  if (city.neighborhoods?.length) {
    faqs.push({
      question: `Intervenez-vous dans tous les quartiers ${deVille(city.name)} ?`,

      answer: `Oui, nous couvrons l'ensemble de la commune : ${listFr(city.neighborhoods, 4)}… Aucun secteur ${deVille(city.name)} n'est hors zone.`,
    });
  }

  faqs.push(
    {
      question: pickTemplate(
        [
          `Proposez-vous un devis gratuit à ${city.name} ?`,
          `Combien coûtent des travaux de ${svc} à ${city.name} ?`,
        ],
        `${service.slug}-${city.slug}-faq-devis`,
      ),

      answer: `Chaque projet étant unique, nous établissons un devis gratuit et sans engagement sous 24h, après visite sur place à ${city.name}.`,
    },

    {
      question: `Disposez-vous d'une garantie décennale ?`,

      answer: `Oui, tous nos travaux de ${svc} sont couverts par une garantie décennale et une assurance responsabilité civile professionnelle.`,
    },
  );

  return faqs;
}

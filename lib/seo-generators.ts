import { City, Service, SeoFaq } from "@/types";

function getStableIndex(seed: string, length: number): number {
  const hash = seed
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return hash % length;
}

function pickTemplate(templates: string[], seed: string): string {
  return templates[getStableIndex(seed, templates.length)];
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
  const introBlocks = [
    `DZ Maçonnerie intervient à ${city.name} pour tous vos travaux de ${service.name.toLowerCase()}.`,

    `Notre entreprise accompagne les habitants de ${city.name} pour leurs projets de ${service.name.toLowerCase()}.`,

    `Vous recherchez un artisan spécialisé en ${service.name.toLowerCase()} à ${city.name} ?`,

    `DZ Maçonnerie réalise des prestations de ${service.name.toLowerCase()} à ${city.name} pour particuliers et professionnels.`,
  ];

  const experienceBlocks = [
    `Avec plus de 10 ans d’expérience dans le bâtiment, nous accompagnons tous types de projets.`,

    `Notre équipe intervient rapidement dans toute la région ${city.region}.`,

    `Nous réalisons des travaux sur mesure adaptés à votre terrain et votre budget.`,

    `Chaque chantier bénéficie d’un suivi personnalisé et d’une garantie décennale.`,
  ];

  const projectBlocks = [
    `Nous réalisons régulièrement des terrasses béton, extensions maison et rénovations dans le secteur de ${city.name}.`,

    `Nos prestations couvrent le gros œuvre, la rénovation et les aménagements extérieurs.`,

    `Nous intervenons aussi pour les garages, murs de clôture et travaux de terrassement.`,

    `Nos solutions sont adaptées aux maisons individuelles et terrains de la région.`,
  ];

  const guaranteeBlocks = [
    `Tous nos travaux sont couverts par une garantie décennale.`,

    `Nous proposons un devis gratuit et sans engagement.`,

    `Notre équipe vous accompagne de l’étude du projet jusqu’à la livraison du chantier.`,

    `Nous privilégions des matériaux de qualité et des finitions durables.`,
  ];

  return `
    ${pickTemplate(introBlocks, `${service.slug}-${city.slug}-intro`)}

    ${pickTemplate(experienceBlocks, `${service.slug}-${city.slug}-experience`)}

    ${pickTemplate(projectBlocks, `${service.slug}-${city.slug}-project`)}

    ${pickTemplate(guaranteeBlocks, `${service.slug}-${city.slug}-guarantee`)}
  `
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

  return [
    {
      question: `Intervenez-vous à ${city.name} ?`,

      answer: `Oui, notre entreprise intervient à ${city.name} et dans les communes voisines pour tous types de travaux de ${service.name.toLowerCase()}.`,
    },

    {
      question: `Quels travaux de ${service.name.toLowerCase()} réalisez-vous à ${city.name} ?`,

      answer: `Nous réalisons des travaux de rénovation, terrassement, dalle béton, extension maison et gros œuvre à ${city.name}.`,
    },

    {
      question: `Proposez-vous un devis gratuit à ${city.name} ?`,

      answer: `Oui, nous proposons un devis gratuit et sans engagement pour tous vos projets à ${city.name}.`,
    },

    {
      question: `Disposez-vous d’une garantie décennale ?`,

      answer: `Oui, tous nos travaux sont couverts par une garantie décennale professionnelle.`,
    },
  ];
}

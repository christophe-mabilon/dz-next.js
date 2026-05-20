
import { City, Service, SeoFaq } from "@/types";

/**
 * Génère un title SEO dynamique
 */
export function generateSeoTitle(
  service: Service,
  city?: City,
): string {
  if (!city) {
    const templates = [
      `${service.name} | DZ Maçonnerie`,
      `${service.name} - Devis Gratuit | DZ Maçonnerie`,
      `Entreprise de ${service.name.toLowerCase()} | DZ Maçonnerie`,
      `${service.name} professionnel | Garantie décennale`,
    ];

    return templates[service.slug.length % templates.length];
  }

  const templates = [
    `${service.name} à ${city.name} (${city.zipCode}) | DZ Maçonnerie`,
    `${service.name} à ${city.name} - Devis Gratuit`,
    `Entreprise de ${service.name.toLowerCase()} à ${city.name}`,
    `${service.name} professionnel à ${city.name} | Garantie décennale`,
    `Artisan spécialisé en ${service.name.toLowerCase()} à ${city.name}`,
  ];

  return templates[
    (service.slug.length + city.slug.length) % templates.length
  ];
}

/**
 * Génère une meta description SEO dynamique
 */
export function generateSeoDescription(
  service: Service,
  city?: City,
): string {
  if (!city) {
    const templates = [
      `${service.description}. Devis gratuit et intervention rapide.`,
      `DZ Maçonnerie réalise vos travaux de ${service.name.toLowerCase()} avec garantie décennale.`,
      `Entreprise spécialisée en ${service.name.toLowerCase()} pour tous vos projets de construction et rénovation.`,
    ];

    return templates[service.slug.length % templates.length];
  }

  const templates = [
    `DZ Maçonnerie réalise vos travaux de ${service.name.toLowerCase()} à ${city.name} (${city.zipCode}). Devis gratuit et intervention rapide.`,

    `Entreprise spécialisée en ${service.name.toLowerCase()} à ${city.name}. Artisan qualifié avec garantie décennale.`,

    `Besoin d’un expert en ${service.name.toLowerCase()} à ${city.name} ? Notre équipe intervient rapidement pour tous vos projets.`,

    `Travaux de ${service.name.toLowerCase()} à ${city.name} : rénovation, terrassement, construction et gros œuvre.`,

    `${service.name} à ${city.name} avec accompagnement personnalisé, matériaux de qualité et respect des délais.`,
  ];

  return templates[
    (service.slug.length + city.slug.length) % templates.length
  ];
}

/**
 * Génère un H1 SEO dynamique
 */
export function generateH1(
  service: Service,
  city?: City,
): string {
  if (!city) {
    const templates = [
      service.name,
      `Entreprise de ${service.name.toLowerCase()}`,
      `${service.name} professionnel`,
    ];

    return templates[service.slug.length % templates.length];
  }

  const templates = [
    `${service.name} à ${city.name}`,
    `Entreprise de ${service.name.toLowerCase()} à ${city.name}`,
    `${service.name} professionnel à ${city.name}`,
    `Artisan spécialisé en ${service.name.toLowerCase()} à ${city.name}`,
  ];

  return templates[
    (service.slug.length + city.slug.length) % templates.length
  ];
}

/**
 * Génère une introduction SEO locale
 */
export function generateLocalIntroduction(
  service: Service,
  city: City,
): string {
  const projectText =
    city.commonProjects?.length
      ? city.commonProjects.join(", ")
      : "construction, rénovation et terrassement";

  const neighborhoodText =
    city.neighborhoods?.length
      ? city.neighborhoods.join(", ")
      : city.name;

  const terrainText =
    city.terrainTypes?.length
      ? city.terrainTypes.join(", ")
      : "terrains résidentiels";

  const templates = [
    `
DZ Maçonnerie intervient à ${city.name} (${city.zipCode}) pour tous vos projets de ${service.name.toLowerCase()}.

Nous réalisons régulièrement des travaux de ${projectText} dans les secteurs de ${neighborhoodText} avec un accompagnement personnalisé et un devis gratuit.
    `,

    `
Notre entreprise spécialisée en ${service.name.toLowerCase()} intervient dans toute la commune de ${city.name} et ses environs.

Nous adaptons nos solutions aux spécificités locales comme les ${terrainText} afin de garantir des travaux durables et de qualité.
    `,

    `
Besoin d’un professionnel en ${service.name.toLowerCase()} à ${city.name} ?

DZ Maçonnerie accompagne particuliers et professionnels pour tous types de projets : ${projectText}.
    `,
  ];

  return templates[
    (service.slug.length + city.slug.length) % templates.length
  ].trim();
}

/**
 * Génère une FAQ dynamique
 */
export function generateServiceFaq(
  service: Service,
  city?: City,
): SeoFaq[] {
  if (!city) {
    return [
      {
        question: `Proposez-vous des travaux de ${service.name.toLowerCase()} ?`,
        answer: `Oui, DZ Maçonnerie réalise tous types de travaux de ${service.name.toLowerCase()} avec devis gratuit et garantie décennale.`,
      },
      {
        question: `Quel est le délai moyen pour un chantier ?`,
        answer: `Les délais dépendent de la nature et de la complexité du projet. Une estimation précise est fournie lors du devis.`,
      },
      {
        question: `Êtes-vous assurés ?`,
        answer: `Oui, notre entreprise dispose d’une garantie décennale et d’une assurance responsabilité civile professionnelle.`,
      },
    ];
  }

  return [
    {
      question: `Proposez-vous des travaux de ${service.name.toLowerCase()} à ${city.name} ?`,
      answer: `Oui, nous intervenons à ${city.name} (${city.zipCode}) pour tous vos projets de ${service.name.toLowerCase()}.`,
    },
    {
      question: `Quel est le délai d’intervention à ${city.name} ?`,
      answer: `Nous proposons une intervention rapide à ${city.name} selon la nature du chantier et les disponibilités.`,
    },
    {
      question: `Réalisez-vous des devis gratuits à ${city.name} ?`,
      answer: `Oui, nous réalisons gratuitement vos devis de ${service.name.toLowerCase()} à ${city.name} sans engagement.`,
    },
    {
      question: `Êtes-vous couverts par une garantie décennale ?`,
      answer: `Oui, tous nos travaux bénéficient d’une garantie décennale et d’une assurance professionnelle.`,
    },
  ];
}

/**
 * Génère des H2 SEO dynamiques
 */
export function generateSeoSections(
  service: Service,
  city?: City,
): string[] {
  if (!city) {
    return [
      `Pourquoi choisir notre entreprise de ${service.name.toLowerCase()} ?`,
      `Nos prestations de ${service.name.toLowerCase()}`,
      `DZ Maçonnerie : expertise et qualité`,
      `Demandez votre devis gratuit`,
    ];
  }

  return [
    `${service.name} à ${city.name}`,
    `Pourquoi choisir DZ Maçonnerie à ${city.name} ?`,
    `Nos prestations de ${service.name.toLowerCase()} à ${city.name}`,
    `Intervention dans les quartiers de ${city.name}`,
    `Devis gratuit pour vos travaux à ${city.name}`,
  ];
}

/**
 * Génère des CTA dynamiques
 */
export function generateDynamicCta(
  service: Service,
  city?: City,
): string {
  if (!city) {
    const templates = [
      `Besoin d’un expert en ${service.name.toLowerCase()} ?`,
      `Demandez votre devis gratuit dès aujourd’hui`,
      `Confiez vos travaux à DZ Maçonnerie`,
    ];

    return templates[service.slug.length % templates.length];
  }

  const templates = [
    `Besoin d’un expert en ${service.name.toLowerCase()} à ${city.name} ?`,
    `Demandez votre devis gratuit à ${city.name}`,
    `Confiez votre projet à une entreprise locale expérimentée`,
    `Contactez DZ Maçonnerie pour vos travaux à ${city.name}`,
  ];

  return templates[
    (service.slug.length + city.slug.length) % templates.length
  ];
}

/**
 * Génère des liens internes SEO
 */
export function generateInternalLinks(
  service: Service,
  city?: City,
) {
  const links = [];

  if (city) {
    links.push({
      title: `${service.name} à ${city.name}`,
      href: `/services/${service.slug}/${city.slug}`,
    });

    links.push({
      title: `Entreprise de maçonnerie à ${city.name}`,
      href: `/villes/${city.slug}`,
    });
  }

  links.push({
    title: `Nos services de ${service.name.toLowerCase()}`,
    href: `/services/${service.slug}`,
  });

  return links;
}
/**
 * Annuaire des entreprises partenaires.
 * Ajouter une entrée par partenaire — la page /partenaires se met à jour
 * automatiquement. Déposer les logos dans public/images/partenaires/.
 */
/** Métiers de l'annuaire (ordre d'affichage du menu) */
export const PARTNER_CATEGORIES = [
  "Électriciens",
  "Plombiers",
  "Charpentiers",
  "Couvreurs",
  "Menuisiers",
  "Carreleurs",
  "Peintres",
  "Façadiers",
  "Plaquistes",
  "Serruriers",
  "Ramoneurs",
  "Paysagistes",
] as const;

export type PartnerCategory = (typeof PARTNER_CATEGORIES)[number];

export interface Partner {
  /** Nom de l'entreprise */
  name: string;
  /** Métier (catégorie du menu de l'annuaire) */
  category: PartnerCategory;
  /** Type de services (ex. "Entreprise d'électricité générale") */
  trade: string;
  /** Ville (affichage court + regroupements) */
  city: string;
  /** Adresse complète (affichée sous "Localisation") */
  address?: string;
  /** Numéro de SIRET */
  siret?: string;
  /**
   * Description de l'entreprise — les doubles sauts de ligne (\n\n)
   * créent des paragraphes.
   */
  description: string;
  /** Logo (chemin dans /public, ex. "/images/partenaires/js-elec.webp") */
  logo?: string;
  /** Site web (optionnel) */
  website?: string;
  /** Téléphone (optionnel, format +33…) */
  phone?: string;
}

export const partners: Partner[] = [
  {
    name: "JS ELEC",
    category: "Électriciens",
    trade: "Entreprise d'électricité générale",
    city: "Maubec",
    address: "86 Chem. de la Cigalière, 38300 Maubec",
    siret: "817999261000032",
    description:
      "Notre entreprise propose des interventions dans le domaine de l'électricité générale et vous assure un travail réalisé avec soin et professionnalisme.\n\n" +
      "Nos prestations s'adressent aux particuliers ou aux professionnels, pour de la rénovation ou du neuf.\n\n" +
      "Pour des conseils avisés sur les travaux à entreprendre, n'hésitez pas à nous contacter.",
        logo: "/images/partenaires/js-elec.webp",
    website: "https://jselec38.fr/",
    phone: "07 83 24 32 40",
  },
];

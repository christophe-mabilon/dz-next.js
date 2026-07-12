/**
 * Annuaire des entreprises partenaires.
 * Ajouter une entrée par partenaire — la page /partenaires se met à jour
 * automatiquement. Déposer les logos dans public/images/partenaires/.
 */
export interface Partner {
  /** Nom de l'entreprise */
  name: string;
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
    trade: "Entreprise d'électricité générale",
    city: "Maubec",
    address: "86 Chem. de la Cigalière, 38300 Maubec",
    siret: "817999261000032",
    description:
      "Notre entreprise propose des interventions dans le domaine de l'électricité générale et vous assure un travail réalisé avec soin et professionnalisme.\n\n" +
      "Nos prestations s'adressent aux particuliers ou aux professionnels, pour de la rénovation ou du neuf.\n\n" +
      "Pour des conseils avisés sur les travaux à entreprendre, n'hésitez pas à nous contacter.",
    // TODO (Christophe) : compléter quand disponibles
    // logo: "/images/partenaires/js-elec.webp",
    // website: "https://…",
    // phone: "+33…",
  },
];

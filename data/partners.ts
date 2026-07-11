/**
 * Annuaire des entreprises partenaires.
 * Ajouter une entrée par partenaire — la page /partenaires se met à jour
 * automatiquement (et le maillage "artisans du bâtiment" avec).
 */
export interface Partner {
  /** Nom de l'entreprise */
  name: string;
  /** Métier / spécialité (ex. "Plombier chauffagiste") */
  trade: string;
  /** Ville d'implantation */
  city: string;
  /** Description courte (1-2 phrases sur la collaboration) */
  description: string;
  /** Site web (optionnel) */
  website?: string;
  /** Téléphone (optionnel) */
  phone?: string;
}

export const partners: Partner[] = [
  // Exemple à dupliquer :
  // {
  //   name: "Entreprise Dupont",
  //   trade: "Charpentier couvreur",
  //   city: "Bourgoin-Jallieu",
  //   description:
  //     "Nous collaborons régulièrement sur les extensions et surélévations : DZ Maçonnerie réalise le gros œuvre, Dupont la charpente et la couverture.",
  //   website: "https://exemple.fr",
  //   phone: "+33600000000",
  // },
];

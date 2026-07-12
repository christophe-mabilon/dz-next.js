"use client";

import { useEffect, useState } from "react";

/**
 * Affichage anti-harvesting de l'email :
 * - l'adresse n'existe JAMAIS dans le HTML servi (rendu serveur = vide)
 * - elle est assemblée dans le navigateur après montage (bots simples aveugles)
 * - les morceaux sont inversés dans le bundle JS (échappe aux grep naïfs)
 * - un leurre invisible empoisonne les bases des scrapers plus insistants
 */

// "dz.maconnerie38" et "gmail.com" inversés
const USER = "83einnocam.zd";
const DOMAIN = "moc.liamg";
const rev = (s: string) => s.split("").reverse().join("");

export function SafeEmail({ className }: { className?: string }) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(`${rev(USER)}@${rev(DOMAIN)}`);
  }, []);

  return (
    <>
      {/* leurre pour scrapers — jamais visible ni lu par un humain */}
      <span
        className="hidden"
        aria-hidden="true"
        style={{ display: "none" }}
      >
        devis@dz-maconnerie.example.com
      </span>
      <span className={className}>{email ?? "chargement…"}</span>
    </>
  );
}

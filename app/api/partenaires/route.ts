import { NextRequest, NextResponse } from "next/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

/**
 * Demandes de partenariat : validation + persistance JSON côté serveur.
 *
 * Stockage : var/partner-requests.json (gitignoré, hors de /data pour ne pas
 * interférer avec le build). Consultation : `npm run partners:requests`.
 *
 * ⚠️ Sur Vercel (serverless), le système de fichiers est éphémère : les
 * demandes n'y survivent pas à l'instance (elles restent visibles dans les
 * logs de fonction). La persistance réelle démarre sur le VPS (next start).
 * À l'installation VPS : brancher aussi l'envoi vers l'API email existante.
 */

interface PartnerRequest {
  entreprise: string;
  metier: string;
  prenom: string;
  nom: string;
  email: string;
  phone: string;
  city: string;
  website?: string;
  message: string;
}

const STORE = path.join(process.cwd(), "var", "partner-requests.json");

function validate(data: PartnerRequest): string[] {
  const errors: string[] = [];
  const req = (v: string | undefined, label: string, min = 2) => {
    if (!v || v.trim().length < min)
      errors.push(`${label} : requis (${min} caractères minimum)`);
  };
  req(data.entreprise, "Nom de l'entreprise");
  req(data.metier, "Métier");
  req(data.prenom, "Prénom");
  req(data.nom, "Nom");
  req(data.city, "Ville");
  req(data.message, "Message", 10);
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.push("Email : adresse invalide");
  if (!data.phone || data.phone.replace(/\D/g, "").length < 8)
    errors.push("Téléphone : numéro invalide");
  if (data.website && !/^https?:\/\/.+\..+/.test(data.website))
    errors.push("Site web : URL invalide (doit commencer par http)");
  return errors;
}

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as PartnerRequest & {
      faxNumber?: string;
    };
    // honeypot rempli = bot : réponse succès factice, rien n'est enregistré
    if (data.faxNumber) {
      return NextResponse.json({
        success: true,
        message: "Demande bien reçue.",
      });
    }
    const errors = validate(data);
    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const entry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      receivedAt: new Date().toISOString(),
      status: "nouvelle" as const,
      entreprise: data.entreprise.trim(),
      metier: data.metier.trim(),
      contact: `${data.prenom.trim()} ${data.nom.trim()}`,
      email: data.email.trim(),
      phone: data.phone.trim(),
      city: data.city.trim(),
      website: data.website?.trim() || null,
      message: data.message.trim(),
    };

    // trace systématique (seule persistance disponible sur Vercel)
    console.log("Nouvelle demande de partenariat:", entry);

    // persistance fichier (VPS / dev local)
    try {
      await mkdir(path.dirname(STORE), { recursive: true });
      let existing: unknown[] = [];
      try {
        existing = JSON.parse(await readFile(STORE, "utf8"));
      } catch {
        // premier enregistrement : fichier absent ou invalide
      }
      existing.push(entry);
      await writeFile(STORE, JSON.stringify(existing, null, 2));
    } catch (fsError) {
      // environnement sans écriture disque (Vercel) : on ne bloque pas
      console.warn("Persistance fichier indisponible:", fsError);
    }

    // TODO (installation VPS) : transférer vers l'API email existante

    return NextResponse.json({
      success: true,
      message: "Demande de partenariat bien reçue. Nous revenons vers vous rapidement.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Requête invalide." },
      { status: 400 },
    );
  }
}

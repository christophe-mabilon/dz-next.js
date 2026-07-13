import { NextRequest, NextResponse } from "next/server";
import { sendMail, renderRows } from "@/lib/mail";

export const runtime = "nodejs";

interface ContactData {
  nom: string;
  prenom: string;
  email: string;
  phone: string;
  adresse?: string;
  codePostal?: string;
  city: string;
  service: string;
  message: string;
}

function validateContactData(data: ContactData) {
  const errors: string[] = [];

  if (!data.nom || data.nom.trim().length < 2) {
    errors.push("Le nom est requis");
  }

  if (!data.prenom || data.prenom.trim().length < 2) {
    errors.push("Le prénom est requis");
  }

  if (!data.email || !data.email.includes("@")) {
    errors.push("Un email valide est requis");
  }

  if (!data.phone || data.phone.trim().length < 8) {
    errors.push("Le téléphone est requis");
  }

  if (!data.city || data.city.trim().length < 2) {
    errors.push("La ville est requise");
  }

  if (!data.service || data.service.trim().length < 2) {
    errors.push("Le type de service est requis");
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push("Le message doit contenir au moins 10 caractères");
  }

  return errors;
}

// Envoi de la demande de devis par email (Nodemailer + SMTP OVH)
async function sendEmail(data: ContactData) {
  const html = `
    <h2 style="font-family:Arial,sans-serif;color:#0d9488">Nouvelle demande de devis</h2>
    ${renderRows([
      ["Nom", `${data.prenom} ${data.nom}`],
      ["Email", data.email],
      ["Téléphone", data.phone],
      ["Adresse chantier", data.adresse],
      ["Code postal", data.codePostal],
      ["Ville", data.city],
      ["Service", data.service],
      ["Message", data.message],
    ])}
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:16px">
      Reçu le ${new Date().toLocaleString("fr-FR")} via le formulaire de contact du site.
    </p>`;

  return sendMail({
    subject: `Devis — ${data.prenom} ${data.nom} (${data.city}) • ${data.service}`,
    html,
    replyTo: data.email,
  });
}

export async function POST(request: NextRequest) {
  try {
    // Récupérer les données du formulaire
    const data = await request.json();
    // honeypot anti-bot : succès factice, la demande n'est pas traitée
    if (data.faxNumber) {
      return NextResponse.json(
        { success: true, message: "Message bien reçu." },
        { status: 200 },
      );
    }

    // Valider les données
    const errors = validateContactData(data);
    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Envoyer l'email
    await sendEmail(data);

    // Répondre avec succès
    return NextResponse.json(
      {
        success: true,
        message:
          "Votre demande a été reçue. Nous vous recontacterons sous 24h.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erreur lors du traitement du formulaire:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue. Veuillez réessayer plus tard.",
      },
      { status: 500 },
    );
  }
}

// Optionnel : gérer les requêtes GET pour les tests
export async function GET() {
  return NextResponse.json(
    {
      message: "API de contact - Utilisez POST pour envoyer un message",
    },
    { status: 200 },
  );
}

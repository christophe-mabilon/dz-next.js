import nodemailer from "nodemailer";

/**
 * Envoi d'email transactionnel (formulaires contact + partenaires).
 * SMTP OVH via Nodemailer. Configuration par variables d'environnement —
 * jamais de secret dans le code.
 *
 * Variables attendues (.env.local sur le VPS) :
 *   SMTP_HOST       ex. ssl0.ovh.net
 *   SMTP_PORT       465 (SSL) ou 587 (STARTTLS)
 *   SMTP_SECURE     "true" pour le port 465, sinon "false"
 *   SMTP_USER       la boîte authentifiée, ex. contact@dzmaconnerie38.fr
 *   SMTP_PASSWORD   le mot de passe de la boîte
 *   MAIL_TO         destinataire des demandes (David) — défaut : SMTP_USER
 *   MAIL_FROM       expéditeur affiché — défaut : SMTP_USER
 *   MAIL_BCC        copie cachée (webmaster) — optionnel, invisible du destinataire
 *
 * Si SMTP n'est pas configuré (dev local, preview Vercel), l'envoi est
 * simplement journalisé : le formulaire répond « OK » sans planter.
 */

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE,
  SMTP_USER,
  SMTP_PASSWORD,
  MAIL_TO,
  MAIL_FROM,
  MAIL_BCC,
} = process.env;

/** true seulement si les paramètres SMTP indispensables sont présents. */
export const mailConfigured = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASSWORD);

function getTransporter() {
  const port = Number(SMTP_PORT ?? 465);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    // SSL implicite sur 465, STARTTLS sinon
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });
}

export async function sendMail({
  subject,
  html,
  replyTo,
}: {
  subject: string;
  html: string;
  /** email du visiteur : permet à David de répondre directement */
  replyTo?: string;
}): Promise<{ sent: boolean }> {
  if (!mailConfigured) {
    console.warn(
      "[mail] SMTP non configuré — email NON envoyé (mode démo). Sujet:",
      subject,
    );
    return { sent: false };
  }

  const transporter = getTransporter();
  // NB : `from` doit être la boîte authentifiée (OVH rejette une autre adresse).
  // L'email du visiteur va dans `replyTo` pour répondre en un clic.
  await transporter.sendMail({
    from: MAIL_FROM || SMTP_USER,
    to: MAIL_TO || SMTP_USER,
    // copie cachée webmaster : invisible du destinataire principal (David)
    bcc: MAIL_BCC || undefined,
    subject,
    html,
    replyTo,
  });
  return { sent: true };
}

/** Échappe le HTML pour éviter toute injection depuis les champs du formulaire. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Construit un tableau HTML simple « label : valeur » à partir de paires. */
export function renderRows(rows: [string, string | undefined | null][]): string {
  const cells = rows
    .filter(([, v]) => v && String(v).trim().length > 0)
    .map(
      ([label, v]) =>
        `<tr>
          <td style="padding:6px 12px;background:#f3f4f6;font-weight:600;white-space:nowrap;vertical-align:top">${escapeHtml(label)}</td>
          <td style="padding:6px 12px">${escapeHtml(String(v)).replace(/\n/g, "<br>")}</td>
        </tr>`,
    )
    .join("");
  return `<table style="border-collapse:collapse;width:100%;max-width:640px;font-family:Arial,sans-serif;font-size:14px;color:#111827">${cells}</table>`;
}

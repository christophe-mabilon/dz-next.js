// Test d'envoi SMTP en une commande : `npm run mail:test`
// Lit les variables SMTP_*/MAIL_* depuis .env.local, vérifie la connexion,
// puis envoie un email de test à MAIL_TO. À lancer en local ou sur le VPS
// pour valider les identifiants OVH sans passer par le formulaire web.

import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import nodemailer from "nodemailer";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// charge .env.local (sans écraser une variable déjà définie dans l'environnement)
try {
  const raw = readFileSync(path.join(ROOT, ".env.local"), "utf8");
  for (const line of raw.split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2].trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = val;
  }
} catch {
  console.log("ℹ️  Pas de .env.local trouvé — j'utilise les variables d'environnement du shell.");
}

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

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
  console.error(
    "\n❌ SMTP non configuré. Renseigne dans .env.local :\n" +
      "   SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASSWORD\n" +
      "   (voir .env.example)\n",
  );
  process.exit(1);
}

const port = Number(SMTP_PORT ?? 465);
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port,
  secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
  auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
});

const to = MAIL_TO || SMTP_USER;

console.log(`\n🔌 Connexion à ${SMTP_HOST}:${port} (secure=${transporter.options.secure})…`);

try {
  await transporter.verify();
  console.log("✅ Connexion et authentification SMTP OK.");
} catch (err) {
  console.error("❌ Échec de connexion/auth SMTP :", err.message);
  process.exit(1);
}

try {
  const bcc = MAIL_BCC?.trim() || undefined;
  const info = await transporter.sendMail({
    from: MAIL_FROM || SMTP_USER,
    to,
    bcc,
    subject: "Test SMTP — site DZ Maçonnerie",
    html: `<p>Ceci est un <strong>email de test</strong> envoyé par <code>npm run mail:test</code>.</p>
           <p>Si tu lis ceci, l'envoi des formulaires (contact + partenaires) fonctionnera.</p>
           <p style="color:#6b7280;font-size:12px">Envoyé le ${new Date().toLocaleString("fr-FR")}.</p>`,
  });
  console.log(`✅ Email de test envoyé à ${to} (id: ${info.messageId}).`);
  if (bcc) console.log(`   📩 Copie cachée (BCC) envoyée à ${bcc}.`);
  console.log("   Vérifie ta boîte de réception (et les spams).\n");
} catch (err) {
  console.error("❌ Échec de l'envoi :", err.message);
  process.exit(1);
}

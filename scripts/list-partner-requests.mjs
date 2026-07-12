// Affiche les demandes de partenariat reçues (var/partner-requests.json).
// Usage : npm run partners:requests
// Pour accepter un partenaire : copier ses infos dans data/partners.ts.
import { readFile } from "node:fs/promises";
import path from "node:path";

const STORE = path.join(process.cwd(), "var", "partner-requests.json");

let requests = [];
try {
  requests = JSON.parse(await readFile(STORE, "utf8"));
} catch {
  console.log("Aucune demande enregistrée pour le moment.");
  process.exit(0);
}

console.log(`${requests.length} demande(s) de partenariat :\n`);
for (const r of requests) {
  console.log(`▶ ${r.entreprise} — ${r.metier} (${r.city})`);
  console.log(`  Contact : ${r.contact} | ${r.email} | ${r.phone}`);
  if (r.website) console.log(`  Site    : ${r.website}`);
  console.log(`  Reçue   : ${r.receivedAt?.slice(0, 16).replace("T", " ")}`);
  console.log(`  Message : ${r.message}\n`);
}

console.log(
  "→ Pour publier un partenaire, ajoutez une entrée dans data/partners.ts",
);

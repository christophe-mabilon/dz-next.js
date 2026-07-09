// data/craft/maconnerie.mjs
// Template métier (maçonnerie) + générateurs de contenu UNIQUE par commune.
// Utilisé uniquement au build (scripts/build-cities.mjs) : les textes sont figés
// dans data/cities.ts. L'unicité vient des données réelles injectées (population,
// quartiers, monuments, risques, voisines) — le template ne fournit que le squelette.

// ---- constantes métier -----------------------------------------------------
export const commonProjects = [
  "terrasse béton",
  "dalle béton",
  "mur de clôture",
  "mur de soutènement",
  "extension maison",
  "garage",
  "terrassement de terrain",
  "rénovation de façade",
];

export const seoVariations = [
  "artisan maçon",
  "entreprise de maçonnerie",
  "spécialiste gros œuvre",
  "maçon professionnel",
  "entreprise de terrassement",
];

export const architectureStyles = [
  "maisons contemporaines",
  "pavillons récents",
  "maisons traditionnelles",
];

// ---- helpers ---------------------------------------------------------------
function hash(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}
function pick(arr, seed) {
  return arr[hash(seed) % arr.length];
}
function fmtPop(n) {
  return typeof n === "number" ? n.toLocaleString("fr-FR") : null;
}
function list(arr, max = 3) {
  const a = (arr || []).slice(0, max);
  if (a.length <= 1) return a[0] || "";
  return a.slice(0, -1).join(", ") + " et " + a[a.length - 1];
}
// élision française : "de Artas" -> "d'Artas"
function de(name) {
  return /^[aeiouyéèêëàâîïôûh]/i.test(name) ? `d'${name}` : `de ${name}`;
}

// ---- terrains / problèmes déduits des risques Géorisques -------------------
export function terrainFromRisks(risks = []) {
  const txt = risks.join(" ").toLowerCase();
  const terrainTypes = new Set();
  const commonIssues = new Set();
  if (txt.includes("argile") || txt.includes("retrait") || txt.includes("gonflement")) {
    terrainTypes.add("terrain argileux");
    commonIssues.add("retrait-gonflement des argiles");
    commonIssues.add("stabilité des fondations");
  }
  if (txt.includes("inondation") || txt.includes("crue") || txt.includes("ruissellement")) {
    terrainTypes.add("zone sensible aux inondations");
    commonIssues.add("drainage");
    commonIssues.add("gestion des eaux pluviales");
  }
  if (txt.includes("mouvement de terrain") || txt.includes("glissement") || txt.includes("éboulement")) {
    terrainTypes.add("terrain en pente");
    commonIssues.add("stabilité des sols");
  }
  if (txt.includes("séisme") || txt.includes("sismicité")) {
    commonIssues.add("conception parasismique");
  }
  if (!terrainTypes.size) terrainTypes.add("terrains pavillonnaires");
  if (!commonIssues.size) {
    commonIssues.add("fondations");
    commonIssues.add("drainage");
  }
  return { terrainTypes: [...terrainTypes], commonIssues: [...commonIssues] };
}

// ---- description (meta) ----------------------------------------------------
export function description(c) {
  const base = pick(
    [
      `Entreprise de maçonnerie à ${c.name}`,
      `Artisan maçon à ${c.name}`,
      `Maçonnerie et terrassement à ${c.name}`,
      `Spécialiste gros œuvre à ${c.name}`,
    ],
    c.slug + "d",
  );
  const pop = fmtPop(c.population);
  const dep = pop ? ` (${c.departmentName || c.department}, ${pop} hab.)` : "";
  return `${base}${dep} : rénovation, extension, dalle et terrasse béton, murs et terrassement. Devis gratuit, garantie décennale.`
    .replace(/\s+/g, " ")
    .trim();
}

// ---- introduction (H2 content) --------------------------------------------
export function introduction(c) {
  const pop = fmtPop(c.population);
  const ctx = pop
    ? ` (${pop} habitants${c.departmentName ? `, ${c.departmentName}` : ""})`
    : "";
  const nameCtx = `${c.name}${ctx}`;
  // chaque gabarit intègre nameCtx et se termine de façon compatible
  // avec « pour vos travaux de… »
  const intro = pick(
    [
      `DZ Maçonnerie intervient à ${nameCtx}`,
      `Basée à Artas, DZ Maçonnerie accompagne les habitants ${de(nameCtx)}`,
      `À ${nameCtx}, DZ Maçonnerie vous accompagne`,
      `DZ Maçonnerie met son savoir-faire au service des habitants ${de(nameCtx)}`,
    ],
    c.slug + "i",
  );
  const hoods = c.neighborhoods?.length
    ? ` Nous couvrons notamment ${list(c.neighborhoods, 3)}.`
    : "";
  const lm = c.landmarks?.length
    ? ` Le secteur compte des repères comme ${list(c.landmarks, 2)}, dont nos chantiers respectent le caractère local.`
    : "";
  const terrain = c.commonIssues?.length
    ? ` Les terrains locaux présentent des enjeux de ${list(c.commonIssues, 2)}, que nous intégrons dès l'étude.`
    : "";
  return `${intro} pour vos travaux de maçonnerie générale, terrassement, extension et rénovation.${hoods}${lm}${terrain}`
    .replace(/\s+/g, " ")
    .trim();
}

// ---- keywords --------------------------------------------------------------
export function keywords(c) {
  return [
    `maçon ${c.name}`,
    `maçonnerie ${c.name}`,
    `entreprise maçonnerie ${c.name}`,
    `terrassement ${c.name}`,
    `dalle béton ${c.name}`,
    `devis maçon ${c.name}`,
  ];
}

// ---- FAQ (unique par commune) ---------------------------------------------
export function faq(c) {
  const out = [];
  const hood = c.neighborhoods?.length ? ` et notamment à ${list(c.neighborhoods, 3)}` : "";
  out.push({
    question: `Intervenez-vous à ${c.name} ?`,
    answer: `Oui, DZ Maçonnerie intervient dans toute la commune de ${c.name}${hood}, ainsi que dans les communes voisines. Basés à Artas, nous nous déplaçons gratuitement pour évaluer votre projet.`,
  });

  if (c.commonIssues?.length) {
    out.push({
      question: `Quelles précautions pour construire à ${c.name} ?`,
      answer: `Le secteur ${de(c.name)} peut présenter des enjeux de ${list(c.commonIssues, 2)}. Nous adaptons les fondations, le drainage et la mise en œuvre du béton en conséquence, après étude du terrain.`,
    });
  }

  out.push({
    question: `Quels travaux de maçonnerie réalisez-vous à ${c.name} ?`,
    answer: `À ${c.name}, nous réalisons dalle et terrasse béton, murs de clôture et de soutènement, extensions, garages, rénovation de façade et terrassement complet.`,
  });

  out.push({
    question: `Proposez-vous un devis gratuit à ${c.name} ?`,
    answer: `Oui, le devis est gratuit et sans engagement. Nous vous répondons sous 24h pour tout projet à ${c.name}.`,
  });

  return out;
}

# Journal des versions — Site DZ Maçonnerie & Terrassement

Format : chaque version résume l'état du site à un moment donné, pour savoir
« où on en est ». Les versions sont aussi posées en tags git (`git tag`).

---

## [1.1.0] — 2026-07-14 — Envoi email des formulaires

- Envoi réel des formulaires **contact** et **partenaires** par email
  (Nodemailer + SMTP OVH), intégré directement dans les routes Next.js
  (`/api/contact`, `/api/partenaires`) — **pas de base de données**.
- `lib/mail.ts` : transporteur SMTP + `sendMail()`, échappement HTML des champs,
  `replyTo` = email du visiteur (réponse en un clic).
- Dégradation gracieuse : sans variables SMTP (dev / Vercel), le formulaire
  répond « OK » et journalise (mode démo). L'envoi réel démarre sur le VPS
  une fois `.env.local` renseigné (voir `.env.example`).
- Partenaires : email **en plus** de la persistance JSON existante.

À faire à l'install VPS : renseigner `SMTP_*` / `MAIL_*` dans `.env.local`.

---

## [1.0.0] — 2026-07-14 — Première version complète

État : site en production sur Vercel (cible finale = VPS OVH). Formulaires
validés côté données mais **envoi email pas encore branché** (voir API, en cours).

### Réalisations
- 15 fiches sur les **vrais chantiers**, avec les vraies photos (95 images
  référencées, 173 photos renommées SEO puis triées en dossiers par chantier).
- Gabarit riche par fiche : hero, avant/après (double flèche), contexte,
  contraintes + solution, étapes en timeline, chiffres clés (icônes + texture
  pierre), galerie filtrable **cliquable en plein écran (lightbox)**, avis local,
  FAQ, réalisations similaires, maillage villes.

### SEO technique
- JSON-LD complet et validé : LocalBusiness/HomeAndConstructionBusiness,
  WebSite, BreadcrumbList (toutes pages), FAQPage (services/villes/blog/accueil),
  **BlogPosting** (blog), ImageObject (photos réalisations), Article (réalisations).
- Sitemap dynamique (URLs + images), robots.txt, pages 404 maillée.
- Metadata App Router (title template, canonical, OpenGraph, Twitter).
- Pipeline `cities.ts` généré (271 communes, 35 km à vol d'oiseau autour d'Artas).
- Pages Service, Ville, et Service × Ville pré-générées (SSG).

### Contenu
- 10 services avec descriptions uniques (accueil ≠ pages services, anti-duplication).
- Page **À propos** E-E-A-T (David Zambon, SARL, SIRET, garanties).
- Page **Partenaires** (annuaire + formulaire, stockage JSON).
- Page **Avis** (architecture récupération Google auto — en attente API Places).

### SEO local & maillage
- Carte Google Maps (zone d'intervention) : accueil, contact, à-propos.
- Maillage service → service (« Nos autres prestations »).
- Réalisations liées à chaque service.

### Sécurité / anti-spam
- Email protégé (SafeEmail : assemblage client, pas d'email en clair dans le HTML).
- Honeypot `faxNumber` sur les formulaires contact + partenaires.
- Suppression du CORS `*` sur `/api` et du `remotePatterns: '**'` (inutile).

### En attente (hors v1.0.0)
- Envoi email réel des formulaires (API en cours de reconstruction — Nodemailer/SMTP OVH).
- Récupération des avis Google en direct (CB Google Cloud côté client).
- Bascule production sur le VPS OVH.

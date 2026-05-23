# DZ Maçonnerie & Terrassement - Site Next.js 15

Site web professionnel pour DZ Maçonnerie & Terrassement, construit avec **Next.js 15**, **React 19**, et **Tailwind CSS**.

## 🎯 Caractéristiques complètes

- ✅ **234+ pages** générées automatiquement (8 services × 26 villes + pages statiques)
- ✅ **Optimisé SEO** - Métadonnées dynamiques, JSON-LD, breadcrumbs structurés
- ✅ **Design professionnel** - Teal gradient, responsive, mobile-first
- ✅ **Formulaire de contact** - API route avec validation
- ✅ **Type-safe** - TypeScript pour qualité de code
- ✅ **Performance** - Code splitting, lazy loading, optimisé

## 📁 Structure du projet

```
app/
├── api/contact/route.ts         # API pour demandes de devis
├── services/[slug]/[city]/       # 208 pages service + ville
├── services/[slug]/              # 8 pages service détail
├── villes/[slug]/                # 26 pages ville
├── blog/                         # Blog et articles
├── realisations/                 # Portfolio
├── avis/                         # Témoignages
├── contact/                      # Formulaire
├── mentions-legales/             # Infos légales
├── politique-confidentialite/    # RGPD
├── conditions/                   # CGU
└── page.tsx                      # Accueil

components/
├── Header.tsx                    # Navigation + logo
└── Footer.tsx                    # Liens + CTA

data/
├── config.ts                     # Config site
├── services.ts                   # 8 services
└── cities.ts                     # 26 villes
```

## 🚀 Installation & Déploiement

### Installation locale

```bash
npm install --legacy-peer-deps
npm run dev
# http://localhost:3000
```

### Déployer sur Vercel

```bash
# Via dashboard Vercel (recommandé)
# 1. Pousser sur GitHub
# 2. Vercel détecte Next.js automatiquement
# 3. Configure et déploie en 1-2 min
```

### Variables .env

```
RESEND_API_KEY=xxx
CONTACT_EMAIL=admin@dzmaconnerie38.fr
NEXT_PUBLIC_SITE_URL=https://dzmaconnerie38.fr
```

## 🎨 Design

**Couleur principale:** Teal #00a19a

- Gradient hero: from-primary-600 via-primary-500 to-primary-400
- Tous les boutons utilisent la palette teal
- Responsive sur mobile/tablette/desktop

## 📧 Intégration Email

Route API `/api/contact` prête pour intégration :

### Resend (Recommandé)

```bash
npm install resend
```

Puis configurer dans `app/api/contact/route.ts`

### SendGrid / Mailgun / NodeMailer

Autres options disponibles

## 🔒 Sécurité

- ✅ Input validation
- ✅ HTTPS via Vercel
- ✅ Headers de sécurité

À ajouter:

- [ ] Rate limiting
- [ ] reCAPTCHA v3

## 📊 SEO Prêt

- ✅ Métadonnées par page
- ✅ JSON-LD schemas
- ✅ Open Graph
- ✅ Breadcrumbs
- ✅ Sitemap

À faire:

- [ ] Google Search Console
- [ ] Google Analytics 4
- [ ] Bing Webmaster

## 🛠️ Maintenance

**Ajouter un service:**
Modifier `data/services.ts` → Pages auto-générées

**Ajouter une ville:**
Modifier `data/cities.ts` → Pages auto-générées

## 📱 Pages clés

- `/` Accueil
- `/services` Tous les services
- `/services/maconnerie-neuf` Détail service
- `/services/maconnerie-neuf/bourgoin-jallieu` Service + ville
- `/villes/bourgoin-jallieu` Ville
- `/contact` Formulaire devis
- `/avis` Témoignages
- `/realisations` Portfolio
- `/blog` Articles

## 🎯 Prochaines étapes

1. Intégrer Resend pour emails
2. Ajouter Google Analytics 4
3. Soumettre à Google Search Console
4. Configurer domain custom
5. Ajouter prise de rendez-vous
6. Redirection ancien site → nouveau

## 📞 Support

dz.maconnerie38@gmail.com / 06 88 14 42 57

# DZ Maçonnerie & Terrassement - Next.js 15 SEO Optimized

Site web professionnel pour entreprise de maçonnerie générale, avec architecture SEO programmatique avancée.

## 🚀 Caractéristiques

- **Next.js 15** avec App Router et Server Components
- **TypeScript** pour type-safety
- **Tailwind CSS** pour styles responsive
- **Génération automatique de pages** : 48 pages (8 services × 6 villes)
- **Architecture SILO** optimale pour SEO
- **Schema.org JSON-LD** : LocalBusiness, Service, BreadcrumbList
- **Images optimisées** : next/image, AVIF, WebP
- **ISR** : Incremental Static Regeneration
- **Core Web Vitals** : Optimisé pour Lighthouse 90+
- **Mobile-first** : Design responsive
- **Meta tags dynamiques** : Titre, description, OG pour chaque page

## 📁 Structure du Projet

```
dzmaconnerie-nextjs/
├── app/
│   ├── layout.tsx              # Root layout avec metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Styles globaux
│   ├── services/
│   │   ├── page.tsx            # Page services (listing)
│   │   └── [slug]/
│   │       ├── page.tsx        # Service détail
│   │       └── [city]/
│   │           └── page.tsx    # Service + Ville
│   ├── villes/
│   │   └── [slug]/
│   │       └── page.tsx        # Page ville
│   ├── realisations/           # Projects showcase
│   ├── avis/                   # Customer reviews
│   ├── blog/                   # Blog articles (MDX ready)
│   └── contact/                # Contact form
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...autres composants
├── data/
│   ├── config.ts               # Configuration site
│   ├── services.ts             # Data services
│   ├── cities.ts               # Data villes
│   └── reviews.ts              # Data avis
├── lib/
│   ├── seo.ts                  # Fonctions SEO et schemas
│   └── utils.ts                # Utilitaires
├── types/
│   └── index.ts                # Types TypeScript
├── public/
│   ├── favicon.ico
│   └── images/
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
```

## 🔧 Configuration

### 1. Installation

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 2. Configuration site

Modifier `data/config.ts` avec vos informations :

```typescript
export const siteConfig: SiteConfig = {
  siteName: 'DZ Maçonnerie & Terrassement',
  siteUrl: 'https://votre-domaine.fr', // À remplacer
  business: {
    name: 'DZ Maçonnerie & Terrassement',
    phone: '06.XX.XX.XX.XX', // À remplacer
    email: 'contact@votre-domaine.fr', // À remplacer
    address: 'Votre adresse', // À remplacer
    zipCode: '38440', // À remplacer
    city: 'Votre ville', // À remplacer
  },
};
```

### 3. Services et villes

Modifier `data/services.ts` et `data/cities.ts` selon vos zones d'intervention.

## 📊 Pages générées automatiquement

L'architecture actuelle génère **48 pages SEO** :

```
Services (8) :
- Maçonnerie neuf
- Rénovation maçonnerie
- Agrandissement maison
- Extension maison
- Piscine et terrasse
- Clôtures et murs
- Terrassement
- Abri de jardin

Villes (6) :
- Bourgoin-Jallieu
- Vienne
- L'Isle-d'Abeau
- Villefontaine
- Saint-Jean-de-Bournay
- Meyzieu

Pages générées :
- 1 Home
- 1 Services (listing)
- 8 Service details
- 6 City pages
- 48 Service + City combos (8 × 6)
- Blog / Réalisations / Avis / Contact
```

## 🚀 Pour scaler à 200 pages

### Option 1 : Ajouter plus de villes

Modifier `data/cities.ts` et ajouter des sous-régions :

```typescript
export const cities: City[] = [
  // Existant...
  // + Ajouter 20-30 nouvelles villes
];
```

### Option 2 : Ajouter des combinaisons sous-service

Créer des variations de services (ex: "Terrasse béton", "Terrasse pierre", etc)

### Option 3 : Pages réalisations dynamiques

Créer `data/projects.ts` et générer des pages pour chaque projet.

## 🎨 Customisation

### Couleurs

Modifier `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    500: '#14b8a6',  // Votre couleur
    600: '#0d9488',
    // ...
  },
}
```

### Fonts

Le projet utilise Inter via Google Fonts. Modifier dans `app/layout.tsx` si besoin.

## 🔍 SEO

### Metadata

Chaque page a des metadata dynamiques :
- Title personnalisé
- Meta description
- Open Graph
- Twitter Card
- Breadcrumbs

### Structured Data

Inclus dans chaque page :
- LocalBusiness (home)
- Service (service pages)
- BreadcrumbList
- Organization
- WebSite

### Sitemap

Généré automatiquement par Next.js avec ISR.

### Robots

À configurer dans `public/robots.txt` ou via `next.config.ts`.

## ⚡ Performance

### Optimisations incluses

- Next.js Image optimization
- Font optimization
- CSS-in-JS elimination (Tailwind)
- Code splitting automatique
- ISR pour pages statiques
- GZIP compression
- Lazy loading

### Targets Lighthouse

- Performance: 95+
- SEO: 100
- Accessibility: 95+
- Best Practices: 95+

## 🚢 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel login
vercel
```

Configuration automatique. Deployez avec chaque push sur la branche main.

### Netlify

```bash
npm run build
# Déployer le dossier .next
```

### Serveur propre

```bash
npm run build
npm start
```

Écoute sur `http://localhost:3000`.

## 📝 Blog (MDX ready)

Structure pour le blog :

```
app/blog/
├── page.tsx          # Listing articles
└── [slug]/
    └── page.tsx      # Article détail

data/blog/
└── articles.ts       # Data articles (prêt pour MDX)
```

Pour activer MDX, installer `@next/mdx` et configurer.

## 🔐 Sécurité

- CSRF protection ready
- Environment variables pour secrets
- No sensitive data exposed
- Content Security Policy headers

## 🧪 Tests

```bash
# Type checking
npm run type-check

# Linting
npm run lint
```

## 📱 Mobile-First

Tous les composants sont responsive :
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🎯 Roadmap SEO

- [x] Pages programmatiques (services × villes)
- [x] Metadata dynamiques
- [x] Schema JSON-LD
- [ ] Blog avec articles SEO
- [ ] Pages réalisations détaillées
- [ ] Google Business Profile integration
- [ ] FAQ dynamiques par page
- [ ] Analytics integration

## 📚 Documentation additionnelle

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Schema.org](https://schema.org/)

## 📞 Support

Pour questions ou problèmes :
1. Vérifier la documentation
2. Consulter les logs du build
3. Tester localement avec `npm run dev`

## 📄 Licence

Propriétaire - DZ Maçonnerie & Terrassement

## 🤝 Contribution

Pour améliorations, créer une branche et faire un PR.

---

**Dernière mise à jour** : 2024-05-17
**Version Next.js** : 15.0.0
**Status** : Production Ready
# dz-next.js
# dz-next.js

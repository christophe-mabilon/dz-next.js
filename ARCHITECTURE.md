# 🏗️ Architecture SEO Next.js 15 - DZ Maçonnerie

Documentation complète de l'architecture technique et SEO du site.

## 📊 Vue d'ensemble

Architecture SILO avec génération programmatique de 48+ pages.

```
ROOT
├── HOME (/)
├── SERVICES (/services)
│   ├── Service Detail (/services/[slug])
│   └── Service + City (/services/[slug]/[city])
├── CITIES (/villes)
│   └── City Detail (/villes/[slug])
├── PROJECTS (/realisations)
├── REVIEWS (/avis)
├── BLOG (/blog)
└── CONTACT (/contact)
```

## 🔄 Flux de données

### 1. Configuration centralisée

```
data/config.ts
├── siteConfig (base site)
├── defaultMetadata
└── SEO_CONFIG
```

### 2. Data sources

```
data/
├── services.ts (8 services)
├── cities.ts (6 villes)
├── reviews.ts (avis clients)
└── projects.ts (réalisations - ready)
```

### 3. Fonctions SEO

```
lib/seo.ts
├── generateMetadata()
├── generateLocalBusinessSchema()
├── generateServiceSchema()
├── generateBreadcrumbSchema()
├── generateFAQSchema()
├── generateOrganizationSchema()
├── generateWebSiteSchema()
└── generateArticleSchema()
```

## 🎯 Pages générées

### Statiques (ISR)

```
/ (home)
/services (listing)
/services/[slug] (8 pages)
/services/[slug]/[city] (48 pages)
/villes/[slug] (6 pages)
/contact
/mentions-legales
```

### Dynamiques/Blog

```
/blog (listing)
/blog/[slug] (articles MDX)
/realisations (projects listing)
/realisations/[slug] (project detail)
/avis (reviews)
```

## 🔍 SEO Optimisations

### On-Page

✅ Unique titles (template)
✅ Meta descriptions
✅ H1-H6 hierarchy
✅ Semantic HTML
✅ Internal linking SILO
✅ Breadcrumbs
✅ URLs propres (slugs)

### Technical

✅ Next.js Image optimization (AVIF/WebP)
✅ Font optimization (Google Fonts)
✅ CSS optimization (Tailwind)
✅ JS code splitting
✅ ISR (Incremental Static Regeneration)
✅ Sitemap auto (Vercel)
✅ Robots.txt
✅ Canonical URLs
✅ GZIP compression

### Structured Data

✅ LocalBusiness (home)
✅ Service (service pages)
✅ BreadcrumbList (chaque page)
✅ Organization (global)
✅ WebSite (global)
✅ FAQPage (ready)
✅ Article (blog ready)

### Local SEO

✅ Schema LocalBusiness avec adresse
✅ Contact info visible
✅ Multiple city pages (6 villes)
✅ Service × City combos (48 pages)
✅ Google Business Profile ready

## 🚀 Performance

### Lighthouse Targets

- Performance: 95+
- SEO: 100
- Accessibility: 95+
- Best Practices: 95+

### Core Web Vitals

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## 📱 Mobile-First

Responsive par défaut :
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔐 Sécurité

✅ Content Security Policy headers
✅ X-Frame-Options (SAMEORIGIN)
✅ X-Content-Type-Options (nosniff)
✅ Referrer-Policy (strict)
✅ No sensitive data exposed
✅ Environment variables pour secrets

## 🎨 Customisation

### Couleurs

```typescript
// tailwind.config.ts
primary: { 500: '#14b8a6', 600: '#0d9488' }
dark: { 800: '#1e293b', 900: '#0f172a' }
```

### Fonts

```html
<!-- app/layout.tsx -->
Google Fonts: Inter (400, 500, 600, 700)
```

### Images

```
public/
├── favicon.ico
├── og-image.jpg (1200x630)
├── og-home.jpg
├── og-service.jpg
├── og-services.jpg
└── images/
    ├── chantiers/
    └── realisations/
```

## 🔧 Configuration serveur

### Next.js config

```typescript
// next.config.ts
├── Image optimization (AVIF, WebP)
├── Header security
├── Redirects
├── Webpack config
└── Compression
```

### Tailwind config

```typescript
// tailwind.config.ts
├── Extended colors
├── Fonts
├── Spacing
├── Max-width
└── Plugins (@tailwindcss/typography)
```

## 📈 Roadmap d'amélioration

### Phase 1 (Actuel)
- [x] Architecture SILO
- [x] Pages programmatiques (48)
- [x] Metadata dynamiques
- [x] Schema JSON-LD basiques
- [x] Mobile-first design

### Phase 2 (Prochaine)
- [ ] Blog avec MDX (articles SEO)
- [ ] Pages réalisations individuelles (20+)
- [ ] FAQ par service
- [ ] Google Analytics 4
- [ ] Email newsletter

### Phase 3 (Long-terme)
- [ ] CMS headless (Sanity/Payload)
- [ ] Génération automatique de pages (200+)
- [ ] AI-powered content
- [ ] Video hosting
- [ ] Testimonials carousel
- [ ] Live chat

## 🌍 Scalabilité

### Ajouter villes

```typescript
// data/cities.ts
export const cities: City[] = [
  // Ajouter 20-30 nouvelles entrées
  // Génère automatiquement 160-240 pages (8 services × 20-30 villes)
];
```

### Ajouter services

```typescript
// data/services.ts
export const services: Service[] = [
  // Ajouter sous-services (ex: Terrasse béton, Terrasse pierre)
  // Génère automatiquement pages × 6 villes
];
```

### Ajouter réalisations

```typescript
// data/projects.ts
export const projects: ProjectRealization[] = [
  // Ajouter projets
  // Générer pages individuelles /realisations/[slug]
];
```

## 📊 Analytics Integration

### À configurer

```
1. Google Search Console
   - Soumettre sitemap
   - Vérifier property
   - Monitor keywords

2. Google Analytics 4
   - Install GA4
   - Track conversions (contact form)

3. Vercel Analytics
   - Core Web Vitals
   - Performance metrics
   - Deployment insights
```

## 🔗 Internal Linking Strategy

### SILO structure

```
Services cluster:
  /services
  └── /services/[service]
      └── /services/[service]/[city]

Geographic cluster:
  /villes
  └── /villes/[city]

Cross-linking:
  Service → Related services
  City → Services in that city
  Service+City → Other cities
```

## 📋 Checklist avant production

- [ ] Config site (domain, phone, email, address)
- [ ] Ajouter images chantiers
- [ ] Configurer formulaire contact
- [ ] Tests locaux (npm run build, npm start)
- [ ] Deploy Vercel (ou autre)
- [ ] Configurer domaine
- [ ] Verifier HTTPS
- [ ] Submit sitemap Google Search Console
- [ ] Create Google Business Profile
- [ ] Install Google Analytics 4
- [ ] Test Lighthouse (targets: 95+)
- [ ] Test Core Web Vitals
- [ ] Test mobile responsive
- [ ] Test formulaire contact
- [ ] Backup code source

## 🎓 Courbe d'apprentissage

Pour développeur Next.js :
- Mettre à jour config : 15 min
- Ajouter contenu : 30 min
- Déployer Vercel : 10 min
- **Total : 1 heure**

Pour débutant:
- Lire README : 20 min
- Lire ce doc : 30 min
- Mettre à jour config : 30 min
- Déployer : 20 min
- **Total : 2 heures**

## 📞 Support

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Schema.org: https://schema.org/

---

**Last updated**: 2024-05-17
**Version**: 1.0.0
**Status**: Production Ready

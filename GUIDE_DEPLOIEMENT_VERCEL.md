# 🚀 Guide de déploiement Vercel - DZ Maçonnerie Next.js

Déployez votre site en production en 5 minutes avec Vercel (hébergement gratuit pour Next.js).

## ✅ Prérequis

- Compte GitHub (gratuit sur github.com)
- Compte Vercel (gratuit, se connecter avec GitHub)
- Domaine (optionnel, Vercel offre `nomprojet.vercel.app`)

## 📋 Étapes de déploiement

### Phase 1 : Préparation locale (15 min)

1. **Cloner/initialiser le repo Git**

```bash
cd dzmaconnerie-nextjs
git init
git add .
git commit -m "Initial commit: Next.js 15 SEO optimized site"
```

2. **Créer repo GitHub**

Aller sur https://github.com/new

```
Repository name: dzmaconnerie-nextjs
Private/Public: Public (pour déploiement gratuit)
```

3. **Pusher vers GitHub**

```bash
git remote add origin https://github.com/VOTRE_USERNAME/dzmaconnerie-nextjs.git
git branch -M main
git push -u origin main
```

4. **Tester localement**

```bash
npm install
npm run dev
# Vérifier sur http://localhost:3000
```

### Phase 2 : Configuration avant déploiement (10 min)

1. **Mettre à jour les infos** dans `data/config.ts` :

```typescript
// À remplacer :
siteUrl: 'https://dzmaconnerie.fr', // Votre domaine
phone: '06.88.14.42.57',
email: 'contact@dzmaconnerie.fr',
address: '130 sentier du taillis',
zipCode: '38440',
city: 'Artas',
```

2. **Créer `.env.local`** (variables d'environnement) :

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://votre-domaine.fr
# À ajouter si vous utilisez des services externes :
# NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE=votre_code
# CONTACT_FORM_ENDPOINT=https://formspree.io/f/votre_id
```

3. **Tester build**

```bash
npm run build
npm start
# Vérifier que tout fonctionne
```

4. **Push vers GitHub**

```bash
git add .
git commit -m "Update config for deployment"
git push
```

### Phase 3 : Déploiement sur Vercel (5 min)

1. **Se connecter à Vercel**

Aller sur https://vercel.com et cliquer "Sign in with GitHub"

2. **Importer le projet**

- Cliquer "New Project"
- Sélectionner le repository `dzmaconnerie-nextjs`
- Cliquer "Import"

3. **Configuration du build**

Vercel détecte automatiquement Next.js. Valider les paramètres :

- **Project Name** : dzmaconnerie-nextjs
- **Framework** : Next.js ✓
- **Root Directory** : ./ ✓
- **Build Command** : `npm run build` ✓
- **Output Directory** : `.next` ✓

4. **Variables d'environnement**

Ajouter les variables de `env.local` :

```
NEXT_PUBLIC_SITE_URL = https://votre-domaine.fr
```

5. **Cliquer "Deploy"**

Attendre 2-3 minutes. Vercel construit et déploie automatiquement.

## 🎉 Après le déploiement

### Vérifier le site

1. Vercel vous donne une URL : `https://dzmaconnerie-nextjs-XXXXX.vercel.app`
2. Tester les pages :
   - Home : `/`
   - Service : `/services/maconnerie-neuf`
   - Service + Ville : `/services/maconnerie-neuf/bourgoin-jallieu`
   - Ville : `/villes/bourgoin-jallieu`

### Configurer votre domaine

#### Option 1 : Domaine gratuit Vercel

```
Dans Vercel Dashboard > Settings > Domains
- Ajouter "nomprojet.vercel.app"
```

#### Option 2 : Domaine personnalisé

```
Dans Vercel Dashboard > Settings > Domains
- Ajouter votre domaine (ex: dzmaconnerie.fr)
- Modifier les DNS chez votre registraire
- Instructions fournies par Vercel
```

### Configuration SSL/HTTPS

Vercel fournit automatiquement un certificat SSL gratuit. Pas de configuration nécessaire.

## ⚙️ Déploiements automatiques

Vercel redéploie automatiquement à chaque push sur `main` :

```bash
git add .
git commit -m "Update content"
git push origin main
# Vercel redéploie automatiquement
```

## 📊 Monitoring et stats

### Analytics dans Vercel

- Cliquer sur le déploiement dans Vercel Dashboard
- Voir les metrics : Core Web Vitals, Performance, etc.

### Vérifier la performance

```bash
# Localement tester le build
npm run build
npm start

# Lighthouse (Chrome DevTools)
# Outils > Plus d'outils > Lighthouse > Analyser page chargée
```

## 🔧 Troubleshooting

### Build échoue

1. Vérifier les logs Vercel Dashboard
2. Tester localement : `npm run build`
3. Vérifier TypeScript : `npm run type-check`
4. Vérifier variables d'environnement

### Site lent

1. Vérifier images optimisées (next/image)
2. Analyser Lighthouse
3. Vérifier Core Web Vitals dans Vercel Analytics

### Domaine ne pointe pas

1. Vérifier les DNS chez registraire
2. Cliquer "Refresh" dans Vercel Domains
3. Attendre 24-48h pour propagation DNS

## 🔐 Bonnes pratiques

1. **Ne jamais pusher** les données sensibles (API keys)
2. **Utiliser variables d'environnement** pour secrets
3. **Tester localement** avant de pusher
4. **Mettre à jour régulièrement** les dépendances

```bash
npm update
npm audit fix
```

5. **Monitorer les déploiements** dans Vercel Dashboard

## 📈 Prochaines étapes

Après déploiement :

1. **Google Search Console** : Soumettre sitemap
2. **Google Business Profile** : Créer/vérifier
3. **Analytics** : Installer GA4
4. **Suivi conversion** : Configurer formulaire
5. **Monitoring** : Vérifier Core Web Vitals

## 📚 Ressources

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Custom Domains](https://vercel.com/docs/custom-domains)

## 💡 Tips

- Utiliser preview deployments pour tester avant main
- Configurer notifications GitHub pour deployments
- Utiliser "Auto" pour ISR optimal
- Configurer cache headers pour performances

## 🎯 Votre site est live ! 🎉

Bravo ! Votre site Next.js est maintenant en production avec :
- ✅ Domaine personnalisé
- ✅ HTTPS gratuit
- ✅ Déploiements automatiques
- ✅ Performance optimisée
- ✅ 48+ pages SEO générées

---

**Support Vercel** : https://vercel.com/support
**Documentation complète** : https://vercel.com/docs

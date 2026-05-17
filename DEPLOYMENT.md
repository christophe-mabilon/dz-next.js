# 📦 Guide de déploiement - DZ Maçonnerie

## Option 1 : Vercel (Recommandé - Plus facile)

### Étape 1 : Préparer le code
```bash
# Vérifier que tout est en ordre
npm run build
npm run lint

# Committer les changements
git add .
git commit -m "Redesign complet du site"
git push origin main
```

### Étape 2 : Connecter à Vercel
1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer "New Project"
3. Sélectionner le repo GitHub `dzmaconnerie-nextjs`
4. Vercel détecte automatiquement Next.js
5. Cliquer "Deploy"

### Étape 3 : Configurer variables d'environnement
Vercel Dashboard → Project Settings → Environment Variables

```
RESEND_API_KEY = [votre_clé_resend]
CONTACT_EMAIL = admin@dzmaconnerie38.fr
NEXT_PUBLIC_SITE_URL = https://dzmaconnerie38.fr
```

### Étape 4 : Configurer domaine custom
Vercel Dashboard → Domains
- Ajouter `dzmaconnerie38.fr`
- Suivre les instructions DNS

### Résultat
- Site live sur https://dzmaconnerie38.fr
- Auto-redéploie à chaque push sur main
- Certificat SSL automatique
- CDN global

---

## Option 2 : VPS/Serveur dédié (Plus complexe)

### Prérequis
- VPS avec Node.js 18+
- Nginx ou Apache
- PM2 ou systemd
- Certificat SSL (Let's Encrypt)

### Installation
```bash
# Sur le serveur VPS
git clone <repo>
cd dzmaconnerie-nextjs

npm install --legacy-peer-deps
npm run build

# Démarrer avec PM2
pm2 start "npm start" --name "dzmaconnerie"
pm2 startup
pm2 save
```

### Nginx config
```nginx
server {
    listen 80;
    server_name dzmaconnerie38.fr;
    
    # Redirection HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name dzmaconnerie38.fr;
    
    ssl_certificate /etc/letsencrypt/live/dzmaconnerie38.fr/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/dzmaconnerie38.fr/privkey.pem;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### SSL avec Let's Encrypt
```bash
sudo certbot certonly --webroot -w /var/www/html \
  -d dzmaconnerie38.fr
```

---

## Checklist de pré-déploiement

- [ ] npm run build sans erreurs
- [ ] Tests : npm run lint sans erreurs
- [ ] Variables d'environnement configurées
- [ ] Email intégré (Resend ou autre)
- [ ] Google Analytics configuré
- [ ] Images optimisées
- [ ] robots.txt configuré
- [ ] sitemap.xml généré
- [ ] Certificat SSL prêt
- [ ] Domaine DNS pointé

---

## Post-déploiement

### 1. Google Search Console
```
1. Aller sur search.google.com
2. Ajouter dzmaconnerie38.fr
3. Vérifier la propriété (via fichier HTML ou DNS)
4. Soumettre sitemap.xml
5. Vérifier que site est indexé
```

### 2. Google Analytics 4
```
1. Créer compte GA4
2. Ajouter dans gtag (ou ajouter script dans layout.tsx)
3. Vérifier que données arrivent
```

### 3. Bing Webmaster
```
1. Aller sur webmaster.bing.com
2. Ajouter dzmaconnerie38.fr
3. Soumettre sitemap.xml
```

### 4. Configurer DNS
```
A record: 76.76.19.165 (IP Vercel)
CNAME: cname.vercel.com
```

### 5. Tester performance
```bash
# Test Lighthouse local
npm install -g @lhci/cli@latest
lhci autorun
```

### 6. Configurer emails
Installation Resend (si pas déjà fait):

```bash
npm install resend
```

Créer compte sur [resend.com](https://resend.com)
Ajouter domaine custom
Copier API key dans variables Vercel

Mettre à jour `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(data: any) {
  const emailHtml = `
    <h1>Nouvelle demande de devis</h1>
    <p><strong>Nom:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Téléphone:</strong> ${data.phone}</p>
    <p><strong>Ville:</strong> ${data.city}</p>
    <p><strong>Service:</strong> ${data.service}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message}</p>
  `;

  await resend.emails.send({
    from: 'contact@dzmaconnerie38.fr',
    to: process.env.CONTACT_EMAIL,
    subject: `Nouvelle demande de devis de ${data.name}`,
    html: emailHtml,
  });
}
```

---

## Maintenance post-déploiement

### Mise à jour du contenu
```bash
# Ajouter un service
# → Modifier data/services.ts
# → Pages auto-générées

# Ajouter une ville
# → Modifier data/cities.ts
# → Pages auto-générées

# Push les changements
git add .
git commit -m "Ajout nouveau service"
git push origin main
# → Vercel redéploie automatiquement
```

### Monitoring
- [ ] Vérifier Google Analytics régulièrement
- [ ] Vérifier emails arrivent correctement
- [ ] Monitorer Core Web Vitals
- [ ] Vérifier pas d'erreurs 404/500

### Mise à jour dépendances
```bash
npm outdated          # Voir mises à jour dispo
npm update            # Mettre à jour
npm run build         # Vérifier que tout fonctionne
git push              # Redéploiement auto
```

---

## Troubleshooting

### Build échoue
```bash
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

### Emails pas envoyés
- Vérifier API key Resend dans .env
- Vérifier domaine configuré dans Resend
- Vérifier logs Vercel
- Tester API route : POST /api/contact

### Pages pas indexées
- Vérifier sitemap.xml
- Vérifier robots.txt
- Soumettre à Google Search Console
- Attendre quelques jours pour indexation

---

## Support & Questions

📧 contact@dzmaconnerie38.fr
📱 06 88 14 42 57

Pour les questions techniques :
- Vérifier Vercel logs
- Vérifier Google Search Console
- Vérifier fichiers de configuration

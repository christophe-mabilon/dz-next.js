// Configuration PM2 — production sur le VPS.
//
// UN SEUL process : le serveur Next.js (`next start`) qui sert à la fois les
// pages ET les routes /api (contact, partenaires). Il n'y a pas d'API séparée.
// PM2 le relance automatiquement s'il plante (autorestart) et au reboot du
// serveur (après `pm2 startup` + `pm2 save`).
//
// Prérequis / mise en route sur le VPS :
//   npm install -g pm2
//   cd <dossier du site>
//   npm install
//   npm run build
//   pm2 start ecosystem.config.js
//   pm2 save        # mémorise la liste des process
//   pm2 startup     # génère la commande de démarrage auto au boot (à coller)
//
// Redéploiement (nouvelle version) :
//   git pull && npm install && npm run build && pm2 reload ecosystem.config.js
//   (ou simplement : npm run deploy:vps)
//
// Les variables SMTP_* / MAIL_* sont lues depuis .env.local (chargé par Next.js
// au démarrage) — ne pas les mettre en clair ici.

module.exports = {
  apps: [
    {
      name: "dzmaconnerie",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: __dirname,
      interpreter: "node",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_restarts: 10,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};

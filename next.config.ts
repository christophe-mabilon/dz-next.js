import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Image optimization — toutes les images sont locales (/public/images).
  // Pas de remotePatterns : si une image distante est ajoutée un jour,
  // next/image lèvera une erreur explicite invitant à déclarer son hôte ici.
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression et performance
  compress: true,
  poweredByHeader: false,

  // Headers pour SEO et performance
  // NB : pas de CORS sur /api — les formulaires (contact, partenaires) sont
  // en même origine. Un `Access-Control-Allow-Origin: *` ouvrirait inutilement
  // les routes à d'autres domaines (et est de toute façon invalide combiné à
  // `Allow-Credentials: true`). On laisse la same-origin policy protéger l'API.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects — 301 des URLs de l'ANCIEN site (dzmaconnerie38.fr, pages .html
  // indexées par Google) vers leurs équivalents. Indispensable au moment de la
  // bascule VPS pour conserver l'historique/l'autorité acquise par ces pages.
  // Source : sitemap.xml de l'ancien site (relevé le 14/07/2026).
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/macon-bourgoin.html', destination: '/villes/bourgoin-jallieu', permanent: true },
      { source: '/travaux-maconnerie-bourgoin.html', destination: '/services', permanent: true },
      { source: '/travaux-renovation-38.html', destination: '/services/renovation-maconnerie', permanent: true },
      { source: '/avis-clients.html', destination: '/avis', permanent: true },
      { source: '/entreprises-partenaire.html', destination: '/partenaires', permanent: true },
      { source: '/mentions-legales-maconnerie.html', destination: '/mentions-legales', permanent: true },
      // anciennes pages « devis par ville » → pages villes correspondantes
      { source: '/devis-travaux-maconnerie-bourgoin-jallieu-38300.html', destination: '/villes/bourgoin-jallieu', permanent: true },
      { source: '/devis-travaux-maconnerie-l-isle-d-abeau-38080.html', destination: '/villes/l-isle-d-abeau', permanent: true },
      { source: '/devis-travaux-maconnerie-vienne-38200.html', destination: '/villes/vienne', permanent: true },
      { source: '/devis-travaux-maconnerie-villefontaine-38090.html', destination: '/villes/villefontaine', permanent: true },
      { source: '/devis-travaux-maconnerie-saint-jean-de-bournay-38440.html', destination: '/villes/saint-jean-de-bournay', permanent: true },
      { source: '/devis-travaux-maconnerie-artas-38440.html', destination: '/villes/artas', permanent: true },
    ];
  },

  // Rewrites
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },

};

export default nextConfig;

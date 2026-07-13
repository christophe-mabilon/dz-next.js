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

  // Redirects
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
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

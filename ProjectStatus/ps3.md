Oui, voici un récapitulatif complet que tu pourras copier/coller dans un nouveau chat afin de repartir sur une base propre.

Projet

Site Next.js 15 + TypeScript + TailwindCSS de DZ Maçonnerie & Terrassement.

Objectif : réaliser un site très haut de gamme SEO, optimisé pour :

Google
Google Maps
Google AI Overviews
ChatGPT
Perplexity
Bing
Ce qui est déjà fait
✅ Structure générale
Next.js App Router
TypeScript
TailwindCSS
composants réutilisables
architecture propre
✅ SEO global
layout.tsx

Optimisé :

metadataBase
robots
canonical
OpenGraph
Twitter
sitemap
locale
alternate
structured data
config.ts

Optimisé :

siteName
description
keywords
coordonnées
horaires
réseaux sociaux
zone d'intervention
Hero

Hero entièrement revu

image optimisée
overlay
CTA
cards
responsive
OG Image

Créée

1200x630
JPG
<300 Ko
Images

Optimisées

WEBP
noms SEO
ALT
Houzz

Profil créé

Descriptions SEO

Photos

Titres

Mots-clés

Projet rempli

Mentions légales

Optimisées SEO

Services

La page Services est pratiquement terminée.

Villes

Il y a 106 villes.

Chaque ville possède :

coordonnées GPS
SEO
keywords
nearbyCities
FAQ
contenu
nearbyCities

On a commencé une optimisation.

On s'est rendu compte qu'il vaut mieux utiliser :

slug

au lieu de

name

Donc

"bourgoin-jallieu"

au lieu de

"Bourgoin-Jallieu"

Le helper devra donc devenir :

Avant

currentCity.nearbyCities?.includes(city.name)

Après

currentCity.nearbyCities?.includes(city.slug)
nearbyCities déjà vérifiés

On a revu les villes :

ID 1 → 106

Mais plusieurs propositions étaient approximatives.

=> Refaire une dernière passe tranquillement.

Ce qu'il reste à faire
PRIORITÉ 1
nearbyCities

Passer définitivement en slugs.

Vérifier :

cohérence
villes existantes
liens bidirectionnels
PRIORITÉ 2
services.ts

Relecture complète

Ajouter si besoin :

FAQ
contentBlocks
internalLinks
processSteps
materials
benefits
PRIORITÉ 3
réalisations

Créer automatiquement

projets liés
villes liées
services liés
PRIORITÉ 4
Blog

Relier automatiquement

articles

↓

services

↓

villes

↓

réalisations

PRIORITÉ 5
SEO

Relecture complète de

lib/seo.ts

Objectif :

Schema.org parfait.

Ajouter :

ImageObject
Service
Breadcrumb
Review
AggregateRating
FAQPage
Organization
LocalBusiness
PRIORITÉ 6

Audit SEO complet

Vérifier :

Titles
Meta descriptions
Canonical
OpenGraph
Twitter
Robots
Sitemap
JSON-LD
maillage interne
PRIORITÉ 7

Google Search Console

Ajouter :

google-site-verification
PRIORITÉ 8

Google Business

Relier :

réalisations
blog
photos
PRIORITÉ 9

Images

Vérifier :

alt
title
noms SEO
dimensions
poids
PRIORITÉ 10

Core Web Vitals

Optimiser :

LCP
CLS
INP
Ce qu'il ne faut plus refaire

❌ Gros scripts inutiles.

❌ Réécriture complète de cities.ts.

❌ Réponses de plusieurs pages pour une simple modification.

Nouvelle méthode de travail

Je veux désormais des réponses :

courtes
précises
directement copiables

Exemple :

Ville : Bourgoin-Jallieu

Remplacer :

nearbyCities: [...]

par

nearbyCities: [...]

Sans explications inutiles.

Objectif final

Obtenir un site capable d'obtenir environ :

SEO technique : 10/10
SEO local : 10/10
Performance : 10/10
Accessibilité : 10/10
Schema.org : 10/10
Google AI : 10/10
Maillage interne : 10/10

avec un code propre, maintenable et sans sur-ingénierie.

Dernière consigne importante pour le nouveau chat

Toujours répondre en français. Toujours renvoyer le code complet lorsqu'un fichier est modifié. Éviter les longues explications. Aller directement à la solution la plus simple, la plus fiable et la plus maintenable. Si une optimisation est proposée, elle doit apporter un bénéfice réel au SEO ou au projet, sans complexifier inutilement le code.
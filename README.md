# Portfolio — Kevin Sovet (2026)

Site vitrine pour présenter le parcours, les projets et les moyens de contact.  
Déploiement : **Vercel** (domaine personnalisé : [by-sovet.me](https://by-sovet.me)).

---

## Sommaire

- [Prérequis](#prérequis)
- [Installation et scripts](#installation-et-scripts)
- [Stack technique](#stack-technique)
- [Structure du projet](#structure-du-projet)
- [Arborescence (vue d'ensemble)](#arborescence-vue-densemble)
- [Fonctionnalités principales](#fonctionnalités-principales)
- [SEO et métadonnées](#seo-et-métadonnées)
- [Accessibilité (a11y)](#accessibilité-a11y)
- [Performance et bonnes pratiques](#performance-et-bonnes-pratiques)
- [Déploiement](#déploiement)

---

## Prérequis

- **Node.js** v18.17.0 ou supérieur (testé sur v22)
- **npm**

---

## Installation et scripts

```bash
npm install
npm run dev        # serveur de développement (port 3000, Turbopack)
npm run build      # build de production (génère les pages statiques)
npm run start      # prévisualisation locale du build de production
npm run lint       # ESLint
```

---

## Stack technique

| Domaine | Technologie |
|--------|-------------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **UI** | [React 19](https://react.dev/) |
| **Langage** | [TypeScript](https://www.typescriptlang.org/) |
| **Styles** | [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/postcss` |
| **Hébergement** | [Vercel](https://vercel.com/) |
| **Polices** | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) |

Configuration complémentaire :

- **Alias** `@/` → racine du projet (`tsconfig.json`)
- Styles globaux : `app/globals.css` (`@import "tailwindcss"`) + `app/index.css` (utilitaires custom)
- Données : `data/constants.tsx` (projets, expériences, recommandations, filtres)

---

## Structure du projet

| Fichier / dossier | Rôle |
|-------------------|------|
| `app/layout.tsx` | Layout racine : metadata globaux, Open Graph, favicons, fonts |
| `app/page.tsx` | Page d'accueil : assemblage des sections |
| `app/projects/[id]/page.tsx` | Page dynamique par projet : metadata, Open Graph, navigation |
| `app/sitemap.ts` | Sitemap dynamique généré automatiquement (homepage + toutes les pages projets) |
| `app/globals.css` | Import Tailwind |
| `app/index.css` | Styles globaux custom (body, scrollbar, animations, `.premium-link`, etc.) |
| `data/constants.tsx` | Données statiques : expériences, projets, options de filtres (`PROJECT_FILTER_OPTIONS`) |
| `data/types.ts` | Interfaces TypeScript (`Project`, `ExperienceItem`, etc.) |
| `components/` | Composants UI par section |
| `utils/linkify.tsx` | Transformation des URLs en liens dans les textes |
| `public/` | Assets servis tels quels (images, favicons, `robots.txt`) |
| `next.config.ts` | Configuration Next.js |

---

## Arborescence (vue d'ensemble)
kevin-sovet-portfolio-next/
├── app/
│   ├── globals.css                  # import Tailwind
│   ├── index.css                    # styles globaux custom
│   ├── layout.tsx                   # metadata, Open Graph, favicons, fonts
│   ├── page.tsx                     # homepage
│   └── projects/
│       └── [id]/
│           └── page.tsx             # page projet dynamique
│   └── sitemap.ts                   # sitemap dynamique
├── components/
│   ├── AnimatedSection.tsx          # apparition au scroll (IntersectionObserver)
│   ├── BackToTop.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HelloStickyBadge.tsx
│   ├── Hero.tsx
│   ├── ImageCarousel.tsx
│   ├── Portfolio.tsx                # grille, filtres, tri, liens vers pages projets
│   ├── ProjectPage.tsx              # page projet : contenu, navigation, sidebar sticky
│   ├── Recommendations.tsx
│   └── StructuredData.tsx           # JSON-LD (Person + WebSite)
├── data/
│   ├── constants.tsx                # toutes les données du portfolio
│   └── types.ts                     # interfaces TypeScript
├── utils/
│   └── linkify.tsx
├── public/
│   ├── images/                      # hero, logos, vignettes projets, avatars, favicons
│   ├── robots.txt
│   └── files/resume_sovetkevin.pdf
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── package.json

---

## Fonctionnalités principales

### Page d'accueil

- Image hero en arrière-plan (AVIF), préchargée via `<link rel="preload">` dans `layout.tsx`
- Comportement adapté mobile / desktop

### Expériences (`Experience`)

- Timeline avec détails repliables ("More details" / "Less details")
- Champs `missionVia` pour missions via une société tierce
- Layout : une colonne jusqu'à `lg`, deux colonnes ensuite

### Projets (`Portfolio`)

- **Filtres** par catégories configurables dans `data/constants.tsx` → `PROJECT_FILTER_OPTIONS`
- Compteur par filtre
- **Tri** : latest first, oldest first, titre A–Z / Z–A
- Filtre et tri **persistants dans l'URL** (`?category=`, `?sort=`) — partageable et restauré au retour
- Grille responsive : 1 col. (mobile), 2 cols. (`md`), mosaïque 12 colonnes (`lg+`)
- Chaque carte est un **lien vers la page projet dédiée** (`/projects/[id]`)

### Pages projet (`ProjectPage`)

- **URL dédiée et indexable** par projet (`/projects/[id]`)
- **Metadata + Open Graph dynamiques** : titre, description et image spécifiques à chaque projet
- **Navigation prev/next** entre projets (boutons + clavier `←` / `→`)
- **Navigation filtrée** : si un filtre est actif, prev/next navigue uniquement dans les projets filtrés et triés
- **Badge de position** : `01/26` en haut à droite
- **Sidebar sticky** sur desktop : reste visible pendant le scroll
- Fermeture rapide via `Escape` → retour à la galerie (filtre et tri restaurés)

### Recommandations (`Recommendations`)

- Texte expansible par carte

### Contact (`Contact`)

- Carte Google Maps intégrée avec gestion RGPD (consentement cookies)

### Divers

- `BackToTop` : bouton fixe, position ajustée en bas de page (dont mobile)
- `HelloStickyBadge` : badge discret, masqué au scroll vers le bas sur mobile
- `StructuredData` : Schema.org `Person` + `WebSite` injecté dans le DOM

---

## SEO et métadonnées

- **Metadata Next.js** dans `app/layout.tsx` (title, description, Open Graph, Twitter, canonical)
- **Metadata dynamiques par projet** via `generateMetadata()` dans `app/projects/[id]/page.tsx`
- **Sitemap dynamique** généré automatiquement via `app/sitemap.ts` (homepage + toutes les pages projets)
- **JSON-LD** `Person` + `WebSite` (`components/StructuredData.tsx`)
- **Google Search Console** : domaine vérifié via enregistrement DNS TXT, sitemap soumis
- `public/robots.txt`

---

## Accessibilité (a11y)

- Structure de titres cohérente par section
- Labels associés sur tous les `<select>` (`htmlFor` / `id` ou `sr-only`)
- `aria-pressed` sur les boutons de filtre actifs
- Navigation clavier complète sur la grille projets (flèches, `Enter`, `Home`, `End`)
- Navigation clavier sur les pages projet (`←` `→` pour changer de projet, `Escape` pour revenir)
- `aria-label` sur tous les contrôles sans texte visible
- Anneaux de focus visibles sur les contrôles interactifs
- `overflow-x: clip` sur `html` et `body` (au lieu de `hidden`) pour préserver le fonctionnement de `position: sticky`

---

## Performance et bonnes pratiques

- **SSG (Static Site Generation)** : la homepage est pré-générée au build
- **Pages projet dynamiques** : rendues à la demande par Vercel (Edge Network)
- **Hero optimisé** : AVIF, `<link rel="preload">` dans `layout.tsx`
- **Scores Lighthouse** (homepage, desktop) : 100 Performance / 90 Accessibility / 100 Best Practices / 100 SEO
- **Core Web Vitals** : validés en production via Vercel Speed Insights

---

## Déploiement

Le déploiement est entièrement géré par **Vercel** :

- Chaque `push` sur `main` déclenche un build et déploiement automatique
- Chaque Pull Request génère un **preview deployment** avec URL unique
- Le domaine `by-sovet.me` est connecté via enregistrements DNS dans OVH :
  - `A` → `216.198.79.1` (Vercel)
  - `CNAME www` → `[hash].vercel-dns-017.com`

Aucune configuration manuelle requise après un push.

---

## Licence et crédits

Portfolio personnel — **Kevin Sovet**.  
Contenu, textes et visuels : droits réservés sauf mention contraire sur les assets tiers.
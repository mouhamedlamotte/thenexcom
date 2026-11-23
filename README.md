# The Nexcom

Site de présentation de **The Nexcom**, entreprise de services informatiques à Dakar : sites, applications,
logiciels sur mesure et intégration des paiements (Wave, Orange Money, carte).

Monorepo pnpm + Turborepo, sur le même modèle que Salonify, pour pouvoir ajouter d'autres applications plus tard
(back-office, etc.).

```
apps/
  web/                  Site public (Next.js 16, App Router, Tailwind CSS 4)
packages/
  ui/                   Tokens de la DA, logo, boutons — partagés entre les apps
  typescript-config/    Configurations TypeScript partagées
```

## Démarrer

Prérequis : Node 22+ et pnpm 12.

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm build          # build de production
pnpm check-types
```

## Direction artistique

DA « Sur mesure » (validée en novembre 2026). Référence complète dans `docs/da/` (guide de marque, tokens, logo,
personnage) et `docs/maquettes/` (landing et portfolio). Voir aussi `CLAUDE.md`.

- **Tokens** : `packages/ui/src/styles/globals.css`, repris de `docs/da/tokens.json` (source de vérité). Fond `nuit`,
  texte `craie`, secondaire `ardoise`, un seul accent `corail`. Thèmes Nuit (défaut) et Craie via `data-theme`.
- **Polices** : Instrument Serif (titres, jamais sous 64 px), Hanken Grotesk (texte, étiquettes), Reenie Beanie (notes
  à la main), auto-hébergées via `@fontsource` et `next/font/local` (`apps/web/app/layout.tsx`).
- **Logo** : `packages/ui/src/components/brand/logo.tsx`, tracés repris de `docs/da/logo/` (jamais de x en police).
  Icônes (`app/icon.png`, `app/apple-icon.png`) copiées de `docs/da/logo/` ; image de partage générée au build par
  `app/opengraph-image.tsx`.
- **Animations** : chaque section porte `data-scene` ; `components/site/scene-driver.tsx` y écrit la progression du
  défilement (`--e`, `--e-vite`) et le CSS (`app/globals.css`) en tire les effets. Sans JavaScript ou avec
  `prefers-reduced-motion`, tout s'affiche directement à l'état final.

## Contenu

- Coordonnées, navigation et liens de contact : `apps/web/lib/site.ts`
- Textes des sections (diff, modules, réalisations, étapes) : `apps/web/lib/content.ts`, au tutoiement
- Images : `apps/web/public/img` (captures réelles de Salonify Pro, données de démonstration)

Le contact passe par WhatsApp et e-mail (liens pré-remplis), sans formulaire ni base de données.

## Déploiement

- **Vercel** : importer le dépôt, « Root Directory » = `apps/web`. Vercel détecte pnpm et le monorepo.
- **Docker / VPS** : `next.config.ts` active `output: "standalone"` ; le build produit `apps/web/.next/standalone`.

Variable d'environnement facultative : `NEXT_PUBLIC_SITE_URL` (par défaut `https://thenexcom.com`), utilisée pour
les métadonnées, le sitemap et robots.txt.

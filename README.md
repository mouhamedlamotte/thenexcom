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

Prérequis : Node 22+ et pnpm 10.

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm build          # build de production
pnpm check-types
```

## Direction artistique

**Nouvelle DA « Sur mesure » validée (novembre 2026), migration en cours.** Tout est dans `docs/da/` (guide de marque,
tokens, logo, personnage) et `docs/maquettes/` (landing et portfolio). Voir aussi `CLAUDE.md`.

En attendant la migration, le site utilise encore la DA v1 : tokens dans `packages/ui/src/styles/globals.css`
(cobalt, ink, paper), polices Bricolage Grotesque, IBM Plex Sans et IBM Plex Mono.

## Contenu

- Coordonnées, navigation et liens de contact : `apps/web/lib/site.ts`
- Textes des sections (services, méthode, réalisations) : `apps/web/lib/content.ts`
- Images : `apps/web/public/img` (captures réelles de Salonify Pro, données de démonstration)

Le contact passe par WhatsApp et e-mail (liens pré-remplis), sans formulaire ni base de données.

## Déploiement

- **Vercel** : importer le dépôt, « Root Directory » = `apps/web`. Vercel détecte pnpm et le monorepo.
- **Docker / VPS** : `next.config.ts` active `output: "standalone"` ; le build produit `apps/web/.next/standalone`.

Variable d'environnement facultative : `NEXT_PUBLIC_SITE_URL` (par défaut `https://thenexcom.com`), utilisée pour
les métadonnées, le sitemap et robots.txt.

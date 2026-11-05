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

Les tokens vivent dans `packages/ui/src/styles/globals.css` :

| Token    | Valeur    | Usage                                             |
| -------- | --------- | ------------------------------------------------- |
| `cobalt` | `#2346E8` | accents : logo, boutons, un bloc fort par section |
| `ink`    | `#12141A` | texte, sections sombres                           |
| `paper`  | `#F4F2EC` | fond par défaut                                   |
| `mist`   | `#E3E8FD` | texte clair sur cobalt                            |
| `slate`  | `#5B5F6A` | texte secondaire                                  |

Polices auto-hébergées (paquets `@fontsource`, chargées avec `next/font/local`) : **Bricolage Grotesque** pour les
titres, **IBM Plex Sans** pour le texte, **IBM Plex Mono** pour les étiquettes. Aucun appel à Google Fonts.

Ton : vouvoiement, phrases courtes, on parle de ce qui est livré plutôt que des technologies.

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

# CLAUDE.md

Contexte pour travailler sur ce dépôt avec Claude Code.

## Le projet

**The Nexcom** (nexcom) est l'agence de développement de Mouhamed Lamotte (undefined.dev), à Dakar : sites, apps, SaaS, intégration Orange Money / Wave / carte. Entreprise individuelle : RCCM SN.DKR.2026.A.40513, NINEA 013460514 (voir `docs/entreprise.md`). Produit phare : Salonify (gestion de salons de coiffure).

Ce dépôt (pnpm + Turborepo) contient le site public `apps/web` (Next.js 16, App Router, Tailwind CSS 4) et le paquet partagé `packages/ui`. Le portfolio personnel de Mouhamed vivra d'abord ici aussi.

## En cours : migration vers la DA « Sur mesure »

Une nouvelle direction artistique a été validée le 12/11/2026. Elle remplace la DA v1 (cobalt / papier / Bricolage Grotesque / vouvoiement) encore en place dans `packages/ui/src/styles/globals.css` et `apps/web`.

À lire avant toute modification visuelle :
1. `docs/da/README.md` : le guide de marque (logo, couleurs, typo, marques du plan, personnage, ton).
2. `docs/da/tokens.json` et `docs/da/tokens.css` : les tokens. `tokens.json` est la source de vérité.
3. `docs/maquettes/landing-nexcom.md` : la maquette validée de la landing, section par section, avec la mécanique d'animation.
4. `docs/maquettes/portfolio-mouhamed.md` : la maquette du portfolio (à retravailler).
5. `docs/artefacts/` : copie de tous les artefacts de travail (canvas, design system) et aperçus PNG dans `docs/artefacts/apercus/`. Les pistes de la page « Explorations » sont abandonnées.

### Règles de la nouvelle DA

- Fond `nuit` #0C1029, texte `craie` #EEF1F8, secondaire `ardoise` #8C93BF, un seul accent `corail` #F2604A. `indigo`, `beurre`, `menthe` en appoint.
- Instrument Serif (titres, jamais sous 64 px, mot fort en italique corail), Hanken Grotesk (texte, étiquettes en majuscules 0.16em), Reenie Beanie (une note à la main par écran). Polices auto-hébergées via `@fontsource`, comme aujourd'hui.
- Logo : `nexcom`, le x formé de deux chevrons corail `><` qui se chevauchent. Utiliser les SVG de `docs/da/logo/`, ne jamais écrire le x avec une police.
- Marques du plan : pointillés de construction, cotes en vraies unités, étiquettes « MODULE 03 · … », trait corail pour l'annotation importante.
- Ton : tutoiement, phrases courtes, autodérision côté perso, concret côté agence. **Aucun vocabulaire de couture** (tailleur, coudre, patron, retouche…) : nexcom est une agence de développement. « Sur mesure » reste.
- Pas de sections empilées banales : chaque section a son geste (voir la maquette).
- Contraste 4.5:1 minimum pour le texte, `prefers-reduced-motion` respecté.

### Plan de migration suggéré

1. Remplacer les tokens de `packages/ui/src/styles/globals.css` par ceux de `docs/da/tokens.css` (garder la structure `@theme inline` de Tailwind 4) et changer les polices dans `apps/web/app/layout.tsx`.
2. Remplacer le logo de `packages/ui` par les SVG de `docs/da/logo/`, régénérer `icon.png`, `apple-icon.png` et `og.png`.
3. Réécrire les sections de `apps/web/components/site/` selon `docs/maquettes/landing-nexcom.md` ; passer `lib/content.ts` au tutoiement.
4. Mettre à jour le README (section Direction artistique).
5. Ensuite, le portfolio.

## Commandes

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm build
pnpm check-types
```

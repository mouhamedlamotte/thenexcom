# Artefacts de la DA

Copie des deux artefacts de travail de la DA « Sur mesure » (12/11/2026), pour les avoir hors ligne et versionnés.

| Artefact | En ligne | Ici |
|---|---|---|
| Canvas « DA — Mouhamed Lamotte × The Nexcom » : planches de la DA, affiches, maquettes des sites, pistes explorées | https://claude.ai/artifact/SHiLvjL2XkpX6BBwYGUKCa | `canvas-da/` |
| Design system « nexcom » : guide de marque, tokens, polices, logos | https://claude.ai/artifact/Feqfh9RcQkHwzE8Yx2aAKq | `design-system/` |
| Aperçus PNG des planches principales | | `apercus/` |

## Voir les maquettes

Les fichiers `.dc.html` sont au format de l'outil de maquette : ils ont besoin de son moteur pour être interactifs (animations au défilement, mesures en direct). Pour les voir tels quels, ouvrir le canvas en ligne. Ouverts directement dans un navigateur, les planches statiques s'affichent à peu près, mais pas les maquettes interactives.

Pour un coup d'œil rapide, utiliser `apercus/` (rendus statiques, animations dans leur état final, valeurs par défaut à la place des mesures en direct).

## canvas-da/ : ce qui est quoi

`canvas.json` décrit les pages et la position de chaque planche. Les images pointent vers `docs/da/personnage/personnage.png`.

**Page « Sites · maquettes »**
- `NexcomLanding.dc.html` : **la landing validée** (héros qui se mesure, diff « Ce qui change avec nous », services, réalisations, méthode, contact). Spec : `docs/maquettes/landing-nexcom.md`.
- `SitePortfolio.dc.html` : le portfolio de Mouhamed Lamotte (première version). Spec : `docs/maquettes/portfolio-mouhamed.md`.
- `NexcomHistoire.dc.html`, `NexcomConversation.dc.html`, `SiteNexcom.dc.html` : versions précédentes de la landing, gardées pour mémoire.

**Page « DA · Sur mesure »**
- `Main.dc.html` (couverture), `Palette.dc.html`, `Typo.dc.html`, `Marques.dc.html` (marques du plan), `Logo.dc.html` (les chevrons).
- Affiches 1080 × 1350 : `AfficheAtelier.dc.html` (agence), `AfficheTabaski.dc.html` (version claire, « Zéro template. »), `AffichePersonnage.dc.html` (« On ne naît pas développeur. »).

**Page « Explorations »** (pistes abandonnées, à ne pas suivre)
- `Tailleur*.dc.html`, `Gloock*.dc.html`, `Combinee.dc.html`, `Charte.dc.html`, `AfficheTailleur.dc.html`, `AffichePatron.dc.html` : la piste « tailleur », abandonnée (nexcom n'est pas une agence de couture).
- `Gelee.dc.html`, `Bureau.dc.html`, `Kiosque.dc.html` : trois directions explorées avant la DA finale.
- `Logos.dc.html` (la sélection), `Logos2.dc.html` (logos typographiques) : pistes de logo écartées au profit des chevrons.

## design-system/

`README.md` (guide de marque), `tokens.json`, `fonts/` (Instrument Serif, Hanken Grotesk, Reenie Beanie en woff2), `components/Cover/preview.html` (la couverture), `assets/*/README.md` (notes des groupes de fichiers ; les fichiers eux-mêmes sont dans `docs/da/logo/` et `docs/da/personnage/`). `design-system.json` est l'index de l'outil.

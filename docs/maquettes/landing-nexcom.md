# Maquette : landing commerciale nexcom

Source cliquable : `sources/landing-nexcom.dc.html` (canvas : https://claude.ai/artifact/SHiLvjL2XkpX6BBwYGUKCa, page « Sites · maquettes », artboard « nexcom · landing »).
Le fichier `.dc.html` est un format de maquette, pas du code à copier : les styles sont inline pour l'éditeur. Il sert de référence pixel (tailles, couleurs, espacements, textes) ; l'implémentation se fait en composants React dans `apps/web`.

## Principes

- Fond `nuit` uni (pas de trame sur le site). Texte `craie`, secondaire `ardoise`, accent `corail` uniquement.
- Typo géante : chaque section a un grand titre en Instrument Serif, `clamp()` entre ~76 px et ~190 px (le héros monte à 260 px). Le mot fort en italique corail.
- Pas de pile de sections « titre + 3 cartes » : chaque section a son geste (mesure, diff, assemblage, comptage, tracé, rencontre).
- Séparateurs : traits en pointillé `ligne` (#2E3A8A) entre sections. Étiquettes `etiquette` (13 px, majuscules, 0.16em) en `ardoise` : « 03 · CE QU'ON CONSTRUIT ».
- Tutoiement. Jamais de vocabulaire de couture.
- Toutes les animations ont un équivalent `prefers-reduced-motion` (état final directement).

## Structure

### Rail de navigation (fixe, à gauche)
Liste verticale ACCUEIL, POURQUOI, SERVICES, RÉALISATIONS, MÉTHODE, CONTACT. La section visible passe en `corail` et son trait s'allonge (12 → 28 px). Masqué sous 900 px.

### En-tête
Logo nexcom (SVG, 42 px de haut de police), liens Pourquoi nous / Services / Réalisations / Méthode, bouton pilule `corail` « Démarrer un projet » (texte `nuit`).

### 01 · Héros : le titre qui se mesure
- Étiquette « MODULE 00 · ACCUEIL · AGENCE DE DÉVELOPPEMENT À DAKAR ».
- Titre « Du code / *sur mesure.* » en Instrument Serif, `clamp(96px, 15.5vw, 260px)`, interligne 0.82, contour pointillé discret (`outline: 1.5px dashed #2E3A8A; outline-offset: 10px`).
- Au-dessus : une cote corail qui affiche la largeur réelle du titre en px. À droite : une cote verticale `ardoise` avec sa hauteur. En dessous : « INSTRUMENT SERIF · {taille} PX · AJUSTÉ À TON ÉCRAN · TEMPLATE : AUCUN ».
- **Les valeurs sont mesurées en direct** (`offsetWidth`, `offsetHeight`, `getComputedStyle().fontSize`) au chargement, après `document.fonts.ready` et à chaque `resize`.
- Note à la main (Reenie Beanie, `beurre`) : « redimensionne ta fenêtre : tout se réajuste, comme ton futur site ».
- En bas : phrase client (22–26 px, `#C9CFEA`) + boutons « Démarrer un projet » (plein corail) et « Voir les réalisations » (contour pointillé).

### 02 · Pourquoi nexcom : le diff
- Titre « Ce qui change / *avec nous.* ».
- Un bloc façon diff de code : barre « TON-PROJET / AVANT → APRÈS » et « 4 SUPPRESSIONS · 4 AJOUTS ».
- 4 paires de lignes numérotées. Ligne `−` (fond #1A1238, signe corail, texte `ardoise` barré corail) puis ligne `+` (fond #11253A, signe `menthe`, texte Instrument Serif `craie`) :
  - − un template que 300 autres sites utilisent déjà / + un site pensé pour ton activité, et pour personne d'autre
  - − un freelance qui ne répond plus après l'acompte / + un seul interlocuteur, joignable même après la mise en ligne
  - − « le paiement mobile, on verra plus tard » / + Orange Money et Wave branchés dès le départ
  - − une maquette découverte le jour de la livraison / + une démo en ligne chaque semaine, tu ajustes en route
- Les paires apparaissent l'une après l'autre au défilement. Note : « on fusionne ? ».

### 03 · Services : les pièces
- Titre « Tu choisis / les *pièces.* ».
- 4 modules en grille (min 270 px) : Sites (fond `craie`), Apps (fond `indigo`), SaaS (fond `corail`), « Le reste. » (contour pointillé). Chacun : étiquette MODULE A–D, titre 68 px, une phrase, stack en étiquette.
- Au défilement, ils arrivent de directions différentes (translate ±160 px → 0) et s'assemblent.
- Sous-partie « + MODULE PAIEMENT » : « Et on branche *l'argent.* » avec un schéma SVG : « Ton produit » relié par trois traits corail (tracés au défilement via `stroke-dashoffset`) à Orange Money, Wave (pilules `craie`) et Carte bancaire (pilule en pointillé).

### 04 · Réalisations : déjà en ligne
- Point `menthe` clignotant « EN LIGNE ». Titre géant « Déjà en *ligne.* » (`clamp(120px, 21vw, 360px)`).
- Salonify mis en avant : capture 16/10 avec une cote « 1440 PX » au-dessus, texte à droite, lien « Voir salonify.sn → ».
- Nexpay (carte `nuit-relief`) + cadre vide en pointillé « Ton projet ? ».
- À fournir : captures réelles (celles de `apps/web/public/img` peuvent servir).

### 05 · Méthode
- « 15 » géant en corail (`clamp(220px, 34vw, 560px)`) qui compte de 1 à 15 au défilement, avec « minutes pour commencer. ».
- Une maquette de site qui se dessine trait par trait (SVG, `pathLength="1000"`, `stroke-dashoffset` lié au défilement), puis les notes à la main apparaissent.
- Les 4 étapes sur une ligne : 01 · 15 MIN Premier appel / 02 · [DÉLAI] La maquette / 03 · CHAQUE SEMAINE Une démo / 04 · LE JOUR J En ligne.

### 06 · Contact : la rencontre
- Les deux chevrons du logo, en grand (280 px), arrivent chacun d'un côté (translateX ±260 px → 0) et se rejoignent en x au défilement.
- « Et toi, c'est quoi / ton *next ?* », bouton « Envoyer un message » (lien WhatsApp pré-rempli, déjà dans `lib/site.ts`) et e-mail.

### Pied de page
« THE NEXCOM · agence de développement · Dakar, Sénégal » + LinkedIn, Instagram, GitHub, lien vers le portfolio de Mouhamed Lamotte.

## Mécanique du défilement

Chaque section porte `data-scene`. Au `scroll` (passif) et au `resize`, on calcule pour chacune une progression `p = clamp((innerHeight − rect.top) / (innerHeight × 0.85), 0, 1)`, adoucie par `1 − (1 − p)³`. Les effets lisent cette valeur (translate, opacity, stroke-dashoffset, compteur). En React : un hook `useSceneProgress(ref)` avec `requestAnimationFrame` suffit, sans bibliothèque. `prefers-reduced-motion` force `p = 1`.

## À remplir

Captures Salonify et Nexpay, e-mail, délai de la maquette, liens réseaux.

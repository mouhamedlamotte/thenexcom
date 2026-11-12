# DA nexcom · « Sur mesure »

> Référence de la direction artistique (novembre 2026). Elle remplace la DA v1 (cobalt, papier, Bricolage Grotesque) décrite dans `packages/ui/src/styles/globals.css`, qui reste en place tant que le site n'est pas migré.

La direction artistique commune de **The Nexcom**, agence de développement à Dakar, et de **Mouhamed Lamotte** (undefined.dev), le développeur qui la porte. Une seule DA pour les deux : mêmes couleurs, mêmes polices, mêmes marques graphiques. Le concept tient en deux mots : **sur mesure**. Pas de template, pas de prêt-à-l'emploi : des produits construits pour chaque client, comme on le voit dans les annotations d'une maquette ou d'un plan.

## L'histoire du nom

**Next**, comme Next.js : la génération suivante. **Com**, comme Intercom : la communication, des gens qui se parlent. Nexcom est né comme une messagerie, puis comme un écosystème (Messenger, RH, Invoice…), et c'est aujourd'hui l'agence qui construit des produits, Salonify compris.

## Le logo

`nexcom` en Instrument Serif, en minuscules. Le **x** est formé de deux chevrons corail qui se rejoignent par la pointe et se chevauchent légèrement :

- le `<` et le `>` du code ;
- deux côtés qui viennent l'un vers l'autre, comme une conversation ;
- le `>` du « suivant », le next.

La plupart des gens voient un x. Une fois qu'on leur montre les chevrons, ils ne voient plus que ça.

**Règles**
- Le x est toujours en `corail`, le reste en `encre` : `craie` sur fond `nuit`, `nuit` sur fond `craie`.
- Les chevrons font exactement la hauteur d'x de la police, collés aux lettres : jamais d'espace en plus autour.
- L'icône, ce sont les deux chevrons seuls, sur un carré `nuit` aux coins `radius-icone`. Sous 24 px, les chevrons s'épaississent un peu pour rester lisibles.
- Isolée, l'icône peut se lire comme un « fermer » : elle s'utilise à côté du nom ou comme photo de profil, pas comme bouton.
- On n'écrit jamais le logo avec la lettre x d'une police : on utilise les fichiers du groupe Logos.
- Pas de contour, pas d'ombre, pas de dégradé, pas d'autre couleur pour les chevrons.
- Animation (web) : les deux chevrons arrivent chacun de leur côté et se rejoignent pour former le x.

**Les deux signatures**
- Agence : le logo `nexcom`, avec la mention « Agence de développement · Dakar » en `etiquette`.
- Perso : « Mouhamed Lamotte », en Instrument Serif, avec « undefined.dev » en `etiquette`. Quand il faut lier les deux : `Mouhamed Lamotte >< undefined.dev` ou `Salonify >< fait par nexcom`, avec les petits chevrons corail.

## Les couleurs

On travaille surtout en sombre. La couleur vive reste rare, c'est ce qui la rend forte.

| Rôle | Token | Valeur |
|---|---|---|
| Fond | `nuit` | #0C1029 |
| Texte, marques | `craie` | #EEF1F8 |
| Aplats, blocs | `indigo` | #1F2A6B |
| Texte secondaire, cotes | `ardoise` | #8C93BF |
| Accent unique | `corail` | #F2604A |
| Notes à la main | `beurre` | #FFE7A3 |
| Tags | `menthe` | #CDEBDD |

**Dosage d'une composition** : 55 % `nuit`, 20 % `craie`, 12 % `indigo`, 6 % `ardoise`, 4 % `corail`, 2 % `beurre`, 1 % `menthe`.

- Le `corail` ne remplit jamais un fond derrière du texte long. Il sert aux chevrons, au mot fort d'un titre et aux traits d'annotation.
- La version claire existe (thème Craie) pour casser le rythme, avec la même règle : une seule couleur vive.

## La typographie

Trois mains, chacune son rôle :

- **Instrument Serif** (`display`) : les titres. Toujours grands, souvent coupés par le bord d'une affiche. Le mot qui compte en italique `corail`. Jamais en dessous de 64 px : en dessous, on passe à Hanken.
- **Hanken Grotesk** (`sans`) : le texte et les étiquettes. Les étiquettes (`etiquette`) sont toujours en MAJUSCULES, espacées de 0.16em.
- **Reenie Beanie** (`note`) : les notes à la main dans la marge. Une seule par composition, légèrement inclinée, en `beurre` sur nuit ou `corail` sur craie.

Échelle : `affiche` 280 px, `titre` 120 px, `titre-2` 64 px, `texte-grand` 22 px, `texte` 17 px, `etiquette` 13 px, `note` 36 px.

## Les marques du plan

Les annotations d'une maquette ou d'un plan de construction deviennent notre langage graphique. Elles se posent sur les images, les titres, les captures, et rendent tout reconnaissable, même sans logo.

- **Pointillé de construction** : cadres et contours en tirets `craie`, épaisseur `trait-cadre`, angles droits (`radius-0`). Un élément en pointillé est un élément en cours.
- **Repères d'alignement** : petits triangles pleins sur un bord.
- **Sens de lecture** : flèche double avec une étiquette (« HAUTEUR : AUTO », « FLUX »).
- **Cotes** : ligne avec deux butées et une mesure en vraies unités (px, jours, FCFA), en `ardoise`, épaisseur `trait-fin`.
- **Numéro de module** : « MODULE 07 · PAIEMENT », en `etiquette`, sur chaque projet, section ou affiche.
- **Repères de liaison** : cercle avec croix, pour relier deux éléments.
- **Le trait corail** : la cote ou l'annotation qui compte, comme les redlines d'un designer. Une seule par composition.
- **La trame** : motif damassé très discret en fond `nuit`, tracé en `trame`.

## Le personnage

Un jeune développeur, illustré en grain pointillé, sans accessoire, l'expression calme. Ses vêtements portent des annotations de construction en pointillé : un humain en version bêta. Il apparaît sur les affiches perso, jamais sur le logo.

- Fichier source : groupe Personnage. Sur un fond `nuit`, il se pose en mode de fusion « écran » : son fond noir disparaît et il prend la teinte de la DA.
- Toujours accompagné d'une phrase en Instrument Serif et d'une ou deux marques du plan qui commentent ce qu'il porte.

## Le ton

- Tutoiement, phrases courtes.
- Côté perso : l'autodérision de undefined.dev (« Je code des trucs qui ont l'air malins… »).
- Côté agence : le même humour, mais la phrase finit toujours sur du concret (un délai, un livrable, un prix).
- Le vocabulaire du sur mesure fait le travail : sur mesure, zéro template, version par version, en ligne.
- **Jamais de vocabulaire de couture** (tailleur, coudre, patron, retouche, fil, bouton) : nexcom est une agence de développement.

Exemples : « Du code sur mesure. », « Zéro template. », « On ne naît pas développeur. On se construit, version par version. »

## Fichiers de ce dossier

| Fichier | Contenu |
|---|---|
| `tokens.json` | Tous les tokens (couleurs en deux thèmes, typo, espacements, arrondis, traits), avec une note d'usage par token. Source de vérité. |
| `tokens.css` | Les mêmes tokens en variables CSS (`--nuit`, `--corail`, `--encre`…) et une classe par style de texte (`.titre`, `.etiquette`…). Généré depuis `tokens.json`. |
| `logo/` | Logo et icône en SVG vectorisés (texte converti en tracés) et en PNG (2400 px, 1080 px, 512/180/32/16 px). |
| `personnage/personnage.png` | L'illustration du développeur, fond noir, à poser en `mix-blend-mode: screen` sur `nuit`. |

## Polices

Auto-hébergées, comme le reste du projet (paquets `@fontsource`, chargés avec `next/font/local`, aucun appel à Google Fonts) :

- `@fontsource/instrument-serif` : 400 normal et italique (titres)
- `@fontsource/hanken-grotesk` : 400, 500, 600, 700 (texte, étiquettes)
- `@fontsource/reenie-beanie` : 400 (notes à la main)

## Références en ligne

- Canvas de la DA, des affiches et des maquettes : https://claude.ai/artifact/SHiLvjL2XkpX6BBwYGUKCa
- Design system nexcom : https://claude.ai/artifact/Feqfh9RcQkHwzE8Yx2aAKq

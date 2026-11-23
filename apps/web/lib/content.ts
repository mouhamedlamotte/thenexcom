/**
 * Textes de la landing, DA « Sur mesure » (docs/maquettes/landing-nexcom.md).
 * Tutoiement, phrases courtes, toujours une fin concrète. Aucun vocabulaire de couture.
 */

/** Section 02 : le diff avant → après. */
export const diff: { avant: string; apres: string }[] = [
  {
    avant: "un template que 300 autres sites utilisent déjà",
    apres: "un site pensé pour ton activité, et pour personne d'autre",
  },
  {
    avant: "un freelance qui ne répond plus après l'acompte",
    apres: "un seul interlocuteur, joignable même après la mise en ligne",
  },
  {
    avant: "« le paiement mobile, on verra plus tard »",
    apres: "Orange Money et Wave branchés dès le départ",
  },
  {
    avant: "une maquette découverte le jour de la livraison",
    apres: "une démo en ligne chaque semaine, tu ajustes en route",
  },
];

/** Section 03 : les modules. */
export const modules = [
  {
    lettre: "A",
    titre: "Sites",
    texte: "Vitrines, landing pages, listes d'attente. Rapides et bien référencés.",
    stack: "Next.js · SEO",
    ton: "craie",
  },
  {
    lettre: "B",
    titre: "Apps",
    texte: "Web, Android, iOS. Espaces clients et outils pour ton équipe.",
    stack: "React · Flutter",
    ton: "indigo",
  },
  {
    lettre: "C",
    titre: "SaaS",
    texte: "Abonnements, multi-clients, tableaux de bord. Comme Salonify.",
    stack: "NestJS · PostgreSQL",
    ton: "corail",
  },
  {
    lettre: "D",
    titre: "Le reste",
    texte: "Un besoin bizarre ? Tant mieux, c'est tout le principe du sur mesure.",
    stack: null,
    ton: "pointille",
  },
] as const;

/** Section 05 : les étapes. */
export const etapes = [
  { quand: "15 min", titre: "Premier appel" },
  // TODO: remplacer par le délai réel de la maquette (ex. « 1 semaine ») quand il est fixé.
  { quand: "Avant le code", titre: "La maquette" },
  { quand: "Chaque semaine", titre: "Une démo" },
  { quand: "Le jour J", titre: "En ligne" },
];

export const projets = {
  salonify: {
    module: "Module 01 · SaaS",
    nom: "Salonify",
    texte:
      "La gestion des salons de coiffure : caisse, équipe, commissions, clients. Une app web et une app mobile pro, Wave branché.",
    lien: "https://salonify.sn",
    lienTexte: "Voir salonify.sn",
    capture: { src: "/img/dashboard.webp", largeur: 1400, hauteur: 788 },
  },
  nexpay: {
    module: "Module 02 · Open source",
    nom: "Nexpay",
    texte: "Brancher le mobile money dans une app, sans y laisser sa santé.",
    lien: "https://github.com/mouhamedlamotte/nexpay",
    lienTexte: "Voir sur GitHub",
  },
};

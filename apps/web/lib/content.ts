/**
 * Textes de la landing (validée le 25/11/2026). Tutoiement, phrases courtes, aucun prix sur le site.
 * Les conditions reprises ici (essai, données exportables, paiement en deux fois, délai NexImmo) viennent
 * du devis réel NexImmo (docs/modeles/). Aucun vocabulaire de couture.
 */

export const faits = [
  { valeur: "3", texte: "produits construits et en ligne : Salonify, NexImmo, Nexpay" },
  { valeur: "15 min", texte: "pour le premier appel, gratuit, sans engagement" },
  { valeur: "1", texte: "seul interlocuteur, de la maquette à la mise en ligne" },
];

export type Expertise = {
  id: string;
  nom: string;
  texte: string;
  livrables: string[];
  visuel: "site" | "logiciel" | "paiement" | "design" | "suivi";
};

export const expertises: Expertise[] = [
  {
    id: "web",
    nom: "Sites et applications web",
    texte:
      "Des sites rapides, bien référencés, qui donnent envie de te contacter. Et des applications web pour tes clients ou ton équipe.",
    livrables: ["Sites vitrines et landing pages", "Espaces clients, réservations, commandes", "Référencement local et fiche Google"],
    visuel: "site",
  },
  {
    id: "logiciels",
    nom: "Logiciels de gestion et SaaS",
    texte:
      "On remplace le cahier, l'Excel et les calculs à la main par un outil pensé pour ton métier. Ou on adapte un de nos produits.",
    livrables: ["Caisse, stock, loyers, factures, équipe", "Applications mobiles Android et iOS", "Nos produits : Salonify, NexImmo"],
    visuel: "logiciel",
  },
  {
    id: "paiement",
    nom: "Paiement mobile et automatisations",
    texte:
      "Wave, Orange Money et carte branchés dès le premier jour. Les rappels, relances et confirmations partent seuls sur WhatsApp.",
    livrables: ["Paiement en ligne, lien ou QR code", "Rappels et relances WhatsApp automatiques", "Assistant IA pour les questions fréquentes"],
    visuel: "paiement",
  },
  {
    id: "design",
    nom: "Design d'interface et identité",
    texte:
      "Tu vois ton produit avant qu'une ligne de code soit écrite. Maquettes, parcours, et une identité qui tient sur tous les écrans.",
    livrables: ["Maquettes et prototypes cliquables", "Logo, couleurs, typographie", "Design system pour ton équipe"],
    visuel: "design",
  },
  {
    id: "suivi",
    nom: "Hébergement, suivi et formation",
    texte:
      "Après la mise en ligne, on reste. Serveur, sauvegardes, corrections, assistance sur WhatsApp, et on forme ton équipe à l'outil.",
    livrables: ["Hébergement, nom de domaine, sauvegardes", "Corrections et assistance WhatsApp", "Audit de tes outils et formation"],
    visuel: "suivi",
  },
];

export type Projet = {
  id: "salonify" | "neximmo" | "nexpay";
  nom: string;
  meta: string;
  texte: string;
  tags: string[];
  lien?: { href: string; texte: string };
};

export const projets: Projet[] = [
  {
    id: "salonify",
    nom: "Salonify",
    meta: "SaaS · salons de coiffure · en ligne",
    texte:
      "Les salons tenaient leur caisse et leur équipe dans un cahier. Salonify met tout dans une app mobile pour l'équipe et un tableau de bord pour le gérant, avec la part de chaque coiffeur calculée toute seule.",
    tags: ["App mobile", "Tableau de bord web", "Wave · Orange Money", "Abonnements"],
    lien: { href: "https://salonify.sn", texte: "salonify.sn" },
  },
  {
    id: "neximmo",
    nom: "NexImmo",
    meta: "Gestion locative · en essai",
    texte:
      "Pour une propriétaire qui gérait son immeuble à la main : qui a payé, qui est en retard, les contrats, les reçus, et les rappels qui partent seuls sur WhatsApp.",
    tags: ["Loyers et reçus", "Contrats de bail", "Rappels WhatsApp", "Reprise de l'Excel"],
  },
  {
    id: "nexpay",
    nom: "Nexpay",
    meta: "API de paiement · open source",
    texte:
      "Brancher le mobile money dans une app, sans y laisser sa santé. Une seule API pour Wave, Orange Money et la suite, celle qu'on utilise dans nos propres produits.",
    tags: ["API", "Wave", "Orange Money", "Open source"],
    lien: { href: "https://github.com/mouhamedlamotte/nexpay", texte: "Voir sur GitHub" },
  },
];

// TODO: remplacer « Avant le code » par le délai réel de la maquette quand il est fixé.
export const etapes = [
  { quand: "15 minutes", titre: "Le premier appel", texte: "Gratuit. Tu racontes ton activité, on pose les bonnes questions." },
  { quand: "Avant le code", titre: "La maquette", texte: "Tu vois ton produit écran par écran, et le devis est fixé par écrit." },
  { quand: "Chaque semaine", titre: "Les démos", texte: "Une version en ligne à tester. Tu ajustes en route, pas à la fin." },
  { quand: "Le jour J", titre: "En ligne, et suivi", texte: "Hébergé, sauvegardé, et on reste joignable sur WhatsApp après." },
];

export const engagements = [
  { titre: "Tu essaies d'abord", texte: "Avec tes vraies données, avant de décider de continuer." },
  { titre: "Tes données sont à toi", texte: "Récupérables en Excel à tout moment, même si tu arrêtes." },
  { titre: "Un seul interlocuteur", texte: "Le même du premier appel jusqu'après la mise en ligne." },
  { titre: "Zéro template", texte: "Chaque écran est pensé pour ton activité." },
];

export const faq = [
  {
    q: "Combien de temps pour être en ligne ?",
    r: "Le délai est écrit dans le devis, module par module. Pour une app de gestion comme NexImmo, compte environ trois semaines après la signature.",
  },
  {
    q: "Je peux essayer avant de m'engager ?",
    r: "Oui. Tu utilises ton outil avec tes vraies données pendant l'essai, puis tu décides de continuer ou non.",
  },
  {
    q: "Comment se passe le paiement ?",
    r: "En deux fois : une partie à la signature, le solde à la livraison. Par Wave, Orange Money, virement ou espèces, toujours contre reçu.",
  },
  { q: "Mes données m'appartiennent ?", r: "Oui. Tu peux les récupérer en Excel à tout moment, y compris si tu arrêtes." },
  {
    q: "Et après la mise en ligne ?",
    r: "On héberge, on sauvegarde, on corrige et on répond sur WhatsApp. Les petits réglages sont inclus, les nouvelles fonctions passent par un devis.",
  },
  { q: "Vous travaillez hors de Dakar ?", r: "Oui. Les appels et les démos se font en ligne, partout au Sénégal et ailleurs." },
];

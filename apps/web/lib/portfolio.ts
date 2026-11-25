/**
 * Contenu du portfolio de Mouhamed Lamotte (/mouhamed-lamotte).
 * Données reprises de l'ancien portfolio (github.com/mouhamedlamotte/portfolio), réécrites au tutoiement court.
 */

const IMG = "/img/portfolio";

export const portfolio = {
  nom: "Mouhamed Lamotte",
  pseudo: "undefined.dev",
  email: "mouhamedlamotte.dev@gmail.com",
  reseaux: [
    { nom: "GitHub", label: "mouhamedlamotte", href: "https://github.com/mouhamedlamotte" },
    { nom: "LinkedIn", label: "Mouhamed Lamotte", href: "https://www.linkedin.com/in/mouhamed-baba-lamotte-876291252/" },
    { nom: "X", label: "@undefinedxdev", href: "https://x.com/undefinedxdev" },
    { nom: "Instagram", label: "undefined.dev_", href: "https://instagram.com/undefined.dev_" },
  ],
} as const;

/** Les sections, dans l'ordre : le menu et l'île s'en servent. */
export const sectionsPortfolio = [
  { id: "accueil", titre: "Accueil", court: "Accueil" },
  { id: "projets", titre: "Projets", court: "Projets" },
  { id: "autres", titre: "Autres projets", court: "Le reste" },
  { id: "stack", titre: "Stack", court: "Stack" },
  { id: "parcours", titre: "Parcours", court: "Parcours" },
  { id: "contact", titre: "Contact", court: "Contact" },
] as const;

export type Lien = { texte: string; href: string };
export type AutreProjet = { annee: string; nom: string; quoi: string; image?: string; liens: Lien[] };

/** « Et tout le reste » : un index, l'écran du projet suit la souris. */
export const autresProjets: AutreProjet[] = [
  {
    annee: "2024",
    nom: "NexCom, l'écosystème",
    quoi: "Un hub SaaS modulaire : facturation, RH, inventaire, messagerie.",
    image: `${IMG}/projets/nexcom.webp`,
    liens: [{ texte: "Site", href: "https://thenexcom.com" }],
  },
  {
    annee: "2024",
    nom: "Windam pro",
    quoi: "Messagerie en temps réel, amis, fil d'actualité. Django Channels, Next.js.",
    image: `${IMG}/projets/windam.webp`,
    liens: [
      { texte: "App", href: "https://windampro.vercel.app/" },
      { texte: "Code", href: "https://github.com/mouhamedlamotte/windam-v2-frontend" },
    ],
  },
  {
    annee: "2024",
    nom: "MySubito app",
    quoi: "Refonte mobile de Subito : réservation de voitures en React Native.",
    image: `${IMG}/projets/subitoapp.webp`,
    liens: [{ texte: "Code", href: "https://github.com/mouhamedlamotte/mysubito/" }],
  },
  {
    annee: "2024",
    nom: "MySubito business",
    quoi: "Le front de la plateforme entreprises : réservations, tableaux de bord.",
    image: `${IMG}/projets/mysubitob.webp`,
    liens: [],
  },
  {
    annee: "2024",
    nom: "Moteur d'indexation",
    quoi: "Recherche et visualisation de données avec Elasticsearch et Kibana.",
    liens: [{ texte: "Code", href: "https://github.com/mouhamedlamotte/search_engine" }],
  },
  {
    annee: "2024",
    nom: "ODC Inside",
    quoi: "Tirage au sort des apprenants et annuaire des alumni de Sonatel Academy.",
    image: `${IMG}/projets/odc-inside.webp`,
    liens: [
      { texte: "Démo", href: "https://odc-dev-data.vercel.app/" },
      { texte: "Code", href: "https://github.com/mouhamedlamotte/odc-dev-data" },
    ],
  },
  {
    annee: "2024",
    nom: "Biblioloan",
    quoi: "Gestion des prêts pour les bibliothèques. Flask, Next.js.",
    image: `${IMG}/projets/biblio.webp`,
    liens: [{ texte: "Code", href: "https://github.com/mouhamedlamotte/biblio" }],
  },
  {
    annee: "2024",
    nom: "PromptMaster",
    quoi: "API REST Flask : rôles, prompts, votes et notations.",
    image: `${IMG}/projets/promptmaster.webp`,
    liens: [{ texte: "Code", href: "https://github.com/mouhamedlamotte/api-prompt" }],
  },
  {
    annee: "2024",
    nom: "Gestion de fichiers",
    quoi: "Conversion JSON, YAML, XLSX, CSV, en desktop et sur le web.",
    image: `${IMG}/projets/gestion-fichier.webp`,
    liens: [{ texte: "Code", href: "https://github.com/mouhamedlamotte/gestion_fichier" }],
  },
  {
    annee: "2024",
    nom: "Aora",
    quoi: "Partage de vidéos sur mobile. React Native, Appwrite.",
    image: `${IMG}/projets/aora.webp`,
    liens: [{ texte: "Code", href: "https://github.com/mouhamedlamotte/aora" }],
  },
  {
    annee: "2024",
    nom: "Jolof Taxi",
    quoi: "La landing page, rapide et pensée pour le mobile.",
    image: `${IMG}/projets/jolof-taxi.webp`,
    liens: [],
  },
  {
    annee: "2024",
    nom: "Intégrations",
    quoi: "MySubito, Organick, Golio, Bella Ojene : des maquettes reproduites au pixel.",
    image: `${IMG}/projets/subito-web-clone.webp`,
    liens: [
      { texte: "Organick", href: "https://organick-v2.vercel.app/" },
      { texte: "Golio", href: "https://golio.vercel.app/" },
    ],
  },
  {
    annee: "2023",
    nom: "Windam Chat V1",
    quoi: "Ma première messagerie, pour apprendre React, Next.js et Firebase.",
    liens: [{ texte: "App", href: "https://windam.vercel.app/" }],
  },
];

export const stack = [
  { titre: "Front", outils: ["Next.js", "React", "React Native", "Tailwind CSS"] },
  { titre: "Back", outils: ["NestJS", "Django REST", "Flask", "RabbitMQ"] },
  { titre: "Données", outils: ["PostgreSQL", "MongoDB · Redis", "Elasticsearch", "Kibana"] },
  { titre: "Outils", outils: ["Docker", "Firebase", "Git", "Python · VBA"] },
] as const;

export type Etape = {
  /** Date affichée dans la liste. */
  date: string;
  /** Date courte, en grand dans la fiche collée. */
  quand: string;
  titre: string;
  texte: string;
  qui: string;
  role: string;
  type: "Expérience" | "Formation";
  tech: string;
  /** Sans logo : les chevrons nexcom. */
  logo?: string;
};

/** Le parcours, du plus récent au plus ancien. */
export const parcours: Etape[] = [
  {
    date: "Aujourd'hui",
    quand: "Aujourd'hui",
    titre: "The Nexcom · fondateur",
    texte: "Une agence de développement à Dakar. Salonify en ligne, NexImmo en essai, Nexpay en open source.",
    qui: "The Nexcom",
    role: "Fondateur",
    type: "Expérience",
    tech: "Next.js · NestJS · PostgreSQL · Flutter",
  },
  {
    date: "Nov. 2024 → Août 2025",
    quand: "2024 → 2025",
    titre: "Jolof Mobility · data engineer et full stack",
    texte: "La gouvernance de données, une plateforme de crowdfunding avec Next.js et Prisma, des microservices NestJS.",
    qui: "Jolof Mobility",
    role: "Data engineer et full stack",
    type: "Expérience",
    tech: "Next.js · Prisma · NestJS",
  },
  {
    date: "Nov. 2024 → Juin 2025",
    quand: "2024 → 2025",
    titre: "Groupe Sonatel · stage data engineering",
    texte:
      "L'optimisation des systèmes qualité : collecte et analyse en temps réel avec StreamSets et ELK, pipelines en Python et VBA, rapports pour la décision.",
    qui: "Groupe Sonatel",
    role: "Stagiaire en data engineering",
    type: "Expérience",
    tech: "Kibana · Elasticsearch · StreamSets · Python · VBA",
    logo: `${IMG}/logos/sonatel.webp`,
  },
  {
    date: "Août 2024",
    quand: "Août 2024",
    titre: "Jolof Taxi · intégrateur web",
    texte: "La landing page : simple, réactive, optimisée pour une navigation fluide.",
    qui: "Jolof Taxi",
    role: "Intégrateur web, freelance",
    type: "Expérience",
    tech: "Next.js · Firebase · Tailwind CSS · Vercel",
    logo: `${IMG}/logos/jolof.svg`,
  },
  {
    date: "Avril 2024",
    quand: "Avril 2024",
    titre: "Subito International · front-end",
    texte:
      "La plateforme entreprises de réservation de voitures : authentification, réservations, tableaux de bord et graphiques de suivi.",
    qui: "Subito International",
    role: "Développeur front-end, freelance",
    type: "Expérience",
    tech: "Next.js · Tailwind CSS · Shadcn UI",
    logo: `${IMG}/logos/subito.webp`,
  },
  {
    date: "2024",
    quand: "2024",
    titre: "Sonatel Academy · développeur data",
    texte: "Une formation intensive, au plus près du terrain : développement et analyse de données.",
    qui: "Sonatel Academy",
    role: "Certification développeur data",
    type: "Formation",
    tech: "Django · Elasticsearch · Kibana · Next.js · MongoDB · Redis",
    logo: `${IMG}/logos/sa.webp`,
  },
  {
    date: "2023",
    quand: "2023",
    titre: "UCAD · licence",
    texte: "Interrompue par les manifestations de la présidentielle. C'est ce qui m'a poussé vers Sonatel Academy.",
    qui: "Université Cheikh Anta Diop",
    role: "Licence, non terminée",
    type: "Formation",
    tech: "",
    logo: `${IMG}/logos/ucad.webp`,
  },
  {
    date: "Juillet 2022",
    quand: "Juillet 2022",
    titre: "Santé de Cœur · le déclic",
    texte: "Paiement en ligne avec PayTech, une plateforme de dons et la gestion des campagnes de santé, en Django.",
    qui: "Santé de Cœur",
    role: "Développeur web et backend",
    type: "Expérience",
    tech: "Django · PayTech · PostgreSQL · Firestore",
    logo: `${IMG}/logos/sdc.webp`,
  },
  {
    date: "2022",
    quand: "2022",
    titre: "Lycée de Pété · bac S2",
    texte: "Sciences expérimentales. Le début de tout.",
    qui: "Lycée de Pété",
    role: "Baccalauréat S2",
    type: "Formation",
    tech: "",
    logo: `${IMG}/logos/default.webp`,
  },
];

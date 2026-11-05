/** Textes du site. Vouvoiement, phrases courtes, on parle de ce qui est livré. */

export type ServiceIcon = "web" | "mobile" | "software" | "payments" | "cloud" | "support";

export const services: { icon: ServiceIcon; title: string; text: string }[] = [
  {
    icon: "web",
    title: "Sites et applications web",
    text: "Sites vitrines, plateformes, espaces clients et back-offices.",
  },
  {
    icon: "mobile",
    title: "Applications mobiles",
    text: "Applications Android et iOS, publiées sur les stores.",
  },
  {
    icon: "software",
    title: "Logiciels sur mesure",
    text: "Outils de gestion et SaaS adaptés à votre activité.",
  },
  {
    icon: "payments",
    title: "Paiements en ligne",
    text: "Intégration de Wave, Orange Money et carte bancaire.",
  },
  {
    icon: "cloud",
    title: "Hébergement et cloud",
    text: "Serveurs, noms de domaine, déploiement et sauvegardes.",
  },
  {
    icon: "support",
    title: "Maintenance et conseil",
    text: "Suivi, évolutions, support et accompagnement.",
  },
];

export const pillars = [
  { title: "Notre mission", text: "Rendre le numérique utile et accessible aux entreprises d'ici." },
  { title: "Notre force", text: "Concevoir, coder, héberger et maintenir : tout sous un même toit." },
  {
    title: "Notre terrain",
    text: "Le Sénégal, ses usages et ses moyens de paiement : Wave, Orange Money, carte.",
  },
];

export const steps = [
  { title: "Écoute", text: "Nous comprenons votre activité, votre besoin et vos contraintes." },
  { title: "Devis", text: "Périmètre, délais et prix fixés par écrit avant de commencer." },
  { title: "Conception", text: "Maquettes des écrans, validées avec vous." },
  { title: "Développement", text: "Livraisons régulières, testées à chaque étape." },
  { title: "Mise en ligne", text: "Déploiement, hébergement, puis suivi et maintenance." },
];

export const salonifySteps = [
  {
    title: "La prestation est saisie",
    image: "/img/ecran-accueil.webp",
    alt: "Saisie des prestations dans Salonify Pro",
  },
  {
    title: "La caisse se met à jour",
    image: "/img/ecran-caisse.webp",
    alt: "Caisse du jour dans Salonify Pro",
  },
  {
    title: "Les parts de l'équipe sont prêtes",
    image: "/img/ecran-equipe.webp",
    alt: "Gestion de l'équipe dans Salonify Pro",
  },
];

export const salonifyFeatures = [
  "Caisse par moyen de paiement",
  "Équipe, commissions et règlements",
  "Agenda, clients et réservation en ligne",
  "Abonnement payé en Wave, Orange Money ou carte",
];

export const nexpayFeatures = [
  "API REST",
  "Webhooks sécurisés",
  "Tableau de bord",
  "Mode test",
  "Auto-hébergé",
];

export const stack = ["Next.js", "React", "NestJS", "Flutter", "PostgreSQL", "Redis", "Docker", "Terraform"];

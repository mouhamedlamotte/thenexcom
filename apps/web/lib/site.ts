/** Coordonnées et réglages du site. Une seule source pour l'en-tête, le pied de page et les métadonnées. */
export const site = {
  name: "The Nexcom",
  tagline: "Du code sur mesure.",
  description:
    "Agence de développement à Dakar. Sites, apps et SaaS construits pour ton activité, pas copiés d'un template, avec Orange Money, Wave et carte déjà branchés.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://thenexcom.com",
  email: "contact@thenexcom.com",
  phone: "+221 76 402 93 50",
  phoneHref: "tel:+221764029350",
  whatsapp: "https://wa.me/221764029350",
  city: "Dakar, Sénégal",
  github: "https://github.com/mouhamedlamotte",
  /** Identité légale : à reprendre sur les devis, factures et mentions légales. */
  legal: {
    name: "The Nexcom",
    form: "Entreprise individuelle",
    owner: "Mouhamed Lamotte",
    rccm: "SN.DKR.2026.A.40513",
    ninea: "013460514",
  },
} as const;

/** Sections de la landing : rail de navigation (toutes) et en-tête (celles marquées `header`). */
export const sections = [
  { id: "accueil", label: "Accueil", header: false },
  { id: "pourquoi", label: "Pourquoi", header: "Pourquoi nous" },
  { id: "services", label: "Services", header: "Services" },
  { id: "realisations", label: "Réalisations", header: "Réalisations" },
  { id: "methode", label: "Méthode", header: "Méthode" },
  { id: "contact", label: "Contact", header: false },
] as const;

export const quoteMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Un projet",
)}&body=${encodeURIComponent(
  "Salut nexcom,\n\nMon activité :\nCe que je veux construire (site, app, SaaS, paiements) :\nPour quand :\n\nMerci !",
)}`;

export const whatsappQuote = `${site.whatsapp}?text=${encodeURIComponent(
  "Salut nexcom, j'ai un projet dont j'aimerais te parler.",
)}`;

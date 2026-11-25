/** Coordonnées et réglages du site. Une seule source pour l'en-tête, le pied de page et les métadonnées. */
export const site = {
  name: "The Nexcom",
  tagline: "On construit le next de ton entreprise.",
  description:
    "Agence de développement à Dakar. Sites, apps et logiciels sur mesure, avec Wave et Orange Money intégrés, conçus pour faire tourner ton activité.",
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

/** Liens de l'en-tête. */
export const nav = [
  { href: "#accueil", label: "Accueil" },
  { href: "#expertises", label: "Expertises" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#methode", label: "Méthode" },
  { href: "#contact", label: "Contact" },
] as const;

export const quoteMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Un projet",
)}&body=${encodeURIComponent(
  "Salut nexcom,\n\nMon activité :\nCe que je veux construire (site, app, SaaS, paiements) :\nPour quand :\n\nMerci !",
)}`;

export const whatsappQuote = `${site.whatsapp}?text=${encodeURIComponent(
  "Salut nexcom, j'ai un projet dont j'aimerais te parler.",
)}`;

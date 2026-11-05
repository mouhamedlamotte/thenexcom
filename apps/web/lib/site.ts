/** Coordonnées et réglages du site. Une seule source pour l'en-tête, le pied de page et les métadonnées. */
export const site = {
  name: "The Nexcom",
  tagline: "Des solutions numériques qui tournent pour de vrai.",
  description:
    "The Nexcom conçoit, développe et héberge des sites, applications et logiciels pour les entreprises du Sénégal, et intègre les paiements Wave, Orange Money et carte.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://thenexcom.com",
  email: "contact@thenexcom.com",
  phone: "+221 76 402 93 50",
  phoneHref: "tel:+221764029350",
  whatsapp: "https://wa.me/221764029350",
  city: "Dakar, Sénégal",
} as const;

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#methode", label: "Méthode" },
  { href: "#contact", label: "Contact" },
] as const;

export const quoteMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Demande de devis",
)}&body=${encodeURIComponent(
  "Bonjour The Nexcom,\n\nVotre entreprise :\nVotre projet (site, application, logiciel, paiements) :\nVotre délai souhaité :\n\nMerci !",
)}`;

export const whatsappQuote = `${site.whatsapp}?text=${encodeURIComponent(
  "Bonjour The Nexcom, j'aimerais parler d'un projet.",
)}`;

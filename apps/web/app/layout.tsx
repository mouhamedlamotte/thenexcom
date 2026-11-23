import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

// Polices auto-hébergées (paquets @fontsource) : aucun appel à Google Fonts au build ni chez le visiteur.
// DA « Sur mesure » (docs/da/README.md) : Instrument Serif pour les titres, Hanken Grotesk pour le texte,
// Reenie Beanie pour les notes à la main.
const instrumentSerif = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

const hankenGrotesk = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/hanken-grotesk/files/hanken-grotesk-latin-400-normal.woff2",
      weight: "400",
    },
    {
      path: "../node_modules/@fontsource/hanken-grotesk/files/hanken-grotesk-latin-500-normal.woff2",
      weight: "500",
    },
    {
      path: "../node_modules/@fontsource/hanken-grotesk/files/hanken-grotesk-latin-600-normal.woff2",
      weight: "600",
    },
    {
      path: "../node_modules/@fontsource/hanken-grotesk/files/hanken-grotesk-latin-700-normal.woff2",
      weight: "700",
    },
  ],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const reenieBeanie = localFont({
  src: "../node_modules/@fontsource/reenie-beanie/files/reenie-beanie-latin-400-normal.woff2",
  weight: "400",
  variable: "--font-reenie-beanie",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Solutions informatiques à Dakar`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "fr_SN",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0C1029",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${instrumentSerif.variable} ${hankenGrotesk.variable} ${reenieBeanie.variable}`}>
      <body>{children}</body>
    </html>
  );
}

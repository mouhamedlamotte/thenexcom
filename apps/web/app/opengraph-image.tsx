import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/* Image de partage, générée au build avec les polices de la DA (fichiers woff de @fontsource). */

export const alt = `${site.name} — Du code sur mesure.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const police = (fichier: string) => readFile(join(process.cwd(), "node_modules/@fontsource", fichier));

export default async function Image() {
  const [serif, serifItalique, hanken, logoSvg] = await Promise.all([
    police("instrument-serif/files/instrument-serif-latin-400-normal.woff"),
    police("instrument-serif/files/instrument-serif-latin-400-italic.woff"),
    police("hanken-grotesk/files/hanken-grotesk-latin-700-normal.woff"),
    // Logo complet (les chevrons seuls se liraient comme un « fermer »).
    readFile(join(process.cwd(), "app/_og/nexcom-logo.svg"), "utf8"), // copie de docs/da/logo/nexcom-logo-fond-sombre.svg,
  ]);
  const logo = `data:image/svg+xml;utf8,${encodeURIComponent(logoSvg)}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0C1029",
        color: "#EEF1F8",
        padding: "64px 72px",
        fontFamily: "Hanken",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: 18, letterSpacing: "0.16em", color: "#8C93BF" }}>
          AGENCE DE DÉVELOPPEMENT · DAKAR
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={201} height={90} alt="" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Instrument Serif",
          fontSize: 168,
          lineHeight: 0.84,
          letterSpacing: "-0.04em",
          padding: "20px 24px",
          border: "2px dashed #2E3A8A",
        }}
      >
        <span>Du code</span>
        <span style={{ fontStyle: "italic", color: "#F2604A" }}>sur mesure.</span>
      </div>

      <div
        style={{ display: "flex", justifyContent: "space-between", fontSize: 18, letterSpacing: "0.16em" }}
      >
        <span style={{ color: "#8C93BF" }}>SITES · APPS · SAAS · ORANGE MONEY · WAVE</span>
        <span style={{ color: "#CDEBDD" }}>TEMPLATE : AUCUN</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: serifItalique, style: "italic", weight: 400 },
        { name: "Hanken", data: hanken, style: "normal", weight: 700 },
      ],
    },
  );
}

import { cn } from "@repo/ui/lib/cn";
import { modules } from "@/lib/content";
import { SectionLabel } from "./section-label";

type Ton = (typeof modules)[number]["ton"];

/** Fond et couleurs de chaque module (contrastes vérifiés : nuit sur craie et sur corail ≥ 5,8:1). */
const tons: Record<Ton, { carte: string; doux: string; stack: string }> = {
  craie: { carte: "bg-craie text-nuit", doux: "", stack: "text-indigo-clair" },
  indigo: { carte: "bg-indigo text-craie", doux: "text-[#C9CFEA]", stack: "text-ardoise" },
  corail: { carte: "bg-corail text-nuit", doux: "", stack: "" },
  pointille: {
    carte: "border-[3px] border-dashed border-ardoise text-craie",
    doux: "text-[#C9CFEA]",
    stack: "",
  },
};

/** D'où arrive chaque module avant de s'assembler (px). */
const departs = [
  [-160, 60],
  [0, 160],
  [160, -60],
  [0, -160],
];

/** 03 · Services : les pièces qui s'assemblent, puis le module paiement. */
export function Services() {
  return (
    <section
      id="services"
      data-scene
      className="relative overflow-x-clip border-t-[1.5px] border-dashed border-ligne pt-[110px] pb-[90px]"
    >
      <SectionLabel>03 · Ce qu'on construit</SectionLabel>
      <h2 className="titre-section mt-5 mb-14">
        Tu choisis
        <br />
        les <em className="text-corail">pièces.</em>
      </h2>

      <ul className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-3.5">
        {modules.map((m, i) => {
          const t = tons[m.ton];
          const [dx, dy] = departs[i]!;
          return (
            <li
              key={m.lettre}
              className={cn("module mv flex min-h-[300px] flex-col justify-between p-[30px]", t.carte)}
              style={{ "--dx": `${dx}px`, "--dy": `${dy}px` } as React.CSSProperties}
            >
              <p
                className={cn(
                  "text-[11px] font-bold tracking-[0.16em] uppercase",
                  m.ton === "pointille" && "text-ardoise",
                  m.ton === "indigo" && "text-[#C9CFEA]",
                )}
              >
                Module {m.lettre}
              </p>
              <div>
                <h3 className="font-display text-[68px] leading-[0.9]">
                  {m.titre}
                  <span className={m.ton === "pointille" ? "text-corail" : undefined}>.</span>
                </h3>
                <p className={cn("mt-2.5 text-[15px] leading-[1.5]", t.doux)}>{m.texte}</p>
                {m.stack && (
                  <p className={cn("mt-3.5 text-[11px] font-bold tracking-[0.14em] uppercase", t.stack)}>
                    {m.stack}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-[72px] flex flex-wrap items-center gap-x-14 gap-y-8">
        <div className="flex flex-[1_1_380px] flex-col gap-4">
          <p className="text-[12px] font-bold tracking-[0.16em] text-corail uppercase">
            + Module paiement, dans tout ce qui précède
          </p>
          <h3 className="font-display text-[clamp(64px,5.4vw,92px)] leading-[0.9] tracking-[-0.03em]">
            Et on branche <em className="text-corail">l'argent.</em>
          </h3>
          <p className="text-[18px] leading-[1.55] text-[#C9CFEA]">
            Tes clients paient comme ils veulent. Toi, tu reçois. C'est tout ce qu'il y a à savoir.
          </p>
        </div>

        <svg
          role="img"
          aria-label="Ton produit relié à Orange Money, Wave et la carte bancaire"
          viewBox="0 0 800 300"
          className="block min-w-0 flex-[999_1_520px]"
        >
          <rect
            x="2"
            y="95"
            width="230"
            height="110"
            className="fill-nuit-relief stroke-craie"
            strokeWidth="3"
          />
          <text x="117" y="160" textAnchor="middle" className="fill-craie font-display" fontSize="38">
            Ton produit
          </text>
          <g fill="none" className="stroke-corail" strokeWidth="4">
            <path className="trace mv" pathLength={1000} d="M232 150 C380 150 380 40 520 40" />
            <path className="trace mv" pathLength={1000} d="M232 150 H520" />
            <path className="trace mv" pathLength={1000} d="M232 150 C380 150 380 260 520 260" />
          </g>
          <g className="apparait-milieu mv font-display" fontSize="34">
            <rect x="520" y="8" width="276" height="64" rx="32" className="fill-craie" />
            <text x="658" y="51" textAnchor="middle" className="fill-nuit">
              Orange Money
            </text>
            <rect x="520" y="118" width="276" height="64" rx="32" className="fill-craie" />
            <text x="658" y="161" textAnchor="middle" className="fill-nuit">
              Wave
            </text>
            <rect
              x="520"
              y="228"
              width="276"
              height="64"
              rx="32"
              fill="none"
              className="stroke-craie"
              strokeWidth="3"
              strokeDasharray="12 9"
            />
            <text x="658" y="271" textAnchor="middle" className="fill-craie">
              Carte bancaire
            </text>
          </g>
        </svg>
      </div>
    </section>
  );
}

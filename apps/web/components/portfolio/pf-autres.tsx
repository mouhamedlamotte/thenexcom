"use client";

import { useEffect, useRef, useState } from "react";
import { autresProjets } from "@/lib/portfolio";
import { cl } from "./outils";

/** « Et tout le reste » : un index des autres projets ; sur ordinateur, l'écran du projet suit la souris. */
export function PfAutres() {
  const apercu = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!src || !window.matchMedia("(hover: hover)").matches) return;
    const img = apercu.current;
    const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const suit = (e: PointerEvent) => {
      if (!img) return;
      const x = Math.min(e.clientX + 28, window.innerWidth - 340);
      const y = Math.max(20, Math.min(e.clientY - 90, window.innerHeight - img.offsetHeight - 20));
      img.style.transform = `translate(${x}px, ${y}px)${reduit ? "" : " rotate(-2deg)"}`;
    };
    window.addEventListener("pointermove", suit, { passive: true });
    return () => window.removeEventListener("pointermove", suit);
  }, [src]);

  return (
    <section id="autres" className={cl("autres")} data-titre="Autres projets">
      <div className={cl("c")}>
        <div className={cl("tete")}>
          <h2 className={cl("d titre-sec")}>
            Et tout <em>le reste.</em>
          </h2>
          <p>De l&apos;open source, des projets de cours, des intégrations. Passe la souris pour voir l&apos;écran.</p>
        </div>
        <ul className={cl("index")}>
          {autresProjets.map((p) => (
            <li
              key={p.nom}
              onPointerEnter={(e) => e.pointerType === "mouse" && setSrc(p.image ?? null)}
              onPointerLeave={() => setSrc(null)}
            >
              <span className={cl("an")}>{p.annee}</span>
              <span className={cl("nom-p")}>{p.nom}</span>
              <span className={cl("quoi")}>{p.quoi}</span>
              <span className={cl("liens-p")}>
                {p.liens.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener">
                    {l.texte}
                  </a>
                ))}
              </span>
            </li>
          ))}
        </ul>
        {/* eslint-disable-next-line @next/next/no-img-element -- aperçu décoratif qui change de source au survol */}
        <img ref={apercu} className={cl("apercu", src && "on")} src={src ?? undefined} alt="" aria-hidden />
      </div>
    </section>
  );
}

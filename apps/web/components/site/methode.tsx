"use client";

import { useEffect, useRef } from "react";
import { engagements, etapes } from "@/lib/content";

/**
 * La méthode en vraie timeline : la ligne corail se remplit au fil du défilement (sans rien épingler),
 * chaque étape s'allume quand la ligne l'atteint, son moment reste collé à gauche pendant qu'on lit.
 */
export function Methode() {
  const tl = useRef<HTMLDivElement>(null);
  const rempli = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tl.current;
    const barre = rempli.current;
    if (!el || !barre) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>(".tl-item"));
    let raf = 0;
    const maj = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const repere = window.innerHeight * 0.55;
      barre.style.height = `${Math.max(0, Math.min(r.height, repere - r.top))}px`;
      for (const it of items) {
        const pt = it.querySelector(".tl-pt")?.getBoundingClientRect();
        if (pt) it.classList.toggle("passe", pt.top + pt.height / 2 <= repere);
      }
    };
    const demander = () => {
      if (!raf) raf = requestAnimationFrame(maj);
    };
    maj();
    window.addEventListener("scroll", demander, { passive: true });
    window.addEventListener("resize", demander);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", demander);
      window.removeEventListener("resize", demander);
    };
  }, []);

  return (
    <section id="methode" className="methode" data-titre="Méthode">
      <div className="c">
        <div className="tete-sec">
          <div>
            <p className="ey">La méthode</p>
            <h2 className="titre-sec">
              De l&apos;idée à la mise en ligne, <em className="s">sans surprise.</em>
            </h2>
          </div>
          <p className="intro">Quatre étapes, toujours dans cet ordre. Tu sais à chaque moment où on en est.</p>
        </div>
        <div ref={tl} className="tl">
          <div className="tl-rail" aria-hidden>
            <div ref={rempli} className="tl-rempli" />
          </div>
          <ol>
            {etapes.map((e) => (
              <li key={e.titre} className="tl-item">
                <div className="tl-quand">
                  <span className="tl-pt" aria-hidden>
                    <i />
                  </span>
                  <span className="tl-moment">{e.quand}</span>
                </div>
                <div className="tl-contenu">
                  <h3>{e.titre}</h3>
                  <p>{e.texte}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="engagements">
          {engagements.map((e) => (
            <div key={e.titre}>
              <b>{e.titre}</b>
              <span>{e.texte}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

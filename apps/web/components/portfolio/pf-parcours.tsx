"use client";

import { useEffect, useRef, useState } from "react";
import { parcours } from "@/lib/portfolio";
import { Chevrons, cl } from "./outils";

const deux = (n: number) => String(n).padStart(2, "0");

/**
 * Le parcours en vraie timeline, sans rien épingler : la liste défile, la ligne corail se remplit au fil
 * du défilement, chaque étape s'allume quand la ligne l'atteint, et la fiche collée à droite montre l'étape
 * en cours (logo, date, rôle, technos). Sur téléphone, la fiche disparaît et la liste reste lisible seule.
 */
export function PfParcours() {
  const liste = useRef<HTMLOListElement>(null);
  const rempli = useRef<HTMLDivElement>(null);
  const [actif, setActif] = useState(0);
  const [passes, setPasses] = useState(0);
  const [affiche, setAffiche] = useState(0);
  const [chg, setChg] = useState(false);

  useEffect(() => {
    const ol = liste.current;
    const barre = rempli.current;
    if (!ol || !barre) return;
    const points = Array.from(ol.querySelectorAll<HTMLElement>(`.${cl("tl-pt")}`));
    let raf = 0;
    const maj = () => {
      raf = 0;
      const r = ol.getBoundingClientRect();
      const repere = window.innerHeight * 0.5;
      barre.style.height = `${Math.max(0, Math.min(r.height, repere - r.top))}px`;
      let n = 0;
      for (const pt of points) {
        const b = pt.getBoundingClientRect();
        if (b.top + b.height / 2 <= repere) n++;
      }
      setPasses(n);
      setActif(Math.max(0, n - 1));
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

  /* la fiche s'efface, change d'étape, revient */
  useEffect(() => {
    if (actif === affiche) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAffiche(actif);
      return;
    }
    setChg(true);
    const t = setTimeout(() => {
      setAffiche(actif);
      setChg(false);
    }, 180);
    return () => clearTimeout(t);
  }, [actif, affiche]);

  const e = parcours[affiche]!;

  return (
    <section id="parcours" className={cl("parcours")} data-titre="Parcours">
      <div className={cl("c")}>
        <h2 className={cl("d titre-sec")}>
          Les <em>versions</em> de moi.
        </h2>
        <div className={cl("tl")}>
          <div className={cl("tl-gauche")}>
            <div className={cl("tl-rail")} aria-hidden>
              <div ref={rempli} className={cl("tl-rempli")} />
            </div>
            <ol ref={liste} className={cl("tl-liste")}>
              {parcours.map((p, i) => (
                <li key={p.titre} className={cl("tl-item", i < passes && "passe", i === actif && "on")}>
                  <span className={cl("tl-pt")} aria-hidden>
                    <i />
                  </span>
                  <p className={cl("tl-date")}>{p.date}</p>
                  <h3>{p.titre}</h3>
                  <p className={cl("tl-texte")}>{p.texte}</p>
                </li>
              ))}
            </ol>
          </div>
          <aside className={cl("tl-panneau")} aria-hidden>
            <div className={cl("tl-carte", chg && "chg")}>
              <div className={cl("tl-haut")}>
                <span className={cl("tl-logo", !e.logo && "marque")}>
                  {e.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element -- petit logo qui change avec l'étape
                    <img src={e.logo} alt="" />
                  ) : (
                    <Chevrons />
                  )}
                </span>
                <span className={cl("tl-type")}>{e.type}</span>
              </div>
              <p className={cl("tl-quand")}>{e.quand}</p>
              <p className={cl("tl-qui")}>{e.qui}</p>
              <p className={cl("tl-role")}>{e.role}</p>
              <p className={cl("tl-tech")}>{e.tech}</p>
              <div className={cl("tl-compteur")}>
                <span>{deux(actif + 1)}</span>
                <i>
                  <b style={{ transform: `scaleX(${(actif + 1) / parcours.length})` }} />
                </i>
                <span>{deux(parcours.length)}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

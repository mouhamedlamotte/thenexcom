"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { portfolio, sectionsPortfolio } from "@/lib/portfolio";
import { Chevrons, cl } from "./outils";

type Etat = "plein" | "ile" | "ouvert";
const SEUIL = 80;

/**
 * Menu du portfolio, en trois états comme celui de la landing (façon notifications Salonify) :
 * la capsule pleine en haut de page, l'île à droite dès qu'on défile (avec la section en cours),
 * puis déroulée au clic. Les tailles sont mesurées en px pour que la transition CSS les anime.
 */
export function PfMenu() {
  const barre = useRef<HTMLDivElement>(null);
  const ile = useRef<HTMLButtonElement>(null);
  const deroule = useRef<HTMLElement>(null);
  const [etat, setEtat] = useState<Etat>("plein");
  const [section, setSection] = useState<string>("Accueil");
  const yOuvert = useRef(0);

  const mesurer = useCallback(() => {
    const b = barre.current;
    const i = ile.current;
    const d = deroule.current;
    const parent = b?.parentElement;
    if (!b || !i || !d || !parent) return;
    const cs = getComputedStyle(parent);
    const largeurPleine = parent.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const largeurIle = Math.ceil(i.scrollWidth) + 2;
    if (etat === "plein") {
      b.style.width = `${Math.min(largeurPleine, 1176)}px`;
      b.style.height = "62px";
      b.style.borderRadius = "31px";
    } else if (etat === "ile") {
      b.style.width = `${largeurIle}px`;
      b.style.height = "52px";
      b.style.borderRadius = "26px";
    } else {
      b.style.width = `${Math.max(260, largeurIle)}px`;
      b.style.height = `${52 + d.scrollHeight}px`;
      b.style.borderRadius = "26px";
    }
  }, [etat]);

  useLayoutEffect(mesurer, [mesurer, section]);

  useEffect(() => {
    const surDefilement = () => {
      const y = window.scrollY;
      setEtat((e) => {
        if (e === "ouvert") return Math.abs(y - yOuvert.current) > 60 ? (y > SEUIL ? "ile" : "plein") : e;
        return y > SEUIL ? "ile" : "plein";
      });
    };
    const surClic = (ev: MouseEvent) => {
      if (barre.current && ev.target instanceof Node && !barre.current.contains(ev.target)) {
        setEtat((e) => (e === "ouvert" ? "ile" : e));
      }
    };
    const surTouche = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setEtat((e) => (e === "ouvert" ? "ile" : e));
    };
    surDefilement();
    window.addEventListener("scroll", surDefilement, { passive: true });
    window.addEventListener("resize", mesurer);
    document.addEventListener("click", surClic);
    document.addEventListener("keydown", surTouche);
    document.fonts?.ready.then(mesurer);

    /* la section en cours s'affiche dans l'île */
    const obs = new IntersectionObserver(
      (entrees) => {
        for (const e of entrees) {
          const t = (e.target as HTMLElement).dataset.titre;
          if (e.isIntersecting && t) setSection(t);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll<HTMLElement>("main section[data-titre]").forEach((sec) => obs.observe(sec));

    return () => {
      window.removeEventListener("scroll", surDefilement);
      window.removeEventListener("resize", mesurer);
      document.removeEventListener("click", surClic);
      document.removeEventListener("keydown", surTouche);
      obs.disconnect();
    };
  }, [mesurer]);

  const basculer = () => {
    yOuvert.current = window.scrollY;
    setEtat((e) => (e === "ouvert" ? "ile" : "ouvert"));
  };
  const fermer = () => setEtat(window.scrollY > SEUIL ? "ile" : "plein");

  return (
    <header className={cl("nav")}>
      <div className={cl("c")}>
        <div ref={barre} className={cl("barre")} data-etat={etat}>
          <div className={cl("plein")} inert={etat !== "plein"}>
            <a href="#accueil" className={cl("signe")} aria-label={`${portfolio.nom}, retour en haut`}>
              <b>{portfolio.nom}</b>
              <Chevrons />
              <span>{portfolio.pseudo}</span>
            </a>
            <nav className={cl("liens")} aria-label="Navigation">
              {sectionsPortfolio.slice(1).map((sec) => (
                <a key={sec.id} href={`#${sec.id}`}>
                  {sec.court}
                </a>
              ))}
            </nav>
            <a className={cl("btn btn-cor btn-petit")} href="#contact">
              M&apos;écrire
            </a>
          </div>

          <button
            ref={ile}
            type="button"
            className={cl("ile")}
            aria-expanded={etat === "ouvert"}
            aria-controls="pf-deroule"
            tabIndex={etat === "plein" ? -1 : 0}
            onClick={basculer}
          >
            <span className={cl("ico")} aria-hidden>
              <Chevrons />
            </span>
            <span>{section}</span>
            <svg
              className={cl("fl")}
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M3 5l4 4 4-4" />
            </svg>
          </button>

          <nav ref={deroule} id="pf-deroule" className={cl("deroule")} aria-label="Navigation" inert={etat !== "ouvert"}>
            {sectionsPortfolio.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={fermer}
                aria-current={sec.titre === section ? "true" : undefined}
              >
                {sec.titre}
              </a>
            ))}
            <a className={cl("btn btn-cor")} href={`mailto:${portfolio.email}`} onClick={fermer}>
              M&apos;écrire
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

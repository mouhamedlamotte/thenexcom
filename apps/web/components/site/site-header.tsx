"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Logo, LogoMark } from "@repo/ui/components/brand/logo";
import { nav } from "@/lib/site";

type Etat = "plein" | "ile" | "ouvert";

/** Hauteurs de la capsule (px) dans chaque état. */
const H_PLEIN = 64;
const H_ILE = 52;
const SEUIL = 80;

/**
 * Menu en trois états, à la manière des notifications de Salonify (capsule qui se déforme avec un ressort) :
 *  - « plein » en haut de page : la capsule indigo, de la largeur du contenu ;
 *  - « île » dès qu'on défile : elle se replie à droite et affiche la section en cours ;
 *  - « ouvert » au clic sur l'île : elle se déroule vers le bas avec les liens.
 * Les largeurs et hauteurs sont mesurées en px (jamais `auto`) pour que la transition CSS les anime.
 */
export function SiteHeader() {
  const barre = useRef<HTMLDivElement>(null);
  const ile = useRef<HTMLButtonElement>(null);
  const deroule = useRef<HTMLElement>(null);
  const [etat, setEtat] = useState<Etat>("plein");
  const [section, setSection] = useState("Accueil");
  const yOuvert = useRef(0);

  const mesurer = useCallback(() => {
    const b = barre.current;
    const i = ile.current;
    const d = deroule.current;
    const parent = b?.parentElement;
    if (!b || !i || !d || !parent) return;
    const largeurIle = Math.ceil(i.scrollWidth) + 2;
    if (etat === "plein") {
      b.style.width = `${Math.min(parent.clientWidth, 1216)}px`;
      b.style.height = `${H_PLEIN}px`;
    } else if (etat === "ile") {
      b.style.width = `${largeurIle}px`;
      b.style.height = `${H_ILE}px`;
    } else {
      b.style.width = `${Math.max(270, largeurIle)}px`;
      b.style.height = `${H_ILE + d.scrollHeight}px`;
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
    document.querySelectorAll<HTMLElement>("main section[data-titre]").forEach((s) => obs.observe(s));

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
    <header className="nav">
      <div className="nav-rang">
        <div ref={barre} className="nav-barre" data-etat={etat}>
          <div className="nav-plein" inert={etat !== "plein"}>
            <a href="#accueil" aria-label="nexcom, retour en haut" className="flex">
              <Logo />
            </a>
            <nav aria-label="Navigation principale" className="nav-liens">
              {nav.map((item) => (
                <a key={item.href} href={item.href} aria-current={item.label === section ? "page" : undefined}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a className="btn btn-cor" href="#contact" style={{ minHeight: 44, padding: "0 18px", fontSize: 14 }}>
              Démarrer un projet
            </a>
          </div>

          <button
            ref={ile}
            type="button"
            className="nav-ile"
            aria-expanded={etat === "ouvert"}
            aria-controls="nav-deroule"
            tabIndex={etat === "plein" ? -1 : 0}
            onClick={basculer}
          >
            <span className="ico" aria-hidden>
              <LogoMark className="size-4" />
            </span>
            <span>{section}</span>
            <svg className="fl" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
              <path d="M3 5l4 4 4-4" />
            </svg>
          </button>

          <nav ref={deroule} id="nav-deroule" className="nav-deroule" aria-label="Navigation" inert={etat !== "ouvert"}>
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={fermer} aria-current={item.label === section ? "true" : undefined}>
                {item.label}
              </a>
            ))}
            <a className="btn btn-cor" href="#contact" onClick={fermer}>
              Démarrer un projet
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

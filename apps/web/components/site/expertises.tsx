"use client";

import { useEffect, useRef, useState } from "react";
import { expertises, type Expertise } from "@/lib/content";

/** Le visuel dessiné de chaque expertise (décoratif). */
function Visuel({ type, cl = "" }: { type: Expertise["visuel"]; cl?: string }) {
  switch (type) {
    case "site":
      return (
        <div className={`visuel ${cl}`} aria-hidden>
          <div className="v-fen">
            <div className="barre-f">
              <i />
              <i />
              <i />
            </div>
            <div className="in">
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".16em", color: "#3A4690" }}>
                TON ACTIVITÉ · DAKAR
              </span>
              <span className="gros">
                Ton site, <em>enfin</em> à ton image.
              </span>
              <span className="l" style={{ width: "80%" }} />
              <span className="l" style={{ width: "60%" }} />
              <span className="bt">Écrire sur WhatsApp</span>
            </div>
          </div>
        </div>
      );
    case "logiciel":
      return (
        <div className={`visuel v-img ${cl}`} aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/dashboard.webp" alt="" />
        </div>
      );
    case "paiement":
      return (
        <div className={`visuel v-pay ${cl}`} aria-hidden>
          <div className="tel">
            <div className="ecran">
              <span style={{ color: "#3A4690" }}>Payer avec</span>
              <span className="opt on">
                Wave <span>●</span>
              </span>
              <span className="opt">Orange Money</span>
              <span className="opt">Carte</span>
              <span className="bul">Rappel : votre loyer de décembre est attendu le 5.</span>
            </div>
          </div>
        </div>
      );
    case "design":
      return (
        <div className={`visuel v-design ${cl}`} aria-hidden>
          <span className="sw" style={{ background: "#0C1029", color: "#C9CFEA", border: "1px solid #232C66" }}>
            Nuit
          </span>
          <span className="sw" style={{ background: "#F2604A", color: "#0C1029" }}>
            Corail
          </span>
          <span className="sw" style={{ background: "#1F2A6B", color: "#EEF1F8" }}>
            Indigo
          </span>
          <span className="sw" style={{ background: "#EEF1F8", color: "#0C1029" }}>
            Craie
          </span>
          <span className="typo">
            <b>Aa</b>
            <em>Aa</em>
            <span style={{ fontSize: 12, color: "#3A4690" }}>Instrument Sans · Serif</span>
          </span>
        </div>
      );
    case "suivi":
      return (
        <div className={`visuel v-suivi ${cl}`} aria-hidden>
          <div className="lg">
            <span>salonify.sn</span>
            <span className="ok">En ligne</span>
          </div>
          <div className="lg">
            <span>Sauvegarde de cette nuit</span>
            <span className="ok">Faite</span>
          </div>
          <div className="lg">
            <span>Certificat HTTPS</span>
            <span className="ok">Valide</span>
          </div>
          <div className="lg">
            <span>Assistance WhatsApp</span>
            <span style={{ color: "#C9CFEA", fontSize: 13 }}>répond en journée</span>
          </div>
        </div>
      );
  }
}

/**
 * Les expertises, pilotées par le défilement : la liste défile normalement, le bloc au centre de l'écran s'allume
 * et son visuel s'affiche dans le panneau collé à droite. Sur téléphone, chaque visuel est sous son bloc.
 */
export function Expertises() {
  const [actif, setActif] = useState(0);
  const blocs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entrees) => {
        for (const e of entrees) {
          if (e.isIntersecting) setActif(Number((e.target as HTMLElement).dataset.i));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    blocs.current.forEach((b) => b && obs.observe(b));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="expertises" className="expertises" data-titre="Expertises">
      <div className="c">
        <div className="tete-sec">
          <div>
            <p className="ey">Nos expertises</p>
            <h2 className="titre-sec">
              Tout ce qu&apos;il faut pour passer ton activité <em className="s">en ligne.</em>
            </h2>
          </div>
          <p className="intro">Du design à la mise en ligne, puis le suivi. Une seule expertise, ou tout le chemin.</p>
        </div>
        <div className="exp-scroll">
          <ol className="exp-blocs">
            {expertises.map((e, i) => (
              <li
                key={e.id}
                ref={(el) => {
                  blocs.current[i] = el;
                }}
                data-i={i}
                className={`exp-bloc${actif === i ? " on" : ""}`}
              >
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="nom">{e.nom}</h3>
                <p>{e.texte}</p>
                <ul className="livrables">
                  {e.livrables.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                <Visuel type={e.visuel} cl="exp-visuel-mobile" />
              </li>
            ))}
          </ol>
          <div className="exp-colle" aria-hidden>
            <div className="exp-scene">
              {expertises.map((e, i) => (
                <Visuel key={e.id} type={e.visuel} cl={actif === i ? "on" : ""} />
              ))}
            </div>
            <div className="exp-progres">
              <span>
                {String(actif + 1).padStart(2, "0")} / {String(expertises.length).padStart(2, "0")}
              </span>
              <i style={{ "--p": (actif + 1) / expertises.length } as React.CSSProperties} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

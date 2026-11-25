"use client";

import { useState } from "react";
import { expertises, type Expertise } from "@/lib/content";

const Plus = () => (
  <span className="plus" aria-hidden>
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M8 2v12M2 8h12" />
    </svg>
  </span>
);

/** Le visuel dessiné de chaque expertise (décoratif). */
function Visuel({ type }: { type: Expertise["visuel"] }) {
  switch (type) {
    case "site":
      return (
        <div className="visuel" aria-hidden>
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
        <div className="visuel v-img" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/dashboard.webp" alt="" />
        </div>
      );
    case "paiement":
      return (
        <div className="visuel v-pay" aria-hidden>
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
        <div className="visuel v-design" aria-hidden>
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
        <div className="visuel v-suivi" aria-hidden>
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

/** Les expertises, dépliables : une seule ouverte à la fois. */
export function Expertises() {
  const [ouvert, setOuvert] = useState<string | null>(expertises[0]?.id ?? null);

  return (
    <section id="expertises" className="expertises">
      <div className="c">
        <div className="tete-sec">
          <div>
            <p className="ey">Nos expertises</p>
            <h2 className="titre-sec">
              Tout ce qu&apos;il faut pour passer ton activité <em className="s">en ligne.</em>
            </h2>
          </div>
          <p className="intro">
            Du design à la mise en ligne, puis le suivi. Tu peux prendre une seule expertise ou nous confier tout le
            chemin.
          </p>
        </div>
        <div className="liste">
          {expertises.map((e, i) => {
            const estOuvert = ouvert === e.id;
            return (
              <div key={e.id} className="item" data-ouvert={estOuvert}>
                <button
                  type="button"
                  aria-expanded={estOuvert}
                  aria-controls={`exp-${e.id}`}
                  onClick={() => setOuvert(estOuvert ? null : e.id)}
                >
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="nom">{e.nom}</span>
                  <Plus />
                </button>
                <div className="corps" id={`exp-${e.id}`}>
                  <div>
                    <div className="dedans">
                      <span className="vide" />
                      <div>
                        <p>{e.texte}</p>
                        <ul className="livrables">
                          {e.livrables.map((l) => (
                            <li key={l}>{l}</li>
                          ))}
                        </ul>
                      </div>
                      <Visuel type={e.visuel} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { projets, type Projet } from "@/lib/content";

const Chevrons = () => (
  <svg viewBox="0 0 22 22" fill="none" stroke="#F2604A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 5l6 6-6 6M12 5l6 6-6 6" />
  </svg>
);

/** L'écran de chaque projet. NexImmo et Nexpay sont dessinés en code, avec des données d'exemple. */
function Ecran({ id }: { id: Projet["id"] }) {
  if (id === "salonify")
    return (
      <>
        <Image
          className="dash"
          src="/img/dashboard.webp"
          alt="Tableau de bord web de Salonify : revenus du mois, modes de paiement, prestations et classement de l'équipe"
          width={1400}
          height={788}
          sizes="(min-width: 1280px) 600px, 80vw"
        />
        <Image className="tel" src="/img/ecran-caisse.webp" alt="Caisse du jour dans l'app Salonify Pro" width={560} height={1223} sizes="160px" />
      </>
    );
  if (id === "neximmo")
    return (
      <>
        <div className="app" aria-hidden>
          <div style={{ fontSize: 12, color: "#3A4690" }}>Immeuble · Décembre</div>
          <div className="gros">1 050 000 F</div>
          <div className="jauge">
            <span />
          </div>
          {[
            ["Appt 3", "M. Diallo", "150 000 F", "Wave", "#CDEBDD"],
            ["Appt 1", "Mme Sow", "200 000 F", "Orange M.", "#CDEBDD"],
            ["Magasin", "Ets Ndiaye", "300 000 F", "En retard", "#FFE7A3"],
          ].map(([l, n, m, s, c]) => (
            <div className="rg" key={l}>
              <b>{l}</b>
              <span>{n}</span>
              <span>{m}</span>
              <span className="et" style={{ background: c }}>
                {s}
              </span>
            </div>
          ))}
        </div>
        <div className="tel" aria-hidden>
          <div className="ec">
            <div className="bar">Rappels · automatique</div>
            <div className="msgs">
              <span className="m1">
                Bonjour M. Ndiaye, le loyer de décembre (300 000 F) est attendu. Vous pouvez payer par Wave.
              </span>
              <span className="m2">C&apos;est envoyé !</span>
            </div>
          </div>
        </div>
      </>
    );
  return (
    <>
      <div className="flux" aria-hidden>
        <span>Wave</span>
        <span>Orange Money</span>
        <i />
        <span className="np">nexpay</span>
        <i />
        <span className="app">Ton app</span>
      </div>
      <div className="code" aria-hidden>
        <b>paiement</b> = nexpay.<em>encaisser</em>(
        <br />
        &nbsp;&nbsp;montant: 25000, moyen: &quot;wave&quot;
        <br />)
      </div>
      <div className="recu" aria-hidden>
        <span className="ic">W</span>
        <span>
          <b>Paiement reçu · +25 000 F</b>
          <small>commande #1042 · à l&apos;instant</small>
        </span>
      </div>
    </>
  );
}

/** Réalisations : la liste des produits à gauche, l'écran du produit choisi à droite (clic ou flèches). */
export function Realisations() {
  const [actif, setActif] = useState<Projet["id"]>("salonify");
  const onglets = useRef<(HTMLButtonElement | null)[]>([]);
  const courant = projets.find((p) => p.id === actif) ?? projets[0]!;

  const clavier = (e: React.KeyboardEvent, i: number) => {
    const n = projets.length;
    const vers = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!vers) return;
    e.preventDefault();
    const j = (i + vers + n) % n;
    setActif(projets[j]!.id);
    onglets.current[j]?.focus();
  };

  return (
    <section id="realisations" className="realisations">
      <div className="c">
        <div className="tete-sec">
          <div>
            <p className="ey">Réalisations</p>
            <h2 className="titre-sec">
              Des produits qui tournent <em className="s">déjà.</em>
            </h2>
          </div>
          <p className="intro">Conçus, codés et mis en ligne chez nous. Ce sont aussi les bases qu&apos;on adapte pour nos clients.</p>
        </div>
        <div className="projets">
          <ul className="choix-projets" role="tablist" aria-label="Projets">
            {projets.map((p, i) => (
              <li key={p.id} role="presentation">
                <button
                  ref={(el) => {
                    onglets.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`onglet-${p.id}`}
                  aria-controls={`projet-${p.id}`}
                  aria-selected={p.id === actif}
                  tabIndex={p.id === actif ? 0 : -1}
                  onClick={() => setActif(p.id)}
                  onKeyDown={(e) => clavier(e, i)}
                >
                  <span className="nom-p">
                    {p.nom}
                    <Chevrons />
                  </span>
                  <span className="meta-p">{p.meta}</span>
                </button>
              </li>
            ))}
          </ul>
          <div>
            <div className="ecran-p">
              {projets.map((p) => (
                <div
                  key={p.id}
                  id={`projet-${p.id}`}
                  role="tabpanel"
                  aria-labelledby={`onglet-${p.id}`}
                  aria-hidden={p.id !== actif}
                  className={`panneau-p p-${p.id}${p.id === actif ? " on" : ""}`}
                >
                  <Ecran id={p.id} />
                </div>
              ))}
            </div>
            <div className="texte-p">
              <div>
                <p>{courant.texte}</p>
                <div className="tags">
                  {courant.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              {courant.lien && (
                <a className="lien-p" href={courant.lien.href} target="_blank" rel="noopener">
                  {courant.lien.texte}
                </a>
              )}
            </div>
            <p className="note-demo">Les écrans NexImmo et Nexpay sont des exemples avec des données fictives.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

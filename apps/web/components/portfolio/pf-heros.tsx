"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cl } from "./outils";

type Boite = { x: number; y: number; w: number; h: number };
type Mesures = { W: number; H: number; nom: Boite; l1: Boite; l2: Boite; perso: Boite; police: number };

/** Position dans le héros sans tenir compte des animations d'entrée (offset*, pas getBoundingClientRect). */
function rel(el: HTMLElement, racine: HTMLElement): Boite {
  const r = { x: 0, y: 0, w: el.offsetWidth, h: el.offsetHeight };
  let n: HTMLElement | null = el;
  while (n && n !== racine) {
    r.x += n.offsetLeft;
    r.y += n.offsetTop;
    n = n.offsetParent as HTMLElement | null;
  }
  return r;
}

/**
 * Héros : le nom en très grand, le personnage, et le décor « Plan » (papier quadrillé en CSS + lignes de
 * construction en SVG). Les lignes sont posées sur le vrai texte et le vrai personnage, et les cotes donnent
 * leurs vraies tailles en px : tout est remesuré quand la page change de taille.
 */
export function PfHeros() {
  const racine = useRef<HTMLElement>(null);
  const nom = useRef<HTMLHeadingElement>(null);
  const perso = useRef<HTMLElement>(null);
  const [m, setM] = useState<Mesures | null>(null);

  useEffect(() => {
    const sec = racine.current;
    const h1 = nom.current;
    const fig = perso.current;
    if (!sec || !h1 || !fig) return;
    const mesurer = () => {
      const lignes = h1.querySelectorAll<HTMLElement>(`.${cl("l")}`);
      if (lignes.length < 2) return;
      setM({
        W: sec.clientWidth,
        H: sec.clientHeight,
        nom: rel(h1, sec),
        l1: rel(lignes[0]!, sec),
        l2: rel(lignes[1]!, sec),
        perso: rel(fig, sec),
        police: Math.round(parseFloat(getComputedStyle(h1).fontSize)),
      });
    };
    mesurer();
    document.fonts?.ready.then(mesurer);
    const ro = new ResizeObserver(mesurer);
    ro.observe(sec);
    ro.observe(fig);
    return () => ro.disconnect();
  }, []);

  return (
    <section ref={racine} id="accueil" className={cl("heros")} data-titre="Accueil">
      {m && <Plan m={m} />}
      <div className={cl("c heros-in")}>
        <div className={cl("nom-bloc")}>
          <div>
            <h1 ref={nom} className={cl("d nom")}>
              <span className={cl("l")}>
                <span>Mouhamed</span>
              </span>
              <span className={cl("l")}>
                <span style={{ "--k": 1 } as React.CSSProperties}>
                  Lamotte<em>.</em>
                </span>
              </span>
            </h1>
            <p className={cl("role apparait")} style={{ "--d": "600ms" } as React.CSSProperties}>
              Développeur à Dakar. Fondateur de <em className={cl("s")}>The Nexcom.</em>
            </p>
            <div className={cl("actions apparait")} style={{ "--d": "750ms" } as React.CSSProperties}>
              <a className={cl("btn btn-cor")} href="#projets">
                Voir mes projets
              </a>
              <a className={cl("btn btn-verre")} href="#contact">
                Me contacter
              </a>
            </div>
          </div>
          <figure ref={perso} className={cl("perso entre")} style={{ "--d": "350ms" } as React.CSSProperties}>
            <Image
              src="/img/personnage.webp"
              alt="Illustration de Mouhamed Lamotte, avec des annotations de construction sur ses vêtements"
              width={900}
              height={1125}
              sizes="(min-width: 900px) 420px, 70vw"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

/** Les lignes de construction, les cotes et la note à la main. */
function Plan({ m }: { m: Mesures }) {
  const { W, H, l1, l2, perso: p, police } = m;
  const xs = m.nom.x;
  const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;
  // cote du corps de la police, à gauche du nom
  const cxg = Math.max(12, xs - 22);
  const yA = l1.y + l1.h * 0.2;
  const yB = yA + police * 0.7;
  // cote du personnage, à droite
  const cxd = Math.min(W - 18, p.x + p.w * 0.86);
  const yH = p.y + p.h * 0.06;
  const yP = p.y + p.h * 0.96;
  // la note et le trait corail
  const xn = p.x + p.w * 0.2;
  const yn = p.y + p.h * 0.14;
  const fleche = `M${xn - 150} ${yn - 10} C ${xn - 90} ${yn - 40}, ${xn - 40} ${yn - 20}, ${xn - 4} ${yn + 18}`;
  const pointe = `M${xn - 16} ${yn + 10} L${xn - 3} ${yn + 19} L${xn - 2} ${yn + 2}`;

  return (
    <svg className={cl("plan")} viewBox={`0 0 ${W} ${H}`} aria-hidden>
      {/* guides horizontaux : haut et pied de chaque ligne du nom */}
      {[l1.y + l1.h * 0.2, l1.y + l1.h * 0.9, l2.y + l2.h * 0.9].map((y, k) => (
        <line key={k} className={cl("g")} x1={0} y1={y} x2={W} y2={y} style={d(200 + k * 120)} />
      ))}
      {/* guides verticaux : bord du texte, bords du personnage */}
      <line className={cl("g")} x1={xs} y1={0} x2={xs} y2={H} style={d(250)} />
      <line className={cl("g")} x1={p.x + p.w * 0.28} y1={0} x2={p.x + p.w * 0.28} y2={H} style={d(380)} />
      <line className={cl("g")} x1={p.x + p.w * 0.72} y1={0} x2={p.x + p.w * 0.72} y2={H} style={d(380)} />
      <text x={xs} y={l1.y - 26} style={d(500)}>
        MODULE 01 · DÉVELOPPEUR
      </text>
      <line className={cl("cote")} x1={cxg} y1={yA} x2={cxg} y2={yB} style={d(600)} />
      <line className={cl("cote")} x1={cxg - 5} y1={yA} x2={cxg + 5} y2={yA} style={d(600)} />
      <line className={cl("cote")} x1={cxg - 5} y1={yB} x2={cxg + 5} y2={yB} style={d(600)} />
      {xs > 60 && (
        <text
          x={cxg - 10}
          y={(yA + yB) / 2}
          textAnchor="middle"
          transform={`rotate(-90 ${cxg - 10} ${(yA + yB) / 2})`}
          style={d(650)}
        >
          {police} PX
        </text>
      )}
      <line className={cl("cote")} x1={cxd} y1={yH} x2={cxd} y2={yP} style={d(700)} />
      <line className={cl("cote")} x1={cxd - 6} y1={yH} x2={cxd + 6} y2={yH} style={d(700)} />
      <line className={cl("cote")} x1={cxd - 6} y1={yP} x2={cxd + 6} y2={yP} style={d(700)} />
      <text x={cxd - 10} y={(yH + yP) / 2} textAnchor="end" style={d(750)}>
        {Math.round(yP - yH)} PX
      </text>
      {/* la seule note à la main de l'écran ; elle a besoin de place à gauche du personnage */}
      {xn - 162 > xs + 260 && (
        <>
          <path className={cl("cor")} d={fleche} style={{ "--l": 220 } as React.CSSProperties} />
          <path className={cl("cor")} d={pointe} style={{ "--l": 60 } as React.CSSProperties} />
          <text className={cl("note")} x={xn - 162} y={yn - 2} textAnchor="end" style={d(1500)}>
            c&apos;est moi, en vrai
          </text>
        </>
      )}
    </svg>
  );
}

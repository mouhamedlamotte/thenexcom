"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Chevrons, cl } from "./outils";

/**
 * Les trois projets mis en avant : Salonify (le produit), NexImmo (le sur-mesure) et Nexpay (l'open source).
 * Chaque projet entre une fois quand il arrive à l'écran (l'écran se dévoile, le texte monte),
 * puis l'écran s'incline un peu sous la souris.
 */
export function PfProjets() {
  return (
    <section id="projets" className={cl("projets")} data-titre="Projets">
      <div className={cl("c")}>
        <h2 className={cl("d titre-sec")}>
          Trois produits, <em>trois histoires.</em>
        </h2>

        <Projet>
          <div className={cl("cadre")}>
            <Image
              src="/img/dashboard.webp"
              alt="Tableau de bord web de Salonify : revenus du mois, modes de paiement, prestations et classement de l'équipe"
              width={1400}
              height={788}
              sizes="(min-width: 900px) 720px, 92vw"
            />
          </div>
          <Image
            className={cl("tel-sur")}
            src="/img/ecran-caisse.webp"
            alt="Caisse du jour dans l'app Salonify Pro"
            width={560}
            height={1223}
            sizes="180px"
          />
          <>
            <p className={cl("meta")} style={k(0)}>
              The Nexcom · SaaS · 2026 · en ligne
            </p>
            <h3 className={cl("d")} style={k(1)}>
              Salonify
            </h3>
            <p className={cl("txt")} style={k(2)}>
              La caisse, l&apos;équipe et les commissions des salons de coiffure, barbershops et instituts. Une app mobile pour
              l&apos;équipe, un tableau de bord pour le gérant, des abonnements chaque mois.
            </p>
            <div className={cl("puces")} style={k(3)}>
              {["NestJS", "Next.js", "PostgreSQL", "Keycloak", "Flutter"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <a className={cl("lien")} href="https://salonify.sn" target="_blank" rel="noopener" style={k(4)}>
              salonify.sn
            </a>
          </>
        </Projet>

        <Projet inverse>
          <div className={cl("cadre")}>
            <Image
              src="/img/portfolio/neximmo.webp"
              alt="Tableau de bord NexImmo : encaissé du mois, loyers en retard, logements occupés, encaissements sur 12 mois"
              width={1600}
              height={900}
              sizes="(min-width: 900px) 720px, 92vw"
            />
          </div>
          <div className={cl("tel-imm")} aria-hidden>
            <div className={cl("ec")}>
              <div className={cl("bar")}>Rappels · automatique</div>
              <div className={cl("msgs")}>
                <span className={cl("m1")}>
                  Bonjour M. Diallo, le loyer de la Ch 3 est attendu. Vous pouvez payer par Wave.
                </span>
                <span className={cl("m2")}>C&apos;est envoyé !</span>
              </div>
            </div>
          </div>
          <>
            <span className={cl("sur-mesure")} style={k(0)}>
              <Chevrons />
              Fait sur mesure
            </span>
            <h3 className={cl("d")} style={k(1)}>
              NexImmo
            </h3>
            <p className={cl("txt")} style={k(2)}>
              Pour une propriétaire de Dakar qui gérait tout son immeuble à la main. Pas un logiciel générique : le sien,
              construit à partir de son immeuble et de sa façon de faire.
            </p>
            <ul className={cl("precis")} style={k(3)}>
              <li>Ses étages et ses pièces, avec leurs vrais noms</li>
              <li>Qui a payé, qui est en retard, avec un reçu à chaque paiement</li>
              <li>Ses rappels qui partent seuls sur WhatsApp</li>
              <li>Son fichier Excel repris tel quel</li>
            </ul>
            <p className={cl("meta")} style={k(4)}>
              The Nexcom · gestion locative · en essai
            </p>
          </>
        </Projet>

        <Projet>
          <div className={cl("cadre")}>
            <Image
              src="/img/portfolio/nexpay.webp"
              alt="Maquette du tableau de bord Nexpay : volume encaissé par Wave et Orange Money, flux des paiements en direct, livraisons de webhooks"
              width={1600}
              height={900}
              sizes="(min-width: 900px) 720px, 92vw"
            />
          </div>
          <div className={cl("hook")} aria-hidden>
            <span className={cl("hook-tete")}>
              <i />
              webhook
            </span>
            <span>
              <b>200</b> payment.succeeded
            </span>
            <span className={cl("hook-pied")}>Wave · 12 500 F · 84 ms</span>
          </div>
          <>
            <p className={cl("meta")} style={k(0)}>
              Open source · paiement mobile · 2025
            </p>
            <h3 className={cl("d")} style={k(1)}>
              Nexpay
            </h3>
            <p className={cl("txt")} style={k(2)}>
              Accepter Wave et Orange Money sans passer par un intermédiaire. Une instance à toi, un tableau de bord en
              temps réel, des webhooks signés, une API REST. Plusieurs projets sur un seul serveur.
            </p>
            <div className={cl("puces")} style={k(3)}>
              {["NestJS", "Next.js", "PostgreSQL", "Redis", "Docker"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className={cl("liens-projet")} style={k(4)}>
              <a className={cl("lien")} href="https://nexpay.thenexcom.com" target="_blank" rel="noopener">
                Documentation
              </a>
              <a className={cl("lien")} href="https://github.com/mouhamedlamotte/nexpay" target="_blank" rel="noopener">
                Code source
              </a>
            </div>
            <p className={cl("meta")} style={k(5)}>
              Maquette du tableau de bord, données fictives.
            </p>
          </>
        </Projet>
      </div>
    </section>
  );
}

const k = (n: number) => ({ "--k": n }) as React.CSSProperties;

/** Un projet : enfants = [écran, élément posé dessus, infos]. */
function Projet({ inverse = false, children }: { inverse?: boolean; children: [React.ReactNode, React.ReactNode, React.ReactNode] }) {
  const art = useRef<HTMLElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  const [ecran, dessus, infos] = children;

  useEffect(() => {
    const el = art.current;
    const sc = scene.current;
    if (!el || !sc) return;
    const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const vu = cl("vu");
    let io: IntersectionObserver | undefined;
    if (reduit || !("IntersectionObserver" in window)) el.classList.add(vu);
    else {
      io = new IntersectionObserver(
        ([e]) => {
          if (e?.isIntersecting) {
            el.classList.add(vu);
            io?.disconnect();
          }
        },
        { threshold: 0.25 },
      );
      io.observe(el);
    }
    if (reduit) return () => io?.disconnect();

    const cadre = sc.querySelector<HTMLElement>(`.${cl("cadre")}`);
    const bouge = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || !cadre || !el.classList.contains(vu)) return;
      const r = sc.getBoundingClientRect();
      const rx = ((e.clientX - r.left) / r.width - 0.5) * 6;
      const ry = -((e.clientY - r.top) / r.height - 0.5) * 5;
      cadre.style.transform = `rotateY(${rx}deg) rotateX(${ry}deg)`;
    };
    const sort = () => {
      if (cadre) cadre.style.transform = "";
    };
    sc.addEventListener("pointermove", bouge);
    sc.addEventListener("pointerleave", sort);
    return () => {
      io?.disconnect();
      sc.removeEventListener("pointermove", bouge);
      sc.removeEventListener("pointerleave", sort);
    };
  }, []);

  return (
    <article ref={art} className={cl("projet", inverse && "inverse")}>
      <div ref={scene} className={cl("scene")}>
        {ecran}
        {dessus}
      </div>
      <div className={cl("infos")}>{infos}</div>
    </article>
  );
}

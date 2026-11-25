"use client";

import { useEffect, useRef, useState } from "react";
import { site, whatsappQuote } from "@/lib/site";

/**
 * Appel final. Les deux chevrons du logo se rejoignent une fois quand la section arrive à l'écran,
 * puis passent en « >> » et poussent vers l'avant quand on vise les boutons.
 */
export function Final() {
  const chevrons = useRef<HTMLDivElement>(null);
  const [assemble, setAssemble] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    const el = chevrons.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setAssemble(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setAssemble(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="contact" className={`final${next ? " next" : ""}`} data-titre="Contact">
      <div className="c final-grille">
        <div>
          <h2>
            Et toi, c&apos;est quoi <br />
            ton <em className="s">next ?</em>
          </h2>
          <p className="txt">
            Un appel de 15 minutes, gratuit. Tu racontes, on te dit ce qu&apos;on construirait et en combien de temps.
          </p>
          <div
            className="actions"
            onPointerEnter={() => setNext(true)}
            onPointerLeave={() => setNext(false)}
            onFocus={() => setNext(true)}
            onBlur={() => setNext(false)}
          >
            <a className="btn btn-cor" href={whatsappQuote} target="_blank" rel="noopener">
              Écrire sur WhatsApp
            </a>
            <a className="btn btn-verre" href={`mailto:${site.email}`}>
              Envoyer un e-mail
            </a>
          </div>
          <div className="coord">
            <span>
              Téléphone <b>{site.phone}</b>
            </span>
            <span>
              E-mail <b>{site.email}</b>
            </span>
          </div>
        </div>
        <div ref={chevrons} className={`chevrons${assemble ? " on" : ""}`} aria-hidden>
          <svg viewBox="220 220 560 560">
            <polygon className="g" points="220,220 343.2,220 516.8,500 343.2,780 220,780 393.6,500" fill="#F2604A" />
            <polygon className="d" points="780,220 656.8,220 483.2,500 656.8,780 780,780 606.4,500" fill="#F2604A" />
          </svg>
        </div>
      </div>
    </section>
  );
}

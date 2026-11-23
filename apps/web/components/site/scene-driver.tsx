"use client";

import { useEffect } from "react";

const ease = (t: number) => 1 - Math.pow(1 - t, 3);
const clamp = (v: number) => Math.max(0, Math.min(1, v));

/**
 * Pilote du défilement, sans bibliothèque ni re-rendu React : à chaque frame utile, on écrit
 * --e / --e-vite sur les [data-scene], le compteur [data-count], la section active du rail
 * ([data-rail]) et les cotes mesurées du titre du héros ([data-mesure]).
 */
export function SceneDriver() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scenes = Array.from(document.querySelectorAll<HTMLElement>("[data-scene]"));
    const rail = Array.from(document.querySelectorAll<HTMLElement>("[data-rail]"));
    const titre = document.getElementById("hero-titre");
    const mesures = Array.from(document.querySelectorAll<HTMLElement>("[data-mesure]"));

    let raf = 0;

    const mesurer = () => {
      if (!titre) return;
      const valeurs: Record<string, number> = {
        largeur: titre.offsetWidth,
        hauteur: titre.offsetHeight,
        taille: parseFloat(getComputedStyle(titre).fontSize),
      };
      for (const el of mesures) {
        const v = valeurs[el.dataset.mesure ?? ""];
        if (v !== undefined) el.textContent = String(Math.round(v));
      }
    };

    const tick = () => {
      raf = 0;
      const vh = window.innerHeight || 900;
      let actif = scenes[0]?.id;

      for (const el of scenes) {
        const top = el.getBoundingClientRect().top;
        if (top < vh * 0.5) actif = el.id;

        const p = reduce.matches ? 1 : clamp((vh - top) / (vh * 0.85));
        const e = ease(p);
        el.style.setProperty("--e", e.toFixed(3));
        el.style.setProperty("--e-vite", ease(Math.min(1, p * 1.15)).toFixed(3));

        for (const c of el.querySelectorAll<HTMLElement>("[data-count]")) {
          const max = Number(c.dataset.count);
          c.textContent = String(Math.max(1, Math.round(max * e)));
        }
      }

      for (const a of rail) {
        if (a.dataset.rail === actif) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      }
    };

    const planifier = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const redimensionner = () => {
      mesurer();
      planifier();
    };

    window.addEventListener("scroll", planifier, { passive: true });
    window.addEventListener("resize", redimensionner);
    reduce.addEventListener("change", planifier);
    redimensionner();
    document.fonts?.ready.then(redimensionner);

    return () => {
      window.removeEventListener("scroll", planifier);
      window.removeEventListener("resize", redimensionner);
      reduce.removeEventListener("change", planifier);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}

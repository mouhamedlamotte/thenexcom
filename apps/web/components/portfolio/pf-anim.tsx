"use client";

import { useEffect } from "react";

/**
 * Active les entrées au défilement seulement quand JavaScript tourne et que le mouvement n'est pas réduit :
 * sans ça, le contenu reste visible tel quel.
 */
export function PfAnim({ cible }: { cible: string }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.getElementById(cible)?.setAttribute("data-anim", "");
  }, [cible]);
  return null;
}

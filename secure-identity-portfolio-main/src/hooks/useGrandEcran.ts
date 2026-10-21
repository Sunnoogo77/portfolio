import { useEffect, useState } from 'react';

/** Palier au-dela duquel le defilement coute peu : les sections longues
 *  peuvent alors s'ouvrir deja depliees. */
const GRAND_ECRAN = '(min-width: 768px)';

/**
 * Vrai sur grand ecran.
 *
 * Sert a decider l'etat initial des blocs repliables : sur telephone, une
 * section longue s'ouvre repliee pour qu'il n'y ait pas trop d'informations a
 * la fois et qu'atteindre le bas de la page ne demande pas un long defilement.
 * Sur grand ecran, ou le defilement coute moins, elle s'ouvre depliee.
 *
 * La valeur de depart est calculee des le premier rendu, pour qu'une section
 * ne s'ouvre pas pour se refermer aussitot sous les yeux du visiteur.
 */
function mesurer(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return true;
  }
  return window.matchMedia(GRAND_ECRAN).matches;
}

export function useGrandEcran(): boolean {
  const [grand, setGrand] = useState(mesurer);

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;
    const mq = window.matchMedia(GRAND_ECRAN);
    const surChangement = (e: MediaQueryListEvent) => setGrand(e.matches);
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', surChangement);
      return () => mq.removeEventListener('change', surChangement);
    }
    mq.addListener(surChangement);
    return () => mq.removeListener(surChangement);
  }, []);

  return grand;
}

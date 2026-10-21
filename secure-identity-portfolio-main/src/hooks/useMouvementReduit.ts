import { useEffect, useState } from 'react';

/**
 * `prefers-reduced-motion` lu depuis le JavaScript.
 *
 * La regle CSS de src/index.css neutralise deja les transitions, mais elle ne
 * peut rien contre un comportement : une barre qui se retracte et disparait au
 * defilement est un mouvement meme si la transition dure zero milliseconde.
 * C'est ce crochet qui permet de l'arreter entierement.
 *
 * La valeur est relue a chaud : le visiteur peut changer son reglage systeme
 * sans recharger la page.
 */
export function useMouvementReduit(): boolean {
  const [reduit, setReduit] = useState(false);

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduit(mq.matches);
    const surChangement = (e: MediaQueryListEvent) => setReduit(e.matches);
    // Safari ancien n'expose que addListener.
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', surChangement);
      return () => mq.removeEventListener('change', surChangement);
    }
    mq.addListener(surChangement);
    return () => mq.removeListener(surChangement);
  }, []);

  return reduit;
}

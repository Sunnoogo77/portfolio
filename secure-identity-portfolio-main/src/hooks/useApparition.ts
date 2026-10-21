import { useEffect, useRef, useState } from 'react';

/**
 * Apparition d'un bloc au moment ou il entre reellement dans le champ.
 *
 * Deux defauts que ce crochet interdit par construction :
 *
 * - les animations qui se jouent au montage du composant, donc terminees bien
 *   avant d'avoir ete vues ;
 * - les cascades de delais croissants. Il n'y a aucun delai ici, et chaque
 *   bloc est observe pour lui-meme.
 *
 * L'observation s'arrete des que le bloc est apparu : il ne disparait jamais
 * en remontant, ce qui serait un mouvement de plus sans rien apporter.
 *
 * Si l'observation n'est pas disponible, le bloc est visible d'emblee. Aucun
 * contenu ne peut rester invisible a cause d'un effet.
 */
export function useApparition<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observateur = new IntersectionObserver(
      (entrees) => {
        if (entrees.some((entree) => entree.isIntersecting)) {
          setVisible(true);
          observateur.disconnect();
        }
      },
      { threshold: 0.02, rootMargin: '0px 0px -5% 0px' }
    );

    observateur.observe(element);
    return () => observateur.disconnect();
  }, []);

  return { ref, visible };
}

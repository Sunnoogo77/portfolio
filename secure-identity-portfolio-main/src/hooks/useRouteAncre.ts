import { useEffect, useState } from 'react';

export type Route = '/' | '/projets';

/**
 * Routage par ancre, en `#/projets`.
 *
 * Le routeur a ete retire de ce depot, et GitHub Pages ne sait pas servir une
 * route profonde sans `404.html` : une adresse comme `/portfolio/projets`
 * renverrait une vraie page introuvable. L'ancre, elle, ne quitte jamais
 * `index.html`. Aucune configuration serveur, aucune page introuvable
 * possible, et le lien reste copiable et partageable.
 *
 * Seul un fragment qui commence par `#/` est une route. Les ancres de section
 * existantes, `#about` ou `#projects`, restent de simples ancres : elles ne
 * peuvent donc pas etre confondues avec une route, ni aujourd'hui ni quand une
 * section sera ajoutee.
 *
 * Un fragment inconnu, `#/nimporte`, ramene a la page d'accueil plutot que de
 * laisser un ecran vide.
 */
function lireRoute(): Route {
  if (typeof window === 'undefined') return '/';
  const fragment = window.location.hash;
  if (!fragment.startsWith('#/')) return '/';
  return fragment.slice(1).replace(/\/+$/, '') === '/projets' ? '/projets' : '/';
}

export function useRouteAncre(): Route {
  const [route, setRoute] = useState<Route>(lireRoute);

  useEffect(() => {
    const surChangement = () => setRoute(lireRoute());
    window.addEventListener('hashchange', surChangement);
    return () => window.removeEventListener('hashchange', surChangement);
  }, []);

  // Un changement de page remet en haut : sans cela, le visiteur arrive au
  // milieu de la galerie parce qu'il lisait le bas de la page d'accueil.
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [route]);

  return route;
}

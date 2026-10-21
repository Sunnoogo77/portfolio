/**
 * Images propres a un projet, servies depuis `public/`.
 *
 * Aucune n'existe a ce jour dans le depot : la table est vide, et c'est un
 * fait, pas un oubli. Quand un projet n'a pas d'image, son visuel est compose
 * a partir des icones de sa pile technique. Ajouter une capture plus tard ne
 * demande qu'une ligne ici, et le rendu la preferera automatiquement.
 *
 * C'est une table de presentation : elle ne contient aucun fait et ne touche
 * pas a `src/data/`.
 */
export const visuelsDeProjet: Record<string, string> = {};

export function visuelDeProjet(id: string): string | null {
  return visuelsDeProjet[id] ?? null;
}

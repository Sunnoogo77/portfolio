import type { Status } from '@/data/types';

/**
 * Trois couleurs de statut seulement, celles de docs/SPEC-DESIGN.md, en texte
 * sur fond transparent avec un filet, jamais en pastille pleine. Les
 * `bg-green-500/10 text-green-500` de Tailwind, qui ne passaient aucun ratio
 * sur le theme clair, ont disparu.
 */
export const classeStatut: Record<Status, string> = {
  obtained: 'text-statut-livre',
  delivered: 'text-statut-livre',
  'in-progress': 'text-statut-encours',
  planned: 'text-statut-prevu',
};

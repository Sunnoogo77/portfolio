import type { Lang, Status } from '@/data/types';

/**
 * Trois couleurs de statut seulement, celles de docs/SPEC-DESIGN.md, en texte
 * sur fond transparent avec un filet, jamais en pastille pleine. Les
 * `bg-green-500/10 text-green-500` de Tailwind, qui ne passaient aucun ratio
 * sur le theme clair, ont disparu.
 *
 * `paused` prend la couleur des travaux non engages, et surtout pas celle des
 * travaux en cours : un projet suspendu n'avance pas. La specification
 * n'autorise que ces trois couleurs, aucune quatrieme n'est inventee ici, et
 * c'est le libelle qui separe « en pause » de « en preparation ».
 */
export const classeStatut: Record<Status, string> = {
  obtained: 'text-statut-livre',
  delivered: 'text-statut-livre',
  'in-progress': 'text-statut-encours',
  paused: 'text-statut-prevu',
  planned: 'text-statut-prevu',
};

/**
 * `projects.status.paused` n'existe pas dans les traductions, et
 * LanguageContext est fige. Le libelle des deux langues est donc porte ici,
 * et uniquement celui-la : tous les autres statuts passent par `t`.
 */
const PAUSE: Record<Lang, string> = { fr: 'en pause', en: 'paused' };

export function libelleStatut(
  status: Status,
  lang: Lang,
  t: (cle: string) => string
): string {
  return status === 'paused' ? PAUSE[lang] : t(`projects.status.${status}`);
}

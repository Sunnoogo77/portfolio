import type { Availability } from './types';

/**
 * Remplace le badge « Objectif : Stage de fin d'etudes », reste affiche neuf
 * mois apres coup sans que rien ne le signale.
 *
 * `updatedOn` est verifie par un test : au-dela de quatre-vingt-dix jours, la
 * suite echoue, pour que la peremption du contenu arrete la chaine plutot que
 * de passer inapercue.
 *
 * Deux CV distincts, un par type de contrat, et non un par langue : les deux
 * documents sont en francais, il n'existe aucune version anglaise. Le libelle
 * anglais des boutons le dit.
 */
const RESUME_CDI = '/assets/CV-Sunnoogo-Caleb-Tapsoba-CDI-CDD-fr.pdf';
const RESUME_ALTERNANCE = '/assets/CV-Sunnoogo-Caleb-Tapsoba-alternance-fr.pdf';

export const availability: Availability = {
  headline: {
    fr: "Disponible pour un CDI ou un CDD en cybersécurité, avec une préférence pour la sécurité cloud. Également à la recherche d'une alternance à partir de septembre 2027, dans le cadre d'une spécialisation complémentaire.",
    en: 'Available for a permanent or fixed-term role in cybersecurity, with a preference for cloud security. Also seeking an apprenticeship from September 2027, as part of a further specialisation.',
  },
  contracts: ['CDI', 'CDD', 'alternance'],
  startFrom: '2027-09',
  updatedOn: '2026-10-21',
  resume: {
    cdi: RESUME_CDI,
    alternance: RESUME_ALTERNANCE,
  },
};

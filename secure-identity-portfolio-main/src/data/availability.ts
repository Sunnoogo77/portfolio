import type { Availability } from './types';

/**
 * Remplace le badge « Objectif : Stage de fin d'etudes », reste affiche neuf
 * mois apres coup sans que rien ne le signale.
 *
 * `updatedOn` est verifie par un test : au-dela de quatre-vingt-dix jours, la
 * suite echoue, pour que la peremption du contenu arrete la chaine plutot que
 * de passer inapercue.
 *
 * Il n'existe pas de version anglaise a jour du CV. Le bouton anglais sert
 * donc le CV francais, et son libelle le dit.
 */
const RESUME_FR = '/assets/CV-Sunnoogo-Caleb-Tapsoba-fr-2026-10-16.pdf';

export const availability: Availability = {
  headline: {
    fr: "Disponible pour un CDI ou un CDD en cybersécurité, avec une préférence pour la sécurité cloud. Également à la recherche d'une alternance à partir de septembre 2027, dans le cadre d'une spécialisation complémentaire.",
    en: 'Available for a permanent or fixed-term role in cybersecurity, with a preference for cloud security. Also seeking an apprenticeship from September 2027, as part of a further specialisation.',
  },
  contracts: ['CDI', 'CDD', 'alternance'],
  startFrom: '2027-09',
  updatedOn: '2026-10-21',
  resume: {
    fr: RESUME_FR,
    // Aucune version anglaise n'existe : le CV francais est servi, et le
    // libelle du bouton anglais l'annonce.
    en: RESUME_FR,
  },
};

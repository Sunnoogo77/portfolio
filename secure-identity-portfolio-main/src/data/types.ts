/**
 * Contrat de donnees du portfolio.
 *
 * Il remplace le modele precedent, ou `status: 'past' | 'current' | 'future'`
 * melangeait ce qui a ete fait et ce qui est seulement envisage, sans date,
 * sans role, sans resultat, et ou `link` n'avait aucun moyen de dire qu'il
 * etait prive ou mort. C'est ce qui produisait seize projets sur trente et un
 * renvoyant le visiteur sur une page introuvable.
 *
 * Regle generale : un fait absent reste absent. Aucun champ ne se devine.
 */

export type Lang = 'fr' | 'en';
export type I18n = Record<Lang, string>;
export type I18nList = Record<Lang, string[]>;

/** Date volontairement partielle, donc toujours verifiable : 'YYYY' ou 'YYYY-MM'. */
export type PartialDate = string;

/**
 * `end: 'ongoing'` signifie reellement en cours.
 * `end: null` signifie que rien n'est engage.
 */
export interface Period {
  start: PartialDate | null;
  end: PartialDate | 'ongoing' | null;
}

/**
 * - `planned`     : decide, rien n'est engage
 * - `in-progress` : travail reellement en cours, verifiable
 * - `paused`      : commence puis suspendu, et le dire vaut mieux que
 *                   laisser croire a un travail qui avance
 * - `delivered`   : livre, mis en service ou soutenu
 * - `obtained`    : titre effectivement obtenu, exige une date
 */
export type Status =
  | 'planned'
  | 'in-progress'
  | 'paused'
  | 'delivered'
  | 'obtained';

/**
 * Visibilite reelle de la preuve.
 * Le rendu ne produit une balise `<a>` que pour `public`. C'est ce qui rend
 * structurellement impossible l'affichage d'un lien mort.
 */
export type LinkVisibility = 'public' | 'private' | 'none';

export interface Evidence {
  kind: 'repo' | 'certificate' | 'website' | 'none';
  visibility: LinkVisibility;
  /** Present UNIQUEMENT si `visibility` vaut 'public'. */
  url?: string;
  /** Renseigne par script, jamais a la main. Date ISO. */
  verifiedAt?: string;
}

/** Un chiffre, son unite, sa nuance. Jamais arrondi, jamais invente. */
export interface Outcome {
  value: number;
  unit: I18n;
  qualifier?: I18n;
}

/**
 * Niveau d'affichage.
 * - `featured` : pleine largeur avec colonne de notes, cinq au maximum
 * - `delivered`: grille des travaux realises
 * - `planned`  : liste sobre, compacte, sans lien
 */
export type Tier = 'featured' | 'delivered' | 'planned';

export interface Project {
  id: string;
  title: string;
  tier: Tier;
  status: Status;
  period: Period;
  role?: I18n;
  context?: I18n;
  summary: I18n;
  stack: string[];
  outcomes: Outcome[];
  evidence: Evidence;
}

export type TimelineKind =
  | 'education'
  | 'experience'
  | 'venture'
  | 'exchange'
  | 'training';

export interface TimelineEntry {
  id: string;
  kind: TimelineKind;
  period: Period;
  organisation: string;
  /** Precision de rattachement : « mission realisee depuis SAFIR Consulting ». */
  via?: string;
  role: I18n;
  location: I18n;
  /** Chemin d'un vrai drapeau servi depuis public/, jamais un emoji. */
  flag?: string;
  /** Chemin d'un vrai logo servi depuis public/. */
  logo?: string;
  summary: I18n;
  highlights: I18nList;
  outcomes?: Outcome[];
  evidence?: Evidence;
}

interface CertificationBase {
  id: string;
  title: string;
  /** 'SAP', 'Cisco NetAcad', 'Microsoft', 'ETS'. */
  issuer: string;
  description: I18n;
  tags: string[];
  badge?: string;
}

/**
 * Union discriminee : il devient impossible de marquer une certification
 * comme obtenue sans renseigner sa date d'obtention.
 */
export type Certification =
  | (CertificationBase & {
      status: 'obtained';
      obtainedOn: PartialDate;
      evidence: Evidence;
    })
  | (CertificationBase & {
      status: 'in-progress' | 'planned';
      /** Echeance visee, ou null si aucune date n'est arretee. */
      targetOn: PartialDate | null;
      evidence?: Evidence;
    });

export interface SkillRow {
  domain: I18n;
  tools: string[];
  /** Ou cela a servi. Renvoie a l'id d'une experience ou d'un projet reel. */
  usedIn: string[];
}

export interface Availability {
  headline: I18n;
  contracts: Array<'CDI' | 'CDD' | 'alternance'>;
  /** Pour l'alternance : '2027-09'. */
  startFrom?: PartialDate;
  /** Date ISO. Affichee « a jour au ... » : rend la peremption visible. */
  updatedOn: string;
  /** Chemin du CV servi, par langue. */
  resume: Record<Lang, string>;
}

/**
 * « En cours » est derive, jamais stocke.
 * Supprime par construction le defaut actuel, ou `isCurrent` etait pose a la
 * fois sur EFREI et sur Ecobank, faisant clignoter deux jalons simultanement
 * alors que le stage s'etait termine en mars 2025.
 */
export const isCurrent = (e: { period: Period }): boolean =>
  e.period.end === 'ongoing';

/**
 * Seul point d'acces autorise a une adresse. Retourne `null` des que la
 * preuve n'est pas publique, ce qui force le rendu a afficher un libelle
 * non cliquable au lieu d'un lien mort.
 */
export const publicUrl = (e?: Evidence): string | null =>
  e && e.visibility === 'public' && e.url ? e.url : null;

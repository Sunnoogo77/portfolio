import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  getCertificationsByStatus,
  certificationDate,
} from '@/data/certifications';
import { publicUrl, type Certification, type Lang } from '@/data/types';
import { getAssetPath } from '@/lib/assets';
import { useRepli } from '@/hooks/useRepli';
import { Section } from '@/components/layout/Section';
import { Depliable, BoutonDeplier } from '@/components/ui/depliable';

/**
 * Trois groupes clairement distingues, au lieu de quatorze cartes identiques
 * derriere quatre boutons de filtre : les obtenues, qui portent leur date et
 * leur certificat quand il existe, celles en preparation, et la feuille de
 * route.
 *
 * Les badges sont servis depuis public/img/certifications. Une certification
 * qui n'en a pas s'affiche sans cadre vide.
 *
 * Sur telephone, seules les deux premieres obtenues sont donnees et le reste
 * se deplie : six entrees detaillees d'affilee font trop d'informations a la
 * fois. Sur grand ecran la liste s'ouvre deja depliee.
 */

/** Nombre d'obtenues montrees avant depliage, sur telephone. */
const OBTENUES_VISIBLES = 2;

/** 'YYYY-MM' devient « avril 2026 », 'YYYY' reste tel quel. */
function dateLisible(brute: string, lang: Lang): string {
  const mois = /^(\d{4})-(\d{2})$/.exec(brute);
  if (!mois) return brute;
  return new Date(Number(mois[1]), Number(mois[2]) - 1, 1).toLocaleDateString(
    lang === 'fr' ? 'fr-FR' : 'en-GB',
    { month: 'long', year: 'numeric' }
  );
}

/**
 * Les badges portent leur propre fond : ils sont poses sur la meme plaque
 * neutre que les logos du parcours, pour que les deux themes les rendent de
 * la meme facon. Une certification sans badge n'affiche ni trou ni cadre
 * vide.
 */
function Badge({ cert }: { cert: Certification }) {
  if (!cert.badge) return null;
  return (
    <span className="shrink-0 rounded-[var(--radius)] border border-border bg-[hsl(var(--sur-accent))] p-1">
      <img
        src={getAssetPath(cert.badge)}
        alt=""
        width={40}
        height={40}
        loading="lazy"
        className="h-10 w-10 object-contain"
      />
    </span>
  );
}

/**
 * Une echeance est une cible, pas une inscription confirmee : le libelle le
 * dit. Il n'existe pas de cle de traduction pour cette phrase et
 * LanguageContext est fige, le libelle est donc porte ici.
 */
const ECHEANCE: Record<Lang, (date: string) => string> = {
  fr: (date) => `Échéance visée : ${date}`,
  en: (date) => `Targeted for ${date}`,
};

function Obtenue({ cert }: { cert: Certification }) {
  const { language, t } = useLanguage();
  const brute = certificationDate(cert);
  const url = publicUrl(cert.evidence);
  const lien = url?.startsWith('/') ? getAssetPath(url) : url;

  return (
    <article className="grille-notes border-t border-border pt-6">
      <div className="donnee space-y-2 text-muted-foreground">
        {brute && <p>{dateLisible(brute, language)}</p>}
        <p>{cert.issuer}</p>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h4 className="text-base font-semibold">{cert.title}</h4>
          <p className="mesure mt-2 text-sm text-muted-foreground">
            {cert.description[language]}
          </p>
          {lien && (
            <a
              href={lien}
              target="_blank"
              rel="noopener noreferrer"
              className="lien mt-3 inline-flex items-center gap-1.5 text-sm"
            >
              {t('certifications.viewCert')}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
        <Badge cert={cert} />
      </div>
    </article>
  );
}

function Visee({ cert }: { cert: Certification }) {
  const { language } = useLanguage();
  const echeance = certificationDate(cert);

  return (
    <li className="flex items-start justify-between gap-3 border-t border-border py-4">
      <div className="min-w-0">
        <p className="font-semibold">{cert.title}</p>
        <p className="donnee mt-1 text-muted-foreground">
          {cert.issuer}
          {echeance ? ` · ${ECHEANCE[language](dateLisible(echeance, language))}` : ''}
        </p>
        <p className="mesure mt-1 text-sm text-muted-foreground">
          {cert.description[language]}
        </p>
      </div>
      <Badge cert={cert} />
    </li>
  );
}

export function Certifications() {
  const { t } = useLanguage();
  const reste = useRepli();
  const obtenues = getCertificationsByStatus('obtained');
  const enCours = getCertificationsByStatus('in-progress');
  const feuilleDeRoute = getCertificationsByStatus('planned');

  const debut = obtenues.slice(0, OBTENUES_VISIBLES);
  const suite = obtenues.slice(OBTENUES_VISIBLES);

  return (
    <Section id="certifications">
      <h2>{t('certifications.title')}</h2>

      <h3 className="donnee mt-8 uppercase text-muted-foreground">
        {t('certifications.filter.obtained')}
      </h3>
      <div className="mt-4 space-y-6">
        {debut.map((cert) => (
          <Obtenue key={cert.id} cert={cert} />
        ))}
      </div>

      <Depliable id={reste.id} ouvert={reste.ouvert}>
        <div className="space-y-6 pt-6">
          {suite.map((cert) => (
            <Obtenue key={cert.id} cert={cert} />
          ))}
        </div>
      </Depliable>

      {suite.length > 0 && (
        <BoutonDeplier
          cible={reste.id}
          ouvert={reste.ouvert}
          onBascule={reste.basculer}
          libelle={t('certifications.more')}
          libelleFermer={t('deplier.replier')}
          className="mt-5"
        />
      )}

      <div className="mt-12 grid gap-x-12 gap-y-8 lg:grid-cols-2">
        <div>
          <h3 className="donnee uppercase text-muted-foreground">
            {t('certifications.filter.inProgress')}
          </h3>
          <ul className="mt-2">
            {enCours.map((cert) => (
              <Visee key={cert.id} cert={cert} />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="donnee uppercase text-muted-foreground">
            {t('certifications.filter.planned')}
          </h3>
          <ul className="mt-2">
            {feuilleDeRoute.map((cert) => (
              <Visee key={cert.id} cert={cert} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

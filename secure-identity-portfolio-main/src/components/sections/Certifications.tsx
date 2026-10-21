import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  getCertificationsByStatus,
  certificationDate,
} from '@/data/certifications';
import { publicUrl, type Certification, type Lang } from '@/data/types';
import { getAssetPath } from '@/lib/assets';
import { Section } from '@/components/layout/Section';
import { classeStatut } from './statut';
import { cn } from '@/lib/utils';

/**
 * Trois groupes clairement distingues, au lieu de quatorze cartes identiques
 * derriere quatre boutons de filtre : les obtenues, qui portent leur date et
 * leur certificat quand il existe, celles en preparation, et la feuille de
 * route.
 *
 * Les badges sont servis depuis public/img/certifications. Une certification
 * qui n'en a pas s'affiche sans cadre vide.
 */

/** 'YYYY-MM' devient « avril 2026 », 'YYYY' reste tel quel. */
function dateLisible(brute: string, lang: Lang): string {
  const mois = /^(\d{4})-(\d{2})$/.exec(brute);
  if (!mois) return brute;
  return new Date(Number(mois[1]), Number(mois[2]) - 1, 1).toLocaleDateString(
    lang === 'fr' ? 'fr-FR' : 'en-GB',
    { month: 'long', year: 'numeric' }
  );
}

function Badge({ cert }: { cert: Certification }) {
  if (!cert.badge) return null;
  return (
    <img
      src={getAssetPath(cert.badge)}
      alt=""
      width={48}
      height={48}
      loading="lazy"
      className="h-12 w-12 shrink-0 object-contain"
    />
  );
}

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
        <p>
          <span className={cn('statut', classeStatut[cert.status])}>
            {t(`certifications.status.${cert.status}`)}
          </span>
        </p>
      </div>

      <div className="flex items-start gap-4">
        <Badge cert={cert} />
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
      </div>
    </article>
  );
}

function Visee({ cert }: { cert: Certification }) {
  const { language } = useLanguage();

  return (
    <li className="flex items-start gap-3 border-t border-border py-4">
      <Badge cert={cert} />
      <div className="min-w-0">
        <p className="font-semibold">{cert.title}</p>
        <p className="donnee mt-1 text-muted-foreground">{cert.issuer}</p>
        <p className="mesure mt-1 text-sm text-muted-foreground">
          {cert.description[language]}
        </p>
      </div>
    </li>
  );
}

export function Certifications() {
  const { t } = useLanguage();
  const obtenues = getCertificationsByStatus('obtained');
  const enCours = getCertificationsByStatus('in-progress');
  const feuilleDeRoute = getCertificationsByStatus('planned');

  return (
    <Section id="certifications">
      <h2>{t('certifications.title')}</h2>

      <h3 className="donnee mt-8 uppercase text-muted-foreground">
        {t('certifications.filter.obtained')}
      </h3>
      <div className="mt-4 space-y-6">
        {obtenues.map((cert) => (
          <Obtenue key={cert.id} cert={cert} />
        ))}
      </div>

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

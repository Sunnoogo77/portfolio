import { useId, useState } from 'react';
import { Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useGrandEcran } from '@/hooks/useGrandEcran';
import { Button } from '@/components/ui/button';
import { Depliable, BoutonDeplier } from '@/components/ui/depliable';
import { getAssetPath } from '@/lib/assets';
import { premierePhrase } from '@/lib/texte';
import { availability } from '@/data/availability';

/**
 * Cinq faits, pas davantage, et jamais plus des deux tiers de la hauteur de
 * la fenetre : le nom, l'intitule, le diplome et son etat reel, la
 * disponibilite, et le telechargement du CV avec sa date de mise a jour.
 *
 * La hierarchie ne vient d'aucun effet, seulement de la mise en page : le nom
 * en grand, une phrase d'accroche nettement plus forte que le corps, la photo
 * remontee au rang de colonne a part entiere, et de l'air entre les trois.
 *
 * La disponibilite n'est plus une phrase de plus : elle est portee par les
 * deux boutons de CV, un par type de contrat.
 *
 * Sur telephone, seule la phrase d'accroche est donnee ; la suite se deplie.
 * Sans ce repli, le bandeau depassait les deux tiers de la hauteur a
 * 360 pixels de large. Le texte n'est ni reecrit ni resume : les deux morceaux
 * remis bout a bout rendent exactement la chaine d'origine.
 */
/**
 * Les deux boutons portent un libelle entier, donc du texte qui passe a la
 * ligne : `whitespace-normal` et une hauteur libre remplacent le `nowrap` et
 * la hauteur fixe du composant, qui faisaient deborder le libelle hors du
 * bouton sur telephone.
 */
const CLASSE_CV =
  'h-auto min-h-10 whitespace-normal px-3 py-2 text-center text-[0.8125rem] leading-snug sm:px-4 sm:text-sm';

export function Hero() {
  const { language, t } = useLanguage();
  const grandEcran = useGrandEcran();
  const [ouvert, setOuvert] = useState(false);
  const idSuite = useId();

  const [accroche, suite] = premierePhrase(t('hero.subtitle'));
  const suiteDepliable = Boolean(suite) && !grandEcran;

  const dateMaj = new Date(availability.updatedOn).toLocaleDateString(
    language === 'fr' ? 'fr-FR' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  return (
    <section
      id="accueil"
      className="pb-[clamp(1.25rem,5vw,4rem)] pt-[clamp(4.5rem,7vw,7rem)]"
    >
      <div className="conteneur">
        <div className="grid items-center gap-x-[clamp(2rem,5vw,4.5rem)] gap-y-6 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="min-w-0">
            {/* En dessous de 640 pixels la photo tient a cote du nom : posee
                au-dessus, elle poussait le bandeau au-dela de la fenetre. */}
            <div className="flex items-center gap-4 sm:block">
              <img
                src={getAssetPath('/img/sunnoogo-caleb-tapsoba.jpg')}
                alt="Sunnoogo Caleb Tapsoba"
                width={320}
                height={422}
                className="portrait w-[clamp(5.5rem,24vw,7rem)] shrink-0 sm:hidden"
              />
              <h1>Sunnoogo Caleb Tapsoba</h1>
            </div>

            <p className="accroche mesure mt-4">{accroche}</p>

            {suite &&
              (suiteDepliable ? (
                <>
                  <Depliable id={idSuite} ouvert={ouvert}>
                    <p className="mesure pt-3 text-muted-foreground">{suite}</p>
                  </Depliable>
                  <BoutonDeplier
                    cible={idSuite}
                    ouvert={ouvert}
                    onBascule={() => setOuvert((o) => !o)}
                    libelle={t('projects.showMore')}
                    libelleFermer={t('projects.showLess')}
                    className="mt-2.5"
                  />
                </>
              ) : (
                <p className="mesure mt-3 text-muted-foreground">{suite}</p>
              ))}

            {/* Deux CV, un par type de contrat : c'est la disponibilite
                elle-meme qui est ecrite sur les boutons. */}
            <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
              <Button asChild className={CLASSE_CV}>
                <a href={getAssetPath(availability.resume.cdi)} download>
                  {t('hero.cv.cdi')}
                  <Download aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" className={CLASSE_CV}>
                <a href={getAssetPath(availability.resume.alternance)} download>
                  {t('hero.cv.alternance')}
                  <Download aria-hidden="true" />
                </a>
              </Button>
            </div>

            <p className="donnee mt-2 text-muted-foreground">
              {t('availability.updatedOn')} {dateMaj}
            </p>
          </div>

          <img
            src={getAssetPath('/img/sunnoogo-caleb-tapsoba.jpg')}
            alt=""
            width={320}
            height={422}
            className="portrait hidden w-[clamp(10rem,22vw,15rem)] shrink-0 sm:block"
          />
        </div>
      </div>
    </section>
  );
}

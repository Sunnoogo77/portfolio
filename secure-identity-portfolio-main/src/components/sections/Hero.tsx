import { Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { getAssetPath } from '@/lib/assets';
import { availability } from '@/data/availability';

/**
 * Cinq faits, pas davantage : le nom, l'intitule avec le diplome et son etat
 * reel, la disponibilite, et le lien de telechargement du CV avec sa date de
 * mise a jour visible.
 *
 * Disparus : le min-h-screen, le degrade de fond, le motif de grille, les
 * deux anneaux decoratifs dont l'un debordait de trente-deux pixels a
 * 360 pixels de large, la lueur, la pastille clignotante et les quatre
 * boutons de grande taille qui occupaient 224 pixels de hauteur sur mobile.
 */
export function Hero() {
  const { language, t } = useLanguage();

  return (
    <section id="accueil" className="pb-[clamp(2rem,5vw,4rem)] pt-[clamp(5rem,7vw,6.5rem)]">
      <div className="conteneur">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <div className="min-w-0 flex-1">
            {/* En dessous de 640 pixels la photo tient a cote du nom : posee
                au-dessus, elle poussait le bandeau a cent vingt et un pour
                cent de la hauteur de la fenetre. */}
            <div className="flex items-center gap-4 sm:block">
              <img
                src={getAssetPath('/img/sunnoogo-caleb-tapsoba.jpg')}
                alt="Sunnoogo Caleb Tapsoba"
                width={320}
                height={422}
                className="w-20 shrink-0 rounded-[var(--radius)] border border-border sm:hidden"
              />
              <h1>Sunnoogo Caleb Tapsoba</h1>
            </div>

            <p className="mesure mt-4 text-muted-foreground">{t('hero.subtitle')}</p>

            <p className="mesure mt-3 text-muted-foreground">
              {t('contact.subtitle')}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button asChild>
                <a href={getAssetPath(availability.resume[language])} download>
                  {t('hero.downloadCV')}
                  <Download aria-hidden="true" />
                </a>
              </Button>
              <a href="#projects" className="lien text-sm">
                {t('hero.cta.projects')}
              </a>
            </div>

            <p className="donnee mt-3 text-muted-foreground">
              {t('availability.updatedOn')}{' '}
              {new Date(availability.updatedOn).toLocaleDateString(
                language === 'fr' ? 'fr-FR' : 'en-GB',
                { day: 'numeric', month: 'long', year: 'numeric' }
              )}
            </p>
          </div>

          <img
            src={getAssetPath('/img/sunnoogo-caleb-tapsoba.jpg')}
            alt=""
            width={320}
            height={422}
            className="hidden w-32 shrink-0 rounded-[var(--radius)] border border-border sm:block lg:w-40"
          />
        </div>
      </div>
    </section>
  );
}

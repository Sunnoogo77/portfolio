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
    <section id="accueil" className="pb-[clamp(2rem,5vw,4rem)] pt-[clamp(5.5rem,8vw,7rem)]">
      <div className="conteneur">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <div className="min-w-0 flex-1">
            <h1>Sunnoogo Caleb Tapsoba</h1>

            <p className="mesure mt-4 text-muted-foreground">{t('hero.subtitle')}</p>

            <p className="mesure mt-3 text-muted-foreground">
              {availability.headline[language]}
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
            alt="Sunnoogo Caleb Tapsoba"
            width={682}
            height={900}
            className="order-first w-24 shrink-0 rounded-[var(--radius)] border border-border object-cover sm:order-none sm:w-32 lg:w-40"
          />
        </div>
      </div>
    </section>
  );
}

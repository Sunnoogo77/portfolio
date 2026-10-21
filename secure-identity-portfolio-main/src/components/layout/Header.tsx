import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useMouvementReduit } from '@/hooks/useMouvementReduit';
import { useDefilement } from '@/hooks/useDefilement';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'timeline', labelKey: 'nav.timeline' },
  { id: 'certifications', labelKey: 'nav.certifications' },
  { id: 'contact', labelKey: 'nav.contact' },
];

/** Identite stable : evite de relancer l'observation a chaque rendu. */
const sectionIds = navItems.map((item) => item.id);

/**
 * Barre du haut en ile flottante.
 *
 * Elle n'occupe jamais toute la largeur, ni sur ordinateur ni sur telephone :
 * sa largeur est calee sur son contenu, elle est detachee des bords et elle
 * flotte au-dessus du contenu.
 *
 * C'est le seul endroit du site ou un flou est pose, parce que c'est le seul
 * ou il y a reellement quelque chose derriere. Le fond reste translucide a
 * quatre-vingt-huit pour cent : cette valeur n'est pas decorative, elle est
 * calculee. Dans le pire des cas, un fond blanc passant sous l'ile du theme
 * sombre, la composition donne un fond a 0,0282 de luminance relative, soit
 * 11,7 pour le texte principal, 5,8 pour le texte adouci et 5,1 pour l'accent.
 * Dans le pire des cas inverse, un fond noir sous l'ile du theme clair, 12,2 /
 * 4,7 / 5,7. Tous au-dessus de 4,5, le flou ne dispensant de rien.
 *
 * Comportement : elle se retracte en ile compacte des que la page quitte le
 * haut, s'efface en descendant et revient des qu'on remonte. Sous
 * `prefers-reduced-motion`, rien de tout cela : la barre reste simplement
 * visible et deployee.
 */
export function Header() {
  const { t } = useLanguage();
  const [menuOuvert, setMenuOuvert] = useState(false);
  const activeSection = useScrollSpy(sectionIds, 140);
  const mouvementReduit = useMouvementReduit();
  const { compacte, cachee } = useDefilement(!mouvementReduit);

  // Un menu ouvert interdit a l'ile de disparaitre sous les doigts du
  // visiteur, qui est justement en train de s'en servir.
  const effacee = cachee && !menuOuvert;

  const allerA = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: mouvementReduit ? 'auto' : 'smooth',
    });
    setMenuOuvert(false);
  };

  return (
    <div className="barre-zone">
      <header
        className={cn(
          'barre',
          compacte && !menuOuvert && 'barre-compacte',
          effacee && 'barre-effacee'
        )}
      >
        <div className="barre-rangee">
          <button
            type="button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: mouvementReduit ? 'auto' : 'smooth',
              });
              setMenuOuvert(false);
            }}
            className="rounded-md text-base font-semibold text-foreground"
          >
            Sunnoogo
          </button>

          {/* La navigation reste en clair des 900 pixels : elle basculait en
              menu hamburger a 1024 alors que la place existait. */}
          <nav className="hidden tablette:block">
            <ul className="flex items-center gap-0.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => allerA(item.id)}
                    aria-current={activeSection === item.id ? 'true' : undefined}
                    className={cn(
                      'barre-onglet',
                      activeSection === item.id && 'barre-onglet-actif'
                    )}
                  >
                    {t(item.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full tablette:hidden"
              onClick={() => setMenuOuvert(!menuOuvert)}
              aria-label={t('nav.toggleMenu')}
              aria-expanded={menuOuvert}
              aria-controls="menu-mobile"
            >
              {menuOuvert ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* L'ile se deploie vers le bas au lieu d'ouvrir un panneau separe :
            c'est le meme objet qui change de taille. */}
        <nav
          id="menu-mobile"
          className={cn('barre-menu', menuOuvert && 'barre-menu-ouvert')}
          aria-hidden={menuOuvert ? undefined : true}
        >
          <div className="barre-menu-contenu">
            <ul className="px-2 pb-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    tabIndex={menuOuvert ? undefined : -1}
                    onClick={() => allerA(item.id)}
                    aria-current={activeSection === item.id ? 'true' : undefined}
                    className={cn(
                      'w-full rounded-md px-3 py-2.5 text-left text-sm transition-colors',
                      activeSection === item.id
                        ? 'text-accent'
                        : 'text-foreground hover:bg-surface-2'
                    )}
                  >
                    {t(item.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollSpy } from '@/hooks/useScrollSpy';
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

export function Header() {
  const { t } = useLanguage();
  const [menuOuvert, setMenuOuvert] = useState(false);
  const activeSection = useScrollSpy(sectionIds, 120);

  const allerA = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOuvert(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-fond">
      <div className="conteneur">
        <div className="flex h-16 items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-md text-base font-semibold text-foreground"
          >
            Sunnoogo
          </button>

          {/* La navigation reste en clair des 900 pixels : elle basculait en
              menu hamburger a 1024 alors que la place existait. */}
          <nav className="hidden tablette:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => allerA(item.id)}
                    aria-current={activeSection === item.id ? 'true' : undefined}
                    className={cn(
                      'rounded-md px-2.5 py-2 text-sm transition-colors',
                      activeSection === item.id
                        ? 'text-accent underline underline-offset-[0.4em]'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {t(item.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              className="tablette:hidden"
              onClick={() => setMenuOuvert(!menuOuvert)}
              aria-label={t('nav.toggleMenu')}
              aria-expanded={menuOuvert}
              aria-controls="menu-mobile"
            >
              {menuOuvert ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {menuOuvert && (
        <nav id="menu-mobile" className="border-t border-border bg-fond tablette:hidden">
          <ul className="conteneur flex flex-col py-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => allerA(item.id)}
                  aria-current={activeSection === item.id ? 'true' : undefined}
                  className={cn(
                    'w-full rounded-md px-1 py-3 text-left text-sm',
                    activeSection === item.id
                      ? 'text-accent'
                      : 'text-muted-foreground'
                  )}
                >
                  {t(item.labelKey)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

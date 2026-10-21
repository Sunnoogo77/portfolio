import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="h-9 rounded-full px-3 text-xs uppercase tracking-wide"
      aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      {language === 'fr' ? 'EN' : 'FR'}
    </Button>
  );
}

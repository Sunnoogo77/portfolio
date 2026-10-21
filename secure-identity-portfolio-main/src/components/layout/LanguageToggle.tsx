import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="px-3 uppercase tracking-wide"
      aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      {language === 'fr' ? 'EN' : 'FR'}
    </Button>
  );
}

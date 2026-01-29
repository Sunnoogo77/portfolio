import { Download, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export function Hero() {
  const { language, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container relative mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight animate-fade-in-up">
              <span className="text-primary">Sunnoogo</span>
              <span className="text-foreground"> — {t('hero.title')}</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-100">
              {t('hero.subtitle')}
            </p>

            {/* Internship badge */}
            <div className="mt-8 animate-fade-in-up animation-delay-200">
              <a
                href={language === 'fr' ? '#' : '#'}
                className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-primary hover:border-primary hover:bg-primary/20 transition-all duration-300"
              >
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="font-medium">{t('hero.badge')}</span>
                <Download className="h-4 w-4" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-300">
              <Button
                size="lg"
                className="glow rounded-xl font-semibold"
                onClick={() => scrollToSection('projects')}
              >
                {t('hero.cta.projects')}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl font-semibold"
                onClick={() => scrollToSection('timeline')}
              >
                {t('hero.cta.timeline')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl font-semibold"
                onClick={() => scrollToSection('certifications')}
              >
                {t('hero.cta.certifications')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                {t('hero.cta.contact')}
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary glow">
              {/* Placeholder for profile image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-6xl md:text-7xl font-bold text-primary/30">SC</span>
              </div>
            </div>
            {/* Decorative rings */}
            <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse-glow" />
            <div className="absolute -inset-8 rounded-full border border-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

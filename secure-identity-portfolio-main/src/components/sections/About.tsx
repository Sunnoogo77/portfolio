import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">{t('about.title')}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* About Text */}
          <div className="lg:col-span-2">
            <Card className="card-hover border-primary/20 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed text-justify">
                  {t('about.p1')}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
                  {t('about.p2')}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
                  {t('about.p3')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Langues */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Languages className="h-5 w-5 text-primary" />
              {t('languages.title')}
            </h3>

            <Card className="card-hover border-primary/20 bg-primary/5">
              <CardContent className="p-5">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>{t('languages.fr')}</li>
                  <li>{t('languages.en')}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

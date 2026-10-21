import { useLanguage } from '@/contexts/LanguageContext';
import { skillRows, skillsIntro, usedInLabel } from '@/data/skills';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Skills() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('skills.title')}</h2>
        <p className="mb-12 text-muted-foreground">{skillsIntro[language]}</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillRows.map((row) => (
            <Card
              key={row.domain.fr}
              className="card-hover border-border bg-card/60 backdrop-blur-sm"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{row.domain[language]}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {row.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {t('skills.usedIn')}{' '}
                  {row.usedIn.map((id) => usedInLabel(id, language)).join(' · ')}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

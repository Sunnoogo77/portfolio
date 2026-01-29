import { useState } from 'react';
import { ChevronDown, ChevronUp, Target, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">{t('about.title')}</h2>
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="rounded-xl"
          >
            {isExpanded ? t('about.collapse') : t('about.expand')}
            {isExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
          </Button>
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
                
                {isExpanded && (
                  <div className="mt-4 space-y-4 animate-fade-in">
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {t('about.p4')}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {t('about.p5')}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {t('about.p6')}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Objectives */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              {t('objectives.title')}
            </h3>
            
            <Card className="card-hover border-primary/20 bg-primary/5">
              <CardContent className="p-5">
                <h4 className="font-semibold flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  {t('objectives.internship.title')}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t('objectives.internship.desc')}
                </p>
              </CardContent>
            </Card>

            {isExpanded && (
              <Card className="card-hover border-border bg-card/60 animate-fade-in">
                <CardContent className="p-5">
                  <h4 className="font-semibold">{t('objectives.consolidation.title')}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t('objectives.consolidation.desc')}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Networking', 'Active Directory', 'Linux/Bash', 'Python', 'SIEM/EDR', 'SOAR'].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-secondary border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { timelineEntries } from '@/data/timeline';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function Timeline() {
  const { language, t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="timeline" className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('timeline.title')}</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {timelineEntries.map((entry, index) => {
            const isExpanded = expandedId === entry.id;
            const isEven = index % 2 === 0;

            return (
              <div
                key={entry.id}
                className={cn(
                  'relative grid gap-8 mb-12 md:grid-cols-2',
                  'animate-fade-in-up'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className={cn(
                      'h-4 w-4 rounded-full bg-primary',
                      entry.isCurrent && 'animate-pulse-glow'
                    )} />
                    {entry.isCurrent && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                    )}
                  </div>
                </div>

                {/* Period - Left side on desktop */}
                <div className={cn(
                  'hidden md:flex items-start justify-end pr-12',
                  !isEven && 'order-2 justify-start pl-12 pr-0'
                )}>
                  <div className="text-right">
                    <span className="text-lg font-semibold text-primary">{entry.period}</span>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{entry.location}</span>
                      <span className="text-lg">{entry.flag}</span>
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className={cn(
                  'ml-8 md:ml-0',
                  isEven ? 'md:pl-12' : 'md:pr-12 order-1'
                )}>
                  {/* Mobile period */}
                  <div className="md:hidden mb-3">
                    <span className="text-lg font-semibold text-primary">{entry.period}</span>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{entry.location}</span>
                      <span className="text-lg">{entry.flag}</span>
                    </div>
                  </div>

                  <Card className={cn(
                    'card-hover border-border bg-card/60 backdrop-blur-sm',
                    entry.isCurrent && 'border-primary/30'
                  )}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold">{entry.title[language]}</h3>
                          <Badge variant="secondary" className="mt-2 text-xs">
                            {entry.subtitle[language]}
                          </Badge>
                        </div>
                        {/* Logo placeholder */}
                        <div className="shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                          <span className="text-2xl">{entry.flag}</span>
                        </div>
                      </div>

                      <p className="mt-4 text-sm text-muted-foreground">
                        {entry.description[language]}
                      </p>

                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                          <h4 className="font-semibold mb-2">
                            {language === 'fr' ? 'Points clés' : 'Highlights'}
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {entry.highlights[language].map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <button
                        onClick={() => toggleExpand(entry.id)}
                        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        {t('timeline.learnMore')}
                        {isExpanded ? (
                          <ChevronUp className="h-3.5 w-3.5" />
                        ) : (
                          <ChevronDown className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

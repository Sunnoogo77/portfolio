import { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { certifications, getCertificationCounts, type CertificationStatus } from '@/data/certifications';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getAssetPath } from '@/lib/assets';

type FilterType = CertificationStatus | 'all';

export function Certifications() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<FilterType>('obtained');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const counts = getCertificationCounts();

  const filteredCerts = useMemo(() => {
    if (filter === 'all') return certifications;
    return certifications.filter((c) => c.status === filter);
  }, [filter]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filters: { key: FilterType; labelKey: string }[] = [
    { key: 'obtained', labelKey: 'certifications.filter.obtained' },
    { key: 'in-progress', labelKey: 'certifications.filter.inProgress' },
    { key: 'future', labelKey: 'certifications.filter.future' },
    { key: 'all', labelKey: 'certifications.filter.all' },
  ];

  const getStatusStyles = (status: CertificationStatus) => {
    switch (status) {
      case 'obtained':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'in-progress':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'future':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    }
  };

  return (
    <section id="certifications" className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">{t('certifications.title')}</h2>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2">
            {filters.map(({ key, labelKey }) => (
              <Button
                key={key}
                variant={filter === key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(key)}
                className={cn(
                  'rounded-full',
                  filter === key && 'glow-sm'
                )}
              >
                {t(labelKey)} ({counts[key]})
              </Button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCerts.map((cert, index) => {
            const isExpanded = expandedId === cert.id;

            return (
              <Card
                key={cert.id}
                className="card-hover border-border bg-card/60 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold leading-tight">{cert.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {t(`status.${cert.status === 'in-progress' ? 'inProgress' : cert.status}`)} • {cert.year}
                      </p>
                    </div>
                    {/* Certification badge */}
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                      <img
                        src={getAssetPath(cert.badge)}
                        alt={cert.title}
                        className="w-full h-full object-contain p-1"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>';
                        }}
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground">
                    {cert.description[language]}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cert.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-secondary/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                      <h4 className="font-semibold text-sm mb-2">{t('certifications.details')}</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {cert.details[language].map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {cert.link && cert.link !== '#' && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                        >
                          {t('certifications.viewCert')}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  )}

                  <button
                    onClick={() => toggleExpand(cert.id)}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    {t('certifications.learnMore')}
                    {isExpanded ? (
                      <ChevronUp className="h-3.5 w-3.5" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredCerts.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            {t('certifications.noCerts')}
          </p>
        )}
      </div>
    </section>
  );
}

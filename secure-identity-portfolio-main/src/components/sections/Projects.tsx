import { useState, useMemo } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects, getProjectCounts, type ProjectStatus } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type FilterType = ProjectStatus | 'all';

export function Projects() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<FilterType>('past');
  const [showAll, setShowAll] = useState(false);
  const counts = getProjectCounts();

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((p) => p.status === filter);
  }, [filter]);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const filters: { key: FilterType; labelKey: string }[] = [
    { key: 'past', labelKey: 'projects.filter.past' },
    { key: 'current', labelKey: 'projects.filter.current' },
    { key: 'future', labelKey: 'projects.filter.future' },
    { key: 'all', labelKey: 'projects.filter.all' },
  ];

  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case 'past':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'current':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'future':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">{t('projects.title')}</h2>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2">
            {filters.map(({ key, labelKey }) => (
              <Button
                key={key}
                variant={filter === key ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setFilter(key);
                  setShowAll(false);
                }}
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

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <Card
              key={project.id}
              className="card-hover border-border bg-card/60 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  <Badge
                    variant="outline"
                    className={cn('shrink-0 text-xs', getStatusColor(project.status))}
                  >
                    {t(`status.${project.status}`)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description[language]}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 5).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-secondary/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 5 && (
                    <Badge variant="secondary" className="text-xs bg-secondary/50">
                      +{project.tags.length - 5}
                    </Badge>
                  )}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  {t('projects.viewProject')}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show more/less */}
        {filteredProjects.length > 6 && (
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="rounded-xl"
            >
              {showAll ? t('projects.showLess') : t('projects.showMore')}
              {showAll ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            {t('projects.noProjects')}
          </p>
        )}
      </div>
    </section>
  );
}

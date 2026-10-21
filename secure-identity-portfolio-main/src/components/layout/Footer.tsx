import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const annee = new Date().getFullYear();

  return (
    <footer className="filet">
      <div className="conteneur flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {annee} Sunnoogo Caleb Tapsoba. {t('footer.rights')}
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Sunnoogo77"
            target="_blank"
            rel="noopener noreferrer"
            className="lien text-sm"
            aria-label={t('footer.github')}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sunnoogo-caleb-tapsoba-130584292/"
            target="_blank"
            rel="noopener noreferrer"
            className="lien text-sm"
            aria-label={t('footer.linkedin')}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

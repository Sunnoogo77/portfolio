import { LanguageProvider } from '@/contexts/LanguageContext';
import { useRouteAncre } from '@/hooks/useRouteAncre';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Timeline } from '@/components/sections/Timeline';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { Galerie } from './Galerie';

/**
 * Deux pages, un seul fichier servi : la page d'accueil et la galerie de
 * projets, separees par un routage par ancre en `#/projets`. Aucune
 * configuration serveur, aucune page introuvable possible sur GitHub Pages.
 */
const Pages = () => {
  const route = useRouteAncre();
  const galerie = route === '/projets';

  return (
    <>
      <Header surGalerie={galerie} />
      {galerie ? (
        <Galerie />
      ) : (
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Certifications />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  );
};

const Index = () => (
  <LanguageProvider>
    <Pages />
  </LanguageProvider>
);

export default Index;

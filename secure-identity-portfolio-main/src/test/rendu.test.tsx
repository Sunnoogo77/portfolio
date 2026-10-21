import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import Index from '@/pages/Index';

/**
 * Test de fumee : la page se monte-t-elle reellement ?
 *
 * Il existe parce qu'un `ReferenceError` dans la liste des projets a mis le
 * site entier en page blanche, en passant la construction, le lint, les
 * quatorze tests de contenu et le deploiement sans qu'aucun ne bronche. Une
 * reponse HTTP 200 sur une application monopage ne prouve rien : le serveur
 * sert la coquille, le contenu vient du JavaScript.
 */
describe('la page', () => {
  afterEach(cleanup);

  it('se monte sans erreur et rend toutes ses sections', () => {
    render(<Index />);

    for (const id of [
      'about',
      'skills',
      'projects',
      'timeline',
      'certifications',
      'contact',
    ]) {
      expect(document.getElementById(id), `section manquante : ${id}`).not.toBeNull();
    }
  });

  it('affiche le nom et la disponibilite', () => {
    render(<Index />);

    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Tapsoba');
  });

  it("n'affiche nulle part un objet non resolu", () => {
    render(<Index />);

    expect(document.body.textContent).not.toContain('[object Object]');
  });
});

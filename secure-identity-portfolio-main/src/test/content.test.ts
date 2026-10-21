import { existsSync } from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';

import { projects } from '@/data/projects';
import { timelineEntries } from '@/data/timeline';
import { certifications } from '@/data/certifications';
import { skillRows, usedInLabel } from '@/data/skills';
import { availability } from '@/data/availability';
import { isCurrent, texte, type Evidence, type Lang } from '@/data/types';

const publicDir = path.resolve(__dirname, '../../public');

/** Toutes les preuves du site, avec de quoi nommer la fautive. */
const allEvidence: Array<{ owner: string; evidence: Evidence }> = [
  ...projects.map((p) => ({ owner: `projet ${p.id}`, evidence: p.evidence })),
  ...certifications
    .filter((c) => c.evidence)
    .map((c) => ({ owner: `certification ${c.id}`, evidence: c.evidence! })),
  ...timelineEntries
    .filter((e) => e.evidence)
    .map((e) => ({ owner: `parcours ${e.id}`, evidence: e.evidence! })),
];

describe('preuves', () => {
  it("ne porte jamais d'url quand la visibilite n'est pas publique", () => {
    const fautifs = allEvidence
      .filter(({ evidence }) => evidence.visibility !== 'public' && evidence.url)
      .map(({ owner }) => owner);

    expect(
      fautifs,
      `Ces entrees exposent une adresse alors que leur preuve n'est pas publique, ` +
        `ce qui est exactement ce qui envoyait le visiteur sur une page introuvable : ` +
        `${fautifs.join(', ')}`
    ).toEqual([]);
  });

  it('ne declare jamais une preuve publique sans url', () => {
    const fautifs = allEvidence
      .filter(({ evidence }) => evidence.visibility === 'public' && !evidence.url)
      .map(({ owner }) => owner);

    expect(
      fautifs,
      `Ces entrees se disent publiques sans adresse a servir : ${fautifs.join(', ')}`
    ).toEqual([]);
  });

  it('sert des fichiers qui existent reellement pour les preuves locales', () => {
    const manquants = allEvidence
      .filter(({ evidence }) => evidence.url?.startsWith('/'))
      .filter(({ evidence }) => !existsSync(path.join(publicDir, evidence.url!)))
      .map(({ owner, evidence }) => `${owner} (${evidence.url})`);

    expect(
      manquants,
      `Fichiers annonces mais absents de public/ : ${manquants.join(', ')}`
    ).toEqual([]);
  });
});

describe('parcours', () => {
  it("ne laisse qu'une seule experience professionnelle en cours", () => {
    const enCours = timelineEntries
      .filter((e) => e.kind === 'experience' || e.kind === 'venture')
      .filter(isCurrent)
      .map((e) => e.id);

    expect(
      enCours.length,
      `Plusieurs experiences professionnelles clignotent en meme temps : ${enCours.join(', ')}`
    ).toBeLessThanOrEqual(1);
  });

  it('sert des images de drapeau et de logo qui existent', () => {
    const manquants = timelineEntries
      .flatMap((e) => [e.flag, e.logo])
      .filter((p): p is string => Boolean(p))
      .filter((p) => !existsSync(path.join(publicDir, p)));

    expect(
      manquants,
      `Images annoncees mais absentes de public/ : ${manquants.join(', ')}`
    ).toEqual([]);
  });

  it("n'utilise plus d'emoji dans les donnees de parcours", () => {
    const emoji = /\p{Extended_Pictographic}|\p{Regional_Indicator}/u;
    const fautifs = timelineEntries
      .filter((e) => emoji.test(JSON.stringify(e)))
      .map((e) => e.id);

    expect(fautifs, `Emoji restants : ${fautifs.join(', ')}`).toEqual([]);
  });
});

describe('certifications', () => {
  it("porte une date d'obtention des qu'elle est obtenue", () => {
    const fautifs = certifications
      .filter((c) => c.status === 'obtained')
      .filter((c) => !('obtainedOn' in c) || !c.obtainedOn)
      .map((c) => c.id);

    expect(
      fautifs,
      `Certifications dites obtenues sans date d'obtention : ${fautifs.join(', ')}`
    ).toEqual([]);
  });

  it('date une obtention au format YYYY ou YYYY-MM', () => {
    const fautifs = certifications
      .filter((c) => c.status === 'obtained')
      .filter((c) => !/^\d{4}(-\d{2})?$/.test(c.obtainedOn))
      .map((c) => `${c.id} (${c.obtainedOn})`);

    expect(fautifs, `Dates mal formees : ${fautifs.join(', ')}`).toEqual([]);
  });
});

describe('projets', () => {
  it('ne met pas en avant plus de cinq projets', () => {
    const featured = projects.filter((p) => p.tier === 'featured');
    expect(featured.length).toBeLessThanOrEqual(5);
  });

  it("n'attribue pas deux fois le meme identifiant", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('competences', () => {
  it('ne renvoie qu a des projets ou des experiences qui existent', () => {
    const connus = new Set([
      ...projects.map((p) => p.id),
      ...timelineEntries.map((e) => e.id),
    ]);
    const inconnus = skillRows
      .flatMap((row) => row.usedIn)
      .filter((id) => !connus.has(id));

    expect(
      inconnus,
      `Competences rattachees a rien de reel : ${inconnus.join(', ')}`
    ).toEqual([]);
  });

  it('ne se prevaut pas d un projet seulement envisage', () => {
    const planifies = new Set(
      projects.filter((p) => p.tier === 'planned').map((p) => p.id)
    );
    const fautifs = skillRows
      .flatMap((row) => row.usedIn)
      .filter((id) => planifies.has(id));

    expect(
      fautifs,
      `Un projet en preparation ne prouve aucune competence : ${fautifs.join(', ')}`
    ).toEqual([]);
  });
});

describe('disponibilite', () => {
  it('sert un CV qui existe pour chaque type de contrat', () => {
    const manquants = Object.values(availability.resume).filter(
      (p) => !existsSync(path.join(publicDir, p))
    );
    expect(manquants, `CV annonces mais absents : ${manquants.join(', ')}`).toEqual([]);
  });

  it("n'a pas plus de quatre-vingt-dix jours", () => {
    const jours = Math.floor(
      (Date.now() - new Date(availability.updatedOn).getTime()) / 86_400_000
    );

    expect(
      jours,
      `Le bloc de disponibilite date de ${jours} jours. Le contenu du site s'est ` +
        `perime sans que rien ne le signale : c'est precisement ce qui a laisse ` +
        `l'ancien badge annoncer un stage neuf mois apres coup. Relisez le texte, ` +
        `le CV servi et les dates, puis remettez availability.updatedOn a jour.`
    ).toBeLessThanOrEqual(90);
  });
});

/**
 * Le typage du projet est permissif : `strict` est a false et `tsc` laisse
 * donc passer un objet la ou une chaine est attendue. Le defaut ne se voit
 * qu'a l'ecran, sous la forme d'un « [object Object] ». Ces deux tests le
 * rattrapent a la place du compilateur.
 */
describe('les titres', () => {
  const langues: Lang[] = ['fr', 'en'];

  it('ont une version non vide dans les deux langues quand ils sont bilingues', () => {
    const fautifs = projects
      .filter((p) => typeof p.title !== 'string')
      .filter((p) => langues.some((l) => !texte(p.title, l).trim()))
      .map((p) => p.id);

    expect(fautifs, `Titres bilingues incomplets : ${fautifs.join(', ')}`).toEqual([]);
  });

  it('se resolvent toujours en chaine dans la colonne de rattachement', () => {
    const fautifs: string[] = [];
    for (const ligne of skillRows) {
      for (const id of ligne.usedIn) {
        for (const l of langues) {
          const valeur = usedInLabel(id, l);
          if (typeof valeur !== 'string' || !valeur.trim()) {
            fautifs.push(`${id} (${l})`);
          }
        }
      }
    }

    expect(
      fautifs,
      `Rattachements qui ne produisent pas de texte : ${fautifs.join(', ')}. ` +
        `Un titre bilingue doit etre resolu par texte() avant d'etre affiche.`
    ).toEqual([]);
  });
});

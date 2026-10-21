import type { Lang, Period, TimelineEntry } from './types';

/**
 * Neuf entrees, de la plus recente a la plus ancienne.
 *
 * `isCurrent` a disparu : « en cours » se derive de `period.end === 'ongoing'`
 * par la fonction `isCurrent` de types.ts. Les emoji ont disparu eux aussi,
 * au profit des vraies images de drapeaux et des vrais logos servis depuis
 * `public/img/`.
 *
 * Un logo ou un drapeau dont le fichier n'existe pas dans le depot reste
 * absent : rien n'est invente.
 */
export const timelineEntries: TimelineEntry[] = [
  {
    id: 'hec-paris',
    kind: 'training',
    period: { start: '2026-09', end: 'ongoing' },
    organisation: 'HEC Paris',
    role: {
      fr: 'International Certificate in Corporate Finance',
      en: 'International Certificate in Corporate Finance',
    },
    // Le format a distance ne dit rien de la formation : la ligne reste vide
    // plutot que de donner ce detail le premier.
    location: { fr: '', en: '' },
    logo: '/img/logos/hec.png',
    summary: {
      fr: "Finance d'entreprise appliquée, pour porter les décisions d'investissement et de financement d'une jeune entreprise. Certificat visé en avril 2027.",
      en: 'Applied corporate finance, to carry the investment and financing decisions of an early-stage company. Certificate targeted for April 2027.',
    },
    highlights: { fr: [], en: [] },
  },
  {
    id: 'sorbonne-paris-nord',
    kind: 'education',
    period: { start: '2026-09', end: '2027' },
    organisation: 'Université Sorbonne Paris Nord',
    role: {
      fr: 'Diplôme Étudiant-Entrepreneur',
      en: 'Student-Entrepreneur Diploma',
    },
    location: { fr: 'Paris', en: 'Paris' },
    logo: '/img/logos/uspn.png',
    flag: '/img/flags/fr.svg',
    summary: {
      fr: "Admis au statut national d'étudiant-entrepreneur, qui accompagne la création d'entreprise pendant les études. Formalités administratives en cours.",
      en: 'Admitted to the French national student-entrepreneur status, which supports founding a company alongside one\'s studies. Administrative formalities under way.',
    },
    highlights: { fr: [], en: [] },
  },
  {
    id: 'impulsera',
    kind: 'venture',
    period: { start: '2025-10', end: 'ongoing' },
    organisation: 'Impulsera',
    role: {
      fr: 'Fondateur et responsable technique',
      en: 'Founder and technical lead',
    },
    location: { fr: 'Paris', en: 'Paris' },
    logo: '/img/logos/impulsera.svg',
    flag: '/img/flags/fr.svg',
    summary: {
      fr: "Startup née de mon projet de fin d'études, incubée à l'EFREI.",
      en: 'Startup born out of my final-year project, incubated at EFREI.',
    },
    highlights: { fr: [], en: [] },
    evidence: {
      kind: 'website',
      visibility: 'public',
      url: 'https://impulsera.fr',
    },
  },
  {
    id: 'safir-consulting',
    kind: 'experience',
    period: { start: '2026-07', end: '2026-09' },
    organisation: 'SAFIR Consulting SARL',
    via: 'Cabinet de conseil, intégrateur SAP partenaire',
    role: {
      fr: 'Stagiaire ingénieur, académie SAP',
      en: 'Engineering intern, SAP academy',
    },
    location: {
      fr: 'Ouagadougou, Burkina Faso',
      en: 'Ouagadougou, Burkina Faso',
    },
    flag: '/img/flags/bf.svg',
    logo: '/img/logos/safir.png',
    summary: {
      fr: "Académie SAP encadrée par une PMO et un Product Owner : comprendre les processus métier d'une entreprise et leur traduction dans son système d'information.",
      en: 'SAP academy led by a PMO and a Product Owner: understanding a company\'s business processes and how they translate into its information system.',
    },
    highlights: {
      fr: [
        "Formation, études de cas et travaux pratiques sur les processus métier de bout en bout d'une entreprise.",
        "Cycle de vie d'un projet d'implémentation SAP suivi de bout en bout, de l'expression du besoin client jusqu'au démarrage en production et à la phase de stabilisation.",
        'Liens établis entre processus financiers, achats, logistique et opérations, et leur traduction dans le système d\'information, dans un contexte de projet réel.',
      ],
      en: [
        'Training, case studies and hands-on work on a company\'s end-to-end business processes.',
        'Followed the full life cycle of an SAP implementation project, from gathering the client requirement through to go-live and the stabilisation phase that follows.',
        'Connected financial, procurement, logistics and operations processes to the way they are expressed in the information system, within a real project.',
      ],
    },
  },
  {
    id: 'soleil-resources',
    kind: 'experience',
    period: { start: '2026-06', end: '2026-07' },
    organisation: 'Soleil Resources',
    via: 'Mission obtenue par SAFIR Consulting',
    role: { fr: 'Consultant sécurité', en: 'Security consultant' },
    location: {
      fr: 'Ouagadougou, Burkina Faso',
      en: 'Ouagadougou, Burkina Faso',
    },
    flag: '/img/flags/bf.svg',
    summary: {
      fr: "Mise en place d'un centre opérationnel de sécurité chez un opérateur minier, de l'étude au transfert à l'équipe interne.",
      en: 'Built a security operations centre at a mining operator, from the initial study through to handover to the internal team.',
    },
    highlights: {
      fr: [
        "Choix et mise en place de la plateforme de supervision après une étude comparative et un dimensionnement, puis exploitation dans un réseau d'administration isolé.",
        "Dix-sept règles de détection écrites, dont treize validées par test réel. Les règles non testées ont été signalées comme telles, et la documentation d'exploitation remise à l'équipe interne.",
        "Travaux de durcissement de l'annuaire conduits avec l'équipe interne, puis transfert de compétences pour qu'elle en garde la maîtrise.",
        'En parallèle, accompagnement des équipes métier au démarrage en production de SAP S/4HANA Cloud.',
      ],
      en: [
        'Selected and set up the monitoring platform after a comparative study and a sizing exercise, then ran it inside an isolated management network.',
        'Seventeen detection rules written, thirteen of them validated by live testing. The untested rules were flagged as such, and the operating documentation was handed over to the internal team.',
        'Directory hardening carried out together with the internal team, followed by a handover so that the team retains full ownership.',
        'In parallel, supported the business teams through the SAP S/4HANA Cloud go-live.',
      ],
    },
    outcomes: [
      {
        value: 17,
        unit: {
          fr: 'règles de détection écrites',
          en: 'detection rules written',
        },
      },
      {
        value: 13,
        unit: {
          fr: 'règles validées par test réel',
          en: 'rules validated by live testing',
        },
      },
    ],
  },
  {
    id: 'sap-young-professionals',
    kind: 'training',
    period: { start: '2026-03', end: '2026-06' },
    organisation: 'SAP, Digital Skills Center EMEA',
    role: {
      fr: 'SAP Young Professionals Program',
      en: 'SAP Young Professionals Program',
    },
    location: { fr: 'À distance', en: 'Remote' },
    logo: '/img/logos/sap.png',
    summary: {
      fr: 'Programme sélectif, quatre mois à temps plein.',
      en: 'Selective programme, four months full time.',
    },
    highlights: { fr: [], en: [] },
  },
  {
    id: 'efrei',
    kind: 'education',
    period: { start: '2023', end: '2026' },
    organisation: 'EFREI Paris',
    role: {
      fr: "Diplôme d'ingénieur, systèmes, réseaux, cloud et cybersécurité",
      en: "Diplôme d'ingénieur in systems, networks, cloud and cybersecurity",
    },
    location: { fr: 'Villejuif, France', en: 'Villejuif, France' },
    flag: '/img/flags/fr.svg',
    logo: '/img/logos/efrei.png',
    summary: {
      fr: 'Cursus achevé, jury de délibération en novembre 2026. Bachelor of Engineering Science obtenu.',
      en: 'Course completed, board of examiners in November 2026. Bachelor of Engineering Science awarded.',
    },
    highlights: { fr: [], en: [] },
  },
  {
    id: 'ecobank',
    kind: 'experience',
    period: { start: '2024-12', end: '2025-03' },
    organisation: 'Ecobank Ghana PLC, entité eProcess',
    role: { fr: 'Stagiaire cybersécurité', en: 'Cybersecurity intern' },
    location: { fr: 'Accra, Ghana', en: 'Accra, Ghana' },
    flag: '/img/flags/gh.svg',
    logo: '/img/logos/ecobank1.png',
    summary: {
      fr: 'Environnement Microsoft 365 et Azure.',
      en: 'Microsoft 365 and Azure environment.',
    },
    highlights: {
      fr: [
        'Sécurité du poste de travail sous Intune et Defender : conformité des équipements, authentification multifacteur, gestion des correctifs, retrait des logiciels non autorisés, suivi du score de sécurité Azure.',
        "Centre opérationnel de sécurité : surveillance et corrélation de journaux sous Microsoft Sentinel, analyse d'incidents de premier niveau, rédaction des comptes rendus.",
        "Gouvernance en environnement bancaire : contribution aux politiques de conformité et aux procédures d'admission d'un serveur en production, alignées sur ISO 27001 et PCI-DSS. Introduction au DevSecOps et à l'OWASP Top 10, maquettage réseau sous GNS3, segmentation par VLAN.",
      ],
      en: [
        'Endpoint security with Intune and Defender: device compliance, multi-factor authentication, patch management, removal of unauthorised software, monitoring of the Azure secure score.',
        'Security operations centre: log monitoring and correlation in Microsoft Sentinel, first-line incident analysis, writing up the reports.',
        'Governance in a banking environment: contributed to the compliance policies and to the procedure for admitting a server into production, aligned with ISO 27001 and PCI-DSS. Introduction to DevSecOps and to the OWASP Top 10, network prototyping in GNS3, VLAN segmentation.',
      ],
    },
  },
  {
    id: 'staffordshire',
    kind: 'exchange',
    period: { start: '2024-01', end: '2024-05' },
    organisation: 'University of Staffordshire',
    role: {
      fr: "Semestre d'échange, informatique",
      en: 'Exchange semester, computer science',
    },
    location: {
      fr: 'Stoke-on-Trent, Royaume-Uni',
      en: 'Stoke-on-Trent, United Kingdom',
    },
    flag: '/img/flags/gb.svg',
    logo: '/img/logos/Staffordshire_University_Logo.svg.png',
    summary: {
      fr: "Semestre en Angleterre : cours en anglais, vie étudiante, projet web encadré, exposition culturelle et basketball.",
      en: 'Semester in England (Stoke-on-Trent): courses in English, student life, mentored web project, cultural exposure and basketball.',
    },
    highlights: {
      fr: [
        'Projet web en équipe avec encadrement académique proche.',
        'Progrès significatifs en anglais technique et académique.',
      ],
      en: [
        'Team web project with close academic mentoring.',
        'Significant progress in technical and academic English.',
      ],
    },
  },
  {
    id: 'inphb',
    kind: 'education',
    period: { start: '2021', end: '2023' },
    organisation: 'INP-HB',
    role: {
      fr: 'Classes préparatoires MPSI puis MP*',
      en: 'MPSI then MP* preparatory classes',
    },
    location: {
      fr: "Yamoussoukro, Côte d'Ivoire",
      en: "Yamoussoukro, Côte d'Ivoire",
    },
    flag: '/img/flags/ci.svg',
    logo: '/img/logos/inphb.png',
    summary: {
      fr: 'Deux années intensives en mathématiques, physique et informatique avec préparation rigoureuse aux concours nationaux.',
      en: 'Two intensive years in mathematics, physics and computer science with rigorous preparation for national competitive exams.',
    },
    highlights: {
      fr: [
        "MPSI (Mathématiques, Physique et Sciences de l'Ingénieur).",
        'MP* (Mathématiques, Physique & Informatique avancées) — filière sélective.',
      ],
      en: [
        'MPSI (Mathematics, Physics and Engineering Sciences).',
        'MP* (Advanced Mathematics, Physics & Computer Science) — selective track.',
      ],
    },
  },
];

/** Libelles de periode. 'ongoing' est le seul cas traduit. */
export function formatPeriod(period: Period, lang: Lang): string {
  const ongoing = lang === 'fr' ? 'en cours' : 'ongoing';
  const start = period.start ?? '';
  if (period.end === 'ongoing') return `${start} → ${ongoing}`;
  if (!period.end) return start;
  if (period.end === start) return start;
  return `${start} → ${period.end}`;
}

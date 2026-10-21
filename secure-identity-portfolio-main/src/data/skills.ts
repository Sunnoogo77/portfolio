import { texte } from './types';
import type { I18n, Lang, SkillRow } from './types';
import { projects } from './projects';
import { timelineEntries } from './timeline';

/**
 * Le mur de quarante-cinq etiquettes devient un tableau : domaine, outils, et
 * ou cela a servi.
 *
 * Regle appliquee sans exception : `usedIn` ne renvoie qu'a une experience
 * reelle ou a un projet livre ou en cours. Un projet seulement envisage ne
 * prouve aucune competence. Tout outil qui ne pouvait etre rattache qu'a un
 * projet en preparation est sorti du tableau.
 */
export const skillRows: SkillRow[] = [
  {
    domain: {
      fr: "SIEM, corrélation de journaux et analyse d'incidents",
      en: 'SIEM, log correlation and incident analysis',
    },
    tools: ['Wazuh', 'Sysmon', 'Microsoft Sentinel'],
    usedIn: ['soleil-resources', 'ecobank'],
  },
  {
    domain: {
      fr: "Détection sur l'hôte et surveillance d'intégrité",
      en: 'Host-based detection and integrity monitoring',
    },
    tools: ['PowerShell', 'FastAPI', 'Docker', 'SQLite'],
    usedIn: ['hids', 'hids-web', 'soleil-resources'],
  },
  {
    domain: {
      fr: 'Annuaire, identités et accès',
      en: 'Directory, identity and access',
    },
    tools: ['Active Directory', 'GPO', 'FGPP', 'LAPS', 'MFA', 'TOTP'],
    usedIn: ['enterprise-ad', 'soleil-resources', 'ecobank', 'mfa'],
  },
  {
    domain: {
      fr: 'Sécurité du poste de travail',
      en: 'Endpoint security',
    },
    tools: ['Microsoft Intune', 'Microsoft Defender', 'Microsoft 365'],
    usedIn: ['ecobank'],
  },
  {
    domain: {
      fr: 'Durcissement des systèmes',
      en: 'Systems hardening',
    },
    tools: ['Windows Server', 'Debian', 'UFW', 'PAM', 'Lynis', 'sysctl'],
    usedIn: ['debian-hardening', 'enterprise-ad', 'soleil-resources'],
  },
  {
    domain: {
      fr: 'Réseau et segmentation',
      en: 'Networking and segmentation',
    },
    tools: ['VLAN', 'DMZ', 'VPN IPSec', 'GNS3', 'Scapy'],
    usedIn: ['secure-network', 'ecobank', 'packet-sniffing'],
  },
  {
    domain: {
      fr: 'Cloud et infrastructure as code',
      en: 'Cloud and infrastructure as code',
    },
    tools: ['Azure', 'Terraform', 'GitHub Actions', 'GitLab CI'],
    usedIn: ['impulsera', 'secureflow'],
  },
  {
    domain: {
      fr: 'Sécurité applicative et DevSecOps',
      en: 'Application security and DevSecOps',
    },
    tools: [
      'Bandit',
      'pip-audit',
      'Checkov',
      'Trivy',
      'Gitleaks',
      'CodeQL',
      'OWASP Top 10',
    ],
    usedIn: ['impulsera', 'secureflow', 'ecobank'],
  },
  {
    domain: {
      fr: 'Développement',
      en: 'Development',
    },
    tools: ['Python', 'Django', 'Flask', 'React', 'TypeScript', 'Node.js'],
    usedIn: ['impulsera', 'webhawk', 'astsu', 'vaultroom', 'mfa', 'crypto-web'],
  },
  {
    domain: {
      fr: 'Chiffrement et transport sécurisé',
      en: 'Encryption and secure transport',
    },
    tools: ['TLS/SSL', 'JWT'],
    usedIn: ['vaultroom', 'crypto-web', 'hids-web'],
  },
  {
    domain: {
      fr: 'Conformité et gouvernance',
      en: 'Compliance and governance',
    },
    tools: ['ISO 27001', 'PCI-DSS'],
    usedIn: ['ecobank'],
  },
  {
    domain: {
      fr: 'SAP',
      en: 'SAP',
    },
    tools: ['SAP S/4HANA Cloud', 'SAP Build'],
    usedIn: ['soleil-resources', 'sap-young-professionals'],
  },
];

/**
 * Libelle d'un identifiant de `usedIn`. Ne retourne jamais un libelle invente :
 * l'identifiant doit exister dans les projets ou dans le parcours.
 */
export function usedInLabel(id: string, lang: Lang): string {
  const project = projects.find((p) => p.id === id);
  if (project) return texte(project.title, lang);
  const entry = timelineEntries.find((e) => e.id === id);
  if (entry) return entry.organisation;
  return id;
}

export const skillsIntro: I18n = {
  fr: "Chaque ligne renvoie à une expérience ou à un projet réel. Les outils qui ne pouvaient être rattachés à rien ont été retirés.",
  en: 'Every row points to a real experience or project. Tools that could not be tied to anything were removed.',
};

import type { Project, Tier } from './types';

/**
 * Trente-trois projets, hierarchises en trois niveaux.
 *
 * Les resumes des trente et un projets existants sont de la main du
 * proprietaire et sont conserves mot pour mot, en francais comme en anglais.
 * Seul leur classement change.
 *
 * `evidence.visibility` a ete verifiee depot par depot avec `gh repo view`
 * le 21 octobre 2026 :
 * - quatorze depots GitHub publics,
 * - douze preuves existantes mais non publiques, dont onze depots GitHub
 *   prives et l'espace GitLab de SecureFlow, qui repond 403,
 * - cinq depots qui n'existent pas, passes en `none`.
 *
 * Les dates des trente et un projets existants ne figurent ni dans la
 * specification ni dans le depot : `period` reste donc a `null`.
 */
export const projects: Project[] = [
  // ------------------------------------------------------------------
  // Niveau 1 : mis en avant. Cinq entrees au maximum.
  // ------------------------------------------------------------------
  {
    id: 'impulsera',
    title: 'Impulsera',
    tier: 'featured',
    status: 'in-progress',
    period: { start: '2025-10', end: 'ongoing' },
    role: {
      fr: 'Fondateur et responsable technique',
      en: 'Founder and technical lead',
    },
    context: {
      fr: "Startup née de mon projet de fin d'études, incubée à l'EFREI",
      en: 'Startup born out of my final-year project, incubated at EFREI',
    },
    summary: {
      fr: "Plateforme développée en pilotant des agents d'intelligence artificielle, Claude Code et Codex : cadrage et spécification en amont, délégation du code aux agents, revue humaine bloquante et contrôles automatiques avant toute fusion. La sécurité est écrite avant le code, et les chaînes d'intégration sont durcies. J'ai conduit un audit de sécurité de mon propre code comme un audit externe, en consignant chaque écart entre la documentation et l'implémentation réelle, référencé au fichier et à la ligne avec son test d'acceptation. L'architecture Azure est décrite en Terraform sur onze modules, conçue et revue, le déploiement n'est pas réalisé.",
      en: 'A platform built by directing AI coding agents, Claude Code and Codex: scoping and specification up front, implementation delegated to the agents, blocking human review and automated checks before any merge. Security requirements are written before the code, and the delivery pipelines are hardened. I audited my own codebase as an external auditor would, recording every gap between the documentation and the actual implementation, each referenced to a file and a line with its acceptance test. The Azure architecture is described in Terraform across eleven modules, designed and reviewed, not deployed.',
    },
    stack: [
      'Django',
      'React',
      'TypeScript',
      'Terraform',
      'Azure',
      'GitHub Actions',
      'Bandit',
      'pip-audit',
      'Checkov',
      'Trivy',
      'Gitleaks',
      'CodeQL',
    ],
    outcomes: [
      {
        value: 1396,
        unit: { fr: 'tests côté serveur', en: 'server-side tests' },
      },
      {
        value: 28,
        unit: { fr: 'fiches de remédiation', en: 'remediation records' },
        qualifier: {
          fr: "issues d'un audit de sécurité de mon propre code",
          en: 'from a security audit of my own code',
        },
      },
    ],
    evidence: {
      kind: 'website',
      visibility: 'public',
      url: 'https://impulsera.fr',
    },
  },
  {
    id: 'azure-security-lab',
    title: 'Azure Enterprise Security Lab',
    tier: 'featured',
    status: 'planned',
    period: { start: '2026', end: null },
    role: {
      fr: 'Projet personnel',
      en: 'Personal project',
    },
    summary: {
      fr: "Concevoir, déployer, sécuriser et documenter une zone d'atterrissage Azure pour une PME simulée de 150 à 300 collaborateurs, par paliers et sous contrainte de budget, en justifiant chaque choix d'architecture et les compromis qu'il implique. L'architecture cible est arrêtée : réseau en hub-and-spoke segmenté, groupes de sécurité en refus par défaut, accès aux services de données par connectivité privée, identités en moindre privilège par groupes Entra ID et RBAC. L'infrastructure as code en Terraform, la chaîne GitHub Actions en fédération OIDC et les analyses Checkov, Trivy et Gitleaks sont envisagées, de même que la gouvernance par Azure Policy, Key Vault et Log Analytics.",
      en: 'Designing, deploying, securing and documenting an Azure landing zone for a simulated company of 150 to 300 employees, in stages and under a constrained budget, justifying every architectural choice and the trade-offs it entails. The target architecture is settled: a segmented hub-and-spoke network, deny-by-default security groups, private connectivity to data services, least-privilege identities through Entra ID groups and RBAC. Infrastructure as code in Terraform, a GitHub Actions pipeline using OIDC federation and Checkov, Trivy and Gitleaks scanning are all under consideration, as is governance through Azure Policy, Key Vault and Log Analytics.',
    },
    stack: [
      'Azure',
      'Entra ID',
      'Terraform',
      'GitHub Actions',
      'Checkov',
      'Trivy',
      'Gitleaks',
      'Azure Policy',
      'Key Vault',
      'Log Analytics',
    ],
    outcomes: [],
    evidence: {
      kind: 'repo',
      visibility: 'public',
      url: 'https://github.com/Sunnoogo77/azure-security-lab',
    },
  },
  {
    id: 'secureflow',
    title: 'SecureFlow Platform — Cloud & Secured DevSecOps',
    tier: 'delivered',
    status: 'delivered',
    period: { start: null, end: null },
    summary: {
      fr: 'Plateforme Azure sécurisée avec IaC Terraform, réseau segmenté, et pipelines CI/CD GitLab/GitHub Actions incluant scans SAST/Trivy/Checkov plus durcissement et monitoring DevSecOps.',
      en: 'Engineered a secure Azure platform with Terraform IaC, segmented networking, and GitLab/GitHub Actions CI/CD pipelines featuring SAST/Trivy/Checkov scans plus DevSecOps hardening and monitoring.',
    },
    stack: ['Azure', 'Terraform', 'DevSecOps', 'CI/CD', 'SAST', 'GitLab', 'GitHub Actions'],
    outcomes: [],
    evidence: { kind: 'repo', visibility: 'private' },
  },
  {
    id: 'secure-network',
    title: { fr: 'Architecture réseau sécurisée multi-sites', en: 'Secure multi-site network architecture' },
    tier: 'featured',
    status: 'delivered',
    period: { start: null, end: null },
    summary: {
      fr: 'Architecture réseau pour école multi-sites avec segmentation, DMZ, VPN IPSec et monitoring suivant les bonnes pratiques Blue Team.',
      en: 'Network architecture for a multisite school with segmentation, DMZ, IPSec VPN and monitoring following Blue Team best practices.',
    },
    stack: ['Networking', 'VLAN', 'Firewall', 'Blue Team', 'VPN', 'Segmentation'],
    outcomes: [],
    evidence: {
      kind: 'repo',
      visibility: 'public',
      url: 'https://github.com/Sunnoogo77/secure-network-architecture-campus',
    },
  },
  {
    id: 'webhawk',
    title: 'WebHawk',
    tier: 'featured',
    status: 'delivered',
    period: { start: null, end: null },
    summary: {
      fr: 'Scanner éducatif de vulnérabilités web (SQLi, XSS, LFI, IDOR, CSRF, SSRF, RCE) avec rapports JSON, modes CLI/interactif et packaging Docker.',
      en: 'Educational web vulnerability scanner (SQLi, XSS, LFI, IDOR, CSRF, SSRF, RCE) with JSON reports, CLI/interactive modes and Docker packaging.',
    },
    stack: ['Python', 'Scanner', 'Web', 'Docker', 'Education', 'Blue Team'],
    outcomes: [],
    evidence: {
      kind: 'repo',
      visibility: 'public',
      url: 'https://github.com/Sunnoogo77/WebHawk',
    },
  },

  // ------------------------------------------------------------------
  // Niveau 2 : travaux realises.
  // ------------------------------------------------------------------
  {
    id: 'enterprise-ad',
    title: { fr: 'Infrastructure Active Directory Entreprise', en: 'Enterprise Active Directory infrastructure' },
    tier: 'delivered',
    status: 'paused',
    period: { start: null, end: null },
    summary: {
      fr: "Déploiement complet d'une infrastructure AD réaliste avec gestion des utilisateurs, GPOs, délégation RBAC, FGPP, audit, réplication et connectivité cloud hybride.",
      en: 'Full deployment of a realistic Active Directory infrastructure with user management, GPOs, RBAC delegation, FGPP, auditing, replication and hybrid cloud connectivity.',
    },
    stack: ['Active Directory', 'Windows Server', 'GPO', 'AD Security', 'Blue Team'],
    outcomes: [],
    evidence: {
      kind: 'repo',
      visibility: 'public',
      url: 'https://github.com/Sunnoogo77/enterprise-ad-lab',
    },
  },
  {
    id: 'hids-web',
    title: 'HIDS-Web',
    tier: 'featured',
    status: 'delivered',
    period: { start: null, end: null },
    summary: {
      fr: "Plateforme de surveillance d'hôte locale : surveille fichiers, dossiers et IPs, génère alertes et rapports pour détecter et gérer les incidents.",
      en: 'Local host monitoring platform: tracks files, folders and IPs, raises alerts and provides reports to help detect and manage incidents.',
    },
    stack: ['FastAPI', 'Docker', 'SQLite', 'JWT', 'Blue Team', 'HIDS'],
    outcomes: [],
    evidence: {
      kind: 'repo',
      visibility: 'public',
      url: 'https://github.com/Sunnoogo77/HIDS2.0',
    },
  },
  {
    id: 'hids',
    title: 'HIDS (Host-Based IDS)',
    tier: 'delivered',
    status: 'delivered',
    period: { start: null, end: null },
    summary: {
      fr: "Détection basée sur l'hôte en PowerShell : surveille les activités et patterns suspects avec configuration et artefacts orientés Blue Team.",
      en: 'Host-based detection in PowerShell: monitors suspicious activity and patterns with Blue Team-oriented configuration and artefacts.',
    },
    stack: ['PowerShell', 'Windows', 'HIDS', 'Blue Team'],
    outcomes: [],
    evidence: {
      kind: 'repo',
      visibility: 'public',
      url: 'https://github.com/Sunnoogo77/HIDS',
    },
  },
  {
    id: 'debian-hardening',
    title: { fr: 'Hardening Debian pour Moodle', en: 'Debian hardening for a Moodle server' },
    tier: 'delivered',
    status: 'delivered',
    period: { start: null, end: null },
    summary: {
      fr: "Durcissement d'un serveur Debian pour Moodle : mises à jour auto, UFW/ICMP, services, permissions, SUID/SGID, /tmp en tmpfs, sysctl, PAM et audits.",
      en: 'Hardening a Debian server for Moodle: automatic updates, UFW/ICMP, services, permissions, SUID/SGID, /tmp mounted as tmpfs, sysctl, PAM and audits.',
    },
    stack: ['Debian', 'Hardening', 'UFW', 'PAM', 'Lynis', 'Blue Team'],
    outcomes: [],
    evidence: {
      kind: 'repo',
      visibility: 'public',
      url: 'https://github.com/Sunnoogo77/debian-hardening-moodle',
    },
  },
  {
    id: 'astsu',
    title: 'ASTSU – Advanced Security Testing & Scanning Utility',
    tier: 'delivered',
    status: 'delivered',
    period: { start: null, end: null },
    summary: {
      fr: "Scanne les ports TCP/UDP, empreintes OS, mode furtif, découverte d'hôtes. Image Docker et alias CLI pratiques.",
      en: 'Scans TCP/UDP ports, fingerprints OS, stealth mode, host discovery. Provides a Docker image and handy CLI aliases.',
    },
    stack: ['Python', 'Networking', 'Scanner', 'Docker'],
    outcomes: [],
    evidence: {
      kind: 'repo',
      visibility: 'public',
      url: 'https://github.com/Sunnoogo77/ASTSU',
    },
  },
  {
    id: 'vaultroom',
    title: 'VaultRoom',
    tier: 'delivered',
    status: 'delivered',
    period: { start: null, end: null },
    summary: {
      fr: 'Plateforme de communication sécurisée : authentification, discussions privées, TLS/SSL, architecture prête pour Socket.IO.',
      en: 'Secure communication platform: authentication, private discussions, TLS/SSL, architecture ready for Socket.IO.',
    },
    stack: ['Flask', 'Python', 'TLS', 'Chat', 'Web'],
    outcomes: [],
    evidence: {
      kind: 'repo',
      visibility: 'public',
      url: 'https://github.com/Sunnoogo77/VaultRoom',
    },
  },
  {
    id: 'mfa',
    title: 'MFA – Multi-Factor Authentication',
    tier: 'delivered',
    status: 'delivered',
    period: { start: null, end: null },
    summary: {
      fr: "Système d'authentification multi-facteurs (mot de passe + TOTP). Backend Express/Passport, frontend React.",
      en: 'Multi-factor authentication system (password + TOTP). Express/Passport backend, React frontend.',
    },
    stack: ['Node.js', 'Express', 'React', '2FA', 'Passport', 'Speakeasy'],
    outcomes: [],
    evidence: {
      kind: 'repo',
      visibility: 'public',
      url: 'https://github.com/Sunnoogo77/MFA',
    },
  },
  {
    id: 'packet-sniffing',
    title: 'Packet Sniffing (Scapy + Supabase)',
    tier: 'delivered',
    status: 'delivered',
    period: { start: null, end: null },
    summary: {
      fr: 'Capture et analyse de paquets en temps réel, stockage cloud Supabase, schémas SQL et API prévus.',
      en: 'Real-time packet capture and analysis, Supabase cloud storage, planned SQL schemas and API.',
    },
    stack: ['Python', 'Scapy', 'Supabase', 'PostgreSQL', 'Networking', 'Monitoring'],
    outcomes: [],
    evidence: {
      kind: 'repo',
      visibility: 'public',
      url: 'https://github.com/Sunnoogo77/Packet_Sniffing',
    },
  },
  {
    id: 'crypto-web',
    title: { fr: 'Mini Cryptographie Web', en: 'Web cryptography mini-project' },
    tier: 'delivered',
    status: 'delivered',
    period: { start: null, end: null },
    summary: {
      fr: 'Chiffre/déchiffre textes et fichiers, inclut une démo brute-force, backend Flask et frontend React.',
      en: 'Encrypts/decrypts text and files, includes a brute-force demo, Flask backend and React frontend.',
    },
    stack: ['Python', 'Flask', 'React', 'Crypto', 'Web'],
    outcomes: [],
    evidence: {
      kind: 'repo',
      visibility: 'public',
      url: 'https://github.com/Sunnoogo77/file-text-encryptor',
    },
  },
  {
    id: 'password-cracking',
    title: { fr: 'Password Cracking (outil + rapport)', en: 'Password cracking: tool and report' },
    tier: 'delivered',
    status: 'delivered',
    period: { start: null, end: null },
    summary: {
      fr: 'Outil de cracking (brute-force, dictionnaire, masque, hybride) avec GUI PyQt5 et rapport de sensibilisation.',
      en: 'Cracking tool (brute-force, dictionary, mask, hybrid) with PyQt5 GUI and awareness report.',
    },
    stack: ['Python', 'PyQt5', 'Passwords', 'Education'],
    outcomes: [],
    evidence: {
      kind: 'repo',
      visibility: 'public',
      url: 'https://github.com/Sunnoogo77/Password-Cracking',
    },
  },
  {
    id: 'cyber-infosec',
    title: 'Cybersecurity vs Information Security',
    tier: 'delivered',
    status: 'delivered',
    period: { start: null, end: null },
    summary: {
      fr: 'Comparaison éducative avec ressources et assets pour une publication LinkedIn.',
      en: 'Educational comparison with resources and assets for a LinkedIn publication.',
    },
    stack: ['Education', 'Infosec', 'Writing'],
    outcomes: [],
    evidence: {
      kind: 'repo',
      visibility: 'public',
      url: 'https://github.com/Sunnoogo77/Cybersecurity_Infosec',
    },
  },

  // ------------------------------------------------------------------
  // Niveau 3 : en preparation. Aucun travail n'y est engage.
  // ------------------------------------------------------------------
  {
    id: 'wazuh-sysmon',
    title: 'Wazuh x Sysmon – Lab Blue Team',
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: 'Guide de déploiement Sysmon plus scénarios de simulation (comportements ransomware) pour générer des alertes dans Wazuh.',
      en: 'Guide to deploying Sysmon plus simulation scenarios (ransomware behaviours) to generate alerts in Wazuh.',
    },
    stack: ['Wazuh', 'Sysmon', 'Windows', 'Blue Team', 'Lab'],
    outcomes: [],
    evidence: {
      kind: 'repo',
      visibility: 'public',
      url: 'https://github.com/Sunnoogo77/test-for-wazuh',
    },
  },
  {
    id: 'securecloudlab',
    title: { fr: 'Environnement cloud sécurisé sur AWS (SecureCloudLab)', en: 'Secure AWS cloud environment (SecureCloudLab)' },
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: "Conception d'un cloud privé sécurisé sur AWS avec réseau segmenté, bastion, contrôle IAM, logging CloudTrail, monitoring CloudWatch et segmentation fine des services.",
      en: 'Design of a secure private cloud on AWS with segmented networking, bastion host, IAM control, CloudTrail logging, CloudWatch monitoring and fine-grained service segmentation.',
    },
    stack: ['AWS', 'VPC', 'Cloud Security', 'IAM', 'Blue Team', 'Monitoring'],
    outcomes: [],
    evidence: { kind: 'repo', visibility: 'private' },
  },
  {
    id: 'pki-iac',
    title: { fr: 'Infrastructure PKI, IAM et gestion IT intégrée', en: 'PKI, IAM and integrated IT management' },
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: "Déploiement d'une infrastructure PKI complète (Root/Sub CA) intégrée à AD, authentification forte par certificat, IAM via Keycloak et gestion IT via GLPI connecté à LDAP.",
      en: 'Deployment of a complete PKI infrastructure (Root/Sub CA) integrated with Active Directory, strong certificate-based authentication, IAM via Keycloak and IT management through GLPI connected to LDAP.',
    },
    stack: ['PKI', 'Keycloak', 'GLPI', 'LDAP', 'Authentification', 'Blue Team'],
    outcomes: [],
    evidence: { kind: 'repo', visibility: 'private' },
  },
  {
    id: 'aws-secrets',
    title: { fr: 'Monitoring des accès aux secrets AWS', en: 'Monitoring access to AWS secrets' },
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: "Surveillance en temps réel des accès aux secrets AWS via CloudTrail, CloudWatch, SNS et notifications d'alerte pour les accès sensibles.",
      en: 'Real-time monitoring of access to AWS secrets using CloudTrail, CloudWatch, SNS and alert notifications for sensitive access.',
    },
    stack: ['AWS', 'CloudTrail', 'Secrets Manager', 'CloudWatch', 'Monitoring', 'Blue Team'],
    outcomes: [],
    evidence: { kind: 'repo', visibility: 'private' },
  },
  {
    id: 'azure-aer',
    title: { fr: 'Sécurisation Azure Active Directory (AER)', en: 'Securing Azure Active Directory (AER)' },
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: "Déploiement et configuration d'un environnement Azure AD sécurisé avec gestion hybride, MFA, groupes, unités administratives et connecteur Entra ID.",
      en: 'Deployment and configuration of a secure Azure Active Directory environment with hybrid management, MFA, groups, administrative units and Entra ID connector.',
    },
    stack: ['Azure', 'Active Directory', 'IAM', 'Hybrid Cloud', 'Blue Team', 'Microsoft Entra'],
    outcomes: [],
    evidence: { kind: 'repo', visibility: 'private' },
  },
  {
    id: 'phishing-sim',
    title: { fr: "Déploiement d'un simulateur de phishing pour formation interne", en: 'Phishing simulator for internal awareness training' },
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: 'Déploiement d\'un simulateur de campagnes de phishing internes pour sensibiliser, analyser les clics et renforcer les réflexes cybersécurité en entreprise.',
      en: 'Deploying an internal phishing campaign simulator to raise awareness, analyse clicks and reinforce cybersecurity reflexes across the company.',
    },
    stack: [
      'Phishing',
      'Cyber Awareness',
      'Social Engineering',
      'Blue Team',
      'Docker',
      'Security Training',
    ],
    outcomes: [],
    evidence: { kind: 'repo', visibility: 'private' },
  },
  {
    id: 'glpi-ticketing',
    title: { fr: "Déploiement sécurisé d'un système de ticketing IT", en: 'Secure deployment of an IT ticketing system' },
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: "Installation et durcissement complets de GLPI pour la gestion des incidents et demandes IT, incluant authentification, contrôle d'accès, sauvegardes et intégration LDAP optionnelle.",
      en: 'Full installation and hardening of GLPI for IT incident and request management, including authentication, access control, backups and optional LDAP integration.',
    },
    stack: ['GLPI', 'ITSM', 'Ticketing', 'Helpdesk', 'Infrastructure', 'Blue Team'],
    outcomes: [],
    evidence: { kind: 'repo', visibility: 'private' },
  },
  {
    id: 'pfsense-lab',
    title: 'pfSense – Network Segmentation & Firewall Lab',
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: "Topologie VLAN/DMZ/PROD sur pfSense : règles de filtrage, NAT, VPN site-à-site, et snapshots pour tests d'attaques.",
      en: 'VLAN/DMZ/PROD topology on pfSense: filtering rules, NAT, site-to-site VPN, and snapshots for attack testing.',
    },
    stack: ['pfSense', 'Network', 'Firewall', 'VM'],
    outcomes: [],
    evidence: { kind: 'repo', visibility: 'private' },
  },
  {
    id: 'traefik-proxy',
    title: 'Reverse Proxy & TLS (Traefik)',
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: "Configuration Traefik pour exposer plusieurs apps avec certificats Let's Encrypt automatiques, routage dynamique et tests SSL.",
      en: "Traefik setup to expose multiple apps with automatic Let's Encrypt certificates, dynamic routing, and SSL testing.",
    },
    stack: ['Traefik', 'Docker', 'HTTPS', 'Reverse Proxy'],
    outcomes: [],
    evidence: { kind: 'repo', visibility: 'private' },
  },
  {
    id: 'squid-proxy',
    title: 'Authenticated Filtering Proxy (Squid + LDAP/AD)',
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: 'Proxy HTTP/HTTPS avec authentification LDAP/AD, politiques de filtrage par groupe et logging centralisé.',
      en: 'HTTP/HTTPS proxy with LDAP/AD authentication, group-based filtering policies, and centralized logging.',
    },
    stack: ['Proxy', 'Squid', 'LDAP', 'Security'],
    outcomes: [],
    evidence: { kind: 'repo', visibility: 'private' },
  },
  {
    id: 'suricata-ids',
    title: 'Network IDS (Suricata + EveBox)',
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: "Détection de signatures réseau et anomalies avec Suricata ; corrélation d'alertes et gestion de preuves PCAP via EveBox.",
      en: 'Detect network signatures and anomalies using Suricata; correlate alerts and manage PCAP evidence through EveBox.',
    },
    stack: ['Suricata', 'IDS', 'NetSec', 'EveBox'],
    outcomes: [],
    evidence: { kind: 'repo', visibility: 'private' },
  },
  {
    id: 'internal-pki',
    title: 'Internal PKI (Root CA / Signing)',
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: "Construction d'une Autorité de Certification interne, définition des politiques de signature et émission de certificats pour services internes.",
      en: 'Build an internal Certificate Authority, define signing policies, and issue certificates for internal services.',
    },
    stack: ['PKI', 'OpenSSL', 'Certificates', 'Security'],
    outcomes: [],
    evidence: { kind: 'repo', visibility: 'private' },
  },
  {
    id: 'splunk-siem',
    title: { fr: "Déploiement d'un SIEM avec Splunk pour détection d'incidents", en: 'SIEM deployment with Splunk for incident detection' },
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: "Installation de Splunk dans un lab sécurisé, collecte de logs système et réseau, détection d'incidents via alertes, tableaux de bord et cas d'usage Blue Team typiques.",
      en: 'Install Splunk in a secure lab, collect system and network logs, detect incidents via alerts, dashboards and typical Blue Team use cases.',
    },
    stack: ['Splunk', 'SIEM', 'Log Analysis', 'Security Monitoring', 'Blue Team', 'SOC'],
    outcomes: [],
    evidence: { kind: 'none', visibility: 'none' },
  },
  {
    id: 'secure-mail',
    title: 'Secure Mail Server (Postfix + Dovecot + rspamd)',
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: 'Serveur mail complet avec TLS, SPF/DKIM/DMARC, et filtrage anti-spam (rspamd). Simulation de phishing et validation DMARC incluses.',
      en: 'Full mail server with TLS, SPF/DKIM/DMARC, and anti-spam filtering (rspamd). Phishing simulation and DMARC validation included.',
    },
    stack: ['Mail', 'Postfix', 'Dovecot', 'DKIM', 'Docker'],
    outcomes: [],
    evidence: { kind: 'none', visibility: 'none' },
  },
  {
    id: 'wazuh-siem',
    title: 'Wazuh – SIEM & Agents (Log Centralization)',
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: "Déploiement du manager Wazuh et agents sur DC et infrastructure réseau avec règles d'alerte personnalisées et tableaux de bord d'investigation.",
      en: 'Deployment of Wazuh manager and agents across DC and network infrastructure with custom alert rules and investigation dashboards.',
    },
    stack: ['Wazuh', 'SIEM', 'Logs', 'Detection'],
    outcomes: [],
    evidence: { kind: 'none', visibility: 'none' },
  },
  {
    id: 'prometheus-grafana',
    title: 'Metrics Monitoring (Prometheus + Grafana)',
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: "Collecte de métriques système (node_exporter), tableaux de bord Grafana et alerting pour CPU/mémoire/disque avec playbook d'escalade.",
      en: 'System metrics collection (node_exporter), Grafana dashboards, and alerting for CPU/memory/disk with an escalation playbook.',
    },
    stack: ['Prometheus', 'Grafana', 'Monitoring', 'Alerting'],
    outcomes: [],
    evidence: { kind: 'none', visibility: 'none' },
  },
  {
    id: 'restic-backup',
    title: 'Backup & Disaster Recovery (Restic + Restore Scripts)',
    tier: 'planned',
    status: 'planned',
    period: { start: null, end: null },
    summary: {
      fr: "Stratégie de sauvegarde automatisée avec Restic, restaurations testées, vérifications d'intégrité des snapshots et playbook de reprise d'activité.",
      en: 'Automated backup strategy using Restic, tested restores, snapshot integrity checks, and a disaster recovery playbook.',
    },
    stack: ['Backup', 'Restic', 'DR', 'Scripts'],
    outcomes: [],
    evidence: { kind: 'none', visibility: 'none' },
  },
];

export function getProjectsByTier(tier: Tier): Project[] {
  return projects.filter((p) => p.tier === tier);
}

export function getProjectCounts(): Record<Tier | 'all', number> {
  return {
    featured: getProjectsByTier('featured').length,
    delivered: getProjectsByTier('delivered').length,
    planned: getProjectsByTier('planned').length,
    all: projects.length,
  };
}

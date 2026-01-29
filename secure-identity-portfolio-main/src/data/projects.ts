export type ProjectStatus = 'past' | 'current' | 'future';

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  tags: string[];
  description: {
    fr: string;
    en: string;
  };
  link: string;
}

export const projects: Project[] = [
  {
    id: 'webhawk',
    title: 'WebHawk',
    status: 'past',
    tags: ['Python', 'Scanner', 'Web', 'Docker', 'Education', 'Blue Team'],
    description: {
      fr: 'Scanner éducatif de vulnérabilités web (SQLi, XSS, LFI, IDOR, CSRF, SSRF, RCE) avec rapports JSON, modes CLI/interactif et packaging Docker.',
      en: 'Educational web vulnerability scanner (SQLi, XSS, LFI, IDOR, CSRF, SSRF, RCE) with JSON reports, CLI/interactive modes and Docker packaging.',
    },
    link: 'https://github.com/Sunnoogo77/WebHawk',
  },
  {
    id: 'hids',
    title: 'HIDS (Host-Based IDS)',
    status: 'past',
    tags: ['PowerShell', 'Windows', 'HIDS', 'Blue Team'],
    description: {
      fr: 'Détection basée sur l\'hôte en PowerShell : surveille les activités et patterns suspects avec configuration et artefacts orientés Blue Team.',
      en: 'Host-based detection in PowerShell: monitors suspicious activity and patterns with Blue Team-oriented configuration and artefacts.',
    },
    link: 'https://github.com/Sunnoogo77/HIDS',
  },
  {
    id: 'astsu',
    title: 'ASTSU – Advanced Security Testing & Scanning Utility',
    status: 'past',
    tags: ['Python', 'Networking', 'Scanner', 'Docker'],
    description: {
      fr: 'Scanne les ports TCP/UDP, empreintes OS, mode furtif, découverte d\'hôtes. Image Docker et alias CLI pratiques.',
      en: 'Scans TCP/UDP ports, fingerprints OS, stealth mode, host discovery. Provides a Docker image and handy CLI aliases.',
    },
    link: 'https://github.com/Sunnoogo77/ASTSU',
  },
  {
    id: 'vaultroom',
    title: 'VaultRoom',
    status: 'past',
    tags: ['Flask', 'Python', 'TLS', 'Chat', 'Web'],
    description: {
      fr: 'Plateforme de communication sécurisée : authentification, discussions privées, TLS/SSL, architecture prête pour Socket.IO.',
      en: 'Secure communication platform: authentication, private discussions, TLS/SSL, architecture ready for Socket.IO.',
    },
    link: 'https://github.com/Sunnoogo77/VaultRoom',
  },
  {
    id: 'mfa',
    title: 'MFA – Multi-Factor Authentication',
    status: 'past',
    tags: ['Node.js', 'Express', 'React', '2FA', 'Passport', 'Speakeasy'],
    description: {
      fr: 'Système d\'authentification multi-facteurs (mot de passe + TOTP). Backend Express/Passport, frontend React.',
      en: 'Multi-factor authentication system (password + TOTP). Express/Passport backend, React frontend.',
    },
    link: 'https://github.com/Sunnoogo77/MFA',
  },
  {
    id: 'packet-sniffing',
    title: 'Packet Sniffing (Scapy + Supabase)',
    status: 'past',
    tags: ['Python', 'Scapy', 'Supabase', 'PostgreSQL', 'Networking', 'Monitoring'],
    description: {
      fr: 'Capture et analyse de paquets en temps réel, stockage cloud Supabase, schémas SQL et API prévus.',
      en: 'Real-time packet capture and analysis, Supabase cloud storage, planned SQL schemas and API.',
    },
    link: 'https://github.com/Sunnoogo77/Packet_Sniffing',
  },
  {
    id: 'crypto-web',
    title: 'Mini Cryptographie Web',
    status: 'past',
    tags: ['Python', 'Flask', 'React', 'Crypto', 'Web'],
    description: {
      fr: 'Chiffre/déchiffre textes et fichiers, inclut une démo brute-force, backend Flask et frontend React.',
      en: 'Encrypts/decrypts text and files, includes a brute-force demo, Flask backend and React frontend.',
    },
    link: 'https://github.com/Sunnoogo77/file-text-encryptor',
  },
  {
    id: 'password-cracking',
    title: 'Password Cracking (outil + rapport)',
    status: 'past',
    tags: ['Python', 'PyQt5', 'Passwords', 'Education'],
    description: {
      fr: 'Outil de cracking (brute-force, dictionnaire, masque, hybride) avec GUI PyQt5 et rapport de sensibilisation.',
      en: 'Cracking tool (brute-force, dictionary, mask, hybrid) with PyQt5 GUI and awareness report.',
    },
    link: 'https://github.com/Sunnoogo77/Password-Cracking',
  },
  {
    id: 'cyber-infosec',
    title: 'Cybersecurity vs Information Security',
    status: 'past',
    tags: ['Education', 'Infosec', 'Writing'],
    description: {
      fr: 'Comparaison éducative avec ressources et assets pour une publication LinkedIn.',
      en: 'Educational comparison with resources and assets for a LinkedIn publication.',
    },
    link: 'https://github.com/Sunnoogo77/Cybersecurity_Infosec',
  },
  {
    id: 'secure-network',
    title: 'Architecture réseau sécurisée multi-sites',
    status: 'past',
    tags: ['Networking', 'VLAN', 'Firewall', 'Blue Team', 'VPN', 'Segmentation'],
    description: {
      fr: 'Architecture réseau pour école multi-sites avec segmentation, DMZ, VPN IPSec et monitoring suivant les bonnes pratiques Blue Team.',
      en: 'Network architecture for a multisite school with segmentation, DMZ, IPSec VPN and monitoring following Blue Team best practices.',
    },
    link: 'https://github.com/Sunnoogo77/secure-network-architecture-campus',
  },
  {
    id: 'debian-hardening',
    title: 'Hardening Debian pour Moodle',
    status: 'past',
    tags: ['Debian', 'Hardening', 'UFW', 'PAM', 'Lynis', 'Blue Team'],
    description: {
      fr: 'Durcissement d\'un serveur Debian pour Moodle : mises à jour auto, UFW/ICMP, services, permissions, SUID/SGID, /tmp en tmpfs, sysctl, PAM et audits.',
      en: 'Hardening a Debian server for Moodle: automatic updates, UFW/ICMP, services, permissions, SUID/SGID, /tmp mounted as tmpfs, sysctl, PAM and audits.',
    },
    link: 'https://github.com/Sunnoogo77/debian-hardening-moodle',
  },
  {
    id: 'secureflow',
    title: 'SecureFlow Platform — Cloud & Secured DevSecOps',
    status: 'past',
    tags: ['Azure', 'Terraform', 'DevSecOps', 'CI/CD', 'SAST', 'GitLab', 'GitHub Actions'],
    description: {
      fr: 'Plateforme Azure sécurisée avec IaC Terraform, réseau segmenté, et pipelines CI/CD GitLab/GitHub Actions incluant scans SAST/Trivy/Checkov plus durcissement et monitoring DevSecOps.',
      en: 'Engineered a secure Azure platform with Terraform IaC, segmented networking, and GitLab/GitHub Actions CI/CD pipelines featuring SAST/Trivy/Checkov scans plus DevSecOps hardening and monitoring.',
    },
    link: 'https://gitlab.com/devsecop_project',
  },
  {
    id: 'hids-web',
    title: 'HIDS-Web',
    status: 'current',
    tags: ['FastAPI', 'Docker', 'SQLite', 'JWT', 'Blue Team', 'HIDS'],
    description: {
      fr: 'Plateforme de surveillance d\'hôte locale : surveille fichiers, dossiers et IPs, génère alertes et rapports pour détecter et gérer les incidents.',
      en: 'Local host monitoring platform: tracks files, folders and IPs, raises alerts and provides reports to help detect and manage incidents.',
    },
    link: 'https://github.com/Sunnoogo77/HIDS2.0',
  },
  {
    id: 'enterprise-ad',
    title: 'Infrastructure Active Directory Entreprise',
    status: 'current',
    tags: ['Active Directory', 'Windows Server', 'GPO', 'AD Security', 'Blue Team'],
    description: {
      fr: 'Déploiement complet d\'une infrastructure AD réaliste avec gestion des utilisateurs, GPOs, délégation RBAC, FGPP, audit, réplication et connectivité cloud hybride.',
      en: 'Full deployment of a realistic Active Directory infrastructure with user management, GPOs, RBAC delegation, FGPP, auditing, replication and hybrid cloud connectivity.',
    },
    link: 'https://github.com/Sunnoogo77/enterprise-ad-lab',
  },
  {
    id: 'wazuh-sysmon',
    title: 'Wazuh x Sysmon – Lab Blue Team',
    status: 'future',
    tags: ['Wazuh', 'Sysmon', 'Windows', 'Blue Team', 'Lab'],
    description: {
      fr: 'Guide de déploiement Sysmon plus scénarios de simulation (comportements ransomware) pour générer des alertes dans Wazuh.',
      en: 'Guide to deploying Sysmon plus simulation scenarios (ransomware behaviours) to generate alerts in Wazuh.',
    },
    link: 'https://github.com/Sunnoogo77/test-for-wazuh',
  },
  {
    id: 'securecloudlab',
    title: 'Environnement cloud sécurisé sur AWS (SecureCloudLab)',
    status: 'future',
    tags: ['AWS', 'VPC', 'Cloud Security', 'IAM', 'Blue Team', 'Monitoring'],
    description: {
      fr: 'Conception d\'un cloud privé sécurisé sur AWS avec réseau segmenté, bastion, contrôle IAM, logging CloudTrail, monitoring CloudWatch et segmentation fine des services.',
      en: 'Design of a secure private cloud on AWS with segmented networking, bastion host, IAM control, CloudTrail logging, CloudWatch monitoring and fine-grained service segmentation.',
    },
    link: 'https://github.com/Sunnoogo77/securecloudlab-aws',
  },
  {
    id: 'pki-iac',
    title: 'Infrastructure PKI, IAM et gestion IT intégrée',
    status: 'future',
    tags: ['PKI', 'Keycloak', 'GLPI', 'LDAP', 'Authentification', 'Blue Team'],
    description: {
      fr: 'Déploiement d\'une infrastructure PKI complète (Root/Sub CA) intégrée à AD, authentification forte par certificat, IAM via Keycloak et gestion IT via GLPI connecté à LDAP.',
      en: 'Deployment of a complete PKI infrastructure (Root/Sub CA) integrated with Active Directory, strong certificate-based authentication, IAM via Keycloak and IT management through GLPI connected to LDAP.',
    },
    link: 'https://github.com/Sunnoogo77/pki-iac-infra-secure',
  },
  {
    id: 'aws-secrets',
    title: 'Monitoring des accès aux secrets AWS',
    status: 'future',
    tags: ['AWS', 'CloudTrail', 'Secrets Manager', 'CloudWatch', 'Monitoring', 'Blue Team'],
    description: {
      fr: 'Surveillance en temps réel des accès aux secrets AWS via CloudTrail, CloudWatch, SNS et notifications d\'alerte pour les accès sensibles.',
      en: 'Real-time monitoring of access to AWS secrets using CloudTrail, CloudWatch, SNS and alert notifications for sensitive access.',
    },
    link: 'https://github.com/Sunnoogo77/aws-secret-access-monitoring',
  },
  {
    id: 'azure-aer',
    title: 'Sécurisation Azure Active Directory (AER)',
    status: 'future',
    tags: ['Azure', 'Active Directory', 'IAM', 'Hybrid Cloud', 'Blue Team', 'Microsoft Entra'],
    description: {
      fr: 'Déploiement et configuration d\'un environnement Azure AD sécurisé avec gestion hybride, MFA, groupes, unités administratives et connecteur Entra ID.',
      en: 'Deployment and configuration of a secure Azure Active Directory environment with hybrid management, MFA, groups, administrative units and Entra ID connector.',
    },
    link: 'https://github.com/Sunnoogo77/azure-aer-ad-hybrid-security',
  },
  {
    id: 'phishing-sim',
    title: 'Déploiement d\'un simulateur de phishing pour formation interne',
    status: 'future',
    tags: ['Phishing', 'Cyber Awareness', 'Social Engineering', 'Blue Team', 'Docker', 'Security Training'],
    description: {
      fr: 'Déploiement d\'un simulateur de campagnes de phishing internes pour sensibiliser, analyser les clics et renforcer les réflexes cybersécurité en entreprise.',
      en: 'Deploying an internal phishing campaign simulator to raise awareness, analyse clicks and reinforce cybersecurity reflexes across the company.',
    },
    link: 'https://github.com/Sunnoogo77/phishing-awareness-simulator',
  },
  {
    id: 'glpi-ticketing',
    title: 'Déploiement sécurisé d\'un système de ticketing IT',
    status: 'future',
    tags: ['GLPI', 'ITSM', 'Ticketing', 'Helpdesk', 'Infrastructure', 'Blue Team'],
    description: {
      fr: 'Installation et durcissement complets de GLPI pour la gestion des incidents et demandes IT, incluant authentification, contrôle d\'accès, sauvegardes et intégration LDAP optionnelle.',
      en: 'Full installation and hardening of GLPI for IT incident and request management, including authentication, access control, backups and optional LDAP integration.',
    },
    link: 'https://github.com/Sunnoogo77/glpi-secure-ticketing',
  },
  {
    id: 'splunk-siem',
    title: 'Déploiement d\'un SIEM avec Splunk pour détection d\'incidents',
    status: 'future',
    tags: ['Splunk', 'SIEM', 'Log Analysis', 'Security Monitoring', 'Blue Team', 'SOC'],
    description: {
      fr: 'Installation de Splunk dans un lab sécurisé, collecte de logs système et réseau, détection d\'incidents via alertes, tableaux de bord et cas d\'usage Blue Team typiques.',
      en: 'Install Splunk in a secure lab, collect system and network logs, detect incidents via alerts, dashboards and typical Blue Team use cases.',
    },
    link: 'https://github.com/Sunnoogo77/splunk-blue-team-lab',
  },
  {
    id: 'pfsense-lab',
    title: 'pfSense – Network Segmentation & Firewall Lab',
    status: 'future',
    tags: ['pfSense', 'Network', 'Firewall', 'VM'],
    description: {
      fr: 'Topologie VLAN/DMZ/PROD sur pfSense : règles de filtrage, NAT, VPN site-à-site, et snapshots pour tests d\'attaques.',
      en: 'VLAN/DMZ/PROD topology on pfSense: filtering rules, NAT, site-to-site VPN, and snapshots for attack testing.',
    },
    link: 'https://github.com/Sunnoogo77/pfsense-lab',
  },
  {
    id: 'secure-mail',
    title: 'Secure Mail Server (Postfix + Dovecot + rspamd)',
    status: 'future',
    tags: ['Mail', 'Postfix', 'Dovecot', 'DKIM', 'Docker'],
    description: {
      fr: 'Serveur mail complet avec TLS, SPF/DKIM/DMARC, et filtrage anti-spam (rspamd). Simulation de phishing et validation DMARC incluses.',
      en: 'Full mail server with TLS, SPF/DKIM/DMARC, and anti-spam filtering (rspamd). Phishing simulation and DMARC validation included.',
    },
    link: 'https://github.com/Sunnoogo77/secure-mail-server',
  },
  {
    id: 'traefik-proxy',
    title: 'Reverse Proxy & TLS (Traefik)',
    status: 'future',
    tags: ['Traefik', 'Docker', 'HTTPS', 'Reverse Proxy'],
    description: {
      fr: 'Configuration Traefik pour exposer plusieurs apps avec certificats Let\'s Encrypt automatiques, routage dynamique et tests SSL.',
      en: 'Traefik setup to expose multiple apps with automatic Let\'s Encrypt certificates, dynamic routing, and SSL testing.',
    },
    link: 'https://github.com/Sunnoogo77/traefik-reverse-proxy',
  },
  {
    id: 'squid-proxy',
    title: 'Authenticated Filtering Proxy (Squid + LDAP/AD)',
    status: 'future',
    tags: ['Proxy', 'Squid', 'LDAP', 'Security'],
    description: {
      fr: 'Proxy HTTP/HTTPS avec authentification LDAP/AD, politiques de filtrage par groupe et logging centralisé.',
      en: 'HTTP/HTTPS proxy with LDAP/AD authentication, group-based filtering policies, and centralized logging.',
    },
    link: 'https://github.com/Sunnoogo77/squid-proxy-ldap',
  },
  {
    id: 'wazuh-siem',
    title: 'Wazuh – SIEM & Agents (Log Centralization)',
    status: 'future',
    tags: ['Wazuh', 'SIEM', 'Logs', 'Detection'],
    description: {
      fr: 'Déploiement du manager Wazuh et agents sur DC et infrastructure réseau avec règles d\'alerte personnalisées et tableaux de bord d\'investigation.',
      en: 'Deployment of Wazuh manager and agents across DC and network infrastructure with custom alert rules and investigation dashboards.',
    },
    link: 'https://github.com/Sunnoogo77/wazuh-siem-lab',
  },
  {
    id: 'prometheus-grafana',
    title: 'Metrics Monitoring (Prometheus + Grafana)',
    status: 'future',
    tags: ['Prometheus', 'Grafana', 'Monitoring', 'Alerting'],
    description: {
      fr: 'Collecte de métriques système (node_exporter), tableaux de bord Grafana et alerting pour CPU/mémoire/disque avec playbook d\'escalade.',
      en: 'System metrics collection (node_exporter), Grafana dashboards, and alerting for CPU/memory/disk with an escalation playbook.',
    },
    link: 'https://github.com/Sunnoogo77/prometheus-grafana-monitoring',
  },
  {
    id: 'suricata-ids',
    title: 'Network IDS (Suricata + EveBox)',
    status: 'future',
    tags: ['Suricata', 'IDS', 'NetSec', 'EveBox'],
    description: {
      fr: 'Détection de signatures réseau et anomalies avec Suricata ; corrélation d\'alertes et gestion de preuves PCAP via EveBox.',
      en: 'Detect network signatures and anomalies using Suricata; correlate alerts and manage PCAP evidence through EveBox.',
    },
    link: 'https://github.com/Sunnoogo77/suricata-ids-lab',
  },
  {
    id: 'internal-pki',
    title: 'Internal PKI (Root CA / Signing)',
    status: 'future',
    tags: ['PKI', 'OpenSSL', 'Certificates', 'Security'],
    description: {
      fr: 'Construction d\'une Autorité de Certification interne, définition des politiques de signature et émission de certificats pour services internes.',
      en: 'Build an internal Certificate Authority, define signing policies, and issue certificates for internal services.',
    },
    link: 'https://github.com/Sunnoogo77/internal-pki',
  },
  {
    id: 'restic-backup',
    title: 'Backup & Disaster Recovery (Restic + Restore Scripts)',
    status: 'future',
    tags: ['Backup', 'Restic', 'DR', 'Scripts'],
    description: {
      fr: 'Stratégie de sauvegarde automatisée avec Restic, restaurations testées, vérifications d\'intégrité des snapshots et playbook de reprise d\'activité.',
      en: 'Automated backup strategy using Restic, tested restores, snapshot integrity checks, and a disaster recovery playbook.',
    },
    link: 'https://github.com/Sunnoogo77/restic-backup-dr',
  },
];

export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter(p => p.status === status);
}

export function getProjectCounts(): Record<ProjectStatus | 'all', number> {
  return {
    past: projects.filter(p => p.status === 'past').length,
    current: projects.filter(p => p.status === 'current').length,
    future: projects.filter(p => p.status === 'future').length,
    all: projects.length,
  };
}

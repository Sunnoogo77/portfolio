# Contenu et modèle de données — portfolio Sunnoogo Caleb Tapsoba

Version du 21 octobre 2026. **Tout ce qui figure ici vient du CV validé par le
propriétaire. Aucun fait ne doit être ajouté, arrondi ou extrapolé.** Un champ
dont la valeur n'est pas dans ce document reste absent, et l'affichage doit
supporter son absence.

## 1. Le défaut de fond du modèle actuel

`status: 'past' | 'current' | 'future'` mélange ce qui a été fait et ce qui est
seulement envisagé, sans date, sans rôle, sans résultat, et avec un champ `link`
qui n'a aucun moyen de dire qu'il est privé ou mort. C'est ce qui produit les
seize projets sur trente et un qui renvoient aujourd'hui le visiteur sur une
page introuvable.

## 2. Modèle cible

```ts
export type Lang = 'fr' | 'en';
export type I18n = Record<Lang, string>;
export type I18nList = Record<Lang, string[]>;

/** Date volontairement partielle, donc toujours vérifiable : 'YYYY' ou 'YYYY-MM'. */
export type PartialDate = string;

/** end: 'ongoing' = réellement en cours. end: null = rien n'est engagé. */
export interface Period {
  start: PartialDate | null;
  end: PartialDate | 'ongoing' | null;
}

/**
 * - 'planned'     : décidé, rien n'est engagé
 * - 'in-progress' : travail réellement en cours, vérifiable
 * - 'delivered'   : livré, mis en service ou soutenu
 * - 'obtained'    : titre effectivement obtenu, exige une date
 */
export type Status = 'planned' | 'in-progress' | 'delivered' | 'obtained';

/** Visibilité réelle. Interdit structurellement d'exposer un lien mort. */
export type LinkVisibility = 'public' | 'private' | 'none';

export interface Evidence {
  kind: 'repo' | 'certificate' | 'website' | 'none';
  visibility: LinkVisibility;
  /** Présent UNIQUEMENT si visibility vaut 'public'. */
  url?: string;
  /** Rempli par script, jamais à la main. */
  verifiedAt?: string;
}

/** Un chiffre, son unité, sa nuance. Jamais arrondi, jamais inventé. */
export interface Outcome {
  value: number;
  unit: I18n;
  qualifier?: I18n;
}

export type Tier = 'featured' | 'delivered' | 'planned';

export interface Project {
  id: string;
  title: string;
  tier: Tier;
  status: Status;
  period: Period;
  role?: I18n;
  context?: I18n;
  summary: I18n;
  stack: string[];
  outcomes: Outcome[];
  evidence: Evidence;
}
```

**Règle d'affichage non négociable.** Le composant ne rend une balise de lien
que si `evidence.visibility === 'public'`. Dans les deux autres cas il affiche
un libellé non cliquable, en `--texte-doux` :

- `private` : « dépôt privé » / « private repository »
- `none` : « projet en préparation » / « project in preparation »

Quand un projet est terminé, il suffit de passer `visibility` à `public`, de
renseigner `url` et de changer `status`. C'est le mécanisme d'activation
demandé : une ligne par projet, sans toucher au rendu.

**Garde-fou à écrire en test**, qui doit faire échouer la construction :
`url` défini alors que `visibility` ne vaut pas `public`, ou `visibility` à
`public` sans `url`.

## 3. Hiérarchie des projets

Le propriétaire veut tout conserver, hiérarchisé en trois niveaux.

**Niveau 1, mis en avant.** Affichage en pleine largeur avec colonne de notes.
Cinq entrées au maximum. La cybersécurité passe devant.

1. **Impulsera** — traitement particulier, plus visible que les autres. C'est
   son projet de fin d'études, mené sous un thème de recherche.
2. **Azure Enterprise Security Lab** — projet en cours de préparation sur
   lequel il travaille activement. Statut `planned`, aucun déploiement engagé.
3. Les trois travaux de cybersécurité livrés les plus solides, choisis parmi
   l'infrastructure Active Directory d'entreprise, HIDS-Web, WebHawk,
   l'architecture réseau sécurisée multi-sites et SecureFlow.

**Niveau 2, travaux réalisés.** Grille classique. Les douze projets au statut
`delivered` qui ne sont pas au niveau 1. Leurs descriptions actuelles sont de
la main du propriétaire : **les conserver mot pour mot**, ne pas les réécrire.

**Niveau 3, en préparation.** Liste sobre, compacte, sans carte et sans lien.
Les dix-sept projets aujourd'hui au statut « à venir ». Titre de groupe
explicite : « Projets en préparation » / « Projects in preparation », avec une
phrase d'introduction qui dit clairement qu'aucun travail n'y est engagé.

**Les cinq dépôts qui n'existent pas** (`splunk-blue-team-lab`,
`secure-mail-server`, `wazuh-siem-lab`, `prometheus-grafana-monitoring`,
`restic-backup-dr`) passent en `visibility: 'none'`, puisqu'il n'y a rien
derrière. Les onze dépôts privés passent en `visibility: 'private'`.

## 4. Les deux projets à créer

### Impulsera

```
id        impulsera
tier      featured
status    in-progress
period    { start: '2025-10', end: 'ongoing' }
role      FR : Fondateur et responsable technique
          EN : Founder and technical lead
context   FR : Startup née de mon projet de fin d'études, incubée à l'EFREI
          EN : Startup born out of my final-year project, incubated at EFREI
evidence  { kind: 'website', visibility: 'public', url: 'https://impulsera.fr' }
stack     Django, React, TypeScript, Terraform, Azure, GitHub Actions, Bandit,
          pip-audit, Checkov, Trivy, Gitleaks, CodeQL
outcomes  1396  FR { tests côté serveur }        EN { server-side tests }
            28  FR { fiches de remédiation }     EN { remediation records }
                FR qualifier : issues d'un audit de sécurité de mon propre code
                EN qualifier : from a security audit of my own code
```

Résumé français :

> Plateforme développée en pilotant des agents d'intelligence artificielle,
> Claude Code et Codex : cadrage et spécification en amont, délégation du code
> aux agents, revue humaine bloquante et contrôles automatiques avant toute
> fusion. La sécurité est écrite avant le code, et les chaînes d'intégration
> sont durcies. J'ai conduit un audit de sécurité de mon propre code comme un
> audit externe, en consignant chaque écart entre la documentation et
> l'implémentation réelle, référencé au fichier et à la ligne avec son test
> d'acceptation. L'architecture Azure est décrite en Terraform sur onze modules,
> conçue et revue, le déploiement n'est pas réalisé.

Résumé anglais :

> A platform built by directing AI coding agents, Claude Code and Codex: scoping
> and specification up front, implementation delegated to the agents, blocking
> human review and automated checks before any merge. Security requirements are
> written before the code, and the delivery pipelines are hardened. I audited my
> own codebase as an external auditor would, recording every gap between the
> documentation and the actual implementation, each referenced to a file and a
> line with its acceptance test. The Azure architecture is described in
> Terraform across eleven modules, designed and reviewed, not deployed.

### Azure Enterprise Security Lab

```
id        azure-security-lab
tier      featured
status    planned
period    { start: '2026', end: null }
role      FR : Projet personnel        EN : Personal project
evidence  { kind: 'repo', visibility: 'public',
            url: 'https://github.com/sunnoogo77/azure-security-lab' }
stack     Azure, Entra ID, Terraform, GitHub Actions, Checkov, Trivy, Gitleaks,
          Azure Policy, Key Vault, Log Analytics
outcomes  aucun. Le projet n'a rien produit à ce jour.
```

Résumé français :

> Concevoir, déployer, sécuriser et documenter une zone d'atterrissage Azure
> pour une PME simulée de 150 à 300 collaborateurs, par paliers et sous
> contrainte de budget, en justifiant chaque choix d'architecture et les
> compromis qu'il implique. L'architecture cible est arrêtée : réseau en
> hub-and-spoke segmenté, groupes de sécurité en refus par défaut, accès aux
> services de données par connectivité privée, identités en moindre privilège
> par groupes Entra ID et RBAC. L'infrastructure as code en Terraform, la chaîne
> GitHub Actions en fédération OIDC et les analyses Checkov, Trivy et Gitleaks
> sont envisagées, de même que la gouvernance par Azure Policy, Key Vault et
> Log Analytics.

Résumé anglais :

> Designing, deploying, securing and documenting an Azure landing zone for a
> simulated company of 150 to 300 employees, in stages and under a constrained
> budget, justifying every architectural choice and the trade-offs it entails.
> The target architecture is settled: a segmented hub-and-spoke network, deny-by-
> default security groups, private connectivity to data services, least-privilege
> identities through Entra ID groups and RBAC. Infrastructure as code in
> Terraform, a GitHub Actions pipeline using OIDC federation and Checkov, Trivy
> and Gitleaks scanning are all under consideration, as is governance through
> Azure Policy, Key Vault and Log Analytics.

**Attention.** La description publique actuelle du dépôt GitHub annonce des
points de terminaison privés, Defender for Cloud et Sentinel avec la mention
« en cours ». Elle va plus loin que la réalité. Ne pas la recopier. Signaler au
propriétaire qu'elle mérite d'être réalignée.

## 5. Parcours

Le titre de section devient « Parcours » et non plus « Parcours académique » :
il porte désormais trois expériences professionnelles.

**Deux anomalies à corriger.** `isCurrent` est posé à la fois sur EFREI et sur
Ecobank, donc deux jalons clignotent simultanément alors que le stage s'est
terminé en mars 2025. Le champ est supprimé : « en cours » se dérive de
`period.end === 'ongoing'`.

Entrées, de la plus récente à la plus ancienne :

| Période | Organisation | Rôle | Lieu |
|---|---|---|---|
| 2026-09 → ongoing | HEC Paris | International Certificate in Corporate Finance, en ligne, certificat visé en avril 2027 | À distance |
| 2026-09 → 2027 | Université Sorbonne Paris Nord | Diplôme Étudiant-Entrepreneur, inscription en cours de finalisation | Paris |
| 2025-10 → ongoing | Impulsera | Fondateur et responsable technique | Paris |
| 2026-06 → 2026-07 | Soleil Resources, opérateur minier, mission réalisée depuis SAFIR Consulting | Consultant sécurité | Ouagadougou, Burkina Faso |
| 2026-03 → 2026-06 | SAP, Digital Skills Center EMEA | SAP Young Professionals Program, programme sélectif, quatre mois à temps plein | À distance |
| 2023 → 2026 | EFREI Paris | Diplôme d'ingénieur, systèmes, réseaux, cloud et cybersécurité. Cursus achevé, jury de délibération en novembre 2026. Bachelor of Engineering Science obtenu | Villejuif, France |
| 2024-12 → 2025-03 | Ecobank Ghana PLC, entité eProcess | Stagiaire cybersécurité, environnement Microsoft 365 et Azure | Accra, Ghana |
| 2024-01 → 2024-05 | University of Staffordshire | Semestre d'échange, informatique | Stoke-on-Trent, Royaume-Uni |
| 2021 → 2023 | INP-HB | Classes préparatoires MPSI puis MP* | Yamoussoukro, Côte d'Ivoire |

Points clés de Soleil Resources, en français :

- Déploiement d'une plateforme Wazuh tout-en-un sur une machine dédiée,
  réunissant serveur, indexeur et tableau de bord, après une étude comparative
  et un dimensionnement initial sur trois machines. Montée de la version 4.12 à
  la 4.14.6, dans un réseau virtuel d'administration isolé.
- Dix-sept règles de détection écrites, dont treize validées par test réel sur
  les contrôleurs de domaine. Collecte Sysmon, PowerShell et journaux Windows,
  surveillance d'intégrité sur quatre chemins et cinq clés de registre, alerte
  par courriel authentifié avec seuil de gravité. Les règles non testées ont été
  signalées comme telles, et la documentation d'exploitation remise à l'équipe.
- Durcissement de l'annuaire avec l'équipe interne : signature LDAP et liaison
  de canal, NTLM restreint par exceptions, SMBv1 désactivé, protection du
  processus d'authentification, LAPS, extinction de LLMNR et de PowerShell v2.
  Audit des certificats et de l'autorité interne, remédiation du Kerberoasting.
- En parallèle, accompagnement des équipes métier au démarrage en production de
  SAP S/4HANA Cloud.

Résultats chiffrés attachés à cette entrée : `17` règles écrites, dont `13`
validées par test réel. Ce sont les premiers chiffres de résultat de toute la
page, et leur absence est le défaut le plus coûteux du portfolio actuel.

Ecobank, points clés en français, en remplacement des formules génériques
actuelles qui ne nomment aucun outil :

- Sécurité du poste de travail sous Intune et Defender : conformité des
  équipements, authentification multifacteur, gestion des correctifs, retrait
  des logiciels non autorisés, suivi du score de sécurité Azure.
- Centre opérationnel de sécurité : surveillance et corrélation de journaux sous
  Microsoft Sentinel, analyse d'incidents de premier niveau, rédaction des
  comptes rendus.
- Gouvernance en environnement bancaire : contribution aux politiques de
  conformité et aux procédures d'admission d'un serveur en production, alignées
  sur ISO 27001 et PCI-DSS. Introduction au DevSecOps et à l'OWASP Top 10,
  maquettage réseau sous GNS3, segmentation par VLAN.

## 6. Certifications

Rebâties entièrement depuis le CV. Trois groupes.

**Obtenues**, avec l'année exacte :

| Titre | Émetteur | Année |
|---|---|---|
| SAP Certified — Implementation Consultant, End-to-End Business Processes for SAP Business Suite | SAP | avril 2026 |
| SAP Certified — SAP Build Developer | SAP | avril 2026 |
| Networking Basics | Cisco NetAcad | 2026 |
| Cybersecurity Essentials | Cisco NetAcad | 2024 |
| Introduction to Cybersecurity | Cisco NetAcad | 2024 |
| TOEIC, 935 sur 990 | ETS | 2024 |

**En préparation**, et jamais présentées autrement : Microsoft AZ-104 Azure
Administrator Associate, Microsoft SC-500 Cloud and AI Security Engineer
Associate, et les fondamentaux AZ-900 et SC-900.

**Feuille de route**, groupe distinct et clairement libellé comme tel :
SC-300 Identity and Access Administrator, SC-200 Security Operations Analyst,
SC-100 Cybersecurity Architect, AZ-802 Windows Server Administrator.

**Trois écarts constatés, à soumettre au propriétaire avant publication.**

1. Le site date Introduction to Cybersecurity de 2022 et Cybersecurity
   Essentials de 2023. Le CV dit 2024 pour les deux. Le CV fait foi ici, mais
   l'écart doit être confirmé.
2. Le site affiche AZ-800 en préparation. Le CV ne la mentionne pas et cite
   AZ-802. Probable confusion. AZ-800 est retirée.
3. Le site affiche six certifications visées qui ne figurent nulle part dans le
   CV : SOC Analyst Level 1, AWS Cloud Practitioner, CompTIA Security+, CompTIA
   Network+, Cisco CCNA et SC-200. Seule SC-200 est conservée, au titre de la
   feuille de route. Les cinq autres sont retirées faute de source.

Le libellé du filtre et le libellé de la carte doivent employer le même mot :
aujourd'hui le filtre dit « Objectifs » et la carte dit « À venir ».

Les trois certifications obtenues portent `link: '#'`, ce qui rend le bouton
« Voir le certificat » invisible. Trois PDF de certificats existent dans
l'ancien site et sont récupérés : les rattacher.

## 7. Disponibilité, en remplacement du badge actuel

Le badge d'accueil annonce aujourd'hui « Objectif : Stage de fin d'études — à
partir de mars 2026 », et c'est lui qui sert le lien de téléchargement du CV.

Texte français :

> Disponible pour un CDI ou un CDD en cybersécurité, avec une préférence pour la
> sécurité cloud. Également à la recherche d'une alternance à partir de
> septembre 2027, dans le cadre d'une spécialisation complémentaire.

Texte anglais :

> Available for a permanent or fixed-term role in cybersecurity, with a
> preference for cloud security. Also seeking an apprenticeship from September
> 2027, as part of a further specialisation.

Le bloc porte une date de mise à jour visible, et le modèle prévoit un
avertissement à la construction si cette date dépasse quatre-vingt-dix jours.
C'est ce qui a manqué : le contenu du site est resté figé neuf mois sans que
rien ne le signale.

## 8. Bandeau d'accueil et présentation

Sous-titre français, en remplacement de « Étudiant en dernière année à l'EFREI
Paris » :

> Ingénieur sécurité et cloud, orienté sécurité Azure. Diplôme d'ingénieur EFREI
> Paris en systèmes, réseaux, cloud et cybersécurité, cursus achevé en 2026,
> jury de délibération en novembre.

Sous-titre anglais :

> Security and cloud engineer, focused on Azure security. Diplôme d'ingénieur
> from EFREI Paris in systems, networks, cloud and cybersecurity, the French
> five-year engineering degree awarded at master's level, course completed in
> 2026, degree subject to the November board of examiners.

**Le bloc « Objectifs 2025-2026 » est supprimé**, titre compris. Son objectif
numéro un est le stage de mars 2026.

Dans la présentation, deux corrections : le parcours international doit citer la
mission de 2026 à Ouagadougou, et la mention de Kubernetes doit être retirée,
aucun élément du CV ne l'appuyant. Les six paragraphes à la première personne
sont ramenés à trois, et chacun doit porter un fait vérifiable.

Un bloc langues est ajouté, aujourd'hui absent : français langue maternelle,
anglais C1, TOEIC 935.

## 9. Liens et fichiers

- LinkedIn : `https://www.linkedin.com/in/sunnoogo-caleb-tapsoba-130584292/`.
  L'adresse servie aujourd'hui est tronquée du suffixe.
- GitHub : `https://github.com/sunnoogo77`.
- X : conservé, `https://x.com/SunnoogoCal`.
- **Instagram : retiré.**
- Les deux PDF de CV servis datent du 29 janvier 2026 et doivent être remplacés.
  Le CV français à jour est
  `/Users/sunnoogoctapsoba/Desktop/RAPPORT-STAGE/05_CV/Spontanee/CV_TAPSOBA.pdf`,
  version avec photo du lot candidature spontanée, qui couvre exactement le
  double objectif CDI ou CDD et alternance.
  **Il n'existe pas encore de version anglaise de ce lot.** Tant qu'elle n'est
  pas produite, le bouton de téléchargement anglais doit servir le CV français
  plutôt qu'un document périmé, et le signaler.

## 10. Compétences

Le mur de quarante-cinq étiquettes sans niveau, sans date et sans contexte est
le bloc le plus creux de la page. Il devient un tableau à trois colonnes :
domaine, outils, et où cela a servi, cette dernière colonne renvoyant à une
expérience ou à un projet réel. Une compétence qui ne peut être rattachée à rien
sort du tableau.

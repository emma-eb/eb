# Roadmap — eb. Platform
**Derniere mise a jour :** 2026-04-18 (Private Journeys + 9 pages detail livrees)

---

## Vue d'ensemble

```
Phase 0      Phase 1      Phase 2      Phase 3      Phase 4
Fondations   Site Web     App MVP      B2B Portal   Premium
  Q2 2026     Q3 2026      Q1 2027      Q2 2027     Q4 2027
   [====]      [====]       [====]       [====]       [====]
    NOW
```

---

## Phase 0 — Fondations
**Periode estimee :** Avril - Juin 2026
**Objectif :** Tout ce qui doit etre decide avant d'ecrire une seule ligne de code.

### Strategie & Marque
- [x] Finaliser le nom de domaine -> **emmabonnefous.com conserve**
- [x] Definir la charte graphique eb. -> palette (#2e5a88, #7da7c4, #a7d1c9, #fcf7f1), typos (Anton + Inter), logos (SVG/PNG beige + bleu)
- [x] Rediger la promesse de marque -> tagline "Greece, privately." + brand statement valide
- [x] Definir les piliers de services -> 5 piliers : Private Journeys, Events, Collection (villas), Yacht, Achat immobilier
- [ ] Rassembler les assets visuels (photos, videos) par categorie — **photos precises par destination en cours**

### Contenu
- [x] Ecrire les textes de toutes les pages du site -> copywriting v1 en place
- [x] Creer les fiches des 9 villas -> 9 villas Summer 2026 (5 publiques + 4 off-market) dans catalogue.ts
- [x] Creer la fiche yacht BESTIA -> San Lorenzo SP110, 33m, 4 cabins, 8 guests, crew 5
- [x] Definir les 8 moods du discovery flow -> Odyssey & Salt, Stone & Silence, Vine & Table, Pulse & Gold, Soft Pulse, Wild & Free, Culture & Heritage, Wellness & Slow
- [x] Creer le catalogue de ~35 experiences/journeys -> catalogue.ts (source unique de verite)
- [ ] Preparer 2-3 cas clients (sans noms si confidentialite necessaire)

### Technique
- [ ] Choisir et configurer le CMS (Sanity.io recommande)
- [x] Configurer le depot de code -> /travel-app avec structure web/ + docs/ + assets/
- [x] Configurer l'environnement de developpement -> Next.js 16 + React 19 + Tailwind 4 + TypeScript
- [x] Deployer sur Vercel -> eb-fawn.vercel.app
- [x] Configurer le push GitHub -> script push-to-github.js (API GitHub directe)

### Homepage
- [x] Hero avec image locale (hero-bateau.jpg) + smooth scroll
- [x] Bloc "The Studio" editorial (surtitre, ligne graphique, statement, signature)
- [x] 3 portes immersives (Private Journeys, Experiences, Collection) avec CTAs differencies
- [x] Ticker d'iles (34 iles, animation marquee)
- [x] 3 featured sections plein cadre (Journey, Experience, Collection) avec pill tags
- [x] 2 citations de respiration + bandeau chiffres
- [x] Bloc "Greece Only. Always." (statement de marque)
- [x] CTA final "Ready to begin?" avec lien underline
- [x] Footer 3 colonnes (logo/copyright/email, legal/social, nav)
- [x] Navigation sticky avec 3 etats (transparent, noir/blur, beige/blur)
- [x] Audit et optimisation mobile complete (iPhone 15 Pro)

### Decisions
- [x] Valider la stack technique -> Next.js 16 + Tailwind 4 + Supabase (a configurer) + Stripe (a integrer)
- [ ] Definir le budget de developpement Phase 1
- [x] Identifier le ou les developpeurs -> developpement assiste par Claude Code

---

## Phase 1 — Site Web eb.
**Periode estimee :** Juillet - Septembre 2026
**Objectif :** Reconstruire entierement emmabonnefous.com avec le positionnement eb.

### Sprint 1 — Setup & Developpement direct (2 semaines)
- [x] Configuration initiale Next.js -> Next.js 16.2.3 + React 19 + Tailwind 4
- [ ] Creation compte Vercel production + deploiement continu sur emmabonnefous.com
- [ ] Creation projet Supabase (base de donnees + auth)
- [x] Structure de pages et navigation -> 8+ routes creees, Nav avec ordre valide
- [x] Architecture donnees -> types.ts + catalogue.ts (source unique de verite)
- [x] Homepage complete -> 13 blocs valides, mobile-first, deploye

### Sprint 2 — Pages Principales (4 semaines)
- [x] Page Experiences : refonte complete (4 hero experiences + concierge 2x2 immersif + mobile audit)
- [x] Page About : rebuild complet (hero split + story + counter numbers + Why Greece + collabs + CTA)
- [x] Page Journal : rebuild complet (featured + 7 articles grille asymetrique magazine + The Height)
- [x] Page For Brands : rebuild complet (hero centre + services + formats + competences + CTA)
- [x] Page Private Journeys : refonte complete (hero + 2 featured + 6 secondaires + CTA)
- [x] Page Collection : refonte complete v3 (8 blocs, villas overlay, Silent Coast pleine largeur, citation respiration, yacht plein ecran, off-market editorial, acquisition texte centre, photos locales, metadata SEO)
- [x] Heroes harmonises sur Experiences + Collection + Journal (structure identique)
- [x] 9 pages detail journeys creees : Astypalea, Mykonos Timed Right, Athens Slowly, A Slow Honeymoon in the Cyclades, A Family Summer Greek-Style, A Week in the Cyclades by Sea, Paros + Antiparos Privately, Athens Beyond the Acropolis, Odyssey Greece, Sailing the Small Cyclades
- [ ] Pages detail experiences/villas (catalogue complet ~35 items)
- [ ] Integration CMS : toutes les pages editables sans code

### Sprint 3 — Pages Secondaires & Formulaires (2 semaines)
- [ ] Page About : refonte avec nouveau design
- [ ] Page Journal : refonte avec nouveau design
- [ ] Page Influencer/Brands : refonte avec nouveau design
- [ ] Page Contact : affiner les 4 formulaires
- [ ] Pages Privacy Policy + Terms
- [ ] Connexion formulaires -> email notifications

### Sprint 4 — Finition & Lancement (2 semaines)
- [ ] Optimisation SEO (balises, vitesse, sitemap)
- [ ] Tests cross-device (iPhone, Android, desktop, tablette)
- [ ] Configuration Google Analytics 4
- [ ] Integration Stripe (mode test) pour paywall $100 + deposit $500
- [ ] Generation PDF "eb. Private Route" automatique
- [ ] Mise en production sur emmabonnefous.com

### Criteres de succes Phase 1
- Site live et accessible sur le domaine final
- Score Lighthouse >= 90 (performance, SEO, accessibilite)
- Emma peut modifier les textes et photos depuis le CMS sans aide technique
- Premier formulaire de demande recu dans les 30 jours post-lancement

---

## Phase 2 — Espace Client Web eb.
**Periode estimee :** Octobre 2026 - Mars 2027
**Objectif :** Espace prive pour clients eb. Accessible via navigateur, sans app a telecharger.

### Sprint 1 — Architecture (3 semaines)
- [ ] Definition des ecrans (wireframes)
- [ ] Design espace client (mobile + desktop)
- [ ] Extension Next.js existant pour les routes privees
- [ ] Configuration Supabase (base de donnees, authentification)

### Sprint 2 — Authentification & Profil (2 semaines)
- [ ] Systeme d'invitation (Emma invite ses clients par email)
- [ ] Ecran de connexion securise
- [ ] Profil client (informations personnelles, preferences)

### Sprint 3 — Module "Mon Sejour" (4 semaines)
- [ ] Tableau de bord client : dates, programme, statut
- [ ] Vue programme jour par jour (timeline)
- [ ] Stockage de documents (vouchers, confirmations, programme PDF)

### Sprint 4 — Messagerie & Catalogue (3 semaines)
- [ ] Messagerie directe client - equipe eb.
- [ ] Catalogue experiences & villas disponibles
- [ ] Systeme de demande additionnelle

### Sprint 5 — Tests & Publication (2 semaines)
- [ ] Tests complets (fonctionnels, securite, performance)
- [ ] Deploiement progressif (beta fermee - production)

---

## Phase 3 — Portail Partenaires B2B (Inde)
**Periode estimee :** Avril - Juillet 2027

- [ ] Espace partenaire securise (acces par invitation)
- [ ] Formulaire de soumission de demande client
- [ ] Tableau de bord partenaire : etat des dossiers
- [ ] Fiches produits exportables (PDF villas, experiences)
- [ ] Historique des collaborations

---

## Phase 4 — Fonctionnalites Premium
**Periode estimee :** Q4 2027+

- [ ] Recommandations personnalisees (IA)
- [ ] Programme de fidelite / membership tiers
- [ ] Journal de voyage digital
- [ ] Dashboard analytique pour Emma
- [ ] Integration calendrier disponibilites villas (temps reel)

---

*Document vivant, mis a jour a chaque avancement de phase.*

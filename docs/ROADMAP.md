# Roadmap — eb. Platform
**Derniere mise a jour :** 2026-04-19 (Contact/Inquire refonte complete : 3 portes B2C + 4 flows multi-step + filtrage budget strategique, CTAs toutes pages recables, image compression mobile, For Brands V2 polished)

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
- [x] Definir les 8 moods du discovery flow -> a reviser (Emma a flag copy et nombre : source catalogue.ts obsolete)
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
- [x] CTA final harmonise (pill The Studio + "Greece begins with a conversation") — photo MILOS_01 (portrait Emma retire)
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
- [x] Page Experiences : refonte complete (4 hero experiences + concierge 2x2 immersif + mobile audit + CTA route vers /contact?type=occasion)
- [x] Page About : rebuild complet (hero split + story + counter numbers + Why Greece + collabs + CTA)
- [x] Page Journal : rebuild complet (featured + 7 articles grille asymetrique magazine + The Height + hero photo panos-katsigiannis + CTA alexandra-kirr)
- [x] Page For Brands : refonte V2 luxury B2B (hero + Why Greece + 3 What We Produce cards + pull quote "The set is already built" + 3 thumbnails Production Formats + 8 tile mosaic What We Bring + Case Studies retire + CTA /for-brands/brief)
- [x] Page Private Journeys : refonte complete (hero + 2 featured + 6 secondaires + CTA "Every journey is shaped for one")
- [x] Page Collection : refonte complete v3 (8 blocs, villas overlay, Silent Coast pleine largeur, citation respiration, yacht plein ecran, off-market editorial, acquisition texte centre, photos locales, metadata SEO, yacht copy "chartered quietly through eb.")
- [x] Heroes harmonises sur Experiences + Collection + Journal (structure identique)
- [x] 9 pages detail journeys creees : Astypalea, Mykonos Timed Right, Athens Slowly, A Slow Honeymoon in the Cyclades, A Family Summer Greek-Style, A Week in the Cyclades by Sea, Paros + Antiparos Privately, Athens Beyond the Acropolis, Odyssey Greece, Sailing the Small Cyclades
- [x] **Paros v12 DA push luxury** : 7 moves DA (gradient beige + texture papier, typo 4:1, numerotation papier peint, drop caps, cadre magazine, details, vignettage) + reorganisation sections + images Highlights corrigees
- [x] **Mobile polish `/journeys`** : break titre Astypalea après virgule, metadonnees whitespace-nowrap, fade-up animations iOS (translate3d + backface-visibility), quote "Designed on the ground" break after period
- [x] **Harmonisation des CTA finaux** toutes pages : fond image sombre unifie, structure pill/titre/description/CTA identique (Home, About, Experiences, Collection, Journeys, For Brands)
- [x] **Image compression mobile** (avril 19) : tous les JPEGs > 3MB recompresses en 2400px max / qualite 85% via sips. 30+ fichiers. Chargement mobile divise par 3-5.
- [x] **Copy polish** : "Every journey starts from scratch" → "Every journey is shaped for one", yacht "timed by" → "chartered quietly through eb.", "She moves" retire, "Work with eb." → "Begin with eb.", "Every detail, handled quietly" → "Every detail, already thought of" + subtitle rephrase, "95 countries" text-balance
- [x] **Mobile menu (Nav)** : ajout "For brands & agencies" en footer du menu burger (Option A discrete)
- [x] **Back arrows** : teste et retire (Emma n'aime pas, Nav sticky suffit)
- [ ] Pages detail experiences/villas (catalogue complet ~35 items)
- [ ] Replication template Paros v12 sur les 4 fiches journey restantes (Astypalea, Mykonos, Honeymoon, Yacht) une fois template valide
- [ ] Fiches detail experiences (35+ a creer)
- [ ] Integration CMS : toutes les pages editables sans code

### Sprint 3 — Pages Secondaires & Formulaires (2 semaines)
- [x] **Page Contact/Inquire refonte complete** (avril 19, 2026) :
  - Landing `/contact` : hero editorial (paros_03.jpg, houses + waves) + 3 portes B2C (Journey / Occasion / Stay) grandes cartes image + sortie B2B discrete ligne underline
  - 4 flows separes : 
    - `?type=journey` (variant scratch par defaut, variant fiche via `?journey=slug`)
    - `?type=stay` (Villa / Yacht / Both, villa pre-remplie via `?villa=slug`)
    - `?type=occasion` (Wedding en priorite, + 9 autres types)
    - `/for-brands/brief` (B2B separe, existait deja)
  - Multi-step 3 etapes (WHO / WHAT / VISION) pour chaque flow avec :
    - Progress dots discrets + label "Step X of 3"
    - Back button (top + bottom)
    - Auto-save localStorage (si client quitte entre steps, retrouve ses reponses)
    - Vision free text min 60 chars (filtre naturel)
    - Budget tiers strategiques :
      - **Journey per person** : 5-8K / 8-15K / 15-30K / 30-50K / 50K+ / Confidential
      - **Villa per night** : 1.5-3K / 3-5K / 5-10K / 10K+ / Discuss privately
      - **Yacht et Occasion** : free text ("on request" culture)
    - Consent RGPD obligatoire
    - Submit genere summary DMC-ready + ouvre mailto prerempli vers hello@emmabonnefous.com
    - Confirmation editorial "Your brief is with Emma" + "Every inquiry is read, personally"
    - Submit button unifie : "Share your vision"
  - CTAs toutes pages recables :
    - Home CTA final → `/contact` (generique)
    - Experiences cards + CTA → `/contact?type=occasion`
    - Collection private circle, yacht, final → `/contact?type=stay` (avec variants)
    - Journeys listing CTA → `/contact?type=journey` (scratch)
    - 9 fiches journey → `/contact?type=journey&journey={slug}`
    - DiscoveryFlow fallback → `/contact?type=journey`
    - Antiparos introduction → `/contact?type=stay&ref=antiparos-introduction`
- [ ] Pages Privacy Policy + Terms — **DONE** (avril 2026). Privacy RGPD 12 sections (CNIL, art.6, droits utilisateur), Terms 9 sections (SIRET + adresse Paris). Mention legale globale ajoutee en bas des 14 pages ("eb. is a travel design studio. All journeys are operated by our licensed DMC partners in Greece.")
- [ ] Connexion formulaires submit → email notifications Resend/Formspree (mailto en place actuellement)

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

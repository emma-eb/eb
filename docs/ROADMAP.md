# Roadmap — eb. Platform
**Derniere mise a jour :** 2026-04-21 (soir) — **Les 7 fiches journey sont VALIDEES par Emma** sur desktop + mobile. Session photos + mobile final : 30+ photos locales deposees et integrees. Honeymoon refondu (10 → 7 nuits apres benchmark concurrence, 4 Milos + 3 Folegandros), Day by Day reecrit ton lune de miel, villa → boutique hotel partout, "above the sea/cliff" retire (on ne promet pas l'emplacement). Week by Sea : nouvelles photos yacht (yatch_page collection, reveil yatch, yatch on board), Glimpses aligne sur 3 iles du journey (Kythnos/Amorgos 2/Koufonisia). Mykonos copy jet-set. Animations settle (1.5s) + fade-up + hover 3.5% sur 56+ visuels. Pattern mobile canonique replique sur 7 fiches (hero 38px + break naturel, metadata nowrap min-w-0, day-by-day compact, Highlights full-page, related cards h3 22px, CTA final 38px, paddings px-6 alignes). Limite technique : Unsplash bloque l'agent (403), Emma depose les photos localement.

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
- [~] Cas clients : **ecartes du scope Phase 1** (decision Emma 20/04)

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
- [x] **Polish complet 20/04 soir** : refonte mobile bloc Highlights 7 fiches (full-page dvh + full-bleed + gradient from-black/85 via-black/35), restructuration Glimpses (titre "X at a glimpse" remplace legende bas de grille), fix cadrage mobile (object-[center_30%] hero / center_35% Highlights + md:object-center desktop), fix photos cassees (/astypalea..jpg, URL encoded raphael-lopes), CTAs corriges (collection villa=bestia-yacht → stay=yacht, about → ?type=journey), day-by-day pl-0 md:pl-[140px] sur 6 fiches, H1 sm: step sur About/Journal/Experiences/Collection
- [x] **Mykonos copy retravaillee** : hero "Where the nights run long and the days know better." / Highlights "Five nights, at full voltage. Beach clubs. Long tables. Dinners that turn into long nights." — positionnement jet-set assume (tempere "long nights" pas "mornings")
- [x] **Photos locales deposees par Emma** : /roof top athens.jpg, /scorpio.jpg, /astypalea_06.JPG, /atypalea_05.jpg (faute de frappe : manque un 's', a renommer un jour)
- [x] **Session 21/04 — photos + mobile final 7 fiches** :
  - 20+ photos locales deposees : villa famill_01, hydra_01/02/03, folegandros_01/02, kimolos, yatch page, dean-bennett, damien-schneider, yuliia-sereda pool, jacob-cartwright, gary-parfoot, isaw-company, polina-kuzovkova, laura-adai, antiparos, paros_04, kayak, paddle, Screenshot couple trinquant
  - **Animations** : nouveau `.eb-image-settle` (scale 1.08→1 sur 1500ms) applique sur 56 images des 7 fiches via IntersectionObserver ; hover zoom subtil 3.5% via `@media (hover: hover)` desactive sur tactile
  - **Honeymoon** : tous wordings "villa" → "boutique hotel" (Milos + Folegandros) — Route, Day 01/02/04, Included, Where You Stay h2 "One above the sea. One above the cliff." + body + image alt
  - **Family** : Day 09 "packing" retire, Day 10 transfer retire (coherence dates), Included boat "two days" → "three days", Season "June-Sept" → "April-October" (aligne listing), Destination "Porto Heli" → "Porto Heli + Saronic", Where You Stay h2 "One house, every generation.", Highlights photo villa+pool sunset, Glimpses 3 photos Hydra
  - **Athens** : Private Journey 03 → 05 (swap avec Honeymoon pour aligner ordre listing), Season year-round, "chef at home" → "dining at exclusive addresses" (coherent boutique hotel)
  - **Mykonos** : Day by Day reecrit (beach clubs, long tables, dinners that turn into long nights), Day 04 "Private boat, the full day.", image Highlights /scorpio.jpg
  - **Week by Sea** : Hero "grosse photo yacht" /yatch_page collection.jpg, Highlights /hero-bateau.jpg (photo homepage), CTA final swap /yatch page.jpg, Glimpses vue aerienne + Milos + Folegandros
  - **Paros** : Glimpses antiparos + paros_04 + paros_03
  - **Honeymoon** : Glimpses finaux = kimolos + milos cave + Milos maison (Firopotamos)
  - **Pattern mobile Astypalea repliqué sur 6 fiches** : hero h1 `text-[38px] leading-[0.95] sm:leading-[0.92]`, metadata `min-w-0 whitespace-nowrap text-[13px]`, day-by-day `py-7 gap-4 w-[60px] text-[15px] min-w-0 max-h-[500px] leading-[1.75]`, Where You Stay h2 `text-[32px]`, CTA final h2 `text-[38px]`, paddings px-6 alignes
  - **Nothing scheduled** → "Kept open, on purpose." (Paros, Family — Honeymoon retire avec reduction duree)
  - Glimpses : titre "X at a glimpse" au-dessus de la grille (7 fiches), legende bas supprimee
- [x] **Session 21/04 soir — refonte Honeymoon + finalisation Yacht + validation 7 fiches** :
  - **Honeymoon reduit 10 → 7 nuits** (4 Milos + 3 Folegandros) apres benchmark concurrence Jacada/Scott Dunn/Black Tomato (7-10 nights standard). Day by Day raccourci de 11 a 8 jours, Duration/Route/Included/related cards mis a jour.
  - **Honeymoon : toutes mentions "villa" → "boutique hotel"** (Milos + Folegandros). Route simplifiee (pas de suffixe "above the sea/cliff"). Where You Stay h2 "Two islands, two hotels." Body "A hand-selected boutique hotel on Milos. Another on Folegandros. Both chosen quietly, confirmed once we know your dates."
  - **Day by Day Honeymoon reecrit ton lune de miel** : "just the two of you", "only yours", "no footprints but yours", "the light is lunar", "the silence Folegandros is famous for", Day 08 final "the rest begins." Day 01 Flight → Assisted transit. Day 06 Private access → slow climb.
  - **Photos Honeymoon finales** : hero MILOS_01, Highlights rocher milos_03 (Sarakiniko), Where You Stay milos sunset (cote pink), Glimpses kimolos + milos cave + Milos maison
  - **Week by Sea validee** ("EXCELLENTE PAGE YATCH !!! BRAVOOO") : hero /yatch_page collection, Highlights /reveil yatch (remplace hero-bateau), Where You Stay /yatch on board, Glimpses 3 iles du journey = Kythnos + Amorgos 2 + Koufonisia, CTA final /yatch page
  - **Related cards h3** : `text-[28px] md:text-[32px]` → `text-[22px] md:text-[28px] leading-[1.05]` (evite coupure titre long "A Week in the Cyclades, by Sea")
  - **Hero h1 break** : `<br className="hidden sm:block" />` → `<br />` sur les 5 fiches restantes (break visible mobile, plus de titre tronque)
  - **Mobile paddings finaux** : Mid CTA `px-6 md:px-8`, CTA final inner `px-6 md:px-10` (coherent px-6 mobile partout)
  - **About CTA** : `/contact?type=journey` → `/contact` (renvoie aux 3 portes B2C)
  - **Photos locales ajoutees ce soir** : folagandros vue, milos couple, milos cave, milos sunset, Milos maison, Milos couple, rocher milos, rocher milos_03, kythnos, amorgos, amorgos 2, koufoussina, yatch page, yatch on board, reveil yatch, villa famill_01, damien-schneider, yuliia-sereda-xlsqncXqeUw, jacob-cartwright, dean-bennett + autres (30+ au total)
- [x] **Les 7 fiches journey sont VALIDEES par Emma** (Astypalea, Mykonos, Honeymoon, Paros, Athens, Family, Week by Sea) sur desktop + mobile. Numerotation alignee : 01 Astypalea / 02 Mykonos / 03 Honeymoon / 04 Paros / 05 Athens / 06 Family / 07 Week by Sea.
- [ ] Scope recadre 20/04 : **PAS de fiches detail villas/experiences** (le catalogue.ts reste contenu interne, pas de pages publiques detail) — 7 itineraires journey suffisent ✓
- [~] Replication template Paros v12 **uniquement sur la fiche Sailing / Yacht** — Yacht (Week by Sea) validee par Emma avec la DA actuelle, pas besoin de replication v12.
- [ ] Integration CMS : toutes les pages editables sans code

### Sprint 3 — Pages Secondaires & Formulaires (2 semaines)
- [x] **Page Contact/Inquire V3 refonte complete** (avril 19-20, 2026) :
  - Landing `/contact` : hero editorial (paros_03.jpg) + 3 portes B2C (Journey / Occasion / Stay). **Page 100% B2C** — la sortie B2B retiree le 20/04, `/for-brands/brief` reste accessible uniquement depuis `/influencer-production`.
  - **Architecture one-page sectionnee** (plus de multi-step avec progress dots — juge trop SaaS apres benchmark Aman/Rosewood/Belmond/Black Tomato/Scott Dunn/Jacada). Wrapper `FormOnePage` + subcomponents `Section` numerotees 01/02/03.
  - 3 flows B2C : `?type=journey` (variant scratch ou fiche via `&journey=slug`), `?type=stay` (Villa / Yacht, villa pre-remplie via `&villa=slug`), `?type=occasion` (Wedding en priorite + 9 autres types).
  - **Budget tiers simplifies** (post-benchmark 20/04, pattern 3-4 tranches + "Not sure — let's discuss" unifie) :
    - **Journey per person** : €2-5K / 5-10K / Over €10K / Not sure
    - **Villa per night** : €1-3K / 3-7K / Over €7K / Not sure
    - **Occasion total** : Under €15K / €15-50K / €50-200K / Over €200K / Not sure
    - **Yacht** : pas de champ budget, remplace par bloc "quoted individually, share dates/party"
  - **Champs & micro-interactions** : date picker natif (DateRange Journey/Stay, single Occasion), Flexibility en PillChoice, Vision free text min 60 chars (filtre naturel), confirmation summary masquee derriere toggle "View my brief", plus de "within 48 hours" (remplace par "shortly").
  - Auto-save localStorage par flow, consent RGPD obligatoire, submit unifie "Share your vision" genere summary DMC-ready + mailto via `<a>` programmatique (workaround window.open bloque browsers).
  - `catalogue.ts` obsolete cote mood grid, supprime.
  - CTAs toutes pages recables : Home → `/contact`, Experiences → `?type=occasion`, Collection → `?type=stay`, Journeys listing → `?type=journey`, 9 fiches journey → `?type=journey&journey={slug}`, B2B → `/for-brands/brief`.
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

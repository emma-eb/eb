# Roadmap — eb. Platform
**Derniere mise a jour :** 2026-04-28 — **Session 28/04 : refonte complete UX/animations + nettoyage code mort + drop Phase 2**.

**Session 28/04/2026 — fin de session (synthese complete) :**

**Fixes finaux (post-validation Emma) :**
- **Bloc vide enorme sur forms `/contact?type=X`** : RevealFallback ne re-observait pas les elements quand seuls les search params changeaient. Resolu (urlKey + MutationObserver). Forms valides sur 7 scenarios.
- **Underline CTA debordait** sur cards villa `/collection` ("View residence"). Resolu par `width: fit-content` sur `.eb-cta-link`.
- **Underline CTA cassait centrage** sur hero fiches villa apres premier fix. `align-self: flex-start` retire, alignement parent (`items-center`) restaure.
- **Footers `/collection` et `/collection/[slug]`** : liens `Journeys` + `Experiences` retires pour harmonisation avec autres footers (For Brands / Journal / About / Contact).
- **Padding header forms** reduit (`pt-28` -> `pt-20`).
- **Suspense boundary** ajoute autour de `<RevealFallback />` dans le layout (build statique).


- **Animation system reecrit de zero** : remplace 6 classes CSS + 18 IntersectionObservers eparpilles par un seul composant `<RevealFallback />` dans le layout. Auto-stagger ligne par ligne, threshold:0 + safety net 2s. Slide-up 40px (etait 24px). Tentative scroll-linked CSS abandonnee (incompatible avec `overflow: hidden` parents).
- **Hover global sur images des cards** : zoom 1.04 + brightness 1.05, transition 700ms.
- **CTAs soulignes en permanence** (avant : trait au hover seulement). Opacity 0.5 -> 1 au hover.
- **44 gradients sitewide allegements** vers standard `from-black/55 via-black/15 to-transparent`. Heroes intacts. Brand/Content cards `/influencer-production` au contraire renforcees pour lisibilite sur photo claire.
- **Cadre beige `eb-inner-frame`** ajoute sur Indoor/Outdoor villas (meme pattern que Included/On Request fiches journey).
- **Cross-sell journey enrichi** : meta cards "You might also like" incluent maintenant la saison.
- **Lien "Back to Private Journeys"** ajoute sur les 7 fiches journey detail (coherence avec "Back to the Collection" sur fiches villa).
- **Fleches chevron des heros 7 fiches journey** : rendues cliquables (etaient `<div>` morts), animation deplacee du bouton vers le SVG enfant pour fiabilite tap iOS.
- **Compteur 4 chiffres `/about`** : useEffect restaure (avait ete supprime dans le menage).
- **`/journal` typographie cards** : badges/dates 8/9px -> 10/11px, h3 small clamp(15-20) -> clamp(17-24), h3 featured clamp(18-28) -> clamp(20-32). Lisibilite mobile.
- **Cadre bleu de focus persistant** sur cards villa (iOS Safari) : `:focus-visible` desactive sur `a.eb-card-hover`.
- **Class utilitaire `.eb-no-reveal`** : opt-out animations sur une section (applique grille `/journal` car Emma trouvait l'anim trop lente sur petits cards).
- **18 fichiers nettoyes** : tous les IntersectionObserver per-page supprimes (~150 lignes). Classes obsoletes retirees : `.eb-fade-up`, `.eb-fade-in`, `.eb-image-settle`, `.eb-delay-*`, `<RevealOnLoad />`. Nav.tsx failsafe parasite supprime.
- **Site VALIDE par Emma** sur desktop ET mobile.
- **Phase 2 droppes** par Emma le 28/04 : Stripe paywall, PDF generation, Sanity CMS, Lightbox connect, WHITE SERENITY 3e villa.

---

**Session 27/04 :** — **Collection v6 : +3 nouvelles fiches villa (Silent Coast, Aegean Residence refonte, Anavissos Lux off-market)**, **audit /contact + CTAs complet pre-launch US** (corrections : ?ref= orphelin, helicopter transfers, FormShell mort, em dashes mailto, 4 BLOQUANTS fixes), **OccasionForm budget free text required pour tous**, **JourneyForm visual card + journeyMustHaves**, **lien Privacy Policy dans 3 forms**, **email fallback hello@emmabonnefous.com sous IntentCards**, **mobile fixes** (hero arrow tap target + safe-area, hero h1 text-balance + sizes, KeyFacts grid gaps, cards aspect-[4/5] mobile pour Celestia badge), **photos compressees -33% villas + -66% root** (sips quality 82, max 1920w), **push GitHub** via push-to-github.js (avec commit message CLI arg). Total : 8 fiches villa publiques (You & Me, Celestia, Esmeralda, Tourlos Breeze, Santorini Estate, **Silent Coast**, **Aegean Residence**, **Anavissos Lux**) + BESTIA yacht. WHITE SERENITY non ajoutee (photos manquantes). AEGEAN ESSENCE + SEAFRONT SANCTUARY supprimees (orphans).

**Session 27/04 (suite) :** rework 3 villas + audit contact + mobile + perf.
- **+3 fiches villa** : Silent Coast (Porto Heli, 6 ch, 12 guests, From €2,600/nuit, 15 photos), Aegean Residence (Porto Heli, 7 ch, 14 guests, From €3,500/nuit, refonte complete), Anavissos Lux (Athens Riviera, 6 ch, 12 guests, Price on request, 8 photos, badge "Off Market", hero photo 5 piscines rotated landscape).
- **Audit /contact** : 60+ CTAs mappes, 4 BLOQUANTS fixes (Patmos copy-paste error, ?ref= orphelin x2, "Helicopter transfers" dans mustHaves, FormShell.tsx code mort).
- **OccasionForm** : budget passe a free text required pour tous (avant : seulement Wedding), guests sans cap (avant max 200).
- **JourneyForm** : journeyMustHaves separe (sans pantry/housekeeping qui ne servent pas en multi-stop hotel), visual card pour journey preselect (`?journey=<slug>`), titre journey humain au lieu du slug brut.
- **3 forms** : phone placeholder neutre, lien Privacy Policy dans consent, vision min 60 -> 100 chars, em dashes -> hyphens dans mailto.
- **IntentCards** : "Begin" -> "Start the conversation", "Occasions from €15,000" -> "Occasions from €2,000", email fallback hello@emmabonnefous.com discret en bas.
- **BESTIA** : prix masque ("Price on request" en small italic), services label "Onboard" (avant : "On Request" qui contredisait les inclusions).
- **Anavissos** : badge "By Introduction Only" -> "Off Market", CTA "Request introduction" -> "View residence", "shared on introduction" retire de l'intro, prix bas masque automatiquement.
- **Santorini Estate** : "Two acres" -> "8,000 m² estate" + cliche Rubelli/Stella retire de theHouse.
- **Silent Coast** : repetitions "Three levels arranged around" supprimees entre intro et theHouse.
- **Mobile** : hero arrow `/collection` tap target 44x44 + safe-area-inset, hero h1 fiches text-balance + 34px mobile, hero image `object-center` mobile, /collection bloc yacht 70vh mobile, KeyFacts grid gap-y-3, cards aspect-[4/5] mobile (Celestia badge ne deborde plus).
- **Perf photos** : sips -Z 1920 -s formatOptions 82 -> villas 73->49 MB, root /public 166->75 MB. Backup dans /tmp/villa-photos-backup avant compression.
- **GitHub push** : push-to-github.js modifie pour accepter commit message en arg CLI. VILLA IMAGES ajoute a IGNORE.
- **Quote /collection** : "The right house" -> "The right address" (UHNW vocabulaire, aligne avec hero "Your address in Greece").
- **StayForm** : bug localStorage corrige (URL params ?stay=yacht / ?villa=X prennent priorite sur les drafts sauves).
- **Decisions Emma** : Silent Coast m² laisse vide (PDF source ne le donne pas), UK spelling conserve (Personalise/metres), prix retires des cards Silent Coast/Aegean (template autres villas), Anavissos detail accessible directement (badge suffit), WHITE SERENITY skippe (photos manquantes), AEGEAN ESSENCE + SEAFRONT SANCTUARY cards supprimees.

**Session 27/04 (1) :** rework majeur fiches villa + contact + collection.

**Session 27/04 :** rework majeur fiches villa + contact + collection.
- **+3 fiches villa** : Esmeralda (Mykonos, 600 m² / 10 bed / 20 guests / From €4,515), Tourlos Breeze (Tourlos, Mykonos / 840 m² / 8 bed / 16 guests / From €5,015 + badge en attente), Santorini Estate (Messaria, Santorini / Two acres / 5 suites / 10 guests / From €7,615). Photos + content synthetises **strictement depuis les PDFs descriptifs Emma** (no impro). Cruise-ship line stripped de Tourlos Breeze (regle no-cruise-ships). 38-50 photos source par villa, selection finale 14-15 par fiche apres curation ciblee (gym Tourlos + Celestia, twin pools, sunset, cove views).
- **Celestia mise a jour** : badge "New for 2026" hero+card, gallery refondue (gym 4.jpg en gallery-08 remplace stone entryway, aerial twin pools 3.jpg en gallery-11 remplace stone bathroom, +pergola sun loungers, twin pools, wine cellar).
- **Yacht banner /collection** : image swap `/yatch_page collection.jpg` (resort terrace ambiguous) → `/yatch on board.jpg` (gangway editorial — clairement un yacht). Section deplacee **AU-DESSUS** de Private Introduction. Phrase fausse "The only one of her kind available for charter in Greece" supprimee. CTA final `/collection` ajoute "VILLAS FROM €1,000 / NIGHT" avant le bouton.
- **Contact V4 = V3 + 2 modes preselect** :
  - **Villa preselect** (`?villa=slug`) : typeLabel "Enquiry · {villa.name}", title "About this villa.", intro adapte, "What are you looking for" cache, encart "Villa of interest" locked + bouton Change, encart price `From €X / night`, "Bedrooms (minimum)" cache, vision optionnelle (titre Section 03 "Anything else."), submit "Send my enquiry".
  - **Yacht preselect** (`?stay=yacht`) : typeLabel "Enquiry · Private Yacht Charter", title "Charter the yacht.", intro yacht, "What are you looking for" cache, encart "Charter — Private Yacht Charter / 33m Italian yacht, 4 cabins, 8 guests, crew of 5, Athens-based, quoted individually", note yacht Section 03 cache (redondant), submit "Send my enquiry".
  - **Generic** (no preselect) : submit "Start the conversation" (etait "Share your vision" — vire car wedding-planner cliche).
  - Em dash retire des `villaBudgets`/`journeyBudgets` ("Not sure, let's discuss").
- **IntentCards** : priceRange ajoute sur les 3 cards. Journeys from €2,000 / person · Occasions from €15,000 · Villas from €1,000 / night. Floor portfolio confirme = €1,000 (PAS €6,500 qui est specifique You & Me).
- **Hero overlays sitewide** : 7 pages auditees, overlays reduits (hero /40-/45 → /25 ; CTA bandeaus /50-/55 → /35-/40 ; CTA finals /40 → /30). Photos respirent. Texte blanc reste lisible grace au text-shadow existant. Gradient hero /contact specifique : top renforce 10%→40% noir pour que la nav blanche soit lisible avant scroll.
- **CSS reveal fallback** : `.reveal` recoit `animation: reveal-fallback 0.7s ease-out 2s forwards` — si l'IntersectionObserver JS ne se declenche pas dans 2s, le contenu apparait quand meme. Plus de "trous" possibles.
- **Mobile polish** : `text-balance` location pills, gap-y-5 key-facts strip, gap-8 amenities mobile, pills form contact px-3 py-2.5 (etaient px-4 py-3), DateRange gap-6 mobile, encart yacht preselect padding adapte.
- **Type model** : `VillaDetail.card.combinableWith?` et `VillaDetail.adjacent?` rendus optionnels. `VillaDetail.badge?: string` ajoute (rendu pill bleu hero + top-left card collection). `VillaCard.badge?: string` ajoute pour la card collection list. `[slug]/page.tsx` rend la section adjacent conditionnellement.
- **Anchor #homes** : ajoute sur la grille des villas dans `/collection`. Lien "Back to the Collection" en bas des fiches villa pointe vers `/collection#homes` (atterrit sur la grille, plus sur le hero).
- **Decisions Emma** : adjacent villa retire pour Esmeralda/Tourlos/Santorini (seules You & Me + Celestia sont voisines reelles). Pas de m² Santorini dans le PDF, remplace par "Two acres" (taille du domaine). Bathrooms inferees "8 en-suite" Tourlos (luxury inference, PDF implique mais ne dit pas). Tourlos cruise-ship line strippee. Santorini "private event space" non mentionne explicitement → utilise "private candlelight dinners" (formule du PDF officiel).

**Session 24/04 (precedente : 21/04 soir) :** les 7 fiches journey restent validees inchangees. — **Les 7 fiches journey sont VALIDEES par Emma** sur desktop + mobile. Session photos + mobile final : 30+ photos locales deposees et integrees. Honeymoon refondu (10 → 7 nuits apres benchmark concurrence, 4 Milos + 3 Folegandros), Day by Day reecrit ton lune de miel, villa → boutique hotel partout, "above the sea/cliff" retire (on ne promet pas l'emplacement). Week by Sea : nouvelles photos yacht (yatch_page collection, reveil yatch, yatch on board), Glimpses aligne sur 3 iles du journey (Kythnos/Amorgos 2/Koufonisia). Mykonos copy jet-set. Animations settle (1.5s) + fade-up + hover 3.5% sur 56+ visuels. Pattern mobile canonique replique sur 7 fiches (hero 38px + break naturel, metadata nowrap min-w-0, day-by-day compact, Highlights full-page, related cards h3 22px, CTA final 38px, paddings px-6 alignes). Limite technique : Unsplash bloque l'agent (403), Emma depose les photos localement.

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
- [x] **Session 24/04 — Collection v4 + 2 fiches villa dediees** :
  - **Page Collection** : nouveau hero, 2 villas reelles en full-width banners au top (You & Me + Celestia), 3 placeholders en cards standard, bandeau By Introduction, bloc yacht + CTA final inchanges. Specs card 3 features "m² · Guests · Seafront" pour les 2 villas reelles, "Bed · Guests · Seafront" pour les 3 placeholders en attendant m².
  - **Template fiche villa** `/collection/[slug]` : Hero (image + pill + H1 Anton + location + CTA "Enquire about this villa" + key-facts strip 4 cells Size/Bedrooms/Bathrooms/Guests SANS prix) → Intro (tagline H2 bleu editorial + pill introLabel + trait + body) → Gallery (lightbox, hover zoom, eb-image-settle) → The Villa (architecture prose) → The Estate (amenities 2 col Indoors/Outdoors) → The Location → On Request (services) → Price + Availability ("From €X / night" + italic disclaimer) → CTA final "Stay here?" → Adjacent villa (cross-sell SOUS le CTA) → Back to the Collection (remplace NextChapter silos).
  - **Retires du template** : Seasonal Windows (section supprimee), sticky CTA bouton bleu fixed (teste + retire "moche e-commerce"), Concierge 2-col grid (revert V1 sobre), NextChapter silos generiques.
  - **Data model** : `app/data/villa-details.ts` avec interface `VillaDetail` + nouveaux champs `introLabel?`, `tagline?`, `keyFacts.bathrooms?`.
  - **Villa You & Me** : 900 m² / 10 bedrooms / 10 en-suite bathrooms / 20 guests / From €6,500 / introLabel "A Seafront Estate" / tagline "Ten rooms above the open Aegean." / intro retire "newly built" (c'est Celestia la nouvelle pas You & Me, correction Emma 24/04) / gallery 15 photos (gallery-02 porte retiree, gallery-16 cuisine ajoutee). Dossier source `/public/VILLA IMAGES/VILLA01_YOU & ME/` contient 89 photos dont 72 non utilisees.
  - **Villa Celestia** (NEW, donnees du PDF descriptif) : 950 m² / 9 bedrooms (6 first level + 3 masters upper) / 9 en-suite bathrooms / 18 guests / From €7,300 / bioclimatic stone architecture / introLabel "A Seafront Residence" / tagline "Stone, light, and the open sea." / amenities incluent 2 indoor + 4 outdoor lounges, Home cinema, Indoor gym, 2 infinity pools cross two levels, 2 outdoor jacuzzis, Fire pit, BBQ.
  - **Strategie prix "dream first, price last"** : prix retire du hero strip, place juste avant le CTA final. Benchmark Aman / Le Collectionist / Belmond confirme le pattern. Psychologie : le visiteur tombe amoureux avant de voir le prix, prix devient confirmation pas filtre.
  - **Cascade CTAs 2 niveaux** : hero "Enquire about this villa" + final "Start the conversation" vers `/contact?type=stay&villa={slug}` (Contact V3 StayForm avec villa pre-remplie). Plus de mailto.
  - **Mobile polish + animations** : 2e IntersectionObserver pour `.eb-image-settle` (scale 1.08→1, 1500ms), `eb-image-vignette` sur CTA final, hover zoom 3.5% sur gallery, hero image `object-[center_30%] md:object-center`, hero h1 `text-[38px] sm:text-[52px] md:text-[88px] text-balance`, min-h-[600px], key-facts strip compact mobile, intro tagline `text-balance`, CTA final h2 `text-[38px] md:text-[64px]`. Pattern aligne sur les 7 fiches journey.
  - **Wording decisions apres nombreuses iterations** : "The Villa" (pas "The House"), "The Estate", "Indoors / Outdoors" (ordre inverse + symetriques, etaient "Outdoor & Wellness / The Residence"), "On Request", "Stay here?" (CTA final, pas "A stay begins with a conversation." redondant ni "Ready to begin?" trop abstrait), "Stays from 3 to 5 nights. Dates and rates confirmed at inquiry." (availability note simplifiee). Testees + retirees : labels storytelling (Facing west, By design, Everything in place, etc.) → revert V1 classic valide Emma.
  - **Points de vigilance** (voir cahier des charges section 22.11) : (1) location Celestia — PDF dit "200m Glyfadi Beach" pas "Aleomandra", impact sur concept adjacent/combinable with You & Me, a clarifier Emma ; (2) m² des 3 villas placeholders manquent ; (3) photos salon You & Me manquant + BBQ + fireplace + indoor dining (72 photos source restent a trier) ; (4) migration 33 photos source Celestia vers `/public/villas/celestia/` pas encore faite.
- [ ] Scope recadre 20/04 ~~PAS de fiches detail villas/experiences~~ → **MIS A JOUR 27/04** : 5 fiches villa publiques live (You & Me + Celestia + Esmeralda + Tourlos Breeze + Santorini Estate). Les 3 placeholders historiques (Aegean Residence, Aegean Essence, Seafront Sanctuary) restent en cards sans fiche dediee, avec lien vers `/contact?type=stay&villa={slug}`.
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
- [x] **Site valide desktop + mobile par Emma le 28/04/2026** apres refonte UX/animations completes
- [ ] Optimisation SEO (balises, vitesse, sitemap)
- [ ] Tests cross-device (iPhone, Android, desktop, tablette)
- [ ] Configuration Google Analytics 4 / Plausible
- [ ] Connexion formulaires submit → email notifications (Resend/Formspree, etat actuel : mailto)
- [ ] Mise en production sur emmabonnefous.com

### Criteres de succes Phase 1
- Site live et accessible sur le domaine final
- Score Lighthouse >= 90 (performance, SEO, accessibilite)
- Premier formulaire de demande recu dans les 30 jours post-lancement

### DROPPES (decision Emma 28/04/2026, out of scope Phase 1)
- ~~Integration Stripe paywall $100 + deposit $500~~
- ~~Generation PDF "eb. Private Route" automatique~~
- ~~CMS Sanity (toutes les pages editables sans code)~~
- ~~Lightbox plein ecran sur galleries villa~~ (composant `/components/Lightbox.tsx` existe mais ne sera pas branche)
- ~~WHITE SERENITY 3e villa Porto Heli~~ (photos Emma jamais arrivees)
- ~~Pages detail experiences (catalogue 35+ items)~~ (decision deja actee 20/04, confirmee)

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

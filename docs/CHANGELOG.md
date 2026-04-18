# Changelog — eb. Platform

Toutes les evolutions notables du projet sont documentees ici.

Format base sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).

---

## [Non publie] — A venir

### En cours
- Pages detail experiences/villas (catalogue complet ~35 items)
- Integration Stripe pour paywall $100 "eb. Private Route" + deposit $500
- Generation PDF automatique "eb. Private Route"
- Integration CMS Sanity
- Pages Privacy Policy + Terms

---

## [0.7.0] — 2026-04-17

### Ajoute
- **Page Private Journeys (`/journeys`) refonte complete** : hero h-[100dvh] harmonise avec Experiences/Collection/Journal, 2 featured journeys (Astypalea #01 + Mykonos Timed Right #06), 6 journeys secondaires numerotes (02-05, 07-08), CTA final coherent avec le reste du site
- **9 pages detail journeys creees** :
  - `/journeys/astypalea-before-everyone-else` (Athens + Astypalea, 7 nuits, mai-sept)
  - `/journeys/mykonos-timed-right` (Mykonos villa privee, 5 nuits, juin-sept)
  - `/journeys/athens-slowly` (Athens + day trips, 5 nuits, toute l'annee)
  - `/journeys/a-slow-honeymoon-in-the-cyclades` (Milos + Folegandros, 7 nuits, mai-sept)
  - `/journeys/a-family-summer-greek-style` (Porto Heli + Saronic, 10 nuits, juin-aout)
  - `/journeys/a-week-in-the-cyclades-by-sea` (yacht 33m, 6 iles, 7 nuits, mai-sept)
  - `/journeys/paros-antiparos-privately` (Paros + Antiparos)
  - `/journeys/athens-beyond-the-acropolis` (Athens insider)
  - `/journeys/odyssey-greece` (refonte)
  - `/journeys/sailing-the-small-cyclades` (nouveau slug plus propre)
- **NewsletterBanner mobile** : padding affine pour suppression gap visible
- **Homepage** : ajustements finaux (page.tsx 27KB mise a jour le 17 avril)

### Modifie
- **Catalogue journeys** : passage de prototype 1 page (`sailing-small-cyclades`) a 9 pages detail completes
- **Nav/Footer** : ordre et styles verifies sur toutes les nouvelles pages journeys
- **Structure URL journeys** : slugs tous harmonises en kebab-case descriptif

### Statut Phase 0
- Toutes les pages principales livrees (Homepage + Experiences + About + Journal + For Brands + Collection + Private Journeys)
- 9 pages detail journeys publiees
- Restent : pages detail experiences/villas, CMS, Stripe, Privacy/Terms, bascule domaine

---

## [0.6.0] — 2026-04-16

### Ajoute
- **Heroes harmonises sur 3 pages** (Experiences, Collection, Journal) : structure identique `h-[100dvh]` + centrage flex `items-center justify-center`, pill tag `mb-6 px-3 py-1.5 bg-white/15 backdrop-blur`, titre Anton `text-[52px] md:text-[88px]`, sous-titre `max-w-[580px]`
- **Collection : 5e villa (Silent Coast) pleine largeur** desktop (`md:col-span-2 md:aspect-[21/9]`), reste en carte 3:2 sur mobile
- **Collection : citation de respiration** "The right house changes the week." entre grille villas et Private Residences
- **Collection : gradient overlay cartes villa renforce** (`from-black/80 via-black/30`) pour meilleure lisibilite CTA
- **Collection : metadata SEO** via `layout.tsx` (title + description)
- **For Brands : "Why Greece" en pill tag** + titre "Greece as a set." en Anton uppercase `text-[44px] md:text-[72px]`
- **For Brands : photo MILOS_02** pour le bloc Why Greece (remplace MILOS_03), avec `object-[center_60%]` pour cadrer sur l'eau bleue
- **Collection : 3 photos villa remplacees** (Aegean Essence, Edge of Sea, Silent Coast)

### Modifie
- **Collection : bloc Acquisition** passe de split layout 50/50 avec image helicoptere a texte centre sur beige (surtitre + ligne bleue + titre + body + CTA), plus d'image
- **Collection : espacement Manifesto → grille resserre** (`pb-4 md:pb-6` manifesto, `pt-6 md:pt-10` grille)
- **Collection : photo bloc Private Residences** = `photo bandeau_page Collection.jpg` (photo locale fournie par Emma)
- **For Brands : closing "Greece has the locations..."** reduit a `text-[18px] md:text-[20px]` (etait 20-24)
- **NewsletterBanner : padding-top mobile reduit** (`pt-14 md:pt-16` → `pt-4 md:pt-16`) pour supprimer gap visible sur mobile

### Supprime
- Bloc image helicoptere du bloc Acquisition (`/helicptere.jpg` n'est plus utilise)
- Ligne graphique bleu marine sous "Why Greece" sur fond sombre (remplacee par pill tag)

---

## [0.5.0] — 2026-04-16

### Ajoute
- **Page Collection refonte complete v3** : 7 blocs (hero, manifesto, grille 5 villas, private residences, yacht, acquisition, CTA final)
- **Cartes villa overlay** : texte directement sur l'image avec gradient (plus de texte sous l'image), aspect 3:2 paysage, hairline supprimee
- **Bloc "Private Residences. By Introduction."** : remplace les 4 cartes off-market floutees par 1 bloc editorial unique sur image villa vue mer
- **Bloc Yacht plein ecran** : image locale (`yatch_page collection.jpg`) avec gradient overlay et texte en bas a gauche, suppression du bandeau noir split
- **Photo helicoptere** : ajoutee dans le bloc Acquisition (`helicptere.jpg`)
- **Manifesto editorial** : "Where we send our closest clients." + "A network, built over twelve years on the ground."
- **Sources Journal lisibles** : fond pill `bg-black/30 backdrop-blur-sm rounded-full` sur toutes les sources (Variety, Tornos News, etc.)
- **Footer trait corrige** : `mt-8` ajoute sous le trait separateur sur TOUTES les pages (home, about, journal, experiences, influencer-production, collection)

### Modifie
- **Collection** : 13 blocs reduits a 7 blocs (suppression locations bar, 5 sections region, pricing note, cartes floutees)
- **Yacht anonymise** : aucune mention de BESTIA, San Lorenzo, SP110, Compasso d'Oro. Uniquement "33-metre Italian yacht"
- **Journal textes reduits** : titres h3 et sources plus petits sur les cartes article, tags categorie avec fond `bg-black/40 backdrop-blur-md`
- **Pill tags Collection** : "Collection" (pas "The Collection")
- **Grille villas** : gaps resserres, padding cartes reduit, pas de surtitre "The Homes"

### Supprime
- Locations bar (ATHENS RIVIERA / PORTO HELI / MYKONOS / MEGANISI / CRETE)
- Toutes les sections region (Region 01 a 05) avec compteurs "X Residences"
- Toutes les cartes off-market floutees (`filter: blur`)
- Composants `PublicCard` et `OffMarketCard` internes
- Bloc Pricing Note ("Rentals from 1,000 to 10,000+")
- Constante `OFF_MARKET_IMG`

---

## [0.4.0] — 2026-04-15

### Ajoute
- **Page About rebuild complet** : hero split compact (500px max), "The Story" 3 paragraphes, counter animation numbers (12+/80+/95+/35+), Why Greece full-bleed avec statement "That is what eb. provides.", collaborations hierarchie visuelle (noms bleu marine + lieux gris), citation, CTA golden hour
- **Page Journal rebuild complet** : hero compact 45vh, featured article BusinessToday (India/Dubai), grille asymetrique magazine 7 articles sur fond noir (1 grand + 2 petits + 3 egaux + 1 bande), cartes immersives texte sur images, The Height real estate, CTA "Have a project in mind?"
- **Page For Brands rebuild** : hero centre, Why Greece layout centre avec punchline "Greece has the locations. We have the network.", 3 services resserres, 3 formats, grille competences 4 colonnes, CTA "Send a brief" avec pulse
- **Page Experiences** : concierge refait en grille 2x2 immersive (texte sur images), section breathing ajoutee, corrections mobile completes, gradient uniforme, Inter force sur titres
- **Scroll reveal** sur toutes les pages (IntersectionObserver, stagger, prefers-reduced-motion)
- **Image settle** sur About (Why Greece), Journal (featured + The Height), Experiences (4 blocs)
- **Counter animation** sur About (numbers 0 → valeur en 1.5s)
- **CTA pulse** (classe door-cta) sur toutes les pages

### Modifie
- **Footer composant partage** : identique sur toutes les pages (homepage, experiences, about, journal, for brands), mobile order (nav first)
- **Charte typographique** : Inter force en inline style sur tous les titres pour eviter fallback serif
- **Hero About** : "eb. Private Travel Studio" + "Greece, privately." claim
- **Numbers About** : 12+ / 80+ / 95+ / 35+ avec labels mis a jour
- **Story About** : 3 paragraphes raccourcis, "eb. is a private travel studio dedicated to one country"
- **Experiences copy** : "Michelin-starred" supprime puis restaure, "private penthouse" au lieu de "private villa"
- **For Brands** : "End-to-end" retire, "Talent & PR" → "Talent & Coordination", "Medical support" → "Emergency support", Jimmy Fairly/Nina Ricci/Spoyl supprimes
- **Metadata** : "bespoke" retire des keywords

### Supprime
- Ancien footer non-partage sur toutes les pages secondaires
- Section "Past productions" (Jimmy Fairly, Nina Ricci, Spoyl) de la page For Brands
- "Selected case studies available on request." de la page For Brands
- Colonne "Greece" (Jimmy Fairly, Nina Ricci, Spoyl) de la page About
- Tous les faux articles et liens Instagram de la page Journal

### Corrige
- Images Unsplash : remplacement systematique des URLs 404 par des URLs verifiees du catalogue
- Regle : jamais reutiliser la meme photo sur 2 pages differentes
- Photo About CTA : remplacee (plus de requin)
- Photos Journal : toutes remplacees par URLs verifiees du catalogue

---

## [0.3.0] — 2026-04-14

### Ajoute
- **Homepage v2 complete** : 13 blocs valides, design final mobile-first
- **Bloc "The Studio"** : layout editorial avec surtitre, ligne graphique bleu marine (40px, 2px), statement en font-body light 30px, signature "Founded by Emma Bonnefous, Athens"
- **2 blocs citation** : "The difference between visiting Greece and truly knowing it." + "One country. A thousand ways to make it yours."
- **Bandeau chiffres** : "12 years in luxury production, 35+ islands covered, Athens-based, worldwide clients"
- **Pill tags** sur surtitres des featured sections (bg-white/15, backdrop-blur, rounded-full)
- **Chevron de scroll** anime sur le hero, disparait au scroll
- **Footer refonte** : 3 colonnes (logo/copyright/email, Privacy Policy/Terms + Instagram/LinkedIn, nav 2x2)
- **Image locale Collection** : 134_terrace_privatebeach.jpg au lieu d'Unsplash
- **Smooth scroll** "Discover your Greece" vers les 3 portes (#discover)

### Modifie
- **Ordre 3 portes** : Private Journeys > Experiences > Collection (aligne avec le menu)
- **CTAs 3 portes differencies** : "Explore journeys", "Discover", "View the collection"
- **Navigation sticky** : 3 etats (transparent sur hero, noir/blur sur sombre, beige/blur sur clair) avec detection data-nav-dark
- **Menu couleurs** : bleu marine (#2e5a88) sur fond clair au lieu de noir (#1a1a1a)
- **CTA final** : "Ready to begin?" en font-body light (pas Anton), bouton texte underline (pas rectangle plein)
- **Hero** : image repositionnee (object-position: 72% 65%), contenu decentre vers le haut sur mobile
- **Copy "Greece Only"** : "when the wind picks up" au lieu de "when the meltemi blows", virgule au lieu de tiret long
- **Citations** : gris chaud (#1a1a1a/40), pas d'italique, font-body light
- **CSS global** : text-transform: uppercase retire des h1/h2/h3, ajoute explicitement sur les titres sur images

### Optimisations mobile (iPhone 15 Pro, 393px)
- **Hero** : 100svh (pas dvh), translateZ(0) anti-zoom Safari, -mt-16 contenu
- **The Studio** : paragraphe body masque sur mobile (version courte)
- **3 portes** : h-[55vh] sur mobile (au lieu de 85vh), CTAs en 12px avec zone de tap 48px
- **Citations** : h-[15vh] sur mobile (au lieu de 28vh), texte 17px
- **Bandeau chiffres** : empile en colonne sur mobile, gap 6px
- **Ticker** : animation 15s sur mobile (25s desktop)
- **Greece Only** : texte body 13px sur mobile
- **Header** : bouton INQUIRE compact (text-[10px], px-3, py-1.5)
- **Hero CTA** : bordure fine (white/30)
- **Footer** : liens nav en grille 2x2, zones de tap py-2
- **overflow-x: hidden** sur body
- **-webkit-backdrop-filter** support Safari iOS

### Supprime
- **MoodCards.tsx** : composant inutilise (remplace par DiscoveryFlow)
- **ExploreGrid.tsx** : composant inutilise (remplace par DiscoveryFlow)
- **JourneyQuiz.tsx** : composant inutilise
- **CTA "Start the conversation"** dans le footer (doublon avec bloc CTA final)
- **Couleur verte (#a7d1c9)** du menu hamburger Inquire (remplacee par beige)
- **Tous les em dashes** du site (remplaces par virgules, deux-points ou points medians)

### Corrige
- **Em dashes** supprimes dans page.tsx, contact/page.tsx, sailing-small-cyclades/page.tsx
- **data-nav-dark** ajoute sur le bloc 3 portes (manquait, causait un bug de detection nav)
- **Liens Instagram/LinkedIn** : URLs reelles + target="_blank"

---

## [0.2.0] — 2026-04-13

### Ajoute
- **Mega prompt** : document strategique complet valide par Emma (UX en 3 temps, voix & ton, catalogue, monetisation)
- **Donnees centralisees** : types.ts + catalogue.ts (8 moods, ~35 items, 9 villas, yacht BESTIA)
- **DiscoveryFlow.tsx** : parcours immersif mood grid > hero cinematique > cards resultats
- **Page /contact refaite** : 4 formulaires specialises
- **Page /collection refaite** : 9 villas reelles + filtre region + BESTIA + immobilier
- **Page /experiences refaite** : DiscoveryFlow
- **Villas off-market** : 4 villas avec blur + tag "Off-market, Private access only"
- **Page detail prototype** : /journeys/sailing-small-cyclades avec paywall

### Modifie
- **Nav** : nouvel ordre valide
- **Homepage** : refaite avec hero + 3 portes + featured sections

### Decision
- Architecture UX en 3 temps validee
- Modele de monetisation valide ($100 PDF + $500 concierge)
- "Events" = filtre interne, jamais dans le menu
- Pas de prix affiches pour villas/yacht
- 3 niveaux de visibilite villa
- Dev direct sans Figma

---

## [0.1.4] — 2026-04-12

### Ajoute
- 29 photos Google Drive > assets/photos/experiences/
- 5 portraits shooting > assets/photos/brand-experiences/
- 67 photos Unsplash > assets/photos/blog/
- 4 logos eb. > assets/branding/

---

## [0.1.3] — 2026-04-12

### Decision
- App native abandonnee > web app Next.js responsive
- Connexion Google Drive MCP configuree

---

## [0.1.2] — 2026-04-12

### Ajoute
- Structure assets/photos/ et assets/branding/
- Section Blog/Journal dans le cahier des charges
- Section Identite visuelle dans le cahier des charges

### Decision
- Palette couleurs actee
- Blog inclus Phase 1
- Copywriting collaboratif Claude + Emma

---

## [0.1.1] — 2026-04-12

### Decision
- Domaine emmabonnefous.com conserve (eb.com indisponible)

---

## [0.1.0] — 2026-04-12

### Ajoute
- Creation du depot /travel-app
- Documentation initiale (CAHIER_DES_CHARGES, ROADMAP, TECH_STACK, CHANGELOG)

### Decision
- Positionnement confirme : conciergerie 100% Grece, segment UHNW
- Benchmarks : Quintessentially, Essentialist
- Marque : eb.

---

*Document vivant, mis a jour a chaque evolution.*

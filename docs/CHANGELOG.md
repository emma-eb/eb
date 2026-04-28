# Changelog — eb. Platform

Toutes les evolutions notables du projet sont documentees ici.

Format base sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).

---

## [Non publie] — A venir

### En cours
- Audit complet des autres pages (homepage, /about, /experiences, /journal) avant launch US
- Silent Coast m² (en attente info proprietaire)

### Droppes (out of scope, decision Emma 28/04/2026)
- Stripe paywall $100 + deposit $500
- Generation PDF auto Private Route
- Sanity CMS
- Lightbox plein ecran sur galleries villa
- WHITE SERENITY 3e villa Porto Heli
- Pages detail experiences (35+ items)

---

## [0.9.1] — 2026-04-28 (fin de session)

### Bugs corriges (post v0.9.0, fin de session)
- **Bloc vide enorme en haut des forms `/contact?type=...`** : `RevealFallback` ne re-observait pas les nouveaux elements quand l'URL passait de `/contact` a `/contact?type=journey` (search params changent mais pathname stable). Resolu en faisant dependre le useEffect de l'URL complete (path + search params) + ajout d'un MutationObserver qui observe automatiquement tout nouveau noeud DOM (Suspense reveal, conditional render). Verifie sur 7 scenarios de forms : contact landing, journey scratch, journey preselect, stay villa default, stay villa preselect, stay yacht, occasion. Tous H1/typeLabel/intro visibles, aucune erreur console.
- **Underline `.eb-cta-link` debordait toute la largeur du container** quand le CTA etait dans un parent `flex flex-col` (cas : "View residence" en bas des cards villa sur `/collection`). Resolu par `width: fit-content` sur `.eb-cta-link`. Premiere tentative avec `align-self: flex-start` cassait les CTAs centres (hero fiche villa "Enquire about this villa"), retiree.
- **Footer `/collection` et `/collection/[slug]`** avait des liens `Journeys` et `Experiences` que les autres footers (Home, About, Journal, etc.) n'ont pas. Harmonise sur `For Brands / Journal / About / Contact`.
- **Padding header forms trop genereux** (`pt-28 md:pt-24`) : reduit a `pt-20` partout. Plus de bloc vide cream au-dessus du titre.
- **Suspense boundary** ajoute autour de `<RevealFallback />` dans le layout (necessaire avec `useSearchParams()` pour que le build statique de `/_not-found` passe).

### Sauvegarde memoire (Claude)
- Nouvelle entree : `feedback_animation_system_canonical.md` — architecture du Reveal observer, pieges (overflow:hidden + view(), opacity multiplication parent-enfant), how to apply pour les futures sections.
- Nouvelle entree : `feedback_visual_standards.md` — standards visuels post 28/04 (gradient `from-black/55`, hover image scale 1.04 + brightness 1.05, CTAs soulignes permanents, eb-inner-frame, eb-no-reveal, slide 40px).
- Mise a jour : `project_scope_phase1.md` — section "DROPPES par Emma le 28/04" (Stripe, PDF, Sanity, Lightbox, WHITE SERENITY).

---

## [0.9.0] — 2026-04-28

### Refondu (gros chantier UX/animations sitewide)
- **Systeme d'animation completement reecrit** : remplace 6 classes CSS + 18 IntersectionObservers eparpilles par un seul composant `<RevealFallback />` (app/components) monte dans le layout, qui observe tous les `h1-h6, p, blockquote, .reveal, .featured-img, .img-settle` et ajoute `.visible`/`.settled` quand ils entrent dans le viewport. Auto-stagger ligne par ligne (delay calcule selon l'index parmi les freres dans le meme parent block) — chaque ligne d'un bloc apparait apres la precedente.
- **Translation passee de 24px a 40px** (slide-up plus visible).
- **Filet de securite 2s** dans le Reveal observer : si l'observer rate un element, force-reveal automatique a 2s pour eviter les textes invisibles (cas des pages a hydratation tardive).
- **Re-scan a 200ms et 800ms** apres mount/navigation pour attraper les enfants montes apres le useEffect (client-side nav Next.js App Router).
- **Threshold abaisse a 0** + rootMargin a 0 pour que des 1px de visibilite, l'animation se declenche (evite les cas ou un h3 dans un parent `.reveal` reste a opacity:0 parce que son parent n'a pas eu le temps).
- **Tentative scroll-linked CSS abandonnee** : `animation-timeline: view()` testee mais incompatible avec `overflow: hidden` sur les parents (le parent devient scroll container, animation gelee). Decision : revenir a IntersectionObserver pour fiabilite multi-navigateur et controle du stagger.

### Ajoute
- **Composant `RevealFallback.tsx`** dans `/app/components` : observer JS sitewide, monte dans `app/layout.tsx`, gere le fade-up + stagger + safety net.
- **Hover global sur images** : zoom 1.04 + filter brightness 1.05, transition 700ms cubic-bezier — applique a toute image inside `.group` (Tailwind grouping pattern utilise sur cards villa, journey, journal, glimpses, cross-sell).
- **CTAs soulignes en permanence** : trait fin sous chaque `.eb-cta-link` (avant : trait apparaissait au hover). Opacity 0.5 par defaut, 1 au hover.
- **Classe utilitaire `.eb-no-reveal`** : opt-out des animations sur les sections ou ca semblerait trop lent (applique sur la grille des 7 articles `/journal`).
- **Lien "Back to Private Journeys"** en bas des 7 fiches journey detail (avant le footer) — coherence avec "Back to the Collection" sur les fiches villa.
- **Cadre beige `eb-inner-frame`** sur la section Indoor/Outdoor des fiches villa (`/collection/[slug]`) — meme pattern que "Included / On Request" sur les fiches journey, donne de la profondeur au lieu d'etre flat.
- **Cross-sell journey enrichi** : meta des cards "You might also like" sur les 7 fiches journey detail incluent maintenant la saison (`5 nights · Mykonos · May–September` au lieu de `5 nights · Mykonos`).
- **Meta H1 `/journeys` avec text-balance** + reduit a 40px mobile (etait 48 — "Designed firsthand." debordait sur 3 lignes au lieu de 2).

### Modifie (light gradients sitewide)
- **44 gradients photo standardises** vers `from-black/55 via-black/15 to-transparent` (etait `from-black/85` a `from-black/95` selon les sections — trop sombre, photos paraissaient ombrees). 15 fichiers touches : home, about, journal, journeys, collection, experiences, contact, influencer-production. Heroes intacts (gradient deja leger).
- **`/journal` hero gradient** : reduit `from-black/40 via-black/55 to-black/65` -> `from-black/30 via-black/40 to-black/55` (etait trop sombre pour la photo qui n'a pas besoin de tant de contraste).
- **`/influencer-production` Brand Trips / Content cards** : gradient au contraire RENFORCE (`from-black/85 via-black/45 to-black/15` au lieu de `from-black/55`) — texte qui flotte sur photo claire necessitait plus de contraste.
- **Cards Experiences mobile** (`/experiences`) : padding repense (`px-6 pb-8`), titre h2 reduit `28px sm:36px md:56px` (etait `32px md:56px` direct), description 13px mobile (etait 14), `max-w-[92%]` mobile pour utiliser tout l'espace.
- **`/journal` typographie cards** : badges + dates `8/9px` -> `10/11px`, h3 small cards `clamp(15-20px)` -> `clamp(17-24px)`, h3 featured `clamp(18-28px)` -> `clamp(20-32px)`. Lisibilite mobile.
- **Compteur 4 chiffres `/about`** : `useEffect` restaure (avait ete supprime par le menage des observers). Animation count-up declenche quand le bloc entre dans le viewport.

### Bugs corriges
- **Cadre bleu de focus persistant** sur les cards villa apres back navigation (iOS Safari) : `:focus-visible` desactive specifiquement sur `a.eb-card-hover` (gardes accessibilite clavier sur les autres liens).
- **Fleches chevron des heros des 7 fiches journey** : etaient des `<div>` decoratifs non cliquables → maintenant des `<button>` avec onClick scrollIntoView vers la section suivante. L'animation `eb-scroll-chevron` (bouncing) deplacee du bouton vers le SVG enfant pour que le bouton reste statique (tap plus fiable iOS).
- **Animation gelee sur elements inside `overflow: hidden`** : `animation-timeline: view()` etait incompatible avec parents en `overflow: hidden` (devenaient scroll containers). Resolu en revenant a IntersectionObserver classique. Override CSS `.overflow-hidden { overflow: clip }` retire (plus necessaire).
- **Titres h3 `/journal` invisibles** : threshold 0.15 trop strict, certains h3 dans cards `<a>` avec leur propre `.reveal` restaient bloques opacity:0 (multiplication des opacities parent-enfant). Resolu par threshold:0.

### Nettoyage code mort
- **18 fichiers nettoyes** : suppression de tous les `IntersectionObserver` JS redondants dans les pages individuelles (~150 lignes de code mort). Tous les `.reveal` triggers passent maintenant par le composant `<RevealFallback />` du layout.
- **Imports `useEffect` retires** des pages qui n'en ont plus besoin.
- **`Nav.tsx` failsafe parasite supprime** : ajoutait `.visible` a tous les `.reveal` sitewide apres 1s, ce qui interferait avec le scroll-linked.
- **CSS classes obsoletes retirees** : `.eb-fade-up`, `.eb-fade-in`, `.eb-image-settle`, `.eb-delay-100` -> `.eb-delay-500`. Tous les usages JSX ont ete migres vers `.reveal` + `data-delay` au prealable.
- **`<RevealOnLoad />` supprime** (composant intermediaire abandonne au profit de RevealFallback).
- **Hover scale ancien sur `.eb-image-settle.eb-visible` retire** (Tailwind `group-hover:scale-*` gere deja).

### Decisions / Drop d'Emma le 28/04
- **Stripe paywall + PDF generation + Sanity CMS + Lightbox connect + WHITE SERENITY** : tous droppes. Out of scope Phase 1.

---

## [0.8.0] — 2026-04-27

### Ajoute
- **3 nouvelles fiches villa** :
  - `/collection/silent-coast` (Porto Heli, 6 ch, 12 guests, From €2,600/nuit, 15 photos)
  - `/collection/aegean-residence` (Porto Heli, 7 ch, 14 guests, From €3,500/nuit, 14 photos, refonte complete de l'ancienne carte)
  - `/collection/anavissos-lux` (Athens Riviera, 6 ch, 12 guests, Price on request, 8 photos, badge "Off Market")
- **Photo galleries optimisees** : ANAVISSOS hero swappee pour la photo des 5 piscines en landscape (rotation 90 d'un original portrait)
- **Email fallback** sous les 3 IntentCards de /contact (`hello@emmabonnefous.com` discret pour clients recurrents/referrals)
- **Visual journey card** dans JourneyForm quand un journey est pre-selectionne via `?journey=<slug>` (pattern aligne sur StayForm)
- **Lien Privacy Policy** dans le consent checkbox des 3 forms (/contact)
- **Composant `Lightbox`** dans `/components/Lightbox.tsx` — pas encore connecte aux galleries (planifie pour prochaine session)

### Modifie
- **Audit /contact + CTAs complet pre-launch US** :
  - Mapping de 60+ CTAs vers /contact dans tout le site
  - Suppression du parametre orphelin `?ref=` (jamais lu par les forms : private-circle, antiparos-introduction)
  - Suppression du copy-paste error `?ref=antiparos-introduction` sur le bloc Patmos de /journeys
  - Suppression de "Helicopter transfers" du `mustHaves` array (contradisait la regle "no air transfers")
  - Suppression complete du composant `FormShell.tsx` (code mort)
- **StayForm yacht** : services list nettoyee (chef, captain, etc. sont INCLUDED, pas "on request"), label de section "Onboard" pour yacht / "Services" pour villas (au lieu du faux "On Request" pour tout le monde)
- **OccasionForm** : budget passe de PillChoice (tiers) a TextInput libre — required pour tous les types d'occasion (avant : seulement Wedding), guests counter sans cap (avant max 200)
- **JourneyForm** : `journeyMustHaves` separe (pas de pantry/housekeeping qui n'ont pas de sens en multi-stop), titre journey humain au lieu du slug brut, vision min 60 -> 100 chars
- **Tous les forms** : phone placeholder neutre ("Your phone number" au lieu de "+33 6 12 34 56 78"), em dashes -> hyphens dans subjects mailto et summaries
- **CTA labels alignes** : "Start the conversation" partout sur les CTAs d'entree (avant : "Begin"), "Send my enquiry" sur les submits finaux
- **IntentCards** : "Occasions from €15,000" -> "Occasions from €2,000" (Emma : trop cher pour proposal/honeymoon)
- **Confirmation screen** : suppression de l'em dash dans la signature `eb.`
- **BESTIA fiche** : prix masque partout ("Price on request" en small italic en bas de fiche), section bas auto-elegante quand priceFrom matches /on request/i
- **ANAVISSOS** : "shared on introduction" retire de l'intro (formulation lourde), badge `By Introduction Only` -> `Off Market`, CTA "Request introduction" -> "View residence", baseline simplifiee
- **Santorini Estate** : "Two acres" -> "8,000 m² estate" (qualifier "estate" indispensable pour ne pas confondre avec surface batie)
- **Silent Coast** : repetitions "Three levels arranged around" supprimees entre intro et theHouse, intro/theHouse/theLocation se completent au lieu de se dupliquer

### Mobile
- **Hero arrow `/collection`** : tap target 44x44px + safe-area-inset-bottom (evite l'overlap avec la toolbar iOS)
- **Hero h1 fiches villa** : taille mobile 34px (au lieu de 38px), text-balance, padding lateral
- **Hero h1 /collection** : text-balance + size step + padding lateral
- **Hero image fiches** : `object-center` sur mobile (avant `object-[center_30%]` qui cropait mal en portrait)
- **/collection bloc yacht** : hauteur reduite a 70vh sur mobile (avant 85vh, trop tall)
- **KeyFacts grid fiches** : gap-y-3 + padding compact sur mobile
- **HeroFact values** : `leading-tight`, `break-words`, taille 12px mobile (evite overflow sur prix longs)
- **Cards /collection** : aspect-[4/5] mobile pour les 2 premieres cards (au lieu de 3/2 trop courte) -> resout l'overlap badge "New for 2026" sur Celestia
- **Cards /collection** : specs en text-9px sur mobile (avant : debordement sur 360px)
- **Specs Aegean Residence** : ligne raccourcie "An 8,000 m² estate, three private coves below." (47 chars, tient sur 1 ligne) au lieu de l'ancienne 67 chars qui wrappait
- **StayForm** : bug localStorage corrige (URL params yacht/villa prennent priorite sur les drafts sauves) — avant, naviguer entre /yacht et /villa pouvait mixer les contextes

### Performance
- **Compression photos** : 73 MB villas + 4 MB yacht + 166 MB autres -> 49 MB + 4 MB + 75 MB (gain 44%, soit 115 MB economises)
  - Methode : `sips -Z 1920 -s formatOptions 82` (resize max 1920px width + JPEG quality 82)
  - ANAVISSOS particulierement impacte : 24 MB -> 6 MB (originaux drone 4K)
  - AEGEAN re-compresse a quality 70 sur les > 600KB
- **next.config.ts** : `allowedDevOrigins` non ajoute (push direct vers GitHub + Vercel preferred au lieu de tester sur LAN)

### Bugs corriges
- **Aegean Residence** card : photo card maintenant `/villas/aegean-residence/cover.jpg` (avant : Unsplash generique)
- **Aegean Residence** photo doublon "37" dans l'ordre Emma : suppression du slot 11 (etait L1877037, doublon avec L1876937)
- **Aegean Residence** slot 6 swap : dining (file 83) au lieu de cuisine (file 74), kitchen deplacee en slot 13
- **Silent Coast** photo 7 swap : file 723 (infinity pool golden hour) au lieu de file 235 (path to beach)
- **Hero "Athens, Greece" sur BESTIA** : contraste renforce (ombre stronger + opacity 100% + size 13/15px) — etait illisible sur la cover sea/yacht tres claire
- **Repetition Rubelli/Stella** dans Santorini Estate `theHouse` retiree (deja dans l'intro juste au-dessus + cliche "splashed with the colors of the sea")
- **Quote breath** /collection : "The right house" -> "The right address" (aligne avec le hero "Your address in Greece" + UHNW vocabulary)

### Workflow / Tooling
- **`push-to-github.js`** : commit message accepte maintenant en argument CLI (`node push-to-github.js "fix mobile nav"`), fallback sur "Deploy eb. website update" si absent
- **`push-to-github.js`** : dossier `VILLA IMAGES` ajoute a IGNORE (staging local, pas de raison d'etre push)
- **Backup photos** : copie dans `/tmp/villa-photos-backup/` avant compression (volatile au reboot Mac)

### Memoire
- Nouvelle entree memoire : `feedback_commit_messages.md` (toujours passer un message descriptif au push script)

### Decisions / Non-action
- **WHITE SERENITY** : NON ajoute pour l'instant (Emma n'a pas les photos)
- **AEGEAN ESSENCE** : carte supprimee de /collection (orphan, pointait vers `/contact?type=stay&villa=aegean-essence` sans fiche detail)
- **SEAFRONT SANCTUARY** : carte supprimee de /collection (idem, orphan)
- **Silent Coast m²** : laisse vide en attendant info proprietaire (le PDF source ne le donne pas)
- **UK vs US spelling** : conserve UK ("Personalise", "metres") — positionnement europeen luxe
- **Prix sur cards Silent Coast / Aegean** : retires (alignement template autres villas, prix uniquement en fin de fiche detail)
- **Anavissos detail page** : reste accessible via URL (pas masquee), juste signal "Off Market" sur la card

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

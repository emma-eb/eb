# Cahier des Charges — eb. Platform
**Version :** 1.4
**Date :** 2026-04-27
**Auteure :** Emma Bonnefous
**Statut :** Phase 1 Sprint 3 — **Collection v5 + 5 fiches villa publiques** (You & Me + Celestia + Esmeralda + Tourlos Breeze + Santorini Estate, section 23). **Contact V4** avec preselect villa ET preselect yacht (section 23.5). Yacht banner refondu sur /collection. Hero overlays alleges sitewide. IntentCards price ranges. CSS reveal fallback. Memoires d'edition consolidees (island name, villa floor, mobile-first, must-show signature features). 7 fiches journey + For Brands V2 toujours en place. Adjacent villa cross-link reserve a You & Me ↔ Celestia (seules villas physiquement adjacentes).

---

## 1. Contexte et vision

### 1.1 Qui est eb. ?
**eb.** est un private travel studio specialise exclusivement en Grece, fonde par Emma Bonnefous (Paris/Athenes). Emma cumule 12+ annees en production evenementielle et influence pour des maisons de luxe (Balmain, Van Cleef & Arpels, Karl Lagerfeld, Jimmy Choo, Coach, Lanvin, Boucheron, Repetto), ainsi que plusieurs annees en tant que travel planner pour clients HNW en Afrique (Tanzanie, Botswana, Maroc). 95+ pays visites.

eb. s'adresse a une clientele HNW/UHNW souhaitant vivre la Grece d'une facon inaccessible au grand public : villas privees hors-marche, experiences sur-mesure, acces exclusifs, celebrations de prestige.

### 1.2 Positionnement
> "Greece, privately. A private travel studio dedicated to one country, for clients anywhere in the world."

Benchmarks vises :
- [Quintessentially](https://quintessentially.com) — conciergerie globale UHNW, modele membership
- [Essentialist](https://essentialist.com) — curation voyage ultra-luxe, acces insider

Avantage differenciant d'eb. : **profondeur locale irreplicable** et **specialisation 100% Grece**.

### 1.3 Produits (Summer 2026)

| # | Produit | Description | Cible |
|---|---|---|---|
| 1 | Private Journeys | Itineraires prives multi-jours, sur-mesure | HNW/UHNW direct |
| 2 | Experiences | Moments singuliers, celebrations, acces prives | HNW/UHNW direct |
| 3 | Villa & Yacht Collection | 9 villas (5 publiques + 4 off-market, by introduction) + yacht prive 33m (anonymise sur le site) | HNW/UHNW + partenaires |
| 4 | Signature Celebrations | Mariages boutique, demandes en mariage, diners prives Acropole | HNW/UHNW direct |
| 5 | Brand Productions / FAM trips | Productions influenceurs & presse pour maisons de luxe en Grece | B2B marques |
| 6 | Partenariat Inde | Distribution B2B via conciergeries indiennes (marche UHNW) | B2B conciergeries |
| 7 | Real Estate (The Height) | Introduction clients vers projet residentiel luxe cote attique | HNW investisseurs |

### 1.4 Modele de monetisation
- **Chemin A** : $100 "eb. Private Route" (PDF premium genere automatiquement)
- **Chemin B** : Concierge complet ($500 planning fee + commission services)

---

## 2. Objectifs du projet digital

### 2.1 Objectifs business
1. **Generer des demandes qualifiees** de clients HNW/UHNW directs (budget sejour min. 15 000 EUR)
2. **Etablir eb. comme reference** dans les resultats de recherche "luxury Greece concierge"
3. **Ouvrir un canal B2B** dedie aux partenaires indiens (conciergeries, agences UHNW)
4. **Presenter la collection** villas & yachts comme produits distinctifs
5. **Construire une relation durable** avec les clients via un espace membre (phase 2+)

### 2.2 Objectifs du site web (Phase 1)
- Remplacer emmabonnefous.com par le nouveau site eb.
- Positionner la marque eb. comme maison/studio, pas freelance
- Presenter les 3 piliers de services clairement (Private Journeys, Experiences, Collection)
- Permettre la prise de contact qualifiee
- Integrer un CMS pour mise a jour autonome du contenu

---

## 3. Utilisateurs cibles

### 3.1 Profil 1 — Le client HNW/UHNW direct
- **Qui :** Entrepreneur, dirigeant, family office, heritier. 35-65 ans. Revenus >1M EUR/an.
- **Comportement :** Cherche sur recommendation ou Google. Deteste les formulaires longs. Veut se sentir attendu, pas "traite".
- **Attentes :** Instantanement convaincant. Pas de texte superflu. Preuves silencieuses (photos, ton). CTA discret mais clair.

### 3.2 Profil 2 — Le partenaire conciergerie indien
- **Qui :** Directeur d'une conciergerie UHNW en Inde (Mumbai, Delhi, Bangalore).
- **Attentes :** Page dediee partenaires avec processus clair de collaboration.

### 3.3 Profil 3 — La marque de luxe (B2B productions)
- **Qui :** Directeur Communication/PR de maison de luxe ou agence evenementielle.
- **Attentes :** Page dediee "For Brands" avec formats de production, grille de competences, CTA brief.

---

## 4. Architecture UX validee (3 temps)

### Temps 1 — "How do you dream Greece?"
8 mood cards immersives (parcours progressif style Typeform/Airbnb) :

| ID | Nom | Univers |
|----|-----|---------|
| odyssey | Odyssey & Salt | Mer, bateaux, criques |
| stone | Stone & Silence | Mani, Zagori, Meteora |
| vine | Vine & Table | Gastronomie, vignes |
| pulse | Pulse & Gold | Mykonos, beach clubs |
| soft | Soft Pulse | Paros, rooftops |
| wild | Wild & Free | Kayaking, gorges |
| culture | Culture & Heritage | Acropole, musees |
| wellness | Wellness & Slow | Spa, yoga |

### Temps 2 — Explore
Grille filtree par mood + type de contenu. Resultats personnalises "pour vous".

### Temps 3 — Paywall + Action
- Chemin A : $100 "eb. Private Route" (PDF premium)
- Chemin B : Concierge complet ($500 deposit)

---

## 5. Pages du site — Statut au 19 avril 2026

| Page | Route | Statut | Notes |
|---|---|---|---|
| Homepage | `/` | **DONE** | 13 blocs valides, CTA final harmonise sur fond image sombre (pill The Studio + titre Anton + description) |
| Experiences | `/experiences` | **DONE** | Hero + 4 experiences full-bleed + concierge grid 2x2 + CTA harmonise (pill One Call + Every detail, handled quietly.) |
| About | `/about` | **DONE** | Hero split + Story + counter + Why Greece + Collabs + Citation + CTA harmonise (pill Work with eb. + Tell us your story.) |
| Journal | `/journal` | **DONE** | Hero + Featured + 7 articles grille magazine + The Height + CTA. Mention footer legale ajoutee. |
| For Brands | `/influencer-production` | **DONE** | Hero centre + Why Greece + 3 services + 3 formats + What we bring + CTA |
| Collection | `/collection` | **DONE** | 8 blocs + CTA harmonise (pill Private Stays + description ajoutee). Yacht anonymise. |
| Contact / Inquire | `/contact` | **DONE v3** (20/04) | Landing 3 portes B2C (Journey/Occasion/Stay) 100% B2C, plus de sortie B2B (brief deplace uniquement sur /influencer-production). Forms one-page sectionnes (plus de multi-step). Budget tiers strategiques par type. Query params `?type=...&journey\|villa={slug}` — voir section 19 |
| For Brands Brief | `/for-brands/brief` | **DONE** | Formulaire B2B dedie (brand/agency). Separe du /contact B2C. Typography harmonisee bleu #2e5a88. |
| Private Journeys | `/journeys` | **DONE** | Hero + 2 featured + 6 secondaires + CTA. Fix mobile (titre Astypalea break après virgule, metadonnees whitespace-nowrap, animations translate3d iOS, quote "Designed on the ground" break). Photo CTA dediee `/CTA FINAL PRIVATE JOURNEY.jpg` |
| Journey detail pages | `/journeys/[slug]` | **DONE** (9 pages) | Astypalea, Mykonos, Athens Slowly, Slow Honeymoon, Family Summer, Week by Sea, **Paros + Antiparos (v12 DA luxury push : 7 moves DA + reorganisation + images Highlights corrigees)**, Athens Beyond, Odyssey Greece, Sailing Small Cyclades |
| **Terms** | `/terms` | **DONE** | 9 sections. SIRET + adresse Paris, sans telephone / domiciliation privee / regime fiscal. Lien Privacy. |
| **Privacy Policy** | `/privacy-policy` | **DONE** | 12 sections RGPD conformes : data controller, collection, purposes, legal basis art.6, partenaires, transferts intra-UE, retention, droits utilisateur, cookies, CNIL complaints. |

### Pages a creer (scope recadre 20/04/2026)
- **Fiche Sailing / Yacht** : appliquer template Paros v12 DA luxury (seule fiche journey restante a upgrader)
- **PAS de fiches detail villas/experiences** : decision Emma 20/04 — le catalogue.ts reste contenu interne, la page Collection + page Experiences (hero + 4 featured) suffisent. Les 35+ items ne generent pas de pages publiques.

---

## 6. Homepage — Structure validee (13 blocs)

| # | Bloc | Fond | Contenu |
|---|------|------|---------|
| 1 | Hero | SOMBRE (image) | "GREECE, PRIVATELY." + "DISCOVER YOUR GREECE" (smooth scroll vers portes) |
| 2 | The Studio | CLAIR (beige) | Surtitre + ligne graphique bleu marine + statement editorial + body + signature "Founded by Emma Bonnefous, Athens" |
| 3 | Three Doors | SOMBRE (images) | Private Journeys / Experiences / Collection |
| 4 | Ticker d'iles | CLAIR (beige) | 34 iles grecques en defilement continu |
| 5 | Featured Journey | SOMBRE (image) | "5 DAYS THROUGH THE SMALL CYCLADES" |
| 6 | Citation 1 | CLAIR (beige) | "The difference between visiting Greece and truly knowing it." |
| 7 | Featured Experience | SOMBRE (image) | "PRIVATE DINNER FACING THE ACROPOLIS" |
| 8 | Citation 2 | CLAIR (beige) | "One country. A thousand ways to make it yours." |
| 9 | Featured Collection | SOMBRE (image locale) | "PRIVATE VILLAS & YACHT" |
| 10 | Bandeau chiffres | CLAIR (beige) | "12 years in luxury production, 35+ islands covered, Athens-based, worldwide clients" |
| 11 | Greece Only. Always. | SOMBRE (image) | Statement de marque |
| 12 | CTA final | CLAIR (beige) | "Ready to begin?" + "Start the conversation" |
| 13 | Footer | NOIR | Composant partage |

---

## 7. Navigation validee

### Menu principal
```
PRIVATE JOURNEYS | EXPERIENCES | COLLECTION | JOURNAL | ABOUT    [INQUIRE]
```

### Menu fixe (sticky nav)
- Sur hero (initial) : fond transparent, texte beige
- Sur sections sombres (apres scroll) : fond noir 85% + blur, texte beige
- Sur sections claires : fond beige 95% + blur, texte bleu marine
- Transition fluide 300ms
- -webkit-backdrop-filter pour Safari

### Footer navigation (composant partage toutes pages)
Desktop : logo + copyright + email | Privacy/Terms + Instagram/LinkedIn | For Brands / Journal / About / Contact
Mobile (nav EN PREMIER) : logo > nav 2x2 > social > email > legal > copyright

---

## 8. Identite visuelle

### 8.1 Palette de couleurs

| Role | Valeur | Usage |
|---|---|---|
| Bleu marine eb. | `#2e5a88` | Titres sur fond clair, CTAs sur fond clair, accents, ligne graphique |
| Blanc | `#FFFFFF` | Titres sur fond sombre, CTAs sur images, texte footer |
| Beige/sable | `#fcf7f1` | Fond blocs de respiration |
| Gris chaud | `#1a1a1a` a 40% | Texte body sur fond clair, sous-titres, surtitres |
| Noir profond | `#1a1a1a` | Footer fond uniquement |

### Regles d'application
- Sur fond SOMBRE (images) : titre BLANC, surtitre en pill tag, description blanc casse
- Sur fond CLAIR (beige) : titre BLEU MARINE, texte GRIS CHAUD
- Sur fond NOIR (footer) : texte BLANC, liens avec hover opacite
- Jamais de noir pur sur fond clair. Jamais de 3eme couleur.

### 8.2 Typographie

| Usage | Police | Caractere |
|---|---|---|
| Titres sur images sombres | **Anton** (font-heading) | Condense, impactant, uppercase |
| Tout le reste | **Inter** (font-body) | Light (300) / Regular (400) / Semi-bold (600) |

### Regles typographiques
- Anton = UNIQUEMENT sur images sombres (hero, featured, Why Greece, CTA final)
- Inter = TOUT le reste. Pas de serif. Pas de font tierce.
- Titres fond clair : Inter 600 semibold, bleu marine
- Body text fond clair : Inter 300 light, gris chaud
- Sur chaque page, forcer `font-family: var(--font-inter), 'Inter', sans-serif` sur les titres pour eviter tout fallback serif

### 8.3 Direction photographique
- Style editorial mediterraneen, lumiere naturelle chaude
- Chaque photo DOIT correspondre a sa destination reelle (Milos = photo de Milos)
- Jamais reutiliser la meme photo Unsplash sur 2 pages differentes
- Preferer les photos lifestyle/atmosphere (parasols, vue mer, terrasse) aux close-ups produit
- Photos Unsplash OK en attendant les photos propres d'Emma

---

## 9. Regles editoriales

### Voix de marque
- eb. est le sujet principal, un "private travel studio", pas une agence ni un blog personnel
- "We" pour les operations (Emma + partenaires + reseau)
- "I" / Emma uniquement sur la page About
- Ton : confiant, insider, elegant mais chaleureux, precis

### Mots interdits
hidden gems, bucket list, unforgettable, tailor-made, world-class, seamless, elevated, passionate, end-to-end

(Note : "curated" et "bespoke" sont AUTORISES — retires de la liste le 20/04/2026)

### Ponctuation interdite
- Em dashes (tirets longs) : trahissent une ecriture IA. Utiliser virgules, deux-points ou points medians

### Preferer
- Precision sensorielle, understatement, specificite, formulation positive
- "A private travel studio" plutot que "Not a travel agency"
- "One country. One obsession." plutot que "We don't do Paris."

---

## 10. Stack technique

| Composant | Technologie | Statut |
|---|---|---|
| Framework | Next.js 16.2.3 | Configure |
| UI | React 19 + Tailwind CSS 4 | Configure |
| Langage | TypeScript 5 | Configure |
| Donnees | `catalogue.ts` (source unique de verite) | En place |
| Deploiement | Vercel | Deploye (eb-fawn.vercel.app) |
| Push GitHub | Script `push-to-github.js` (API directe) | En place |
| CMS | Sanity.io (prevu) | A configurer |
| Paiement | Stripe (prevu) | A integrer |
| Base de donnees | Supabase (prevu) | A configurer |
| Domaine | emmabonnefous.com | A basculer |

---

## 11. Contraintes

| Contrainte | Detail |
|---|---|
| Budget | A definir |
| Profil technique Emma | Non-technique : CMS et back-office doivent etre gerables sans coder |
| Langue | Site en anglais (marche international). App : anglais + francais |
| Delai | Phase 1 (site) : objectif Q3 2026. Phase 2 (app) : objectif Q1 2027 |
| Domaine | emmabonnefous.com (eb.com indisponible) |

---

## 12. Livrables par phase

| Phase | Livrable | Periode | Statut |
|---|---|---|---|
| 0 — Fondations | Strategie, charte, contenus, homepage + pages principales | Avril-Juin 2026 | **EN COURS** |
| 1 — Site Web | Site complet, CMS, formulaires, SEO, deploiement prod | Juillet-Sept 2026 | A faire |
| 2 — Espace Client | Web app privee, suivi sejour, messagerie | Oct 2026-Mars 2027 | A faire |
| 3 — Portail B2B | Module partenaire Inde | Avril-Juillet 2027 | A faire |
| 4 — Premium | Recommendations IA, membership, analytics | Q4 2027+ | A faire |

---

## 13. Animations et interactions

### Scroll reveal (toutes pages)
- IntersectionObserver, threshold 0.15-0.2
- Transform + opacity uniquement (translateY 12px, 0.6s ease-out)
- Stagger entre elements : 60-100ms
- prefers-reduced-motion : desactiver toutes les animations
- -webkit-backdrop-filter sur tous les blur

### Image settle (pages About, Experiences, Journal)
- scale(1.04) → scale(1.0), 1.2s ease-out au viewport entry
- Container overflow:hidden
- Un seul trigger (pas de replay)

### CTA pulse (toutes pages)
- Pulse horizontal 3-4px sur les CTAs principaux (classe `door-cta`)
- Animation CSS infinite, ease-in-out, 2s

### Counter animation (page About)
- Numbers comptent de 0 a la valeur cible en 1.5s ease-out
- Declenche par IntersectionObserver, un seul trigger

---

## 14. Liens utiles

- Site en cours : https://eb-fawn.vercel.app/
- GitHub : https://github.com/emma-eb/eb
- Instagram : https://www.instagram.com/emma_bonnefous_/
- LinkedIn : https://www.linkedin.com/in/emmabonnefous/
- Email : hello@emmabonnefous.com

---

*Derniere mise a jour : 2026-04-20 — v1.0*

---

## 15. Convention CTA final (toutes pages commerciales)

Depuis v0.8 (avril 2026), tous les CTA finaux avant le footer respectent la meme structure :

- Fond IMAGE sombre + overlay `bg-black/40`
- `min-h: 60vh mobile / 70vh desktop`
- Classe `eb-image-vignette` (ombre interne sur les 4 cotes)
- Pill tag : `bg-white/15 backdrop-blur border border-white/30 rounded-full`, `text-[10px] tracking-[0.35em] uppercase font-light`
- Titre : `font-anton uppercase text-white text-[36px] md:text-[56px] leading-tight`
- Description : `font-body text-base md:text-lg text-white/80 font-light`, max-width 480px
- CTA : classe `eb-cta-link` + wording unifie `Start the conversation →`
- Pas d'em dash, pas d'italique, pas de font-weight 700

Les pages en utilisant exactement cette structure : Home, About, Experiences, Collection, Journeys.
La page `/contact` est exceptee (c'est un formulaire, le formulaire EST le CTA).

---

## 16. Classes CSS DA luxury (depuis Paros v12)

Classes globales dans `globals.css` utilisables sur toutes les fiches journeys :

| Classe | Usage |
|---|---|
| `eb-bg-beige-gradient` | Fond gradient beige + texture papier discrete (mix-blend-mode multiply) |
| `eb-image-vignette` | Ombre interne 120px sur les 4 cotes d'une image plein cadre |
| `eb-dropcap` | Lettrine Anton bleu marine 3.5em sur fond clair (desactivee mobile) |
| `eb-dropcap-light` | Lettrine Anton blanc 85% sur fond sombre (desactivee mobile) |
| `eb-day-number` | Chiffre Anton 88px / 64px mobile, bleu marine 8% — "papier peint" Day by Day |
| `eb-inner-frame` + `eb-inner-content` | Cadre magazine : fond blanc exterieur + insert beige gradient (ex : What's Included Paros) |

---

## 17. Conformite legale (depuis v0.8)

- Mention footer globale : "eb. is a travel design studio. All journeys are operated by our licensed DMC partners in Greece." (presente sur les 14 pages avant `</footer>`, opacity 35%)
- Positionnement legal : eb. = studio de conception, introducteur vers DMC licencies en Grece. Contrats et paiements entre client et DMC. eb. n'est pas agence de voyage.
- SIRET public : 853 793 479 00017 (77 rue Bayen, 75017 Paris)
- CNIL competente pour reclamations RGPD
- Infos volontairement exclues des pages publiques : telephone personnel, domiciliation privee, regime fiscal, code APE, numero de securite sociale

---

## 18. Convention heroes (Experiences, Collection, Journal)

Les 3 pages secondaires utilisent une structure hero STRICTEMENT IDENTIQUE pour coherence visuelle :

```
<section className="relative h-[100dvh] w-full overflow-hidden">
  <img absolue plein ecran />
  <div bg-black/40 overlay />
  <div className="h-full flex flex-col items-center justify-center text-center px-6">
    <span pill tag (Collection/Experiences/Journal) mb-6 />
    <h1 font-heading text-[52px] md:text-[88px] uppercase />
    <p mt-6 max-w-[580px] sous-titre />
  </div>
</section>
```

Pill tag + titre + sous-titre a la meme hauteur verticale sur les 3 pages.

---

## 19. Contact / Inquire — Architecture V3 (20/04/2026)

Page `/contact` refondue le 19-20 avril 2026 apres benchmark des tops du luxe (Aman, Rosewood, Belmond, Black Tomato, Scott Dunn, Jacada). Objectif : atteindre un niveau "parfait" cote conversion et sensation maison.

### 19.1 Architecture globale

- **Landing** : 3 portes B2C (Journey / Occasion / Stay). **Page 100% B2C** — la sortie B2B a ete retiree le 20/04 pour assainir la separation (`/for-brands/brief` reste accessible uniquement depuis `/influencer-production`).
- **Pas de multi-step** avec progress dots : juge trop "SaaS" apres benchmark. Tous les tops luxury utilisent one-page sectionne.
- **Form one-page vertical sectionne** : wrapper `FormOnePage` + subcomponents `Section` (num 01/02/03 + h2 titre bleu marine).
- **Pas de mood grid** (supprimee, `catalogue.ts` obsolete sur ce pan).
- **Submit unifie** : "Share your vision" sur les 3 forms.

### 19.2 Wording des 3 portes

| Porte | Titre | Kicker descriptif |
|---|---|---|
| Journey | A journey | (itineraire multi-jours sur-mesure) |
| Occasion | A moment | (celebration, mariage, diner, demande) |
| Stay | A place | (villa privee, yacht) |

Harmonie : 3 noms + description action.

### 19.3 Budget tiers strategiques par type

Les tranches sont differenciees selon le produit, pensees comme un filtre naturel anti-demandes hors-cible. Simplifiees le 20/04 apres benchmark (Scott Dunn 3 tranches + escape, Black Tomato floor $2K/pp, Essentialist/Jacada cachent). Pattern unifie : 3-4 tranches + "Not sure — let's discuss".

- **Journey** (per person, 3 tranches + escape style Scott Dunn) : €2-5K / 5-10K / Over €10K / Not sure — let's discuss
- **Villa** (per night, 3 tranches + escape) : €1-3K / 3-7K / Over €7K / Not sure — let's discuss
- **Occasion** (total, 4 tranches + escape pour distinguer event/wedding/prestige) : Under €15K / €15-50K / €50-200K / Over €200K / Not sure — let's discuss
- **Yacht** : **pas de champ budget** — remplace par bloc "Yacht charters are quoted individually, share dates/party, we come back"

### 19.4 Champs et micro-interactions

- **Date picker natif** (`<input type="date">`) en DateRange (start+end) pour Journey/Stay, single pour Occasion
- **Flexibility** = PillChoice (None / A few days / One week either side / Fully flexible / Not sure yet)
- **Vision** = free text min 60 chars (filtre naturel anti-50€-budget)
- **Confirmation** : summary box masquee derriere toggle "View my brief" (pour eviter l'aspect "ticket receipt" bancaire)
- **Pas de "within 48 hours"** nulle part (Emma n'aime pas l'engagement). Remplace par "shortly".

### 19.5 Routage cross-site (CTAs re-cables)

Chaque CTA du site envoie vers le bon flow via query params :

| Contexte source | Lien |
|---|---|
| CTA generique scratch | `/contact?type=journey` |
| Depuis fiche journey | `/contact?type=journey&journey={slug}` |
| CTA stay generique | `/contact?type=stay` |
| Depuis fiche villa | `/contact?type=stay&villa={slug}` |
| CTA occasion | `/contact?type=occasion` |
| CTA B2B marques | `/for-brands/brief` (hors /contact) |

### 19.6 Submit mechanism

- Genere un summary DMC-ready formate
- Ouvre un mailto prerempli vers hello@emmabonnefous.com via un `<a>` programmatique (`window.open` etait bloque par browsers)
- Confirmation s'affiche toujours, meme si le mailto echoue

### 19.7 Auto-save et RGPD

- **Auto-save** : localStorage par flow (`eb-contact-journey` / `-stay` / `-occasion`), efface apres submit
- **RGPD** : consent checkbox obligatoire avant submit sur chaque flow

### 19.8 Arborescence fichiers

```
app/contact/
├── page.tsx                       (router, lit ?type= et dispatch)
├── _components/
│   ├── IntentCards.tsx            (landing 3 portes + sortie B2B)
│   ├── FormOnePage.tsx            (wrapper + Section)
│   ├── JourneyForm.tsx
│   ├── StayForm.tsx
│   ├── OccasionForm.tsx
│   ├── Confirmation.tsx
│   └── fields.tsx                 (Field, TextInput, TextArea, PillChoice, PillMulti, Counter, Checkbox, DateRange)
└── _data/
    └── options.ts                 (tranches budgets, howHeard, occasionTypes avec Wedding en premier, etc.)
```

---

## 20. Polish complet du 20/04/2026 (soir) — audit + fixes

Passe complete cross-site avant la session photos du 21/04.

### 20.1 Fixes critiques (fonctionnels)
- **Photos cassees** : `/astypalea..jpg` (typo double point) corrige dans `/journal`, URL `/raphael-lopes...(1).jpg` encodee en %20, photo rooftop Parthenon (Unsplash supprime) remplacee par `/roof top athens.jpg` (asset local depose par Emma).
- **CTA casse** : `collection/page.tsx` pointait vers `?villa=bestia-yacht` (villa inexistante) → corrige en `?type=stay&stay=yacht`.
- **CTA manquant** : `about/page.tsx` CTA final → `/contact` generique → force sur `/contact?type=journey`.

### 20.2 Refonte mobile bloc "Highlights" (7 fiches journey)
Probleme signale par Emma : le bloc image sous section Highlights ("The Villa", "The Timing", "The Island") s'affichait en **petite carte peu valorisante sur mobile**.

Nouveau rendu applique aux 7 fiches (Astypalea, Mykonos, Athens, Honeymoon, Family, Paros, Week by Sea) :
- **Mobile** : plein ecran `h-[100dvh] min-h-[600px]` + full-bleed (marges negatives pour casser le padding parent)
- **Desktop** : conservation de l'aspect 21/9 editorial avec `md:max-w-[1200px]`
- **Gradient plus doux** : `from-black/85 via-black/35 to-black/10` (au lieu de `to-transparent`) pour lisibilite texte sur toute la hauteur
- **Pill tag** repositionnee `top-24` mobile (sous le nav sticky) / `top-8` desktop
- **Titre** : 36px mobile (au lieu de 26px) pour impact
- **Body** : 15px + leading 1.55 (au lieu de 13px/1.5)

### 20.3 Restructuration section "Glimpses" (7 fiches)
Probleme : la legende "Glimpses. Exact properties confirmed on request." etait POSITIONNEE SOUS la grille. Illogique : le titre doit presenter les photos, pas l'inverse.

Nouveau rendu :
- Legende supprimee de partout.
- Titre pose AU-DESSUS de la grille, contextualise par destination :
  - Astypalea : "Astypalea at a glimpse"
  - Mykonos : "Mykonos at a glimpse"
  - Athens : "Athens at a glimpse"
  - Honeymoon : "Milos + Folegandros at a glimpse"
  - Family : "Porto Heli at a glimpse"
  - Paros : "Paros + Antiparos at a glimpse"
  - Week by Sea : "The Cyclades at a glimpse"
- Style : `text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#1a1a1a]/40 font-light` (coherent avec "Highlights", "Day by Day", "The Route").

### 20.4 Fix cadrage mobile (7 fiches journey)
Probleme : photos paysage dans cadrages mobile portrait coupaient le sujet (chateau, ville, etc.).

Fix applique sur **Hero + Highlights image** des 7 fiches :
- Mobile : `object-[center_30%]` (Hero) / `object-[center_35%]` (Highlights) — tire le cadrage vers le haut pour garder le sujet visible
- Desktop : `md:object-center` (inchange)
- `sizes="100vw"` ajoute (evite warnings Next.js + ameliore chargement)

### 20.5 Mobile polish additionnel
- **Day-by-day grids** : `pl-[100px] md:pl-[140px]` → `pl-0 md:pl-[140px]` sur les 6 fiches journey (Mykonos, Honeymoon, Family, Week by Sea, Athens, Paros) + reduction gap/padding mobile sur Astypalea
- **H1 hero** : ajout de breakpoint `sm:` sur About / Journal / Experiences / Collection (evite text geant sur iPhone SE)
- **Heroes** : `min-h-[600px]` garanti sur toutes les sections en `vh` pour eviter contenu ecrase sous la nav iOS

### 20.6 Copy changes (Mykonos)
- **Hero kicker** : "In June. In September. Never in August." → "Where the nights run long and the days know better."
  - Raison : assumer Mykonos jet-set (mai-sept = saison pleine), pas fuir la foule. Le journey donne les cles pour bien vivre l'energie.
- **Highlights h3** : "Five nights, when it breathes." → "Five nights, at full voltage."
- **Highlights p** : "The island without the crowds. Delos at dawn. Nights in Chora." → "Beach clubs. Long tables. Dinners that turn into long nights."
  - Raison : assume beach clubs / party / fun (tempéré : "long nights" pas "mornings").

### 20.7 Mots autorises (clarification)
- **"bespoke"** : AUTORISE. Avait ete pris par erreur comme interdit — Emma a corrige le 20/04 soir. Le mot est legitime sur le site.
- **"curated"** : AUTORISE (deja clarifie 20/04 matin).
- Liste des mots interdits maintenue : hidden gems, bucket list, unforgettable, tailor-made, world-class, seamless, elevated, passionate, end-to-end.

### 20.8 Limitation technique identifiee
L'agent Claude Code ne peut pas valider de nouvelles URLs Unsplash (WebFetch renvoie 403 cote CDN Unsplash qui bloque les bots). Cela n'affecte PAS l'affichage cote visiteur — seulement la capacite d'agent a verifier/trouver de nouvelles photos. Les photos nouvelles doivent etre soit :
- Deposees localement dans `/public/` par Emma (workflow utilise le 20/04 pour Athens rooftop, Scorpios, Astypalea 05/06)
- URLs Unsplash fournies directement par Emma (copier-coller depuis son browser)

---

## 21. Session 21/04/2026 — photos + mobile final + copy Mykonos/Honeymoon/Family

### 21.1 Photos locales deposees par Emma et postees
Emma a depose 20+ photos dans `/public/` ce matin. Integration reussie :

- **Family Summer** (Porto Heli + Saronic) :
  - Hero : `/familly journey.jpg` (silhouette mere + enfants au sunset — emotion pure family summer)
  - Highlights "Ten nights, one home." : `/villa famill_01.png` (piscine villa + sunset collines)
  - Where You Stay "One house, every generation." : `/damien-schneider-GvOcpTNAHFo-unsplash.jpg` (villa whitewashed arches + piscine reflet)
  - Glimpses "The islands at a glimpse" (3 Hydra) : `/hydra_02.jpg` (port) + `/hydra_01.jpg` (cote) + `/hydra_03.jpg` (village)

- **Honeymoon** (Milos + Folegandros) — **ETAT FINAL 21/04 soir** :
  - Hero : `/MILOS_01.jpg`
  - Highlights "Seven nights, two islands." : `/rocher milos_03.jpg` (Sarakiniko roches + baigneurs)
  - Where You Stay "Two islands, two hotels." : `/milos sunset.jpg` (cote Milos pink sunset)
  - Glimpses "Milos + Folegandros at a glimpse" : `/kimolos.jpg` (gauche) + `/milos cave.jpg` (milieu) + `/Milos maison.jpg` (Firopotamos, droite)

- **Week by Sea** (Cyclades yacht) — **ETAT FINAL 21/04 soir** :
  - Hero : `/yatch_page collection.jpg` (pont luxe "grosse photo yacht")
  - Highlights "Waking up somewhere new, every morning." : `/reveil yatch.jpg` (reveil matin sur le yacht)
  - Where You Stay "On board." : `/yatch on board.jpg`
  - Glimpses "The Cyclades at a glimpse" (3 iles du journey) : `/kythnos.jpg` (Day 02) + `/amorgos 2.jpg` (Day 05) + `/koufoussina.jpg` (Day 07)
  - CTA final : `/yatch page.jpg` (yacht aerial anchor)
  - Related card : `/hero-bateau.jpg` sur Honeymoon swap → `/dean-bennett-7RCjjvfIQ1k-unsplash.jpg` (evite duplicate inter-pages)

- **Athens Slowly** :
  - Where You Stay "A hotel with the Parthenon from the roof" : `/roof top athens.jpg`

- **Astypalea** :
  - Glimpses : `/astypalea_06.JPG` + `/atypalea_05.jpg` (faute typo) + `/astypalea_03.jpg`

- **Mykonos** :
  - Highlights "Five nights, at full voltage" : `/scorpio.jpg`

- **Paros** :
  - Glimpses : `/antiparos.jpg` + `/paros_04.jpg` + `/paros_03.jpg`

### 21.2 Corrections de contenu (cohesion + honnetete)

- **Mykonos copy assumee jet-set** (positionnement May-September = saison pleine, on assume) :
  - Hero kicker : "In June. In September. Never in August." → "Where the nights run long and the days know better."
  - Highlights h3 : "Five nights, when it breathes." → "Five nights, at full voltage."
  - Highlights body : "The island without the crowds. Delos at dawn. Nights in Chora." → "Beach clubs. Long tables. Dinners that turn into long nights."
  - Day by Day (Mykonos) : reecrit pour refleter beach club / restaurants / vibing (sans nommer) + Day 04 "Private boat, the full day."

- **Honeymoon** — **REFONTE COMPLETE 21/04 soir** :
  - **Duree reduite de 10 a 7 nuits** (4 Milos + 3 Folegandros) apres benchmark concurrence (Jacada/Scott Dunn/Black Tomato = 7-10 nights). Day by Day raccourci de 11 a 8 jours.
  - Toutes mentions "villa" → "boutique hotel" (Milos ET Folegandros). Route + Day by Day + Included + Where You Stay + alt + meta listing.
  - Toutes mentions "above the sea" / "above the cliff" / "(above the sea on Milos, above the cliff on Folegandros)" **supprimees** (on ne promet pas d'emplacement qu'on n'est pas sur de trouver). Route simplifiee : "Boutique hotel" (sans suffixe). Where You Stay h2 : "Two islands, two hotels."
  - **Day by Day reecrit ton lune de miel** (intime + sensoriel + temps suspendu) : "just the two of you", "only yours", "no footprints but yours", "the light is lunar", "the silence Folegandros is famous for", final Day 08 "Assisted transit back to Athens, and the rest begins."
  - Day 01 : "Flight to Milos" → "Assisted transit to Milos" (eb. ne gere pas les vols).
  - Day 06 : "Private access to the church" → "A slow climb to the church" (pas de faux private access).
  - Body Where You Stay : "Both matched to your party" → "Both chosen quietly, confirmed once we know your dates." (pas "party" pour couple).
  - Hero kicker : "Two islands. Ten days." → "Two islands. Seven nights. Everything arranged, nothing rushed."
  - Highlights h3 : "Ten days, two homes." → "Seven nights, two islands."
  - Included : "Seven nights across two hand-selected boutique hotels" (sans precision d'emplacement).
  - Related cards meta sur Family/Week by Sea : "10 nights · Milos + Folegandros" → "7 nights · Milos + Folegandros"

- **Family** :
  - Day 09 : "Everyone starts packing in their own time." → "A long evening on the terrace." (on ne pack pas 3 jours avant depart)
  - Day 10 : "Time to say goodbye to the place before the transfer north." → "A quiet last day at the villa, time to savour the place." (transfer est Day 11)
  - Day 01 : "two and a half hours south by car" → "southwest" (Porto Heli est SW d'Athens, pas pur S)
  - Included : "Private boat for two days" → "Private boat for three days (Hydra, Spetses, a final cove)"
  - Season : "June to September" → "April to October" (coherent avec listing)
  - Destination : "Porto Heli" → "Porto Heli + Saronic"
  - Where You Stay h2 : "Big enough for everyone." → "One house, every generation."

- **Athens** :
  - Numerotation "Private Journey · 03" → "· 05" (swap avec Honeymoon qui etait 05 → devient 03), aligne sur ordre du listing `/journeys`
  - Season : "April to June, September to November" → "Year-round"
  - Terms : "bespoke" RESTE (autorise, pas interdit)
  - On Request : "Private chef and dining at home" → "Private dining at exclusive addresses" (pas de chef at home en boutique hotel)

- **"Nothing scheduled."** → "Kept open, on purpose." sur Paros Day 06, Honeymoon Day 05, Family Day 06 (assume le choix comme intentionnel, pas un vide par defaut)

- **Glimpses** : legende "Glimpses. Exact properties confirmed on request." supprimee, titre "X at a glimpse" au-dessus de la grille (7 fiches)

- **CTA "Inquire" about villa=bestia-yacht** (Collection) → `?type=stay&stay=yacht` (villa slug n'existait pas)
- **CTA About** : `/contact` generique → `/contact?type=journey`

### 21.3 Animations image + texte (toutes fiches journey)

- **Nouveau CSS `.eb-image-settle`** (globals.css) : scale(1.08) → scale(1) sur 1500ms cubic-bezier, declenche par IntersectionObserver (ajoute `.eb-visible` au viewport entry).
- **Classe appliquee sur 56 images** des 7 fiches : Hero, Highlights, Where You Stay, Glimpses (3), CTA final, "You might also like" cards.
- **Hover zoom subtil** via `@media (hover: hover) { .group:hover .eb-image-settle.eb-visible { transform: scale(1.035); } }` — desactive sur mobile/tactile.
- **`eb-fade-up` / `eb-fade-in`** : textes apparaissent en cascade avec `eb-delay-100/200/300` sur les heroes.

### 21.4 Mobile polish pattern canonique (7 fiches journey alignees)

Pattern valide sur Astypalea (feedback Emma) et replique sur les 6 autres fiches :

- **Hero h1** : `text-[38px] sm:text-[52px] md:text-[68px] leading-[0.95] sm:leading-[0.92]` + break naturel (`<br />` sans `hidden sm:block`) + hero p `text-balance`
- **Hero image** : `object-[center_30%] md:object-center` (ancre vers le haut mobile pour eviter de couper les sujets)
- **Metadata bar** : `flex flex-col min-w-0` + `text-[13px] md:text-[17px] leading-[1.3]` + `whitespace-nowrap` sur labels et subs
- **Day by day** : button `py-7 md:py-10` + `gap-4 md:gap-10`, day-number `w-[60px] md:w-[110px]`, title `text-[15px] md:text-[22px] min-w-0`, body container `pb-8 md:pb-10 pl-0 md:pl-[140px] pr-2 md:pr-4`, body text `leading-[1.75]`, collapse `max-h-[500px]` (evite overflow sur fiches Family/Honeymoon 11 jours)
- **Highlights bloc** : mobile plein ecran `h-[100dvh] min-h-[600px]` + full-bleed `-mx-6 md:mx-auto`, desktop `md:aspect-[21/9] md:max-w-[1200px]`, pill tag `top-24 mobile / top-8 desktop`, h3 `text-[36px] md:text-[40px]`, body `text-[15px] leading-[1.55]`, gradient `from-black/85 via-black/35 to-black/10`
- **Where You Stay** : h2 `text-[32px] md:text-[56px] leading-[1] md:leading-[0.98]`, body `text-[14px] md:text-[17px] leading-[1.7] md:leading-[1.75]`
- **Glimpses** : titre "X at a glimpse" AU-DESSUS de la grille (`text-[10px] md:text-[11px] tracking-[0.35em]`), grid `grid-cols-1 sm:grid-cols-3 gap-3`, images en `aspect-[4/3] sm:aspect-[3/4]` + container `group` (hover zoom subtil)
- **CTA final** : h2 `text-[38px] md:text-[64px]` (reduit de 44px mobile pour eviter text geant iPhone SE), inner container `px-6 md:px-10`
- **Mid CTA "Ready to shape this one?"** : `px-6 md:px-8`
- **Related cards h3 "You might also like"** : `text-[22px] md:text-[28px] leading-[1.05]` (evite coupure de titres longs comme "A Week in the Cyclades, by Sea")

### 21.5 Corrections additionnelles cross-site

- **About CTA** : `/contact` simple (renvoie aux 3 portes B2C, pas `?type=journey`)
- **Collection CTA yacht** : `?villa=bestia-yacht` → `?type=stay&stay=yacht` (villa slug n'existait pas)
- **Numerotation fiches** : Athens "Private Journey · 03" → "· 05", Honeymoon "· 05" → "· 03" — aligne sur ordre du listing `/journeys`
- **"bespoke" et "curated"** : AUTORISES (mots luxe legitimes). Liste des interdits maintenue : hidden gems, bucket list, unforgettable, tailor-made, world-class, seamless, elevated, passionate, end-to-end.
- **"Nothing scheduled."** → "Kept open, on purpose." (Paros Day 06, Honeymoon Day 05 avant duree reduite, Family Day 06) — assume le choix comme design, pas vide par defaut
- **Glimpses legende** : "Glimpses. Exact X confirmed on request." supprimee, titre "X at a glimpse" au-dessus de la grille (7 fiches)
- **Journal** : typo `/astypalea..jpg` corrigee, URL `raphael-lopes...(1).jpg` encodee en %20
- **Terms** : SIRET + Paris, pas de telephone/domiciliation privee/regime fiscal
- **Footer legal** : "eb. is a travel design studio. All journeys are operated by our licensed DMC partners in Greece." sur 14 pages

### 21.6 Limite Unsplash (persistante)

### 21.5 Limite Unsplash (persistante)

WebFetch retourne toujours 403 sur images.unsplash.com cote agent. Workflow actuel : Emma depose les photos localement dans `/public/`. Les photos fonctionnent parfaitement cote visiteur, seulement l'agent ne peut pas valider de nouvelles URLs CDN Unsplash.

---

*Fin de session 21/04 soir. Les 7 fiches journey sont VALIDEES par Emma sur desktop + mobile :*
*- Astypalea "Before Everyone Else" (01, 7 nuits)*
*- Mykonos "Timed Right" (02, 5 nuits, copy jet-set)*
*- Honeymoon "A Slow Honeymoon in the Cyclades" (03, 7 nuits, ton lune de miel)*
*- Paros + Antiparos "Privately" (04, 6 nuits, v12 DA)*
*- Athens "Slowly" (05, 5 nuits, year-round)*
*- Family "A Family Summer, Greek-Style" (06, 10 nuits, multi-gen Porto Heli + Saronic)*
*- Week by Sea "A Week in the Cyclades, by Sea" (07, 7 nuits yacht)*

*Emma : "EXCELLENTE PAGE YATCH !!! BRAVOOO" + "le site est super, bravo et merci beaucoup!"*

*Phase suivante (technique, 1-2 semaines dev) : CMS Sanity + Resend (remplace mailto `/contact`) + Stripe test (paywall $100 + deposit $500) + PDF auto Private Route + SEO (metadonnees, sitemap) + Google Analytics 4 + bascule domaine emmabonnefous.com sur Vercel + tests cross-device.*

---

## 22. Session 24/04/2026 — Collection v4 + fiches villa dediees (You & Me + Celestia)

### 22.1 Scope recadre (decision Emma 24/04)
Les 2 villas reelles (**Villa You & Me** et **Villa Celestia**) ont desormais **leur fiche publique dediee** sur `/collection/[slug]`. Cela modifie le scope du 20/04 qui disait "PAS de fiches detail villas" — exception validee pour ces 2 villas uniquement. Les 3 autres villas du grid Collection (Aegean Residence, Aegean Essence, Seafront Sanctuary) restent des **cards placeholder** envoyant directement vers `/contact?type=stay&villa={slug}`.

### 22.2 Page Collection mise a jour
- **Hero** : nouvelle image `/villas/celestia/gallery-01.jpg`
- **Manifesto** : statement editorial centre + ligne graphique bleu marine + texte declaratif ("A private collection. The rest is a conversation.")
- **Grille 5 villas** :
  - **Villa You & Me** (full-width banner) — specs `900 m² · Up to 20 Guests · Seafront` — lien `/collection/you-and-me`
  - **Villa Celestia** (full-width banner) — specs `950 m² · Up to 18 Guests · Seafront` — lien `/collection/celestia`
  - **Aegean Residence** (Porto Heli), **Aegean Essence** (Crete), **Seafront Sanctuary** (Porto Heli) — cards standard, lien `/contact?type=stay&villa={slug}` (placeholder, pas de fiche dediee)
- **Bandeau By Introduction** : image `/photo bandeau_page Collection.jpg` + "Private residences. By introduction."
- **Bloc yacht** : inchange (33m Italian yacht, CTA `?type=stay&stay=yacht`)
- **CTA final** : "A stay begins with a conversation." + "Start the conversation →"
- **Fix** : retire du duplicate "seafront" sur la description de la card You & Me (card text "A private estate above the Aegean.", specs "Seafront")

### 22.3 Fiche villa — template `/collection/[slug]/page.tsx`
Template unique qui lit `villaDetails[slug]` depuis `app/data/villa-details.ts`. 2 villas actives : you-and-me + celestia.

**Ordre des sections (scroll flow) :**

| # | Section | Contenu |
|---|---|---|
| 1 | Hero | image full dvh (min-h-600px) + pill "The Collection" + H1 name (Anton) + location + **CTA "Enquire about this villa →"** + key-facts strip bas (4 cells : Size · Bedrooms · Bathrooms · Guests, **PAS de prix**) |
| 2 | Intro | **Tagline editorial H2 bleu** (22-32px) + pill small-caps `introLabel` (ex: "A Seafront Estate") + trait bleu + body prose centre max-640 |
| 3 | Gallery | grid 2-col mobile / 3-col desktop, `eb-image-settle` + hover zoom 3.5%, lightbox au click |
| 4 | The Villa | architecture prose V1 (pill + trait + body centre) |
| 5 | The Estate | amenities en 2 colonnes centrees comme bloc : **Indoors** (premier) / **Outdoors** (second), items text-left align |
| 6 | The Location | prose V1 |
| 7 | On Request | pill "On Request" + liste services dot-separated (sobre, single row prose) |
| 8 | Price + Availability | "From €X / night" (15-17px normal) + italic "Stays from 3 to 5 nights. Dates and rates confirmed at inquiry." |
| 9 | CTA Final | image bg + H2 "Stay here?" (Anton, 38-64px) + villa.card.tagline + "Start the conversation →" (lien `/contact?type=stay&villa={slug}`, **plus de mailto**) |
| 10 | Adjacent villa | cross-sell **sous le CTA** (sortie douce "if not this, then next door") |
| 11 | Back to the Collection | lien discret ← (**remplace NextChapter silos**) |
| 12 | Footer | standard |

**Sections retirees vs versions anterieures :**
- Seasonal Windows (retire 24/04, info non essentielle, sera donnee a l'inquiry)
- Sticky CTA bouton bleu fixed (teste + retire, "tres moche e-commerce")
- Concierge 2-col grid (tente + revert sur dot-separated V1 sobre)
- NextChapter silos generiques (retire, remplace par "Back to the Collection")

### 22.4 VillaDetail data model (app/data/villa-details.ts)

```ts
interface VillaDetail {
  slug, name, location, region
  card: { tagline, specs, priceFrom, combinableWith }
  introLabel?: string  // custom pill label (ex: "A Seafront Estate")
  tagline?: string     // editorial H2 blue (ex: "Ten rooms above the open Aegean.")
  intro, theHouse, theLocation (prose)
  keyFacts: { size?, bedrooms?, bathrooms?, guests, minStay, priceFrom }
  amenities?: { outdoor[], residence[] }
  adjacent: { slug, name, line }
  seasons[] (data present mais section retiree du template)
  services[]
  cover, gallery[]
  mailtoSubject (legacy, plus utilise depuis migration /contact)
}
```

### 22.5 Villa You & Me — donnees finales validees

- **Location** : Aleomandra, Mykonos
- **Key facts** : 900 m² / 10 bedrooms / 10 en-suite bathrooms / Up to 20 guests / From €6,500 / night / min stay 3 nights (5 in peak)
- **introLabel** : "A Seafront Estate"
- **tagline** : "Ten rooms above the open Aegean."
- **Intro prose** : "A 900 m² residence on the western coast of Mykonos, facing the open Aegean. Two levels, two independent wings. Ten bedrooms, twin infinity pools blending into the horizon. Designed for extended families and private gatherings." (retire "newly built" le 24/04 apres correction Emma : **c'est Celestia qui est neuve, pas You & Me**)
- **theHouse** : "Natural materials, earthy tones, architecture in harmony with the landscape. Each wing runs independently, its own kitchen, its own living area. Two jacuzzis, an open-air fireplace for the evenings, a private gym. Ten en-suite bedrooms, nothing in excess."
- **theLocation** : "Villa You & Me sits on Mykonos's quieter western coast, where the Aegean opens out and sunset is a daily fixture. Minutes by car from Chora, the harbour, and the tables worth the drive. Close to everything. Not of it."
- **Amenities** :
  - Indoors : 10 en-suite bedrooms / 2 independent living wings / 2 fully equipped kitchens / Private gym (deplace depuis Outdoors le 24/04) / Daily housekeeping / AC / Wi-Fi smart TV Sonos / Laundry, safes, welcome refreshments
  - Outdoors : 2 infinity pools / 2 jacuzzis / Open-air fireplace / BBQ area / Expansive sea-view terraces
- **Gallery** : 15 photos (cover.jpg duplicate de gallery-03.jpg note, gallery-02 "porte" retire, gallery-16 cuisine ajoutee ; dossier source `/public/VILLA IMAGES/VILLA01_YOU & ME/` contient 89 photos dont 72 non utilisees pour futures additions)

### 22.6 Villa Celestia — donnees 24/04 (base PDF descriptif officiel)

- **Location** : Mykonos (PDF mentionne "prime location on Mykonos, 200m from Glyfadi Beach" — **a clarifier avec Emma** si Aleomandra ou Glyfadi, et si le concept "adjacent/combinable with You & Me" tient)
- **Key facts** : 950 m² / 9 bedrooms (6 first level + 3 masters upper) / 9 en-suite bathrooms / Up to 18 guests / From €7,300 / night
- **introLabel** : "A Seafront Residence"
- **tagline** : "Stone, light, and the open sea."
- **card.tagline** : "A brand-new stone villa, 200m from the sea."
- **card.specs** : "950 m² · Up to 18 Guests · Seafront"
- **Intro prose** : "A brand-new 950 m² stone villa on Mykonos, 200 metres from Glyfadi Beach. Built to bioclimatic principles. Nine en-suite bedrooms across two levels, twin infinity pools, a home cinema, an indoor gym. Designed around the light and seamless indoor-outdoor living."
- **theHouse** : "Natural stone, modern luxury, bioclimatic design. Two indoor lounges, four outdoor. A fully equipped kitchen, a home cinema, an indoor gym. Twin infinity pools across two levels, two outdoor jacuzzis. A fire pit for evening gatherings. Nine en-suite bedrooms, six on the first level, three masters above."
- **theLocation** : "A prime corner of Mykonos, 200 metres from Glyfadi Beach. Removed from the island's busier edges, yet minutes from the sea. Quiet, exclusive, and never crowded."
- **Amenities** :
  - Indoors : 9 en-suite bedrooms / 2 indoor + 4 outdoor lounges / fully equipped kitchen / Home cinema / Indoor gym / Sonos / Daily housekeeping / AC / Wi-Fi cable & smart TV / Laundry welcome refreshments
  - Outdoors : 2 infinity pools across two levels / 2 outdoor jacuzzis / Outdoor fire pit / BBQ facilities / Multiple lounge & sunbathing areas / Expansive sea-view terraces
- **Gallery** : 12 photos (photos existantes, non mise a jour avec le dossier source `/public/VILLA IMAGES/VILLA02_VILLA CELESTIA/` — 33 photos source dispo pour future integration)
- **Services** : heritage (Private chef / Private transfers / Yacht charter / Reservations / Event production) — PDF precise "Private chef, catering, and concierge services available upon request"

### 22.7 Wording decisions 24/04 (apres nombreuses iterations)

- **Section architecture** : **"The Villa"** (etait "The House")
- **Section amenities** : **"The Estate"**
- **Colonnes amenities** : **Indoors** / **Outdoors** (symetriques, etait "The Residence" / "Outdoor & Wellness" — asymetrique)
- **Ordre colonnes** : Indoors EN PREMIER (la villa est le produit principal), Outdoors en second
- **Section services** : **"On Request"** (etait "Services on Request" — plus court, plus luxe)
- **Section location** : **"The Location"**
- **Section adjacent** : **"Adjacent villa"** — deplace **SOUS le CTA final** (cross-sell sortie, pas avant l'action principale)
- **CTA Hero** : "Enquire about this villa →" (coherent avec le vocabulaire inquiry)
- **CTA Final H2** : "Stay here?" (etait "A stay begins with a conversation." — 2 x "conversation" redondant ; "Ready to begin?" juge trop abstrait par Emma pour louer une maison a Mykonos)
- **CTA Final button** : "Start the conversation →" (inchange, pattern brand)
- **Availability note** : "Stays from 3 to 5 nights. Dates and rates confirmed at inquiry." (etait "Minimum stay 3–5 nights. Availability shifts by the week. Exact dates and rates confirmed at inquiry." — simplification apres feedback Emma "les footballers ne comprendront pas 3-5")

**Testees + retirees (preference Emma V1 classic) :**
- Storytelling labels (Facing west, By design, Everything in place, Above the open sea, On request, Through the year, Next door) → revert au pattern classic

### 22.8 Strategie prix (psychologie 24/04)

Prix **retire du hero** et place **juste avant le CTA final** (decision post-debat strategique Emma + Claude le 24/04).

**Rationale** : pattern luxe classique "dream first, price last". Benchmark Aman / Le Collectionist / Belmond cachent tous le prix du hero. Au moment ou le prix apparait (apres gallery, architecture, location), le visiteur a deja tombe amoureux de la villa → le prix devient confirmation, pas filtre.

**Render :** `From €6,500 / night` (15-17px normal) + italic grise `Stays from 3 to 5 nights. Dates and rates confirmed at inquiry.`

Fonctionne pour les 3 personas cibles :
- UHNW : zero impact (ils checkent pas le prix)
- HNW : transparence rassurante (pas de surprise)
- Footballeur / high earner : badge de fierte (voir le prix excite plutot qu'autre chose)

### 22.9 Cascade CTAs (3 niveaux sur la fiche)

1. **CTA Hero** : "Enquire about this villa →" — immediat visible, conversion possible en 5s
2. **CTA Mid page** : aucun (volontaire, pas de sales pushy, le contenu fait le travail)
3. **CTA Final bas** : H2 "Stay here?" + tagline + "Start the conversation →" pointe vers `/contact?type=stay&villa={slug}` (form StayForm avec villa pre-remplie via query param, coherent Contact V3)

**Retire** : sticky CTA bouton bleu bottom-right (teste + retire car "moche style e-commerce")

### 22.10 Mobile polish + animations canoniques (pattern fiches journey)

- **2e IntersectionObserver** ajoute : observe `.eb-image-settle` / `.eb-fade-up` / `.eb-fade-in`, ajoute `.eb-visible` au viewport entry
- **`eb-image-settle`** sur : hero cover, 15 images gallery, CTA final cover → scale 1.08 → 1 sur 1500ms cubic-bezier
- **`eb-image-vignette`** sur CTA final (ombre interne 4 cotes)
- **Hover zoom** 3.5% sur gallery via `@media (hover: hover)` (desactive tactile)
- **Hero image** : `object-[center_30%] md:object-center` (evite couper sujet mobile portrait)
- **Hero h1** : `text-[38px] sm:text-[52px] md:text-[88px] leading-[0.95] sm:leading-[0.92] text-balance`
- **Hero location** : `whitespace-nowrap`
- **Hero** : `min-h-[600px]` garanti (evite ecrasement sous nav iOS)
- **Key facts strip** : padding compact mobile `px-5 py-4` → `px-6 py-6` desktop
- **Intro tagline** : `text-[22px] md:text-[32px] text-balance` (evite overflow iPhone SE)
- **CTA final image** : `object-[center_35%] md:object-center`
- **CTA final h2** : `text-[38px] md:text-[64px]` + `object-[center_35%]`
- **Paddings** : alignes sur pattern fiche journey (`px-6 md:px-8` mid, `px-6 md:px-10` CTA)

### 22.11 Points de vigilance (a clarifier / completer)

- **Location Celestia** : PDF dit "200m de Glyfadi Beach" (nord de Mykonos), donnees actuelles disaient "Aleomandra" (SW de Mykonos). Le concept "combinable with You & Me / 38 guests si ouvert ensemble" presuppose adjacence physique. **A confirmer par Emma** si (a) les 2 villas sont bien adjacentes et l'une des locations est fausse, ou (b) elles ne sont PAS adjacentes et il faut retirer la cross-sell "Adjacent villa"
- **Photos Celestia** : 12 photos actuelles dans `/public/villas/celestia/` (alt text genre, pas valides visuellement). Dossier source `/public/VILLA IMAGES/VILLA02_VILLA CELESTIA/` contient 33 photos — migration pas encore faite.
- **Photos You & Me — pieces manquantes** : salon interieur (ask Emma prio 1), BBQ area, fireplace close-up, dining room interior. Dossier source contient 72 photos non utilisees, recherche continue.
- **m² des 3 villas placeholders** : Aegean Residence / Aegean Essence / Seafront Sanctuary affichent toujours "X Bed · X Guests · Seafront" — manquent les m² pour aligner avec le pattern "m² · Guests · Seafront" des 2 villas reelles.
- **Celestia card.tagline** : "A brand-new stone villa, 200m from the sea." (a valider par Emma, pas teste encore)

---

*Fin de section 24/04/2026. Villa You & Me et Villa Celestia ont leur fiche dediee avec donnees reelles du PDF descriptif, DA luxe alignee sur le brand eb., mobile polish complet + animations. 3 points de vigilance listes section 22.11 pour la prochaine session.*

---

## 23. Session 27/04/2026 — Collection v5 + Contact V4 + sitewide polish

### 23.1 +3 fiches villa publiques (Esmeralda, Tourlos Breeze, Santorini Estate)

3 nouvelles fiches creees sur `/collection/[slug]` en utilisant le template existant. Contenu **strictement synthetise depuis les PDFs descriptifs Emma** (regle no-impro confirmee). Photos copiees depuis `/public/VILLA IMAGES/MYKONOS/VILLA0X_*` ou `/public/VILLA IMAGES/SANTORIN/SANTORINI ESTATE/`.

**Villa Esmeralda — Mykonos** (10 bed / 20 guests / 600 m² / From €4,515)
- `card.specs` : "600 m² · 10 Bed · Up to 20 Guests · Beachfront"
- `introLabel` : "A Beachfront Estate"
- `tagline` : "A minute from the sand. Delos in the distance."
- Architecture : 3 etages, main house + lower wing avec entree separee, 2 piscines, 2 cuisines, marble bathrooms, fireplace, BBQ, top-floor jacuzzis privatifs
- `theLocation` : beachfront secluded bay, Ornos + Agios Ioannis a proximite, 15 min Mykonos Town
- Gallery 14 photos (selection finale Emma 27/04 : 8.8 first / 8.5-2 second / 198.5 / 186.5 / 121.7 / 121.5 / 121.4 / 62.8 / 62.3 / 21.8-1 / 20.2 / 3.4-1 / 3.1-1 / 2.5-2)
- Cover : `1.4.jpg` (golden sunset infinity pool, 1620×1080 — limite source HD)

**Villa Tourlos Breeze — Tourlos, Mykonos** (8 bed / 16 guests / 840 m² / From €5,015)
- `card.specs` : "840 m² · 8 Bed · Up to 16 Guests · Sea View"
- `introLabel` : "A Hillside Villa"
- `tagline` : "Tourlos, the harbour, the Cyclades unfolding from the terrace."
- Architecture : 4 niveaux descendant la colline, 8e bedroom isolee au niveau de l'eau avec lounge circulaire + outdoor fireplace, indoor gym, kitchen avec skylight sculptural
- `theLocation` : Tourlos west Mykonos, vues sur harbour + chora + Delos/Rhenia/Tinos/Syros/Paros
- Gallery 15 photos : pink sunset pool, exterieur twilight, terrasse+chora, infinity pool day, sunset over chora, fire pit night with town lights, outdoor kitchen+pool twilight, sunken outdoor lounge cinema TV, master bedroom, **gym (28.png)**, bedroom grey accent, **lit pool/bar at night (11.8.jpg)**, earth-toned bathroom, aerial, **stone-cave dining niche (11.6.jpg)**
- **Cruise-ship line strippee** du `intro` : la phrase "ideally for unbeatable views of the cruise ships navigating their way" du PDF original a ete reformulee pour omettre cette mention (regle no-cruise-ships).
- **Photos 29.jpg + 45.1-1.jpg + 2401.jpg exclues** car bateaux de croisiere visibles dans la baie.
- `keyFacts.bathrooms` : "8 en-suite" (inference luxe, PDF implique mais ne le dit pas explicitement — a confirmer par Emma)

**Santorini Estate — Messaria, Santorini** (5 suites / 10 guests / Two acres / From €7,615)
- `card.specs` : "5 Suites · Up to 10 Guests · Caldera View"
- `introLabel` : "A Caldera Estate"
- `tagline` : "A thousand feet above the caldera, the volcano at the horizon."
- Architecture : 1,000-foot cliff au-dessus du caldera, 2 acres, 5 suites independantes, interiors par **Paola Navone** avec **Rubelli of Venice** + **Stella of Italy**, walls with local Santorini stone, floating fireplaces, heated plunge pools per suite, outdoor whirlpools, radiant heated floors
- `theLocation` : Messaria edge of caldera, volcano Nea Kameni en face, sunset views sans crowd
- Gallery 15 photos dont **outdoor cinema + firepit (21.jpg, remplace marble hammam au tour 27/04)**, **jacuzzi at sunset (9.jpg, remplace bathroom decoratif)**, infinity pool + caldera, breakfast pergola, candlelit dinner sunset, white Cycladic suite, outdoor lounge volcanic stone, sculptural lattice screen, wine cellar, twin oval mirrors washroom
- `keyFacts.size` : "Two acres" (PDF n'a pas de m² du bati, seul 2-acre estate disponible)
- Pas de photo exterieure de la maison disponible dans le dossier source (confirme par Emma)
- **"Private event space"** non utilise dans la copie : aligne sur "Private candlelight dinners arranged across the estate" du PDF officiel
- Operating period : April 1 – November 30 (inclus dans `seasons` "Open Season")
- Resident host + executive chef + spa avec hammam + wine cellar + outdoor kitchen avec wood-fire pizza oven + chapelle privee + outdoor cinema

### 23.2 Adjacent villa restriction (You & Me ↔ Celestia uniquement)

**Decision Emma 27/04** : la cross-sell "Adjacent villa" en bas de fiche n'a de sens **que** pour les villas physiquement voisines. Concretement :
- You & Me ↔ Celestia (Aleomandra, Mykonos, voisines reelles avec combinabilite 38 guests) : **garde** la cross-sell
- Esmeralda, Tourlos Breeze, Santorini Estate : **adjacent retire** dans la data

**Type model** : `VillaDetail.adjacent?` rendu optionnel. Le rendu dans `[slug]/page.tsx` est conditionnel : `{villa.adjacent && (...)}`. Pas d'erreur si undefined.

### 23.3 Celestia gallery refonte 27/04

Gallery refondue pour matcher la regle "must show signature features" :
- **gallery-08** : `36.jpg` (stone entryway banana trees) → `4.jpg` (**indoor gym** — cible footballers)
- **gallery-11** : `11.jpg` (stone bathroom open shower) → `3.jpg` (aerial twin pools illuminated at dusk)
- **gallery-13/14/15** ajoutees au tour precedent : pergola sun loungers, twin pools day, wine cellar
- Badge `New for 2026` ajoute hero (pill bleu brand) + card collection list (top-left)

### 23.4 Yacht banner /collection — refonte complete

**Probleme** : ancienne image `/yatch_page collection.jpg` ressemblait a une terrasse de resort Maldives (deck en bois + cushions au-dessus de l'eau). Aucun yacht visible.

**Fix** :
- Image swap → `/yatch on board.jpg` (editorial : personne en blanc sur le gangway, coque visible droite, mer ouverte gauche). Vertical 3:4 mais object-cover + `object-[center_30%]` preserve le sujet.
- Bloc deplace **AU-DESSUS** du bloc Private Introduction (Emma : "ça arrive trop bas, on perd le yacht").
- Phrase fausse "The only one of her kind available for charter in Greece" supprimee.
- CTA "Inquire about the yacht" pointe vers `/contact?type=stay&stay=yacht` (nouveau handling, voir 23.5.B).

Nouveau ordre des blocs sur `/collection` :
1. Hero
2. Manifesto
3. Grille des 8 villas (5 reelles + 3 placeholders)
4. Citation "The right house changes the week."
5. **Yacht (deplace ici)**
6. **Private Circle / By Introduction (deplace apres yacht)**
7. CTA final + price floor "Villas from €1,000 / night"

### 23.5 Contact V4 — preselect villa + preselect yacht

**A. Villa preselect** (`?type=stay&villa={slug}`) — etait deja en place mais clean-up de la session :
- `typeLabel` : "Enquiry · {villa.name}" (etait "Villa or Yacht · {slug}" — slug brut visible)
- `title` H1 : "About this villa." (etait "A place to land.")
- `intro` : "Tell us your dates and your party. We come back with availability and the next steps."
- Section 02 "What are you looking for" Villa/Yacht/Both **cachee** (pre-determinee)
- Encart "Villa of interest" locked : nom de la villa + bouton "Change" (etait TextInput editable affichant le slug — UX laide)
- Question budget Villa **cachee**, encart price affiche : "{villa.priceFrom}. Final dates and rates confirmed at inquiry."
- Section 02 "Bedrooms (minimum)" **cachee** (nb chambres connu)
- Section 03 titre : "Anything else." (etait "Your vision.")
- Vision text **optionnelle** (pas de minimum 60 chars), label "Tell us anything we should know"
- Submit : **"Send my enquiry"** (etait "Share your vision" — vire wedding-planner cliche)

**B. Yacht preselect** (`?type=stay&stay=yacht`) — NOUVEAU 27/04 :
- `typeLabel` : "Enquiry · Private Yacht Charter" (etait "Villa or Yacht" — confus apres clic yacht)
- `title` H1 : "Charter the yacht."
- `intro` : "Tell us your dates and your party. We come back with a route and a quote, tailored to the week."
- `data.interest` auto-set a "Yacht" via `searchParams.get("stay") === "yacht"`
- Section 02 "What are you looking for" Villa/Yacht/Both **cachee**
- Encart "Charter" affiche : "Private Yacht Charter / 33m Italian yacht, four cabins, eight guests, crew of five. Athens-based. Quoted individually."
- Section 03 yacht note **cachee** (deja dit en haut, evite redondance)
- Submit : **"Send my enquiry"**

**C. Generic** (no preselect) :
- Submit : **"Start the conversation"** (etait "Share your vision" depuis le 27/04, applique partout sauf preselect)
- `villaBudgets` + `journeyBudgets` : em dash retire ("Not sure — let's discuss" → "Not sure, let's discuss")

### 23.6 IntentCards price ranges (3 portes B2C qualifiees)

`/contact` (no preselect) affiche 3 cards "Three ways in" : Journey / Occasion / Stay. Chaque card recoit maintenant un `priceRange` discret en uppercase tracke, sous la description :
- **A journey** : Journeys from €2,000 / person (matche villaBudgets tier 1)
- **A moment (Occasion)** : Occasions from €15,000 (matche occasionBudgets tier 2 conservatif)
- **A place (Stay)** : Villas from €1,000 / night (floor PORTFOLIO, **pas** €6,500 qui est le prix specifique de You & Me — voir memoire `feedback_villa_pricing_floor.md`)

Le visiteur se qualifie avant de cliquer. Type `priceRange?: string` ajoute dans le tableau `portes` interne. Render conditionnel via `{"priceRange" in p && p.priceRange && (...)}`.

### 23.7 Hero overlays sitewide alleges

Audit complet des `bg-black/X` overlays sur images de fond. Reductions appliquees :

| Page | Section | Avant | Apres |
|---|---|---|---|
| Home | Hero | /40 | /25 |
| Home | CTA bandeau | /50 | /35 |
| Home | CTA final | /40 | /30 |
| Collection | Hero | /40 | /25 |
| Collection | "By Introduction" | /55 | /40 |
| Collection | CTA final | /40 | /30 |
| Villa fiche | Hero | /40 | /25 |
| Villa fiche | CTA final | /55 | /40 |
| Journal | Hero | /40 | /25 |
| Journal | CTA bandeau | /45 | /35 |
| Journal | CTA final | /40 | /30 |
| Influencer | Hero | /40 | /25 |
| Influencer | Mid + CTA | /40 | /30 |
| About | Hero | /45 | /25 |
| Experiences | Hero | /40 | /25 |

**Logique** : heros = /25 (laisser respirer), CTA bandeaus avec textes longs = /35-40, CTA finals courts = /30. Texte blanc reste lisible grace au text-shadow existant. Special case `/contact` hero : top du gradient renforce 10%→40% noir pour que la nav blanche soit lisible avant scroll.

### 23.8 CSS reveal fallback (fix "trous" sur la page)

Probleme : sur connexion lente ou HMR, l'IntersectionObserver JS qui ajoute `.visible` aux elements `.reveal` peut ne pas se declencher → elements restent `opacity: 0` → trous visibles.

Fix dans `globals.css` :
```css
.reveal {
  opacity: 0;
  transform: translate3d(0, 24px, 0);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
  animation: reveal-fallback 0.7s ease-out 2s forwards;
}
.reveal.visible { animation: none; }
@keyframes reveal-fallback {
  to { opacity: 1; transform: translate3d(0, 0, 0); }
}
```

Apres 2 secondes, si `.visible` n'a pas ete ajoute par le JS, l'animation CSS prend le relais. Plus de trous possibles meme si l'observer foire.

### 23.9 Mobile polish — fixes specifiques 27/04

- **Hero villa fiche** : `whitespace-nowrap` sur location pill remplace par `text-balance` (evite overflow sur petits ecrans avec longues locations type "Aleomandra, Mykonos")
- **Key facts strip** : `gap-y-4` → `gap-y-5` (respiration mobile)
- **Amenities** Indoors/Outdoors : `gap-10` → `gap-8` mobile (densite plus equilibree)
- **PillChoice + PillMulti** form contact : padding `px-4 py-3` → `px-3 py-2.5` mobile (moins crame, garde min-h-44px tap target)
- **DateRange** : `gap-4 mobile` → `gap-6` (lisibilite stack vertical)
- **Encart yacht preselect** : padding adapte mobile/desktop, span → p pour stack proprement
- **Counter +/-** boutons : reste w-11 h-11 (44px) sur mobile = respect Apple HIG / Material guidelines (audit a refuse l'idee de reduire a 40px)

### 23.10 Anchor `/collection#homes` (back link UX)

Ajout `id="homes"` + `scroll-mt-20` sur la grille des villas dans `/collection`. Le lien "Back to the Collection" en bas des fiches villa pointe maintenant vers `/collection#homes` (etait `/collection` qui ramenait au hero). Le visiteur atterrit sur la grille immediate apres click.

### 23.11 Type model evolutions

`app/data/villa-details.ts` :
```ts
interface VillaDetail {
  // ...
  card: {
    tagline: string;
    specs: string;
    priceFrom: string;
    combinableWith?: string;  // optionnel (etait required) — only for sister villas
  };
  badge?: string;            // NEW — pill bleu hero ("New for 2026")
  // ...
  adjacent?: { ... };         // optionnel (etait required)
}
```

`app/collection/page.tsx` (grid) :
```ts
type VillaCard = {
  // ...
  badge?: string;             // NEW — affichage top-left de la card
  combinableWith?: string;
};
```

5 villas registrees dans `villaDetails` map : `"you-and-me"`, `"celestia"`, `"esmeralda"`, `"tourlos-breeze"`, `"santorini-estate"`.

### 23.12 Memoires d'edition saved (regles permanentes)

Saved dans `~/.claude/projects/-Users-EmmaBonnefous-travel-app/memory/` :
- `feedback_island_name_sells.md` : toujours citer le nom de l'ile (Mykonos, Paros, Santorini) dans tagline / intro / theLocation / hero / CTA. Jamais "the island" seul. Quote Emma : "le nom de l'ile fait vendre. les clients payent le nom de l'ile au final."
- `feedback_villa_pricing_floor.md` : floor portfolio = €1,000 / night. €6,500 = prix specifique You & Me. Ne pas confondre.
- `feedback_mobile_first_check.md` : verifier explicitement le rendu mobile sur **chaque** modification UI/copy. Ne pas se limiter au desktop.
- `feedback_villa_must_show_features.md` : sur fiche villa, montrer en photo les amenities premium (gym pour footballers, kitchen, hot tub, hammam, chapel, cinema, etc.). Pas plus de 2 photos chambre. Cuisine interieure obligatoire si dispo.

### 23.13 Points de vigilance (clarifications attendues)

Suite a la session 27/04, points en attente :
- **Esmeralda alt texts** : 9 photos selectionnees par Emma sans description visuelle de ma part (62.8, 62.3, 121.4, 21.8-1, 20.2, 8.5-2, 3.4-1, 198.5 partiel, 8.8). Alt texts genriques "best-effort" — a peaufiner si Emma souhaite SEO precis.
- **Tourlos Breeze bathrooms** : "8 en-suite" est une inference luxe (PDF dit "spacious bathroom" sans confirmer en-suite generalise). A confirmer Emma.
- **Cover photos resolutions** : Esmeralda (1.4.jpg) + Tourlos Breeze (2-1.jpg) sont a 1620×1080 (HD seulement, pas 4k). Sur retina mobile + grand ecran le hero peut paraitre soft. Demander aux proprietaires des versions haute res si dispo.
- **Photos pieces manquantes** : kitchen interieure (Esmeralda non documente), exterior shot Santorini Estate (confirme absent par Emma), gym Esmeralda (non mentionne dans le PDF — pas de gym pour cette villa).
- **Adjacent You & Me ↔ Celestia** : a confirmer concretement si les 2 villas sont voisines (PDF Celestia dit "200m Glyfadi Beach", PDF You & Me dit "Aleomandra"). Si non adjacentes, retirer la cross-sell.

---

*Fin de section 27/04/2026. Total 5 fiches villa publiques operationnelles, Contact V4 avec 2 preselect modes (villa + yacht), Collection v5 avec yacht banner refait + 3 nouveaux blocs villa, sitewide overlay alleges, IntentCards price-qualified, 4 nouvelles memoires d'edition saved. Prochaine session : peaufiner les alt texts Esmeralda + clarifier les 4 points de vigilance + ajouter d'autres villas si dispo.*

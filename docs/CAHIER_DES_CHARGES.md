# Cahier des Charges — eb. Platform
**Version :** 1.0
**Date :** 2026-04-20
**Auteure :** Emma Bonnefous
**Statut :** Phase 1 Sprint 3 en cours — page Contact/Inquire refondue V3 (one-page sectionne, plus de multi-step, budget tiers strategiques par type). For Brands V2 polished. Image compression mobile appliquee (30+ fichiers). Tous CTAs cross-site recables vers les bons flows via query params (`?type=journey|stay|occasion` + slug eventuel).

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

### Pages a creer
- Pages detail experiences/villas (catalogue complet ~35 items)
- Pages detail journeys manquantes apres validation template Paros (template DA v12 a repliquer)

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
hidden gems, bucket list, unforgettable, bespoke, curated, tailor-made, world-class, seamless, elevated, passionate, end-to-end

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


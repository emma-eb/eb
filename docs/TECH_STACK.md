# Stack Technique — eb. Platform
**Version :** 0.2
**Date :** 2026-04-12

> Ce document explique les choix techniques du projet eb. **sans jargon**,
> pour qu'Emma puisse comprendre ce qu'on construit, pourquoi, et ce que ça implique concrètement.

---

## Principe directeur

L'architecture choisie répond à trois contraintes non-négociables :

1. **Emma gère le contenu seule** — sans développeur pour changer une photo ou un texte
2. **Le site et l'espace client doivent être maintenus dans la durée** à coût raisonnable
3. **L'expérience doit être digne du positionnement luxe** — rapide, élégante, irréprochable

---

## Vue d'ensemble (en une image)

```
┌─────────────────────────────────────────────────────────────────┐
│                        CE QUE VOIT L'UTILISATEUR                │
│                                                                 │
│   🌐 Site Web eb.         🔐 Espace Client (web app privée)     │
│   (Next.js public)        (Next.js — accès sur invitation)      │
└──────────────────┬──────────────────────┬───────────────────────┘
                   │                      │
                   ▼                      ▼
┌──────────────────────────────────────────────────────────────────┐
│                       CE QUE GÈRE EMMA                           │
│                                                                  │
│   📝 CMS Sanity.io — modifier textes, photos, fiches villas      │
└──────────────────────────────────────────────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────────────────────────┐
│                    LA BASE TECHNIQUE (invisible)                  │
│                                                                  │
│   🗄️ Supabase — base de données, comptes clients, fichiers       │
│   ☁️  Vercel — hébergement du site + de l'espace client          │
│   💳 Stripe — paiements en ligne (Phase 3+)                      │
└──────────────────────────────────────────────────────────────────┘
```

---

## Les 4 composants du projet

### 1. Next.js — Le site web et l'espace client
**C'est quoi ?** Le "moteur" qui fait tourner à la fois le site public eb. et l'espace client privé. C'est la technologie la plus utilisée au monde pour les sites professionnels modernes (TikTok, Hulu, Twitch, Nike).

**Pourquoi pour eb. ?**
- Très rapide — Google le récompense dans les classements
- S'adapte parfaitement aux mobiles (responsive design)
- Permet de faire des pages visuellement impressionnantes (animations, transitions)
- Le site public ET l'espace client privé partagent la même base de code
- Pas besoin de passer par l'App Store — les clients accèdent via leur navigateur

**Ce que ça signifie pour Emma :** Emma ne touche jamais à Next.js directement. C'est le développeur qui travaille dessus. Emma gère tout le contenu via le CMS.

> **Pourquoi pas une app native (App Store / Play Store) ?**
> Une web app accessible depuis le navigateur mobile est plus rapide à développer, moins chère à maintenir, et ne nécessite pas que le client télécharge quoi que ce soit. Pour une clientèle UHNW qui reçoit un lien par email ou WhatsApp, c'est la meilleure expérience.

---

### 2. Sanity.io — Le CMS (outil de gestion de contenu)
**C'est quoi ?** L'interface où Emma peut modifier le site seule, comme un Google Docs mais pour un site web.

**Pourquoi Sanity ?**
- Interface très claire et intuitive, même pour un non-technicien
- Permet de modifier textes, photos, fiches villas, articles de blog sans toucher au code
- Les modifications apparaissent en direct (ou après validation)
- Tarif : gratuit jusqu'à un certain volume, puis ~€20/mois

**Ce que ça signifie pour Emma :** Emma se connecte sur studio.sanity.io/eb (ou équivalent), voit son contenu organisé comme un tableau de bord, et modifie ce qu'elle veut. Pas de code.

**Exemples de ce qu'Emma peut changer seule :**
- Ajouter une nouvelle villa (photos, description, prix, disponibilité)
- Modifier les textes d'une page
- Publier un article de blog
- Mettre à jour les prix du yacht BESTIA

---

### 3. Supabase — La base de données
**C'est quoi ?** Le "cerveau invisible" qui stocke toutes les données : comptes clients, messages, séjours, documents, etc.

**Pourquoi Supabase ?**
- Open source (pas de dépendance à une seule entreprise)
- Sécurisé et conforme RGPD
- Intègre l'authentification (connexion / mot de passe) nativement
- Stockage de fichiers (PDFs, documents de séjour, etc.)
- Tarif : gratuit pour commencer, puis environ €25/mois pour une utilisation professionnelle

**Ce que ça signifie pour Emma :** Emma ne voit jamais Supabase directement. Toutes les données clients sont stockées là, chiffrées, sécurisées.

---

### 4. Vercel — L'hébergement
**C'est quoi ?** Le "serveur" qui rend le site accessible partout dans le monde, 24h/24.

**Pourquoi Vercel ?**
- Spécialement optimisé pour Next.js (même éditeur)
- Déploiement automatique : quand le développeur fait une modification, le site se met à jour en quelques secondes
- CDN mondial (le site se charge vite depuis Paris, Mumbai, New York)
- Tarif : gratuit pour commencer, puis ~€20/mois en version Pro

---

## Ce que tout ça coûte (estimatif mensuel, en régime de croisière)

| Service | Usage | Coût mensuel estimé |
|---|---|---|
| Vercel | Hébergement site + espace client | €20 |
| Sanity.io | CMS contenu | €20 |
| Supabase | Base de données + auth | €25 |
| Domaine emmabonnefous.com | Annuel ÷ 12 | ~€5 |
| **Total infrastructure** | | **~€70/mois** |

> Note : ces coûts sont l'infrastructure uniquement. Le développement est un coût séparé, one-time.
> Sans App Store ni Play Store, on économise ~€11/mois et des semaines de développement.

---

## Ce qui n'est PAS dans la stack (et pourquoi)

| Option écartée | Pourquoi pas |
|---|---|
| WordPress | Pensé pour des blogs, pas pour une expérience luxe. Difficile à personnaliser. Vulnérabilités fréquentes. |
| Wix / Squarespace | Bien pour les débuts mais trop limitant pour l'espace client et le B2B. Impossible à faire évoluer. |
| App native iOS/Android (React Native) | Nécessite de passer par l'App Store, délais de validation, coûts supplémentaires. Non prioritaire — la web app couvre tous les besoins. |
| Firebase (Google) | Dépendance totale à Google, coûts imprévisibles. Supabase est plus prévisible et open source. |
| Shopify | Conçu pour l'e-commerce produits, pas pour les services sur-mesure luxe. |

---

## Questions fréquentes

**Q : Les clients doivent-ils télécharger une app ?**
Non. L'espace client eb. s'ouvre directement dans le navigateur (Safari, Chrome) — sur mobile ou desktop. Le client reçoit un lien par email ou WhatsApp, clique, et c'est là.

**Q : Si le développeur arrête de travailler avec nous, on perd tout ?**
Non. Tout le code est sur GitHub (dépôt privé appartenant à eb.). Un nouveau développeur peut reprendre le projet immédiatement.

**Q : Peut-on changer de stack plus tard ?**
Le CMS (Sanity) est indépendant du reste. On peut changer le site sans perdre le contenu.

**Q : Est-ce que le site sera bien référencé sur Google ?**
Next.js est une des meilleures technologies pour le SEO. La stratégie de contenu (mots-clés "luxury concierge Greece", "private villa Greece", etc.) sera travaillée en Phase 1.

---

## Schéma de déploiement simplifié

```
Emma modifie une fiche villa dans Sanity.io
    │
    ▼
Sanity envoie la mise à jour → Vercel reconstruit la page concernée (30 secondes)
    │
    ▼
La nouvelle fiche est visible sur emmabonnefous.com et dans l'espace client
```

---

*Dernière mise à jour : 2026-04-12 — v0.2 — App native remplacée par web app (Next.js)*

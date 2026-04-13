import type { Mood, CatalogueItem, Villa, YachtInfo, ContentType } from "./types";

/* ═══════════════════════════════════════════════════════
   MOODS — The 8 mood categories for discovery
   Photos verified visually from assets/photos/blog/
   ═══════════════════════════════════════════════════════ */

export const moods: Mood[] = [
  {
    id: "azure",
    name: "Odyssey & Salt",
    subtitle: "Islands, sailing, hidden coves",
    universe: "Sea, boats, coves",
    /* Navagio Zakynthos aerien — rocher mer turquoise bateaux */
    image: "https://images.unsplash.com/photo-1629286521433-dfa4637fbe9a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "stone",
    name: "Stone & Silence",
    subtitle: "Mountains, monasteries, trails",
    universe: "Mani, Zagori, Meteora, stone",
    /* Roches sculptees Sarakiniko close-up — formes minerales */
    image: "https://images.unsplash.com/photo-1667114448126-cb9cc48a8eb8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "vine",
    name: "Vine & Table",
    subtitle: "Gastronomy, vineyards, villages",
    universe: "Tables, vines, terraces",
    /* Ruelle blanche Mykonos table vue mer — dining ambiance */
    image: "https://images.unsplash.com/photo-1653470348722-158d4b0c33ac?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pulse",
    name: "Pulse & Gold",
    subtitle: "Mykonos, beach clubs, VIP",
    universe: "Night, beach club, energy",
    /* Santorini Fira soir — terrasses illuminees ambiance festive */
    image: "https://images.unsplash.com/premium_photo-1697729900945-598459160f7b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "soft",
    name: "Soft Pulse",
    subtitle: "Paros, Athens rooftops, easy living",
    universe: "Harbor, rooftop, cool",
    /* Naoussa Paros — port maisons blanches eau calme */
    image: "https://images.unsplash.com/photo-1603906482627-4d88dd3c843e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "wild",
    name: "Wild & Free",
    subtitle: "Kayaking, diving, gorges",
    universe: "Cliffs, wild sea, gorges",
    /* Vue aerienne eau turquoise nageurs rochers — aventure */
    image: "https://images.unsplash.com/premium_photo-1685539973730-28a4fc68ef06?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "culture",
    name: "Culture & Heritage",
    subtitle: "Archaeology, art, craftsmanship",
    universe: "Acropolis, atelier, museum",
    /* Acropole coucher soleil — vue panoramique iconique */
    image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "wellness",
    name: "Wellness & Slow",
    subtitle: "Spa, yoga, off-the-beaten-path",
    universe: "Nature, calm pools, serenity",
    /* Terrasse blanche Santorini vue caldera — serenite absolue */
    image: "https://images.unsplash.com/photo-1678266587841-ca65ff1b5b1d?auto=format&fit=crop&w=800&q=80",
  },
];

/* ═══════════════════════════════════════════════════════
   CATALOGUE — All experiences, journeys, events
   Every photo verified visually
   ═══════════════════════════════════════════════════════ */

export const catalogue: CatalogueItem[] = [
  /* ─── AZURE & SALT ─── */
  {
    id: "sailing-small-cyclades",
    type: "journey",
    moods: ["azure"],
    title: "Sailing the Small Cyclades",
    subtitle: "Koufonisia \u2192 Schinoussa \u2192 Iraklia",
    description: "Anchor in bays where you\u2019re the only boat. Dine at tavernas with no menu.",
    duration: "5 days",
    route: "Koufonisia \u2192 Schinoussa \u2192 Iraklia",
    /* Village pecheurs Milos crique turquoise bateaux */
    image: "https://images.unsplash.com/photo-1565588514814-6a9e7bcd7657?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "/experiences/sailing-small-cyclades" },
    tags: ["5-day route"],
    hasPaywall: true,
  },
  {
    id: "dodecanese-deep-dive",
    type: "journey",
    moods: ["azure"],
    title: "Dodecanese Deep Dive",
    subtitle: "Rhodes \u2192 Symi \u2192 Tilos \u2192 Nisyros",
    description: "Medieval towns, volcanic craters, harbors in every shade of ochre.",
    duration: "7 days",
    route: "Rhodes \u2192 Symi \u2192 Tilos \u2192 Nisyros",
    /* Klima Milos maisons colorees au bord eau + bateau */
    image: "https://images.unsplash.com/photo-1691699881810-c56961e4942c?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["7-day route"],
    hasPaywall: true,
  },
  {
    id: "sunset-sail-milos",
    type: "experience",
    moods: ["azure"],
    title: "Sunset Sail off Milos",
    subtitle: "Private catamaran, 4 hours",
    description: "Kleftiko sea caves, swimming stop at Tsigrado, wine as the sun drops.",
    duration: "4 hours",
    /* Sarakiniko roches blanches + eau turquoise vue haute */
    image: "https://images.unsplash.com/photo-1630276731484-2ede4b9f283c?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Inquire", href: "/contact" },
    tags: ["experience"],
  },
  {
    id: "ionian-escape",
    type: "journey",
    moods: ["azure"],
    title: "Ionian Escape",
    subtitle: "Lefkada \u2192 Meganisi \u2192 Ithaca",
    description: "Emerald waters, deserted beaches, Homer\u2019s island.",
    duration: "5 days",
    route: "Lefkada \u2192 Meganisi \u2192 Ithaca",
    /* Mer bleu profond vue falaise — iles au loin */
    image: "https://images.unsplash.com/photo-1700866125903-4188de1cd7e3?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["5-day route"],
    hasPaywall: true,
  },
  {
    id: "bestia-charter",
    type: "collection",
    moods: ["azure"],
    title: "BESTIA Charter",
    subtitle: "Greek islands at 35 knots",
    description: "The only SP110 available for charter worldwide.",
    /* Port bateaux peche — ambiance maritime */
    image: "https://images.unsplash.com/photo-1695759546517-1321abd02b25?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Request availability", href: "/contact" },
    tags: ["yacht"],
  },

  /* ─── STONE & SILENCE ─── */
  {
    id: "epirus-metsovo",
    type: "journey",
    moods: ["stone"],
    title: "Epirus & Metsovo",
    subtitle: "Northern Greece highlands",
    description: "Black pine forests, stone bridges, a 5-star lodge on a private mountain.",
    duration: "4 days",
    /* Coucher soleil ile rochers cote sauvage — paysage brut */
    image: "https://images.unsplash.com/photo-1688765866663-0fd353e7d5df?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["4-day route"],
    hasPaywall: true,
  },
  {
    id: "meteora-delphi",
    type: "journey",
    moods: ["stone", "culture"],
    title: "Meteora & Delphi",
    subtitle: "Central Greece",
    description: "Monasteries suspended in air, the center of the ancient universe.",
    duration: "3 days",
    /* Roches sculptees Sarakiniko — formations minerales (evoque Meteora) */
    image: "https://images.unsplash.com/photo-1667114448126-cb9cc48a8eb8?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["3-day route"],
    hasPaywall: true,
  },
  {
    id: "mani-raw-peloponnese",
    type: "journey",
    moods: ["stone"],
    title: "The Mani, Raw Peloponnese",
    subtitle: "Southern Peloponnese",
    description: "Tower villages, wild coastline, Byzantine chapels in olive groves.",
    duration: "4 days",
    /* Folegandros village blanc sur colline — austere, mineral */
    image: "https://images.unsplash.com/photo-1601293016735-b0cc5d37f8e5?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["4-day route"],
    hasPaywall: true,
  },
  {
    id: "pelion-trail",
    type: "journey",
    moods: ["stone", "wild"],
    title: "Pelion Trail",
    subtitle: "Thessaly coast",
    description: "The mountain of the centaurs. Stone paths, chestnut forests, Aegean below.",
    duration: "3 days",
    /* Chapelle au bout du chemin pierreux, mer — Sifnos */
    image: "https://images.unsplash.com/photo-1719917457945-5d23b86ab532?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["3-day route"],
    hasPaywall: true,
  },

  /* ─── VINE & TABLE ─── */
  {
    id: "truffle-hunt-olympus",
    type: "experience",
    moods: ["vine"],
    title: "Truffle Hunt on Mount Olympus",
    subtitle: "Mount Olympus, Pieria",
    description: "In the footsteps of Zeus, with trained dogs and a local hunter.",
    /* Taverna grecque turquoise tonneau chaises — ambiance locale */
    image: "https://images.unsplash.com/photo-1602008394120-5cc61b4f6ada?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Inquire", href: "/contact" },
    tags: ["experience"],
  },
  {
    id: "cretan-gastronomy",
    type: "journey",
    moods: ["vine"],
    title: "Cretan Gastronomy Immersion",
    subtitle: "Crete",
    description: "A 100-year-old taverna, a grandmother\u2019s recipe, olive oil pressed that morning.",
    duration: "3 days",
    /* Ruelle blanche Mykonos table vue mer — dining al fresco */
    image: "https://images.unsplash.com/photo-1653470348722-158d4b0c33ac?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["3-day route"],
    hasPaywall: true,
  },
  {
    id: "wine-route-macedonia",
    type: "journey",
    moods: ["vine"],
    title: "Wine Route through Macedonia",
    subtitle: "Northern Greece",
    description: "Candlelit vineyard dinners in the foothills. Xinomavro aged in oak.",
    duration: "3 days",
    /* Terrasse Santorini table citronnier vue caldera — diner raffine */
    image: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["3-day route"],
    hasPaywall: true,
  },
  {
    id: "athens-food-walk",
    type: "experience",
    moods: ["vine", "culture"],
    title: "Athens Food Walk",
    subtitle: "Athens central market",
    description: "The central market at dawn. Street food the Athenians actually eat.",
    /* Ruelle neoclassique drapeau grec Plaka — Athenes authentique */
    image: "https://images.unsplash.com/photo-1602769247692-126fdf1f1da6?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Inquire", href: "/contact" },
    tags: ["experience"],
  },

  /* ─── PULSE & GOLD ─── */
  {
    id: "mykonos-vip-week",
    type: "journey",
    moods: ["pulse"],
    title: "Mykonos VIP Week",
    subtitle: "Mykonos",
    description: "Beach clubs by day, private villa by night. Tables, clubs, the full energy.",
    duration: "7 days",
    /* Hotel/villa bord de mer Mykonos — luxe, terrasses, mer */
    image: "https://images.unsplash.com/photo-1692445772695-5a5b88ecb786?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["7-day route"],
    hasPaywall: true,
  },
  {
    id: "bachelor-mykonos",
    type: "journey",
    moods: ["pulse"],
    title: "Bachelor in Mykonos",
    subtitle: "Mykonos",
    description: "The ultimate boys\u2019 trip. VIP access, yacht day, villa with private chef.",
    duration: "3\u20135 days",
    /* Moulins vent ile aride — Mykonos/Tinos signature */
    image: "https://images.unsplash.com/photo-1602175200025-62a10834a37c?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["3-5 day route"],
    hasPaywall: true,
  },
  {
    id: "athens-by-night",
    type: "experience",
    moods: ["pulse", "soft"],
    title: "Athens by Night",
    subtitle: "Athens",
    description: "Rooftop cocktails with Acropolis views, then Psyrri until 4am.",
    /* Monastiraki Athenes vue aerienne — ville animee Acropole fond */
    image: "https://images.unsplash.com/photo-1630933868840-1e9299a5b8dd?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Inquire", href: "/contact" },
    tags: ["experience"],
  },

  /* ─── SOFT PULSE ─── */
  {
    id: "paros-antiparos-slow",
    type: "journey",
    moods: ["soft"],
    title: "Paros & Antiparos Slow",
    subtitle: "Paros \u2192 Antiparos",
    description: "The relaxed Cyclades. Wine bars, fishing villages, Despotiko at sunset.",
    duration: "5 days",
    /* Naoussa Paros port maisons blanches eau calme */
    image: "https://images.unsplash.com/photo-1603906482627-4d88dd3c843e?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["5-day route"],
    hasPaywall: true,
  },
  {
    id: "hydra-weekend",
    type: "journey",
    moods: ["soft", "culture"],
    title: "Hydra Weekend",
    subtitle: "Hydra",
    description: "No cars, no airport. Donkeys, galleries, Leonard Cohen\u2019s house in the distance.",
    duration: "3 days",
    /* Village blanc lune rose Paros/Naxos — ambiance douce */
    image: "https://images.unsplash.com/photo-1663756383115-568e1b0c087d?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["3-day route"],
    hasPaywall: true,
  },
  {
    id: "athens-riviera",
    type: "journey",
    moods: ["soft", "wellness"],
    title: "Athens & Riviera",
    subtitle: "Athens \u2192 Athens Riviera",
    description: "Culture by morning, coastline by afternoon. One & Only Aesthesis at dusk.",
    duration: "4 days",
    /* Architecture blanche minimaliste bord de mer — riviera */
    image: "https://images.unsplash.com/photo-1574708006526-c61cf5fe25b1?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["4-day route"],
    hasPaywall: true,
  },

  /* ─── WILD & FREE ─── */
  {
    id: "cretan-gorges",
    type: "journey",
    moods: ["wild"],
    title: "Cretan Gorges",
    subtitle: "Crete",
    description: "Samaria and beyond. The kind of landscape that resets everything.",
    duration: "4 days",
    /* Sarakiniko roches blanches lunaires — paysage brut */
    image: "https://images.unsplash.com/photo-1693133144613-146eee2307dd?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["4-day route"],
    hasPaywall: true,
  },
  {
    id: "kayaking-pelion",
    type: "experience",
    moods: ["wild"],
    title: "Kayaking the Pelion Coast",
    subtitle: "Pelion, Thessaly",
    description: "Sea caves, wild beaches, lunch on a rock that only kayakers reach.",
    /* Eau turquoise aerien nageurs rochers — aventure aquatique */
    image: "https://images.unsplash.com/premium_photo-1685539973730-28a4fc68ef06?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Inquire", href: "/contact" },
    tags: ["experience"],
  },
  {
    id: "diving-cyclades",
    type: "experience",
    moods: ["wild", "azure"],
    title: "Diving in the Cyclades",
    subtitle: "Cyclades",
    description: "Volcanic reefs, WWII wrecks, visibility that goes on forever.",
    /* Navagio Zakynthos aerien eau cristalline */
    image: "https://images.unsplash.com/photo-1629286521433-dfa4637fbe9a?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Inquire", href: "/contact" },
    tags: ["experience"],
  },

  /* ─── CULTURE & HERITAGE ─── */
  {
    id: "athens-deep",
    type: "journey",
    moods: ["culture"],
    title: "Athens Deep",
    subtitle: "Athens",
    description: "The Acropolis at first light. A private historian. Studios where marble still becomes sculpture.",
    duration: "4 days",
    /* Acropole coucher soleil panoramique */
    image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["4-day route"],
    hasPaywall: true,
  },
  {
    id: "tracing-ancestry",
    type: "experience",
    moods: ["culture"],
    title: "Tracing Ancestry",
    subtitle: "Custom itinerary",
    description: "We\u2019ve retraced a grandfather\u2019s WWII footsteps with a university historian.",
    /* Theatre Herode Atticus Athenes — heritage antique */
    image: "https://images.unsplash.com/photo-1635672097594-a0cbb7aa3a9e?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Inquire", href: "/contact" },
    tags: ["custom"],
  },
  {
    id: "byzantine-peloponnese",
    type: "journey",
    moods: ["culture", "stone"],
    title: "Byzantine Peloponnese",
    subtitle: "Mystras \u2192 Monemvasia \u2192 Nafplio",
    description: "Stone cities, sea fortresses, the weight of centuries.",
    duration: "3 days",
    route: "Mystras \u2192 Monemvasia \u2192 Nafplio",
    /* Ruelle neoclassique drapeau grec — Grece historique */
    image: "https://images.unsplash.com/photo-1602769247692-126fdf1f1da6?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["3-day route"],
    hasPaywall: true,
  },

  /* ─── WELLNESS & SLOW ─── */
  {
    id: "peloponnese-mountain-retreat",
    type: "journey",
    moods: ["wellness"],
    title: "Peloponnese Mountain Retreat",
    subtitle: "Arcadia",
    description: "A mountain resort where time runs differently.",
    duration: "4 days",
    /* Terrasse blanche Santorini vue caldera serenite */
    image: "https://images.unsplash.com/photo-1678266587841-ca65ff1b5b1d?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["4-day route"],
    hasPaywall: true,
  },
  {
    id: "yoga-sea-cyclades",
    type: "journey",
    moods: ["wellness", "azure"],
    title: "Yoga & Sea, Cyclades",
    subtitle: "Cyclades",
    description: "Morning practice on a clifftop. Afternoon in the water. Nothing else.",
    duration: "5 days",
    /* Santorini blanc escaliers mer bleue profonde — calme absolu */
    image: "https://images.unsplash.com/photo-1618500031461-a5fc01e96763?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Get the route", href: "#" },
    tags: ["5-day route"],
    hasPaywall: true,
  },
  {
    id: "athens-riviera-wellness",
    type: "experience",
    moods: ["wellness", "soft"],
    title: "Athens Riviera Wellness",
    subtitle: "Athens Riviera",
    description: "Hammam, ice therapy, sea air. Designed to bring you back to yourself.",
    duration: "3 days",
    /* Femme piscine cocktail luxe — wellness premium */
    image: "https://images.unsplash.com/photo-1620674972346-1648f7388d46?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Inquire", href: "/contact" },
    tags: ["experience"],
  },

  /* ─── EVENTS ─── */
  {
    id: "corporate-retreat-athens",
    type: "event",
    moods: ["culture", "soft"],
    title: "Corporate Retreat Athens",
    subtitle: "Athens",
    description: "Strategy sessions in converted neoclassicals. Team dinners on rooftops.",
    /* Athenes Lycabette vue ville — perspective urbaine */
    image: "https://images.unsplash.com/photo-1590068560361-87d6b26e4017?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Plan your event", href: "/contact" },
    tags: ["event", "corporate"],
  },
  {
    id: "wedding-santorini",
    type: "event",
    moods: ["azure"],
    title: "Destination Wedding Santorini",
    subtitle: "Santorini",
    description: "Caldera ceremony, reception in a candlelit vineyard.",
    /* Santorini domes bleus iconiques — LE mariage de reve */
    image: "https://images.unsplash.com/photo-1678266561093-324802646fb2?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Plan your event", href: "/contact" },
    tags: ["event", "wedding"],
  },
  {
    id: "wedding-crete",
    type: "event",
    moods: ["vine", "stone"],
    title: "Destination Wedding Crete",
    subtitle: "Crete",
    description: "Venetian fortresses, olive groves, a feast under the Cretan sky.",
    /* Santorini caldera barque coucher soleil — romantique */
    image: "https://images.unsplash.com/photo-1638990404606-946c53e4899e?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Plan your event", href: "/contact" },
    tags: ["event", "wedding"],
  },
  {
    id: "celebration-mykonos",
    type: "event",
    moods: ["pulse"],
    title: "Private Celebration Mykonos",
    subtitle: "Mykonos",
    description: "A birthday at a beachfront villa. DJ, private chef, sunrise swim.",
    /* Santorini Fira soir terrasses illuminees — fete */
    image: "https://images.unsplash.com/premium_photo-1697729900945-598459160f7b?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Plan your event", href: "/contact" },
    tags: ["event", "celebration"],
  },
  {
    id: "bachelorette-paros",
    type: "event",
    moods: ["soft"],
    title: "Bachelorette Paros",
    subtitle: "Paros",
    description: "Wine tasting, boat day, dinner on the harbor. Festive but not frantic.",
    /* Terrasse Santorini table vue caldera — elegance decontractee */
    image: "https://images.unsplash.com/photo-1612713162479-10014668964d?auto=format&fit=crop&w=900&q=80",
    cta: { label: "Plan your event", href: "/contact" },
    tags: ["event", "bachelorette"],
  },
];

/* ═══════════════════════════════════════════════════════
   VILLAS — Summer 2026 collection
   ═══════════════════════════════════════════════════════ */

export const villas: Villa[] = [
  {
    id: "aegean-essence",
    name: "Aegean Essence",
    beds: 6, guests: 11,
    location: "Agios Nikolaos, Crete",
    region: "Crete",
    visibility: "public",
    highlight: "Heated pool 60 m\u00B2, B&O cinema, sea access",
    description: "A contemporary retreat perched above the Cretan coast. Floor-to-ceiling glass frames the Mirabello Gulf from every room.",
    moods: ["azure"],
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=900&q=80",
    features: ["Heated pool 60 m\u00B2", "B&O cinema room", "Private sea access", "Chef kitchen"],
  },
  {
    id: "aegean-residence",
    name: "Aegean Residence",
    beds: 7, guests: 14,
    location: "Porto Heli",
    region: "Peloponnese",
    visibility: "public",
    highlight: "750 m\u00B2, tennis, private beach, infinity pool",
    description: "A sprawling estate on the Argolic Gulf. Tennis court, private beach, and an infinity pool that seems to pour into the sea.",
    moods: ["azure"],
    /* Architecture blanche minimaliste bord de mer */
    image: "https://images.unsplash.com/photo-1574708006526-c61cf5fe25b1?auto=format&fit=crop&w=900&q=80",
    features: ["750 m\u00B2 living", "Tennis court", "Private beach", "Infinity pool"],
  },
  {
    id: "anavissos-lux",
    name: "Anavissos Lux",
    beds: 6, guests: 12,
    location: "Athens Riviera",
    region: "Athens Riviera",
    visibility: "off-market",
    highlight: "5 pools, wellness, private chef included",
    description: "An ultra-private compound on the Athenian Riviera. Five pools, a full wellness wing, and a resident chef.",
    moods: ["wellness"],
    /* Femme piscine cocktail luxe */
    image: "https://images.unsplash.com/photo-1620674972346-1648f7388d46?auto=format&fit=crop&w=900&q=80",
    features: ["5 private pools", "Full wellness spa", "Private chef included", "Concierge"],
  },
  {
    id: "edge-of-sea",
    name: "Edge of Sea",
    beds: 6, guests: 12,
    location: "Agios Nikolaos, Crete",
    region: "Crete",
    visibility: "public",
    highlight: "Private peninsula, smart home, infinity pool 70 m\u00B2",
    description: "Occupying its own peninsula, this architectural statement blends into the Cretan rock. Smart-home technology throughout.",
    moods: ["azure"],
    /* Porte Santorini caldera brumeuse — archi face mer */
    image: "https://images.unsplash.com/photo-1507418828307-8e909173e254?auto=format&fit=crop&w=900&q=80",
    features: ["Private peninsula", "Infinity pool 70 m\u00B2", "Smart home", "Helipad access"],
  },
  {
    id: "mykonos-retreat",
    name: "Mykonos Retreat",
    beds: 7, guests: 16,
    location: "Mykonos (Aleomandra)",
    region: "Cyclades",
    visibility: "off-market",
    highlight: "Delos view, wellness, cinema, private beach",
    description: "Aleomandra\u2019s best-kept secret. Unobstructed views of Delos, a full wellness floor, and a private cove below.",
    moods: ["pulse"],
    /* Hotel/villa bord mer Mykonos */
    image: "https://images.unsplash.com/photo-1692445772695-5a5b88ecb786?auto=format&fit=crop&w=900&q=80",
    features: ["Delos panorama", "Private cinema", "Wellness floor", "Private cove"],
  },
  {
    id: "seafront-sanctuary",
    name: "Seafront Sanctuary",
    beds: 7, guests: 14,
    location: "Porto Heli",
    region: "Peloponnese",
    visibility: "public",
    highlight: "Beachfront, 3 levels, sport facilities, playground",
    description: "Three levels cascading to the waterfront. Designed for families who want space, sea, and a full sports wing.",
    moods: ["azure"],
    /* Vase blanc escalier minimalisme — archi elegante */
    image: "https://images.unsplash.com/premium_photo-1680799222787-15b5859113b1?auto=format&fit=crop&w=900&q=80",
    features: ["Beachfront", "3 levels", "Sports wing", "Children\u2019s playground"],
  },
  {
    id: "silent-coast",
    name: "Silent Coast",
    beds: 6, guests: 12,
    location: "Porto Heli",
    region: "Peloponnese",
    visibility: "public",
    highlight: "New build, sea & mountain views",
    description: "A newly completed residence where clean lines meet the Peloponnese coastline. Sea to one side, mountains to the other.",
    moods: ["azure"],
    /* Escalier blanc ciel bleu Cyclades — minimalisme */
    image: "https://images.unsplash.com/photo-1606144330720-7ee2cec6c86b?auto=format&fit=crop&w=900&q=80",
    features: ["New construction", "Sea views", "Mountain views", "Minimalist design"],
  },
  {
    id: "villa-terrakota",
    name: "Villa Terrakota",
    beds: 6, guests: 12,
    location: "Meganisi (Ionian)",
    region: "Ionian",
    visibility: "off-market",
    highlight: "Stone/wood/terrazzo, 10,000 m\u00B2 olive grove",
    description: "Stone, wood, and terrazzo set in 10,000 square metres of olive groves. Meganisi at its most private.",
    moods: ["stone"],
    /* Maison blanche plage ile — simple, naturel */
    image: "https://images.unsplash.com/photo-1509360667180-04103d4fbf5e?auto=format&fit=crop&w=900&q=80",
    features: ["10,000 m\u00B2 grounds", "Olive grove", "Stone & terrazzo", "Private dock"],
  },
  {
    id: "white-serenity",
    name: "White Serenity",
    beds: 5, guests: 10,
    location: "Porto Heli (Agios Emilianos)",
    region: "Peloponnese",
    visibility: "off-market",
    highlight: "Infinity 70 ft, atrium, botanical garden, spa",
    description: "An atrium villa wrapped in botanical gardens, with a 70-foot infinity pool and a private spa overlooking the bay.",
    moods: ["wellness", "soft"],
    /* Vue caldera murs blancs bateaux — serenite */
    image: "https://images.unsplash.com/premium_photo-1675419760216-87c82c6c2223?auto=format&fit=crop&w=900&q=80",
    features: ["70 ft infinity pool", "Atrium design", "Botanical garden", "Private spa"],
  },
];

/* ═══════════════════════════════════════════════════════
   YACHT — BESTIA MY
   ═══════════════════════════════════════════════════════ */

export const yacht: YachtInfo = {
  name: "BESTIA",
  model: "San Lorenzo SP110",
  length: "33 m",
  cabins: 4,
  guests: 8,
  crew: 5,
  year: 2024,
  base: "Athens",
  description: "The only San Lorenzo SP110 available for charter worldwide. Compasso d\u2019Oro awarded design, built for speed and silence.",
  moods: ["azure"],
  /* Port bateaux peche */
  image: "https://images.unsplash.com/photo-1695759546517-1321abd02b25?auto=format&fit=crop&w=900&q=80",
  features: [
    "33 metres",
    "4 cabins, 8 guests",
    "Crew of 5",
    "35 knots cruising speed",
    "Compasso d\u2019Oro 2024",
    "Based in Athens, all Greek waters",
  ],
};

/* ═══════════════════════════════════════════════════════
   TAB FILTERS — for the Explore section
   ═══════════════════════════════════════════════════════ */

export const exploreTabs: { id: string; label: string; type?: ContentType }[] = [
  { id: "all", label: "All" },
  { id: "journey", label: "Journeys", type: "journey" },
  { id: "experience", label: "Experiences", type: "experience" },
  { id: "collection", label: "Collection", type: "collection" },
  { id: "event", label: "Events", type: "event" },
];

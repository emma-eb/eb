/* ═══════════════════════════════════════════════════════
   VILLA DETAILS — Fiche villa pages (/collection/[slug])
   Kept separate from catalogue.ts which drives the explore
   grid with lighter shapes.
   ═══════════════════════════════════════════════════════ */

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface VillaDetail {
  slug: string;
  name: string;
  location: string;
  region: string;

  /* "villa" (default) or "yacht" — drives section labels and key-facts grid */
  kind?: "villa" | "yacht";

  /* Card teaser on /collection */
  card: {
    tagline: string;
    specs: string;
    priceFrom: string;
    combinableWith?: string;
  };

  /* Page sections */
  introLabel?: string;
  tagline?: string;
  /* Optional badge displayed in hero (e.g. "New for 2026") */
  badge?: string;
  intro: string;
  theHouse: string;
  theLocation: string;

  /* Key facts strip — villa uses size/bedrooms/bathrooms/guests, yacht uses length/cabins/guests/crew/cruise */
  keyFacts: {
    size?: string;
    bedrooms?: string;
    bathrooms?: string;
    guests: string;
    minStay: string;
    priceFrom: string;
    /* Yacht-specific */
    length?: string;
    cabins?: string;
    crew?: string;
    cruise?: string;
  };

  /* Inside the villa — grouped amenities */
  amenities?: {
    outdoor: string[];
    residence: string[];
  };

  /* Adjacent villa cross-link (optional — only for villas with sister/cross-island recommendation) */
  adjacent?: {
    slug: string;
    name: string;
    line: string;
  };

  /* Seasonal windows */
  seasons: { label: string; window: string }[];

  /* Services on request (rendered as dot-separated line) */
  services: string[];

  /* Optional embedded video (YouTube ID) — rendered between gallery and architecture section */
  videoYoutubeId?: string;

  /* Media */
  cover: string;
  gallery: GalleryImage[];

  /* Inquiry */
  mailtoSubject: string;
}

const youAndMe: VillaDetail = {
  slug: "you-and-me",
  name: "Villa You & Me",
  location: "Aleomandra, Mykonos",
  region: "Mykonos",

  card: {
    tagline: "A private seafront estate on Mykonos, above the Aegean.",
    specs: "Up to 20 Guests · Seafront",
    priceFrom: "From €6,500 / night",
    combinableWith: "Combinable with Villa Celestia",
  },

  introLabel: "A Seafront Estate",
  tagline: "Ten rooms above the open Aegean.",
  intro:
    "A 900 m² residence on the western coast of Mykonos, facing the open Aegean. Two levels, two independent wings. Ten bedrooms, twin infinity pools blending into the horizon. Designed for extended families and private gatherings.",

  theHouse:
    "Natural materials, earthy tones, architecture in harmony with the landscape. Each wing runs independently, its own kitchen, its own living area. Two jacuzzis, an open-air fireplace for the evenings, a private gym. Ten en-suite bedrooms, nothing in excess.",

  theLocation:
    "The quieter side of Mykonos, where the Aegean opens out and sunset is a daily fixture. Minutes by car from Chora, the harbour, and the tables worth the drive. Close to everything. Not of it.",

  keyFacts: {
    size: "900 m²",
    bedrooms: "10",
    bathrooms: "10 en-suite",
    guests: "Up to 20",
    minStay: "3 nights",
    priceFrom: "From €6,500 / night",
  },

  amenities: {
    outdoor: [
      "2 infinity pools",
      "2 jacuzzis",
      "Open-air fireplace",
      "BBQ area",
      "Expansive sea-view terraces",
    ],
    residence: [
      "10 en-suite bedrooms over two levels",
      "Two independent living wings",
      "Two fully equipped kitchens",
      "Private gym",
      "Daily housekeeping",
      "Air conditioning throughout",
      "High-speed Wi-Fi, smart TV, Sonos",
      "Laundry, safes, welcome refreshments",
    ],
  },

  adjacent: {
    slug: "celestia",
    name: "Villa Celestia",
    line: "Villa Celestia stands next door. The two residences can open together for up to 38 guests on the same dates.",
  },

  seasons: [
    { label: "Late Spring", window: "May–early June" },
    { label: "Summer", window: "mid-June through August" },
    { label: "Golden Season", window: "September–October" },
  ],

  services: [
    "Private chef",
    "Private transfers",
    "Yacht charter",
    "Reservations at the beach clubs and restaurants that matter",
    "Full event production: DJ, florist, event manager",
  ],

  cover: "/villas/you-and-me/cover.jpg",
  gallery: [
    { src: "/villas/you-and-me/gallery-01.jpg", alt: "Villa You & Me seen from above, estate and twin pools" },
    { src: "/villas/you-and-me/gallery-03.jpg", alt: "The residence and long infinity pool from the terrace" },
    { src: "/villas/you-and-me/gallery-04.jpg", alt: "Villa facade opening onto the pool and the Aegean" },
    { src: "/villas/you-and-me/gallery-05.jpg", alt: "Aerial view of twin pools and central sunken lounge with fire pit" },
    { src: "/villas/you-and-me/gallery-06.jpg", alt: "Stone guest pavilion beside the pool" },
    { src: "/villas/you-and-me/gallery-07.jpg", alt: "Outdoor pergola dining under bamboo, sea view lounges" },
    { src: "/villas/you-and-me/gallery-08.jpg", alt: "Long outdoor dining table beneath a bamboo pergola and stone wall" },
    { src: "/villas/you-and-me/gallery-09.jpg", alt: "Rooftop lounge with open-air fire pit, Mykonos view beyond" },
    { src: "/villas/you-and-me/gallery-10.jpg", alt: "Private gym opening onto the terrace and the sea" },
    { src: "/villas/you-and-me/gallery-11.jpg", alt: "Evening dining bar overlooking Mykonos harbour lights" },
    { src: "/villas/you-and-me/gallery-12.jpg", alt: "The villa illuminated at dusk, pools and open kitchen glowing" },
    { src: "/villas/you-and-me/gallery-13.jpg", alt: "Plunge pool set in stone, Aegean opening beyond the terrace" },
    { src: "/villas/you-and-me/gallery-14.jpg", alt: "En-suite bedroom with sea view and stone-wall bathroom" },
    { src: "/villas/you-and-me/gallery-15.jpg", alt: "Bedroom opening onto a private patio carved into the rock" },
    { src: "/villas/you-and-me/gallery-04.jpg", alt: "Villa facade opening onto the pool and the Aegean" },
  ],

  mailtoSubject: "Inquiry: Villa You & Me",
};

const celestia: VillaDetail = {
  slug: "celestia",
  name: "Villa Celestia",
  location: "Aleomandra, Mykonos",
  region: "Mykonos",

  card: {
    tagline: "A brand-new stone villa on Mykonos, 200m from the sea.",
    specs: "950 m² · Up to 18 Guests · Seafront",
    priceFrom: "From €7,300 / night",
    combinableWith: "Combinable with Villa You & Me",
  },

  introLabel: "A Seafront Residence",
  badge: "New for 2026",
  tagline: "Stone, light, and the open sea.",
  intro:
    "A brand-new 950 m² stone villa on Mykonos, 200 metres from Glyfadi Beach. Built to bioclimatic principles. Nine en-suite bedrooms across two levels, twin infinity pools, a home cinema, an indoor gym. Designed around the light and seamless indoor-outdoor living.",

  theHouse:
    "Natural stone, modern luxury, bioclimatic design. Two indoor lounges, four outdoor. A fully equipped kitchen, a home cinema, an indoor gym. Twin infinity pools across two levels, two outdoor jacuzzis. A fire pit for evening gatherings. Nine en-suite bedrooms, six on the first level, three masters above.",

  theLocation:
    "A prime corner of Mykonos, 200 metres from Glyfadi Beach. Tucked away from the busier corners, yet minutes from the sea. Quiet, exclusive, and never crowded.",

  keyFacts: {
    size: "950 m²",
    bedrooms: "9",
    bathrooms: "9 en-suite",
    guests: "Up to 18",
    minStay: "3 nights",
    priceFrom: "From €7,300 / night",
  },

  amenities: {
    outdoor: [
      "2 infinity pools across two levels",
      "2 outdoor jacuzzis",
      "Outdoor fire pit",
      "BBQ facilities",
      "Multiple lounge & sunbathing areas",
      "Expansive sea-view terraces",
    ],
    residence: [
      "9 en-suite bedrooms over two levels",
      "2 indoor lounges, 4 outdoor lounges",
      "Fully equipped kitchen",
      "Home cinema",
      "Indoor gym",
      "Sonos sound system",
      "Daily housekeeping",
      "Air conditioning throughout",
      "High-speed Wi-Fi, cable & smart TV",
      "Laundry, welcome refreshments",
    ],
  },

  adjacent: {
    slug: "you-and-me",
    name: "Villa You & Me",
    line: "Villa You & Me stands next door. The two residences can open together for up to 38 guests on the same dates.",
  },

  seasons: [
    { label: "Late Spring", window: "May–early June" },
    { label: "Summer", window: "mid-June through August" },
    { label: "Golden Season", window: "September–October" },
  ],

  services: [
    "Private chef",
    "Private transfers",
    "Yacht charter",
    "Reservations at the beach clubs and restaurants that matter",
    "Full event production: DJ, florist, event manager",
  ],

  cover: "/villas/celestia/cover.jpg",
  gallery: [
    { src: "/villas/celestia/gallery-01.jpg", alt: "Villa Celestia seen from above at dusk, Mykonos bay beyond" },
    { src: "/villas/celestia/gallery-02.jpg", alt: "Long infinity pool opening onto the Aegean" },
    { src: "/villas/celestia/gallery-03.jpg", alt: "Pool and sunken lounge set against stone architecture" },
    { src: "/villas/celestia/gallery-04.jpg", alt: "Living room opening on the pool and sea" },
    { src: "/villas/celestia/gallery-05.jpg", alt: "Living room with wide sea window" },
    { src: "/villas/celestia/gallery-06.jpg", alt: "Kitchen and dining table, clean contemporary lines" },
    { src: "/villas/celestia/gallery-07.jpg", alt: "Outdoor pergola dining with sea view" },
    { src: "/villas/celestia/gallery-08.jpg", alt: "Private indoor gym with cable machine, treadmill and weights" },
    { src: "/villas/celestia/gallery-09.jpg", alt: "Second lounge opening onto the pool" },
    { src: "/villas/celestia/gallery-10.jpg", alt: "Bedroom with garden view through glass" },
    { src: "/villas/celestia/gallery-11.jpg", alt: "Aerial of Villa Celestia at dusk, twin pools illuminated across the levels" },
    { src: "/villas/celestia/gallery-12.jpg", alt: "Evening lounge, warm tones by the stone wall" },
    { src: "/villas/celestia/gallery-13.jpg", alt: "Sun loungers under bamboo pergola, infinity pool and Mykonos bay beyond" },
    { src: "/villas/celestia/gallery-14.jpg", alt: "Twin pools with sun loungers and central sunken lounge" },
    { src: "/villas/celestia/gallery-14.jpg", alt: "Twin pools with sun loungers and central sunken lounge" },
  ],

  mailtoSubject: "Inquiry: Villa Celestia",
};

const esmeralda: VillaDetail = {
  slug: "esmeralda",
  name: "Villa Esmeralda",
  location: "Mykonos",
  region: "Mykonos",

  card: {
    tagline: "A beachfront estate on Mykonos, a minute from the sand.",
    specs: "600 m² · 10 Bed · Up to 20 Guests · Beachfront",
    priceFrom: "From €4,515 / night",
  },

  introLabel: "A Beachfront Estate",
  tagline: "A minute from the sand. Delos in the distance.",
  intro:
    "A 600 m² beachfront estate on Mykonos, a minute from the sand of a quiet bay. Across three floors, ten en-suite bedrooms split into a main house and a separate lower wing. Two pools, two kitchens, panoramic views to Delos and the open Aegean.",

  theHouse:
    "Cycladic minimalism layered with handcrafted detail. The main house spans two floors with six bedrooms, the living areas, and the main kitchen, opening onto the terrace and the infinity pool. Top-floor suites each have their own jacuzzi, one with a private terrace. The lower wing has its own entrance, four further bedrooms, a second kitchen, and a second pool, for guests who want their own rhythm. Marble bathrooms, a fireplace, a barbecue, and several lounges and dining areas indoors and out.",

  theLocation:
    "Beachfront on Mykonos, a minute from the sand of a secluded bay. Ornos and Agios Ioannis a short drive, Mykonos Town fifteen minutes away. Sunsets that turn the Aegean into liquid gold.",

  keyFacts: {
    size: "600 m²",
    bedrooms: "10",
    bathrooms: "10 en-suite",
    guests: "Up to 20",
    minStay: "3 nights",
    priceFrom: "From €4,515 / night",
  },

  amenities: {
    outdoor: [
      "Infinity pool over the bay",
      "Second pool on the lower wing",
      "Outdoor jacuzzis on the top-floor suites",
      "BBQ and outdoor dining",
      "Multiple sun-deck and lounge areas",
      "Beachfront access",
    ],
    residence: [
      "10 en-suite bedrooms across three floors",
      "Main kitchen and second kitchen on the lower wing",
      "Marble bathrooms",
      "Fireplace",
      "Daily housekeeping",
      "Welcome wine and fruit basket on arrival",
      "Air conditioning, individually controlled",
      "Soundproof windows",
      "High-speed Wi-Fi, smart TVs",
      "Beach and pool towels",
    ],
  },

  seasons: [
    { label: "Late Spring", window: "May to early June" },
    { label: "Summer", window: "mid-June through August" },
    { label: "Golden Season", window: "September to October" },
  ],

  services: [
    "Private chef",
    "Private transfers",
    "Yacht charter",
    "Reservations at the beach clubs and restaurants that matter",
    "Private guard on site",
  ],

  cover: "/villas/esmeralda/cover.jpg",
  gallery: [
    { src: "/villas/esmeralda/gallery-01.jpg", alt: "Villa Esmeralda exterior with the infinity pool and lower-wing pool, golden-hour light on stone" },
    { src: "/villas/esmeralda/gallery-02.jpg", alt: "Villa Esmeralda from the bay, the cove and the open Aegean below" },
    { src: "/villas/esmeralda/gallery-03.jpg", alt: "Sun loungers and infinity pool, the sun setting over the Aegean" },
    { src: "/villas/esmeralda/gallery-04.jpg", alt: "Villa Esmeralda interior detail" },
    { src: "/villas/esmeralda/gallery-05.jpg", alt: "Private suite plunge pool, the sea opening beyond" },
    { src: "/villas/esmeralda/gallery-06.jpg", alt: "Pergola and pool framed by cacti and flowering plants" },
    { src: "/villas/esmeralda/gallery-07.jpg", alt: "Aerial view of Villa Esmeralda showing both pools and the lower wing" },
    { src: "/villas/esmeralda/gallery-08.jpg", alt: "Villa Esmeralda interior detail" },
    { src: "/villas/esmeralda/gallery-09.jpg", alt: "Bedroom suite with sea view" },
    { src: "/villas/esmeralda/gallery-10.jpg", alt: "Villa Esmeralda detail" },
    { src: "/villas/esmeralda/gallery-11.jpg", alt: "Main pool reflecting the villa at twilight" },
    { src: "/villas/esmeralda/gallery-12.jpg", alt: "Villa Esmeralda interior detail" },
    { src: "/villas/esmeralda/gallery-13.jpg", alt: "Villa Esmeralda detail" },
    { src: "/villas/esmeralda/gallery-14.jpg", alt: "Villa Esmeralda detail" },
    { src: "/villas/esmeralda/gallery-15.jpg", alt: "Alfresco dining table set under the pergola at sunset" },
  ],

  mailtoSubject: "Inquiry: Villa Esmeralda",
};

const tourlosBreeze: VillaDetail = {
  slug: "tourlos-breeze",
  name: "Villa Tourlos Breeze",
  location: "Tourlos, Mykonos",
  region: "Mykonos",

  card: {
    tagline: "A hillside villa over the harbour of Mykonos, the Cyclades at your feet.",
    specs: "840 m² · 8 Bed · Up to 16 Guests · Sea View",
    priceFrom: "From €5,015 / night",
  },

  introLabel: "A Hillside Villa",
  tagline: "Tourlos, the harbour, the Cyclades unfolding from the terrace.",
  intro:
    "An 840 m² villa set on 4.6 acres above Tourlos, on the western side of Mykonos. Eight bedrooms across four levels, an infinity pool over the harbour, panoramic views to Delos, Rhenia, Tinos, Syros, and Paros. Designed without trends. Minimalist, cinematic, built to age well.",

  theHouse:
    "Four levels descending the hillside. The main level opens onto a contemporary living room, a minimalist kitchen under a sculptural skylight, a master bedroom with an outsized dressing room and a private gym, and an infinity pool over the bay. The upper level holds a guest suite with independent entrance, two further bedrooms, a second living room and kitchenette. Below, four further bedrooms with sea views. The eighth bedroom sits on its own level, almost touching the water, opening onto a circular lounge with an outdoor fireplace.",

  theLocation:
    "Tourlos, on the western side of Mykonos, looking over the harbour and the chora beyond. Delos, Rhenia, Tinos, Syros and Paros all visible from the terrace.",

  keyFacts: {
    size: "840 m²",
    bedrooms: "8",
    bathrooms: "8 en-suite",
    guests: "Up to 16",
    minStay: "3 nights",
    priceFrom: "From €5,015 / night",
  },

  amenities: {
    outdoor: [
      "Infinity pool over the harbour",
      "King-sized sunbeds and pool sunbeds",
      "Outdoor hot tub",
      "BBQ facilities",
      "Multiple alfresco dining and lounge areas",
      "Outdoor fireplace at the eighth-bedroom level",
    ],
    residence: [
      "8 bedrooms across four levels",
      "Indoor gym",
      "Two living rooms, a main kitchen and a kitchenette",
      "Smart home and sound system",
      "Air conditioning, individually controlled",
      "Daily housekeeping",
      "Welcome refreshments",
      "Technical support on call",
      "Wi-Fi, satellite TV",
      "Minibar in suites",
    ],
  },

  seasons: [
    { label: "Late Spring", window: "May to early June" },
    { label: "Summer", window: "mid-June through August" },
    { label: "Golden Season", window: "September to October" },
  ],

  services: [
    "Private chef",
    "Airport and port transfers",
    "Yacht charter",
    "Concierge",
    "Reservations at the beach clubs and restaurants that matter",
  ],

  cover: "/villas/tourlos-breeze/cover.jpg",
  gallery: [
    { src: "/villas/tourlos-breeze/gallery-01.jpg", alt: "Pink and gold sunset over the canopied daybeds and infinity pool" },
    { src: "/villas/tourlos-breeze/gallery-02.jpg", alt: "Villa Tourlos Breeze illuminated at twilight against the Mykonian hillside" },
    { src: "/villas/tourlos-breeze/gallery-03.jpg", alt: "Daytime terrace and lounge with Mykonos chora panorama" },
    { src: "/villas/tourlos-breeze/gallery-04.jpg", alt: "Infinity pool and canopied daybeds in full daylight" },
    { src: "/villas/tourlos-breeze/gallery-05.jpg", alt: "Covered terrace lounge with panoramic sea view" },
    { src: "/villas/tourlos-breeze/gallery-06.jpg", alt: "Stone fire pit lounge at night, the lights of Mykonos town below" },
    { src: "/villas/tourlos-breeze/gallery-07.jpg", alt: "Outdoor kitchen and dining area at twilight beside the pool" },
    { src: "/villas/tourlos-breeze/gallery-08.jpg", alt: "Sunken outdoor lounge with fire pit and outdoor screen" },
    { src: "/villas/tourlos-breeze/gallery-09.jpg", alt: "Master bedroom suite with wide sea view and balcony" },
    { src: "/villas/tourlos-breeze/gallery-10.jpg", alt: "Private indoor gym with cardio and weight equipment" },
    { src: "/villas/tourlos-breeze/gallery-11.jpg", alt: "Bedroom with grey textile headboard and morning sea view" },
    { src: "/villas/tourlos-breeze/gallery-12.jpg", alt: "Lower-level pool and bar at night, set into the stone" },
    { src: "/villas/tourlos-breeze/gallery-13.jpg", alt: "Earth-toned bathroom with circular backlit mirror and rattan vanity" },
    { src: "/villas/tourlos-breeze/gallery-14.jpg", alt: "Aerial of the villa cascading down the Tourlos hillside" },
    { src: "/villas/tourlos-breeze/gallery-15.jpg", alt: "Villa Tourlos Breeze interior detail" },
  ],

  mailtoSubject: "Inquiry: Villa Tourlos Breeze",
};

const santoriniEstate: VillaDetail = {
  slug: "santorini-estate",
  name: "Santorini Estate",
  location: "Messaria, Santorini",
  region: "Santorini",

  card: {
    tagline: "A two-acre estate on the edge of the Santorini caldera.",
    specs: "5 Suites · Up to 10 Guests · Caldera View",
    priceFrom: "From €7,615 / night",
  },

  introLabel: "A Caldera Estate",
  tagline: "A thousand feet above the caldera, the volcano at the horizon.",
  intro:
    "A private estate on a 1,000-foot cliff above the Santorini caldera, in the Messaria area of the island. Two acres, five independent suites, infinity pools, a spa, an outdoor cinema, and a private chapel on the grounds. Interiors by Paola Navone, layered in local stone, Rubelli of Venice fabrics, and Stella of Italy fixtures. A resident host, an executive chef.",

  theHouse:
    "Five independent suites laid out across the estate, each with its own private outdoor space. Three one-bedroom suites and a separate two-bedroom bungalow adjacent to the spa. Floating fireplaces, heated plunge pools, outdoor whirlpools, radiant heated floors throughout. White and dark grey interiors, walls inlaid with local Santorini stone. The sea and the volcano provide the rest of the palette.",

  theLocation:
    "On the edge of the caldera, in the Messaria area of Santorini. The volcano of Nea Kameni, the open Aegean, and the most photographed sunsets in the Cyclades, watched from the estate's own terraces rather than the crowded viewpoints.",

  keyFacts: {
    size: "8,000 m² estate",
    bedrooms: "5",
    bathrooms: "5 en-suite",
    guests: "Up to 10",
    minStay: "3 nights",
    priceFrom: "From €7,615 / night",
  },

  amenities: {
    outdoor: [
      "Infinity swimming pool with caldera view",
      "Second swimming pool",
      "3 outdoor jacuzzis",
      "Pool cave",
      "Outdoor kitchen with BBQ and wood-fire pizza oven",
      "Firepit",
      "Outdoor cinema",
      "Private chapel on the grounds",
      "Shaded dining area, multiple lounge zones",
    ],
    residence: [
      "5 en-suite suites with floating fireplaces",
      "Heated plunge pools across the suites",
      "Spa with hammam, massage room, rain shower",
      "Wine cellar with extensive list",
      "Resident host and executive chef",
      "Daily housekeeping",
      "Radiant heated floors",
      "Air conditioning throughout",
      "Smart TVs, Wi-Fi",
      "Welcome refreshments",
    ],
  },

  seasons: [
    { label: "Late Spring", window: "May to early June" },
    { label: "Summer", window: "mid-June through August" },
    { label: "Open Season", window: "April through November" },
  ],

  services: [
    "Resident host",
    "Executive chef and team",
    "Spa: massage and beauty treatments",
    "Wine cellar with extensive list",
    "Private candlelight dinners arranged across the estate",
    "Airport and port transfers",
    "Boat trips and yacht charter",
  ],

  cover: "/villas/santorini-estate/cover.jpg",
  gallery: [
    { src: "/villas/santorini-estate/gallery-01.jpg", alt: "Two chairs at the infinity pool, the Santorini caldera beyond" },
    { src: "/villas/santorini-estate/gallery-02.jpg", alt: "Breakfast table set on the terrace, caldera and Aegean opening behind" },
    { src: "/villas/santorini-estate/gallery-03.jpg", alt: "Outdoor kitchen and bamboo pergola, breakfast in preparation" },
    { src: "/villas/santorini-estate/gallery-04.jpg", alt: "White Cycladic suite, doors open onto a private terrace and the sea" },
    { src: "/villas/santorini-estate/gallery-05.jpg", alt: "Bedroom with vintage industrial mirrors, plunge pool framed at the door" },
    { src: "/villas/santorini-estate/gallery-06.jpg", alt: "Candlelit dinner table, Santorini sunset through the open doors" },
    { src: "/villas/santorini-estate/gallery-07.jpg", alt: "Outdoor lounge in volcanic stone, daybed shaded for siesta" },
    { src: "/villas/santorini-estate/gallery-08.jpg", alt: "Living room with sculptural latticed screen and floating fireplace" },
    { src: "/villas/santorini-estate/gallery-09.jpg", alt: "Pergola lounge with blue cushions, wildflowers in the foreground" },
    { src: "/villas/santorini-estate/gallery-10.jpg", alt: "White Cycladic bathroom with curved plaster forms" },
    { src: "/villas/santorini-estate/gallery-11.jpg", alt: "Daybed and infinity pool at golden hour" },
    { src: "/villas/santorini-estate/gallery-12.jpg", alt: "Outdoor cinema and firepit at sunset, the Aegean beyond" },
    { src: "/villas/santorini-estate/gallery-13.jpg", alt: "Private wine cellar with tasting bench" },
    { src: "/villas/santorini-estate/gallery-14.jpg", alt: "Aerial of the estate above the caldera, the volcano and the open Aegean beyond" },
    { src: "/villas/santorini-estate/gallery-15.jpg", alt: "Bathroom in patterned black and white, oval mirror and dappled tiles" },
  ],

  mailtoSubject: "Inquiry: Santorini Estate",
};

const bestia: VillaDetail = {
  slug: "bestia",
  name: "BESTIA",
  location: "Athens, Greece",
  region: "Athens",
  kind: "yacht",

  card: {
    tagline: "The only Sanlorenzo SP110 in charter, worldwide.",
    specs: "33 m · 4 Cabins · Up to 8 Guests · Crew of 5",
    priceFrom: "Price on request",
  },

  introLabel: "The Only SP110 in Charter",
  tagline: "A statement in motion.",
  intro:
    "BESTIA is not simply a yacht. The only Sanlorenzo SP110 available for charter worldwide. Delivered in 2024, awarded the Compasso d'Oro, she combines award-winning design, radical architecture, and exceptional performance.",

  theHouse:
    "Two salons designed for both space and privacy, an exceptional separation between guest quarters and crew, direct sea access from the guest cabins. Built in 2024 with the latest design and technology. Full stabilization system for maximum comfort across the Aegean.",

  theLocation:
    "Athens-based. From the Cyclades to the Saronic, the Sporades or the Ionian, the route is built around your dates and the weather. Cruising at 31 knots, top speed 35.",

  keyFacts: {
    length: "33 m",
    cabins: "4",
    bathrooms: "4 en-suite",
    guests: "Up to 8",
    crew: "5",
    cruise: "31 knots",
    minStay: "7 nights minimum",
    priceFrom: "Price on request",
  },

  amenities: {
    outdoor: [
      "Spacious beach club at the stern",
      "Fully shaded sundeck with retractable hardtop",
      "Additional bimini for full coverage",
      "Aft-deck lounge and dining",
      "Sun-pad and lounging zones",
    ],
    residence: [
      "4 guest cabins, all en-suite",
      "Two independent salons",
      "Full beam master cabin",
      "Separate crew quarters for full privacy",
      "Full stabilization system",
      "Approx. 450 L/h consumption at 18 knots",
      "Cruising 31 knots, top 35 knots",
    ],
  },

  seasons: [
    { label: "Late Spring", window: "May to early June" },
    { label: "Summer", window: "mid-June through August" },
    { label: "Golden Season", window: "September to October" },
  ],

  services: [
    "Captain and crew of 5",
    "Onboard chef",
    "Tender and water toys",
    "Route built around your dates",
    "Reservations on each port of call",
  ],

  videoYoutubeId: "U7MVC9fMKfY",

  cover: "/yacht/cover.jpg",
  gallery: [
    { src: "/yacht/gallery-01.jpg", alt: "BESTIA exterior, profile from the water" },
    { src: "/yacht/gallery-02.jpg", alt: "BESTIA cruising the Mediterranean coastline" },
    { src: "/yacht/gallery-03.jpg", alt: "Aft deck lounge with sofas, the open sea behind" },
    { src: "/yacht/gallery-04.jpg", alt: "BESTIA exterior detail" },
    { src: "/yacht/gallery-05.jpg", alt: "BESTIA exterior at the dock" },
    { src: "/yacht/gallery-06.jpg", alt: "BESTIA underway, sleek hull cutting the sea" },
    { src: "/yacht/gallery-07.jpg", alt: "Sundeck and shaded lounging area" },
    { src: "/yacht/gallery-08.jpg", alt: "Main salon interior with floor-to-ceiling windows" },
    { src: "/yacht/gallery-09.jpg", alt: "Salon detail, curated furniture and natural materials" },
    { src: "/yacht/gallery-10.jpg", alt: "Dining area onboard BESTIA" },
    { src: "/yacht/gallery-11.jpg", alt: "Master cabin with sea view" },
    { src: "/yacht/gallery-12.jpg", alt: "Guest cabin with direct sea access" },
    { src: "/yacht/gallery-13.jpg", alt: "Bathroom detail in natural stone and metal" },
    { src: "/yacht/gallery-14.jpg", alt: "Second salon, designed for privacy" },
    { src: "/yacht/gallery-15.jpg", alt: "Onboard interior detail" },
  ],

  mailtoSubject: "Inquiry: BESTIA Yacht Charter",
};

const silentCoast: VillaDetail = {
  slug: "silent-coast",
  name: "Silent Coast",
  location: "Porto Heli, Peloponnese",
  region: "Peloponnese",

  card: {
    tagline: "A beachfront residence on the quiet side of Porto Heli.",
    specs: "6 Bed · 6 Bath · Up to 12 Guests · Beachfront",
    priceFrom: "From €2,600 / night",
  },

  introLabel: "Beachfront, Porto Heli",
  tagline: "Stone, olive trees, the sea in between.",
  intro:
    "A beachfront residence on the quiet side of Porto Heli, set in mature gardens of olive trees and herbs. Six bedrooms, a bamboo pergola for twelve, a private path to the sand steps from the door. Designed for families and friends who want both space and stillness.",

  theHouse:
    "Each floor holds its own role. The pool level opens onto outdoor dining and a stretch of sun deck, with one double and one twin sharing this main floor. The upper floor is given to the master suite alone, its private terrace and outdoor jacuzzi facing the bay. Three more en-suite bedrooms, an independent living room and a kitchenette sit below, set up to run autonomously when the house is full.",

  theLocation:
    "Two minutes from Porto Heli town, kilometres from anywhere busy. Sailing waters that have drawn the same families to the Argolic Gulf for generations. Spetses, Hydra, the islands of the Saronic, all within a short tender ride.",

  keyFacts: {
    bedrooms: "6",
    bathrooms: "6",
    guests: "Up to 12",
    minStay: "3 nights",
    priceFrom: "From €2,600 / night",
  },

  amenities: {
    outdoor: [
      "Private swimming pool with stone-paved terrace",
      "Sunbeds, chaise longues, parasols",
      "Outdoor dining for 12 under bamboo pergola",
      "Shaded BBQ kitchen with gas grill",
      "Master suite terrace with outdoor jacuzzi",
      "Private beach with sunbeds and umbrellas",
      "Mature gardens of olive trees and herbs",
    ],
    residence: [
      "6 bedrooms across three levels",
      "Master suite with private terrace and jacuzzi",
      "Two living rooms (main floor + lower level)",
      "Fully equipped chef kitchen + lower-level kitchenette",
      "Indoor fireplace, air conditioning throughout",
      "Wi-Fi, smart TV, dedicated laundry",
      "Secure on-site parking",
    ],
  },

  seasons: [
    { label: "Late Spring", window: "May to early June" },
    { label: "Summer", window: "mid-June through August" },
    { label: "Golden Season", window: "September to October" },
  ],

  services: [
    "Welcome pack on arrival",
    "Daily housekeeping, linen and towel change twice weekly",
    "Pool maintenance and gardener",
    "Private chef on request",
    "Massage, yoga, beauty treatments on request",
    "VIP transfers, boat charter, daily excursions on request",
  ],

  cover: "/villas/silent-coast/cover.jpg",
  gallery: [
    { src: "/villas/silent-coast/gallery-01.jpg", alt: "Stone facade of Silent Coast at golden hour, olive tree in the foreground" },
    { src: "/villas/silent-coast/gallery-02.jpg", alt: "Outdoor dining for twelve under a bamboo pergola, Argolic Gulf beyond" },
    { src: "/villas/silent-coast/gallery-03.jpg", alt: "Private beach with two parasols and lounge chairs facing the bay" },
    { src: "/villas/silent-coast/gallery-04.jpg", alt: "Garden lounge with parasols and sun loungers above the stone retaining wall" },
    { src: "/villas/silent-coast/gallery-05.jpg", alt: "Pool side of the residence, stone columns and open glass facade" },
    { src: "/villas/silent-coast/gallery-06.jpg", alt: "Long pool flanked by parasols and lounge chairs, the villa beyond" },
    { src: "/villas/silent-coast/gallery-07.jpg", alt: "Infinity pool reflecting cypress, gardens and the bay at golden hour" },
    { src: "/villas/silent-coast/gallery-08.jpg", alt: "Master bedroom with built-in bench and large windows onto the sea" },
    { src: "/villas/silent-coast/gallery-09.jpg", alt: "Guest bedroom in soft beige tones, sheer curtains, rattan chair" },
    { src: "/villas/silent-coast/gallery-10.jpg", alt: "Marble bathroom with freestanding tub and double vanity" },
    { src: "/villas/silent-coast/gallery-11.jpg", alt: "Lower-level living and dining, rattan chairs and woven pendants" },
    { src: "/villas/silent-coast/gallery-12.jpg", alt: "Lower-level lounge with corner sofa and woven poufs" },
    { src: "/villas/silent-coast/gallery-13.jpg", alt: "Outdoor jacuzzi on the master terrace, panoramic view of the bay" },
    { src: "/villas/silent-coast/gallery-14.png", alt: "Pool reflecting the stone pavilion at dusk" },
    { src: "/villas/silent-coast/gallery-15.jpg", alt: "Terrace lounge looking out to the bay, the Peloponnese hills beyond" },
  ],

  mailtoSubject: "Inquiry: Silent Coast",
};

const aegeanResidence: VillaDetail = {
  slug: "aegean-residence",
  name: "Aegean Residence",
  location: "Porto Heli, Peloponnese",
  region: "Peloponnese",

  card: {
    tagline: "Eight thousand square metres on the bay, three private coves below.",
    specs: "7 Bed · 7 Bath · Up to 14 Guests · Seafront",
    priceFrom: "From €3,500 / night",
  },

  introLabel: "Seafront, Porto Heli",
  tagline: "Three private coves, one residence.",
  intro:
    "An 8,000 m² seafront estate in Porto Heli, with a 50-metre coastal frontage and access to three private coves. Seven en-suite bedrooms across two levels, an infinity pool, a private floating platform, and an Australian-surface tennis court under the pines. Designed for fourteen, designed to disappear into.",

  theHouse:
    "Two levels, organised around the sea. Ground floor at pool level: three double bedrooms en-suite, the main living and dining around a fireplace, a fully equipped kitchen. Lower floor: four more double en-suite bedrooms, an independent living room and a dedicated playroom. Indoor and outdoor flow as one residence rather than two stacked floors.",

  theLocation:
    "Porto Heli, the Peloponnese coast favoured by families who return summer after summer. The Argolic Gulf opens out in front, calm waters facing Spetses and Hydra. Athens by car under two and a half hours, Spetses by tender in fifteen minutes.",

  keyFacts: {
    size: "8,000 m² estate",
    bedrooms: "7",
    bathrooms: "7 en-suite",
    guests: "Up to 14",
    minStay: "3 nights",
    priceFrom: "From €3,500 / night",
  },

  amenities: {
    outdoor: [
      "Infinity pool with wooden sun deck",
      "Sunbeds, parasols, outdoor lounges",
      "Outdoor dining for 14 under pergola",
      "Shaded BBQ kitchen with professional grill",
      "Private path to a small beach with sunbeds and umbrellas",
      "Private floating platform for tender or small yacht",
      "Australian-surface tennis court",
      "Mature gardens of olive trees and Mediterranean planting",
    ],
    residence: [
      "7 bedrooms, all en-suite, across two levels",
      "Living room with fireplace + independent lower-level living",
      "Dedicated playroom on the lower level",
      "Fully equipped chef kitchen",
      "Air conditioning throughout",
      "Wi-Fi, smart TVs, dedicated laundry",
      "Secure on-site parking",
    ],
  },

  seasons: [
    { label: "Late Spring", window: "May to early June" },
    { label: "Summer", window: "mid-June through August" },
    { label: "Golden Season", window: "September to October" },
  ],

  services: [
    "Welcome pack on arrival",
    "Daily housekeeping, linen and towel change twice weekly",
    "Pool maintenance and gardener",
    "Private chef on request",
    "Massage, yoga, beauty treatments on request",
    "VIP transfers, daily excursions, boat charter on request",
  ],

  cover: "/villas/aegean-residence/cover.jpg",
  gallery: [
    { src: "/villas/aegean-residence/gallery-01.jpg", alt: "Aerial of the residence above the bay, infinity pool and gardens" },
    { src: "/villas/aegean-residence/gallery-02.jpg", alt: "Pool terrace with sun loungers and parasol, Argolic Gulf in the distance" },
    { src: "/villas/aegean-residence/gallery-03.jpg", alt: "Pool deck and lounges seen from above, sea beyond" },
    { src: "/villas/aegean-residence/gallery-04.jpg", alt: "Pool side of the villa, open-plan living facing the water" },
    { src: "/villas/aegean-residence/gallery-05.jpg", alt: "Floating platform extending over the bay" },
    { src: "/villas/aegean-residence/gallery-06.jpg", alt: "Indoor dining table opening onto the bay, twin circular mirrors on the wall" },
    { src: "/villas/aegean-residence/gallery-07.jpg", alt: "Outdoor dining for fourteen under a stone-walled pergola" },
    { src: "/villas/aegean-residence/gallery-08.jpg", alt: "Australian-surface tennis court framed by pines" },
    { src: "/villas/aegean-residence/gallery-09.jpg", alt: "Living room with fireplace, glass walls onto the pool" },
    { src: "/villas/aegean-residence/gallery-10.jpg", alt: "Open kitchen and dining area, sea view through the doors" },
    { src: "/villas/aegean-residence/gallery-11.jpg", alt: "En-suite bedroom with sea view and private terrace" },
    { src: "/villas/aegean-residence/gallery-12.jpg", alt: "Lower-level family living room with sectional sofa" },
    { src: "/villas/aegean-residence/gallery-13.jpg", alt: "All-white kitchen with central island and sea-facing window" },
    { src: "/villas/aegean-residence/gallery-14.jpg", alt: "Bathroom in stone and marble with walk-in shower" },
  ],

  mailtoSubject: "Inquiry: Aegean Residence",
};

const anavissosLux: VillaDetail = {
  slug: "anavissos-lux",
  name: "Anavissos Lux",
  location: "Anavyssos, Athens Riviera",
  region: "Athens Riviera",

  card: {
    tagline: "An off-market estate on the Athens Riviera. Five pools, full wellness, twenty metres from the sand.",
    specs: "700 m² · 6 Bed · 6 Bath · Up to 12 Guests · Sea View",
    priceFrom: "Price on request",
  },

  badge: "Off Market",

  introLabel: "Off-Market · Athens Riviera",
  tagline: "Off-market, twenty metres from the sand.",
  intro:
    "A 7,000 m² architectural estate on the Athens Riviera, completed in 2025. Six bedrooms, five outdoor heated pools, a full wellness wing, and a private path to the sand twenty metres from the door. Permanent staff, chef and housekeeping included. The kind of address that does not appear online.",

  theHouse:
    "Seven hundred square metres of living, set within seven thousand of garden and stone. Six en-suite bedrooms organised around privacy, two outdoor living lounges and two outdoor dining areas, indoor and outdoor bars, underfloor heating, fireplaces. A dedicated wellness wing with hammam, ice-therapy corner, massage room, gym and a heated indoor pool. Furnished terraces flow into one another, and into the gardens beyond.",

  theLocation:
    "Anavyssos, on the Athens Riviera, an hour from the city by car. The estate sits twenty metres from a sandy beach reached through a private underpass. Sounion and Cape Sounio one direction, the airport and Athens the other. Discreet, residential, and quietly Greek.",

  keyFacts: {
    size: "700 m² built / 7,000 m² estate",
    bedrooms: "6",
    bathrooms: "6 en-suite",
    guests: "Up to 12",
    minStay: "On request",
    priceFrom: "Price on request",
  },

  amenities: {
    outdoor: [
      "5 outdoor heated swimming pools",
      "Private beach lounge twenty metres from the door",
      "2 outdoor living lounges + 2 outdoor dining areas",
      "Outdoor bar, indoor bar",
      "Furnished terraces throughout",
      "Sandy children's play area",
      "Mature gardens, 7,000 m² estate",
      "6 private parking spaces",
    ],
    residence: [
      "6 en-suite bedrooms",
      "Professional chef kitchen",
      "Indoor wellness: heated pool, hammam, ice-therapy, massage room, gym",
      "Underfloor heating throughout",
      "Indoor fireplaces",
      "Permanent staff",
      "New build, completed 2025",
    ],
  },

  seasons: [
    { label: "Year-round residence", window: "Open all seasons" },
    { label: "Late Spring", window: "May to early June" },
    { label: "Summer", window: "mid-June through August" },
    { label: "Golden Season", window: "September to October" },
  ],

  services: [
    "Private chef included",
    "Daily housekeeping included",
    "Breakfast, water, coffee and soft drinks included",
    "Full spa access, two hours per day",
    "Service hours 09:00 to 21:00",
    "VIP transfers, excursions, charter on request",
  ],

  cover: "/villas/anavissos-lux/cover.jpg",
  gallery: [
    { src: "/villas/anavissos-lux/gallery-01.jpg", alt: "Aerial of the curved pool deck and sun loungers, gardens around" },
    { src: "/villas/anavissos-lux/gallery-02.jpg", alt: "Aerial of the five sculpted outdoor pools at golden hour" },
    { src: "/villas/anavissos-lux/gallery-03.jpg", alt: "View from the estate to the sea at sunset, pools and gardens in foreground" },
    { src: "/villas/anavissos-lux/gallery-04.jpg", alt: "Living lounge in warm earthy tones, curved boucle sofa, framed artwork" },
    { src: "/villas/anavissos-lux/gallery-05.jpg", alt: "Hammam with star-lit mosaic ceiling and turquoise tiles" },
    { src: "/villas/anavissos-lux/gallery-06.jpg", alt: "Stone wellness lounge under an arched entry, two armchairs" },
    { src: "/villas/anavissos-lux/gallery-07.jpg", alt: "Lit walkway at dusk, curved walls and Mediterranean planting" },
    { src: "/villas/anavissos-lux/gallery-08.jpg", alt: "Round bedroom with circular bed, oculus skylight, wooden slat wall" },
  ],

  mailtoSubject: "Inquiry: Anavissos Lux (off-market)",
};

export const villaDetails: Record<string, VillaDetail> = {
  "you-and-me": youAndMe,
  celestia,
  esmeralda,
  "tourlos-breeze": tourlosBreeze,
  "santorini-estate": santoriniEstate,
  "silent-coast": silentCoast,
  "aegean-residence": aegeanResidence,
  "anavissos-lux": anavissosLux,
  bestia,
};

export const villaDetailSlugs = Object.keys(villaDetails);

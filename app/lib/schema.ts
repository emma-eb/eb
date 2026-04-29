import type { VillaDetail } from "../data/villa-details";

export const SITE_URL = "https://emmabonnefous.com";

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

export function siteOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "eb.",
    alternateName: "Emma Bonnefous Private Greece",
    url: SITE_URL,
    logo: abs("/logo-bleu.svg"),
    image: abs("/opengraph-image.jpg"),
    description:
      "A private travel studio dedicated to Greece. Curated villas, private journeys, and bespoke experiences across Athens and the Greek islands.",
    founder: {
      "@type": "Person",
      name: "Emma Bonnefous",
      jobTitle: "Founder",
      url: abs("/about"),
    },
    foundingLocation: {
      "@type": "Place",
      name: "Athens, Greece",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Athens",
      addressCountry: "GR",
    },
    areaServed: {
      "@type": "Country",
      name: "Greece",
    },
    email: "hello@emmabonnefous.com",
    sameAs: [
      "https://www.instagram.com/emma_bonnefous_/",
      "https://www.linkedin.com/in/emmabonnefous/",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "eb. Private Greece",
    alternateName: "eb.",
    url: SITE_URL,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "eb.",
      url: SITE_URL,
    },
  };
}

export function breadcrumbListSchema(items: { name: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: abs(item.url) } : {}),
    })),
  };
}

function parseFirstNumber(input: string | undefined): number | undefined {
  if (!input) return undefined;
  const m = input.match(/\d+/);
  return m ? parseInt(m[0], 10) : undefined;
}

export function villaSchema(villa: VillaDetail) {
  const image = abs(villa.cover);
  const url = abs(`/collection/${villa.slug}`);

  if (villa.kind === "yacht") {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: villa.name,
      description: villa.intro,
      url,
      image,
      serviceType: "Private yacht charter",
      provider: {
        "@type": "TravelAgency",
        name: "eb.",
        url: SITE_URL,
      },
      areaServed: {
        "@type": "Country",
        name: "Greece",
      },
    };
  }

  const bedrooms = parseFirstNumber(villa.keyFacts.bedrooms);
  const guests = parseFirstNumber(villa.keyFacts.guests);

  return {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: villa.name,
    description: villa.intro,
    url,
    image,
    address: {
      "@type": "PostalAddress",
      addressLocality: villa.location,
      addressRegion: villa.region,
      addressCountry: "GR",
    },
    ...(bedrooms ? { numberOfBedrooms: bedrooms } : {}),
    ...(guests
      ? {
          occupancy: {
            "@type": "QuantitativeValue",
            maxValue: guests,
            unitText: "guests",
          },
        }
      : {}),
    brand: {
      "@type": "Organization",
      name: "eb.",
      url: SITE_URL,
    },
  };
}

export interface JourneyMeta {
  slug: string;
  name: string;
  description: string;
  nights: number;
  season: string;
  islands: string[];
  image: string;
}

export function journeyTouristTripSchema(journey: JourneyMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: journey.name,
    description: journey.description,
    url: abs(`/journeys/${journey.slug}`),
    image: abs(journey.image),
    touristType: "Luxury private travel",
    provider: {
      "@type": "TravelAgency",
      name: "eb.",
      url: SITE_URL,
    },
    itinerary: journey.islands.map((place) => ({
      "@type": "Place",
      name: place,
      address: {
        "@type": "PostalAddress",
        addressLocality: place,
        addressCountry: "GR",
      },
    })),
  };
}

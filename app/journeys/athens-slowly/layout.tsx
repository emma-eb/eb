import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { breadcrumbListSchema, journeyTouristTripSchema } from "../../lib/schema";

const slug = "athens-slowly";
const title = "Athens, Slowly";
const description =
  "Five nights in Athens at the pace it was actually built for. One base, no ferries, the city the Athenians actually live in. A private journey by eb.";
const url = `/journeys/${slug}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: "article",
    images: ["/acropole_01.webp"],
  },
  twitter: {
    title,
    description,
    images: ["/acropole_01.webp"],
  },
};

export default function AthensJourneyLayout({ children }: { children: React.ReactNode }) {
  const tour = journeyTouristTripSchema({
    slug,
    name: title,
    description,
    nights: 5,
    season: "Year-round",
    islands: ["Athens"],
    image: "/acropole_01.webp",
  });
  const breadcrumb = breadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "Private Journeys", url: "/journeys" },
    { name: title },
  ]);
  return (
    <>
      <JsonLd data={[tour, breadcrumb]} />
      {children}
    </>
  );
}

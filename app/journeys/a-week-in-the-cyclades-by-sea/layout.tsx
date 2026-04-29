import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { breadcrumbListSchema, journeyTouristTripSchema } from "../../lib/schema";

const slug = "a-week-in-the-cyclades-by-sea";
const title = "A Week in the Cyclades, by Sea";
const description =
  "A 33-metre yacht, six islands, a crew of five. Seven nights to see the Cyclades from the inside out. A private journey by the eb. studio.";
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
  },
  twitter: {
    title,
    description,
  },
};

export default function CycladesBySeaJourneyLayout({ children }: { children: React.ReactNode }) {
  const tour = journeyTouristTripSchema({
    slug,
    name: title,
    description,
    nights: 7,
    season: "May to September",
    islands: ["Athens", "Cyclades"],
    image: "/yatch_page collection.jpg",
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

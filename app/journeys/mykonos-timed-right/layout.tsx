import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { breadcrumbListSchema, journeyTouristTripSchema } from "../../lib/schema";

const slug = "mykonos-timed-right";
const title = "Mykonos, Timed Right";
const description =
  "Five nights in a private villa on Mykonos, timed by the eb. studio for the right table, the right beach club, the right night to be on the island.";
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
    images: ["/mykonos_01.webp"],
  },
  twitter: {
    title,
    description,
    images: ["/mykonos_01.webp"],
  },
};

export default function MykonosJourneyLayout({ children }: { children: React.ReactNode }) {
  const tour = journeyTouristTripSchema({
    slug,
    name: title,
    description,
    nights: 5,
    season: "May to September",
    islands: ["Mykonos"],
    image: "/mykonos-villa.webp",
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

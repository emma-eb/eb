import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { breadcrumbListSchema, journeyTouristTripSchema } from "../../lib/schema";

const slug = "a-slow-honeymoon-in-the-cyclades";
const title = "A Slow Honeymoon in the Cyclades";
const description =
  "Seven nights between Milos and Folegandros. Stone, wind, sea, and the kind of week that starts a marriage right. A private journey by the eb. studio.";
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
    images: ["/MILOS_01.webp"],
  },
  twitter: {
    title,
    description,
    images: ["/MILOS_01.webp"],
  },
};

export default function HoneymoonJourneyLayout({ children }: { children: React.ReactNode }) {
  const tour = journeyTouristTripSchema({
    slug,
    name: title,
    description,
    nights: 7,
    season: "May to September",
    islands: ["Milos", "Folegandros"],
    image: "/MILOS_01.webp",
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

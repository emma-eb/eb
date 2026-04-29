import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { breadcrumbListSchema, journeyTouristTripSchema } from "../../lib/schema";

const slug = "a-family-summer-greek-style";
const title = "A Family Summer, Greek-Style";
const description =
  "Ten nights between Porto Heli and the Saronic islands. A villa, a private boat, a coastline that works for eight-year-olds and grandparents alike.";
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

export default function FamilyJourneyLayout({ children }: { children: React.ReactNode }) {
  const tour = journeyTouristTripSchema({
    slug,
    name: title,
    description,
    nights: 10,
    season: "April to October",
    islands: ["Porto Heli", "Hydra", "Spetses", "Poros"],
    image: "/family-journey.jpg",
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

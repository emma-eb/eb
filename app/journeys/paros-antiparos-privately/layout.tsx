import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { breadcrumbListSchema, journeyTouristTripSchema } from "../../lib/schema";

const slug = "paros-antiparos-privately";
const title = "Paros + Antiparos, Privately";
const description =
  "Seven nights in the Cyclades. Hand-selected villa, private boat for the day, Despotiko and Lefkes. The Greek island that works for everyone, by eb.";
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
    images: ["/images/journeys/paros-hero.jpg"],
  },
  twitter: {
    title,
    description,
    images: ["/images/journeys/paros-hero.jpg"],
  },
};

export default function ParosAntiparosLayout({ children }: { children: React.ReactNode }) {
  const tour = journeyTouristTripSchema({
    slug,
    name: title,
    description,
    nights: 7,
    season: "May to October",
    islands: ["Paros", "Antiparos"],
    image: "/paros_01.jpg",
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

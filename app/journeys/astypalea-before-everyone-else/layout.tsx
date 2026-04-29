import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { breadcrumbListSchema, journeyTouristTripSchema } from "../../lib/schema";

const slug = "astypalea-before-everyone-else";
const title = "Astypalea, Before Everyone Else";
const description =
  "Seven nights from Athens to Astypalea, the Cycladic island travel writers are quietly putting at the top of their 2026 lists. A private journey by the eb. studio.";
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
    images: ["/astypalea.jpg"],
  },
  twitter: {
    title,
    description,
    images: ["/astypalea.jpg"],
  },
};

export default function AstypaleaJourneyLayout({ children }: { children: React.ReactNode }) {
  const tour = journeyTouristTripSchema({
    slug,
    name: title,
    description,
    nights: 7,
    season: "May to September",
    islands: ["Athens", "Astypalea"],
    image: "/astypalea.jpg",
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

import type { Metadata } from "next";

const title = "Private Journeys in Greece";
const description =
  "Seven multi-day private journeys across Athens, the Cyclades, and the Greek islands. Each itinerary designed by the eb. studio, none repeated.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/journeys" },
  openGraph: {
    title,
    description,
    url: "/journeys",
    type: "website",
  },
  twitter: {
    title,
    description,
  },
};

export default function JourneysLayout({ children }: { children: React.ReactNode }) {
  return children;
}

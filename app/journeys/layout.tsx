import type { Metadata } from "next";

const title = "Private Journeys in Greece";
const description =
  "Seven multi-day private journeys across Athens, the Cyclades, and the Greek islands. Each itinerary designed by the eb. studio, none repeated.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | eb. Private Greece",
  },
  description,
  alternates: { canonical: "/journeys" },
  openGraph: {
    title,
    description,
    url: "/journeys",
    type: "website",
    images: ["/detail-archi-greece-02.webp"],
  },
  twitter: {
    title,
    description,
    images: ["/detail-archi-greece-02.webp"],
  },
};

export default function JourneysLayout({ children }: { children: React.ReactNode }) {
  return children;
}

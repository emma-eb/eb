import type { Metadata } from "next";

const title = "A Week in the Cyclades, by Sea";
const description =
  "A 33-metre yacht, six islands, a crew of five. Seven nights to see the Cyclades from the inside out. A private journey by the eb. studio.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/journeys/a-week-in-the-cyclades-by-sea" },
  openGraph: {
    title,
    description,
    url: "/journeys/a-week-in-the-cyclades-by-sea",
    type: "article",
  },
  twitter: {
    title,
    description,
  },
};

export default function CycladesBySeaJourneyLayout({ children }: { children: React.ReactNode }) {
  return children;
}

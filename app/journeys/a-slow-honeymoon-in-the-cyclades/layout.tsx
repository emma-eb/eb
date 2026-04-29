import type { Metadata } from "next";

const title = "A Slow Honeymoon in the Cyclades";
const description =
  "Seven nights between Milos and Folegandros. Stone, wind, sea, and the kind of week that starts a marriage right. A private journey by the eb. studio.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/journeys/a-slow-honeymoon-in-the-cyclades" },
  openGraph: {
    title,
    description,
    url: "/journeys/a-slow-honeymoon-in-the-cyclades",
    type: "article",
  },
  twitter: {
    title,
    description,
  },
};

export default function HoneymoonJourneyLayout({ children }: { children: React.ReactNode }) {
  return children;
}

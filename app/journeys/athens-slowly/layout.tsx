import type { Metadata } from "next";

const title = "Athens, Slowly";
const description =
  "Five nights in Athens at the pace it was actually built for. One base, no ferries, the city the Athenians actually live in. A private journey by eb.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/journeys/athens-slowly" },
  openGraph: {
    title,
    description,
    url: "/journeys/athens-slowly",
    type: "article",
  },
  twitter: {
    title,
    description,
  },
};

export default function AthensJourneyLayout({ children }: { children: React.ReactNode }) {
  return children;
}

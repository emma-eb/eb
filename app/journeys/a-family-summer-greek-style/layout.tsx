import type { Metadata } from "next";

const title = "A Family Summer, Greek-Style";
const description =
  "Ten nights between Porto Heli and the Saronic islands. A villa, a private boat, a coastline that works for eight-year-olds and grandparents alike.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/journeys/a-family-summer-greek-style" },
  openGraph: {
    title,
    description,
    url: "/journeys/a-family-summer-greek-style",
    type: "article",
  },
  twitter: {
    title,
    description,
  },
};

export default function FamilyJourneyLayout({ children }: { children: React.ReactNode }) {
  return children;
}

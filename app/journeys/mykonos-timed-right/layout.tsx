import type { Metadata } from "next";

const title = "Mykonos, Timed Right";
const description =
  "Five nights in a private villa on Mykonos, timed by the eb. studio for the right table, the right beach club, the right night to be on the island.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/journeys/mykonos-timed-right" },
  openGraph: {
    title,
    description,
    url: "/journeys/mykonos-timed-right",
    type: "article",
  },
  twitter: {
    title,
    description,
  },
};

export default function MykonosJourneyLayout({ children }: { children: React.ReactNode }) {
  return children;
}

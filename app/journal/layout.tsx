import type { Metadata } from "next";

const title = "The eb. Journal";
const description =
  "News, openings, market insights, and the conversations shaping how the world is discovering Greece. From the eb. studio in Athens.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/journal" },
  openGraph: {
    title,
    description,
    url: "/journal",
    type: "website",
  },
  twitter: {
    title,
    description,
  },
};

export default function JournalLayout({ children }: { children: React.ReactNode }) {
  return children;
}

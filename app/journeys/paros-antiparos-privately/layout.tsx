import type { Metadata } from "next";

const title = "Paros + Antiparos, Privately";
const description =
  "Seven nights in the Cyclades. Hand-selected villa, private boat for the day, Despotiko and Lefkes. The Greek island that works for everyone, by eb.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/journeys/paros-antiparos-privately" },
  openGraph: {
    title,
    description,
    url: "/journeys/paros-antiparos-privately",
    type: "article",
  },
  twitter: {
    title,
    description,
  },
};

export default function ParosAntiparosLayout({ children }: { children: React.ReactNode }) {
  return children;
}

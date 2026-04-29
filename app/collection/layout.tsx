import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Villa Collection",
    template: "%s | eb. Private Greece",
  },
  description:
    "A private collection of residences and one yacht across Greece. Porto Heli, Crete, Mykonos, Athens Riviera, the Ionian.",
  alternates: { canonical: "/collection" },
  openGraph: {
    title: "Villa Collection",
    description:
      "A private collection of residences and one yacht across Greece. Porto Heli, Crete, Mykonos, Athens Riviera, the Ionian.",
    url: "/collection",
    type: "website",
  },
  twitter: {
    title: "Villa Collection",
    description:
      "A private collection of residences and one yacht across Greece. Porto Heli, Crete, Mykonos, Athens Riviera, the Ionian.",
  },
};

export default function CollectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}

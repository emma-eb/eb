import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Villa Collection | eb. Private Travel Studio",
  description:
    "A private collection of residences and one yacht across Greece. Porto Heli, Crete, Mykonos, Athens Riviera, the Ionian.",
};

export default function CollectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}

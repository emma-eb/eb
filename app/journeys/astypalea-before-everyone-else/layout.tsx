import type { Metadata } from "next";

const title = "Astypalea, Before Everyone Else";
const description =
  "Seven nights from Athens to Astypalea, the Cycladic island travel writers are quietly putting at the top of their 2026 lists. A private journey by the eb. studio.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/journeys/astypalea-before-everyone-else" },
  openGraph: {
    title,
    description,
    url: "/journeys/astypalea-before-everyone-else",
    type: "article",
  },
  twitter: {
    title,
    description,
  },
};

export default function AstypaleaJourneyLayout({ children }: { children: React.ReactNode }) {
  return children;
}

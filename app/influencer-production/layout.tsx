import type { Metadata } from "next";

const title = "Production in Greece for Brands";
const description =
  "Production in Greece for luxury brands, fashion houses, film shoots, and influencer campaigns. From the brief to the final frame, by the eb. studio in Athens.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/influencer-production" },
  openGraph: {
    title,
    description,
    url: "/influencer-production",
    type: "website",
  },
  twitter: {
    title,
    description,
  },
};

export default function InfluencerProductionLayout({ children }: { children: React.ReactNode }) {
  return children;
}

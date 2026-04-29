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
    images: ["https://images.unsplash.com/photo-1476011840234-433843d703fe?auto=format&fit=crop&w=1920&q=80"],
  },
  twitter: {
    title,
    description,
    images: ["https://images.unsplash.com/photo-1476011840234-433843d703fe?auto=format&fit=crop&w=1920&q=80"],
  },
};

export default function InfluencerProductionLayout({ children }: { children: React.ReactNode }) {
  return children;
}

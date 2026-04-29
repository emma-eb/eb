import type { Metadata } from "next";

const title = "Send a Brand Brief";
const description =
  "Tell us about your project. Brand trips, fam trips, photo shoots, film, press, or influencer campaigns in Greece. Brief us, the eb. studio gets back fast.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/for-brands/brief" },
  openGraph: {
    title,
    description,
    url: "/for-brands/brief",
    type: "website",
    images: ["https://images.unsplash.com/photo-1476011840234-433843d703fe?auto=format&fit=crop&w=1920&q=80"],
  },
  twitter: {
    title,
    description,
    images: ["https://images.unsplash.com/photo-1476011840234-433843d703fe?auto=format&fit=crop&w=1920&q=80"],
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function BrandBriefLayout({ children }: { children: React.ReactNode }) {
  return children;
}

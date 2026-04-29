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
  },
  twitter: {
    title,
    description,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function BrandBriefLayout({ children }: { children: React.ReactNode }) {
  return children;
}

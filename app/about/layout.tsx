import type { Metadata } from "next";

const title = "About Emma Bonnefous";
const description =
  "Twelve years producing for the world's most demanding luxury houses, then Greece. Emma Bonnefous founded eb. in Athens to design private travel for clients worldwide.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    type: "profile",
  },
  twitter: {
    title,
    description,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

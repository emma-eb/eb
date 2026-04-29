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
    images: ["https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1920&q=80"],
  },
  twitter: {
    title,
    description,
    images: ["https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1920&q=80"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

const title = "The eb. Journal";
const description =
  "News, openings, market insights, and the conversations shaping how the world is discovering Greece. From the eb. studio in Athens.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/journal" },
  openGraph: {
    title,
    description,
    url: "/journal",
    type: "website",
    images: ["/panos-katsigiannis-Ll4s8gKQ1xQ-unsplash.webp"],
  },
  twitter: {
    title,
    description,
    images: ["/panos-katsigiannis-Ll4s8gKQ1xQ-unsplash.webp"],
  },
};

export default function JournalLayout({ children }: { children: React.ReactNode }) {
  return children;
}

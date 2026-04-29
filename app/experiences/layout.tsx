import type { Metadata } from "next";

const title = "Private Experiences in Greece";
const description =
  "Private dinners, weddings, vineyard visits, and singular moments across Athens and the Greek islands. Designed by eb. for the occasions that matter.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/experiences" },
  openGraph: {
    title,
    description,
    url: "/experiences",
    type: "website",
  },
  twitter: {
    title,
    description,
  },
};

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

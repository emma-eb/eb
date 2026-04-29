import type { Metadata } from "next";

const title = "Begin a Conversation";
const description =
  "Tell us what you dream of, we shape the rest. Begin a conversation with eb. to design your private journey, stay, or occasion in Greece.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title,
    description,
    url: "/contact",
    type: "website",
  },
  twitter: {
    title,
    description,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

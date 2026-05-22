import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import RevealFallback from "./components/RevealFallback";
import JsonLd from "./components/JsonLd";
import { siteOrganizationSchema, websiteSchema } from "./lib/schema";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://emmabonnefous.com";
const SITE_NAME = "eb. Private Greece";
const DEFAULT_TITLE = "eb. | Private Greece";
const DEFAULT_DESCRIPTION =
  "Private travel curation across Greece. Villas, experiences, and journeys designed by eb. for discerning travellers.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | eb. Private Greece",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Emma Bonnefous" }],
  creator: "Emma Bonnefous",
  publisher: "eb. Private Greece",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    locale: "en_GB",
    alternateLocale: ["fr_FR", "en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcf7f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd data={[siteOrganizationSchema(), websiteSchema()]} />
        <Suspense fallback={null}>
          <RevealFallback />
        </Suspense>
        {children}
      </body>
    </html>
  );
}

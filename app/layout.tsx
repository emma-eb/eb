import type { Metadata } from "next";
import { Suspense } from "react";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import RevealFallback from "./components/RevealFallback";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eb. | Private Greece",
  description: "Private travel curation across Greece. Villas, experiences, and journeys designed by eb.",
  keywords: ["luxury concierge Greece", "private villa Greece", "Greece private travel"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Suspense fallback={null}>
          <RevealFallback />
        </Suspense>
        {children}
      </body>
    </html>
  );
}

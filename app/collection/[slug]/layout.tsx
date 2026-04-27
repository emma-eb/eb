import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { villaDetails, villaDetailSlugs } from "../../data/villa-details";

export async function generateStaticParams() {
  return villaDetailSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const villa = villaDetails[slug];
  if (!villa) return {};
  return {
    title: `${villa.name} | eb. Private Travel Studio`,
    description: villa.intro,
  };
}

export default async function VillaLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!villaDetails[slug]) notFound();
  return children;
}

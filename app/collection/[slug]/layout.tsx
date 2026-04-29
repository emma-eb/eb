import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { villaDetails, villaDetailSlugs } from "../../data/villa-details";
import JsonLd from "../../components/JsonLd";
import { villaSchema, breadcrumbListSchema } from "../../lib/schema";

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

  const url = `/collection/${slug}`;
  const title = villa.name;
  const description = villa.intro;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: villa.cover }],
    },
    twitter: {
      title,
      description,
      images: [villa.cover],
    },
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
  const villa = villaDetails[slug];
  if (!villa) notFound();

  const breadcrumb = breadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "Collection", url: "/collection" },
    { name: villa.name },
  ]);

  return (
    <>
      <JsonLd data={[villaSchema(villa), breadcrumb]} />
      {children}
    </>
  );
}

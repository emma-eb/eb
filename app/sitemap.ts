import type { MetadataRoute } from "next";
import { villaDetailSlugs } from "./data/villa-details";

const BASE_URL = "https://emmabonnefous.com";

const journeySlugs = [
  "a-family-summer-greek-style",
  "a-slow-honeymoon-in-the-cyclades",
  "a-week-in-the-cyclades-by-sea",
  "astypalea-before-everyone-else",
  "athens-slowly",
  "mykonos-timed-right",
  "paros-antiparos-privately",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/collection`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/journeys`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/experiences`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/journal`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/influencer-production`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/for-brands/brief`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/terms`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const villaRoutes: MetadataRoute.Sitemap = villaDetailSlugs.map((slug) => ({
    url: `${BASE_URL}/collection/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const journeyRoutes: MetadataRoute.Sitemap = journeySlugs.map((slug) => ({
    url: `${BASE_URL}/journeys/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...villaRoutes, ...journeyRoutes];
}

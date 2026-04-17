import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/journeys/sailing-small-cyclades",
        destination: "/journeys/a-week-in-the-cyclades-by-sea",
        permanent: true,
      },
      {
        source: "/journeys/sailing-the-small-cyclades",
        destination: "/journeys/a-week-in-the-cyclades-by-sea",
        permanent: true,
      },
      {
        source: "/journeys/athens-beyond-the-acropolis",
        destination: "/journeys/athens-slowly",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

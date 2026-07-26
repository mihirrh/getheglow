import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "graph.instagram.com",
      },
      {
        protocol: "https",
        hostname: "cdn.cdninstagram.com",
      },
    ],
  },
};

export default nextConfig;

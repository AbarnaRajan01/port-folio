import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Allow images from Sanity's CDN
  },
  typescript: {
    ignoreBuildErrors: true, // 🚀 Allows builds even with TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: true, // 🚀 Ignores ESLint errors in production
  },
};

export default nextConfig;

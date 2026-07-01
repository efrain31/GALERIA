import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.blob.vercel-storage.com",
      },
    ],
  },
  onRecoverableError: (error: Error) => {
    // Suppress hydration mismatches
    if (
      error.message.includes("Hydration failed") ||
      error.message.includes("hydration")
    ) {
      return;
    }
    console.error(error);
  },
};

export default nextConfig;

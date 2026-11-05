import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["@repo/ui"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

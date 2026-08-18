import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
  images: {
    // Allow remote brand image hosting on Cloudflare and the OpenRouter image CDN only.
    // sfile.chatglm.cn removed on 2026-08-17 per audit: not referenced by any page or asset.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openrouter.ai",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;

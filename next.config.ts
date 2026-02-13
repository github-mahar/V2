import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages deployment
  // architecture-lock.md §5: "If I deploy this to Cloudflare Pages right now, will it break?"
  output: "export",

  // Image optimization config for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

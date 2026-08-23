import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  experimental: {
    // only the icons actually referenced end up in the bundle
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;

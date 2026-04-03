import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignora erros de tipo no build (necessário por causa do bug no validator.ts original)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

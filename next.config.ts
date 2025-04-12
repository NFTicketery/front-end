import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Disable ESLint during builds to avoid deployment failures
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), 'pino-pretty', 'lokijs', 'encoding'];
    return config;
  },
};

export default nextConfig;
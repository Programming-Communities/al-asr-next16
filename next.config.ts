import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove experimental.turbo - Next.js 16 main Turbopack by default enabled hai
  // experimental: {
  //   turbo: {} // REMOVE THIS - Not needed in Next.js 16
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin-al-asr.centers.pk',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https', 
        hostname: 'via.placeholder.com',
      },
    ],
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
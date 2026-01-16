import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pix10.agoda.net',
      },
      {
        protocol: 'https',
        hostname: 'cf.bstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.nycampcanine.com',
      },
      {
        protocol: 'https',
        hostname: 'scratchingpostinn.com',
      },
      {
        protocol: 'https',
        hostname: 'cdcssl.ibsrv.net',
      },
      {
        protocol: 'https',
        hostname: 'www.rover.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bendkittylodgeoregon.com',
      },
    ],
  },
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow dev access from LAN / other devices (e.g. phone testing same Wi‑Fi).
  allowedDevOrigins: ["192.168.1.168"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      // Picsum redirects here — needed for next/image optimization.
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

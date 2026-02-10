import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "travel-images1234.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;

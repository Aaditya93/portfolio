import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */


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

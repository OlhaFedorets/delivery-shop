import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        unoptimized: true,
    },
    basePath: '/petshop',
    output: 'export'
};

export default nextConfig;

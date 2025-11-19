import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        unoptimized: true,
    },
    output: 'export',
    trailingSlash: true,
    basePath: process.env.NODE_ENV === 'production' ? '/petshop' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/petshop/' : '',
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL("https://www.datocms-assets.com/**")]
    }
};

export default nextConfig;

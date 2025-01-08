import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    experimental: {
        reactCompiler: true,
    },
};

export default nextConfig;

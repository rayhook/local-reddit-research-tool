// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client", "prisma"],
  experimental: {
    // Prevents concurrent builds from thrashing SQLite
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;

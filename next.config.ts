import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [new URL('https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/**')],
  },};

export default nextConfig;

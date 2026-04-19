import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbopackFileSystemCacheForBuild: true,
    turbopackFileSystemCacheForDev: true,
    // optimizeServerReact: true,
    optimizePackageImports: ["three", "@react-three/fiber", "@react-three/drei", "gsap", "@gsap/react"],
    optimizeCss: true,
  },
  // reactCompiler: true,
};

export default nextConfig;

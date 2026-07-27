import type { NextConfig } from "next";

const repoName = "port_ui"

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: { unoptimized: true },
  distDir: `out/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;

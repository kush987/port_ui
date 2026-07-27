import type { NextConfig } from "next";

const repoName = "port_ui";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(isGithubPages
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

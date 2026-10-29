import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev({ envFiles: [".env.local"] });

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/plans",
        permanent: true,
      },
      {
        source: "/retirement-certainty-session",
        destination: "/self-directed-certainty-session",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

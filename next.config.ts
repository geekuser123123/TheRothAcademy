import type { NextConfig } from "next";

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

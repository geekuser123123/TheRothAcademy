import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/plans",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The Team page was merged into About; keep old links working.
    return [{ source: "/team", destination: "/about#team", permanent: true }];
  },
};

export default nextConfig;

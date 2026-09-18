import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "hotelquintasdebogota.com" }],
        destination: "https://www.hotelquintasdebogota.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

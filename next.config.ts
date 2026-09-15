import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/whatsapp",
        has: [{ type: "host", value: "whatsapp.hotelquintasdebogota.com" }],
      },
    ];
  },
};

export default nextConfig;

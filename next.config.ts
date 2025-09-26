import type { NextConfig } from "next";
import withPWA from "next-pwa";

const config: NextConfig = {
  reactStrictMode: true,
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  // fallbacks: {
  //   document: "/offline",
  //   image: "/fallback.webp"
  // },
})(config);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',
  // experimental: {
  //   outputFileTracingRoot: undefined,
  // },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "utfs.io",
            port: "",
          },
        ],
      },
};

export default nextConfig;

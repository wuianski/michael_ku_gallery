/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    GoogleMapsAPIKey: process.env.GoogleMapsAPIKey,
    DIRECTUS_URL: process.env.DIRECTUS_URL,
    DIRECTUS_DOMAIN: process.env.DIRECTUS_DOMAIN,
    NEXT_PUBLIC_GRAPHQL: process.env.NEXT_PUBLIC_GRAPHQL,
    NEXT_PUBLIC_DOMAIN_DEV: process.env.NEXT_PUBLIC_DOMAIN_DEV,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  },
  images: {
    domains: [`${process.env.DIRECTUS_URL}`],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.DIRECTUS_DOMAIN}`,
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/_next/:path*",
  //       headers: [
  //         {
  //           key: "Access-Control-Allow-Origin",
  //           value: "http://localhost:3000",
  //         },
  //       ],
  //     },
  //   ];
  // },

}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GoogleMapsAPIKey: process.env.GoogleMapsAPIKey,
  },
}

module.exports = nextConfig

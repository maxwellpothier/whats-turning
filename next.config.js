/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["upload.wikimedia.org", "i.discogs.com"]
  },
  env: {
	BASE_API_URL: process.env.BASE_API_URL,
  }
}

module.exports = nextConfig

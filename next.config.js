/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["upload.wikimedia.org", "i.discogs.com"]
  },
  env: {
	STAGE: process.env.STAGE,
  }
}

module.exports = nextConfig

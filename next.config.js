/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["upload.wikimedia.org", "i.discogs.com", "e.snmc.io"],
	},
	env: {
		BASE_API_URL: process.env.BASE_API_URL,
		STAGE: process.env.STAGE,
	},
};

module.exports = nextConfig;

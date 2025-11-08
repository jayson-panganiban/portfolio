/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'export', // Static site export
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
};

module.exports = nextConfig;

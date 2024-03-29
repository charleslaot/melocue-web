/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "tailwindui.com" },
			{ hostname: "images.unsplash.com" },
			{ hostname: "picsum.photos" },
		],
	},
};

module.exports = nextConfig;

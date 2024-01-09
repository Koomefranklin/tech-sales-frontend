/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '8888',
				pathname: '/media/images/*',
			},
		],
	},
};

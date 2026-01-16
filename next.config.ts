/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			// Previous allowed hosts (keep all of them)
			{ protocol: 'https', hostname: 'pix10.agoda.net' },
			{ protocol: 'https', hostname: 'cf.bstatic.com' },
			{ protocol: 'https', hostname: 'images.squarespace-cdn.com' },
			{ protocol: 'https', hostname: 'www.nycampcanine.com' },
			{ protocol: 'https', hostname: 'scratchingpostinn.com' },
			{ protocol: 'https', hostname: 'cdcssl.ibsrv.net' },
			{ protocol: 'https', hostname: 'www.rover.com' },
			{ protocol: 'https', hostname: 'www.bendkittylodgeoregon.com' },
			{ protocol: 'https', hostname: 'static.wixstatic.com' },
			{ protocol: 'https', hostname: 'alcalacountrypetresort.com' },
			{ protocol: 'https', hostname: 'd36ib8eituxnj4.cloudfront.net' },
			{ protocol: 'https', hostname: 'i0.wp.com' },
			{ protocol: 'https', hostname: 'nekoya.co' },
			{ protocol: 'https', hostname: 'thesmartlocal.com' },
			{ protocol: 'https', hostname: 'media.istockphoto.com' },
			{ protocol: 'https', hostname: 'cdn.sortiraparis.com' },
			{ protocol: 'https', hostname: 'static.vecteezy.com' },
			{ protocol: 'https', hostname: 'c8.alamy.com' },

			// New one for the current error (Shutterstock)
			{ protocol: 'https', hostname: 'www.shutterstock.com' },
		],
	},
};

module.exports = nextConfig;
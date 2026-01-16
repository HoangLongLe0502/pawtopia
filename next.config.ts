/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			// Hosts from your list page (pawtopia/src/app/hotels/page.tsx)
			{ protocol: 'https', hostname: 'static.wixstatic.com' },
			{ protocol: 'https', hostname: 'images.squarespace-cdn.com' },
			{ protocol: 'https', hostname: 'alcalacountrypetresort.com' },
			{ protocol: 'https', hostname: 'd36ib8eituxnj4.cloudfront.net' },
			{ protocol: 'https', hostname: 'i0.wp.com' },
			{ protocol: 'https', hostname: 'nekoya.co' },
			{ protocol: 'https', hostname: 'thesmartlocal.com' },

			// Hosts from your detail page (pawtopia/src/app/hotels/[id]/page.tsx)
			{ protocol: 'https', hostname: 'media.istockphoto.com' },
			{ protocol: 'https', hostname: 'cdn.sortiraparis.com' },
			{ protocol: 'https', hostname: 'static.vecteezy.com' },
			{ protocol: 'https', hostname: 'c8.alamy.com' },
			{ protocol: 'https', hostname: 'www.shutterstock.com' },

			// Common hosts that might appear later (optional but useful)
			{ protocol: 'https', hostname: 'images.unsplash.com' }, // if you add Unsplash later
			{ protocol: 'https', hostname: 'pix10.agoda.net' },     // from earlier examples
			{ protocol: 'https', hostname: 'cf.bstatic.com' },      // Booking.com style
		],
	},
};

module.exports = nextConfig;
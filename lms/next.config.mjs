import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // Use template literals to construct the hostname
        hostname: `${process.env.APP_ID}.ufs.sh`,
        pathname: "/f/*",
      },
    ],
  },
};

export default withPayload(nextConfig);

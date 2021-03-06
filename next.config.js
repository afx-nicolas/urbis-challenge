/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'urbis-data-drive-api.s3.amazonaws.com',
      'firebasestorage.googleapis.com',
    ],
  },
};

module.exports = nextConfig;

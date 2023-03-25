/** @type {import('next').NextConfig} */
require('dotenv').config();
const isProduction = process.env.ENVIRONMENT === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProduction ? '/bob-portfolio/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

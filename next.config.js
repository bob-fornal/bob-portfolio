/** @type {import('next').NextConfig} */
require('dotenv').config();
const isProduction = process.env.ENVIRONMENT === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProduction ? '/portfolio--react--bob/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

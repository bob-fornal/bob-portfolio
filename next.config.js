/** @type {import('next').NextConfig} */
require('dotenv').config();
const isProduction = process.env.ENVIRONMENT === undefined;
console.log(isProduction, process.env.ENVIRONMENT);

const nextConfig = {
  reactStrictMode: true,
  // assetPrefix: isProduction ? '/bob-portfolio/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

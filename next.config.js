/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export';
  nextConfig.assetPrefix = 'https://get.budgetingkid.com';
}

module.exports = nextConfig;

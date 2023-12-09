/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export';
  nextConfig.assetPrefix = 'https://get.budgetingkid.com';
  nextConfig.eslint = {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  };
}

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const withBundleAnalyzer = process.env.ANALYZE === 'true'
  ? require('@next/bundle-analyzer')({
      enabled: true,
    })
  : (config) => config;

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // Add your image domains here
    ],
  },
  // SWC minification is enabled by default in Next.js 13+
  compiler: {
    // Enables emotion for styled components
    emotion: false,
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = withBundleAnalyzer(nextConfig); 
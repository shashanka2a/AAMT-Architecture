/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    domains: [],
    unoptimized: true, // For static exports if needed
  },
  // Enable static exports if needed
  output: 'export',
  trailingSlash: true,
  // Disable image optimization for static export
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

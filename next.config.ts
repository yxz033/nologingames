/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['placehold.co', 'bandit.rip'],
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src']
  }
};

export default config;

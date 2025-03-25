/** @type {import('next').NextConfig} */
const config = {
  output: 'standalone',
  images: {
    domains: ['placehold.co', 'bandit.rip'],
    unoptimized: true
  }
};

export default config;

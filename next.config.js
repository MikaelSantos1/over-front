/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  
  images: {
    domains: ['bit.ly','i.pinimg.com'],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920, 2048],
  },
} 
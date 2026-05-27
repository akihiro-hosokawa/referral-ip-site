/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/referral-ip-site',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

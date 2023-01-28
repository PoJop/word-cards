/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withPWA = require('next-pwa')({
  dest: 'public/pwa',
})

module.exports = withPWA({
  ...nextConfig
})
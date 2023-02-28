/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = { nextConfig, images: { loader: "custom" }, staticPageGenerationTimeout: 1000 }

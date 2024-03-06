/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: function (config, { webpack }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;

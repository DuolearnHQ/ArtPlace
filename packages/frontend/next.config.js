/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
      net:false,
      tls:false
    };

    return config;
  },
}

module.exports = nextConfig

// 👇️ assumes you use Webpack 5
module.exports = {
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
      net:false,
      tls:false
    };

    return config;
  },
};

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/amoghmanral.github.io/' : '',
  basePath: isProd ? '/amoghmanral.github.io' : '',
  output: 'export'
};

export default nextConfig;
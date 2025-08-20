/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // This includes the locales for server-side rendering
    outputFileTracingIncludes: {
      '/': [
        './src/app/i18n/locales/en/common.json',
        './src/app/i18n/locales/es/common.json'
      ],
    },
  },
};

export default nextConfig;
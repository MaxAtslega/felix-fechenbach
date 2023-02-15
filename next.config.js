/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'de'
  },
  compiler: {
    styledComponents: {
      displayName: false
    }
  }
}

module.exports = nextConfig

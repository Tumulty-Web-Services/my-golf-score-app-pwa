const withFonts = require('next-fonts')
const withOffline = require('next-offline')

const nextConfig = {
  target: 'serverless',
  transformManifest: (manifest) => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}

module.exports = 
  withOffline(
    withFonts({
      nextConfig,
      env: {
        AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
        AUTH0_CLIENTID: process.env.AUTH0_CLIENTID,
        AUTH0_DB_CONNECTION: process.env.AUTH0_DB_CONNECTION,
        BASE_URL: process.env.BASE_URL,
        STRIPE_API_ID: process.env.STRIPE_API_ID,
      },
    })
  )

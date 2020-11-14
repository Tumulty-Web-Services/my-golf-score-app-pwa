const withFonts = require('next-fonts')

module.exports = withFonts({
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENTID: process.env.AUTH0_CLIENTID,
    AUTH0_DB_CONNECTION: process.env.AUTH0_DB_CONNECTION,
    BASE_URL: process.env.BASE_URL,
    STRIPE_API_ID: process.env.STRIPE_API_ID
  },
})

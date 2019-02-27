const Sentry = require('@sentry/node')
const { APP_ENV, isDevelopment } = require('../utils/app-environment')

Sentry.init({
  dsn: 'https://7b0bc195d134489f86572d94c310969b@sentry.io/1330752',
  release: process.env.SENTRY_RELEASE,
  environment: APP_ENV,
  debug: isDevelopment,
  attachStacktrace: true,
})

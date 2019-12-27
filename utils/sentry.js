const Sentry = require('@sentry/node')
const { APP_ENV, isDevelopment } = require('../utils/app-environment')

/**
 * При `!!isDevelopment` не будет отправляться никаких оповещений
 * даже если мы будетм их отправлять самостоятельно посредством captureMessage.
 * Если потребуется отправить с develop окружения что-то в Sentry, то можно будет
 * на месте сделать Sentry.init() и Sentry.captureMessage()
 */

if ( !isDevelopment ) {
  Sentry.init({
    dsn: 'https://7b0bc195d134489f86572d94c310969b@sentry.io/1330752',
    release: process.env.SENTRY_RELEASE,
    environment: APP_ENV,
    debug: isDevelopment,
    attachStacktrace: true,
  })
}

const DEVELOPMENT = 'development'
const PRODUCTION = 'production'
// Окружение максимально приближенное к production, но с небольшими исключениями.
// Например, с теста мы хотим отправлять тег ТЕСТ в AmoCRM и не хотим отправлять события в production GA.
const PRODUCTION_LIKE = 'production-like'

// local, yarn dev => 'development'
// local, yarn build => 'production-like'
// staging, yarn build => 'production-like'
// production, yarn build => 'production'
// IS_PRODUCTION === 'TRUE' только на проде
const APP_ENV = process.env.NODE_ENV === DEVELOPMENT ?
  DEVELOPMENT :
  process.env.IS_PRODUCTION === 'TRUE' ?
    PRODUCTION :
    PRODUCTION_LIKE

module.exports = {
  APP_ENV,
  isDevelopment: APP_ENV === DEVELOPMENT,
  isProductionLike: APP_ENV === PRODUCTION_LIKE,
  isProduction: APP_ENV === PRODUCTION,
}

const { isProduction } = require('../utils/app-environment')

module.exports = language => {
  if (!isProduction) {
    return 'UA-122976231-5'
  }
  if (language === 'en') {
    return 'UA-122976231-2'
  }
  return 'UA-122976231-1'
}

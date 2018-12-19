module.exports = (environment, language) => {
  if (environment !== 'production') {
    return 'UA-122976231-5'
  }
  if (language === 'en') {
    return 'UA-122976231-2'
  }
  return 'UA-122976231-1'
}

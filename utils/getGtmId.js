export default (environment, language, path) => {
  if (environment !== 'production') {
    return 'GTM-W23KLZB'
  }
  if (language === 'en') {
    return 'GTM-TDG7X5G'
  }
  if (path.includes('jobs')) {
    return 'GTM-K5GTSSK'
  }
  return 'GTM-K67FHB5'
}

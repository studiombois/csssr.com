export default (environment, language) => {
  if (environment !== 'production') {
    return 'GTM-W23KLZB'
  }
  if (language === 'en') {
    return 'GTM-TDG7X5G'
  }
  return 'GTM-K67FHB5'
}

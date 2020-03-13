import { isProduction } from '../utils/app-environment'

export default language => {
  if (!isProduction) {
    return 'GTM-W23KLZB'
  }
  if (language === 'en' || language === 'en-sg') {
    return 'GTM-TDG7X5G'
  }
  return 'GTM-K67FHB5'
}

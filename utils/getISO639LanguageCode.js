/* eslint-disable */
export default lng => {
  switch (lng) {
    case 'ru-RU':
    case 'ru':
      return 'ru'

    case 'en-EN':
    case 'en':
      return 'en'

    case 'de-DE':
    case 'de':
      return 'de'

    default:
      return 'en'
    }
}
/* eslint-enable */

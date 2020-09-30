export default (inquiryTypeId, activeAddressId, language) => {
  if (inquiryTypeId === 'new-project') {
    if (language === 'en') {
      return {
        sg: 'anastasia_ignatenko',
        ee: 'sonya_kiseleva',
        ru: 'olga_shevchenko',
      }[activeAddressId]
    }
    if (language === 'ru') {
      return {
        sg: 'anastasia_ignatenko',
        ee: 'sonya_kiseleva',
        // TODO: Временное решение пока не вышел новый человек в ru
        ru: 'sonya_kiseleva',
      }[activeAddressId]
    }
  }

  return 'victoria_zubareva'
}

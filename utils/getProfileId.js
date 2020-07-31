export default (inquiryTypeId, activeAddressId, language) => {
  if (inquiryTypeId === 'new-project') {
    if (language === 'en') {
      return {
        sg: 'anastasia_ignatenko',
        ee: 'anastasia_vnuchenko',
        ru: 'olga_shevchenko',
      }[activeAddressId]
    }
    if (language === 'ru') {
      return {
        sg: 'anastasia_ignatenko',
        ee: 'anastasia_vnuchenko',
        // TODO: Временное решение пока не вышел новый человек в ru
        ru: 'anastasia_vnuchenko',
      }[activeAddressId]
    }
  }

  return 'victoria_zubareva'
}

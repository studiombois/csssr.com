export default (inquiryTypeId, activeAddressId, language, profileId) => {
  if (inquiryTypeId === 'new-project') {
    if (language == 'ru' && profileId === 'sonya_kiseleva') {
      return true
    }
    // TODO: Шевченко спрятана кнопка букинга звонков до 01.09.2020
    if (language == 'en' && profileId !== 'olga_shevchenko') {
      return true
    }
  }
  return false
}

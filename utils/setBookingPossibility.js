export default (inquiryTypeId, activeAddressId, language, profileId) => {
  if (inquiryTypeId === 'new-project') {
    // TODO: Временно Внученко пока не вышел новый человек в ru
    if (language == 'ru' && activeAddressId === 'ru' && profileId === 'anastasia_vnuchenko') {
      return true
    }
    // TODO: Шевченко спрятана кнопка букинга звонков до 01.09.2020
    if (language == 'en' && profileId !== 'olga_shevchenko') {
      return true
    }
  }
  return false
}

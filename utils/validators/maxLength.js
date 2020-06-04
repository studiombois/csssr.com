import interpolate from '../../utils/interpolate'

export default (maxLength, translations, language) => (value) =>
  value && value.length > maxLength
    ? interpolate(translations.common.form.errors.maxLength, maxLength, language)
    : undefined

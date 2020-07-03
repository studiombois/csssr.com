export default (translations) => (value) => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return translations.common.form.errors.required
  }
  return undefined
}

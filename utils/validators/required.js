export default (translations) => (value) => {
  if (!value || value.trim() === '') {
      return translations.common.form.errors.required
  }
  return undefined
}

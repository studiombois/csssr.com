export default (translations) => (value) => {
  if (value) {
    if (value.trim() === '') {
      return translations.common.form.errors.required
    }

    return undefined
  }

  return translations.common.form.errors.required
}

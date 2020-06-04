export default (translations) => (value) =>
  value ? undefined : translations.common.form.errors.required

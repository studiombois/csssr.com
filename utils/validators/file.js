export default (fileExt, translations) => (value) =>
  value.indexOf(`.${fileExt.toLowerCase()}`) !== -1
    ? undefined
    : translations.common.form.errors.file

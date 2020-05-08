export default (fileExt, t) => (value) =>
  value.indexOf(`.${fileExt.toLowerCase()}`) !== -1 ? undefined : t('common:form.errors.file')

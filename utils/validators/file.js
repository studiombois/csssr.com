export default (fileExt, t) => value => value.includes(`.${fileExt.toLowerCase()}`) ? undefined : t('common:form.errors.file')

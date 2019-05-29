export default (maxLength, t) => value => value && value.length > maxLength ? t('common:form.errors.maxLength', { maxLength }) : undefined

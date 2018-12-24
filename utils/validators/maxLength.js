export default (maxLength, t) => value => value && value.length > maxLength ? t('common:formErrors.maxLength', { maxLength }) : undefined

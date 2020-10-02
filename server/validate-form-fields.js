import contactFormValidationRules from '../utils/validators/contactFormValidationRules'

module.exports = (translations, formName, fieldsValues) => {
  const validationObject = contactFormValidationRules(translations)(fieldsValues)

  const failedValidationFields = Object.keys(validationObject).filter(
    (field) => validationObject[field],
  )
  const hasValidationErrors = failedValidationFields.length > 0

  if (hasValidationErrors) {
    return { errors: validationObject }
  }

  return { errors: null }
}

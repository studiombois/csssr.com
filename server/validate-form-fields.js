const contactFormValidationRules = require('../utils/validators/contactFormValidationRules').default

module.exports = (t, fieldsValues) => {
  const validationObject = contactFormValidationRules(t)(fieldsValues)
  const failedValidationFields = Object.keys(validationObject).filter(
    field => validationObject[field],
  )
  const hasValidationErrors = failedValidationFields.length > 0

  if (hasValidationErrors) {
    return { errors: validationObject }
  }

  return { errors: null }
}

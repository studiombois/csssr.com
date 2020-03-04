const contactFormValidationRules = require('../utils/validators/contactFormValidationRules').default
const calculatorFormValidationRules = require('../utils/validators/calculatorFormValidationRules')
  .default

module.exports = (t, formName, fieldsValues) => {
  const validationObject =
    formName === 'calculatorForm'
      ? calculatorFormValidationRules(t)(fieldsValues)
      : contactFormValidationRules(t)(fieldsValues)

  const failedValidationFields = Object.keys(validationObject).filter(
    field => validationObject[field],
  )
  const hasValidationErrors = failedValidationFields.length > 0

  if (hasValidationErrors) {
    return { errors: validationObject }
  }

  return { errors: null }
}

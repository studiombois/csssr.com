import contactFormValidationRules from '../utils/validators/contactFormValidationRules'
import calculatorFormValidationRules from '../utils/validators/calculatorFormValidationRules'

module.exports = (translations, formName, fieldsValues) => {
  const validationObject =
    formName === 'calculatorForm'
      ? calculatorFormValidationRules(translations)(fieldsValues)
      : contactFormValidationRules(translations)(fieldsValues)

  const failedValidationFields = Object.keys(validationObject).filter(
    (field) => validationObject[field],
  )
  const hasValidationErrors = failedValidationFields.length > 0

  if (hasValidationErrors) {
    return { errors: validationObject }
  }

  return { errors: null }
}

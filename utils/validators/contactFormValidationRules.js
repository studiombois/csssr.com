import {
  composeValidators,
  email,
  required,
} from '../../utils/validators/index'

export default t => values => {
  const errors = {}
  errors.name = required(t)(values.name)
  errors.email = composeValidators(required(t), email(t))(values.email)

  if (!values.consents || (values.consents && !values.consents.includes('privacyPolicy'))) {
    errors.privacyPolicy = t('common:formErrors.required')
  }

  return errors
}

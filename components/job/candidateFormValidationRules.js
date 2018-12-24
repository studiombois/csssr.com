import {
  composeValidators,
  email,
  link,
  maxLength,
  required,
  file,
} from '../../utils/validators/index'

export default (vacancy, t) => values => {
  const errors = {}

  errors.firstname = required(t)(values.firstname)
  errors.lastname = required(t)(values.lastname)
  errors.location = required(t)(values.location)
  errors.email = composeValidators(required(t), email(t))(values.email)
  errors.comment = maxLength(4096, t)(values.comment)

  if (!values.consents || (values.consents && !values.consents.includes('privacyPolicy'))) {
    errors.privacyPolicy = t('common:formErrors.required')
  }

  if (vacancy.hasGithub) {
    errors.github = composeValidators(required(t), link(t))(values.github)
  }

  if (vacancy.hasPortfolio) {
    errors.portfolio = composeValidators(required(t), link(t))(values.portfolio)
  }

  if (vacancy.hasResume) {
    errors.resume = composeValidators(required(t), link(t))(values.resume)
  }

  if (vacancy.hasFile && vacancy.fileExt) {
    errors.file = composeValidators(required(t), file(vacancy.fileExt, t))(values.file)
  }

  return errors
}

import {
  composeValidators,
  email,
  link,
  maxLength,
  required,
  file,
} from '../../utils/validators/index'

export default vacancy => values => {
  const errors = {}

  errors.firstname = required(values.firstname)
  errors.lastname = required(values.lastname)
  errors.location = required(values.location)
  errors.email = composeValidators(required, email)(values.email)
  errors.comment = maxLength(4096)(values.comment)

  if (!values.consents || (values.consents && !values.consents.includes('privacyPolicy'))) {
    errors.privacyPolicy = 'Required'
  }

  if (vacancy.hasGithub) {
    errors.github = composeValidators(required, link)(values.github)
  }

  if (vacancy.hasPortfolio) {
    errors.portfolio = composeValidators(required, link)(values.portfolio)
  }

  if (vacancy.hasResume) {
    errors.resume = composeValidators(required, link)(values.resume)
  }

  if (vacancy.hasFile && vacancy.fileExt) {
    errors.file = composeValidators(required, file(vacancy.fileExt))(values.file)
  }

  return errors
}

import {
  composeValidators,
  email,
  file,
  integer,
  link,
  maxLength,
  required,
} from '../../utils/validators/index'

export default (vacancy, t) => values => {
  const errors = {}

  errors.firstname = required(t)(values.firstname)
  errors.lastname = required(t)(values.lastname)
  errors.location = required(t)(values.location)
  errors.email = composeValidators(required(t), email(t))(values.email)
  errors.comment = maxLength(4096, t)(values.comment)
  errors.privacyPolicy = required(t)(values.privacyPolicy)
  errors.age = integer(t)(values.age)

  if (vacancy.hasGithub && values.github) {
    errors.github = link(t)(values.github)
  }

  if (vacancy.hasPortfolio && values.portfolio) {
    errors.portfolio = link(t)(values.portfolio)
  }

  if (vacancy.hasResume && values.resume) {
    errors.resume = link(t)(values.resume)
  }

  if (vacancy.hasFile && vacancy.fileExt && values.file) {
    errors.file = file(vacancy.fileExt, t)(values.file)
  }

  if (vacancy.hasResume && values.resume && !values.file) {
    errors.resume = composeValidators(required(t), link(t))(values.resume)
  }

  if (vacancy.hasFile && vacancy.fileExt && !values.resume) {
    errors.file = composeValidators(required(t), file(vacancy.fileExt, t))(values.file)
  }

  return errors
}

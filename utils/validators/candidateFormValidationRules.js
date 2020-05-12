import { composeValidators, email, file, integer, link, maxLength, required } from './index'

export default (vacancy, translations, language) => (values) => {
  const errors = {}

  errors.firstname = required(translations)(values.firstname)
  errors.lastname = required(translations)(values.lastname)
  errors.location = required(translations)(values.location)
  errors.email = composeValidators(required(translations), email(translations))(values.email)
  errors.comment = maxLength(4096, translations, language)(values.comment)
  errors.privacyPolicy = required(translations)(values.privacyPolicy)
  errors.age = integer(translations)(values.age)

  if (vacancy.hasGithub && values.github) {
    errors.github = link(translations)(values.github)
  }

  if (vacancy.hasPortfolio && values.portfolio) {
    errors.portfolio = link(translations)(values.portfolio)
  }

  if (vacancy.hasResume) {
    if (!values.file) {
      errors.resume = composeValidators(required(translations), link(translations))(values.resume)
    }

    if (values.resume) {
      errors.resume = link(translations)(values.resume)
    }
  }

  if (vacancy.hasFile && vacancy.fileExt) {
    if (values.file) {
      errors.file = file(vacancy.fileExt, translations)(values.file)
    }

    if (!values.resume) {
      errors.file = composeValidators(
        required(translations),
        file(vacancy.fileExt, translations),
      )(values.file)
    }
  }

  return errors
}

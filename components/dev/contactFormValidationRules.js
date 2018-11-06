import simpleEmailRegexp from '../../utils/simpleEmailRegexp'

export default values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!values.email.match(simpleEmailRegexp)) {
    errors.email = 'Invalid email format'
  }
  if (!values.consents || (values.consents && !values.consents.includes('privacyPolicy'))) {
    errors.privacyPolicy = 'Required'
  }

  return errors
}
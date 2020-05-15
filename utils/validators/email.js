import simpleEmailRegexp from '../simpleEmailRegexp'

export default (translations) => (value) =>
  value.match(simpleEmailRegexp) ? undefined : translations.common.form.errors.email

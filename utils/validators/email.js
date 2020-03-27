import simpleEmailRegexp from '../simpleEmailRegexp'

export default (t) => (value) =>
  value.match(simpleEmailRegexp) ? undefined : t('common:form.errors.email')

import simpleLinkRegexp from '../simpleLinkRegexp'

export default (translations) => (value) =>
  value && value.match(simpleLinkRegexp) ? undefined : translations.common.form.errors.link

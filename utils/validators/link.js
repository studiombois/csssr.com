import simpleLinkRegexp from '../simpleLinkRegexp'

export default t => value => value.match(simpleLinkRegexp) ? undefined : t('common:form.errors.link')

import simpleLinkRegexp from '../simpleLinkRegexp'

export default t => value => value !== undefined && value.match(simpleLinkRegexp) ? undefined : t('common:form.errors.link')

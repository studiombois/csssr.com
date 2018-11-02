import simpleLinkRegexp from '../simpleLinkRegexp'

export default value => value.match(simpleLinkRegexp) ? undefined : 'Invalid link format'

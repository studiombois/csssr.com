import simpleEmailRegexp from '../simpleEmailRegexp'

export default value => value.match(simpleEmailRegexp) ? undefined : 'Invalid email format'

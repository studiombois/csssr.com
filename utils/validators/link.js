import simpleLinkRegexp from '../simpleLinkRegexp'

export default value => value.match(simpleLinkRegexp) ? undefined : 'Неверный формат ссылки'

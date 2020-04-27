const ONE_MINUTE = 60 * 1000
const ONE_HOUR = 60 * ONE_MINUTE

const padLeft = (value) => ('0' + value).slice(-2)

export default (dateObject, tzOffsetInHours, language) => {
  const dateInTz = new Date(
    dateObject.getTime() + dateObject.getTimezoneOffset() * ONE_MINUTE + tzOffsetInHours * ONE_HOUR,
  )

  const hours = dateInTz.getHours()
  const minutes = dateInTz.getMinutes()

  if (language === 'ru') {
    return `${padLeft(hours)}:${padLeft(minutes)}`
  }
  return `${padLeft(hours % 12)}:${padLeft(minutes)} ${hours >= 12 ? 'PM' : 'AM'}`
}

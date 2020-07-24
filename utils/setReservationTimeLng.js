export default (lng) => (eventStartTime, eventEndTime) => {
  const startTimeDate = new Date(eventStartTime)
  const endTimeDate = new Date(eventEndTime)

  const year = new Intl.DateTimeFormat(lng, { year: 'numeric' }).format(startTimeDate)
  const month = new Intl.DateTimeFormat(lng, { month: 'long' }).format(startTimeDate)
  const weekday = new Intl.DateTimeFormat(lng, { weekday: 'long' }).format(startTimeDate)
  const day = new Intl.DateTimeFormat(lng, { day: '2-digit' }).format(startTimeDate)

  const startTimeHour = startTimeDate.getHours().toString().padStart(2, '0')
  const startTimeMinute = startTimeDate.getMinutes().toString().padStart(2, '0')

  const endTimeHour = endTimeDate.getHours().toString().padStart(2, '0')
  const endTimeMinute = endTimeDate.getMinutes().toString().padStart(2, '0')

  return `${startTimeHour}:${startTimeMinute} - ${endTimeHour}:${endTimeMinute}, ${weekday}, ${day} ${month}, ${year}`
}

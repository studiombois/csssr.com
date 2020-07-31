import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

const localizationByLanguage = {
  ru: ru,
  en: '',
}

export default (lng) => (eventStartTime, eventEndTime) => {
  const startTimeDate = new Date(eventStartTime)
  const endTimeDate = new Date(eventEndTime)

  const startTimeHour = startTimeDate.getHours().toString().padStart(2, '0')
  const startTimeMinute = startTimeDate.getMinutes().toString().padStart(2, '0')

  const endTimeHour = endTimeDate.getHours().toString().padStart(2, '0')
  const endTimeMinute = endTimeDate.getMinutes().toString().padStart(2, '0')

  return `${startTimeHour}:${startTimeMinute} - ${endTimeHour}:${endTimeMinute}, ${format(
    endTimeDate,
    'EEEE, do MMMM, yyyy',
    { locale: localizationByLanguage[lng] },
  )}`
}

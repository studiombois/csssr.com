import React, { useEffect } from 'react'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import styles, { modal as modalStyles } from './CalendlyBookingButton.styles'
import { L10nConsumer } from '../../../../../utils/l10nProvider'

const CalendlyBookingButton = ({ className, bookingUrl, l10n: { translations } }) => {
  useEffect(() => {
    const isCalendlyEvent = (e) => e.data.event && e.data.event.indexOf('calendly') === 0
    const handleCalendlyMessage = (e) => {
      if (isCalendlyEvent(e) && e.data.event === 'calendly.event_scheduled') {
        window.dataLayer.push({ event: 'booking_success' })
      }
    }

    window.addEventListener('message', handleCalendlyMessage)

    return () => window.removeEventListener('message', handleCalendlyMessage)
  }, [])

  useEffect(() => {
    /*eslint-disable-next-line no-undef */
    return () => Calendly.closePopupWidget()
  }, [])

  return (
    <>
      <button
        className={className}
        data-testid="contactUs:button:bookACall.call"
        onClick={() => {
          /*eslint-disable-next-line no-undef */
          Calendly.initPopupWidget({ url: bookingUrl })
          window.dataLayer.push({ event: 'booking_started' })

          return false
        }}
      >
        {translations.contactUs.bookACall.buttonText}
      </button>

      <Global styles={modalStyles} />
    </>
  )
}

export default React.memo(
  L10nConsumer(styled(CalendlyBookingButton)`
    ${styles}
  `),
)

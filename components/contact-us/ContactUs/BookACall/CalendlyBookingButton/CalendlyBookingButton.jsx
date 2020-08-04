import React from 'react'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import styles, { modal as modalStyles } from './CalendlyBookingButton.styles'
import { L10nConsumer } from '../../../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../../../utils/deviceProvider'

const CalendlyBookingButton = ({ className, l10n: { translations } }) => {
  return (
    <>
      <button
        className={className}
        onClick={() => {
          /*eslint-disable-next-line no-undef */
          Calendly.initPopupWidget({ url: 'https://calendly.com/csssr-group/15min' })

          return false
        }}
      >
        {translations.contactUs.bookACall.buttonText}
      </button>

      <Global styles={modalStyles} />
    </>
  )
}

export default DeviceConsumer(
  L10nConsumer(styled(CalendlyBookingButton)`
    ${styles}
  `),
)

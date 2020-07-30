import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { string, bool } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './BookACall.styles'
import Picture from '../../../ui-kit/Picture'
import ButtonLink from '../../../ui-kit/core-design/ButtonLink'
import profiles from '../../../../data/contact-us/profiles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'
import { TypeInquiryContext } from '../../../../utils/typeInquiryContext'
import getProfileIdByInquiryTypeAndActiveAddress from '../../../../utils/getProfileIdByInquiryTypeAndActiveAddress'
import getBookACall from '../../../../utils/getBookACall'
import setReservationTimeLng from '../../../../utils/setReservationTimeLng'
import { MapContext } from '../../../../utils/mapContext'
import { ReactComponent as SuccessIconSmall } from '../../../../static/icons/contact-us/book-a-call/success_small.svg'
import { ReactComponent as SuccessIconBig } from '../../../../static/icons/contact-us/book-a-call/success_big.svg'

const BookACall = ({ className, l10n: { translations, language }, isMobile }) => {
  const { query } = useRouter()
  const eventStartTime = query.event_start_time
  const eventEndTime = query.event_end_time
  const showCalendlyCallback = eventStartTime || eventEndTime

  const [counter, setCounterValue] = useState(4)
  const [wasCallReservationSuccessful, setCallReservationStatus] = useState(showCalendlyCallback)
  const { inquiryTypeId } = useContext(TypeInquiryContext)
  const { activeAddressId } = useContext(MapContext)
  const profileId = getProfileIdByInquiryTypeAndActiveAddress(
    inquiryTypeId,
    activeAddressId,
    language,
  )
  const canBookACall = getBookACall(inquiryTypeId, activeAddressId, language, profileId)

  let reservationTime
  if (eventStartTime && eventEndTime) {
    const getReservationTime = setReservationTimeLng(language)

    reservationTime = getReservationTime(eventStartTime, eventEndTime)
  }

  useEffect(() => {
    if (wasCallReservationSuccessful) {
      const intervalId = setInterval(() => {
        if (counter === 0) {
          setCallReservationStatus(false)
          return clearInterval(intervalId)
        }

        setCounterValue(counter - 1)
      }, 1000)

      return () => clearInterval(intervalId)
    }
  }, [wasCallReservationSuccessful, counter])

  const Tag = wasCallReservationSuccessful ? 'div' : 'figure'

  return (
    <Tag className={cn(className, { call_was_booked: wasCallReservationSuccessful })}>
      {wasCallReservationSuccessful && isMobile ? (
        <SuccessIconBig className="success-icon_big" />
      ) : (
        <Picture
          className="manager-avatar"
          images={profiles[profileId].images}
          fallback={profiles[profileId].images.jpg}
          alt={translations.contactUs.bookACall.profiles[profileId].alt}
        />
      )}

      {wasCallReservationSuccessful ? (
        <div className="reservation">
          <div className="reservation-heading">
            {translations.contactUs.bookACall.messages.success.title}
          </div>

          <div className="reservation-time">{reservationTime}</div>

          <div className="reservation-description">
            {translations.contactUs.bookACall.messages.success.description}
          </div>
        </div>
      ) : (
        <>
          <figcaption className="manager">
            <div className="manager-name">
              {translations.contactUs.bookACall.profiles[profileId].name}
            </div>

            <div className="manager-position">
              {translations.contactUs.bookACall.profiles[profileId].position}
            </div>

            <a href={`mailto:${profiles[profileId].email}`} className="email">
              {profiles[profileId].email}
            </a>
          </figcaption>
        </>
      )}

      {canBookACall && (
        <div className="button-wrap">
          {wasCallReservationSuccessful ? (
            <SuccessIconSmall className="success-icon_small" />
          ) : (
            <ButtonLink
              className="button"
              kind={isMobile ? 'primary' : 'third'}
              href={`${profiles[profileId]?.calendlyLink}-${language}`}
            >
              {translations.contactUs.bookACall.buttonText}
            </ButtonLink>
          )}
          <div
            className="communication"
            dangerouslySetInnerHTML={{ __html: translations.contactUs.bookACall.communication }}
          />
        </div>
      )}

      {wasCallReservationSuccessful && <div className="counter">{counter} s</div>}
    </Tag>
  )
}

BookACall.propTypes = {
  wasCallReservationSuccessfulL: bool,
  isMobile: bool,
  className: string,
  reservationTime: string,
}
export default DeviceConsumer(
  L10nConsumer(styled(BookACall)`
    ${styles}
  `),
)

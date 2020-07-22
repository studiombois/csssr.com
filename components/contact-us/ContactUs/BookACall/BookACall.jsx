import React, { useState, useEffect, useContext } from 'react'
import { string, bool } from 'prop-types'
import styled from '@emotion/styled'
import styles from './BookACall.styles'
import Picture from '../../../ui-kit/Picture'
import ButtonLink from '../../../ui-kit/core-design/ButtonLink'
import profiles from '../../../../data/contact-us/profiles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'
import { TypeInquiryContext } from '../../../../utils/typeInquiryContext'
import getProfileIdByInquiryTypeAndActiveAddress from '../../../../utils/getProfileIdByInquiryTypeAndActiveAddress'
import { MapContext } from '../../../../utils/mapContext'
import { ReactComponent as SuccessIconSmall } from '../../../../static/icons/contact-us/book-a-call/success_small.svg'
import { ReactComponent as SuccessIconBig } from '../../../../static/icons/contact-us/book-a-call/success_big.svg'

const BookACall = ({
  className,
  wasCallReservationSuccessful: callReservationStatusFromProps,
  reservationTime,
  l10n: { translations },
  isMobile,
}) => {
  const [counter, setCounterVaule] = useState(4)
  const [wasCallReservationSuccessful, setCallReservationStatus] = useState(
    callReservationStatusFromProps,
  )
  const { inquiryTypeId } = useContext(TypeInquiryContext)
  const { activeAddressId } = useContext(MapContext)
  const profileId = getProfileIdByInquiryTypeAndActiveAddress(inquiryTypeId, activeAddressId)
  const canBookACall = inquiryTypeId === 'new-project' && profileId !== 'olga_shevchenko'

  useEffect(() => {
    if (wasCallReservationSuccessful) {
      const intervalId = setInterval(() => {
        if (counter === 0) {
          setCallReservationStatus(false)
          return clearInterval(intervalId)
        }

        setCounterVaule(counter - 1)
      }, 1000)
    }
  }, [wasCallReservationSuccessful, counter])

  const Tag = wasCallReservationSuccessful ? 'div' : 'figure'

  return (
    <Tag className={className}>
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

            <div className="email">{profiles[profileId].email}</div>
          </figcaption>
        </>
      )}

      {canBookACall &&
        (wasCallReservationSuccessful ? (
          <SuccessIconSmall className="success-icon_small" />
        ) : (
          <ButtonLink className="button" kind={isMobile ? 'primary' : 'third'}>
            {translations.contactUs.bookACall.buttonText}
          </ButtonLink>
        ))}

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

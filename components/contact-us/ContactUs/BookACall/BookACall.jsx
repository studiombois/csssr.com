import React, { useContext } from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './BookACall.styles'
import Picture from '../../../ui-kit/Picture'
import profiles from '../../../../data/contact-us/profiles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { TypeInquiryContext } from '../../../../utils/typeInquiryContext'
import getProfileId from '../../../../utils/getProfileId'
import setBookingPossibility from '../../../../utils/setBookingPossibility'
import { MapContext } from '../../../../utils/mapContext'
import CalendlyBookingButton from './CalendlyBookingButton'

const BookACall = ({ className, l10n: { translations, language } }) => {
  const { inquiryTypeId } = useContext(TypeInquiryContext)
  const { activeAddressId } = useContext(MapContext)
  const profileId = getProfileId(inquiryTypeId, activeAddressId, language)
  const canBookACall = setBookingPossibility(inquiryTypeId, activeAddressId, language, profileId)

  return (
    <figure className={className}>
      <Picture
        className="manager-avatar"
        images={profiles[profileId].images}
        fallback={profiles[profileId].images.jpg}
        alt={translations.contactUs.bookACall.profiles[profileId].alt}
        testid="contactUs:picture:bookACall.avatar"
      />

      <figcaption className="manager">
        <div className="manager-name" data-testid="contactUs:text:bookACall:name">
          {translations.contactUs.bookACall.profiles[profileId].name}
        </div>

        <div className="manager-position" data-testid="contactUs:text:bookACall:position">
          {translations.contactUs.bookACall.profiles[profileId].position}
        </div>

        <a
          href={`mailto:${profiles[profileId].email}`}
          className="email"
          data-testid="contactUs:link:bookACall:email"
        >
          {profiles[profileId].email}
        </a>
      </figcaption>

      {canBookACall && (
        <div className="button-wrap">
          <CalendlyBookingButton bookingUrl={`${profiles[profileId]?.calendlyLink}-${language}`} />
          <div
            className="communication"
            dangerouslySetInnerHTML={{ __html: translations.contactUs.bookACall.communication }}
          />
        </div>
      )}
    </figure>
  )
}

BookACall.propTypes = {
  className: string,
}

export default L10nConsumer(styled(BookACall)`
  ${styles}
`)

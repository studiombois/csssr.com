import React from 'react'
import { string } from 'prop-types'

import styled from '@emotion/styled'
import styles from './ContactUs.styles'
import ContactOptions from './ContactOptions'
import Map from './Map'

import { MapProvider } from '../../../utils/mapContext'
import { TypeInquiryProvider } from '../../../utils/typeInquiryContext'

const ContactUs = ({ className }) => {
  return (
    <div className={className}>
      <div className="map-wrap">
        <MapProvider>
          <Map />
        </MapProvider>
      </div>

      <TypeInquiryProvider>
        <ContactOptions />
      </TypeInquiryProvider>
    </div>
  )
}

ContactUs.propTypes = {
  className: string,
}

export default styled(ContactUs)`
  ${styles}
`

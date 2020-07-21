import React from 'react'
import { string, object } from 'prop-types'

import styled from '@emotion/styled'
import styles from './ContactUs.styles'

import Map from './Map'
import { MapProvider } from '../../../utils/mapContext'

const ContactUs = ({ className }) => {
  return (
    <section className={className}>
      <div className="map-wrap">
        <MapProvider>
          <Map />
        </MapProvider>
      </div>
    </section>
  )
}

ContactUs.propTypes = {
  className: string,
  l10n: object,
}

export default styled(ContactUs)`
  ${styles}
`

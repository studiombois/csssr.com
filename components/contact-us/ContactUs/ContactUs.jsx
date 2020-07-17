import React from 'react'
import { string, object } from 'prop-types'

import styled from '@emotion/styled'
import styles from './ContactUs.styles'

import Map from './Map'

const ContactUs = ({ className }) => {
  return (
    <section className={className}>
      <div className="map-wrap">
        <Map />
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

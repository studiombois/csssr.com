import React from 'react'
import { string } from 'prop-types'

import styled from '@emotion/styled'
import styles from './ContactUs.styles'
import ContactForm from './ContactForm/ContactForm'

const ContactUs = ({ className }) => {
  return (
    <div className={className}>
      <div className="map-wrap" />

      <div className="form-wrap">
        <ContactForm />
      </div>
    </div>
  )
}

ContactUs.propTypes = {
  className: string,
}

export default styled(ContactUs)`
  ${styles}
`

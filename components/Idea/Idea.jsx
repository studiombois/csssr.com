import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Idea.styles'
import Grid from '../ui-kit/core-design/Grid'
import Heading from '../ui-kit/core-design/Heading'
import Button from '../ui-kit/core-design/Button'
import ContactModal from '../ContactModal'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import { L10nConsumer } from '../../utils/l10nProvider'
import { DeviceConsumer } from '../../utils/deviceProvider'
import ideaContent from '../../data/our-projects/idea'

const Idea = ({ className, pageName, l10n: { translations } }) => {
  const [isContactModalVisible, toggleContactModalVisibility] = useState(false)

  return (
    <Grid className={className} as="section" data-testid="OurCases:block.idea">
      <div className="heading-wrapper">
        <div className="heading-text">
          <Heading.H2
            type="slab"
            size="m"
            dangerouslySetInnerHTML={{ __html: ideaContent.heading(translations) }}
            className="heading"
          />

          <div className="button-wrapper" data-testid="OurCases:block.idea.modalButton">
            <Button
              data-testid={`Header:button.contactUs`}
              onClick={() => toggleContactModalVisibility(true)}
              className="button"
              dangerouslySetInnerHTML={{ __html: ideaContent.button(translations) }}
            />
          </div>
        </div>
      </div>

      {typeof window !== 'undefined' &&
        isContactModalVisible &&
        ReactDOM.createPortal(
          <ContactModal onClose={() => toggleContactModalVisibility(false)} pageName={pageName} />,
          document.getElementById('main'),
        )}
    </Grid>
  )
}

Idea.propTypes = {
  className: string,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Idea)`
      ${styles}
    `),
  ),
)

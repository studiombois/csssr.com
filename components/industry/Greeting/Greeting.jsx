import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { string, object, func } from 'prop-types'
import translate from '../../../utils/translate-wrapper'
import styled from '@emotion/styled'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import styles from './Greeting.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import Button from '../../ui-kit/core-design/Button'
import ButtonLink from '../../ui-kit/core-design/ButtonLink'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import ContactModal from '../../ContactModal'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const Greeting = ({
  t,
  className,
  pageName,
  id,
  content: { heading, text, button, images, imgAlt },
  isIe11,
  isMobile,
  isTablet,
}) => {
  const [isContactModalVisible, toggleContactModalVisibility] = useState(false)
  const textType = isMobile || isTablet ? 'regular' : 'strong'

  const handleButtonClick = () => {
    disablePageScroll(document.body)
    toggleContactModalVisibility(true)
  }
  const handleHideContactModal = () => {
    enablePageScroll(document.body)
    toggleContactModalVisibility(false)
  }

  return (
    <Grid className={className} as="section" id={id}>
      <Heading.H1
        type="slab"
        size="l"
        dangerouslySetInnerHTML={{ __html: t(heading) }}
        className="heading"
      />
      <Text
        type={textType}
        size="m"
        dangerouslySetInnerHTML={{ __html: t(text) }}
        className="text"
      />
      <PictureForAllResolutions
        images={images}
        fallback={images['desktop.l'].png}
        alt={t(imgAlt)}
        className="image"
      />

      {isIe11 ? (
        <ButtonLink
          href="#hire-us"
          kind="primary"
          className="button"
          dangerouslySetInnerHTML={{ __html: t('common:header.action') }}
        />
      ) : (
        <Button
          className="button"
          kind="primary"
          dangerouslySetInnerHTML={{ __html: t(button) }}
          onClick={handleButtonClick}
        />
      )}

      {typeof window !== 'undefined' &&
        isContactModalVisible &&
        ReactDOM.createPortal(
          <ContactModal onClose={handleHideContactModal} pageName={pageName} />,
          document.getElementById('main'),
        )}
    </Grid>
  )
}

Greeting.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
}

export default translate(
  DeviceConsumer(
    MsBrowserConsumer(styled(Greeting)`
      ${styles}
    `),
  ),
)

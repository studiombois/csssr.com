import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import { string, any, bool } from 'prop-types'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import Button from './ui-kit/core-design/Button'
import ButtonLink from './ui-kit/core-design/ButtonLink'
import ContactModal from './ContactModal'
import { MsBrowserConsumer } from '../utils/msBrowserProvider'

const Greeting = ({ className, pageName, dangerouslySetInnerHTML, isIe11 }) => {
  const [isContactModalVisible, toggleContactModalVisibility] = useState(false)

  const handleButtonClick = () => {
    disablePageScroll(document.body)
    toggleContactModalVisibility(true)
  }
  const handleHideContactModal = () => {
    enablePageScroll(document.body)
    toggleContactModalVisibility(false)
  }

  return (
    <Fragment>
      {isIe11 ? (
        <ButtonLink
          href="#hire-us"
          kind="primary"
          className={className}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        />
      ) : (
        <Button
          className={className}
          kind="primary"
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
          onClick={handleButtonClick}
        />
      )}

      {typeof window !== 'undefined' &&
        isContactModalVisible &&
        ReactDOM.createPortal(
          <ContactModal onClose={handleHideContactModal} pageName={pageName} />,
          document.getElementById('main'),
        )}
    </Fragment>
  )
}

Greeting.propTypes = {
  className: string,
  pageName: string,
  dangerouslySetInnerHTML: any,
  isIe11: bool,
}

export default MsBrowserConsumer(Greeting)
import React, { useState, useEffect, useRef, Fragment } from 'react'
import { string, func, bool } from 'prop-types'
import ReactDOM from 'react-dom'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import cn from 'classnames'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import styles from './Header.styles'

import Menu from './Menu'
import Links from './Links'
import Button from '../ui-kit/core-design/Button'
import ContactModal from '../ContactModal'
import Logo from '../../static/icons/csssr_logo.svg'
import Burger from '../../static/icons/header/burger.svg'
import Cross from '../../static/icons/header/close.svg'

import translate from '../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../utils/deviceProvider'

const Header = ({ className, lng, t, isIe11, isMobile, pageName, isButtonVisible = true }) => {
  let lastScrollTopValue = useRef(0)
  const [isDropdownOpened, toggleDropdown] = useState(false)
  const [isHeaderVisible, toggleHeaderVisibility] = useState(true)
  const [isContactModalVisible, toggleContactModalVisibility] = useState(false)

  useEffect(() => {
    if (isMobile) {
      if (isDropdownOpened || isContactModalVisible) {
        disablePageScroll(document.body)
      } else {
        enablePageScroll(document.body)
      }
    }

    const handleScroll = (event) => {
      const headerHeight = 64
      const {
        target: { scrollingElement },
      } = event
      const isScrollingElementHtmlOrBodyNode =
        scrollingElement === document.documentElement || scrollingElement === document.body
      const scrollTopValue = isScrollingElementHtmlOrBodyNode && scrollingElement.scrollTop
      const isScrollingDown =
        scrollTopValue > lastScrollTopValue.current && scrollTopValue > headerHeight

      if (isScrollingDown) {
        if (isHeaderVisible) toggleHeaderVisibility(false)
      } else {
        if (!isHeaderVisible) {
          toggleHeaderVisibility(true)
          toggleDropdown(false)
        }
      }

      if (scrollTopValue === lastScrollTopValue.current) {
        lastScrollTopValue.current = scrollTopValue - 1
      } else {
        lastScrollTopValue.current = scrollTopValue
      }
    }

    if (!isIe11) {
      document.addEventListener('scroll', handleScroll)

      return () => document.removeEventListener('scroll', handleScroll)
    }
  })

  const handleButtonClick = () => {
    disablePageScroll(document.body)

    if (isMobile) {
      toggleDropdown(false)
    }

    toggleContactModalVisibility(true)
  }
  const handleHideContactModal = () => {
    enablePageScroll(document.body)
    toggleContactModalVisibility(false)
  }

  const Icon = isDropdownOpened ? Cross : Burger
  const CommonHeaderContent = () => (
    <Fragment>
      <Menu />
      <Links />
      {isButtonVisible && (
        <Button
          onClick={handleButtonClick}
          className="button_action"
          dangerouslySetInnerHTML={{ __html: t('common:header.action') }}
        />
      )}
    </Fragment>
  )

  return (
    <header
      className={cn(className, {
        visible: isHeaderVisible,
        invisible: !isHeaderVisible,
      })}
    >
      <NextLink href={`/${lng}`}>
        <a className="logo-wrapper">
          <Logo className="logo" />
        </a>
      </NextLink>

      {isMobile ? (
        <Fragment>
          <button className="burger" onClick={() => toggleDropdown(!isDropdownOpened)}>
            <Icon />
          </button>

          <div
            className={cn('dropdown', {
              dropdown_closed: !isDropdownOpened,
            })}
            data-scroll-lock-scrollable
          >
            <CommonHeaderContent />
          </div>
        </Fragment>
      ) : (
        <CommonHeaderContent />
      )}

      {typeof window !== 'undefined' &&
        isContactModalVisible &&
        ReactDOM.createPortal(
          <ContactModal onClose={handleHideContactModal} pageName={pageName} />,
          document.getElementById('main'),
        )}
    </header>
  )
}

Header.propTypes = {
  className: string,
  isIe11: bool,
  isMobile: bool,
  t: func,
  isButtonVisible: bool,
}

export default translate(
  DeviceConsumer(
    MsBrowserConsumer(styled(Header)`
      ${styles}
    `),
  ),
)

import React, { useEffect, useRef, useState } from 'react'
import { bool, func, string } from 'prop-types'
import { withRouter } from 'next/router'
import NextLink from 'next/link'
import Dropdown from './Dropdown'
import styled from '@emotion/styled'
import cn from 'classnames'
import { clearQueueScrollLocks, disablePageScroll, enablePageScroll } from 'scroll-lock'
import styles from './NewHeaderPrototype.styles'

import Logo from '../../static/icons/csssr_logo.svg'
import Burger from './static/icons/burger.svg'
import Cross from './static/icons/cross_new.svg'

import translate from '../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../utils/deviceProvider'

const NewHeaderPrototype = ({ className, lng, t, router: { query }, isIe11, isMobile }) => {
  let lastScrollTopValue = useRef(0)
  const eventStartTime = query.event_start_time
  const eventEndTime = query.event_end_time
  const showCalendlyCallback = eventStartTime || eventEndTime
  const [isDropdownOpened, toggleDropdown] = useState(showCalendlyCallback || true)
  const [isHeaderVisible, toggleHeaderVisibility] = useState(true)

  useEffect(() => {
    if (isMobile) {
      if (isDropdownOpened) {
        clearQueueScrollLocks()
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
        if (isMobile && isDropdownOpened) {
          toggleHeaderVisibility(true)
        } else if (isHeaderVisible) {
          toggleHeaderVisibility(false)
        }
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

  const Icon = isDropdownOpened ? Cross : Burger

  return (
    <header
      className={cn(className, {
        visible: isHeaderVisible,
        invisible: !isHeaderVisible,
        is_dropdown_opened: isDropdownOpened,
      })}
    >
      <button className="burger" onClick={() => toggleDropdown(!isDropdownOpened)}>
        <Icon />
      </button>

      <NextLink href={`/${lng}`}>
        <a className="logo-wrapper" data-testid="Header:link.logo">
          <Logo className="logo" />
        </a>
      </NextLink>

      <Dropdown isOpened={isDropdownOpened} />
    </header>
  )
}

NewHeaderPrototype.propTypes = {
  className: string,
  isIe11: bool,
  isMobile: bool,
  t: func,
}

export default translate(
  withRouter(
    DeviceConsumer(
      MsBrowserConsumer(styled(NewHeaderPrototype)`
        ${styles}
      `),
    ),
  ),
)

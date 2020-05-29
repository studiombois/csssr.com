import React, { useState } from 'react'
import { bool, func, string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Dropdown.styles'
import LanguageSwitcher from './LanguageSwitcher'
import Button from '../../ui-kit/core-design/Button'

import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { mainNav, subNav } from '../data/nav'

const Dropdown = ({ className, lng, t, isIe11, isMobile, isOpened }) => {
  const [activeMainNavItem, setActiveMainNavItem] = useState('dev')

  return (
    <div
      className={cn(className, {
        is_opened: isOpened,
      })}
      data-scroll-lock-scrollable
    >
      <div className="side-bar">
        <ul className="main-nav">
          {mainNav.map((id) => (
            <li key={id} className={cn('main-nav-item', { is_active: id === activeMainNavItem })}>
              <button className="main-nav-item-button" onClick={() => setActiveMainNavItem(id)} />
              <div className="main-nav-item-title">{`.${id}`}</div>
            </li>
          ))}
        </ul>
        <LanguageSwitcher />
      </div>
      <div className="sub-nav"></div>
      <Button className="button_action">Contact us</Button>
    </div>
  )
}

Dropdown.propTypes = {
  className: string,
  isIe11: bool,
  isMobile: bool,
  t: func,
}

export default translate(
  DeviceConsumer(
    MsBrowserConsumer(styled(Dropdown)`
      ${styles}
    `),
  ),
)

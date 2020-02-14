import React, { useState, useRef } from 'react'
import { string, func, bool } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Menu.styles'

import Link from '../../ui-kit/core-design/Link'
import Nav from './Nav'
import ClickOutside from '../../ClickOutside'

import headerLinks from '../../../data/headerLinks'

import translate from '../../../utils/translate-wrapper'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const { menu } = headerLinks
const Menu = ({ className, isMobile, t }) => {
  const menuRef = useRef(null)
  const [activeItem, setActiveItem] = useState(null)
  const [animationDirection, setAnimationDirection] = useState(null)

  const handleMouseOver = item => event => {
    if (isMobile) {
      event.preventDefault()
      return
    }

    const prevActiveItemIndex = menu.findIndex(({ id }) => id === activeItem)
    const activeItemIndex = menu.findIndex(({ id }) => id === item)

    setAnimationDirection(prevActiveItemIndex < activeItemIndex ? 'right' : 'left')
    setActiveItem(item)
  }

  const handleResetActiveItem = () => setActiveItem(null)

  const handleMouseOut = event => {
    if (isMobile) {
      event.preventDefault()
      return
    }

    if (activeItem !== null && !menuRef.current.contains(event.relatedTarget)) {
      handleResetActiveItem()
    }
  }

  const handleClick = item => event => {
    if (!isMobile) {
      event.preventDefault()
      return
    }

    setActiveItem(item)
  }

  return (
    <ClickOutside onOutsideClick={handleResetActiveItem}>
      <div
        className={cn(className, {
          with_hidden_menu: activeItem,
        })}
        onMouseOut={handleMouseOut}
        ref={menuRef}
        data-scroll-lock-scrollable
      >
        <ul className="menu">
          {menu.map(({ id, title }) => (
            <Link
              className={cn('menu-item', {
                'menu-item_active': id === activeItem,
              })}
              as={isMobile ? 'button' : 'li'}
              key={title}
              type="top_menu"
              onMouseOver={handleMouseOver(id)}
              onClick={handleClick(id)}
              dangerouslySetInnerHTML={{ __html: t(title) }}
            />
          ))}
        </ul>

        <Nav
          activeItem={activeItem}
          animationDirection={animationDirection}
          onBackButtonClick={handleResetActiveItem}
        />
      </div>
    </ClickOutside>
  )
}

Menu.propTypes = {
  className: string,
  isMobile: bool,
  lng: string,
  t: func,
}

export default translate()(
  DeviceConsumer(styled(Menu)`
    ${styles}
  `),
)

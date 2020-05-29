import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './MainNav.styles'
import { mainNav } from '../../data/nav'

const MainNav = ({ className, activeItem, onNavItemClick }) => (
  <ul className={className}>
    {mainNav.map((id) => (
      <li key={id} className={cn('main-nav-item', { is_active: id === activeItem })}>
        <button className="main-nav-item-button" onClick={() => onNavItemClick(id)} />
        <div className="main-nav-item-title">{`.${id}`}</div>
      </li>
    ))}
  </ul>
)

MainNav.propTypes = {
  className: string,
}

export default styled(MainNav)`
  ${styles}
`

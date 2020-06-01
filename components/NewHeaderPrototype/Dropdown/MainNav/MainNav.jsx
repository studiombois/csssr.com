import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './MainNav.styles'
import { mainNav } from '../../data/nav'

const ruNavTitlesByMainNavIds = {
  dev: 'Paзработка',
  store: 'Магазин',
  blog: 'Блог',
  school: 'Школа',
  jobs: 'Карьера',
  podcasts: 'Подкасты',
}

const MainNav = ({ className, activeItem, onNavItemClick, lng }) => (
  <ul className={className}>
    {mainNav.map((id) => {
      if (lng === 'en') {
        if (id === 'school' || id === 'podcasts') {
          return
        }
      }

      return (
        <li key={id} className={cn('main-nav-item', { is_active: id === activeItem })}>
          <button className="main-nav-item-button" onClick={() => onNavItemClick(id)} />
          <div className="main-nav-item-title">
            {lng === 'en' ? `.${id}` : ruNavTitlesByMainNavIds[id]}
          </div>
        </li>
      )
    })}
  </ul>
)

MainNav.propTypes = {
  className: string,
}

export default styled(MainNav)`
  ${styles}
`

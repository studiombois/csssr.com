import React, { PureComponent } from 'react'
import { withRouter } from 'next/router'
import { bool, func } from 'prop-types'
import cn from 'classnames'
import { translate } from 'react-i18next'
import CrossIcon from '../static/icons/cross.svg'
import ClickOutside from './ui-kit/ClickOutside'
import Link from 'next/link'

const items = [{
  path: '',
  key: 'common:menu.softwareEngineering',
}, {
  path: '/recruitment',
  key: 'common:menu.recruitment',
}, {
  path: '/company',
  key: 'common:menu.company',
}, {
  path: '/products',
  key: 'common:menu.products',
}, {
  path: '/education',
  key: 'common:menu.education',
}]

const crossIcon = <CrossIcon width='1.5rem' height='1.5rem'/>
const clickOutsideStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  height: '100%',
}


export class SideBar extends PureComponent {
  static propTypes = {
    isOpened: bool,
    onToggle: func,
    onClose: func,
  }

  renderNavItem = ({ path, key }) => {
    const { router: { pathname }, t, lng } = this.props
    const languageHref = `/${lng}${path}`

    return (
      <li key={key} className='item'>
        {/* Добавить prefetch когда будут готовы страницы */}
        <Link href={languageHref}>
          <a className={cn('font_burger-menu link', {
            link_active: pathname === languageHref,
          })}>
            {t(key)}
          </a>
        </Link>
        <style jsx>{`
          .link {
            padding-right: 5.5rem;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 3rem;
          }

          .link_active {
            background-color: #7b7b7b;
            color: #fff;
          }
        `}</style>
      </li>
    )
  }

  render() {
    const { isOpened, onToggle, onClose, t } = this.props

    return (
      <aside className={cn('sidebar', {
        sidebar_opened: isOpened,
      })}>
        <ClickOutside
          onOutsideClick={onClose}
          style={clickOutsideStyles}
        >
          <button type='button' aria-label='Close menu' className='close' onClick={onToggle}>
            {crossIcon}
          </button>
          <div className='body'>
            <div className='top'>
              <div className='font_perforator-16-black active'>{t('common:menu.softwareEngineering')}</div>
              <ul className='list'>
                {items.map(this.renderNavItem)}
              </ul>
            </div>
            <div className='bottom'>
              <a
                href='/ru'
                className='font_footer-link'
              >
                Доступно на русском языке
              </a>
              <a
                href='/en'
                className='font_footer-link'
              >
                EN
              </a>
              <a
                href='/de'
                className='font_footer-link'
              >
                DE
              </a>
            </div>
          </div>
        </ClickOutside><style jsx>{`
          .sidebar {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 10000;
            width: 26.5rem;
            background-color: #fff;
            transform: translateX(100%);
            transition: transform 0.3s ease-out;
          }

          .data {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            height: 100%;
          }

          .sidebar:before {
            position: absolute;
            top: 0;
            right: 625rem;
            bottom: 0;
            width: 625rem;
            opacity: 0;
            background-color: #000;
            content: '';
            transition: right 0s ease-out 1s, opacity 0.3s ease-out;
          }

          .sidebar_opened {
            transform: translateX(0);
          }

          .sidebar_opened:before {
            right: 100%;
            z-index: 0;
            opacity: 0.3;
            transition: right 0s ease-out 0s, opacity 0.3s ease-out;
          }

          .close {
            position: absolute;
            z-index: 1;
            top: 1.25rem;
            right: 4rem;
            height: 1.5rem;
            width: 1.5rem;
            border: none;
            background: none;
            cursor: pointer;
          }

          .active {
            position: relative;
            margin-bottom: 4.125rem;
            padding-right: 8rem;
            line-height: 1rem;
            text-align: right;
          }

          /*.active::before {
            position: absolute;
            top: 0.9375rem;
            left: 50%;
            height: 6rem;
            width: 4rem;
            opacity: 0.3;
            background-color: #ff0000;
            content: '';
          }*/

          .body {
            padding-bottom: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
          }

          .top {
            margin-top: 1.5rem;
          }

          .bottom {
            position: relative;
            margin-top: 1rem;
            margin-bottom: -0.375rem;
            padding-right: 5.5rem;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          /*.bottom::before {
            position: absolute;
            top: 1.125rem;
            left: 78%;
            height: 4rem;
            width: 4rem;
            opacity: 0.3;
            background-color: #ff0000;
            content: '';
          }*/

          .bottom a {
            margin-right: 0.125rem;
          }
        `}</style>
      </aside>
    )
  }
}

export default withRouter(translate()(SideBar))

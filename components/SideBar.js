import React, { PureComponent } from 'react'
import { withRouter } from 'next/router'
import { bool, func } from 'prop-types'
import cn from 'classnames'
import { translate } from 'react-i18next'
import CrossIcon from '../static/icons/cross.svg'
import ClickOutside from './ui-kit/ClickOutside'
import getSectionName from '../utils/getSectionName'
import Link from 'next/link'

const items = [{
  path: '',
  key: 'common:menu.dev',
}, {
  path: '/jobs',
  key: 'common:menu.jobs',
  redirect: {
    from: '/en/jobs',
    to: '/ru/jobs',
  },
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

  renderNavItem = ({ path, key, redirect }) => {
    const { router: { pathname }, t, lng } = this.props
    const languageHref = `/${lng}${path}`
    const shouldBeRedirected = redirect && redirect.from === languageHref
    const href = shouldBeRedirected ? redirect.to : languageHref

    return (
      <li key={key} className='item'>
        {shouldBeRedirected
          ? <a href={href} className={cn('font_burger-menu link', {
            link_active: pathname === languageHref,
          })}>
            {t(key)}
          </a>

          : <Link href={href}>
            <a className={cn('font_burger-menu link', {
              link_active: pathname === languageHref,
            })}>
              {t(key)}
            </a>
          </Link>
        }
        <style jsx>{`
          .link {
            padding-right: 5.5rem;
            padding-bottom: 0;
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
    const { router: { pathname }, isOpened, onToggle, onClose, t } = this.props

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
              <div className='font_perforator-16-black active'>{t(getSectionName(pathname))}</div>
              <ul className='list'>
                {items.map(this.renderNavItem)}
              </ul>
            </div>
            <div className='bottom'>
              <a
                href={t('common:languageRedirect.link')}
                className='font_footer-link'
              >
                {t('common:languageRedirect.text')}
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
            margin-bottom: 4.4375rem;
            padding-right: 8rem;
            line-height: 1rem;
            text-align: right;
          }

          .body {
            padding-bottom: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
          }

          .top {
            margin-top: 1.5625rem;
          }

          .bottom {
            padding-right: 5.5rem;
            text-align: right;
          }

        `}</style>
      </aside>
    )
  }
}

export default withRouter(translate()(SideBar))

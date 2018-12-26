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
  path: '/sborka',
  key: 'common:menu.sborka',
}, {
  path: '/school',
  key: 'common:menu.school',
  redirect: {
    from: '/en/school',
    to: '/ru/school',
  },
}, {
  path: '/jobs',
  key: 'common:menu.jobs',
  redirect: {
    from: '/en/jobs',
    to: '/ru/jobs',
  },
}]

const crossIcon = <CrossIcon width='100%' height='100%' />
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
            margin-top: 0;
            padding-bottom: 0;
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

          @media (max-width: 767px) {
            .link {
              padding-right: 3.125rem;
            }
          }
        `}</style>
      </li>
    )
  }

  render() {
    const { router: { pathname }, isOpened, onToggle, onClose, t } = this.props

    return (
      <aside className={cn('sidebar', { sidebar_opened: isOpened })}>
        <ClickOutside
          onOutsideClick={onClose}
          style={clickOutsideStyles}
        >
          <button type='button' aria-label='Close menu' onClick={onToggle}>
            {crossIcon}
          </button>

          <div className='body'>
            <div className='top'>
              <div className='font_perforator-16-black section-name'>
                {t(getSectionName(pathname))}
              </div>
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
          button {
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

          .sidebar {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 10001;
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
            position: fixed;
            right: 100%;
            opacity: 0.3;
            transition: right 0s ease-out 0s, opacity 0.3s ease-out;
          }

          .section-name {
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
            justify-content: flex-start;
            height: 100%;
          }

          .top {
            margin-top: 1.5625rem;
          }

          .bottom {
            margin-top: auto;
            padding-right: 5.5rem;
            text-align: right;
          }

          @media (max-width: 767px) {
            .sidebar {
              width: 20rem;
            }

            button {
              top: 0.75rem;
              right: 1.75rem;
            }

            .section-name {
              margin-bottom: 3.9375rem;
              padding-right: 4.4375rem;
              font-size: 1rem;
              line-height: 1.5rem;
            }

            .body {
              padding-bottom: 4.0625rem;
            }

            .top {
              margin-top: 0.8125rem;
            }

            .bottom {
              padding-right: 3.125rem;
            }
          }

        `}</style>
      </aside>
    )
  }
}

export default withRouter(translate()(SideBar))

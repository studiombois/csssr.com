import React, { PureComponent } from 'react'
import { bool, object, string } from 'prop-types'
import Link from 'next/link'
import cn from 'classnames'
import { translate } from 'react-i18next'
import CSSSRLogoIcon from '../static/icons/csssr_logo.svg'
import BurgerIcon from '../static/icons/burger.svg'

const csssrLogoIcon = <CSSSRLogoIcon style={{ width: '6.0625rem', height: '1.5rem' }} color='black'/>
const burgerIcon = <BurgerIcon style={{ width: '1.5rem', height: '1.125rem' }}/>

class HeaderContent extends PureComponent {
  static propTypes = {
    router: object,
    sectionName: string,
    showHeader: bool,
    pinHeader: bool,
    toggleHeaderAnimations: bool,
    // onSideBarToggle: func,
  }

  render() {
    const {
      pathname,
      lng,
      links,
      sectionName,
      showHeader,
      pinHeader,
      toggleHeaderAnimations,
      onSideBarToggle,
      t,
    } = this.props

    const rootUrl = `/${lng}`

    return (
      <header
        className={cn({
          header: true,
          header_pinned: pinHeader,
          header_visible: !pinHeader && showHeader,
          header_invisible: !pinHeader && !showHeader,
          header_animations_on: toggleHeaderAnimations,
        })}
      >
        <div
          className='grid-container header-content'
        >
          {pathname === rootUrl
            ? <span className='logo-wrapper'>
              {csssrLogoIcon}
            </span>

            : <span className='logo-wrapper'>
              <Link prefetch href={rootUrl}>
                <a>
                  {csssrLogoIcon}
                </a>
              </Link>
            </span>
          }

          <nav className='nav'>
            <ul className='nav-list'>
              {links.map(({ href, label }) => (
                <li
                  className='nav-list-item'
                  key={`nav-link-${href}-${label}`}
                >
                  <a className='nav-list-link font_top-menu' href={href}>{t(label)}</a>
                </li>
              ))}
            </ul>
          </nav>

          <span className='section-name font_perforator-16-black'>
            {/* //TODO: заглушка для теста, убрать при деплое на прод */}
            {/* sectionName || 'Software Engineering' */}
          </span>

          <button type='button' aria-label='Open menu' className='burger' onClick={onSideBarToggle}>
            {burgerIcon}
          </button>

        </div><style jsx>{`
          .header {
            position: absolute;
            top: 0;
            z-index: 9999;
            left: 50%;
            width: 100%;
            transform: translateX(-50%);
            background-color: rgba(255, 255, 255, 0.9);
          }

          .header_invisible {
            position: fixed;
            top: -64px;
          }

          .header_animations_on {
            transition: top 300ms ease 0s;
          }

          .header_visible {
            position: fixed;
            top: 0;
          }

          .header-content {
            margin-right: auto;
            margin-left: auto;
            padding-left: 3rem;
            padding-right: 3rem;
            height: 4rem;
            width: 1888px;
            align-items: center;
            align-content: center;
          }

          .logo-wrapper {
            grid-column: 1 / span 2;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            height: 2.5rem;
            text-align: center;
          }

          .nav {
            grid-column: 3 / span 6;
            height: 2rem;
          }

          .nav-list {
            display: flex;
            width: 100%;
            height: 100%;
          }

          .nav-list-item:not(:last-child) {
            height: 100%;
            margin-right: 1.5rem;
          }

          .nav-list-link {
            height: 2rem;
            cursor: pointer;
          }

          .section-name {
            grid-column: 9 / span 3;
            height: 1.5rem;
            text-align: right;
          }

          .burger {
            margin-left: auto;
            margin-right: auto;
            display: block;
            width: 2rem;
            height: 2rem;
            border: none;
            font-size: 0;
            background: none;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            .header-content {
              padding-left: 0.5rem;
              padding-right: 0.5rem;
              width: 1344px
            }
          }

          @media (max-width: 1359px) {
            .header-content {
              padding-left:  0.5rem;
              padding-right: 0.5rem;
              width: 1248px
            }
          }

        `}</style>
      </header>
    )
  }
}

export default translate()(HeaderContent)

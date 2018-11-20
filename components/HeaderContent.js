import React, { PureComponent } from 'react'
import { bool, object, string, number, func } from 'prop-types'
import cn from 'classnames'
import { translate } from 'react-i18next'
import BurgerIcon from '../static/icons/burger.svg'

const burgerIcon = <BurgerIcon style={{ width: '1.5rem', height: '1.125rem' }}/>

class HeaderContent extends PureComponent {
  static propTypes = {
    router: object,
    sectionName: string,
    logoHref: string,
    logoAlt: string,
    logoSup: string,
    scrollbarWidth: number,
    isHalfed: bool,
    isLogoLink: bool,
    isBurgerVisible: bool,
    isSideBarOpened: bool,
    showHeader: bool,
    pinHeader: bool,
    toggleHeaderAnimations: bool,
    onSideBarToggle: func,
  }

  render() {
    const {
      pathname,
      links,
      logoHref,
      logoAlt,
      logoSup,
      scrollbarWidth,
      isHalfed,
      isLogoLink,
      isBurgerVisible,
      isSideBarOpened,
      showHeader,
      pinHeader,
      toggleHeaderAnimations,
      onSideBarToggle,
      t,
    } = this.props

    return (
      <header
        className={cn({
          header: true,
          header_is_halfed: isHalfed,
          header_pinned: pinHeader,
          header_visible: !pinHeader && showHeader,
          header_invisible: !pinHeader && !showHeader,
          header_animations_on: toggleHeaderAnimations,
          'header_padding-right_equals_scroll-width': isSideBarOpened,
        })}
      >
        <div
          className='grid-container header-content'
        >
          {isLogoLink
            ? <span className='logo-wrapper'>
              <a href={logoHref} >
                <img
                  className='logo'
                  src='/static/icons/csssr_logo.svg'
                  alt={logoAlt}
                />

                {logoSup &&
                  <sup className='font_roboto-slab-light'>
                    {logoSup}
                  </sup>
                }
              </a>
            </span>

            : <span className='logo-wrapper'>
              <span>
                <img
                  className='logo'
                  src='/static/icons/csssr_logo.svg'
                  alt={logoAlt}
                />
                {logoSup &&
                  <sup className='font_roboto-slab-light'>
                    {logoSup}
                  </sup>
                }
              </span>
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
            {t(`common:sectionName.${pathname.slice(1)}`)}
          </span>

          {isBurgerVisible &&
            <button type='button' aria-label='Open menu' className='burger' onClick={onSideBarToggle}>
              {burgerIcon}
            </button>
          }
        </div><style jsx>{`
          sup {
            position: absolute;
            top: -4px;
            left: calc(100% + 7px);
            margin: 0;
            padding: 0;
            height: 100%;
            line-height: 1;
          }

          .header {
            position: absolute;
            top: 0;
            z-index: 9999;
            left: 50%;
            width: 100%;
            transform: translateX(-50%);
            background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%);
          }

          :global(#privacy-policy:not(:target)) ~ .header_is_halfed {
            background-image: linear-gradient(90deg, transparent 50vw , rgba(255, 255, 255, 0.9) 50vw, rgba(255, 255, 255, 0.9) 100%);
          }

          .header_invisible {
            position: fixed;
            top: -4rem;
          }

          .header_animations_on {
            transition: top 300ms ease 0s;
          }

          .header_visible {
            position: fixed;
            top: 0;
          }

          .header_visible.header_padding-right_equals_scroll-width {
            padding-right: ${scrollbarWidth}px;
          }

          .header_padding-right_equals_scroll-width ~ :global(main .jobs-header-logo-container) {
            transform: translateX(calc(-50% - ${scrollbarWidth / 2}px));
          }

          .header-content {
            margin-right: auto;
            margin-left: auto;
            height: 4rem;
            width: 1792px;
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

          .logo-wrapper a,
          .logo-wrapper span {
            position: relative;
            display: inline-block;
            height: 100%;
          }

          .logo {
            width: 6.0625rem;
            height: 1.5rem;
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

          .nav-list-item {
            display: flex;
            height: 100%;
            align-items: center;
          }

          .nav-list-item:not(:last-child) {
            margin-right: 1.5rem;
          }

          .nav-list-link {
            padding-top: 0.125rem;
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
            cursor: pointer;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            .header-content {
              width: 1328px;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            .header-content {
              width: 1232px;
            }
          }

         @media (max-width: 1279px) {
            sup {
              top: -4px;
              left: calc(100% + 2px);
              font-size: 0.625rem
            }

            .header-content {
              width: 944px;
            }

            .section-name,
            .nav-list-link {
              height: 1rem;
            }

            .nav-list-link {
              display: inline-block;
              line-height: 1rem;
              height: 1rem;
            }

            .logo-wrapper {
              padding-top: 0.5625rem;
              height: 2rem;
            }

            .logo {
              width: 4rem;
              height: 1rem;
            }

            @media (max-width: 1023px) {
              .header-content {
                width: 59rem;
              }
            }
          }

        `}</style>
      </header>
    )
  }
}

export default translate()(HeaderContent)

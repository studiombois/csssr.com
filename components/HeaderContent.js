import React, { PureComponent, Fragment } from 'react'
import { bool, object, string, number, func } from 'prop-types'
import Link from 'next/link'
import cn from 'classnames'
import translate from '../utils/translate-wrapper'
import BurgerIcon from '../static/icons/burger.svg'
import scrollStop from '../utils/scrollStop'
import { getFormInputs } from 'final-form-focus'

const burgerIcon = <BurgerIcon style={{ width: '1.5rem', height: '1.125rem' }}/>

class HeaderContent extends PureComponent {
  static propTypes = {
    router: object,
    sectionName: string,
    logoHref: string,
    logoAlt: string,
    logoSup: string,
    scrollbarWidth: number,
    isLogoLink: bool,
    isBurgerVisible: bool,
    isSideBarOpened: bool,
    showHeader: bool,
    pinHeader: bool,
    toggleHeaderAnimations: bool,
    onFocus: func,
    onSideBarToggle: func,
    onScrollToSection: func,
  }

  scrollToForm = formName => () => {
    scrollStop(() => getFormInputs(formName)()[0].focus())
  }

  render() {
    const {
      pathname,
      links,
      logoHref,
      t,
      logoAlt = t('common:headerLogoAlt'),
      logoSup,
      scrollbarWidth,
      isLogoLink,
      isBurgerVisible,
      isSideBarOpened,
      showHeader,
      pinHeader,
      toggleHeaderAnimations,
      onSideBarToggle,
      onFocus,
      onScrollToSection,
    } = this.props
    return (
      <Fragment>
        <header
          onFocus={onFocus}
          className={cn({
            header: true,
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
                <Link href={logoHref}>
                  <a>
                    <img
                      className='logo'
                      src={require('../static/icons/csssr_logo.svg')}
                      alt={logoAlt}
                    />

                    {logoSup &&
                      <sup className='font_roboto-slab-light'>
                        {logoSup}
                      </sup>
                    }
                  </a>
                </Link>
              </span>

              : <span className='logo-wrapper'>
                <span>
                  <img
                    className='logo'
                    src={require('../static/icons/csssr_logo.svg')}
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

            <nav className={cn('nav', {
              'with-logo-sup': logoSup,
            })}>
              <ul className='nav-list'>
                {links.map(({ href, label, scrollToFormName, hideOnTablet }) => (
                  <li
                    className={`nav-list-item${hideOnTablet ? ' nav-list-item_hide-on-tablet' : ''}`}
                    key={`nav-link-${href}-${label}`}
                    onClick={onScrollToSection}
                  >
                    <a
                      className='nav-list-link font_top-menu'
                      href={href}
                      onClick={scrollToFormName ? this.scrollToForm(scrollToFormName) : null}
                    >
                      {t(label)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <span
              className={cn('section-name', 'font_perforator-16-black', {
                'with-logo-sup': logoSup,
              })}
              dangerouslySetInnerHTML={{ __html: t(`common:sectionName.${pathname.slice(1)}`) }}
            />

            {isBurgerVisible &&
              <button type='button' aria-label='Open menu' className='burger' onClick={onSideBarToggle}>
                {burgerIcon}
              </button>
            }
          </div>
        </header>
        <div className='header-background' id='header-background' />
        <style jsx>{`
            sup {
              position: absolute;
              top: -4px;
              left: calc(100% + 7px);
              margin: 0;
              padding: 0;
              height: 100%;
              line-height: 1;
            }

            .header,
            .header-background {
              position: absolute;
              top: 0;
              z-index: 9999;
              left: 50%;
              width: 100%;
              transform: translateX(-50%);
            }

            .header-background {
              z-index: 9998;
              height: 4rem;
              background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%);
            }

            .header_invisible,
            .header_invisible + .header-background {
              position: fixed;
              top: -4rem;
            }

            .header_animations_on,
            .header_animations_on + .header-background {
              transition: top 300ms ease 0s;
            }

            .header_visible,
            .header_visible + .header-background {
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

            .nav.with-logo-sup {
              grid-column: 4 / span 6;
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
              height: 1rem;
              line-height: 1rem;
              text-align: right;
            }

            .section-name.with-logo-sup {
              grid-column: 10 / span 2;
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

            @media (min-width: 768px) and (max-width: 1279px) {
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

              .nav-list-item_hide-on-tablet {
                display: none;
              }

              @media (max-width: 1023px) {
                .header-content {
                  width: 59rem;
                }
              }
            }

            @media (max-width: 767px) {
              nav,
              .section-name {
                display: none;
              }

              .header-background {
                height: 3rem;
                z-index: 1;
              }

              .header-content {
                width: 20.5rem;
                height: 3rem;
              }

              .logo-wrapper {
                padding-top: 1rem;
                padding-bottom: 1rem;
                height: 3rem;
                text-align: left;
              }

              .logo {
                width: 4rem;
                height: 1rem;
              }

              .burger {
                grid-column: 6 / span 1;
              }
            }

          `}
        </style>
      </Fragment>
    )
  }
}

export default translate()(HeaderContent)

import React, { PureComponent } from 'react'
import { withRouter } from 'next/router'
import { bool, func, string } from 'prop-types'
import cn from 'classnames'
import translate from '../utils/translate-wrapper'
import CrossIcon from '../static/icons/cross.svg'
import ClickOutside from './ui-kit/ClickOutside'
import Link from 'next/link'
import isAbsoluteUrl from '../utils/isAbsoluteUrl'
import i18n from '../common/i18n'
import { defaultLocaleByLanguage } from '../common/locales-settings'

const items = [{
  path: '',
  key: 'common:menu.dev',
  testid: 'sidebarMenu:link.dev',
  subItems: [
    {
      path: '/mvp',
      key: 'common:menu.mvp',
      testid: 'sidebarMenu:link.mvp',
    },
    // {
    //   path: '/',
    //   key: 'High load',
    // },
    // {
    //   path: '/',
    //   key: 'Stack migration',
    // },
  ],
},
// {
//   path: '/express',
//   key: 'common:menu.html',
//   testid: 'sidebarMenu:link.html',
//   redirect: {
//     from: '/en/express',
//     to: 'https://express.csssr.com',
//   },
// },
{
  path: 'https://school.csssr.com/ru',
  key: 'common:menu.school',
  testid: 'sidebarMenu:link.school',
}, {
  path: '/jobs',
  key: 'common:menu.jobs',
  testid: 'sidebarMenu:link.jobs',
  useLocale: true,
}]

const crossIcon = <CrossIcon width='100%' height='100%' />

export class SideBar extends PureComponent {
  static propTypes = {
    isOpened: bool,
    onToggle: func,
    onClose: func,
    menuName: string,
  }

  getLanguageRedirectionLink = () => {
    /*
      тут asPath (https://github.com/zeit/next.js/#intercepting-popstate)
      для того что бы на страницах вакансий переадресация при смене языка
      была на эти же страницы, а не на /jobs
    */
    const { router: { asPath }, locale } = this.props

    if (asPath === '/ru/express') {
      return 'https://express.csssr.com'
    }

    const otherLanguage = {
      ru: 'en',
      en: 'ru',
    }

    const language = i18n.services.languageUtils.getLanguagePartFromCode(locale)

    if (asPath.includes('/jobs')) {
      return `/${defaultLocaleByLanguage[otherLanguage[language]]}/jobs`
    }

    const newPathnameParts = asPath.split('/')

    newPathnameParts[1] = otherLanguage[newPathnameParts[1]]

    return newPathnameParts.join('/')
  }

  getNavItem = ({ path, key, subItems, redirect, useLocale, testid }) => {
    const { router: { pathname }, lng, locale } = this.props
    const languageHref = `/${useLocale ? locale : lng}${path}`
    let href
    let shouldReload
    if (isAbsoluteUrl(path)) {
      href = path
      shouldReload = true
    } else {
      const shouldBeRedirected = redirect && redirect.from === languageHref
      if (shouldBeRedirected) {
        href = redirect.to
        shouldReload = true
      } else {
        href = languageHref
        shouldReload = false
      }
    }

    return {
      key,
      shouldReload,
      href,
      isActive: pathname === languageHref,
      subItems: subItems && subItems.map(this.getNavItem),
      testid,
    }
  }

  renderSubItem = ({ key, shouldReload, href, isActive, testid }) => {
    const { t } = this.props

    return (
      <li key={key} className='sub-item'>
        {shouldReload
          ? <a
            href={href}
            className={cn('sub-link', {
              'sub-link_active': isActive,
            })}
            dangerouslySetInnerHTML={{ __html: t(key) }}
            data-testid={testid}
          /> : <Link href={href}>
            <a
              className={cn('sub-link', {
                'sub-link_active': isActive,
              })}
              dangerouslySetInnerHTML={{ __html: t(key) }}
              data-testid={testid}
            />
          </Link>
        }
        <style jsx>{`
          .sub-link {
            margin-top: 0;
            padding-bottom: 0;
            padding-right: 5.5rem;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 1.625rem;
            font-family: 'Roboto', 'Arial', sans-serif;
            font-size: 0.875rem;
            font-weight: 900;
            text-transform: uppercase;
            cursor: pointer;
            color: #a6a6a6;
          }

          .sub-link_active {
            background-color: #7b7b7b;
            color: #fff;
          }

          @media (max-width: 767px) {
            .sub-link {
              padding-right: 3.125rem;
            }
          }
        `}</style>
      </li>
    )
  }

  renderNavItem = ({ key, shouldReload, href, isActive, subItems, testid }) => {
    const { t } = this.props

    return (
      <li key={key} className='item'>
        {shouldReload
          ? <a
            href={href}
            className={cn('font_burger-menu link', {
              link_active: isActive,
            })}
            dangerouslySetInnerHTML={{ __html: t(key) }}
            data-testid={testid}
          /> : <Link href={href}>
            <a
              className={cn('font_burger-menu link', {
                link_active: isActive,
              })}
              dangerouslySetInnerHTML={{ __html: t(key) }}
              data-testid={testid}
            />
          </Link>
        }
        {subItems && <ul className='sub-menu'>{subItems.map(this.renderSubItem)}</ul>}
        <style jsx>{`
          .link {
            margin-top: 0;
            padding-bottom: 0;
            padding-right: 5.5rem;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
            height: 3rem;
          }

          .link_active {
            background-color: #7b7b7b;
            color: #fff;
          }

          .link_active + .sub-menu {
            padding-top: 0.625rem;
          }

          .sub-menu {
            margin-top: -0.375rem;
            overflow: hidden;
            padding-bottom: 1.5625rem;
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
    const { isOpened, onToggle, onClose, t, menuName } = this.props

    const navItems = items.map(this.getNavItem)

    return (
      <aside className={cn('sidebar', { sidebar_opened: isOpened })}>
        <ClickOutside onOutsideClick={onClose}>
          <button type='button' aria-label='Close menu' onClick={onToggle} data-testid='sidebarMenu:button.close'>
            {crossIcon}
          </button>

          <div className='body'>
            <div className='top'>
              <div
                className='font_perforator-16-black section-name'
                dangerouslySetInnerHTML={{ __html: menuName }}
              />
              <ul className='list'>
                {navItems.map(this.renderNavItem)}
              </ul>
            </div>
            <div className='bottom'>
              <a
                href={this.getLanguageRedirectionLink()}
                className='font_link-list_16'
                data-testid='sidebarMenu:link.switchLanguage'
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
            color: #4a4a4a;
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
            transition: transform 150ms ease-out;
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
            pointer-events: none;
          }

          .sidebar_opened {
            transform: translateX(0);
          }

          .sidebar_opened:before {
            position: fixed;
            top: 0;
            right: 26.5rem;
            opacity: 0.3;
            transition: right 0s ease-out 0s, opacity 0.3s ease-out;
            pointer-events: auto;
          }

          .section-name {
            position: relative;
            margin-bottom: 4.125rem;
            padding-right: 8rem;
            line-height: 1rem;
            text-align: right;
          }

          .body {
            padding-bottom: 3.8125rem;
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
              padding-bottom: 3.8125rem;
            }

            .top {
              margin-top: 0.8125rem;
            }

            .bottom {
              padding-right: 3.125rem;
            }

            .sidebar_opened:before {
              position: fixed;
              top: 0;
              right: 20rem;
            }
          }

        `}</style>
      </aside>
    )
  }
}

export default withRouter(translate()(SideBar))

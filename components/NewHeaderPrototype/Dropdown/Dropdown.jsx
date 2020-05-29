import React, { useState, useRef, useEffect } from 'react'
import { bool, func, string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Dropdown.styles'
import { withRouter } from 'next/router'
import NextLink from 'next/link'
import MainNav from './MainNav'
import LanguageSwitcher from './LanguageSwitcher'
import Button from '../../ui-kit/core-design/Button'

import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { devNav, storeNav, blogNav, schoolNav } from '../data/nav'

const Dropdown = ({ className, isOpened, t, router: { pathname }, lng }) => {
  const titleRef = useRef(null)
  useEffect(() => {
    const callback = ([entry]) =>
      entry.target.classList.toggle('stuck', entry.intersectionRatio < 1)
    const options = { threshold: [1] }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(callback, options)
      observer.observe(titleRef.current)

      return () => {
        observer.disconnect()
      }
    }
  })

  const [activeMainNavItem, setActiveMainNavItem] = useState('dev')

  return (
    <div
      className={cn(className, {
        is_opened: isOpened,
      })}
      data-scroll-lock-scrollable
    >
      <div className="side-bar">
        <MainNav activeItem={activeMainNavItem} onNavItemClick={setActiveMainNavItem} />
        <LanguageSwitcher />
      </div>

      <div className="sub-nav">
        <div className="title" ref={titleRef}>
          <NextLink href="/">
            <a>
              {`${activeMainNavItem}.csssr.com`}

              <svg
                className="arrow"
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.1309 0.244078C10.4564 0.569515 10.4564 1.09715 10.1309 1.42259L1.79759 9.75592C1.47215 10.0814 0.944515 10.0814 0.619078 9.75592C0.293641 9.43048 0.293641 8.90285 0.619078 8.57741L8.95241 0.244078C9.27785 -0.0813592 9.80548 -0.0813592 10.1309 0.244078Z"
                  fill="#0076FF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.375 0.833333C0.375 0.373096 0.748096 0 1.20833 0L9.54167 0C10.0019 0 10.375 0.373096 10.375 0.833333V9.16667C10.375 9.6269 10.0019 10 9.54167 10C9.08143 10 8.70833 9.6269 8.70833 9.16667V1.66667L1.20833 1.66667C0.748096 1.66667 0.375 1.29357 0.375 0.833333Z"
                  fill="#0076FF"
                />
              </svg>
            </a>
          </NextLink>

          <span className="active-section">
            {(function () {
              let sectionName

              devNav.sections.find(({ links }) => {
                sectionName =
                  links.find(({ href }) => pathname === `/${lng}/${href}`) &&
                  links.find(({ href }) => pathname === `/${lng}/${href}`).title

                return sectionName
              })

              return t(sectionName)
            })()}
          </span>
        </div>

        {activeMainNavItem === 'dev' && (
          <ul className="sub-nav-sections">
            {devNav.sections.map(({ id, title, links }) => (
              <li className="sub-nav-sections-item" key={id}>
                <div className="sub-nav-section-title">{t(title)}</div>
                <ul className="sub-nav-section-list">
                  {links.map(({ id, title, href }) => (
                    <li key={id} className="sub-nav-section-list-item">
                      <NextLink href={`/${lng}/${href}`}>
                        <a
                          className={cn('sub-nav-section-list-item-link', {
                            is_active: pathname === `/${lng}/${href}`,
                          })}
                          dangerouslySetInnerHTML={{ __html: t(title) }}
                        />
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Button className="button_action">Contact us</Button>
    </div>
  )
}

Dropdown.propTypes = {
  className: string,
  isIe11: bool,
  isMobile: bool,
  t: func,
}

export default translate(
  withRouter(
    DeviceConsumer(
      MsBrowserConsumer(styled(Dropdown)`
        ${styles}
      `),
    ),
  ),
)

import React, { useEffect, useRef, useState } from 'react'
import { bool, func, string } from 'prop-types'
import styled from '@emotion/styled'
import NextLink from 'next/link'
import cn from 'classnames'
import styles from './LanguageSwitcher.styles'

import translate from '../../../../utils/translate-wrapper'

const LanguageSwitcher = ({ className, lng, isModalVisible, toggleModalVisibilisty }) => {
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

  return (
    <>
      <button
        className={cn(className, 'switch-toggler', { is_active: isModalVisible })}
        onClick={() => toggleModalVisibilisty(!isModalVisible)}
      >
        <svg
          className="planet"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM5.55272 1.45716C3.28924 2.04653 1.57055 3.9857 1.30768 6.36364H3.85006C3.99273 4.60525 4.58125 2.91736 5.55272 1.45716ZM8.44728 1.45716C9.41875 2.91736 10.0073 4.60525 10.1499 6.36364H12.6923C12.4295 3.9857 10.7108 2.04653 8.44728 1.45716ZM8.87244 6.36364C8.71259 4.63707 8.06252 2.99214 7 1.62323C5.93748 2.99214 5.28741 4.63707 5.12756 6.36364H8.87244ZM5.12756 7.63636H8.87244C8.71259 9.36293 8.06252 11.0079 7 12.3768C5.93748 11.0079 5.28741 9.36293 5.12756 7.63636ZM3.85006 7.63636H1.30768C1.57055 10.0143 3.28924 11.9535 5.55272 12.5428C4.58125 11.0826 3.99273 9.39475 3.85006 7.63636ZM8.44728 12.5428C9.41875 11.0826 10.0073 9.39475 10.1499 7.63636H12.6923C12.4295 10.0143 10.7108 11.9535 8.44728 12.5428Z"
            fill="#9B9B9B"
          />
        </svg>

        <span>{lng}</span>

        <svg
          className="arrow"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8.00022C0 7.5093 0.447715 7.11133 1 7.11133H15C15.5523 7.11133 16 7.5093 16 8.00022C16 8.49114 15.5523 8.88911 15 8.88911H1C0.447715 8.88911 0 8.49114 0 8.00022Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.59961 0.292893C8.98532 0.683417 8.98532 1.31658 8.59961 1.70711L2.38441 8L8.59961 14.2929C8.98532 14.6834 8.98532 15.3166 8.59961 15.7071C8.21391 16.0976 7.58856 16.0976 7.20286 15.7071L0.289277 8.70711C-0.0964258 8.31658 -0.0964258 7.68342 0.289277 7.29289L7.20286 0.292893C7.58856 -0.0976311 8.21391 -0.0976311 8.59961 0.292893Z"
            fill="white"
          />
        </svg>
      </button>

      <div
        className={cn(className, 'language-modal', { is_visible: isModalVisible })}
        data-scroll-lock-scrollable
      >
        <span className="title" ref={titleRef}>
          {lng === 'en' ? 'Choose the region' : 'Выберите регион'}
        </span>
        <ul className="languages">
          <li>
            <div className="language-region">Global</div>
            {/* <NextLink href="/en"> */}
            <a href="/en" className={cn('language-link', { active: lng === 'en' })}>
              English
            </a>
            {/* </NextLink> */}
          </li>
          <li>
            <div className="language-region">Russia</div>
            {/* <NextLink href="/ru"> */}
            <a href="/ru" className={cn('language-link', { active: lng === 'ru' })}>
              Русский
            </a>
            {/* </NextLink> */}
          </li>
        </ul>
      </div>
    </>
  )
}

LanguageSwitcher.propTypes = {
  className: string,
  isIe11: bool,
  isMobile: bool,
  t: func,
}

export default translate(
  styled(LanguageSwitcher)`
    ${styles}
  `,
)

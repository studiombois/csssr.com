import React, { useEffect, useRef, useState } from 'react'
import { bool, func, string } from 'prop-types'
import styled from '@emotion/styled'
import NextLink from 'next/link'
import cn from 'classnames'
import styles from './LanguageSwitcher.styles'

import translate from '../../../../utils/translate-wrapper'

const LanguageSwitcher = ({ className, lng }) => {
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

  const [isModalVisible, toggleModalVisibilisty] = useState(false)

  return (
    <>
      <button
        className={cn(className, 'switch-toggler', { is_active: isModalVisible })}
        onClick={() => toggleModalVisibilisty(!isModalVisible)}
      >
        {lng}
        <svg
          width="6"
          height="11"
          viewBox="0 0 6 11"
          fill="none"
          className="chevron"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1" fill="white">
            <path d="M0.832031 10.083L5.8737 5.49967L0.832031 0.916341" />
          </mask>
          <path
            d="M0.159358 9.34307C-0.249299 9.71457 -0.279416 10.347 0.0920912 10.7557C0.463598 11.1643 1.09605 11.1945 1.5047 10.8229L0.159358 9.34307ZM5.8737 5.49967L6.54637 6.23961L7.3603 5.49967L6.54637 4.75973L5.8737 5.49967ZM1.5047 0.176401C1.09605 -0.195106 0.463598 -0.164989 0.0920908 0.243669C-0.279416 0.652326 -0.2493 1.28477 0.159358 1.65628L1.5047 0.176401ZM1.5047 10.8229L6.54637 6.23961L5.20102 4.75973L0.159358 9.34307L1.5047 10.8229ZM6.54637 4.75973L1.5047 0.176401L0.159358 1.65628L5.20102 6.23961L6.54637 4.75973Z"
            fill="currentColor"
            mask="url(#path-1-inside-1)"
          />
        </svg>
      </button>

      <div
        className={cn(className, 'language-modal', { is_visible: isModalVisible })}
        data-scroll-lock-scrollable
      >
        <span className="title" ref={titleRef}>
          Choose the region
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

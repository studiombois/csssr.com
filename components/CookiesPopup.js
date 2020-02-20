import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import translate from '../utils/translate-wrapper'

import сookiesLinks from '../data/сookies-popup/сookiesLinks'

import CrossIcon from '../static/icons/cross_white.svg'

const crossIcon = <CrossIcon width='100%' height='100%' />

const CookiesPopup = ({ t, lng }) => {
  const [isActive, setIsActive] = useState(true)

  const handleClick = () => {
    localStorage.setItem('cookies_policy', true)
    setIsActive(true)
  }

  useEffect(() => {
    setIsActive(localStorage.getItem('cookies_policy'))
  }, [])

  const url = сookiesLinks[lng]

  return (
    <div className={cn('cookies-popup', { hide: isActive })}>
      <button className='close' onClick={handleClick}>
        {crossIcon}
      </button>
      <div className='wrap'>
        <p className='font_cookies'>
          <span
            dangerouslySetInnerHTML={{ __html: t('common:сookiesPopup.text') }}
          />

          <a
            href={url}
            target='_blank'
            className='link'
            dangerouslySetInnerHTML={{
              __html: t('common:сookiesPopup.link'),
            }}
          />
        </p>
      </div>

      <style jsx>{`
        .cookies-popup {
          z-index: 99999;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          padding-top: 1rem;
          padding-bottom: 1rem;
          padding-left: 2rem;
          padding-right: 2.265rem;
          background-color: #171717;
          color: #ffffff;
          transition: transform 200ms ease-out;
        }

        .link {
          cursor: pointer;
          color: #ffffff;
          text-decoration: underline;
        }

        .hide {
          transform: translateY(100%);
        }

        .wrap {
          max-width: 43.25rem;
        }

        .close {
          padding: 0;
          background-color: transparent;
          border: none;
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 1rem;
          height: 1rem;
          color: #ffffff;
          cursor: pointer;
        }

        @media (min-width: 1024px) {
          .cookies-popup {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }

          .close {
            top: 1.25rem;
            right: 2rem;
            width: 1.5rem;
            height: 1.5rem;
          }
        }

        @media (min-width: 1280px) {
          .wrap {
            max-width: 45rem;
          }
        }
      `}</style>
    </div>
  )
}

export default translate()(CookiesPopup)

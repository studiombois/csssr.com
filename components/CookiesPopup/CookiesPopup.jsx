import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'

import Text from '../ui-kit/core-design/Text'
import translate from '../../utils/translate-wrapper'
import styles from './CookiesPopup.styles'

import cookiesLinks from '../../data/сookies-popup/cookiesLinks'

import CrossIcon from '../../static/icons/cross_white.svg'

const crossIcon = <CrossIcon width="100%" height="100%" />

const CookiesPopup = ({ className, t, lng }) => {
  const [isActive, setIsActive] = useState(true)

  const handleClick = () => {
    localStorage.setItem('cookies_policy', true)
    setIsActive(true)
  }

  useEffect(() => {
    setIsActive(localStorage.getItem('cookies_policy'))
  }, [])

  const links = cookiesLinks[lng]

  return (
    <div className={cn(className, { hide: isActive })}>
      <button className="close" onClick={handleClick}>
        {crossIcon}
      </button>
      <div className="wrap">
        <Text type="regular" size="m" className="cookies-text">
          <span dangerouslySetInnerHTML={{ __html: t('common:сookiesPopup.text') }} />

          {links.map((url, index) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="cookies-link"
              dangerouslySetInnerHTML={{
                __html: t(`common:сookiesPopup.link.${index}`),
              }}
            />
          ))}
        </Text>
      </div>
    </div>
  )
}

export default styled(translate(CookiesPopup))`
  ${styles}
`

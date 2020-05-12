import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'

import Text from '../ui-kit/core-design/Text'
import { L10nConsumer } from '../../utils/l10nProvider'
import localStorageAvailable from '../../utils/client/localStorageAvailable'
import styles from './CookiesPopup.styles'

import cookiesLinks from '../../data/сookies-popup/cookiesLinks'

import CrossIcon from '../../static/icons/cross_white.svg'

const crossIcon = <CrossIcon width="100%" height="100%" />

const COOKIES_POLICY_ALERT_HIDDEN = 'hidden'

const CookiesPopup = ({ className, l10n: { language, translations } }) => {
  const [isHidden, setIsHidden] = useState(true)

  const handleClick = () => {
    if (localStorageAvailable()) {
      localStorage.setItem('cookies_policy', COOKIES_POLICY_ALERT_HIDDEN)
    }
    setIsHidden(true)
  }

  useEffect(() => {
    if (localStorageAvailable()) {
      const isHidden = localStorage.getItem('cookies_policy') === COOKIES_POLICY_ALERT_HIDDEN
      setIsHidden(isHidden)
    } else {
      setIsHidden(false)
    }
  }, [])

  const links = cookiesLinks[language]

  return (
    <div className={cn(className, { hide: isHidden })}>
      <button className="close" onClick={handleClick}>
        {crossIcon}
      </button>
      <div className="wrap">
        <Text type="regular" size="m" className="cookies-text">
          <span dangerouslySetInnerHTML={{ __html: translations.common.cookiesPopup.text }} />

          {links.map((url, index) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="cookies-link"
              dangerouslySetInnerHTML={{
                __html: translations.common.cookiesPopup.link[index],
              }}
            />
          ))}
        </Text>
      </div>
    </div>
  )
}

export default styled(L10nConsumer(CookiesPopup))`
  ${styles}
`

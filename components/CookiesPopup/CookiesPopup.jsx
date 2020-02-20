import React, { useState, useEffect } from 'react'
import NextLink from 'next/link'
import cn from 'classnames'
import styled from '@emotion/styled'

import Text from '../ui-kit/core-design/Text'
import translate from '../../utils/translate-wrapper'
import styles from './CookiesPopup.styles'

import сookiesLinks from '../../data/сookies-popup/сookiesLinks'

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

  const url = сookiesLinks[lng]

  return (
    <div className={cn(className, { hide: isActive })}>
      <button className="close" onClick={handleClick}>
        {crossIcon}
      </button>
      <div className="wrap">
        <Text type="regular" size="m" className="cookies-text">
          <span dangerouslySetInnerHTML={{ __html: t('common:сookiesPopup.text') }} />

          <NextLink href={url}>
            <span
              className="cookies-link"
              dangerouslySetInnerHTML={{
                __html: t('common:сookiesPopup.link'),
              }}
            />
          </NextLink>
        </Text>
      </div>
    </div>
  )
}

export default styled(translate()(CookiesPopup))`
  ${styles}
`

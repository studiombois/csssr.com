import React, { useState, useRef, useEffect } from 'react'
import { string, func } from 'prop-types'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import styles from './Footer.styles'

import SocialLinks from './SocialLinks'
import PrivacyAndLanguageLinks from './PrivacyAndLanguageLinks'
import Nav from './Nav'
import DoubleBottom from './DoubleBottom'
import Link from '../ui-kit/core-design/Link'
import Heading from '../ui-kit/core-design/Heading'
import Logo from '../../static/icons/csssr_logo.svg'

import translate from '../../utils/translate-wrapper'
import { DeviceConsumer } from '../../utils/deviceProvider'

const Footer = ({ className, isMobile, lng, t }) => {
  const [IsDoubleBottomVisible, setDoubleBottomVisibility] = useState(false)
  const footerRef = useRef()

  useEffect(() => {
    if (isMobile) {
      setDoubleBottomVisibility(true)

      return
    }

    const listener = () => {
      const { top, bottom, height } = footerRef.current.getBoundingClientRect()

      if (top + height < window.innerHeight && bottom >= 0) {
        if (!IsDoubleBottomVisible) setDoubleBottomVisibility(true)
      } else {
        if (IsDoubleBottomVisible) setDoubleBottomVisibility(false)
      }
    }
    window.addEventListener('scroll', listener)
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('scroll', listener)
      window.removeEventListener('resize', listener)
    }
  }, [isMobile, IsDoubleBottomVisible])

  return (
    <footer className={className} ref={footerRef}>
      <div className="top-content">
        <div className="top-content-left-wrapper">
          <NextLink href={`/${lng}`}>
            <a className="logo">
              <Logo />
            </a>
          </NextLink>

          {!isMobile && (
            <video className="video" autoPlay loop muted>
              <source src={require(`../../static/video/camp.mp4`)} type="video/mp4" />

              <p>{t('common:footer.videoError')}</p>
            </video>
          )}

          <Heading
            as="p"
            className="action-phrase"
            type="regular"
            size="s"
            dangerouslySetInnerHTML={{ __html: t('common:footer.actionPhrase') }}
          />

          <Link className="email" href="mailto:sales@csssr.com">
            sales@csssr.com
          </Link>

          <SocialLinks />
        </div>

        <Nav />
      </div>
      <div className="bottom-content">
        <PrivacyAndLanguageLinks />
      </div>

      {IsDoubleBottomVisible && <DoubleBottom />}
    </footer>
  )
}

Footer.propTypes = {
  className: string,
  t: func,
}

export default translate(
  DeviceConsumer(styled(Footer)`
    ${styles}
  `),
)

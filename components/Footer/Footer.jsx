import React, { useEffect, useRef, useState } from 'react'
import { string } from 'prop-types'
import NextLink from 'next/link'
import { withRouter } from 'next/router'
import styled from '@emotion/styled'
import styles from './Footer.styles'

import SocialLinks from './SocialLinks'
import PrivacyAndLanguageLinks from './PrivacyAndLanguageLinks'
import Nav from './Nav'
import DoubleBottom from './DoubleBottom'
import Link from '../ui-kit/core-design/Link'
import Text from '../ui-kit/core-design/Text'
import Heading from '../ui-kit/core-design/Heading'
import { ReactComponent as Logo } from '../../static/icons/csssr_logo.svg'

import { L10nConsumer } from '../../utils/l10nProvider'
import { DeviceConsumer } from '../../utils/deviceProvider'
import { PagesListConsumer } from '../../utils/pagesListProvider'
import getPagePathnameInLanguage from '../../common/get-page-pathname-in-language'

const Footer = ({
  className,
  isMobile,
  l10n: { translations, language },
  pagesList,
  router: { pathname },
}) => {
  const [IsDoubleBottomVisible, setDoubleBottomVisibility] = useState(false)
  const footerRef = useRef()
  const lngToRedirect = language === 'ru' ? 'en' : 'ru'
  const otherLanguagePathname = getPagePathnameInLanguage(pathname, lngToRedirect, pagesList)
  const jobsRegExp = /job/
  const footerEmail = jobsRegExp.test(pathname) ? 'join@csssr.com' : 'launch@csssr.com'

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
          <NextLink href={`/${language}`}>
            <a className="logo">
              <Logo />
            </a>
          </NextLink>

          {!isMobile && (
            <video className="video" autoPlay loop muted>
              <source src={require(`../../static/video/camp.mp4`)} type="video/mp4" />

              <p>{translations.common.footer.videoError}</p>
            </video>
          )}

          <Heading
            as="p"
            className="action-phrase"
            type="regular"
            size="s"
            dangerouslySetInnerHTML={{ __html: translations.common.footer.actionPhrase }}
          />

          <Link className="email" href={`mailto:${footerEmail}`}>
            {footerEmail}
          </Link>

          {isMobile && (
            <Link className="link-language" href={otherLanguagePathname}>
              <Text
                className="link-text"
                dangerouslySetInnerHTML={{ __html: lngToRedirect }}
                type="perforator"
                size="s"
              />
            </Link>
          )}

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
}

export default L10nConsumer(
  withRouter(
    PagesListConsumer(
      DeviceConsumer(styled(Footer)`
        ${styles}
      `),
    ),
  ),
)

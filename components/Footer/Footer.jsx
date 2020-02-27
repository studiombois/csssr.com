import React from 'react'
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

const Footer = ({ className, isMobile, t }) => (
  <footer className={className}>
    <div className="top-content-left-wrapper">
      <NextLink href="/">
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
      <PrivacyAndLanguageLinks />
    </div>

    <Nav />

    <DoubleBottom />
  </footer>
)

Footer.propTypes = {
  className: string,
  t: func,
}

export default translate()(
  DeviceConsumer(styled(Footer)`
    ${styles}
  `),
)

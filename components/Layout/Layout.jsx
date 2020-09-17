import React, { Fragment, useContext } from 'react'
import DevTools from '../DevTools'
import { withRouter } from 'next/router'
import { Global } from '@emotion/core'
import Link from 'next/link'
import styles from './Layout.styles'
import { Header, getLocaleFromUrl, PageContent, getDevPathname } from '@csssr/csssr-shared-header'
import Footer from '../Footer'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import CookiesPopup from '../CookiesPopup'
import { DeviceContext } from '../../utils/deviceProvider'

import spaceOrigin from '../../utils/csssrSpaceOrigin'

const Layout = ({ children, isIe11, withFooter = true, router }) => {
  const { isMobile } = useContext(DeviceContext)

  const dynamicTag = isIe11 ? 'div' : 'main'
  const appRootElement = typeof window === 'object' ? document.getElementById('__next') : null
  const lng = getLocaleFromUrl(router.asPath)

  const pathname = getDevPathname(router.asPath)

  return (
    <Fragment>
      <Header
        isMobile={isMobile}
        appRootElement={appRootElement}
        pathname={pathname}
        lng={lng}
        NextLink={Link}
        jobsDomain={spaceOrigin}
      />

      <PageContent>
        <Global styles={styles} />
        {React.createElement(dynamicTag, { id: 'main', 'data-testid': 'Main:block' }, children)}
        {withFooter && <Footer />}
        <CookiesPopup />
        <DevTools />
      </PageContent>
    </Fragment>
  )
}

export default withRouter(MsBrowserConsumer(Layout))

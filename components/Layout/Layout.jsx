import React, { Fragment } from 'react'
import DevTools from '../DevTools'
import { withRouter } from 'next/router'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import Link from 'next/link'
import styles, { ie11Styles } from './Layout.styles'
// import Header from '../Header'
import { Header, theme } from '@csssr/csssr-shared-header'
import Footer from '../Footer'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import CookiesPopup from '../CookiesPopup'

const Layout = ({ children, isIe11, withFooter = true }) => {
  const dynamicTag = isIe11 ? 'div' : 'main'
  // const pathsNoButton = ['jobs']
  // const isButtonVisible = !pathsNoButton.some((string) => asPath.indexOf(string) + 1)
  return (
    <Fragment>
      {/* <Header isButtonVisible={isButtonVisible} pageName={pageName} />
       */}
      <ThemeProvider theme={theme}>
        <Header pathname="dev" isIe11={false} isMobile={true} lng={['ru', 'en']} NextLink={Link} />
      </ThemeProvider>
      <Global styles={styles} />

      {isIe11 && <Global styles={ie11Styles} />}

      {React.createElement(dynamicTag, { id: 'main' }, children)}

      {withFooter && <Footer />}
      <CookiesPopup />
      <DevTools />
    </Fragment>
  )
}

export default withRouter(MsBrowserConsumer(Layout))

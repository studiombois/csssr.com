import React, { Fragment } from 'react'
import DevTools from '../DevTools'
import { withRouter } from 'next/router'
import Header from '../Header'
import Footer from '../Footer'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import CookiesPopup from '../CookiesPopup'

const Layout = ({ children, isIe11, pageName, router: { asPath }, withFooter = true }) => {
  const dynamicTag = isIe11 ? 'div' : 'main'
  const pathsNoButton = ['jobs']
  const isButtonVisible = !pathsNoButton.some((string) => asPath.indexOf(string) + 1)
  return (
    <Fragment>
      <Header isButtonVisible={isButtonVisible} pageName={pageName} />

      {React.createElement(dynamicTag, { id: 'main', 'data-testid': 'Main:block' }, children)}

      {withFooter && <Footer />}
      <CookiesPopup />
      <DevTools />
    </Fragment>
  )
}

export default withRouter(MsBrowserConsumer(Layout))

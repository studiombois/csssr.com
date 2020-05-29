import React, { Fragment } from 'react'
// import DevTools from '../DevTools'
import { withRouter } from 'next/router'
import { Global } from '@emotion/core'
import styles /*, { ie11Styles }*/ from './Layout.styles'
import NewHeaderPrototype from '../NewHeaderPrototype'
// import Footer from '../Footer'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import translate from '../../utils/translate-wrapper'
// import CookiesPopup from '../CookiesPopup'

const Layout = (/*{ children, isIe11, pageName = 'main', router: { asPath }, withFooter = true }*/) => {
  // const dynamicTag = isIe11 ? 'div' : 'main'
  // const pathsNoButton = ['jobs']
  // const isButtonVisible = !pathsNoButton.some((string) => asPath.indexOf(string) + 1)
  return (
    <Fragment>
      <NewHeaderPrototype />
      {/* <Header isButtonVisible={isButtonVisible} pageName={pageName} /> */}
      <Global styles={styles} />

      {/* {isIe11 && <Global styles={ie11Styles} />} */}

      {/* {React.createElement(dynamicTag, { id: 'main' }, children)} */}

      {/* {withFooter && <Footer />} */}
      {/* <CookiesPopup /> */}
      {/* <DevTools /> */}
    </Fragment>
  )
}

export default translate(withRouter(MsBrowserConsumer(Layout)))

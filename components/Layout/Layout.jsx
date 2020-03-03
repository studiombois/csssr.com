import React, { Fragment } from 'react'
import DevTools from '../DevTools'
import { withRouter } from 'next/router'
import { string } from 'prop-types'
import { Global } from '@emotion/core'
import styles, { ie11Styles } from './Layout.styles'
import Header from '../Header'
import Footer from '../Footer'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import CookiesPopup from '../CookiesPopup'

const Layout = ({ children, isIe11 }) => {
  const dynamicTag = isIe11 ? 'div' : 'main';
  return (
    <Fragment>
      <Header />
      <Global styles={styles} />
      {isIe11 && <Global styles={ie11Styles} />}

      {React.createElement(dynamicTag, { id: 'main' }, children)}
    <Footer />
    <CookiesPopup />
    <DevTools />
  </Fragment>
)

Layout.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
}

export default withRouter(MsBrowserConsumer(Layout))

import React, { Fragment } from 'react'
import DevTools from '../DevTools'
import { withRouter } from 'next/router'
import { string } from 'prop-types'
import { Global, css } from '@emotion/core'
import styles from './Layout.styles'
import Header from '../Header'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'

const Layout = ({ children, isIe11 }) => (
  <Fragment>
    <Global styles={styles} />
    {isIe11 && <Global styles={ie11Styles} />}

  return (
    <Fragment>
      <Header />
      <Global styles={styles.base} />
      <Global styles={styles.font_faces} />
      <Global styles={styles.fonts} />

    <main id="main">{children}</main>
  </Fragment>
)

Layout.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
}

export default withRouter(MsBrowserConsumer(Layout))

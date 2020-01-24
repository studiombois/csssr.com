import React, { Fragment } from 'react'
import DevTools from '../DevTools'
import { withRouter } from 'next/router'
import { string } from 'prop-types'
import { Global } from '@emotion/core'
import styles, { ie11Styles } from './Layout.styles'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'

const Layout = ({ children, isIe11 }) => (
  <Fragment>
    <Global styles={styles} />
    {isIe11 && <Global styles={ie11Styles} />}

    <DevTools />

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

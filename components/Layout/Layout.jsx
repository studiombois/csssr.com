import React, { Fragment } from 'react'
import DevTools from '../DevTools'
import { withRouter } from 'next/router'
import { string } from 'prop-types'
import { Global } from '@emotion/core'
import styles from './Layout.styles'

const Layout = props => {
  const { children } = props

  return (
    <Fragment>
      <Global styles={styles.base} />
      <Global styles={styles.font_faces} />
      <Global styles={styles.fonts} />
      <DevTools />

      <main id="main">{children}</main>
    </Fragment>
  )
}

Layout.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
}

export default withRouter(Layout)

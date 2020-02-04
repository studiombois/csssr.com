import React, { Fragment } from 'react'
import DevTools from '../DevTools'
import { withRouter } from 'next/router'
import { string } from 'prop-types'
import { Global, css } from '@emotion/core'
import styles from './Layout.styles'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'

const Layout = props => {
  const { children, isIe } = props

  return (
    <Fragment>
      <Global styles={styles.base} />
      <Global styles={styles.font_faces} />
      <Global styles={styles.fonts} />

      {isIe && (
        <Global
          styles={css`
            html,
            body {
              overflow-x: hidden;
            }
          `}
        />
      )}
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

export default withRouter(MsBrowserConsumer(Layout))
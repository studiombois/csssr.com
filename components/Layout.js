import React, { Fragment } from 'react'
import Header from './Header'
import Common from './Common'
import Settings from './Settings'
import Text from './Text'
import Footer from './Footer'
import { string } from 'prop-types'

const Layout = props => {
  const { children } = props

  return <Fragment>
    <Common />
    <Settings />
    <Text />
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </Fragment>
}

Layout.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
}

export default Layout

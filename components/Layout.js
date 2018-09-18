import React from 'react'
import Head from './Head'
import Header from './Header'
import Common from './Common'
import Settings from './Settings'
import Text from './Text'
import Footer from './Footer'
import { string } from 'prop-types'

const Layout = props => {
  const { children } = props

  return <div className='layout'>
    <Head />
    <Common />
    <Settings />
    <Text />
    <Header />

    {children}
    <Footer />
  </div>
}

Layout.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
}

export default Layout

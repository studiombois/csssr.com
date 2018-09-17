import React from 'react'
import Head from './Head'
import Nav from './Nav'
import Fonts from './Fonts'
import Settings from './Settings'
import Footer from './Footer'
import { string } from 'prop-types'

const Layout = props => {
  const { children } = props

  return <div className='layout'>
    <Head />
    <Nav />
    <Fonts />
    <Settings />

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

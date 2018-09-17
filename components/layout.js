import React from 'react'
import Head from './head'
import Nav from './nav'
import Footer from './footer'
import { string } from 'prop-types'

const Layout = props => {
  const { children } = props

  return <div className='layout'>
    <Head />
    <Nav />

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

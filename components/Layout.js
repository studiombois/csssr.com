import React, { Fragment } from 'react'
import Header from './Header'
import Common from './Common'
import Settings from './Settings'
import Text from './Text'
import Footer from './Footer'
import PrivatePolicyEn from './PrivatePolicyEn'
import { withRouter } from 'next/router'
import { string } from 'prop-types'

const Layout = props => {
  const { children, router } = props

  console.log(router)

  return <Fragment>
    <Common />
    <Settings />
    <Text />
    <Header />
    <PrivatePolicyEn />
    <main id='main'>
      {children}
    </main>
    <Footer />

    <style jsx global>{`
      #private-policy {
        display: none;
      }

      #private-policy:target {
        display: grid;
      }

      #private-policy:target + #main {
        display: none;
      }
    `}</style>
  </Fragment>
}

Layout.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
}

export default withRouter(Layout)

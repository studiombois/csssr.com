import React, { Fragment } from 'react'
import Header from './Header'
import Common from './Common'
import Settings from './Settings'
import Text from './Text'
import Footer from './Footer'
import PrivatePolicy from './PrivatePolicy'
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
    <PrivatePolicy />
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

      /*
        TODO: Стили для анимации изчезновения private-policy
      */
      /* #private-policy:not(:target) {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 50%;
        margin-bottom: 0;
        height: 100%;
        overflow-y: hidden;
        opacity: 0;
        transform: translateX(-50%);
        transition: opacity 300ms ease-out;
      }

      #private-policy:target {
        //TODO: если оставлять эти стили, то убрать из PrivatePolicy margin-bottom
                у private-policy
        margin-bottom: 31rem;
        height: auto;
        position: relative;
        opacity: 1;
      }

      #private-policy:target + #main {
        display: none;
      } */
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

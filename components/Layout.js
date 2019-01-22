import React, { Fragment } from 'react'
import Header from './Header'
import Common from './Common'
import Settings from './Settings'
import Text from './Text'
import Footer from './Footer'
import { withRouter } from 'next/router'
import { string, shape, bool } from 'prop-types'

const Layout = props => {
  const { children } = props

  return <Fragment>
    <Common />
    <Settings />
    <Text />
    <Header {...props.headerProps} />
    <main id='main'>
      {children}
    </main>
    {!props.footerProps.noFooter &&
      <Footer {...props.footerProps}/>
    }

    <style jsx global>{`
      #main {
        overflow-x: hidden;
      }
    `}</style>
  </Fragment>
}

Layout.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
  headerProps: shape({
    logoHref: string,
    logoAlt: string,
    logoSup: string,
    isLogoLink: bool,
    isBurgerVisible: bool,
  }),
  footerProps: shape({
    logoHref: string,
    logoAlt: string,
    logoSup: string,
    noFooter: bool,
    isLogoLink: bool,
  }),
}

Layout.defaultProps = {
  footerProps: {
    noFooter: false,
  },
}

export default withRouter(Layout)

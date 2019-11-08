import React, { Fragment } from 'react'
import Header from './Header'
import Common from './Common'
import Settings from './Settings'
import Text from './Text'
import Footer from './Footer'
import { withRouter } from 'next/router'
import { string, shape, bool, arrayOf } from 'prop-types'
import { allSocialLinks } from '../data/jobs/footerLinks'

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
        display: block;
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
    logoAlt: string,
    logoSup: string,
    isLogoLink: bool,
    isBurgerVisible: bool,
    menuName: string,
    sectionName: string,
  }),
  footerProps: shape({
    noFooter: bool,
    socialLinks: arrayOf(shape({
      href: string,
      label: string,
    })),
  }),
}

Layout.defaultProps = {
  footerProps: {
    noFooter: false,
    socialLinks: allSocialLinks,
  },
}

export default withRouter(Layout)

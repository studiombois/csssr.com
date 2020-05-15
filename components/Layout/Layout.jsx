import React, { Fragment } from 'react'
import DevTools from '../DevTools'
import { withRouter } from 'next/router'
import { css, Global } from '@emotion/core'
import styles, { ie11Styles } from './Layout.styles'
import Header from '../Header'
import Footer from '../Footer'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import { L10nConsumer } from '../../utils/l10nProvider'
import calcRem from '../../utils/style/calcRem'
import CookiesPopup from '../CookiesPopup'

const Layout = ({
  children,
  isIe11,
  pageName = 'main',
  router: { asPath },
  l10n: { language },
  withFooter = true,
}) => {
  const dynamicTag = isIe11 ? 'div' : 'main'
  const pathsNoButton = ['jobs']
  const isButtonVisible = !pathsNoButton.some((string) => asPath.indexOf(string) + 1)
  return (
    <Fragment>
      <Header isButtonVisible={isButtonVisible} pageName={pageName} />
      <Global styles={styles} />
      <Global
        styles={
          language === 'en' &&
          css`
            #main {
              padding-top: ${calcRem(153)};
            }

            @media (max-width: 767px) {
              #main {
                padding-top: ${calcRem(80)};
              }
            }
          `
        }
      />
      {isIe11 && <Global styles={ie11Styles} />}

      {React.createElement(dynamicTag, { id: 'main' }, children)}

      {withFooter && <Footer />}
      <CookiesPopup />
      <DevTools />
    </Fragment>
  )
}

export default L10nConsumer(withRouter(MsBrowserConsumer(Layout)))

import React, { Fragment, useState } from 'react'
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'
import { Global } from '@emotion/react'
import { dynamic as dynamicStyles } from './Layout.styles'
import cn from 'classnames'
import Header from '../Header'
// import DevTools from '../DevTools'
// import Footer from '../Footer'
// import DiscountBanner from '../DiscountBanner'
// import CookiesPopup from '../CookiesPopup'
const DynamicDiscountBanner = dynamic(() => import('../DiscountBanner'))
const DynamicFooter = dynamic(() => import('../Footer'))
const DynamicDevTools = dynamic(() => import('../DevTools'))
const DynamicCookiesPopup = dynamic(() => import('../CookiesPopup'))

import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import { L10nConsumer } from '../../utils/l10nProvider'

const Layout = ({
  children,
  isIe11,
  pageName,
  l10n: { language },
  router: { asPath },
  withFooter = true,
}) => {
  const dynamicTag = isIe11 ? 'div' : 'main'
  const pathsNoButton = ['jobs']
  const isButtonVisible = !pathsNoButton.some((string) => asPath.indexOf(string) + 1)
  const [isHidden, setHidden] = useState(true)

  return (
    <Fragment>
      <Header isButtonVisible={isButtonVisible} pageName={pageName} />
      {language === 'en' && (
        <DynamicDiscountBanner
          className="discount-banner"
          pageName={pageName}
          isHidden={isHidden}
          setHidden={setHidden}
        />
      )}

      {React.createElement(
        dynamicTag,
        {
          id: 'main',
          className: cn('main', {
            main_en: language === 'en',
            with_padding: !isHidden,
          }),
          'data-testid': 'Main:block',
        },
        children,
      )}

      {withFooter && <DynamicFooter />}
      <DynamicCookiesPopup />
      <DynamicDevTools />

      <Global styles={dynamicStyles} />
    </Fragment>
  )
}

export default L10nConsumer(withRouter(MsBrowserConsumer(Layout)))

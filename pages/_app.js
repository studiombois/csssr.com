import React from 'react'
import Router from 'next/router'
import App from 'next/app'
import { I18nextProvider } from 'react-i18next'
import * as Sentry from '@sentry/node'
import { ThemeProvider } from 'emotion-theming'
import { customTheme } from '../themes/customTheme'
import initialI18nInstance from '../common/i18n'
import '../utils/sentry'
import detectMsBrowserByUserAgent, { detectIe11 } from '../utils/detectMsBrowserByUserAgent'
import MsBrowserProvider from '../utils/msBrowserProvider'

export default class MyApp extends App {
  state = {
    isMobile: false,
  }

  // This reports errors before rendering, when fetching initial props
  static async getInitialProps(appContext) {
    const { Component, ctx } = appContext

    const userAgent = ctx.req ? ctx.req.headers['user-agent'] : window.navigator.userAgent

    let pageProps = {}

    try {
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
    } catch (error) {
      Sentry.withScope(scope => {
        const { req, res, errorInfo, query, pathname } = ctx

        if (error.statusCode) {
          scope.setExtra('statusCode', error.statusCode)
        }

        if (res && res.statusCode) {
          scope.setExtra('statusCode', res.statusCode)
        }

        if (process.browser) {
          scope.setTag('ssr', false)
          scope.setExtra('query', query)
          scope.setExtra('pathname', pathname)
        } else {
          scope.setTag('ssr', true)
          scope.setExtra('url', req.url)
          scope.setExtra('method', req.method)
          scope.setExtra('headers', req.headers)
          scope.setExtra('params', req.params)
          scope.setExtra('query', req.query)
        }

        if (errorInfo) {
          scope.setExtra('componentStack', errorInfo.componentStack)
        }

        Sentry.captureException(error)
      })

      throw error
    }

    pageProps.userAgent = userAgent

    return {
      pageProps,
    }
  }

  // This reports errors thrown while rendering components
  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error, { extra: errorInfo })
    super.componentDidCatch(error, errorInfo)
  }

  componentDidMount() {
    this.mobileMediaQuery = window.matchMedia('(max-width: 767px)')
    this.mobileMediaQuery.addListener(this.handleMediaMatch)
    this.handleMediaMatch(this.mobileMediaQuery)
    window.addEventListener('keydown', function(event) {
      if (event.which === 9) {
        document.body.classList.add('outline')
      }
    })

    window.addEventListener('click', function() {
      document.body.classList.remove('outline')
    })

    Router.events.on('routeChangeComplete', this.handleRouteChange)
  }

  handleRouteChange = () => {
    if (window.dataLayer) {
      // setTimeout для того чтобы страница успела отрендериться и поменялся title
      setTimeout(() => window.dataLayer.push({ event: 'route_change_complete' }))
    }
  }

  componentWillUnmount() {
    this.mobileMediaQuery.removeListener(this.handleMediaMatch)
    Router.events.off('routeChangeComplete', this.handleRouteChange)
  }

  handleMediaMatch = ({ matches }) =>
    this.setState({
      isMobile: matches,
    })

  render() {
    const { Component, pageProps } = this.props
    const { i18n, initialI18nStore, initialLanguage } = pageProps || {}
    const isMsBrowser = detectMsBrowserByUserAgent(pageProps.userAgent)
    const isIe11Browser = detectIe11(pageProps.userAgent)

    return (
      <I18nextProvider
        i18n={i18n || initialI18nInstance}
        initialI18nStore={initialI18nStore}
        initialLanguage={initialLanguage}
      >
        <MsBrowserProvider isIe11={isIe11Browser} isMsBrowser={isMsBrowser}>
          <ThemeProvider theme={customTheme}>
            <Component {...pageProps} isMobile={this.state.isMobile} isMsBrowser={isMsBrowser} />
          </ThemeProvider>
        </MsBrowserProvider>
      </I18nextProvider>
    )
  }
}

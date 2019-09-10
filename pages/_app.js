import React from 'react'
import App, { Container } from 'next/app'
import { I18nextProvider } from 'react-i18next'
import * as Sentry from '@sentry/node'
import initialI18nInstance from '../common/i18n'
import '../utils/sentry'
import detectMsBrowserByUserAgent from '../utils/detectMsBrowserByUserAgent'

export default class MyApp extends App {
  state = {
    isMobile: false,
  }

  // This reports errors before rendering, when fetching initial props
  static async getInitialProps(appContext) {
    const { Component, ctx } = appContext

    const userAgent = ctx.req
      ? ctx.req.headers['user-agent']
      : window.navigator.userAgent

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
    window.addEventListener('keydown', function (event) {
      if (event.which === 9) {
        document.body.classList.add('outline')
      }
    })

    window.addEventListener('click', function () {
      document.body.classList.remove('outline')
    })
  }

  componentWillUnmount() {
    this.mobileMediaQuery.removeListener(this.handleMediaMatch)
  }

  handleMediaMatch = ({ matches }) =>
    this.setState({
      isMobile: matches,
    })

  render() {
    const { Component, pageProps } = this.props
    const { i18n, initialI18nStore, initialLanguage } = pageProps || {}
    const isMsBrowser = detectMsBrowserByUserAgent(pageProps.userAgent)

    return (
      <Container>
        <I18nextProvider
          i18n={i18n || initialI18nInstance}
          initialI18nStore={initialI18nStore}
          initialLanguage={initialLanguage}
        >
          <React.Fragment>
            <Component {...pageProps} isMobile={this.state.isMobile} isMsBrowser={isMsBrowser} />
          </React.Fragment>
        </I18nextProvider>
      </Container>
    )
  }
}

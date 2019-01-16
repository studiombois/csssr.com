import React from 'react'
import App, { Container } from 'next/app'
import { I18nextProvider } from 'react-i18next'
import * as Sentry from '@sentry/browser'
import initialI18nInstance from '../common/i18n'

const dev = process.env.NODE_ENV === 'development'

Sentry.init({
  dsn: 'https://7b0bc195d134489f86572d94c310969b@sentry.io/1330752',
  environment: process.env.NODE_ENV,
  debug: dev,
})

export default class MyApp extends App {
  static async getInitialProps(appContext) {
    const { Component, ctx } = appContext

    let pageProps = {}

    try {
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
    } catch (e) {
      Sentry.captureException(e, ctx)
      throw e
    }

    return {
      pageProps,
    }
  }

  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error, { extra: errorInfo })
  }

  componentDidMount() {
    window.addEventListener('keydown', function (event) {
      if (event.which === 9) {
        document.body.classList.add('outline')
      }
    })

    window.addEventListener('click', function () {
      document.body.classList.remove('outline')
    })
  }

  render() {
    const { Component, pageProps } = this.props
    const { i18n, initialI18nStore, initialLanguage } = pageProps || {}

    return (
      <Container>
        <I18nextProvider
          i18n={i18n || initialI18nInstance}
          initialI18nStore={initialI18nStore}
          initialLanguage={initialLanguage}
        >
          <React.Fragment>
            <Component {...pageProps} />
          </React.Fragment>
        </I18nextProvider>
      </Container>
    )
  }
}

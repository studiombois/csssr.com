import React from 'react'
import App, { Container } from 'next/app'
import { I18n as I18nR, I18nextProvider } from 'react-i18next'
import initialI18nInstance from '../common/i18n'
import Layout from '../components/Layout'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    const { i18n, initialI18nStore, initialLanguage } = pageProps || {}

    return <I18nextProvider
      i18n={i18n || initialI18nInstance}
      initialI18nStore={initialI18nStore}
      initialLanguage={initialLanguage}
    >
      <React.Fragment>
        <I18nR ns='common' wait>
          {t => (
            <Container>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Container>
          )}
        </I18nR>
      </React.Fragment>
    </I18nextProvider>
  }
}

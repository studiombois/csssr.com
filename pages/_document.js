import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { GtmScript, GtmNoScript } from 'react-gtm-components'

const gtmIdByLanguage = {
  en: 'GTM-TDG7X5G',
  ru: 'GTM-K67FHB5',
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      language: ctx.req.i18n.language,
    }
  }

  render() {
    const shouldIncludeGTM = process.env.NODE_ENV === 'production' && !process.env.EXCLUDE_GTM
    const language = this.props.language

    return (
      <html lang={language}>
        <Head>
          { shouldIncludeGTM && <GtmScript gtmId={gtmIdByLanguage[language]} /> }
        </Head>
        <body>
          { shouldIncludeGTM && <GtmNoScript gtmId={gtmIdByLanguage[language]} /> }
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

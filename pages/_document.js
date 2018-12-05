import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { GtmScript, GtmNoScript } from 'react-gtm-components'

const gtmIdByLanguage = {
  en: 'GTM-TDG7X5G',
  ru: 'GTM-K67FHB5',
}

const testGtmId = 'GTM-W23KLZB'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      language: ctx.req.i18n.language,
    }
  }

  render() {
    const language = this.props.language

    return (
      <html lang={language}>
        <Head>
          <GtmScript gtmId={process.env.NODE_ENV === 'production'
            ? gtmIdByLanguage[language]
            : testGtmId
          }/>
        </Head>
        <body>
          <GtmNoScript gtmId={process.env.NODE_ENV === 'production'
            ? gtmIdByLanguage[language]
            : testGtmId
          }/>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { GtmScript, GtmNoScript } from 'react-gtm-components'

const gtmId = 'GTM-TDG7X5G'

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

    return (
      <html lang={this.props.language}>
        <Head>
          { shouldIncludeGTM && <GtmScript gtmId={gtmId} /> }
        </Head>
        <body>
          { shouldIncludeGTM && <GtmNoScript gtmId={gtmId} /> }
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

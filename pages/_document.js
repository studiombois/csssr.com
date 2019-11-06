import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { GtmScript, GtmNoScript } from 'react-gtm-components'
import getGtmId from '../utils/getGtmId'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      // https://github.com/isaachinman/next-i18next/issues/374#issuecomment-529196313
      language: ctx.req.i18n ? ctx.req.i18n.language : undefined,
    }
  }

  render() {
    const language = this.props.language
    const gtmId = getGtmId(language)

    return (
      <html lang={language}>
        <Head>
          <GtmScript gtmId={gtmId}/>
        </Head>
        <body>
          <GtmNoScript gtmId={gtmId}/>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

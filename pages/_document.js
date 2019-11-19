import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { GtmScript, GtmNoScript } from 'react-gtm-components'
import getGtmId from '../utils/getGtmId'
import { detectIe11 } from '../utils/detectMsBrowserByUserAgent'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent
    return {
      ...initialProps,
      // https://github.com/isaachinman/next-i18next/issues/374#issuecomment-529196313
      language: ctx.req.i18n ? ctx.req.i18n.language : undefined,
      userAgent,
    }
  }


  render() {
    const language = this.props.language
    const gtmId = getGtmId(language)
    const isIe11 = detectIe11(this.props.userAgent)
    return (
      <html lang={language} className={isIe11 ? 'ie11' : ''}>
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

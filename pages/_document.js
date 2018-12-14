import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { GtmScript, GtmNoScript } from 'react-gtm-components'
import getGtmId from '../utils/getGtmId'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      language: ctx.req.i18n.language,
      path: ctx.asPath,
    }
  }

  render() {
    const shouldIncludeGTM = !process.env.EXCLUDE_GTM
    const language = this.props.language
    const gtmId = getGtmId(process.env.NODE_ENV, language, this.props.path)

    return (
      <html lang={language}>
        <Head>
          { shouldIncludeGTM &&
            <GtmScript gtmId={gtmId}/>
          }
        </Head>
        <body>
          { shouldIncludeGTM &&
            <GtmNoScript gtmId={gtmId}/>
          }
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

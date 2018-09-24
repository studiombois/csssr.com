import Document, { Head, Main, NextScript } from 'next/document'
import { GtmScript, GtmNoScript } from 'react-gtm-components'

const gtmId = 'GTM-TDG7X5G'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      // TODO проставлять здесь правильный lang
      <html lang='en'>
        <Head>
          <GtmScript gtmId={gtmId} />
        </Head>
        <body>
          <GtmNoScript gtmId={gtmId} />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

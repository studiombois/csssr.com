import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { GtmNoScript, GtmScript } from 'react-gtm-components'
import getGtmId from '../utils/getGtmId'
import cn from 'classnames'
import detectMsBrowser, { detectIe11 } from '../utils/detectMsBrowserByUserAgent'
import { Fonts } from '@csssr/core-design'

// https://nextjs.org/docs/advanced-features/custom-document
// Document is only rendered in the server
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const userAgent = ctx.req.headers['user-agent']

    return {
      ...initialProps,
      language: ctx.res.locals.l10n.language,
      ab: ctx.res.locals.ab,
      userAgent,
    }
  }

  render() {
    const language = this.props.language
    const ab = this.props.ab
    const gtmId = getGtmId(language)
    const isIe11 = detectIe11(this.props.userAgent)
    const isMsBrowser = detectMsBrowser(this.props.userAgent)
    const gtmExperimentsData = Object.keys(ab)
      .map((experimentName) => {
        const experiment = ab[experimentName]
        return `${experiment.optimizeExperimentId}.${experiment.index}`
      })
      .join('!')

    return (
      <html lang={language} className={cn({ ie11: isIe11, msBrowser: isMsBrowser })}>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              var dataLayer = dataLayer || []
              dataLayer.push({ 'gaExperiment': '${gtmExperimentsData}' })
          `,
            }}
          />
          <GtmScript gtmId={gtmId} />
          <Fonts preset="com" />
        </Head>
        <body>
          <GtmNoScript gtmId={gtmId} />
          <Main />
          <NextScript />
          {/* Скрипт должен срабатывать в IE11 поэтому не используется ES6 синтаксис */}
          <script
            dangerouslySetInnerHTML={{
              __html: `window.addEventListener('load', function() {
                var isValidBrowser

                if (window.CSS && window.CSS.supports) {
                  isValidBrowser = (
                    CSS.supports('display', 'flex') && CSS.supports('display', 'grid')
                  )
                }

                if (!isValidBrowser) {
                  var modalScript = document.createElement('script')
                  modalScript.src = '/modal/modal.js'
                  document.body.appendChild(modalScript)
                }
              })`,
            }}
          />
        </body>
      </html>
    )
  }
}

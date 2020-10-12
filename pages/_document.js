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
          <script
            dangerouslySetInnerHTML={{
              __html: `
var APP_ID = "lnr953q4";
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + APP_ID;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
window.Intercom('boot', {
   app_id: 'lnr953q4',
});
`,
            }}
          ></script>
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

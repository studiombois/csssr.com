import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { GtmNoScript, GtmScript } from 'react-gtm-components'
import getGtmId from '../utils/getGtmId'
import cn from 'classnames'
import detectMsBrowser, { detectIe11 } from '../utils/detectMsBrowserByUserAgent'
import Fonts from '../components/Fonts'

// Текст для модального окна невалидного браузера
const CONTENT = {
  ru: {
    title: 'Ваш браузер устарел!',
    text1:
      'Вы пользуетесь устаревшим браузером, который не поддерживает современные <span className="no-wrap">веб-стандарты</span> и представляет угрозу вашей безопасности.',
    text2: 'Пожалуйста, установите современный браузер:',
    text3:
      'Закрывая это уведомление, вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
  },
  en: {
    title: 'Outdated Browser Detected!',
    text1:
      'You are using an outdated browser that does not support modern web standards and poses a threat to your security.',
    text2: 'Please install the latest version of your browser:',
    text3:
      'By closing this notice you agree that the website may not be displayed correctly in your browser.',
  },
}

// https://nextjs.org/docs/advanced-features/custom-document
// Document is only rendered in the server
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const userAgent = ctx.req.headers['user-agent']

    return {
      ...initialProps,
      language: ctx.res.locals.l10n.language,
      userAgent,
    }
  }

  render() {
    const language = this.props.language
    const gtmId = getGtmId(language)
    const isIe11 = detectIe11(this.props.userAgent)
    const isMsBrowser = detectMsBrowser(this.props.userAgent)

    const { title, text1, text2, text3 } = CONTENT[language]
    return (
      <html lang={language} className={cn({ ie11: isIe11, msBrowser: isMsBrowser })}>
        <Head>
          <GtmScript gtmId={gtmId} />
          <Fonts />
        </Head>
        <body>
          <GtmNoScript gtmId={gtmId} />
          <link href="/static/modal/modal.css" rel="stylesheet" />
          <Main />
          <NextScript />

          <div className="modal-browser">
            <div className="modal-browser__wrapper">
              <div className="modal-browser__inner">
                <button className="modal-browser__close" type="button">
                  <img
                    className="modal-browser__close-image"
                    src="/static/images/modals/browserModal/close.png"
                    alt="Закрыть"
                    srcSet="/static/images/modals/browserModal/close.png 1x, /static/images/modals/browserModal/close@2x.png 2x, /static/images/modals/browserModal/close@3x.png 3x"
                  />
                </button>

                <h2 className="modal-browser__title" dangerouslySetInnerHTML={{ __html: title }} />

                <p className="modal-browser__text" dangerouslySetInnerHTML={{ __html: text1 }} />

                <p className="modal-browser__text" dangerouslySetInnerHTML={{ __html: text2 }} />

                <div className="modal-browser__browser-list">
                  <div className="modal-browser__browser">
                    <a
                      className="modal-browser__browser-link"
                      href="https://www.google.com/chrome/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="modal-browser__browser-image"
                        src="/static/images/modals/browserModal/chrome@1x.png"
                        alt="chrome"
                        srcSet="/static/images/modals/browserModal/chrome@1x.png 1x, /static/images/modals/browserModal/chrome@2x.png 2x, /static/images/modals/browserModal/chrome@3x.png 3x"
                      />
                    </a>
                  </div>

                  <div className="modal-browser__browser">
                    <a
                      className="modal-browser__browser-link"
                      href="https://www.mozilla.org/firefox/new/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="modal-browser__browser-image"
                        src="/static/images/modals/browserModal/firefox@1x.png"
                        alt="firefox"
                        srcSet="/static/images/modals/browserModal/firefox@1x.png 1x, /static/images/modals/browserModal/firefox@2x.png 2x, /static/images/modals/browserModal/firefox@3x.png 3x"
                      />
                    </a>
                  </div>

                  <div className="modal-browser__browser">
                    <a
                      className="modal-browser__browser-link"
                      href="https://www.apple.com/safari/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="modal-browser__browser-image"
                        src="/static/images/modals/browserModal/safari@1x.png"
                        alt="safari"
                        srcSet="/static/images/modals/browserModal/safari@1x.png 1x, /static/images/modals/browserModal/safari@2x.png 2x, /static/images/modals/browserModal/safari@3x.png 3x"
                      />
                    </a>
                  </div>

                  <div className="modal-browser__browser">
                    <a
                      className="modal-browser__browser-link"
                      href="https://www.microsoft.com/windows/microsoft-edge"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="modal-browser__browser-image"
                        src="/static/images/modals/browserModal/edge@1x.png"
                        alt="edge"
                        srcSet="/static/images/modals/browserModal/edge@1x.png 1x, /static/images/modals/browserModal/edge@2x.png 2x, /static/images/modals/browserModal/edge@3x.png 3x"
                      />
                    </a>
                  </div>

                  <div className="modal-browser__browser">
                    <a
                      className="modal-browser__browser-link"
                      href="https://www.opera.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="modal-browser__browser-image"
                        src="/static/images/modals/browserModal/opera@1x.png"
                        alt="opera"
                        srcSet="/static/images/modals/browserModal/opera@1x.png 1x, /static/images/modals/browserModal/opera@2x.png 2x, /static/images/modals/browserModal/opera@3x.png 3x"
                      />
                    </a>
                  </div>
                </div>

                <p className="modal-browser__text" dangerouslySetInnerHTML={{ __html: text3 }} />
              </div>
            </div>
          </div>
          <script type="text/javascript" src="/static/modal/modal.js" />
        </body>
      </html>
    )
  }
}

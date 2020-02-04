import React, { Fragment, useContext, useEffect } from 'react'
import NextHead from 'next/head'
import { withRouter } from 'next/router'
import { number, string, shape, node } from 'prop-types'
import translate from '../utils/translate-wrapper'
import unescapeHtmlEntities from '../utils/unescapeHtmlEntities'
import StructuredData from './StructuredData'
import { Ie11BrowserContext } from '../utils/msBrowserProvider'

const origin = 'https://csssr.com'

const Head = props => {
  const isIe11 = useContext(Ie11BrowserContext)

  // При роутинге в ie11 picturefill не подгружает правильные размеры изображений.
  // Явный вызов плагина при каждом рендере исправляет баг
  useEffect(() => {
    if (isIe11) {
      // eslint-disable-next-line no-undef
      picturefill()
    }
  })

  return (
    <NextHead>
      <link
        rel="preload"
        href={require(`../static/fonts/Roboto_Slab_normal_300_${props.lng}.woff2`)}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={require(`../static/fonts/Roboto_normal_100_${props.lng}.woff2`)}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={require(`../static/fonts/Roboto_normal_900_${props.lng}.woff2`)}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        // https://stackoverflow.com/a/27232658
        // https://github.com/bfred-it/supports-webp/blob/master/index.js
        function canUseWebP() {
            const canvas = document.createElement('canvas')
            canvas.width = canvas.height = 1;
            return canvas.toDataURL &&
              canvas.toDataURL('image/webp') &&
              canvas.toDataURL('image/webp').indexOf('image/webp') === 5
        }
        if (canUseWebP()) {
            document.documentElement.classList.add('webp')
        }
      `,
        }}
      />
      {isIe11 && (
        <Fragment>
          <script
            crossOrigin="anonymous"
            src="https://polyfill.io/v3/polyfill.min.js?features=es6%2Ces7%2Cfetch%2CSymbol.asyncIterator"
          />
          <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.3/picturefill.min.js"
          />
        </Fragment>
      )}

      {/* // } */}
      <meta charSet="utf-8" />
      <title>{`${props.title}${props.templateTitle}`}</title>
      <meta name="description" content={unescapeHtmlEntities(props.description)} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <link rel='icon' sizes='192x192' href='/static/icons/touch-icon.png' />*/}
      {/* <link rel='apple-touch-icon' href='/static/icons/touch-icon.png' />*/}
      {/* <link rel='mask-icon' href='/static/icons/favicon-mask.svg' color='#49B882' />*/}
      <link rel="icon" href={require('../static/icons/favicon.ico')} />
      <meta property="og:title" content={props.title || ''} />
      <meta property="og:url" content={`${origin}${props.router.asPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={unescapeHtmlEntities(props.description)} />
      <meta name="twitter:site" content={`${origin}${props.router.asPath}`} />
      <meta name="twitter:card" content="summary_large_image" />
      {props.ogImage && (
        <Fragment>
          <meta name="twitter:image" content={`${origin}${props.ogImage.url}`} />
          <meta property="og:image" content={`${origin}${props.ogImage.url}`} />
          <meta property="og:image:width" content={props.ogImage.width} />
          <meta property="og:image:height" content={props.ogImage.height} />
        </Fragment>
      )}
      <meta property="fb:app_id" content="416195255787519" />
      <StructuredData />
    </NextHead>
  )
}

Head.propTypes = {
  title: string,
  description: string,
  ogImage: shape({
    url: string,
    width: number,
    height: number,
  }),
  structuredData: node,
}
Head.defaultProps = {
  structuredData: <StructuredData />,
  templateTitle: ' | CSSSR',
}

export default withRouter(translate()(Head))
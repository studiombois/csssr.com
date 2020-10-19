import React, { Fragment } from 'react'
import NextHead from 'next/head'
import { withRouter } from 'next/router'
import { number, shape, string } from 'prop-types'
import unescapeHtmlEntities from '../utils/unescapeHtmlEntities'
import getStructuredData from '../utils/getStructuredData'
import { PagesListConsumer } from '../utils/pagesListProvider'
import { getPathName, isJobPage } from '../common/get-page-pathname-in-language'
import { getOriginal } from '@csssr/csssr.images/dist/utils'

import ogImages from '../public/images/main/og/all.png?csssr-images'

// Можно здесь честно указать origin, а не захардкодить
const origin = 'https://csssr.com'

const Head = (props) => {
  const pathname = getPathName(props.router.asPath)
  const localePageCounter = props.pagesList.filter((page) => page.pathname === pathname).length

  return (
    <NextHead>
      {(!pathname || (localePageCounter > 1 && !isJobPage(pathname))) && (
        <Fragment>
          <link
            rel="alternate"
            hrefLang="x-default"
            href={!pathname ? 'https://csssr.com/en' : `https://csssr.com/en/${pathname}`}
          />
          <link
            rel="alternate"
            hrefLang="ru"
            href={!pathname ? 'https://csssr.com/ru' : `https://csssr.com/ru/${pathname}`}
          />
          <link
            rel="alternate"
            hrefLang="en"
            href={!pathname ? 'https://csssr.com/en' : `https://csssr.com/en/${pathname}`}
          />
        </Fragment>
      )}
      {pathname === 'jobs' && (
        <Fragment>
          <link rel="alternate" hrefLang="x-default" href={`https://csssr.com/en-us/${pathname}`} />
          <link rel="alternate" hrefLang="ru-ru" href={`https://csssr.com/ru-ru/${pathname}`} />
          <link rel="alternate" hrefLang="ru-ee" href={`https://csssr.com/ru-ee/${pathname}`} />
          <link rel="alternate" hrefLang="en-ee" href={`https://csssr.com/en-ee/${pathname}`} />
          <link rel="alternate" hrefLang="en-sg" href={`https://csssr.com/en-sg/${pathname}`} />
          <link rel="alternate" hrefLang="en-us" href={`https://csssr.com/en-us/${pathname}`} />
        </Fragment>
      )}
      <link rel="canonical" href={`https://csssr.com${props.router.asPath}`} />
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

      <meta charSet="utf-8" />
      <title>{`${props.title}${props.templateTitle}`}</title>
      {props.description && (
        <meta name="description" content={unescapeHtmlEntities(props.description)} />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {!props.customFavicons && (
        <Fragment>
          <link
            rel="shortcut icon"
            href="/static/icons/favicon/favicon.ico"
            type="image/vnd.microsoft.icon"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/icons/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/icons/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/icons/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/icons/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/icons/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="msapplication-config" content="/static/icons/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
        </Fragment>
      )}

      <meta property="og:title" content={props.title || ''} />
      <meta property="og:url" content={`${origin}${props.router.asPath}`} />
      <meta property="og:type" content="website" />
      {props.description && (
        <meta property="og:description" content={unescapeHtmlEntities(props.description)} />
      )}
      <meta name="twitter:site" content={`${origin}${props.router.asPath}`} />
      <meta name="twitter:card" content="summary_large_image" />
      {props.ogImage && (
        <Fragment>
          <meta name="twitter:image" content={props.ogImage.url} />
          <meta property="og:image" content={props.ogImage.url} />
          <meta property="og:image:width" content={props.ogImage.width} />
          <meta property="og:image:height" content={props.ogImage.height} />
        </Fragment>
      )}
      <meta property="fb:app_id" content="416195255787519" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: props.structuredData }}
      />
      {props.children}
    </NextHead>
  )
}

Head.propTypes = {
  title: string,
  templateTitle: string,
  description: string,
  ogImage: shape({
    url: string,
    width: number,
    height: number,
  }),
  structuredData: string,
}

Head.defaultProps = {
  structuredData: getStructuredData(),
  templateTitle: ' | CSSSR',
  ogImage: {
    url: getOriginal(ogImages),
    width: 3840,
    height: 1280,
  },
}

export default withRouter(PagesListConsumer(Head))

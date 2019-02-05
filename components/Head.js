import React from 'react'
import NextHead from 'next/head'
import { withRouter } from 'next/router'
import { number, string, shape } from 'prop-types'
import translate from '../utils/translate-wrapper'
import unescapeHtmlEntities from '../utils/unescapeHtmlEntities'

// TODO если deplomat передаёт origin или host в env, то использовать эти данные
// Пока хардкод, решим позже как лучше это сделать
const origin = 'https://csssr.com'

const Head = props => (
  <NextHead>
    <link rel='preload' href={require(`../static/fonts/Roboto_Slab_normal_300_${props.lng}.woff2`)} as='font' type='font/woff2' crossOrigin='anonymous'/>
    <link rel='preload' href={require(`../static/fonts/Roboto_normal_100_${props.lng}.woff2`)} as='font' type='font/woff2' crossOrigin='anonymous'/>
    <link rel='preload' href={require(`../static/fonts/Roboto_normal_900_${props.lng}.woff2`)} as='font' type='font/woff2' crossOrigin='anonymous'/>
    <script dangerouslySetInnerHTML={{ __html: `
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
    ` }} />
    <meta charSet='utf-8' />
    <title>{`${props.title} | CSSSR`}</title>
    <meta
      name='description'
      content={unescapeHtmlEntities(props.description)}
    />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    {/* <link rel='icon' sizes='192x192' href='/static/icons/touch-icon.png' />*/}
    {/* <link rel='apple-touch-icon' href='/static/icons/touch-icon.png' />*/}
    {/* <link rel='mask-icon' href='/static/icons/favicon-mask.svg' color='#49B882' />*/}
    <link rel='icon' href='/static/icons/favicon.ico' />
    <meta property='og:title' content={props.title || ''} />
    <meta property='og:url' content={`${origin}${props.router.asPath}`} />
    <meta property='og:type' content='website' />
    <meta
      property='og:description'
      content={unescapeHtmlEntities(props.description)}
    />
    <meta name='twitter:site' content={props.router.asPath} />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:image' content={`${origin}${props.ogImage.url}`} />
    <meta property='og:image' content={`${origin}${props.ogImage.url}`} />
    <meta property='og:image:width' content={props.ogImage.width} />
    <meta property='og:image:height' content={props.ogImage.height} />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  ogImage: shape({
    url: string,
    width: number,
    height: number,
  }),
}

Head.defaultProps = {
  ogImage: {},
}

export default withRouter(translate()(Head))

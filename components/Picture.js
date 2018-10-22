
import React, { Fragment } from 'react'
import { translate } from 'react-i18next'

const altTextByImageKey = {
  dog: 'dev:imgAlt.dog',
  geometry: 'dev:imgAlt.geometry',
  time: 'dev:imgAlt.time',
  perfect: 'dev:imgAlt.perfect',
}

const Picture = ({ className, imagesKey, t }) =>
  <Fragment>
    <picture className={className}>
      <source
        media='(max-width: 1023px)'
        type='image/webp'
        srcSet={`../static/images/1024/${imagesKey}@1x.webp,
                 ../static/images/1024/${imagesKey}@2x.webp 2x,
                 ../static/images/1024/${imagesKey}@3x.webp 3x`}/>

      <source
        media='(max-width: 1023px)'
        srcSet={`../static/images/1024/${imagesKey}@1x.png,
                 ../static/images/1024/${imagesKey}@2x.png 2x,
                 ../static/images/1024/${imagesKey}@3x.png 3x`}/>

      <source
        media='(max-width: 1359px)'
        type='image/webp'
        srcSet={`../static/images/1280/${imagesKey}@1x.webp,
                 ../static/images/1280/${imagesKey}@2x.webp 2x,
                 ../static/images/1280/${imagesKey}@3x.webp 3x`}/>

      <source
        media='(max-width: 1359px)'
        srcSet={`../static/images/1280/${imagesKey}@1x.png,
                 ../static/images/1280/${imagesKey}@2x.png 2x,
                 ../static/images/1280/${imagesKey}@3x.png 3x`}/>

      <source
        media='(max-width: 1919px)'
        type='image/webp'
        srcSet={`../static/images/1360/${imagesKey}@1x.webp,
                 ../static/images/1360/${imagesKey}@2x.webp 2x,
                 ../static/images/1360/${imagesKey}@3x.webp 3x`}/>

      <source
        media='(max-width: 1919px)'
        srcSet={`../static/images/1360/${imagesKey}@1x.png,
                 ../static/images/1360/${imagesKey}@2x.png 2x,
                 ../static/images/1360/${imagesKey}@3x.png 3x`}/>

      <source
        type='image/webp'
        srcSet={`../static/images/1920/${imagesKey}@1x.webp,
                 ../static/images/1920/${imagesKey}@2x.webp 2x,
                 ../static/images/1920/${imagesKey}@3x.webp 3x`}/>

      <img
        srcSet={`../static/images/1920/${imagesKey}@1x.png,
                 ../static/images/1920/${imagesKey}@2x.png 2x,
                 ../static/images/1920/${imagesKey}@3x.png 3x`}
        src={`../static/images/1920/${imagesKey}@1x.png`}
        alt={t(altTextByImageKey[imagesKey])} />
    </picture>
    <style jsx>{`
      img {
        height: 100%;
      }
    `}</style>
  </Fragment>

export default translate()(Picture)

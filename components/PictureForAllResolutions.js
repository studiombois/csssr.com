import React, { Fragment } from 'react'
import { string } from 'prop-types'

const PictureForAllResolutions = ({ className, namespace, imagesKey, alt }) =>
  <Fragment>
    <picture className={className}>
      <source
        media='(max-width: 1023px)'
        type='image/webp'
        srcSet={`../static/images/${namespace}/1024/${imagesKey}@1x.webp,
                 ../static/images/${namespace}/1024/${imagesKey}@2x.webp 2x,
                 ../static/images/${namespace}/1024/${imagesKey}@3x.webp 3x`}/>

      <source
        media='(max-width: 1023px)'
        srcSet={`../static/images/${namespace}/1024/${imagesKey}@1x.png,
                 ../static/images/${namespace}/1024/${imagesKey}@2x.png 2x,
                 ../static/images/${namespace}/1024/${imagesKey}@3x.png 3x`}/>

      <source
        media='(max-width: 1359px)'
        type='image/webp'
        srcSet={`../static/images/${namespace}/1280/${imagesKey}@1x.webp,
                 ../static/images/${namespace}/1280/${imagesKey}@2x.webp 2x,
                 ../static/images/${namespace}/1280/${imagesKey}@3x.webp 3x`}/>

      <source
        media='(max-width: 1359px)'
        srcSet={`../static/images/${namespace}/1280/${imagesKey}@1x.png,
                 ../static/images/${namespace}/1280/${imagesKey}@2x.png 2x,
                 ../static/images/${namespace}/1280/${imagesKey}@3x.png 3x`}/>

      <source
        media='(max-width: 1919px)'
        type='image/webp'
        srcSet={`../static/images/${namespace}/1360/${imagesKey}@1x.webp,
                 ../static/images/${namespace}/1360/${imagesKey}@2x.webp 2x,
                 ../static/images/${namespace}/1360/${imagesKey}@3x.webp 3x`}/>

      <source
        media='(max-width: 1919px)'
        srcSet={`../static/images/${namespace}/1360/${imagesKey}@1x.png,
                 ../static/images/${namespace}/1360/${imagesKey}@2x.png 2x,
                 ../static/images/${namespace}/1360/${imagesKey}@3x.png 3x`}/>

      <source
        type='image/webp'
        srcSet={`../static/images/${namespace}/1920/${imagesKey}@1x.webp,
                 ../static/images/${namespace}/1920/${imagesKey}@2x.webp 2x,
                 ../static/images/${namespace}/1920/${imagesKey}@3x.webp 3x`}/>

      <img
        srcSet={`../static/images/${namespace}/1920/${imagesKey}@1x.png,
                 ../static/images/${namespace}/1920/${imagesKey}@2x.png 2x,
                 ../static/images/${namespace}/1920/${imagesKey}@3x.png 3x`}
        src={`../static/images/${namespace}/1920/${imagesKey}@1x.png`}
        alt={alt} />
    </picture>
    <style jsx>{`
      img {
        height: 100%;
      }
    `}</style>
  </Fragment>

PictureForAllResolutions.propTypes = {
  className: string,
  namespace: string,
  imagesKey: string,
  alt: string,
}

export default PictureForAllResolutions

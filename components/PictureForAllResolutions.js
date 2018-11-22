import React, { Fragment } from 'react'
import { string, shape } from 'prop-types'

const PictureForAllResolutions = ({ className, image: { namespace, key, alt, extension = 'png' } }) =>
  <Fragment>
    <picture className={className}>
      <source
        media='(max-width: 767px)'
        type='image/webp'
        srcSet={`/static/images/${namespace}/360/${key}@1x.webp,
                 /static/images/${namespace}/360/${key}@2x.webp 2x,
                 /static/images/${namespace}/360/${key}@3x.webp 3x`}/>

      <source
        media='(max-width: 767px)'
        srcSet={`/static/images/${namespace}/360/${key}@1x.${extension},
                 /static/images/${namespace}/360/${key}@2x.${extension} 2x,
                 /static/images/${namespace}/360/${key}@3x.${extension} 3x`}/>

      <source
        media='(max-width: 1023px)'
        type='image/webp'
        srcSet={`/static/images/${namespace}/1024/${key}@1x.webp,
                 /static/images/${namespace}/1024/${key}@2x.webp 2x,
                 /static/images/${namespace}/1024/${key}@3x.webp 3x`}/>

      <source
        media='(max-width: 1023px)'
        srcSet={`/static/images/${namespace}/1024/${key}@1x.${extension},
                 /static/images/${namespace}/1024/${key}@2x.${extension} 2x,
                 /static/images/${namespace}/1024/${key}@3x.${extension} 3x`}/>

      <source
        media='(max-width: 1359px)'
        type='image/webp'
        srcSet={`/static/images/${namespace}/1280/${key}@1x.webp,
                 /static/images/${namespace}/1280/${key}@2x.webp 2x,
                 /static/images/${namespace}/1280/${key}@3x.webp 3x`}/>

      <source
        media='(max-width: 1359px)'
        srcSet={`/static/images/${namespace}/1280/${key}@1x.${extension},
                 /static/images/${namespace}/1280/${key}@2x.${extension} 2x,
                 /static/images/${namespace}/1280/${key}@3x.${extension} 3x`}/>

      <source
        media='(max-width: 1919px)'
        type='image/webp'
        srcSet={`/static/images/${namespace}/1360/${key}@1x.webp,
                 /static/images/${namespace}/1360/${key}@2x.webp 2x,
                 /static/images/${namespace}/1360/${key}@3x.webp 3x`}/>

      <source
        media='(max-width: 1919px)'
        srcSet={`/static/images/${namespace}/1360/${key}@1x.${extension},
                 /static/images/${namespace}/1360/${key}@2x.${extension} 2x,
                 /static/images/${namespace}/1360/${key}@3x.${extension} 3x`}/>

      <source
        type='image/webp'
        srcSet={`/static/images/${namespace}/1920/${key}@1x.webp,
                 /static/images/${namespace}/1920/${key}@2x.webp 2x,
                 /static/images/${namespace}/1920/${key}@3x.webp 3x`}/>

      <img
        srcSet={`/static/images/${namespace}/1920/${key}@1x.${extension},
                 /static/images/${namespace}/1920/${key}@2x.${extension} 2x,
                 /static/images/${namespace}/1920/${key}@3x.${extension} 3x`}
        src={`/static/images/${namespace}/1920/${key}@1x.${extension}`}
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
  image: shape({
    namespace: string,
    key: string,
    alt: string,
    extension: string,
  }),
}

export default PictureForAllResolutions

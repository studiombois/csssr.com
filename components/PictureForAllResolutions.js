import React, { Fragment } from 'react'
import { string, shape } from 'prop-types'

const defaultResolutions = ['360', '1024', '1280', '1360']
const mediaRuleByResoluton = {
  360: '(max-width: 767px)',
  1024: '(max-width: 1023px)',
  1280: '(max-width: 1359px)',
  1360: '(max-width: 1919px)',
}
const PictureForAllResolutions = ({ className, image: { namespace, key, alt, extension = 'png' }, customResolutions = defaultResolutions }) =>
  <Fragment>
    <picture className={className}>
      {customResolutions.map(resolution =>
        <Fragment key={resolution}>
          <source
            media={mediaRuleByResoluton[resolution]}
            type='image/webp'
            srcSet={`/static/images/${namespace}/${resolution}/${key}@1x.webp,
                     /static/images/${namespace}/${resolution}/${key}@2x.webp 2x,
                     /static/images/${namespace}/${resolution}/${key}@3x.webp 3x`}/>

          <source
            media={mediaRuleByResoluton[resolution]}
            srcSet={`/static/images/${namespace}/${resolution}/${key}@1x.${extension},
                     /static/images/${namespace}/${resolution}/${key}@2x.${extension} 2x,
                     /static/images/${namespace}/${resolution}/${key}@3x.${extension} 3x`}/>
        </Fragment>
      )}

      <source
        type='image/webp'
        srcSet={`/static/images/${namespace}/1920/${key}@1x.webp,
                 /static/images/${namespace}/1920/${key}@2x.webp 2x,
                 /static/images/${namespace}/1920/${key}@3x.webp 3x`}/>

      <img
        className={className}
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

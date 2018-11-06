import React, { Fragment } from 'react'
import { string, shape } from 'prop-types'

const Picture = ({ className, image: { namespace, key, alt } }) =>
  <Fragment>
    <picture className={className}>
      <source
        type='image/webp'
        srcSet={`/static/images/${namespace}/${key}@1x.webp,
                /static/images/${namespace}/${key}@2x.webp 2x,
                /static/images/${namespace}/${key}@3x.webp 3x`}/>
      <img
        className={className}
        srcSet={`/static/images/${namespace}/${key}@1x.png,
                /static/images/${namespace}/${key}@2x.png 2x,
                /static/images/${namespace}/${key}@3x.png 3x`}
        src={`/static/images/${namespace}/${key}@1x.png`}
        alt={alt}/>
    </picture>
  </Fragment>

Picture.propTypes = {
  className: string,
  image: shape({
    namespace: string,
    key: string,
    alt: string,
  }),
}

export default Picture

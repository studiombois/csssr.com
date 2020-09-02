import React, { Fragment } from 'react'
import { shape, string } from 'prop-types'
import getSrcSet from '../utils/client/getSrcSet'

const Picture = ({ className, testid, image: { namespace, key, alt } }) => (
  <Fragment>
    <picture className={className}>
      <source
        type="image/webp"
        srcSet={getSrcSet(namespace, null, key, 'webp', ['1x', '2x', '3x'])}
      />
      <img
        srcSet={getSrcSet(namespace, null, key, 'png', ['1x', '2x', '3x'])}
        src={getSrcSet(namespace, null, key, 'png', ['1x'])}
        alt={alt}
        data-testid={testid}
      />
    </picture>
  </Fragment>
)

Picture.propTypes = {
  className: string,
  testid: string,
  image: shape({
    namespace: string,
    key: string,
    alt: string,
  }),
}

export default Picture

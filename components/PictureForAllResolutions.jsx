import React, { Fragment } from 'react'
import { css } from '@emotion/core'
import { shape, string } from 'prop-types'
import getSrcSet from '../utils/client/getSrcSet'

const defaultResolutions = ['360', '1024', '1280', '1360']
const mediaRuleByResoluton = {
  360: '(max-width: 767px)',
  1024: '(max-width: 1279px)',
  1280: '(max-width: 1359px)',
  1360: '(max-width: 1919px)',
}
const PictureForAllResolutions = ({
  className,
  testid,
  image: { namespace, key, alt, extension = 'png' },
  customResolutions = defaultResolutions,
}) => (
  <picture className={className}>
    {customResolutions.map((resolution) => (
      <Fragment key={resolution}>
        <source
          media={mediaRuleByResoluton[resolution]}
          type="image/webp"
          srcSet={getSrcSet(namespace, resolution, key, 'webp', ['1x', '2x', '3x'])}
        />

        <source
          media={mediaRuleByResoluton[resolution]}
          srcSet={getSrcSet(namespace, resolution, key, extension, ['1x', '2x', '3x'])}
        />
      </Fragment>
    ))}

    <source
      type="image/webp"
      srcSet={getSrcSet(namespace, 1920, key, 'webp', ['1x', '2x', '3x'])}
    />

    <img
      srcSet={getSrcSet(namespace, 1920, key, extension, ['1x', '2x', '3x'])}
      src={getSrcSet(namespace, 1920, key, extension, ['1x'])}
      alt={alt}
      data-testid={testid}
      css={css`
        height: 100%;
        width: 100%;
      `}
    />
  </picture>
)

PictureForAllResolutions.propTypes = {
  className: string,
  testId: string,
  image: shape({
    namespace: string,
    key: string,
    alt: string,
    extension: string,
  }),
}

export default PictureForAllResolutions

import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import { isEmpty } from 'ramda'
import { object, string } from 'prop-types'
import styles from './PictureForAllResolutions.styles'
import flattenObjDeep from '../../../utils/client/flattenObjDeep'

const PictureForAllResolutions = ({
  className,
  children,
  testId,
  images,
  fallback,
  type,
  alt,
  theme,
}) => {
  if (isEmpty(theme) || isEmpty(theme.breakpoints)) {
    throw new Error(
      'Компонент <PictureForAllResolutions /> не получил пропс `theme` или в `theme` нет свойства `breakpoints`',
    )
  }

  const mediaRulesByResolution = flattenObjDeep(theme.breakpoints)

  return (
    <Fragment>
      <picture className={className}>
        {Object.keys(images).map((resolution) => {
          const mediaRule = mediaRulesByResolution[resolution].slice(7)
          const extensions = ['webp', 'png', 'jpeg', 'jpg', 'svg']

          return extensions.map(
            (extension) =>
              images[resolution][extension] && (
                <source
                  key={`${resolution}_${extension}`}
                  media={mediaRule}
                  type={type || `image/${extension}`}
                  srcSet={
                    images[resolution][extension].srcSet
                      ? images[resolution][extension].srcSet
                      : images[resolution][extension]
                  }
                />
              ),
          )
        })}
        {!children && (
          <img srcSet={fallback.srcSet} src={fallback['1x']} data-testid={testId} alt={alt} />
        )}
        {children}
      </picture>
    </Fragment>
  )
}

PictureForAllResolutions.propTypes = {
  className: string,
  testId: string,
  images: object.isRequired,
  fallback: object,
  alt: string,
  theme: object.isRequired,
}

export default styled(withTheme(PictureForAllResolutions))`
  ${styles.base}
`

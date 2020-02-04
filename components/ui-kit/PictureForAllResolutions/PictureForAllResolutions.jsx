import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import { isEmpty } from 'ramda'
import { string, object } from 'prop-types'
import styles from './PictureForAllResolutions.styles'
import flattenObjDeep from '../../../utils/client/flattenObjDeep'

const PictureForAllResolutions = ({ className, testid, images, fallback, alt, theme }) => {
  if (isEmpty(theme) || isEmpty(theme.breakpoints)) {
    throw new Error(
      'Компонент <PictureForAllResolutions /> не получил пропс `theme` или в `theme` нет свойства `breakpoints`',
    )
  }

  const mediaRulesByResoluton = flattenObjDeep(theme.breakpoints)

  return (
    <Fragment>
      <picture className={className}>
        {Object.keys(images).map(resolution => {
          const mediaRule = mediaRulesByResoluton[resolution].slice(7)
          const extensions = ['webp', 'png', 'jpeg', 'jpg']

          return extensions.map(
            extension =>
              images[resolution][extension] && (
                <source
                  key={`${resolution}_${extension}`}
                  media={mediaRule}
                  type={`image/${extension}`}
                  srcSet={images[resolution][extension].srcSet}
                />
              ),
          )
        })}

        <img srcSet={fallback.srcSet} src={fallback['1x']} data-testid={testid} alt={alt} />
      </picture>
    </Fragment>
  )
}

PictureForAllResolutions.propTypes = {
  className: string,
  testid: string,
  images: object.isRequired,
  fallback: object.isRequired,
  alt: string.isRequired,
  theme: object.isRequired,
}

export default styled(withTheme(PictureForAllResolutions))`
  ${styles.base}
`

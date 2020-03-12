import React from 'react'
import { string, bool, oneOf } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'

import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'
import translate from '../../../../utils/translate-wrapper'
import { DeviceConsumer } from '../../../../utils/deviceProvider'

import styles from './Highlight.styles'

import {
  highlightImages,
  squareImages,
  circleImages,
  arcImages,
  triangleImages,
} from '../../../../data/way-of-work/transparency'

const Highlight = ({ className, id, t, isMobile, active }) => {
  const figures = [
    {
      name: 'square',
      images: squareImages,
    },
    {
      name: 'circle',
      images: circleImages,
    },
    {
      name: 'arc',
      images: arcImages,
    },
    {
      name: 'triangle',
      images: triangleImages,
    },
  ]

  return (
    <div className={className} id={id}>
      {isMobile ? (
        <>
          {figures.map(figure => (
            <span
              key={figure.name}
              className={cn('figure', figure.name, {
                active: figure.name === active,
              })}
            />
          ))}
        </>
      ) : (
        <>
          <PictureForAllResolutions
            images={highlightImages}
            fallback={highlightImages['desktop.all'].png}
            alt={t('wayOfWork:transparency.imagesAlt.highlight')}
            className="image"
          />

          {figures.map(figure => (
            <PictureForAllResolutions
              key={figure.name}
              images={figure.images}
              fallback={figure.images['desktop.all'].png}
              alt={t('wayOfWork:transparency.imagesAlt.square')}
              className={cn('figure', figure.name, {
                active: figure.name === active,
              })}
            />
          ))}
        </>
      )}
    </div>
  )
}

Highlight.propTypes = {
  className: string,
  id: string,
  isMobile: bool,
  active: oneOf(['square', 'circle', 'arc', 'triangle']),
}

export default translate(
  DeviceConsumer(styled(Highlight)`
    ${styles}
  `),
)

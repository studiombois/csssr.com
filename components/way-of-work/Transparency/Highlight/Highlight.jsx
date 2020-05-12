import React from 'react'
import { bool, oneOf, string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'

import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

import styles from './Highlight.styles'

import {
  arcImages,
  circleImages,
  highlightImages,
  squareImages,
  triangleImages,
} from '../../../../data/way-of-work/transparency'

const Highlight = ({ className, id, isMobile, active, l10n: { translations } }) => {
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
          {figures.map((figure) => (
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
            alt={translations.wayOfWork.transparency.imagesAlt.highlight}
            className="image"
          />

          {figures.map((figure) => (
            <PictureForAllResolutions
              key={figure.name}
              images={figure.images}
              fallback={figure.images['desktop.all'].png}
              alt={translations.wayOfWork.transparency.imagesAlt.square}
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

export default L10nConsumer(
  MsBrowserConsumer(
    DeviceConsumer(styled(Highlight)`
      ${styles}
    `),
  ),
)

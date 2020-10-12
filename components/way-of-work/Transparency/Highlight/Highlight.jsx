import React from 'react'
import { bool, oneOf, string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

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
          <PictureSmart
            requireImages={highlightImages}
            alt={translations.wayOfWork.transparency.imagesAlt.highlight}
            className="image"
          />

          {figures.map((figure) => (
            <PictureSmart
              key={figure.name}
              requireImages={figure.images}
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

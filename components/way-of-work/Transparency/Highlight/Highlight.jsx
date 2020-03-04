import React from 'react'
import { string, bool } from 'prop-types'
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

const Highlight = ({ className, id, t, isMobile }) => {
  return (
    <div className={className} id={id}>
      {isMobile ? (
        <>
          <span className="square figure" />
          <span className="circle figure" />
          <span className="arc figure" />
          <span className="triangle figure" />
        </>
      ) : (
        <>
          <PictureForAllResolutions
            images={highlightImages}
            fallback={highlightImages['desktop.all'].png}
            alt={t('wayOfWork:transparency.imagesAlt.highlight')}
            className="image"
          />

          <PictureForAllResolutions
            images={squareImages}
            fallback={squareImages['desktop.all'].png}
            alt={t('wayOfWork:transparency.imagesAlt.square')}
            className="figure square"
          />

          <PictureForAllResolutions
            images={circleImages}
            fallback={circleImages['desktop.all'].png}
            alt={t('wayOfWork:transparency.imagesAlt.circle')}
            className="figure circle"
          />

          <PictureForAllResolutions
            images={arcImages}
            fallback={arcImages['desktop.all'].png}
            alt={t('wayOfWork:transparency.imagesAlt.arc')}
            className="figure arc"
          />

          <PictureForAllResolutions
            images={triangleImages}
            fallback={triangleImages['desktop.all'].png}
            alt={t('wayOfWork:transparency.imagesAlt.triangle')}
            className="figure triangle"
          />
        </>
      )}
    </div>
  )
}

Highlight.propTypes = {
  className: string,
  id: string,
  isMobile: bool,
}

export default translate()(
  DeviceConsumer(styled(Highlight)`
    ${styles}
  `),
)

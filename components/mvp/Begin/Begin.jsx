import React from 'react'
import styled from '@emotion/styled'
import styles, { pictureStyles, planetStyles } from './Begin.styles'
import Rocket from '../Rocket'
import PictureForAllResolutions from '../../PictureForAllResolutions'
import Grid from '../../ui-kit/core-design/Grid'
import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Begin = ({ className, t }) => (
  <Grid as="article" id="what-is-mvp" className={className}>
    <PictureForAllResolutions
      css={pictureStyles}
      image={{ namespace: 'mvp', key: 'geometry', alt: t('mvp:begin.imageAlt.title') }}
    />
    <h1>{t('mvp:begin.title')}</h1>
    <p className="begin-text">{t('mvp:begin.text')}</p>
    <div className="planet">
      <PictureForAllResolutions
        css={planetStyles}
        image={{ namespace: 'mvp', key: 'yellow_planet', alt: t('mvp:begin.imageAlt.title') }}
      />
    </div>
    <div className="rocket">
      <Rocket />
    </div>
    <p className="rocket-text font_p16-regular">{t('mvp:begin.rocketText')}</p>
  </Grid>
)

export default translate(
  MsBrowserConsumer(styled(Begin)`
    ${styles}
  `),
)

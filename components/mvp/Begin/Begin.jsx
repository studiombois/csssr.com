import React from 'react'
import styled from '@emotion/styled'
import styles, { pictureStyles, planetStyles } from './Begin.styles'
import Rocket from '../Rocket'
import PictureForAllResolutions from '../../PictureForAllResolutions'
import Grid from '../../ui-kit/core-design/Grid'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Begin = ({ className, l10n: { translations } }) => (
  <Grid as="article" id="what-is-mvp" className={className}>
    <PictureForAllResolutions
      css={pictureStyles}
      image={{ namespace: 'mvp', key: 'geometry', alt: translations.mvp.begin.imgAlt.title }}
    />
    <h1>{translations.mvp.begin.title}</h1>
    <p className="begin-text">{translations.mvp.begin.text}</p>
    <div className="planet">
      <PictureForAllResolutions
        css={planetStyles}
        image={{ namespace: 'mvp', key: 'yellow_planet', alt: translations.mvp.begin.imgAlt.title }}
      />
    </div>
    <div className="rocket">
      <Rocket />
    </div>
    <p className="rocket-text font_p16-regular">{translations.mvp.begin.rocketText}</p>
  </Grid>
)

export default L10nConsumer(
  MsBrowserConsumer(styled(Begin)`
    ${styles}
  `),
)

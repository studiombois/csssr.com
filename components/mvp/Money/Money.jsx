import React from 'react'
import styled from '@emotion/styled'
import styles from './Money.styles'
import PictureForAllResolutions from '../../PictureForAllResolutions'
import Grid from '../../ui-kit/core-design/Grid'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Money = ({ className, l10n: { translations } }) => (
  <Grid as="article" className={className}>
    <h2>{translations.mvp.money.title}</h2>

    <p>{translations.mvp.money.text}</p>

    <PictureForAllResolutions
      className="picture"
      image={{ namespace: 'mvp', key: 'money', alt: translations.mvp.money.imgAlt }}
    />
  </Grid>
)

export default L10nConsumer(
  MsBrowserConsumer(styled(Money)`
    ${styles}
  `),
)

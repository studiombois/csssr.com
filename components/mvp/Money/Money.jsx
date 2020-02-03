import React from 'react'
import styled from '@emotion/styled'
import styles from './Money.styles'
import PictureForAllResolutions from '../../PictureForAllResolutions'
import Grid from '../../ui-kit/core-design/Grid'
import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Money = ({ className, t }) => (
  <Grid as="article" className={className}>
    <h2>{t('mvp:money.title')}</h2>

    <p>{t('mvp:money.text')}</p>

    <PictureForAllResolutions
      className="picture"
      image={{ namespace: 'mvp', key: 'money', alt: t('mvp:money.imageAlt') }}
    />
  </Grid>
)

export default translate()(
  MsBrowserConsumer(styled(Money)`
    ${styles}
  `),
)

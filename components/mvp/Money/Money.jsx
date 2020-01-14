import React from 'react'
import styled from '@emotion/styled'
import styles, { pictureStyles } from './Money.styles'
import PictureForAllResolutions from '../../PictureForAllResolutions'
import Grid from '../../ui-kit/core-design/Grid'
import translate from '../../../utils/translate-wrapper'

const Money = ({ className, t }) => (
  <Grid as="article" className={className}>
    <h2>{t('mvp:money.title')}</h2>

    <p>{t('mvp:money.text')}</p>

    <PictureForAllResolutions
      css={pictureStyles}
      image={{ namespace: 'mvp', key: 'money', alt: t('mvp:money.imageAlt') }}
    />
  </Grid>
)

export default styled(translate()(Money))`
  ${styles}
`

import React, { PureComponent } from 'react'
import styled from '@emotion/styled'
import styles from './Hire.styles'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import Grid from '../../ui-kit/core-design/Grid'
import translate from '../../../utils/translate-wrapper'
import PictureForAllResolutions from '../../PictureForAllResolutions'

class Hire extends PureComponent {
  render() {
    const { className, t } = this.props

    return (
      <Grid className={className} as="article">
        <h1 className="font_h1-slab">
          <span dangerouslySetInnerHTML={{ __html: t('dev:hire.title') }} />
          <span className="font_subhead-slab">{t('dev:hire.subTitle')}</span>
        </h1>

        <blockquote>
          <p
            className="font_p16-regular"
            dangerouslySetInnerHTML={{ __html: t('dev:hire.paragraph1') }}
          />
          <p
            className="font_p16-regular"
            dangerouslySetInnerHTML={{ __html: t('dev:hire.paragraph2') }}
          />
          <footer
            className="font_p16-regular"
            rel="author"
            dangerouslySetInnerHTML={{ __html: t('dev:hire.author') }}
          />
        </blockquote>

        <PictureForAllResolutions
          image={{ namespace: 'dev', key: 'dev', alt: t('dev:imgAlt.dev') }}
        />
      </Grid>
    )
  }
}

export default translate()(
  MsBrowserConsumer(styled(Hire)`
    ${styles}
  `),
)

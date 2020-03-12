import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import styles from './Feature1.styles'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import Grid from '../../ui-kit/core-design/Grid'
import translate from '../../../utils/translate-wrapper'
import PictureForAllResolutions from '../../PictureForAllResolutions'

const Feature1 = ({ className, t, lng, image }) => (
  <section
    css={css`
      overflow: hidden;
    `}
  >
    <Grid className={className} as="div" id="feature1">
      <h2
        id="services"
        className="font_h2-slab"
        dangerouslySetInnerHTML={{ __html: t('dev:service.title') }}
      />

      <p className="font_p24-strong">
        <span dangerouslySetInnerHTML={{ __html: t('dev:service.text') }} className="description" />
      </p>
      <div className="picture-wrapper">
        <PictureForAllResolutions image={image} />

        <p className="font_feature_1">
          <Link href={`/${lng}/service/mvp-development`}>
            <a className="mvp-link">{t('dev:service.mvp')}</a>
          </Link>
        </p>
        <p className="font_feature_2" dangerouslySetInnerHTML={{ __html: t('dev:service.app') }} />
        <p
          className="font_feature_3"
          dangerouslySetInnerHTML={{ __html: t('dev:service.stack') }}
        />
      </div>
    </Grid>
  </section>
)

export default translate()(
  MsBrowserConsumer(styled(Feature1)`
    ${styles}
  `),
)

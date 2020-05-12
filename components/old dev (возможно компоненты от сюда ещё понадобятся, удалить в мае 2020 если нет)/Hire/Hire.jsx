import React, { Fragment, PureComponent } from 'react'
import styled from '@emotion/styled'
import styles, { devLine } from './Hire.styles'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { Global } from '@emotion/core'
import Grid from '../../ui-kit/core-design/Grid'
import { L10nConsumer } from '../../../utils/l10nProvider'
import PictureForAllResolutions from '../../PictureForAllResolutions'

class Hire extends PureComponent {
  render() {
    const {
      className,
      l10n: { translations },
    } = this.props

    return (
      <Fragment>
        <Global styles={devLine} />
        <Grid className={className} as="article">
          <h1 className="font_h1-slab">
            <span dangerouslySetInnerHTML={{ __html: translations.dev.hire.title }} />
            <span className="font_subhead-slab">{translations.dev.hire.subTitle}</span>
          </h1>

          <blockquote>
            <p
              className="font_p16-regular"
              dangerouslySetInnerHTML={{ __html: translations.dev.hire.paragraph1 }}
            />
            <p
              className="font_p16-regular"
              dangerouslySetInnerHTML={{ __html: translations.dev.hire.paragraph2 }}
            />
            <footer
              className="font_p16-regular"
              rel="author"
              dangerouslySetInnerHTML={{ __html: translations.dev.hire.author }}
            />
          </blockquote>

          <PictureForAllResolutions
            image={{ namespace: 'dev', key: 'dev', alt: translations.dev.imgAlt.dev }}
          />
        </Grid>
      </Fragment>
    )
  }
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Hire)`
    ${styles}
  `),
)

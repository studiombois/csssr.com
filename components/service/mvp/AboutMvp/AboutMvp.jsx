import React, { Fragment, PureComponent } from 'react'
import translate from '../../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import Toggler from './Toggler'
import Grid from '../../../ui-kit/core-design/Grid'
import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'
import styled from '@emotion/styled'
import styles from './AboutMvp.styles'
import cn from 'classnames'

import { mvpOnImages, mvpOffImages } from '../../../../data/service/mvp/aboutMvp'

class AboutMvp extends PureComponent {
  state = {
    togglerIndex: 1,
  }
  render() {
    const { className, t } = this.props
    const { togglerIndex } = this.state

    return (
      <Fragment>
        <article className={className} id="advantages">
          <Grid as="div">
            <Heading
              as="h2"
              className="title"
              dangerouslySetInnerHTML={{ __html: t('mvp:aboutMvp.title') }}
              type="slab"
              size="m"
            />

            <Toggler
              className="toggler"
              activeIndex={togglerIndex}
              items={[t('mvp:aboutMvp.togglerOff'), t('mvp:aboutMvp.togglerOn')]}
              onChange={(index) => this.setState({ togglerIndex: index })}
            />

            <div className="description-wrapper">
              <Text
                className={cn('description', { description_visible: togglerIndex === 1 })}
                as="p"
                type="strong"
                size="m"
                dangerouslySetInnerHTML={{ __html: t('mvp:aboutMvp.descriptionOn') }}
              />

              <Text
                className={cn('description', { description_visible: togglerIndex === 0 })}
                as="p"
                type="strong"
                size="m"
                dangerouslySetInnerHTML={{ __html: t('mvp:aboutMvp.descriptionOff') }}
              />
            </div>
          </Grid>

          <div
            className={cn('picture-wrapper', {
              'picture-wrapper_with_bg': togglerIndex === 1,
            })}
          >
            <PictureForAllResolutions
              className={cn('picture', { picture_visible: togglerIndex === 1 })}
              images={mvpOnImages}
              fallback={mvpOnImages['desktop.l']}
              alt={t('mvp:imageAlt.mvpOn')}
            />

            <PictureForAllResolutions
              className={cn('picture', { picture_visible: togglerIndex === 0 })}
              images={mvpOffImages}
              fallback={mvpOffImages['desktop.l']}
              alt={t('mvp:imageAlt.mvpOff')}
            />
          </div>
        </article>
      </Fragment>
    )
  }
}

export default translate(
  MsBrowserConsumer(styled(AboutMvp)`
    ${styles}
  `),
)

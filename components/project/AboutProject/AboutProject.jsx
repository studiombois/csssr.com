import React from 'react'
import { string, func, array, object } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './AboutProject.styles'
import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import Grid from '../../ui-kit/core-design/Grid'

const AboutProject = ({ className, porojectId, paragraphsScheme, images, t }) => (
  <Grid as="section" className={className}>
    <Heading
      className="title"
      as="span"
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: t(`project:${porojectId}.aboutProject.title`) }}
    />

    {paragraphsScheme.map((paragraphsGropup, paragraphsGropupId) => (
      <div
        key={paragraphsGropupId}
        className={cn('paragraphs-gropup', `paragraphs-gropup_${paragraphsGropupId}`)}
      >
        {paragraphsGropup.map((paragrapId) => (
          <Text
            key={paragrapId}
            className="paragraph"
            as="p"
            type={paragraphsGropupId === 0 ? 'regular' : 'strong'}
            size="m"
            dangerouslySetInnerHTML={{
              __html: t(
                `project:${porojectId}.aboutProject.text.${paragraphsGropupId}.${paragrapId}`,
              ),
            }}
          />
        ))}
      </div>
    ))}

    <PictureForAllResolutions
      className="picture"
      images={images}
      fallback={images['desktop.l'].png}
      alt={t(`project:${porojectId}.imgAlt.aboutProject`)}
    />
  </Grid>
)

AboutProject.propTypes = {
  className: string,
  porojectId: string,
  paragraphsScheme: array,
  images: object,
  t: func,
}

export default translate(
  MsBrowserConsumer(styled(AboutProject)`
    ${styles}
  `),
)

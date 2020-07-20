import React from 'react'
import { array, object, string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './AboutProject.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import Grid from '../../ui-kit/core-design/Grid'

const AboutProject = ({
  className,
  projectId,
  paragraphsScheme,
  images,
  l10n: { translations },
}) => (
  <Grid as="section" className={className}>
    <Heading
      className="title"
      as="span"
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: translations.project[projectId].aboutProject.title }}
    />

    {paragraphsScheme.map(
      (paragraphsGroup, paragraphsGroupId) =>
        paragraphsGroup && (
          <Grid
            as="div"
            key={paragraphsGroupId}
            className={cn(
              'paragraphs-gropup',
              `paragraphs-gropup_${paragraphsGroupId}`,
              `paragraphs-gropup_${projectId}`,
            )}
          >
            {paragraphsGroup.map((paragrapId) => (
              <Text
                key={paragrapId}
                className="paragraph"
                as="p"
                type={paragraphsGroupId === 0 ? 'regular' : 'strong'}
                size="m"
                dangerouslySetInnerHTML={{
                  __html:
                    translations.project[projectId].aboutProject.text[paragraphsGroupId][
                      paragrapId
                    ],
                }}
              />
            ))}
          </Grid>
        ),
    )}

    <PictureForAllResolutions
      className="picture"
      images={images}
      fallback={images['desktop.l'].png}
      alt={translations.project[projectId].imgAlt.aboutProject}
    />
  </Grid>
)

AboutProject.propTypes = {
  className: string,
  projectId: string,
  paragraphsScheme: array,
  images: object,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(AboutProject)`
    ${styles}
  `),
)

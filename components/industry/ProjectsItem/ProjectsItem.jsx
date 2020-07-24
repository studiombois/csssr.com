import React, { Fragment } from 'react'
import { array, object, string } from 'prop-types'
import { L10nConsumer } from '../../../utils/l10nProvider'
import styled from '@emotion/styled'
import styles from './ProjectsItem.styles'
import cn from 'classnames'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import ButtonLink from '../../ui-kit/core-design/ButtonLink'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const ProjectsItem = ({
  className,
  id,
  images,
  imgAlt,
  heading,
  text,
  numericData,
  button,
  itemClassName,
  isMobile,
  l10n: { translations },
}) => {
  const headingNumberSize = isMobile ? 'l' : 'm'

  return (
    <Grid as="div" className={cn(itemClassName, className)}>
      <PictureForAllResolutions
        images={images}
        fallback={images['desktop.all'].png}
        alt={imgAlt(translations)}
        className="image"
      />

      <Heading
        as="p"
        type="regular"
        size="m"
        dangerouslySetInnerHTML={{ __html: heading(translations) }}
        className="item-heading"
      />

      <Text
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: text(translations) }}
        className="text"
      />

      {numericData.map(({ numberData, textData }, index) => (
        <Fragment key={textData}>
          <Heading
            as="p"
            size={headingNumberSize}
            dangerouslySetInnerHTML={{ __html: numberData(translations) }}
            className={cn(`column-${index + 1}`, 'number-data')}
          />

          <Text
            type="strong"
            dangerouslySetInnerHTML={{ __html: textData(translations) }}
            className={cn(`column-${index + 1}`, 'text-data')}
            size="m"
          />
        </Fragment>
      ))}

      <ButtonLink
        href={button.href(translations)}
        className="button"
        kind="primary"
        dangerouslySetInnerHTML={{ __html: button.title(translations) }}
        data-testid={id && `Industry:link.${id}`}
      />
    </Grid>
  )
}

ProjectsItem.propTypes = {
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(ProjectsItem)`
      ${styles}
    `),
  ),
)

import React, { Fragment } from 'react'
import { string, object, array, func } from 'prop-types'
import translate from '../../../utils/translate-wrapper'
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
  t,
  className,
  images,
  imgAlt,
  heading,
  text,
  numericData,
  button,
  itemClassName,
  isMobile,
}) => {
  const headingNumberSize = isMobile ? 'l' : 'm'

  return (
    <Grid as="div" className={cn(itemClassName, className)}>
      <PictureForAllResolutions
        images={images}
        fallback={images['desktop.all'].png}
        alt={t(imgAlt)}
        className="image"
      />

      <Heading
        as="p"
        type="regular"
        size="m"
        dangerouslySetInnerHTML={{ __html: t(heading) }}
        className="item-heading"
      />

      <Text type="strong" size="m" dangerouslySetInnerHTML={{ __html: t(text) }} className="text" />

      {numericData.map(({ numberData, textData }, index) => (
        <Fragment key={textData}>
          <Heading
            as="p"
            size={headingNumberSize}
            dangerouslySetInnerHTML={{ __html: t(numberData) }}
            className={cn(`column-${index + 1}`, 'number-data')}
          />

          <Text
            type="strong"
            dangerouslySetInnerHTML={{ __html: t(textData) }}
            className={cn(`column-${index + 1}`, 'text-data')}
          />
        </Fragment>
      ))}
      
      <ButtonLink
        href={t(button.href)}
        className="button"
        kind="primary"
        dangerouslySetInnerHTML={{ __html: t(button.title) }}
      />

    </Grid>
  )
}

ProjectsItem.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default translate(
  DeviceConsumer(
    MsBrowserConsumer(styled(ProjectsItem)`
      ${styles}
    `),
  ),
)

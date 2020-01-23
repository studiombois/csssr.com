import React, { Fragment } from 'react'
import { string, object, array, func } from 'prop-types'
import translate from '../../../utils/translate-wrapper'
import styled from '@emotion/styled'
import styles from './ProjectsItem.styles'
import cn from 'classnames'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const ProjectsItem = ({
  t,
  className,
  images,
  imgAlt,
  heading,
  text,
  numericData,
  itemClassName,
}) => (
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

    <Text type="strong" dangerouslySetInnerHTML={{ __html: t(text) }} className="text" />

    {numericData.map(({ numberData, textData }, index) => (
      <Fragment key={textData}>
        <Heading
          as="p"
          size="m"
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
  </Grid>
)

ProjectsItem.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default translate()(
  MsBrowserConsumer(styled(ProjectsItem)`
    ${styles}
  `),
)

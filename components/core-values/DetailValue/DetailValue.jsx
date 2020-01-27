import React from 'react'
import { string, object, array, func } from 'prop-types'
import translate from '../../../utils/translate-wrapper'
import styled from '@emotion/styled'
import styles from './DetailValue.styles'
import cn from 'classnames'
import Grid from '../../ui-kit/core-design/Grid'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import Picture from '../../ui-kit/Picture'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const DetailValue = ({
  t,
  className,
  content: { images, imgAlt, title, subTitle, description },
}) => (
  <Grid as="div" className={className}>
    <Picture
      images={images}
      fallback={images['desktop.all'].png}
      alt={t(imgAlt)}
      className="image"
    />

    <Heading.H2
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: t(title) }}
      className="heading"
    />

    <SubHeading
      type="slab"
      dangerouslySetInnerHTML={{ __html: t(subTitle) }}
      className="sub-heading"
    />

    {description.map(({ icon, text }, index) => (
      <div key={text} className={cn('description', `column-${index + 1}`)}>
        {icon}

        <Text type="regular" dangerouslySetInnerHTML={{ __html: t(text) }} className="text" />
      </div>
    ))}
  </Grid>
)

DetailValue.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default translate()(
  MsBrowserConsumer(styled(DetailValue)`
    ${styles}
  `),
)

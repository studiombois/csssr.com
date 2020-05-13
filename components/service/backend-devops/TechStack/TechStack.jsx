import React from 'react'
import { func, object, string } from 'prop-types'
import translate from '../../../../utils/translate-wrapper'
import styled from '@emotion/styled'
import styles from './TechStack.styles'
import Grid from '../../../ui-kit/core-design/Grid'
import Text from '../../../ui-kit/core-design/Text'
import Heading from '../../../ui-kit/core-design/Heading'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'

const TechStack = ({
  t,
  className,
  id,
  content: { heading, description, mongoDb, java, experts, link, javaImages, mongoDbImages, imgAlt },
}) => {
  return (
    <Grid className={className} as="section" id={id}>
      <div className="title-block">
        <Heading
          as="h2"
          type="regular"
          size="l"
          dangerouslySetInnerHTML={{ __html: t(heading) }}
          className="heading"
        />
        <SubHeading
          as="p"
          type="slab"
          dangerouslySetInnerHTML={{ __html: t(description) }}
          className="text"
        />
      </div>
      <div className="java-block">
        <PictureForAllResolutions
          images={javaImages}
          fallback={javaImages['desktop.l'].png}
          alt={t(imgAlt)}
          className="java-image"
        />
        <Text
          type="strong"
          size="m"
          dangerouslySetInnerHTML={{ __html: t(java) }}
          className="java-text"
        />
      </div>
      <Text
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: t(experts) }}
        className="experts-text"
      />
      <Text
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: t(link) }}
        className="link-text"
      />
      <div className="mongodb-block">
        <PictureForAllResolutions
          images={mongoDbImages}
          fallback={mongoDbImages['desktop.l'].png}
          alt={t(imgAlt)}
          className="mongodb-image"
        />
        <Text
          type="strong"
          size="m"
          dangerouslySetInnerHTML={{ __html: t(mongoDb) }}
          className="mongodb-text"
        />
      </div>
    </Grid>
  )
}

TechStack.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
}

export default translate(
  DeviceConsumer(
    MsBrowserConsumer(styled(TechStack)`
      ${styles}
    `),
  ),
)

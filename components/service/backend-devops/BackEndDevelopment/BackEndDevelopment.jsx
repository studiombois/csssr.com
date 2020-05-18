import React from 'react'
import { func, object, string } from 'prop-types'
import translate from '../../../../utils/translate-wrapper'
import styled from '@emotion/styled'
import styles from './BackEndDevelopment.styles'
import Grid from '../../../ui-kit/core-design/Grid'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'
import List from '../../../ui-kit/core-design/List'
import ListItem from '../../../ui-kit/core-design/ListItem'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'

const BackEndDevelopment = ({
  t,
  className,
  id,
  content: {
    heading,
    description,
    images,
    imgAlt,
    whatWeDo: { do_title, do_description, list },
  },
}) => {
  return (
    <Grid className={className} as="section" id={id}>
      <Heading
        as="h2"
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: t(heading) }}
        className="heading"
      />
      <SubHeading
        as="p"
        type="slab"
        dangerouslySetInnerHTML={{ __html: t(description) }}
        className="text"
      />
      <PictureForAllResolutions
        images={images}
        fallback={images['desktop.l'].png}
        alt={t(imgAlt)}
        className="image"
      />
      <div className="left-block">
        <Heading
          as="h2"
          type="regular"
          size="l"
          dangerouslySetInnerHTML={{ __html: t(do_title) }}
          className="heading-do"
        />
        <Text
          size="m"
          type="strong"
          dangerouslySetInnerHTML={{ __html: t(do_description) }}
          className="text-do"
        />
      </div>
      <List className="list">
        {list.map((item, index) => (
          <ListItem className="list-item" key={index}>
            <Heading
              as="h3"
              type="regular"
              className="item-title"
              dangerouslySetInnerHTML={{ __html: t(item.title) }}
              size="m"
            />

            <Text
              size="m"
              type="regular"
              dangerouslySetInnerHTML={{ __html: t(item.description) }}
              className="item-text"
            />
          </ListItem>
        ))}
      </List>
    </Grid>
  )
}

BackEndDevelopment.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
}

export default translate(
  DeviceConsumer(
    MsBrowserConsumer(styled(BackEndDevelopment)`
      ${styles}
    `),
  ),
)

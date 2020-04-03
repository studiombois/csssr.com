import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './OurAdvantages.styles'
import translate from '../../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

import ourAdvantages from '../../../../data/service/outsourcing-front-end/ourAdvantages'

import Item from './Item'
import Heading from '../../../ui-kit/core-design/Heading'
import Grid from '../../../ui-kit/core-design/Grid'

const OurAdvantages = ({ className, t }) => (
  <Grid as="section" className={className}>
    <Heading
      className="title"
      as="h2"
      dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:ourAdvantages.title') }}
      type="slab"
      size="m"
    />

    {ourAdvantages.map((advantagesGroup, advantagesGroupIndex) => (
      <div key={advantagesGroupIndex} className="advantages-group">
        {advantagesGroup.map((advantageItem, advantageItemIndex) => (
          <Item
            key={advantageItemIndex}
            id={`${advantagesGroupIndex}.${advantageItemIndex}`}
            images={advantageItem.images}
            link={advantageItem.link}
          />
        ))}
      </div>
    ))}
  </Grid>
)

OurAdvantages.propTypes = {
  className: string,
  t: func,
}

export default translate(
  MsBrowserConsumer(styled(OurAdvantages)`
    ${styles}
  `),
)

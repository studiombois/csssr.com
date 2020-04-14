import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Benefits.styles'
import translate from '../../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

import Heading from '../../../ui-kit/core-design/Heading'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import Text from '../../../ui-kit/core-design/Text'
import Grid from '../../../ui-kit/core-design/Grid'

import whomItBenefits from '../../../../data/service/mvp/whomItBenefits'

const Benefits = ({ className, t }) => (
  <article className={className}>
    <Grid as="header">
      <SubHeading
        className="title"
        type="slab"
        as="h2"
        dangerouslySetInnerHTML={{ __html: t('mvp:benefits.title') }}
      />
    </Grid>

    <ul className="whom-it-benefits">
      {whomItBenefits.map(({ id }) => (
        <Grid as="li" className="beneficiary" key={id}>
          <Heading
            as="h3"
            className="title"
            dangerouslySetInnerHTML={{ __html: t(`mvp:benefits.${id}.title`) }}
            type="slab"
            size="m"
          />

          <Text
            className="description"
            as="p"
            size="m"
            dangerouslySetInnerHTML={{ __html: t(`mvp:benefits.${id}.description`) }}
          />

          <ul className="benefits">
            {[0, 1, 2].map((index) => (
              <Text
                key={index}
                className="benefit"
                as="li"
                size="m"
                dangerouslySetInnerHTML={{
                  __html: t(`mvp:benefits.${id}.benefits.${index}`),
                }}
              />
            ))}
          </ul>
        </Grid>
      ))}
    </ul>

    <Grid as="footer">
      <div className="footer-content">
        <SubHeading
          className="footer-paragraph"
          type="slab"
          as="p"
          dangerouslySetInnerHTML={{ __html: t('mvp:benefits.paragraph.0') }}
        />
        <SubHeading
          className="footer-paragraph"
          type="slab"
          as="p"
          dangerouslySetInnerHTML={{ __html: t('mvp:benefits.paragraph.1') }}
        />
      </div>
    </Grid>
  </article>
)

Benefits.propTypes = {
  className: string,
  t: func,
}

export default translate(
  MsBrowserConsumer(styled(Benefits)`
    ${styles}
  `),
)

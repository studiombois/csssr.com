import * as React from 'react'
import { bool, string } from 'prop-types'
import styled from '@emotion/styled'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styles from './Greeting.styles'

import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import ButtonLink from '../../ui-kit/core-design/ButtonLink'

import greetingImagesData from '../../../data/express/greeting'

import { L10nConsumer } from '../../../utils/l10nProvider'

const Greeting = ({ className, l10n: { translations }, testId }) => {
  return (
    <Grid as="article" className={className}>
      <div className="picture-container">
        <PictureSmart
          className="bicycle"
          requireImages={greetingImagesData.images}
          alt={translations.express.imgAlt.bicycle}
        />
      </div>

      <Heading
        as="h1"
        className="heading"
        type="slab"
        size="l"
        dangerouslySetInnerHTML={{ __html: translations.express.greeting.title }}
      />

      <Text
        className="subheading"
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.express.greeting.description }}
      />

      <ButtonLink
        className="button"
        kind="primary"
        href="#calculator"
        dangerouslySetInnerHTML={{ __html: translations.express.greeting.button }}
        data-testid={testId}
      />
    </Grid>
  )
}

Greeting.propTypes = {
  className: string,
  isMsBrowser: bool,
  isMobile: bool,
  testId: string.isRequired,
}

export default L10nConsumer(
  styled(Greeting)`
    ${styles}
  `,
)

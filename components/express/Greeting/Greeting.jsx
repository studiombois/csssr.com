import * as React from 'react'
import { bool, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Greeting.styles'

import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import ButtonLink from '../../ui-kit/core-design/ButtonLink'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'

import greetingImagesData from '../../../data/express/greeting'

import { L10nConsumer } from '../../../utils/l10nProvider'

const Greeting = ({ className, l10n: { translations } }) => {
  return (
    <Grid as="article" className={className}>
      <PictureForAllResolutions
        className="bicycle"
        images={greetingImagesData.images}
        fallback={greetingImagesData.images['desktop.l']}
        alt={translations.express.imgAlt.bicycle}
      />

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
      />
    </Grid>
  )
}

Greeting.propTypes = {
  className: string,
  isMsBrowser: bool,
  isMobile: bool,
}

export default L10nConsumer(
  styled(Greeting)`
    ${styles}
  `,
)

import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Benefits.styles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

import List from './List'
import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import Grid from '../../../ui-kit/core-design/Grid'

const Benefits = ({ className, l10n: { translations } }) => (
  <Grid as="article" className={className} data-testid="Outsourcing:block:benefits">
    <aside data-testid="Outsourcing:block:text">
      <div className="sticky-wrapper">
        <Heading
          className="title"
          as="h2"
          dangerouslySetInnerHTML={{ __html: translations.outsourcingFrontEnd.benefits.title }}
          type="slab"
          size="m"
        />

        <Text
          className="description"
          as="p"
          type="strong"
          size="m"
          dangerouslySetInnerHTML={{
            __html: translations.outsourcingFrontEnd.benefits.description,
          }}
        />
      </div>
    </aside>

    <List testId="Outsourcing:block:animation" />
  </Grid>
)

Benefits.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Benefits)`
    ${styles}
  `),
)

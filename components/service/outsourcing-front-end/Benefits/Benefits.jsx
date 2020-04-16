import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Benefits.styles'
import translate from '../../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

import List from './List'
import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import Grid from '../../../ui-kit/core-design/Grid'

const Benefits = ({ className, t }) => (
  <Grid as="article" className={className}>
    <aside>
      <div className="sticky-wrapper">
        <Heading
          className="title"
          as="h2"
          dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:benefits.title') }}
          type="slab"
          size="m"
        />

        <Text
          className="description"
          as="p"
          type="strong"
          size="m"
          dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:benefits.description') }}
        />
      </div>
    </aside>

    <List />
  </Grid>
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

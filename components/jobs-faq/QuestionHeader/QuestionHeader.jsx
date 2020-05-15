import * as React from 'react'
import styled from '@emotion/styled'
import styles from './QuestionHeader.styles'
import { bool, string } from 'prop-types'
import Heading from '../../ui-kit/core-design/Heading'
import Grid from '../../ui-kit/core-design/Grid'

import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const OriginQuestionHeader = ({ className, headingText }) => (
  <Grid className={className}>
    <Heading.H2 className="image_text" type="regular" size="m">
      {headingText}
    </Heading.H2>
  </Grid>
)

OriginQuestionHeader.propTypes = {
  className: string,
  headingText: string,
  isIe11: bool,
}

const QuestionHeader = MsBrowserConsumer(styled(OriginQuestionHeader)`
  ${styles.base}
  ${styles.ie11}
`)

export { QuestionHeader }
export default QuestionHeader

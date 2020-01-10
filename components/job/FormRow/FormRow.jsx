import React from 'react'
import styled from '@emotion/styled'
import styles from './FormRow.styles'
import Grid from '../../ui-kit/core-design/Grid'

const FormRow = ({ className, children, rightSideContent }) => (
  <Grid className={className}>
    <div className="cell">{children}</div>
    {rightSideContent}
  </Grid>
)

export default styled(FormRow)`
  ${styles}
`

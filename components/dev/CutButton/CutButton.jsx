import React from 'react'
import styled from '@emotion/styled'
import styles from './CutButton.styles'
import Grid from '../../ui-kit/core-design/Grid'
import FoldArrow from '../../../static/icons/foldArrow.svg'
import { string, bool, func } from 'prop-types'

const CutButton = ({ className, children, onClick }) => (
  <Grid className={className}>
    <div className="border-bottom" />
    <button onClick={onClick}>
      {children}
      <FoldArrow className="fold-arrow" />
    </button>
  </Grid>
)

CutButton.propTypes = {
  children: string,
  isCut: bool,
  onClick: func,
}

export default styled(CutButton)`
  ${styles}
`

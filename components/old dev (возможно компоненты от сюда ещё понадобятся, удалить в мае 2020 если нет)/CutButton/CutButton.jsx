import React from 'react'
import styled from '@emotion/styled'
import styles from './CutButton.styles'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import Grid from '../../ui-kit/core-design/Grid'
import { ReactComponent as FoldArrow } from '../../../static/icons/foldArrow.svg'
import { bool, func, string } from 'prop-types'

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

export default MsBrowserConsumer(styled(CutButton)`
  ${styles}
`)

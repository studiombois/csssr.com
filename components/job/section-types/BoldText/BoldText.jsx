import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './BoldText.styles'
import formatText from '../../../../utils/formatText'

const BoldText = ({ className, text }) => (
  <p
    className={cn('font_p24-strong', className)}
    dangerouslySetInnerHTML={{ __html: formatText(text) }}
  />
)

BoldText.propTypes = {
  text: string,
}

export default styled(BoldText)`
  ${styles}
`

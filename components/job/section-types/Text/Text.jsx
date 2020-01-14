import React, { Fragment } from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Text.styles'
import formatText from '../../../../utils/formatText'

const Text = ({ className, text }) => (
  <p
    className={cn('font_p16-regular', className)}
    dangerouslySetInnerHTML={{ __html: formatText(text) }}
  />
)

Text.propTypes = {
  text: string,
}

export default styled(Text)`
  ${styles}
`

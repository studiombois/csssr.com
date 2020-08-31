import * as React from 'react'
import { bool, func, string } from 'prop-types'
import Text from '../../../../ui-kit/core-design/Text'
import styled from '@emotion/styled'
import styles from './DropdownButton.styles'

const OriginDropdownButton = ({ isExpanded, onClick, className, testId }) => {
  return (
    <button className={className} onClick={onClick} type="button" data-testid={testId}>
      <Text type="perforator" size="s">
        {isExpanded ? 'Collapse' : 'Expand'}
      </Text>
    </button>
  )
}

OriginDropdownButton.propTypes = {
  className: string,
  isExpanded: bool,
  onClick: func,
  testId: string.isRequired,
}

const DropdownButton = styled(OriginDropdownButton)`
  ${styles.base}
`

export { DropdownButton }
export default DropdownButton

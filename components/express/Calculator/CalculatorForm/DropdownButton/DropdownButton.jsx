import * as React from 'react'
import { func, bool, string } from 'prop-types'
import Text from '../../../../ui-kit/core-design/Text'
import styled from '@emotion/styled'
import styles from './DropdownButton.styles'

const OriginDropdownButton = ({ isExpanded, onClick, className }) => {
  return (
    <button className={className} onClick={onClick} type="button">
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
}

const DropdownButton = styled(OriginDropdownButton)`
  ${styles.base}
`

export { DropdownButton }
export default DropdownButton
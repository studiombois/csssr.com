import * as React from 'react'
import { number, oneOfType, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Label.styles'
import Text from '../../../../ui-kit/core-design/Text'

const OriginLabel = ({ className, text, price, id, testId }) => {
  return (
    <span className={className} htmlFor={id}>
      <Text type="regular" size="m" className="label">
        {text}
      </Text>
      {price && (
        <Text type="regular" size="m" className="label label_price" data-testid={testId}>
          {typeof price === 'number' ? `$${price}` : price}
        </Text>
      )}
    </span>
  )
}

const Label = styled(OriginLabel)`
  ${styles.base}
`

OriginLabel.propTypes = {
  id: string,
  price: oneOfType([string, number]),
  text: string,
  className: string,
  testId: string,
}

export { Label }
export default Label

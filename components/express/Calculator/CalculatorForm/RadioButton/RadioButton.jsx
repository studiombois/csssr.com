import React from 'react'
import { bool, func, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './RadioButton.styles'
import Label from '../Label'

const OriginRadioButton = ({
  labelText,
  labelPrice,
  className,
  name,
  type,
  value,
  checked,
  onChange,
  testIdRadioButton,
  testIdLabel,
}) => {
  return (
    <div className={className}>
      <label>
        <input
          className="input-original"
          name={name}
          type={type}
          id={value}
          value={value}
          checked={checked}
          onChange={onChange}
          data-testid={testIdRadioButton}
        />

        <div className="radio-label">
          <div className="radio-custom">
            <div className="radio-inner" />
          </div>

          <Label text={labelText} price={labelPrice} testId={testIdLabel} />
        </div>
      </label>
    </div>
  )
}

OriginRadioButton.propTypes = {
  type: string,
  value: string,
  checked: bool,
  name: string,
  labelText: string,
  labelPrice: string,
  onChange: func,
  className: string,
  testIdRadioButton: string,
  testIdLabel: string,
}

const RadioButton = styled(OriginRadioButton)`
  ${styles.base}
`

export { RadioButton }
export default RadioButton

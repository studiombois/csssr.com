import * as React from 'react'
import styled from '@emotion/styled'
import cn from 'classnames'
import { string, oneOfType, func, number, object } from 'prop-types'
import styles from './InputControl.styles'
import TextFieldRegular from '../../../../ui-kit/core-design/TextFieldRegular'

const OriginInputControl = ({
  className,
  label,
  value,
  onChange,
  maxLength,
  testidInput,
  testidBtnIncrement,
  testidBtnDecrement,
}) => {
  const handleOnClick = event => {
    const updatedValue = `${Number(value) + Number(event.target.dataset.step)}`

    onChange(updatedValue)
  }

  return (
    <div className={className}>
      <TextFieldRegular
        value={value}
        label={label}
        onChange={onChange}
        maxLength={maxLength}
        data-testid={testidInput}
      />
      <button
        className={cn({
          button: true,
          decrement: true,
          disabled: value < 2,
        })}
        data-step="-1"
        type="button"
        onClick={handleOnClick}
        data-testid={testidBtnDecrement}
      />
      <button
        className="button increment"
        data-step="1"
        type="button"
        onClick={handleOnClick}
        data-testid={testidBtnIncrement}
      />
    </div>
  )
}

const InputControl = styled(OriginInputControl)`
  ${styles.base}
`
OriginInputControl.propTypes = {
  className: string,
  value: oneOfType([number, string]),
  label: string,
  maxLength: string,
  onChange: func,
  input: object,
  testidInput: string,
  testidBtnIncrement: string,
  testidBtnDecrement: string,
}

export { InputControl }
export default InputControl

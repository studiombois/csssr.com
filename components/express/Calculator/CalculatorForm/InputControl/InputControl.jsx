import * as React from 'react'
import styled from '@emotion/styled'
import cn from 'classnames'
import { func, number, oneOfType, string } from 'prop-types'
import styles from './InputControl.styles'
import TextFieldRegular from '../../../../ui-kit/core-design/TextFieldRegular'

const OriginInputControl = ({
  className,
  label,
  value,
  onChange,
  maxLength,
  testIdInput,
  testIdBtnIncrement,
  testIdBtnDecrement,
}) => {
  const handleOnClick = (event) => {
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
        data-testid={testIdInput}
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
        data-testid={testIdBtnDecrement}
      />
      <button
        className="button increment"
        data-step="1"
        type="button"
        onClick={handleOnClick}
        data-testid={testIdBtnIncrement}
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
  testIdInput: string.isRequired,
  testIdBtnIncrement: string.isRequired,
  testIdBtnDecrement: string.isRequired,
}

export { InputControl }
export default InputControl

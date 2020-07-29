import React from 'react'
import { string, bool } from 'prop-types'
import cn from 'classnames'

import styled from '@emotion/styled'
import styles from './TextField.styles'

const TextField = ({
  className,
  id,
  label,
  testid,
  tabIndex,
  autoFocus,
  disabled,
  input: { name, type, value, onBlur, onChange, onFocus },
  meta: { error, invalid, submitError, submitFailed },
  required,
}) => {
  const showError = invalid && submitFailed
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className={className}>
      <input
        className={cn('input', { _error: showError })}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        tabIndex={tabIndex}
        autoFocus={autoFocus}
        type={type}
        disabled={disabled}
        data-testid={testid}
        required={required}
        aria-required={required}
      />

      {label && (
        <label
          className={cn('label', { _active: value })}
          htmlFor={id}
          dangerouslySetInnerHTML={{ __html: (showError && (error || submitError)) || label }}
        />
      )}
    </div>
  )
}

TextField.propTypes = {
  className: string,
  label: string,
  testid: string,
  name: string,
  id: string,
  isError: bool,
  required: bool,
}

export default styled(TextField)`
  ${styles}
`

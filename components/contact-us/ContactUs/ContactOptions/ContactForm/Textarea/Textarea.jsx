import React, { useState, useRef } from 'react'
import { string, bool } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Textarea.styles'

const Textarea = ({
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
  const textareaRef = useRef(null)
  const [rows, setRows] = useState(1)
  const showError = invalid && submitFailed
  const handleChange = (event) => {
    onChange(event.target.value)

    const paddingsSum = 8
    const lineHeight = 34
    setRows(Math.ceil((textareaRef.current.scrollHeight - paddingsSum) / lineHeight))
  }

  return (
    <div className={className}>
      <textarea
        className={cn('textarea', { _error: showError })}
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
        rows={rows}
        required={required}
        aria-required={required}
        ref={textareaRef}
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

Textarea.propTypes = {
  className: string,
  label: string,
  testid: string,
  name: string,
  id: string,
  isError: bool,
  required: bool,
}

export default styled(Textarea)`
  ${styles}
`

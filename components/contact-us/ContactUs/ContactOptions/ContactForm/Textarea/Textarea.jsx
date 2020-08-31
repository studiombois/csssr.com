import React, { useState, useRef } from 'react'
import { string, bool } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Textarea.styles'

const Textarea = ({
  className,
  id,
  label,
  testId,
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

    /**
     * Calculate rows to autoresize textarea
     *
     * number or rows = content box height / row height
     * context box height = textarea height - paddings
     * row height = textarea font line height
     */
    const textareaStyles = window.getComputedStyle(textareaRef.current)
    const paddingsSum =
      parseFloat(textareaStyles.getPropertyValue('padding-top')) +
      parseFloat(textareaStyles.getPropertyValue('padding-bottom'))
    const lineHeight = parseFloat(textareaStyles.getPropertyValue('line-height'))

    setRows(Math.floor((textareaRef.current.scrollHeight - paddingsSum) / lineHeight))
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
        data-testid={testId}
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
  testId: string.isRequired,
  name: string,
  id: string,
  isError: bool,
  required: bool,
}

export default styled(Textarea)`
  ${styles}
`

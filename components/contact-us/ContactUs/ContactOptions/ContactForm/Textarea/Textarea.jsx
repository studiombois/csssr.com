import React, { useState } from 'react'
import { string, bool } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Textarea.styles'

const Textarea = ({ id, className, name, testid, isError, required, label }) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    const { value } = event.target
    setValue(value)
  }

  return (
    <div className={className}>
      <textarea
        className={cn('textarea', { _error: isError })}
        name={name}
        id={id}
        data-testid={testid}
        required={required}
        onChange={handleChange}
        value={value}
      />

      {label && (
        <label
          className={cn('label', { _active: value })}
          htmlFor={id}
          dangerouslySetInnerHTML={{ __html: label }}
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

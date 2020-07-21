import React, { useState } from 'react'
import { string, bool } from 'prop-types'
import cn from 'classnames'

import styled from '@emotion/styled'
import styles from './TextField.styles'

const TextField = ({ className, id, isError, name, label, testid, required }) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    const { value } = event.target
    setValue(value)
  }

  return (
    <div className={className}>
      <input
        id={id}
        className={cn('input', { _error: isError })}
        name={name}
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

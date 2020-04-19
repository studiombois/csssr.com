import React from 'react'
import { any, bool, func, object, string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Checkbox.styles'

const Checkbox = (props) => {
  const {
    className,
    children,
    input,
    meta,
    isToggleInputCheckbox,
    toggleBrowserField,
    toggleOtherBrowsersDropdown,
    testId,
    ...rest
  } = props
  const hasError = meta.touched && !!meta.error

  if (isToggleInputCheckbox) {
    toggleBrowserField(input.checked, toggleOtherBrowsersDropdown)
  }

  return (
    <div className={className}>
      <label>
        <input
          type="checkbox"
          className="input-original"
          data-testid={testId}
          {...input}
          {...rest}
        />
        <div className="checkbox-label">
          <div className={cn('checkbox-custom', { 'checkbox-custom_error': hasError })}>
            <div className="checkbox-inner" />
          </div>
          {children}
        </div>
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  toggleOtherBrowsersDropdown: func,
  toggleBrowserField: func,
  isToggleInputCheckbox: bool,
  meta: object,
  input: object,
  className: string,
  testId: string,
  children: any,
}

export default styled(Checkbox)`
  ${styles.base}
`

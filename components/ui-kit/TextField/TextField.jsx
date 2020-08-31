import React, { PureComponent } from 'react'
import { bool, oneOf, string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './TextField.styles'

class TextField extends PureComponent {
  static propTypes = {
    id: string,
    kind: oneOf(['regular', 'light']),
    className: string,
    placeholder: string,
    testid: string,
    errorTestid: string,
    label: string,
    autoFocus: bool,
    disabled: bool,
    required: bool,
    testId: string.isRequired,
  }

  static defaultProps = {
    kind: 'light',
  }

  handleChange = (event) => {
    const { value } = event.target
    this.props.input.onChange(value)
  }

  render() {
    const {
      id,
      placeholder,
      label,
      autoFocus,
      disabled,
      kind,
      className,
      maxLength,
      testId,
      tabIndex,
      errorTestid,
      input: { name, type, value, onBlur, onFocus },
      meta: { error, invalid, submitError, submitFailed },
      required,
    } = this.props

    const showError = invalid && submitFailed

    return (
      <div
        className={cn(className, {
          'font_inputted-text-error': showError,
          'font_input-basic-label': !showError,
          [`textfield_${kind}`]: kind,
          textfield_filled: value,
        })}
      >
        <input
          id={id}
          className={showError ? 'font_inputted-text-error' : 'font_inputted-text-regular'}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={this.handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          tabIndex={tabIndex}
          autoFocus={autoFocus}
          type={type}
          disabled={disabled}
          maxLength={maxLength}
          data-testid={testId}
          required={required}
          aria-required={required}
        />
        {showError && (
          <span className="font_input-small-error-label error" data-testid={errorTestid}>
            {error || submitError}
          </span>
        )}
        {label && (
          <label
            className={showError ? 'font_input-small-error-label' : 'font_input-small-label'}
            dangerouslySetInnerHTML={{ __html: label }}
            htmlFor={id}
          />
        )}
      </div>
    )
  }
}

export default styled(TextField)`
  ${styles}
`

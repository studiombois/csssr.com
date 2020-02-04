import React, { PureComponent } from 'react'
import { string, oneOf, bool } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './TextareaField.styles'

class TextareaField extends PureComponent {
  static propTypes = {
    tag: string,
    id: string,
    kind: oneOf(['regular', 'light']),
    className: string,
    placeholder: string,
    label: string,
    autoFocus: bool,
    type: string,
    disabled: bool,
  }

  static defaultProps = {
    kind: 'light',
  }

  handleChange = event => {
    const { value } = event.target
    this.props.input.onChange(value)
  }

  render() {
    const {
      id,
      placeholder,
      label,
      autoFocus,
      type,
      kind,
      disabled,
      className,
      maxLength,
      testid,
      tabIndex,
      input: { name, value, onBlur, onFocus },
      meta: { error, invalid, submitFailed },
    } = this.props

    const showError = invalid && submitFailed

    return (
      <div
        className={cn('font_inputted-text-regular', className, {
          error: showError,
          [`textarea_${kind}`]: kind,
          textarea_filled: value,
        })}
      >
        <textarea
          id={id}
          className="font_inputted-text-regular"
          name={name}
          placeholder={placeholder}
          onChange={this.handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          autoFocus={autoFocus}
          type={type}
          disabled={disabled}
          value={value}
          maxLength={maxLength}
          aria-label={label}
          data-testid={testid}
          tabIndex={tabIndex}
        />
        {showError && <span className="font_input-small-error-label error">{error}</span>}
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

export default styled(TextareaField)`
  ${styles}
`

import React, { PureComponent } from 'react'
import { string, oneOf, bool } from 'prop-types'
import cn from 'classnames'
import TextareaFieldLightStyles from './styles/TextareaFieldLight'
import TextareaFieldRegularStyles from './styles/TextareaFieldRegular'

export default class TextareaField extends PureComponent {
  static propTypes = {
    tag: string,
    id: string,
    theme: oneOf(['regular', 'light']),
    className: string,
    placeholder: string,
    label: string,
    autoFocus: bool,
    type: string,
    disabled: bool,
  }

  static defaultProps = {
    theme: 'light',
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
      theme,
      disabled,
      className,
      maxLength,
      testid,
      input: {
        name,
        value,
        onBlur,
        onFocus,
      },
      meta: {
        error,
        invalid,
        submitFailed,
      },
    } = this.props

    const styles = theme === 'light' ? TextareaFieldLightStyles : TextareaFieldRegularStyles
    const showError = invalid && submitFailed

    return (
      <div className={cn('font_inputted-text-regular', {
        error: showError,
        [`textarea_${theme}`]: theme,
        textarea_filled: value,
        [className]: !!className,
      })}>
        <textarea
          id={id}
          className={cn('font_inputted-text-regular', { [className]: !!className })}
          name={name}
          placeholder={placeholder}
          onChange={this.handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          tabIndex={disabled ? -1 : 0}
          autoFocus={autoFocus}
          type={type}
          disabled={disabled}
          value={value}
          maxLength={maxLength}
          aria-label={label}
          data-testid={testid}
        />
        {showError && <span className='font_input-small-error-label error'>{error}</span>}
        {label && <label
          className={showError ? 'font_input-small-error-label' : 'font_input-small-label'}
          dangerouslySetInnerHTML={{ __html: label }}
          htmlFor={id}
        />}<style jsx>{styles}</style>
      </div>
    )
  }
}

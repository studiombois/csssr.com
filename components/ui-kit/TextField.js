import React, { PureComponent } from 'react'
import cn from 'classnames'
import { string, oneOf, bool } from 'prop-types'
import TextFieldLightStyles from './styles/TextFieldLight'
import TextFieldRegularStyles from './styles/TextFieldRegular'

export default class TextField extends PureComponent {
  static propTypes = {
    id: string,
    theme: oneOf(['regular', 'light']),
    state: oneOf(['error', null]),
    className: string,
    placeholder: string,
    label: string,
    autoFocus: bool,
    type: string,
    disabled: bool,
  }

  static defaultProps = {
    state: 'error',
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
      disabled,
      theme,
      // state,
      className,
      maxLength,
      input: {
        name,
        value,
        onBlur,
        onFocus,
      },
      meta,
    } = this.props

    const styles = theme === 'light' ? TextFieldLightStyles : TextFieldRegularStyles

    return (
      <div
        className={cn({
          'font_inputted-text-error': (value && meta.error && meta.touched),
          'font_input-basic-label': !(value && meta.error && meta.touched),
          [`textfield_${theme}`]: theme,
          textfield_filled: value,
          [className]: !!className,
        })}
      >
        <input
          id={id}
          className={value && meta.error && meta.touched ? 'font_inputted-text-error' : 'font_inputted-text-regular'}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={this.handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          tabIndex={disabled ? -1 : 0}
          autoFocus={autoFocus}
          type={type}
          disabled={disabled}
          maxLength={maxLength}
        />
        {label && <label
          className={value && meta.error && meta.touched ? 'font_input-small-error-label' : 'font_input-small-label'}
          dangerouslySetInnerHTML={{ __html: label }}
          htmlFor={id}
        />}<style jsx>{styles}</style>
      </div>
    )
  }
}

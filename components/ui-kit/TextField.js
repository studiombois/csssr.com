import React, { PureComponent } from 'react'
import cn from 'classnames'
import { string, oneOf, bool } from 'prop-types'

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
      input: {
        name,
        value,
        onBlur,
        onFocus,
      },
      meta,
    } = this.props

    return (
      <div
        className={cn({
          'font_inputted-text-error': (value && meta.error && meta.touched),
          'font_input-basic-label': !(value && meta.error && meta.touched),
          [`textfield_${theme}`]: theme,
          textfield_filled: value,
          [`${className}`]: !!className,
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
        />
        {label && <label
          className={value && meta.error && meta.touched ? 'font_input-small-error-label' : 'font_input-small-label'}
          htmlFor={id}
        >
          {label}
        </label>}<style jsx>{`
          div {
            position: relative;
            height: 4.375rem;
          }

          div.font_inputted-text-error input:not(:focus) {
            border-color: #d0021b;
          }

          div.font_inputted-text-error label:not(:focus) {
            color: #d0021b;
          }

          div.font_inputted-text-error.textfield_regular input:not(:focus) {
            border-width: 2px;
          }

          div.font_inputted-text-error input:focus {
            color: #4a4a4a;
            border-color: #e1e1e1;
          }

          input {
            padding-bottom: 0.5rem;
            padding-left: 1rem;
            padding-right: 1rem;
            display: block;
            width: 100%;
            height: 2.5rem;
            text-align: center;
            border: none;
            border-bottom: solid 0.0625rem #e1e1e1;
            caret-color: #4a4a4a;
          }

          input::placeholder {
            font-weight: 100;
            color: #c0c0c0;
          }

          div.textfield_regular input {
            padding-top: 1rem;
            padding-bottom: 0;
            height: 100%;
            text-align: left;
            border: solid 0.0625rem #e1e1e1;
          }

          label {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
          }

          div.textfield_light label::before {
            content: '';
            position absolute;
            top: 0.0625rem;
            left: 0;
            height: 0.0625rem;
            width: 0;
            background-color: #0076ff;
            transition: width 0.1s ease-out;
          }

          div.textfield_regular label {
            position: absolute;
            margin: auto;
            top: 1.875rem;
            left: 1rem;
            height: 1rem;
            line-height: 1rem;
            font-size: 0.875rem;
            color: #9b9b9b;
            pointer-events: none;
            user-select: none;
          }

          div.font_inputted-text-error input:focus + label,
          input:focus + label {
            color: #0076ff;
          }

          div.textfield_light input:focus + label::before {
            width: 100%;
          }

          div.textfield_filled.textfield_regular label,
          div.textfield_regular input:focus + label {
            top: 0.375rem;
            font-size: 0.625rem;
          }

          @media (min-width: 368px) and (max-width: 1279px) {
            input {
              padding-bottom: 0.1875rem;
            }
          }
        `}</style>
      </div>
    )
  }
}

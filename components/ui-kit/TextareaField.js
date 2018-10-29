import React, { PureComponent } from 'react'
import { string, oneOf, bool } from 'prop-types'
import cn from 'classnames'

export default class TextareaField extends PureComponent {
  static propTypes = {
    tag: string,
    id: string,
    theme: oneOf(['regular', 'light']),
    state: oneOf(['error', null]),
    placeholder: string,
    label: string,
    autoFocus: bool,
    type: string,
    disabled: bool,
  }

  static defaultProps = {
    state: null,
    theme: 'light',
  }

  handleChange = event => {
    const { value } = event.target
    this.props.input.onChange(value)
  }

  render() {
    const {
      id,
      state,
      placeholder,
      label,
      autoFocus,
      type,
      theme,
      disabled,
      input: {
        name,
        value,
        onBlur,
        onFocus,
      },
      meta,
    } = this.props

    return (
      <div className={cn('font_inputted-text-regular', {
        error: state === 'error',
        [`textfield_${theme}`]: theme,
        textfield_filled: value,
      })}>
        <textarea
          id={id}
          className='font_inputted-text-regular'
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
        />
        {label && <label
          className={value && meta.error && meta.touched ? 'font_input-small-error-label' : 'font_input-small-label'}
          htmlFor={id}
        >
          {label}
        </label>}<style jsx>{`
          div.textfield_regular {
            position: relative;
          }
          div.error textarea {
            color: #d0021b;
            border-color: #d0021b;
          }

          textarea {
            padding-top: 0.5rem;
            padding-left: 1rem;
            padding-right: 1rem;
            padding-bottom: 1.5rem;
            display: block;
            width: 100%;
            height: 10rem;
            text-align: center;
            border: none;
            border: solid 0.0625rem #e1e1e1;
            caret-color: #4a4a4a;
          }

          textarea::placeholder {
            font-weight: 100;
            color: #c0c0c0;
          }

          textarea:focus {
            border-color: #0076ff;
          }

          div.textfield_regular textarea:focus + label {
            color: #0076ff;
          }

          div.textfield_light label {
            border: 0;
            clip: rect(0 0 0 0);
            height: 0.0625rem;
            margin: -0.0625rem;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 0.0625rem;
          }

          div.textfield_regular textarea {
            padding-top: 1.5rem;
            text-align: left;
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

          div.textfield_filled.textfield_regular label,
          div.textfield_regular textarea:focus + label {
            top: 0.375rem;
            font-size: 0.625rem;
          }

          @media (min-width: 368px) and (max-width: 1279px) {
            textarea {
              padding-top: 0.875rem;
            }
          }
        `}</style>
      </div>
    )
  }
}

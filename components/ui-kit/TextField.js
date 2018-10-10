import React, { PureComponent } from 'react'
import { string, oneOf, bool } from 'prop-types'

export default class TextField extends PureComponent {
  static propTypes = {
    id: string,
    state: oneOf(['error', null]),
    placeholder: string,
    label: string,
    autoFocus: bool,
    type: string,
    disabled: bool,
  }

  static defaultProps = {
    state: null,
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
      input: {
        name,
        value,
        onBlur,
        onFocus,
      },
      meta,
    } = this.props

    return (
      <div className={value && meta.error && meta.touched ? 'font_inputted-text-error' : 'font_input-basic-label'}>
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
            height: 4.375rem;
          }

          div.font_inputted-text-error input:not(:focus) {
            border-color: #d0021b;
          }

          div.font_inputted-text-error label:not(:focus) {
            color: #d0021b;
          }

          div.font_inputted-text-error input:focus {
            color: #4a4a4a;
            border-color: #e1e1e1;
          }

          input {
            padding-bottom: 0.5rem;
            display: block;
            width: 100%;
            height: 2.5rem;
            text-align: center;
            border: none;
            border-bottom: solid 1px #e1e1e1;
            caret-color: #4a4a4a;
          }

          input::placeholder {
            font-weight: 100;
            color: #c0c0c0;
          }

          label {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
          }

          label::before {
            content: '';
            position absolute;
            top: 1px;
            left: 0;
            height: 1px;
            width: 0;
            background-color: #0076ff;
            transition: width 0.1s ease-out;
          }

          div.font_inputted-text-error input:focus + label,
          input:focus + label {
            color: #0076ff;
          }

          input:focus + label::before {
            width: 100%;
          }

          @media (min-width: 1024px) and (max-width: 1279px) {
            input {
              padding-bottom: 0.1875rem;
            }
          }
        `}</style>
      </div>
    )
  }
}

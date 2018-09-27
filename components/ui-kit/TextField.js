import React, { PureComponent } from 'react'
import { string, oneOf, bool } from 'prop-types'
import cn from 'classnames'

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
      <div className={cn('field', {
        error: meta.error && meta.touched,
      })}>
        <input
          className='input'
          id={id}
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
          htmlFor={id}
        >
          {label}
        </label>}<style jsx>{`
          .field.error .input {
            color: #d0021b;
            border-color: #d0021b;
          }

          .field.error label {
            color: #d0021b;
          }

          .input {
            padding-bottom: 0.5rem;
            display: block;
            width: 100%;
            height: 2.5rem;
            text-align: center;
            font-family: Roboto;
            font-size: 1.5rem;
            font-weight: 300;
            border: none;
            border-bottom: solid 1px #9b9b9b;
          }

          .input::placeholder {
            font-weight: 100;
            color: #c0c0c0;
          }

          label {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Roboto;
            text-transform: uppercase;
            height: 1.5rem;
            font-size: 0.625rem;
            letter-spacing: 0.08125rem;
            color: #4a4a4a;
          }

          label::before {
            position absolute;
            top: -1px;
            left: 0;
            height: 1px;
            width: 0;
            background-color: #0076ff;
            transition: width 0.3s ease-out;
            content: '';
          }

          .input:focus + label::before {
            width: 100%;
          }
        `}</style>
      </div>
    )
  }
}

import React, { PureComponent } from 'react'
import { string, oneOf, bool } from 'prop-types'
import cn from 'classnames'

export default class TextField extends PureComponent {
  static propTypes = {
    tag: string,
    id: string,
    state: oneOf(['error', null]),
    placeholder: string,
    label: string,
    labelHidden: bool,
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
      state,
      placeholder,
      label,
      labelHidden,
      autoFocus,
      type,
      disabled,
      input: {
        name,
        value,
        onBlur,
        onFocus,
      },
    } = this.props

    return (
      <div className={cn('field', {
        error: state === 'error',
      })}>
        <textarea
          className='input'
          id={id}
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
          className={cn({
            visuallyHidden: labelHidden,
          })}
          htmlFor={id}
        >
          {label}
        </label>}
        <style jsx>{`
          .field.error .input {
            color: #d0021b;
            border-color: #d0021b;
          }

          .field.error .label {
            color: #d0021b;
          }

          .input {
            padding-top: 0.5rem;
            padding-left: 1rem;
            padding-right: 1rem;
            padding-bottom: 1.5rem;
            display: block;
            width: 100%;
            height: 10rem;
            line-height: 2rem;
            text-align: center;
            font-family: Roboto;
            font-size: 1.5rem;
            font-weight: 300;
            border: none;
            border: solid 1px #9b9b9b;
          }

          .input::placeholder {
            font-weight: 100;
            color: #c0c0c0;
          }

          label.visuallyHidden {
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
          }
        `}</style>
      </div>
    )
  }
}

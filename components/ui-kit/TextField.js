import React, { PureComponent } from 'react'
import { string, oneOf, bool, func } from 'prop-types'
import cn from 'classnames'

export default class TextField extends PureComponent {
  static propTypes = {
    tag: string,
    id: string,
    state: oneOf(['error', null]),
    name: string,
    value: string,
    placeholder: string,
    label: string,
    autoFocus: bool,
    type: string,
    onBlur: func,
    onFocus: func,
  }

  static defaultProps = {
    tag: 'input',
    state: null,
  }

  handleChange = event => {
    const { value } = event.target
    const { name } = this.props

    this.props.onChange({ value, name })
  }

  render() {
    const {
      tag,
      id,
      state,
      name,
      value,
      placeholder,
      label,
      autoFocus,
      type,
      onBlur,
      onFocus,
    } = this.props

    return (
      <div className={cn('field', {
        field_state_error: state === 'error',
        field_type_textarea: tag === 'textarea',
      })}>
        {tag === 'input' && <input
          className='input'
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={this.handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          tabIndex={state === 'disabled' ? -1 : 0}
          autoFocus={autoFocus}
          type={type}
          disabled={state === 'disabled'}
        />}
        {tag === 'textarea' && <textarea
          className={cn('input', 'input_type_textarea')}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={this.handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          tabIndex={state === 'disabled' ? -1 : 0}
          autoFocus={autoFocus}
          type={type}
          disabled={state === 'disabled'}
        >{value}</textarea>}
        {label && <label
          className='label'
          htmlFor={id}
        >
          {label}
        </label>}
        <style jsx>{`
          section {
            margin-right: auto;
            margin-left: auto;
            padding-left:  8rem;
            padding-right: 8rem;
            height: 8rem;
            width: 1920px;
            align-items: center;
            background-color: rgba(255, 255, 255, 0.9);
          }

          .field_state_error .input {
            color: #d0021b;
            border-color: #d0021b;
          }

          .field_state_error .label {
            color: #d0021b;
          }

          .input {
            display: block;
            width: 100%;
            height: 5rem;
            text-align: center;
            font-family: Roboto;
            font-size: 3rem;
            font-weight: 300;
            border: none;
            border-bottom: solid 1px #9b9b9b;
          }

          .input_type_textarea {
            padding-top: 1rem;
            padding-left: 2rem;
            padding-right: 2rem;
            padding-bottom: 3rem;
            height: 20rem;
            line-height: 1.33;
            border: solid 1px #9b9b9b;
          }

          .input::placeholder {
            font-weight: 100;
            color: #c0c0c0;
          }

          .label {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Roboto;
            text-transform: uppercase;
            height: 3rem;
            font-size: 1.25rem;
            letter-spacing: 1.3px;
            color: #4a4a4a;
          }

          .label::before {
            position absolute;
            top: -1px;
            left: 0;
            height: 1px;
            width: 0;
            background-color: #0076ff;
            transition: width 0.2s ease-out;
            content: '';
          }

          .input:focus + .label::before {
            width: 100%;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            section {
              padding-left:  2rem;
              padding-right: 2rem;
              width: 1360px
            }
          }
    
          @media (max-width: 1359px) {
            section {
              padding-left:  3rem;
              padding-right: 3rem;
              width: 1280px
            }
          }
        `}</style>
      </div>
    )
  }
}

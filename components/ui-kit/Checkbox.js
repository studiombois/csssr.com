import React, { PureComponent } from 'react'
import cn from 'classnames'
import {
  string,
  number,
  bool,
  func,
  node,
  oneOfType,
} from 'prop-types'


export default class Checkbox extends PureComponent {
  static propTypes = {
    id: oneOfType([string, number]),
    name: string,
    value: oneOfType([
      string,
      number,
    ]),
    tabIndex: number,
    className: string,
    checked: bool,
    disabled: bool,
    crossed: bool,
    children: node,
    onChange: func,
    showValidationAsWarning: bool,
  }

  static defaultProps = {
    tabIndex: 0,
  }

  handleChange = data => {
    this.props.input.onChange(data)
  }


  render() {
    const {
      id,
      input,
      disabled,
      className,
      children,
      showValidationAsWarning,
      testid,
      meta: {
        error,
        invalid,
        submitFailed,
      },
    } = this.props

    const showError = invalid && submitFailed

    return (
      <span
        className={cn({
          checkbox: true,
          [className]: !!className,
        })}
      >
        <input
          id={id}
          name={input.name}
          value={input.value}
          checked={input.checked}
          disabled={disabled}
          type='checkbox'
          onChange={this.handleChange}
          data-testid={testid}
        />
        <label
          className={cn('input-label', {
            'font_p16-regular': true,
            'input-label_warning': showValidationAsWarning && showError,
          })}
          htmlFor={id}
        >
          <span className='border' />
          {children && <span className='content'>{children}</span>}
        </label>
        {!showValidationAsWarning && showError && <span className='font_input-small-error-label error'>{error}</span>}
        <style jsx>{`
          .checkbox {
            position: relative;
          }

          span.checkbox:hover label::before {
            border-color: rgba(155, 155, 155, 1);
          }

          span.checkbox:hover input:checked + label::before {
            background-color: #0254d8;
            border-color: #0254d8;
          }

          label {
            position: relative;
            padding-left: 1.5rem;
            display: flex;
            align-items: center;
            min-height: 1.5rem;
            user-select: none;
            cursor: pointer;
          }

          label::before {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            box-sizing: border-box;
            width: 1.5rem;
            height: 1.5rem;
            border: 1px solid rgba(155, 155, 155, 0.5);
            transition: border-color 0.2s ease-out, background-color 0.2s ease-out;
            content: '';
          }

          label.input-label_warning::before {
            border-color: #ffc045;
          }

          label::after {
            position: absolute;
            top: 0.25rem;
            left: 0.5rem;
            display: none;
            width: 0.3125rem;
            height: 0.625rem;
            border-right: 0.1875rem solid #fff;
            border-bottom: 0.1875rem solid #fff;
            content: '';
            transform: rotate(45deg);
          }

          label span.content {
            padding-left: 0.5rem;
            font-size: inherit;
            line-height: inherit;
          }

          span.border {
            position: absolute;
            display: none;
            top: 1px;
            left: 1px;
            display: none;
            box-sizing: border-box;
            width: calc(1.5rem - 2px);
            height: calc(1.5rem - 2px);
            border: 1px solid #fff;
          }

          input {
            position: absolute;
            top: 0;
            margin: 0;
            width: 1.5rem;
            height: 1.5rem;
            background: none;
            border: 0;
            appearance: none;
          }

          input::-ms-check {
            border: none;
            opacity:0;
          }

          input:checked + label::before {
            background-color: #0076ff;
            border-color: #0076ff;
          }

          input:checked + label::after {
            display: block;
          }

          input:checked + label span.border {
            display: block;
          }

          @media (max-width: 1279px) {
            .font_p16-regular {
              font-size: 1rem;
              line-height: 1.5rem;
            }
          }

          @media (max-width: 767px) {
            label {
              padding-bottom: 0;
              font-size: 0.875rem;
              line-height: 1.5rem;
            }
          }
        `}</style>
      </span>
    )
  }
}

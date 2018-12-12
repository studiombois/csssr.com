import React, { Fragment, PureComponent } from 'react'
import cn from 'classnames'
import { string, bool, func } from 'prop-types'

export default class FileField extends PureComponent {
  static propTypes = {
    id: string,
    fileAccept: string,
    className: string,
    label: string,
    onFileFieldChange: func,
    autoFocus: bool,
    disabled: bool,
  }

  state = {
    value: null,
  }

  handleChange = event => {
    const { value, files } = event.target

    this.props.input.onChange(value)
    this.props.onFileFieldChange('files', files)
    this.setState({
      value,
    })
  }

  render() {
    const {
      id,
      fileAccept,
      label,
      autoFocus,
      disabled,
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
      <Fragment>
        <input
          id={id}
          accept={`.${fileAccept}`}
          name={name}
          value={value}
          onChange={this.handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          tabIndex={disabled ? -1 : 0}
          autoFocus={autoFocus}
          type='file'
          disabled={disabled}
        />
        <div
          className={cn({
            'font_inputted-text-error': (value && meta.error && meta.touched),
            'font_inputted-text-regular': !(value && meta.error && meta.touched),
            textfield_filled: value,
            [className]: !!className,
          })}
        >
          <span className='value'>
            {value && this.state.value}
          </span>

          {label && <label
            className={value && meta.error && meta.touched ? 'font_input-small-error-label' : 'font_input-small-label'}
            dangerouslySetInnerHTML={{ __html: label }}
            htmlFor={id}
          />}
        </div>
        <label
          htmlFor={id}
          className={cn('font_button-label button', {
            button_state_disabled: disabled,
            [className]: !!className,
          })}
        >
          Обзор
        </label>
        {(meta.error && meta.touched) && <span className='font_input-small-error-label error'>{meta.error}</span>}
        <style jsx>{`
          div {
            position: relative;
            padding-top: 1rem;
            padding-left: 1rem;
            padding-right: 1rem;
            display: flex;
            width: 100%;
            height: 4rem;
            align-items: center;
            border: solid 0.0625rem #e1e1e1;
          }

          input:not(:focus) + div.font_inputted-text-error {
            border-color: #d0021b;
            border-width: 0.125rem;
          }

          input:not(:focus) + div.font_inputted-text-error label {
            color: #d0021b;
          }

          input:focus + div.font_inputted-text-error  {
            color: #4a4a4a;
            border-color: #e1e1e1;
          }

          input:focus + div {
            outline-offset: -2px;
            outline: auto 2px Highlight;
            outline: auto 5px -webkit-focus-ring-color;
          }

          input {
            position: fixed;
            width: 1px;
            height: 1px;
            margin: -1px;
            border: 0;
            padding: 0;
            clip: rect(0 0 0 0);
            overflow: hidden;
          }

          span.value {
            width: 100%;
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          span.error {
            margin-top: 0.625rem;
            grid-column: 2 / span 6;
            color: #ff0000;
          }

          label:not(.button) {
            position: absolute;
            top: 1.4375rem;
            left: 1rem;
            width: calc(100% - 1rem);
            height: 1rem;
            line-height: 1rem;
            font-size: 0.875rem;
            font-weight: normal;
            color: #9b9b9b;
            pointer-events: none;
            user-select: none;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          input:focus + div.font_inputted-text-error label,
          input:focus + div label {
            color: #0076ff;
            font-weight: normal;
          }

          div.textfield_filled label {
            top: 0.4375rem;
            font-size: 0.625rem;
          }

          .button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 3rem;
            background: none;
            color: #4a4a4a;
            border: solid 0.0625rem #000000;
            transition: color 0.3s ease-out;
            cursor: pointer;
            user-select: none;
          }

          .button:hover,
          input:focus ~ .button {
            color: #000;
          }

          .button_state_disabled {
            pointer-events: none;
            opacity: 0.3;
          }

         @media (max-width: 1279px) {
            div {
              padding-bottom: 0.1875rem;
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

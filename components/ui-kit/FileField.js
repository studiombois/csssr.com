import React, { Fragment, PureComponent } from 'react'
import cn from 'classnames'
import { string, bool, func } from 'prop-types'
import FileFieldStyles from './styles/FileField'

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

    console.log('handleChange', files)
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
          <span>
            {this.state.value}
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
        <style jsx>
          {FileFieldStyles}
        </style>
      </Fragment>
    )
  }
}

import React, { PureComponent } from 'react'
import TextField from '../ui-kit/TextField'

export default class FormTextField extends PureComponent {
  handleChange = ({ value }) => {
    this.props.input.onChange(value)
  }

  render() {
    const {
      input: {
        name,
        value,
        onBlur,
        onFocus,
      },
      ...restProps
    } = this.props

    return (
      <TextField
        {...restProps}
        name={name}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={this.handleChange}
      />
    )
  }
}

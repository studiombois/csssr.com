import React, { PureComponent } from 'react'
import { bool, func, node, number, oneOfType, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Radio.styles'

class Radio extends PureComponent {
  static propTypes = {
    id: oneOfType([string, number]),
    name: string,
    value: oneOfType([string, number]),
    className: string,
    tabIndex: number,
    checked: bool,
    disabled: bool,
    crossed: bool,
    children: node,
    onChange: func,
  }

  static defaultProps = {
    tabIndex: 0,
  }

  handleChange = (data) => {
    this.props.input.onChange(data)
  }

  render() {
    const { id, input, className, disabled, children } = this.props

    return (
      <span className={className}>
        <input
          id={id}
          name={input.name}
          value={input.value}
          checked={input.checked}
          disabled={disabled}
          type="radio"
          onChange={this.handleChange}
        />
        <label className="font_p16-regular" htmlFor={id}>
          {children}
        </label>
      </span>
    )
  }
}

export default styled(Radio)`
  ${styles}
`

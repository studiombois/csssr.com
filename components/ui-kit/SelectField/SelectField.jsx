import React, { PureComponent } from 'react'
import cn from 'classnames'
import { bool, func, number, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './SelectField.styles'

class SelectField extends PureComponent {
  static propTypes = {
    id: string,
    name: string,
    value: string,
    tabIndex: number,
    className: string,
    disabled: bool,
    onChange: func,
    testId: string.isRequired,
  }

  static defaultProps = {
    tabIndex: 0,
  }

  handleChange = (data) => {
    this.props.input.onChange(data)
  }

  render() {
    const { id, input, disabled, className, placeholder, options, testId } = this.props

    return (
      <div
        className={cn(className, {
          select_filled: input.value,
        })}
      >
        <select
          id={id}
          name={input.name}
          className="font_input-small-label"
          value={input.value}
          disabled={disabled}
          onChange={this.handleChange}
          data-testid={testId}
        >
          <option hidden>{placeholder}</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.checkboxText}
            </option>
          ))}
        </select>

        <label
          className={'font_input-small-label'}
          dangerouslySetInnerHTML={{ __html: placeholder }}
          htmlFor={id}
        />
      </div>
    )
  }
}

export default styled(SelectField)`
  ${styles}
`

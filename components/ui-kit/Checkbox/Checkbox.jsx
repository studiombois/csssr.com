import React, { PureComponent } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Checkbox.styles'
import { bool, func, node, number, oneOfType, string } from 'prop-types'

class Checkbox extends PureComponent {
  static propTypes = {
    id: oneOfType([string, number]),
    name: string,
    tabIndex: string,
    className: string,
    checked: bool,
    disabled: bool,
    crossed: bool,
    children: node,
    onChange: func,
    showValidationAsWarning: bool,
    required: bool,
  }

  static defaultProps = {
    tabIndex: '0',
  }

  handleChange = (data) => {
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
      tabIndex,
      meta: { error, invalid, submitFailed },
      required,
    } = this.props

    const showError = invalid && submitFailed

    return (
      <span className={cn('checkbox', className)}>
        <input
          id={id}
          name={input.name}
          checked={input.checked}
          disabled={disabled}
          type="checkbox"
          onChange={this.handleChange}
          data-testid={testid}
          tabIndex={tabIndex}
          required={required}
          aria-required={required}
        />
        <label
          className={cn('input-label', {
            'font_p16-regular': true,
            'input-label_warning': showValidationAsWarning && showError,
          })}
          htmlFor={id}
        >
          <span className="border" />
          {children && <span className="content">{children}</span>}
        </label>
        {!showValidationAsWarning && showError && (
          <span className="font_input-small-error-label error">{error}</span>
        )}
      </span>
    )
  }
}

export default styled(Checkbox)`
  ${styles}
`

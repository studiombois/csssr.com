import React, { PureComponent } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Checkbox.styles'
import { string, number, bool, func, node, oneOfType } from 'prop-types'

class Checkbox extends PureComponent {
  static propTypes = {
    id: oneOfType([string, number]),
    name: string,
    value: oneOfType([string, number]),
    tabIndex: string,
    className: string,
    checked: bool,
    disabled: bool,
    crossed: bool,
    children: node,
    onChange: func,
    showValidationAsWarning: bool,
  }

  static defaultProps = {
    tabIndex: '0',
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
      tabIndex,
      meta: { error, invalid, submitFailed },
    } = this.props

    const showError = invalid && submitFailed

    return (
      <span className={cn('checkbox', className)}>
        <input
          id={id}
          name={input.name}
          value={input.value}
          checked={input.checked}
          disabled={disabled}
          type="checkbox"
          onChange={this.handleChange}
          data-testid={testid}
          tabIndex={tabIndex}
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

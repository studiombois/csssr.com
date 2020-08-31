import React, { PureComponent } from 'react'
import cn from 'classnames'
import { bool, func, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './FileField.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'

class FileField extends PureComponent {
  static propTypes = {
    id: string,
    fileAccept: string,
    className: string,
    testid: string.isRequired,
    buttunTestid: string,
    labelTestid: string,
    label: string,
    onFileFieldChange: func,
    autoFocus: bool,
    disabled: bool,
  }

  state = {
    value: null,
  }

  handleChange = (event) => {
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
      testid,
      buttunTestid,
      labelTestid,
      input: { name, value, onBlur, onFocus },
      meta: { error, invalid, submitFailed },
      l10n: { translations },
    } = this.props

    const showError = invalid && submitFailed

    return (
      <div className={className}>
        <input
          data-testid={testid}
          id={id}
          accept={`.${fileAccept}`}
          name={name}
          value={value}
          onChange={this.handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          tabIndex={disabled ? -1 : 0}
          autoFocus={autoFocus}
          type="file"
          disabled={disabled}
          aria-label={label}
        />
        <div
          data-testid={labelTestid}
          className={cn({
            'font_inputted-text-error': showError,
            'font_inputted-text-regular': !showError,
            textfield_filled: value,
          })}
        >
          <span className="value">{value && this.state.value}</span>

          {label && (
            <label
              className={showError ? 'font_input-small-error-label' : 'font_input-small-label'}
              dangerouslySetInnerHTML={{ __html: label }}
            />
          )}
        </div>
        <label
          htmlFor={id}
          data-testid={buttunTestid}
          className={cn('font_button-label', 'button', {
            button_state_disabled: disabled,
          })}
        >
          {translations.job.chooseFile}
        </label>
        {showError && <span className="font_input-small-error-label error">{error}</span>}
      </div>
    )
  }
}

export default styled(L10nConsumer(FileField))`
  ${styles}
`

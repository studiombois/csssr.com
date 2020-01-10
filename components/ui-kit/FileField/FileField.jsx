import React, { Fragment, PureComponent } from 'react'
import cn from 'classnames'
import { string, bool, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './FileField.styles'
import withI18next from '../../../utils/withI18next'

class FileField extends PureComponent {
  static propTypes = {
    id: string,
    fileAccept: string,
    className: string,
    label: string,
    onFileFieldChange: func,
    autoFocus: bool,
    disabled: bool,
    t: func,
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
      t,
      id,
      fileAccept,
      label,
      autoFocus,
      disabled,
      className,
      input: { name, value, onBlur, onFocus },
      meta: { error, invalid, submitFailed },
    } = this.props

    const showError = invalid && submitFailed

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
          type="file"
          disabled={disabled}
          aria-label={label}
        />
        <div
          className={cn(className, {
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
          className={cn('font_button-label button', {
            button_state_disabled: disabled,
          })}
        >
          {t('job:chooseFile')}
        </label>
        {showError && <span className="font_input-small-error-label error">{error}</span>}
      </Fragment>
    )
  }
}

export default styled(withI18next('job')(FileField))`
  ${styles}
`

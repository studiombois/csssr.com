import React, { PureComponent } from 'react'
import { func, oneOf, string } from 'prop-types'

import Text from '../../../../ui-kit/core-design/Text'

import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './FormStateMessage.styles'

import { L10nConsumer } from '../../../../../utils/l10nProvider'

class FormStateMessage extends PureComponent {
  static propTypes = {
    status: oneOf(['pending', 'submitting', 'success', 'fail']),
    className: string,
    onTryAgain: func,
    feedbackEmail: string,
  }

  getTextData = () => {
    const {
      status,
      l10n: { translations },
    } = this.props
    if (status === 'success') {
      return {
        intro: translations.common.form.message.success.intro,
        message: translations.common.form.message.success.body,
      }
    } else if (status === 'fail') {
      return {
        intro: 'An error occurred',
        message: (
          <span className="message">
            <span>{translations.common.form.message.fail.body.textStart}</span>

            <button type="button" className="font_link-list_16" onClick={this.props.onTryAgain}>
              {translations.common.form.message.fail.body.textForButton}
            </button>

            <span>{translations.common.form.message.fail.body.textBetweenButtonAndLink}</span>

            <a className="font_link-list_16" href={`mailto:${this.props.feedbackEmail}`}>
              {this.props.feedbackEmail}
            </a>
          </span>
        ),
      }
    }

    return null
  }

  render() {
    const { status, className, shouldShowImages } = this.props
    const textData = this.getTextData()
    const messageShown = status === 'success' || status === 'fail'

    return (
      <div className={className}>
        <div
          className={cn('body', {
            body_state_visible: messageShown,
            body_short: !shouldShowImages,
          })}
        >
          {textData && (
            <Text type="regular" size="m" className="text">
              {textData.intro}
              <br />
              {textData.message}
            </Text>
          )}
        </div>
      </div>
    )
  }
}

export default L10nConsumer(styled(FormStateMessage)`
  ${styles.base}
`)

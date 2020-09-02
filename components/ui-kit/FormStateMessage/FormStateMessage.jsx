import React, { Fragment, PureComponent } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles, { pictureStyles, textDataStyles } from './FormStateMessage.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { func, oneOf, string, bool } from 'prop-types'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

const statusImages = {
  fail: require.context('../../../public/images/forms/fail?csssr-images'),
  success: require.context('../../../public/images/forms/success?csssr-images'),
}

class FormStateMessage extends PureComponent {
  static propTypes = {
    status: oneOf(['pending', 'submitting', 'success', 'fail']),
    shouldShowPicture: bool,
    errorText: string,
    onTryAgain: func,
    feedbackEmail: string,
    testId: string.isRequired,
  }

  getTextData = () => {
    const {
      status,
      errorText,
      l10n: { translations },
    } = this.props
    if (status === 'success') {
      return {
        intro: translations.common.form.message.success.intro,
        message: translations.common.form.message.success.body,
      }
    } else if (status === 'fail') {
      return {
        intro: errorText,
        message: (
          <span css={textDataStyles} data-testid="Jobs:text.error">
            <span data-testid="Jobs:text.errorStart">
              {translations.common.form.message.fail.body.textStart}
            </span>

            <button
              type="button"
              className="font_link-list_16"
              onClick={this.props.onTryAgain}
              data-testid="contactUs:button:error.tryAgain"
            >
              {translations.common.form.message.fail.body.textForButton}
            </button>

            <span data-testid="Jobs:text.errorBody">
              {translations.common.form.message.fail.body.textBetweenButtonAndLink}
            </span>

            <a
              className="font_link-list_16"
              href={`mailto:${this.props.feedbackEmail}`}
              data-testid="contactUs:link:feedbackEmail"
            >
              {this.props.feedbackEmail}
            </a>
          </span>
        ),
      }
    }

    return null
  }

  render() {
    const { className, status, testId, shouldShowPicture = true, successPictureTestid } = this.props
    const textData = this.getTextData()
    const messageShown = status === 'success' || status === 'fail'

    return (
      <Fragment>
        <div
          className={cn('body', className, {
            body_state_visible: messageShown,
          })}
        >
          {textData && (
            <div className="text" data-testid={testId}>
              <span className="font_p16-regular">
                {textData.intro}
                <br />
                {textData.message}
              </span>
            </div>
          )}
          {messageShown && shouldShowPicture && (
            <div className="picture">
              <PictureSmart
                css={pictureStyles}
                requireImages={statusImages[status]}
                customResolutions={['360']}
                testId={successPictureTestid}
              />
            </div>
          )}
        </div>
      </Fragment>
    )
  }
}

export default L10nConsumer(
  MsBrowserConsumer(styled(FormStateMessage)`
    ${styles}
  `),
)

import React, { Fragment, PureComponent } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles, { pictureStyles, textDataStyles } from './FormStateMessage.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { func, oneOf, string } from 'prop-types'
import PictureForAllResolutions from '../../PictureForAllResolutions'

class FormStateMessage extends PureComponent {
  static propTypes = {
    status: oneOf(['pending', 'submitting', 'success', 'fail']),
    errorText: string,
    onTryAgain: func,
    feedbackEmail: string,
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
          <span css={textDataStyles}>
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
    const { className, status, testid, successPictureTestid } = this.props
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
            <div className="text" data-testid={testid}>
              <span className="font_p16-regular">
                {textData.intro}
                <br />
                {textData.message}
              </span>
            </div>
          )}
          {messageShown && (
            <div className="picture">
              <PictureForAllResolutions
                css={pictureStyles}
                image={{ namespace: 'forms', key: `${status}`, alt: '' }}
                customResolutions={['360']}
                testid={successPictureTestid}
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

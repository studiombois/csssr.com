import React, { Fragment, PureComponent } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles, { pictureStyles, textDataStyles } from './FormStateMessage.styles'
import translate from '../../../utils/translate-wrapper'
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
    const { status, t, errorText } = this.props
    if (status === 'success') {
      return {
        intro: t('common:form.message.success.intro'),
        message: t('common:form.message.success.body'),
      }
    } else if (status === 'fail') {
      return {
        intro: t(errorText),
        message: (
          <span css={textDataStyles}>
            <span>{t('common:form.message.fail.body.textStart')}</span>

            <button type="button" className="font_link-list_16" onClick={this.props.onTryAgain}>
              {t('common:form.message.fail.body.textForButton')}
            </button>

            <span>{t('common:form.message.fail.body.textBetweenButtonAndLink')}</span>

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

export default translate(
  MsBrowserConsumer(styled(FormStateMessage)`
    ${styles}
  `),
)

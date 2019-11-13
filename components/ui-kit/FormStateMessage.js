import React, { PureComponent, Fragment } from 'react'
import css from 'styled-jsx/css'
import cn from 'classnames'
import translate from '../../utils/translate-wrapper'
import { oneOf, string, func } from 'prop-types'
import PictureForAllResolutions from '../PictureForAllResolutions'
import Picture from '../Picture'

const picture = css.resolve`
  picture {
    position: absolute;
    bottom: 10.75rem;
    left: 50%;
    z-index: -1;
    width: 304px;
    height: 224px;
    transform: translateX(-50%);
  }

  img {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: -6.5rem;
    }
  }

  @media (max-width: 767px) {
    picture {
      top: 0;
      bottom: initial;
      width: 13.5rem;
      height: 10.5rem;
    }
  }
`

const hideMessagePicture = css.resolve`
  picture {
    position: absolute;
    bottom: 10.75rem;
    left: 50%;
    z-index: -1;
    width: 304px;
    height: 224px;
    transform: translateX(-50%);
  }

  img {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: -6.5rem;
    }
  }

  @media (max-width: 767px) {
    picture {
      bottom: 12rem;
      width: 13.5rem;
      height: 10.5rem;
    }
  }
`

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
        message: <span>
          <span>{t('common:form.message.fail.body.textStart')}</span>

          <button
            type='button'
            className='font_link-list_16'
            onClick={this.props.onTryAgain}
          >
            {t('common:form.message.fail.body.textForButton')}
          </button>

          <span>{t('common:form.message.fail.body.textBetweenButtonAndLink')}</span>

          <a className='font_link-list_16' href={`mailto:${this.props.feedbackEmail}`}>
            {this.props.feedbackEmail}
          </a>

          <style jsx>{`
            button {
              border: none;
              background: none;
              text-decoration: none;
              cursor: pointer;
            }

            a {
              text-decoration: none;
            }

            @media (max-width: 1279px) {
              a {
                  font-size: 1rem;
                  line-height: 1.5rem;
              }
            }
          `}</style>
        </span>,
      }
    }

    return null
  }

  render() {
    const { status, testid, successPictureTestid } = this.props
    const textData = this.getTextData()
    const messageShown = status === 'success' || status === 'fail'

    return (
      <Fragment>
        {
          !messageShown && (
            <Picture
              className={hideMessagePicture.className}
              image={{ namespace: 'dev', key: 'letter', alt: '' }}
              customResolutions={['360']}
            />
          )
        }
        <div
          className={cn('body', {
            body_state_visible: messageShown,
          })}
        >
          { textData && <div className='text' data-testid={testid}>
            <span className='font_p16-regular'>
              {textData.intro}
              <br />
              {textData.message}
            </span>
          </div> }
          { (messageShown) && <div className='picture'>
            <PictureForAllResolutions
              className={picture.className}
              image={{ namespace: 'forms', key: `${status}`, alt: '' }}
              customResolutions={['360']}
              testid={successPictureTestid}
            />
          </div> }<style jsx>{`
            .body {
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              height: 31.5rem;
              transform: scale(0);
              transition: transform 0.3s ease-out;
            }

            .body_state_visible {
              transform: scale(1);
            }

            .text {
              position: relative;
              margin-top: 1.4125rem;
              text-align: center;
            }

            .picture {
              position: relative;
              margin-top: 3.5rem;
              flex-grow: 1;
            }

            @media (max-width: 767px) {
              .body {
                height: 28rem;
              }

              .text {
                margin-top: 1.175rem;
              }

              .picture {
                margin-top: 1.5rem;
              }
            }
          `}</style>
          {picture.styles}
          {hideMessagePicture.styles}
        </div>
      </Fragment>
    )
  }
}

export default translate()(FormStateMessage)


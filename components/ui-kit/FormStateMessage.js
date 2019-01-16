import React, { PureComponent, Fragment } from 'react'
import css from 'styled-jsx/css'
import cn from 'classnames'
import { translate } from 'react-i18next'
import { oneOf, string, func } from 'prop-types'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    position: absolute;
    bottom: 10.75rem;
    left: 50%;
    z-index: -1;
    width: 340px;
    height: 220px;
    transform: translateX(-50%);
  }

  img {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: -6.5rem;
    }

    @media (max-width: 1023px) {
      picture {
        width: 21.25rem;
        height: 13.75rem;
      }
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

class FormStateMessage extends PureComponent {
  static propTypes = {
    status: oneOf(['pending', 'submitting', 'success', 'fail']),
    errorText: string,
    onTryAgain: func,
    feedbackEmail: string,
  }

  getTextData = () => {
    const { status } = this.props
    if (status === 'success') {
      return {
        intro: 'Успех!',
        message: 'Совсем скоро мы с вами свяжемся.',
      }
    } else if (status === 'fail') {
      return {
        intro: this.props.errorText,
        message: <span>
          <span>Попробуйте </span>
          <button type='button' className='font_link-list_16' onClick={this.props.onTryAgain}>еще раз</button>
          <span> или отправьте вопрос на </span>
          <a className='font_link-list_16' href={`mailto:${this.props.feedbackEmail}`}>{this.props.feedbackEmail}</a><style jsx>{`
            button {
              border: none;
              background: none;
              text-decoration: none;
              cursor: pointer;
            }

            a {
              text-decoration: none;
            }

          `}</style>
        </span>,
      }
    }

    return null
  }

  render() {
    const { status } = this.props
    const textData = this.getTextData()
    const messageShown = status === 'success' || status === 'fail'

    return (
      <Fragment>
        <div
          className={cn('body', {
            body_state_visible: messageShown,
          })}
        >
          { textData && <div className='text'>
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
            />
          </div> }<style jsx>{`
            .body {
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              height: 32rem;
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
        </div>
      </Fragment>
    )
  }
}

export default translate()(FormStateMessage)


import React, { PureComponent, Fragment } from 'react'
import css from 'styled-jsx/css'
import cn from 'classnames'
import { translate } from 'react-i18next'
import { oneOf, bool } from 'prop-types'
import Picture from '../Picture'

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
      bottom: 3.75rem;
      width: 6.5rem;
      height: 4.25rem;
    }
  }
`

class FormStateMessage extends PureComponent {

  state = {
    innerStatus: 'success',
  }

  static propTypes = {
    status: oneOf(['success', 'fail']),
    isVisible: bool,
  }

  static defaultProps = {
    status: 'success',
    isVisible: false,
  }

  componentWillReceiveProps({ status }) {
    if (status && status !== this.state.innerStatus) {
      this.setState({
        innerStatus: status,
      })
    }
  }

  getTextData = () => {
    const { innerStatus } = this.state
    switch (innerStatus) {
    case 'success':
      return {
        intro: 'Успех!',
        message: 'Совсем скоро мы с вами свяжемся.',
      }
    case 'fail':
      return {
        intro: 'Что-то пошло не так.',
        message: <span>
          <span>Попробуйте </span>
          <button type='button' className='font_link-list_16' onClick={this.props.onReset}>еще раз</button>
          <span> или отправьте вопрос на </span>
          <a className='font_link-list_16' href='mailto:sales@csssr.io'>sales@csssr.io</a><style jsx>{`
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

    default:
      return {}
    }
  }

  render() {
    const { status, t } = this.props
    const textData = this.getTextData()

    return (
      <Fragment>
        <div
          className={cn('body', {
            body_state_visible: status && status !== 'submitting',
          })}
        >
          <div className='text'>
            <span className='font_p16-regular'>
              {textData.intro}
              <br />
              {textData.message}
            </span>
          </div>
          <div className='picture'>
            <Picture
              className={picture.className}
              image={{ namespace: 'dev', key: 'letter', alt: t('dev:imgAlt.letter') }}
            />
          </div><style jsx>{`
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
            text-align: center;
          }

          .picture {
            flex-grow: 1;
          }
        `}</style>
        </div>
      </Fragment>
    )
  }
}

export default translate()(FormStateMessage)


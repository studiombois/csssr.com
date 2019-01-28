import React, { Fragment, PureComponent } from 'react'
import { number, func } from 'prop-types'
import translate from '../../utils/translate-wrapper'
import CrossIcon from '../../static/icons/cross_white.svg'
import ClickOutside from '../ui-kit/ClickOutside'
import ButtonLink from '../ui-kit/ButtonLink'
import coursesMock from '../../data/school/courses-mock'

const clickOutsideStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  height: '100%',
  overflow: 'auto',
}

class ModalCourse extends PureComponent {
  static propTypes = {
    modalActiveId: number,
    onCloseModal: func,
  }

  static defaultProps = {
    modalActiveId: -1,
    onCloseModal: () => {},
  }

  renderPoint = (item, index) => {
    return (
      <Fragment key={index}>
        <li className='font_p16-regular' dangerouslySetInnerHTML={{ __html: item }} />
        <style jsx>{`
          li:not(:first-child) {
            margin-top: 1rem;
          }

          @media (max-width: 1279px) {
            li:not(:first-child) {
              margin-top: 0.3125rem;
            }

            li:before {
              top: 0.25rem !important;
            }
          }
        `}</style>
      </Fragment>
    )
  }

  renderModalContent = ({ title, studyItems, studyItemsTitle, needKnow, needKnowTitle }) => {
    const { t, onCloseModal } = this.props
    return (
      <Fragment>
        <section className='wrapper'>
          <h2 className='font_h2-regular title'>{title}</h2>

          <div className='columnsWrapper'>
            <div className='columnStudy'>
              <h3 className='font_h3-regular'>{studyItemsTitle}</h3>

              <ul className='have-square-bullets'>
                {studyItems && studyItems.map(this.renderPoint)}
              </ul>
            </div>

            <div className='columnNeedKnow'>
              <h3 className='font_h3-regular'>{needKnowTitle}</h3>

              <ul className='have-square-bullets'>
                {needKnow && needKnow.map(this.renderPoint)}
              </ul>
            </div>
          </div>

          <div className='buttonWrapper'>
            <div className='button_register'>
              <ButtonLink onClick={onCloseModal} href={'#sign'}>
                {t('school:course.register')}
              </ButtonLink>
            </div>
          </div>
        </section>
        <style jsx>{`
          h3 {
            margin-top: 2.8125rem;
          }

          ul {
            margin-top: 1rem;
          }

          .wrapper {
            padding-bottom: 2.5rem;
            display: flex;
            flex-direction: column;
            min-height: 100%;
          }

          .title {
            width: 100%;
            text-align: center;
            height: 7.9375rem;
            background-color: #d8d8d8;
            line-height: 8.875rem;
            vertical-align: middle;
          }

          .columnsWrapper {
            width: 100%;
            height: 100%;
            padding-bottom: 2.5rem;
          }

          .columnStudy, .columnNeedKnow {
            display: inline-block;
            width: 50%;
            vertical-align: top;
            padding-left: 6.5rem;
          }

          .columnNeedKnow {
            padding-left: 0.5rem;
            padding-right: 5rem;
          }

          .buttonWrapper {
            margin-top: auto;
            text-align: center;
          }

          .button_register {
            display: inline-block;
            width: 19.5rem;
          }

          @media (max-width: 1279px) {
            h3 {
              margin-top: 2.9375rem;
              margin-bottom: 1rem;
            }

            ul {
              margin-top: 1.5rem;
            }

            .title {
              font-size: 1.5rem;
            }

            .columnStudy {
              padding-left: 5rem;
            }
          }

          @media (max-width: 767px) {
            .wrapper {
              padding-bottom: 4rem;
            }

            .title {
              height: 7.5rem;
              line-height: 8rem;
            }

            .columnsWrapper {
              width: 100%;
              height: 100%;
              padding-bottom: 0;
            }

            .columnStudy, .columnNeedKnow {
              display: block;
              width: 100%;
              vertical-align: top;
              padding: 0 1rem;
            }

            .columnNeedKnow h3 {
              margin-top: 2.5rem;
            }

            .buttonWrapper {
              margin-top: 3.5rem;
            }
          }
        `}</style>
      </Fragment>
    )
  }

  renderModal = modal => {
    const { onCloseModal } = this.props
    return (
      <Fragment>
        <div className='modalWrapper'>
          <button type='button' aria-label='Close modal' onClick={this.handleCloseModal}>
            <CrossIcon width='100%' height='100%' />
          </button>
          <div className='modalContent'>
            <ClickOutside
              onOutsideClick={onCloseModal}
              style={clickOutsideStyles}
            >
              {this.renderModalContent(modal)}
            </ClickOutside>
          </div>
        </div>
        <style jsx>{`
          .modalWrapper {
            position: fixed;
            overflow: hidden;
            background: rgba(0, 0, 0, 0.3);
            z-index: 10000;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          }

          .modalContent {
            position: relative;
            background: #FFF;
            margin: 0 auto;
            width: 1024px;
            height: 100%;
          }

          button {
            position: absolute;
            color: white;
            z-index: 1;
            top: 1.25rem;
            right: 3rem;
            height: 2.5rem;
            width: 2.5rem;
            border: none;
            background: none;
            cursor: pointer;
          }

          @media (max-width: 1279px) {
            .modalContent {
              width: 49rem;
            }

            button {
              top: 2.5rem;
              right: 3.25rem;
            }
          }

          @media (max-width: 767px) {
            .modalContent {
              width: 22.5rem;s
            }

            button {
              top: 1rem;
              right: 1rem;
              width: 1.5rem;
              height: 1.5rem;
              color: #4a4a4a;
            }
          }
        `}</style>
      </Fragment>
    )
  }

  render() {
    const activeModal = coursesMock.items[this.props.modalActiveId]

    return activeModal && this.renderModal(activeModal.modal)
  }
}

export default translate()(ModalCourse)

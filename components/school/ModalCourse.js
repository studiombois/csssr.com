import React, { Fragment, PureComponent } from 'react'
import { number, func } from 'prop-types'
import { translate } from 'react-i18next'
import CrossIcon from '../../static/icons/cross_white.svg'
import ClickOutside from '../ui-kit/ClickOutside'
import ButtonLink from '../ui-kit/ButtonLink'
import coursesMock from '../../data/school/courses-mock'

const crossIcon = <CrossIcon width='40px' height='40px'/>
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
    handleCloseModal: func,
  }
  static defaultProps = {
    modalActiveId: -1,
    handleCloseModal: () => {},
  }
  renderPoint = (item, index) => {
    return (
      <Fragment key={index}>
        <li className='font_p16-regular'>{item}</li>
        <style jsx>{`
          li {
            margin-bottom: 1.5rem;
          }
          @media (max-width: 767px) {
            li {
              margin-bottom: 0.5rem;
            }
          }
        `}</style>
      </Fragment>
    )
  }

  renderModalContent = ({ title, study_items, study_items_title, need_know, need_know_title }) => {
    const { t, handleCloseModal } = this.props
    return (
      <Fragment>
        <section className='wrapper'>
          <h2 id='manifest' className='font_h2-regular title'>{title}</h2>
          <div className='columnsWrapper'>
            <div className='columnStudy'>
              <h3 id='manifest' className='font_h3-regular'>{study_items_title}</h3>
              {study_items && study_items.map(this.renderPoint)}
            </div>
            <div className='columnNeedKnow'>
              <h3 id='manifest' className='font_h3-regular'>{need_know_title}</h3>
              {need_know && need_know.map(this.renderPoint)}
            </div>
            <div className='buttonWrapper'>
              <div
                className='button_register'
                onClick={handleCloseModal}
              >
                <ButtonLink
                  href={'#sign'}
                >
                  {t('school:course.register')}
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
          .wrapper {
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
            padding-bottom: 10rem;
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
          h3 {
            margin-top: 3rem;
            margin-bottom: 1rem;
          }
          .buttonWrapper {
            text-align: center;
          }
          .button_register {
            display: inline-block;
            margin-top: 3.6rem;
            width: 19.5rem;
          }
          @media (max-width: 767px) {
            .columnsWrapper {
              width: 100%;
              height: 100%;
              padding-bottom: 10rem;
            }
            .columnStudy, .columnNeedKnow {
              display: block;
              width: 100%;
              vertical-align: top;
              padding-left: 1rem;
            }
          }
        `}</style>
      </Fragment>
    )
  }

  renderModal = modal => {
    return (
      <Fragment>
        <div className='modalWrapper'>
          <button type='button' aria-label='Close menu' onClick={this.handleCloseModal}>
            {crossIcon}
          </button>
          <div className='modalContent'>
            <ClickOutside
              onOutsideClick={this.handleCloseModal}
              style={clickOutsideStyles}
            >
              {this.renderModalContent(modal)}
            </ClickOutside>
          </div>
        </div>
        <style jsx>{`
          .modalWrapper {
            position: fixed;
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
            color: #FFF;
            z-index: 1;
            top: 1.25rem;
            right: 4rem;
            height: 2.5rem;
            width: 2.5rem;
            border: none;
            background: none;
            cursor: pointer;
          }
          @media (max-width: 1023px) {
            .modalContent {
              width: 100%;
            }
            button {
              position: absolute;
              color: #000;
              z-index: 1;
              top: 1.25rem;
              right: 1rem;
              height: 2.5rem;
              width: 2.5rem;
              border: none;
              background: none;
              cursor: pointer;
            }
          }
        `}</style>
      </Fragment>
    )
  }

  render() {
    const activeModal = coursesMock.items[this.props.modalActiveId]
    return (
      <Fragment>
        {
          activeModal && this.renderModal(activeModal.modal)
        }
      </Fragment>
    )
  }
}

export default translate()(ModalCourse)

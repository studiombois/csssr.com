import React, { Fragment, PureComponent } from 'react'
import { number, func } from 'prop-types'
import translate from '../../../utils/translate-wrapper'
import CrossIcon from '../../../static/icons/cross_white.svg'
import ClickOutside from '../../ui-kit/ClickOutside'
import ButtonLink from '../../ui-kit/ButtonLink'
import coursesMock from '../../../data/school/courses-mock'
import {
  clickOutsideStyles,
  listItemStyles,
  modalContentStyles,
  titleBackgroundStyles,
  modalStyles,
} from './styles'

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
        <style jsx>{listItemStyles}</style>
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
        <style jsx>{modalContentStyles}</style>
        <style jsx>{titleBackgroundStyles}</style>
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
        <style jsx>{modalStyles}</style>
      </Fragment>
    )
  }

  render() {
    const activeModal = coursesMock.items[this.props.modalActiveId]

    return activeModal && this.renderModal(activeModal.modal)
  }
}

export default translate()(ModalCourse)

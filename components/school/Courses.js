import React, { Fragment, PureComponent } from 'react'
import { translate } from 'react-i18next'
import cn from 'classnames'
import CrossIcon from '../../static/icons/cross_white.svg'
import ClickOutside from '../ui-kit/ClickOutside'
import css from 'styled-jsx/css'
import ButtonLink from '../ui-kit/ButtonLink'
import coursesMock from './mock/courses-mock'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    display: block;
    margin-top: 0.1rem;
    margin-left: 0rem;
    height: 208px;
  }

 @media (max-width: 1279px) {
    picture {
      grid-column: 1 / span 6;
      margin-top: 5rem;
      height: 13rem;
    }

    @media (max-width: 1023px) {
      picture {
        height: 13rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 1 / span 6;
      grid-row: 3;
      margin-top: 1.875rem;
      height: 8.75rem;
    }
  }
`

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

class Courses extends PureComponent {
  state = {
    modalActiveId: -1,
  }

  renderCourse = ({
    active,
    title,
    description,
    info,
    duration,
    image,
    showModal,
  }, index) => {
    const { t } = this.props
    return (
      <Fragment key={index}>
        <div className={cn('courseWrapper', {
          active,
        })}>
          <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'school', key: image, alt: t('school:imgAlt.school') }}
          />
          <h3 className='font_h2-regular course-title'>
            {title}
          </h3>
          <p className='font_p24-strong description'>
            {description}
          </p>
          {
            active ? (
              <div className='button_wrapper'>
                <p className='font_p16-regular info'>
                  {info}
                </p>
                <p className='font_p16-regular duration'>
                  {duration}
                </p>
                <div className='button_register'>
                  <ButtonLink
                    href={'#sign'}
                  >
                    {t('school:course.register')}
                  </ButtonLink>
                </div>
                {
                  showModal && (
                    <p className='font_p16-regular under_course_text'>
                      {t('school:course.text-1')}
                      <a
                        onClick={this.handleShowModal(index)}
                        className={'font_link-list_16'}
                      >
                        {t('school:course.text-2')}
                      </a>
                    </p>
                  )
                }
              </div>
            ) : (
              <div className='button_register'>
                <ButtonLink
                  href={'#sign'}
                  theme={'secondary'}
                >
                  {t('school:course.send_request')}
                </ButtonLink>
              </div>
            )
          }
        </div>
        <style jsx>{`
          .courseWrapper {
            grid-column: span 4;
            grid-row: 2;
            text-align: center;
            margin-top: 1.4rem;
            padding: 0 2rem;
          }
          .description {
            margin-top: 1.4rem;
          }
          .info {
            margin-top: 1.4rem;
            text-align: center;
          }
          .duration {
            margin-top: 2.0rem;
          }
          .course-title {
            margin-top: 2.95rem;
          }

          .under_course_text {
            grid-column: 5 / span 4;
            grid-row: 3;
            margin-top: 1.4rem;
            text-align: center;
            cursor: pointer;
          }

          .button_wrapper {
            grid-column: 5 / span 4;
            grid-row: 3;
            text-align: center;
          }
          .button_register {
            margin-top: 3.6rem;
          }

          .courseWrapper:nth-of-type(1) {
            grid-column: 1 / span 4;
          }
          .courseWrapper:nth-of-type(2) {
            grid-column: 5 / span 4;
          }
          .courseWrapper:nth-of-type(3) {
            grid-column: 9 / span 4;
          }
          .courseWrapper.margin-0 {
            margin-top: 19.5rem;
          }
          .courseWrapper.margin-1 {
            margin-top: 10.5rem;
          }


          @media (max-width: 1279px) {
            .courseWrapper:nth-of-type(1), .courseWrapper:nth-of-type(2), .courseWrapper:nth-of-type(3) {
              grid-column: 1 / span 12;
              grid-row: auto;
              text-align: center;
              padding: 0 1rem;
            }
          }

          @media (max-width: 767px) {
            .courseWrapper {
              grid-column: span 12;
              grid-row: auto;
              text-align: center;
              margin-top: 1.4rem;
              padding: 0 2rem;
            }
            .courseWrapper:nth-of-type(1) {
              grid-column: 1 / span 6;
            }
            .courseWrapper:nth-of-type(2) {
              grid-column: 1 / span 6;
            }
            .courseWrapper:nth-of-type(3) {
              grid-column: 1 / span 6;
            }
            .courseWrapper.margin-0 {
              margin-top: 0;
            }
            .courseWrapper.margin-1 {
              margin-top: 0;
            }
          }
        `}
        </style>
        {picture.styles}
      </Fragment>
    )
  }

  handleCloseModal = () => {
    this.setState({
      modalActiveId: -1,
    })
  }

  handleShowModal = index => () => {
    this.setState({
      modalActiveId: index,
    })
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
    const { t } = this.props
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
                onClick={this.handleCloseModal}
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
    const { t } = this.props
    const activeModal = coursesMock.modals[this.state.modalActiveId]
    return (
      <Fragment>
        {
          activeModal && this.renderModal(activeModal)
        }
        <section className='grid-container' id='courses'>
          <h2 id='manifest' className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('school:course.title') }} />
          {
            coursesMock.items.map(this.renderCourse)
          }
        </section>

        <style jsx>{`
          section {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            padding-top: 8rem;
            width: 1792px;
          }

          h2 {
            grid-column: 5 / span 4;
            grid-row: 1;
            margin-bottom: 5.6rem;
            text-align: center;
          }

          p {
            grid-column: 3 / span 8;
            text-align: center;
            grid-row: 2;
          }

          .font_h1-slab {
            grid-column: 5 / span 6;
            grid-row: 1 / span 5;
            padding-top: 0.5rem;
            position: absolute;
            align-self: center;
            line-height: 1.60rem;
          }

          .font_h2-regular {
            grid-column: 4 / span 4;
            grid-row: 2;
            text-align: left;
            margin-top: 14rem;
          }

          .point {
            grid-column: 4 / span 5;
            grid-row: 2;
            text-align: left;
            margin-top: 17rem;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            section {
              width: 1328px;
            }

            h2 {
              grid-column: 4 / span 6;
            }

          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            section {
              width: 1232px;
            }

            h2 {
              grid-column: 4 / span 6;
            }

          }

          @media (min-width: 768px) and (max-width: 1279px) {
            section {
              padding-top: 6.5rem;
              width: 944px;
            }

            h2 {
              margin-bottom: 2.5rem;
            }

            @media (max-width: 1023px) {
              section {
                width: 59rem;
              }

            }
          }

          @media (max-width: 767px) {
            section {
              padding-top: 3rem;
              width: 20.5rem;
            }

            h2,
            p,
            footer {
              grid-column: 1 / span 6;
            }

            h2 {
              margin-bottom: 1.1875rem;
            }

           }
        `}</style>
        {picture.styles}
      </Fragment>
    )
  }
}

export default translate()(Courses)

import React, { Fragment, PureComponent } from 'react'
import { bool } from 'prop-types'
import { translate } from 'react-i18next'
import cn from 'classnames'
import css from 'styled-jsx/css'
import ButtonLink from '../ui-kit/ButtonLink'
import ModalCourse from './ModalCourse'
import coursesMock from '../../data/school/courses-mock'
import getScrollbarWidth from '../../utils/getScrollbarWidth'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    display: block;
    margin-top: 0;
    margin-left: 0;
    height: 208px;
  }
  .gray {
    filter: gray;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
  }

  @media (max-width: 1279px) {
    picture {
      grid-column: 2 / span 3;
      margin-top: 2rem;
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
      margin-top: 2rem;
      height: 8.75rem;
    }
  }
`

class Courses extends PureComponent {
  static propTypes = {
    isTabletOrLowResDesktop: bool,
  }
  static defaultProps = {
    isTabletOrLowResDesktop: false,
  }
  state = {
    modalActiveId: -1,
  }
  componentDidMount() {
    this.scrollbarWidth = getScrollbarWidth()
  }
  handleCloseModal = () => {
    document.body.style.overflow = this.bodyOverflow || 'initial'
    document.body.style.paddingRight = 0
    this.setState({
      modalActiveId: -1,
    })
  }

  handleShowModal = index => () => {
    this.bodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${this.scrollbarWidth}px`
    this.setState({
      modalActiveId: index,
    })
  }

  renderCourse = ({
    active,
    title,
    description,
    info,
    duration,
    image,
    modal,
  }, index) => {
    const { t, isTabletOrLowResDesktop } = this.props
    return (
      <Fragment key={index}>
        <div className={cn('courseWrapper', {
          active,
          'grid-container': isTabletOrLowResDesktop,
        })}>
          <div className='imageColumn'>
            <PictureForAllResolutions
              className={cn(picture.className, {
                gray: !active,
              })}
              image={{ namespace: 'school', key: image, alt: title }}
            />
            {
              !active && (
                <div
                  className='soon font_roboto-slab-light'
                  dangerouslySetInnerHTML={{ __html: t('school:course.soon') }}
                />
              )
            }
            {
              active && isTabletOrLowResDesktop && (
                <Fragment>
                  <p
                    className='font_p16-regular info'
                    dangerouslySetInnerHTML={{ __html: info }}
                  />
                  <p
                    className='font_p16-regular duration'
                    dangerouslySetInnerHTML={{ __html: duration }}
                  />
                </Fragment>
              )
            }
          </div>
          <div className='infoColumn'>
            <h3
              className='font_h2-regular course-title'
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p
              className='font_p24-strong description'
              dangerouslySetInnerHTML={{ __html: description }}
            />
            {
              active ? (
                <div className='button_wrapper'>
                  {
                    !isTabletOrLowResDesktop && (
                      <Fragment>
                        <p
                          className='font_p16-regular info'
                          dangerouslySetInnerHTML={{ __html: info }}
                        />
                        <p
                          className='font_p16-regular duration'
                          dangerouslySetInnerHTML={{ __html: duration }}
                        />
                      </Fragment>
                    )
                  }
                  <div className='button_register'>
                    <ButtonLink
                      href={'#sign'}
                    >
                      {t('school:course.register')}
                    </ButtonLink>
                  </div>
                  {
                    modal && (
                      <p className='font_p16-regular under_course_text'>
                        <span dangerouslySetInnerHTML={{ __html: t('school:course.text1') }} />
                        <button
                          onClick={this.handleShowModal(index)}
                          className={'font_link-list_16 modal-button'}
                          dangerouslySetInnerHTML={{ __html: t('school:course.text2') }}
                        />
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
                    {t('school:course.sendRequest')}
                  </ButtonLink>
                </div>
              )
            }
          </div>
        </div>
        <style jsx>{`
          .courseWrapper {
            grid-column: span 4;
            grid-row: 2;
            text-align: center;
            margin-top: 1rem;
            padding: 0 0rem;
          }
          .modal-button {
            border: none;
            display: inline-block;
            cursor: pointer;
          }
          .imageColumn {
            position: relative;
            overflow: hidden;
          }
          .soon {
            background: #ffee1f;
            text-align: center;
            position: absolute;
            left: -20%;
            right: -20%;
            bottom: 45%;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.0625rem;
            padding: 0 0;
            line-height: 1.375rem;
            font-weight: bold;
            transform: rotate(12deg);
          }
          .description {
            margin-top: 1.4375rem;
          }
          .info {
            margin-top: 1.4375rem;
            text-align: center;
          }
          .duration {
            margin-top: 2.0rem;
          }
          .course-title {
            margin-top: 3rem;
          }

          .under_course_text {
            grid-column: 5 / span 4;
            grid-row: 3;
            margin-top: 1.4375rem;
            text-align: center;
          }

          .button_wrapper {
            grid-column: 5 / span 4;
            grid-row: 3;
            text-align: center;
          }
          .button_register {
            margin-top: 3.625rem;
          }

          .courseWrapper:nth-of-type(1) {
            grid-column: 1 / span 3;
          }
          .courseWrapper:nth-of-type(2) {
            grid-column: 5 / span 4;
          }
          .courseWrapper:nth-of-type(3) {
            grid-column: 10 / span 3;
          }

          @media (max-width: 1279px) {
            .courseWrapper:nth-of-type(1), .courseWrapper:nth-of-type(2), .courseWrapper:nth-of-type(3) {
              grid-column: 1 / span 12;
              grid-row: auto;
              text-align: left;
              padding: 0 0rem;
              margin-bottom: 1rem;
            }
            .course-title {
              margin-top: 3.25rem;
            }
            .info {
              font-size: 1rem;
              line-height: 1.5rem;
            }
            .duration {
              text-align: center;
              padding: 0 5rem;
              margin-top: 1.3125rem;
            }
            .imageColumn {
              grid-column: 2 / span 5;
            }
            .infoColumn {
              grid-column: 8 / span 4;
            }
            .font_p16-regular {
            }
            .button_register {
              margin-top: 2.5rem;
            }
            .font_link-list_16 {
              display: inline;
            }
            .under_course_text {
              grid-column: 3 / span 6;
              text-align: left;
              font-size: 1rem;
              line-height: 1.5rem;
            }
          }

          @media (max-width: 767px) {
            .courseWrapper:nth-of-type(1), .courseWrapper:nth-of-type(2), .courseWrapper:nth-of-type(3) {
              grid-column: 1 / span 6;
              grid-row: auto;
              text-align: center;
              margin-top: 1.4375rem;
              padding: 0 2rem;
            }
            .under_course_text {
              font-size: 1rem;
              line-height: 1.5rem;
            }
            .duration {
              padding: 0;
            }
          }
        `}
        </style>
        {picture.styles}
      </Fragment>
    )
  }

  render() {
    const { t } = this.props
    const { modalActiveId } = this.state
    return (
      <Fragment>
        {
          modalActiveId !== -1 && (
            <ModalCourse
              modalActiveId={modalActiveId}
              onCloseModal={this.handleCloseModal}
            />
          )
        }
        <section className='grid-container' id='courses'>
          <h2 className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('school:course.title') }} />
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
            margin-bottom: 5.5rem;
            text-align: center;
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
              padding-top: 5rem;
              width: 944px;
            }

            h2 {
              margin-top: 0.5rem;
              margin-bottom: 0.5rem;
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

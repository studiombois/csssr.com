import React, { Fragment, PureComponent } from 'react'
import { bool } from 'prop-types'
import { translate } from 'react-i18next'
import cn from 'classnames'
import css from 'styled-jsx/css'
import ButtonLink from '../ui-kit/ButtonLink'
import ModalCourse from './ModalCourse'
import coursesMock from '../../data/school/courses-mock'
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
      grid-column: 2 / span 3;
      margin-top: 1.8rem;
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

class Courses extends PureComponent {
  static propTypes = {
    isMedium: bool,
  }
  static defaultProps = {
    isMedium: false,
  }
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
    const { t, isMedium } = this.props
    return (
      <Fragment key={index}>
        <div className={cn('courseWrapper', {
          active,
          'grid-container': isMedium,
        })}>
          <div className='imageColumn'>
            <PictureForAllResolutions
              className={picture.className}
              image={{ namespace: 'school', key: image, alt: title }}
            />
            {
              active && isMedium && (
                <Fragment>
                  <p className='font_p16-regular info'>
                    {info}
                  </p>
                  <p className='font_p16-regular duration'>
                    {duration}
                  </p>
                </Fragment>
              )
            }
          </div>
          <div className='infoColumn'>
            <h3 className='font_h2-regular course-title'>
              {title}
            </h3>
            <p className='font_p24-strong description'>
              {description}
            </p>
            {
              active ? (
                <div className='button_wrapper'>
                  {
                    !isMedium && (
                      <Fragment>
                        <p className='font_p16-regular info'>
                          {info}
                        </p>
                        <p className='font_p16-regular duration'>
                          {duration}
                        </p>
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
        </div>
        <style jsx>{`
          .courseWrapper {
            grid-column: span 4;
            grid-row: 2;
            text-align: center;
            margin-top: 1rem;
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
              text-align: left;
              padding: 0 0rem;
              margin-bottom: 0.5rem;
            }
            .info {
              font-size: 1rem;
              line-height: 1.5rem;
            }
            .duration {
              text-align: center;
              padding: 0 5rem;
              margin-top: 1.3rem;
            }
            .imageColumn {
              grid-column: 2 / span 5;
            }
            .infoColumn {
              grid-column: 8 / span 4;
            }
          }

          @media (max-width: 767px) {
            .courseWrapper:nth-of-type(1), .courseWrapper:nth-of-type(2), .courseWrapper:nth-of-type(3) {
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
            .under_course_text {
              font-size: 1rem;
              line-height: 1.5rem;
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
            margin-bottom: 5.5rem;
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

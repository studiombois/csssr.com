import React, { Fragment, PureComponent } from 'react'
import { translate } from 'react-i18next'
import cn from 'classnames'
import css from 'styled-jsx/css'
import bonusesMock from './mock/bonuses-mock'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    display: block;
    height: 304px;
  }

 @media (max-width: 1279px) {
    picture {
      margin-top: 5rem;
      height: 512px;
    }

    @media (max-width: 1023px) {
      picture {
        height: 32rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 1 / span 6;
      grid-row: 3;
      margin-top: 1.875rem;
      height: 43.4375px;
    }
  }
`

class Bonus extends PureComponent {
  state = {
    activeCourse: 2,
  }

  renderCourse = ({
    id,
    title,
    description,
    image,
  }, index) => {
    const { t } = this.props
    const active = id === this.state.activeCourse
    return (
      <Fragment key={id}>
        <div className={cn('courseWrapper', `margin-${index}`, {
          active,
        })}>
          <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'school', key: image, alt: t('school:imgAlt.school') }}
          />
          <h2 className='font_h2-regular course-title'>
            {title}
          </h2>
          <p className='font_p16-regular description'>
            {description}
          </p>
        </div>
        <style jsx>{`
          .courseWrapper {
            grid-column: span 4;
            grid-row: 2;
            text-align: center;
            margin-top: 1.5rem;
          }
          .courseWrapper:nth-of-type(1) {
            grid-column: 3 / span 2;
          }
          .courseWrapper:nth-of-type(2) {
            grid-column: 6 / span 2;
          }
          .courseWrapper:nth-of-type(3) {
            grid-column: 9 / span 2;
          }
          .courseWrapper.active {
            padding: 0;
          }
          .courseWrapper.margin-0 {
            margin-top: 19.5rem;
          }
          .courseWrapper.margin-1 {
            margin-top: 10.5rem;
          }
          .description {
            margin-top: 0.5rem;
            text-align: left;
          }
          .info {
            margin-top: 1.4rem;
            text-align: center;
          }
          .duration {
            margin-top: 2.0rem;
            text-align: left;
          }
          .course-title {
            margin-top: 2.5rem;
            text-align: left;
          }

          .under_course_text {
            grid-column: 5 / span 4;
            grid-row: 3;
            margin-top: 1.4rem;
            text-align: center;
          }

          .button_wrapper {
            grid-column: 5 / span 4;
            grid-row: 3;
            text-align: center;
          }
          .button_register {
            margin-top: 3.6rem;
          }


         @media (max-width: 1279px) {
            picture {
              margin-top: 5rem;
              height: 512px;
            }

            @media (max-width: 1023px) {
              picture {
                height: 32rem;
              }
            }
          }

          @media (max-width: 767px) {
            picture {
              grid-column: 1 / span 6;
              grid-row: 3;
              margin-top: 1.875rem;
              height: 160px;
            }
            .courseWrapper {
              grid-column: 1 / span 12;
              grid-row: auto;
              text-align: center;
              margin-top: 1.5rem;
            }
            .courseWrapper:nth-of-type(1) {
              grid-column: 1 / span 12;
            }
            .courseWrapper:nth-of-type(2) {
              grid-column: 1 / span 12;
            }
            .courseWrapper:nth-of-type(3) {
              grid-column: 1 / span 12;
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
    return (
      <Fragment>
        <section className='grid-container' id='manifest'>
          <h2 id='manifest' className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('school:bonus.title') }} />
          {
            bonusesMock.items.map(this.renderCourse)
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

export default translate()(Bonus)

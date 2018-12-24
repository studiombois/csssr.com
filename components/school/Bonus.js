import React, { Fragment, PureComponent } from 'react'
import { translate } from 'react-i18next'
import cn from 'classnames'
import css from 'styled-jsx/css'
import bonusesMock from '../../data/school/bonuses-mock'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    display: block;
    height: 304px;
  }

 @media (max-width: 1279px) {
    picture {
      margin-top: 5rem;
      height: 19rem;
    }

    @media (max-width: 1023px) {
      picture {
        height: 19rem;
        margin-top: 3rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 1 / span 6;
      grid-row: 3;
      margin-top: 1.875rem;
      height: 10rem;
    }
  }
`

class Bonus extends PureComponent {
  renderBonus = ({
    title,
    description,
    image,
  }, index) => {
    return (
      <Fragment key={index}>
        <div className={cn('bonusWrapper', `margin-${index}`)}>
          <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'school', key: image, alt: title }}
          />
          <h3 className='font_h2-regular bonus-title'>
            {title}
          </h3>
          <p className='font_p16-regular description'>
            {description}
          </p>
        </div>
        <style jsx>{`
          .bonusWrapper {
            grid-column: span 4;
            grid-row: 2;
            text-align: center;
            margin-top: 1.5rem;
          }
          .bonusWrapper:nth-of-type(1) {
            grid-column: 3 / span 2;
          }
          .bonusWrapper:nth-of-type(2) {
            grid-column: 6 / span 2;
          }
          .bonusWrapper:nth-of-type(3) {
            grid-column: 9 / span 2;
          }
          .bonusWrapper.margin-0 {
            margin-top: 19.5rem;
          }
          .bonusWrapper.margin-1 {
            margin-top: 10.5rem;
          }
          .description {
            margin-top: 0.5rem;
            text-align: left;
          }
          .bonus-title {
            margin-top: 2.5rem;
            text-align: left;
          }

          @media (max-width: 1279px) {
            @media (max-width: 1023px) {
              .bonus-title {
                margin-top: 1.9375rem;
                text-align: left;
              }
              .description {
                margin-top: 1rem;
                text-align: left;
              }
              .bonusWrapper {
                margin-top: 0rem;
              }
              .bonusWrapper.margin-0 {
                margin-top: 9.25rem;
              }
              .bonusWrapper.margin-1 {
                margin-top: 4.5rem;
              }
              .bonusWrapper:nth-of-type(1) {
                grid-column: 2 / span 3;
              }
              .bonusWrapper:nth-of-type(2) {
                grid-column: 5 / span 4;
                margin-left: 2.5rem;
              }
              .bonusWrapper:nth-of-type(3) {
                grid-column: 9 / span 3;
              }
            }
          }

          @media (max-width: 767px) {
            .bonusWrapper {
              grid-column: 1 / span 6;
              grid-row: auto;
              text-align: center;
              margin-top: 1.5rem;
            }
            .bonusWrapper:nth-of-type(1) {
              grid-column: 1 / span 6;
              margin-left: 0;
            }
            .bonusWrapper:nth-of-type(2) {
              grid-column: 1 / span 6;
              margin-left: 0;
            }
            .bonusWrapper:nth-of-type(3) {
              grid-column: 1 / span 6;
              margin-left: 0;
            }
            .bonusWrapper.margin-0 {
              margin-top: 0;
              margin-left: 0;
            }
            .bonusWrapper.margin-1 {
              margin-top: 0;
              margin-left: 0;
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
        <section className='grid-container' id='services'>
          <h2 className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('school:bonus.title') }} />
          {
            bonusesMock.items.map(this.renderBonus)
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
            margin-bottom: 5.625rem;
            text-align: center;
          }

          p {
            grid-column: 3 / span 8;
            text-align: center;
            grid-row: 2;
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
                padding-top: 5.75rem;
              }
              h2 {
                margin-bottom: 0;
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

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

  img {
    width: auto;
  }

 @media (max-width: 1279px) {
    picture {
      margin-top: 0.5rem;
      height: 19rem;
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 1 / span 6;
      margin-top: 0rem;
      height: 10rem;
    }
  }
`

class Bonus extends PureComponent {
  renderBonus = ({
    title,
    description,
    image,
    altText,
  }, index) => {
    return (
      <Fragment key={index}>
        <div className={cn('bonusWrapper')}>
          <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'school', key: image, alt: altText }}
          />
          <h3
            className='font_h2-regular bonus-title'
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className='font_p16-regular description'
            dangerouslySetInnerHTML={{ __html: description }}
          />
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
            margin-top: 19.5rem;
          }
          .bonusWrapper:nth-of-type(2) {
            grid-column: 6 / span 2;
            margin-top: 10.5rem;
          }
          .bonusWrapper:nth-of-type(3) {
            grid-column: 9 / span 2;
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
            .bonusWrapper {
              margin-top: 0rem;
            }
            .bonusWrapper:nth-of-type(1) {
              grid-column: 2 / span 3;
              margin-top: 9rem;
            }
            .bonusWrapper:nth-of-type(2) {
              grid-column: 6 / span 3;
              margin-top: 4.5rem;
              margin-left: -2.5rem;
              text-align: left;
            }
            .bonusWrapper:nth-of-type(3) {
              grid-column: 9 / span 3;
            }
            .bonus-title {
              margin-top: 1.4375rem;
              text-align: left;
            }
            .description {
              margin-top: 0.8125rem;
              text-align: left;
            }
          }

          @media (max-width: 767px) {
            .bonusWrapper:nth-of-type(n) {
              grid-column: 1 / span 6;
              grid-row: auto;
              text-align: center;
              margin-top: 3.75rem;
              margin-left: 0;
            }

            .bonusWrapper:nth-of-type(1) {
              margin-top: 3.5625rem;
            }

            .bonus-title {
              margin-top: 1.375rem;
              padding-bottom: 0;
              text-align: left;
            }
            .description {
              margin-top: 0.875rem;
              padding-bottom: 0;
              text-align: left;
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
            margin-top: 8.5rem;
            width: 1792px;
          }

          h2 {
            grid-column: 4 / span 6;
            margin-bottom: 5.5625rem;
            text-align: center;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            section {
              width: 1328px;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            section {
              width: 1232px;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            section {
              margin-top: 6rem;
              width: 944px;
            }

            h2 {
              margin-bottom: 3rem;
            }

            @media (max-width: 1023px) {
              section {
                width: 59rem;
                padding-top: 5.75rem;
              }
            }
          }

          @media (max-width: 767px) {
            section {
              margin-top: 6rem;
              width: 20.5rem;
            }

            h2 {
              grid-column: 1 / span 6;
              margin-bottom: 0;
            }
           }
        `}</style>
        {picture.styles}
      </Fragment>
    )
  }
}

export default translate()(Bonus)

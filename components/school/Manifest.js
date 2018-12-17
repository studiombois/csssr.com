import React, { Fragment, PureComponent } from 'react'
import { translate } from 'react-i18next'
import cn from 'classnames'
import css from 'styled-jsx/css'
import Cups from '../../components/school/Cups'
import manifestMock from './mock/manifest-mock'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    grid-row: 1;
    z-index: -1;
    grid-column: 2 / span 2;
    margin-top: 3rem;
    height: 248px;
  }
  
  picture.left {
    margin-top: 8rem;
    grid-column: 9 / span 2;
  }

 @media (max-width: 1279px) {
    picture {
      margin-top: 5rem;
      height: 15.5rem;
    }

    @media (max-width: 1023px) {
      picture {
        height: 15.5rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 1 / span 6;
      grid-row: 1;
      margin-top: 1.875rem;
      height: 7rem;
    }
    picture.left {
      grid-column: 1 / span 6;
      margin-top: 0;
    }
  }
`

class Manifest extends PureComponent {

  renderItem = ({
    id,
    title,
    description,
    description_second,
    isCups,
    image,
  }, index) => {
    const { t } = this.props
    const right = !(index % 2)
    const left = (index % 2)
    return (
      <Fragment key={id}>
        <section className={cn('grid-container', {
          right,
          left,
        })}>
          <PictureForAllResolutions
            className={cn(picture.className, {
              right,
              left,
            })}
            image={{ namespace: 'school', key: image, alt: t('school:imgAlt.school') }}
          />
          <h3 className={cn('font_h2-regular', `h3-${index}`, {
            right,
            left,
          })}>
            {title}
          </h3>
          <p className={cn('font_p16-regular', `p-${index}`, 'description', {
            right,
            left,
          })}>
            {description}
            {!!description_second && (
              <Fragment>
                <br />
                <br />
                {description_second}
              </Fragment>
            )}
          </p>
        </section>
        {
          isCups && <Cups />
        }
        <style jsx>{`
          section {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            padding-top: 0rem;
            width: 1792px;
            margin-bottom: 4rem;
          }

          h2 {
            grid-column: 2 / span 4;
            grid-row: 2;
            margin-top: 0rem;
            margin-bottom: 0rem;
            text-align: center;
          }

          p {
            grid-column: 3 / span 5;
            grid-row: 1;
            margin-top: 12rem;
          }

          .font_h2-regular {
            grid-column: 3 / span 4;
            grid-row: 1;
            text-align: left;
            margin-top: 9rem;
          }

          .right {
            grid-column: 4 / span 5;
          }

          .h3-2 {
            grid-column: 6 / span 5;
            margin-top: 3.5rem;
          }

          .p-2 {
            grid-column: 6 / span 5;
            margin-top: 6.5rem;
          }

          .left {
            grid-column: 3 / span 6;
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
              padding-top: 0rem;
              width: 944px;
              margin-bottom: 0rem;
            }

            h2 {
              margin-bottom: 1.5rem;
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
              margin-bottom: 1rem;
            }

            .right {
              grid-column: 1 / span 6;
              text-align: center;
            }

            .left {
              grid-column: 1 / span 6;
              text-align: center;
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
          <h2 id='manifest' className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('school:manifest.title') }} />
          <p className='font_p24-strong' dangerouslySetInnerHTML={{ __html: t('school:manifest.text') }} />
        </section>
        {
          manifestMock.items.map(this.renderItem)
        }
        <style jsx>{`
          section {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            padding-top: 0rem;
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

          .font_p16-regular {
            grid-column: 1 / span 12;
            grid-row: 1;
            text-align: left;
            margin-bottom: 1rem;
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

            .point {
              grid-column: 1 / span 6;
              text-align: left;
              margin-top: 17rem;
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

export default translate()(Manifest)

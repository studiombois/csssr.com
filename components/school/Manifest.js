import React, { Fragment, PureComponent } from 'react'
import { translate } from 'react-i18next'
import cn from 'classnames'
import css from 'styled-jsx/css'
import Cups from '../../components/school/Cups'
import manifestMock from '../../data/school/manifest-mock'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    grid-column: 3 / span 3;
    grid-row: 1;
    z-index: -1;
    margin-top: 3rem;
    height: 264px;
  }

  picture.of_number_one {
    text-align: right;
  }

  picture.of_number_two {
    margin-top: -3.5rem;
    grid-column: 8 / span 2;
    height: 248px;
  }

  picture.of_number_three {
    grid-column: 4 / span 2;
    margin-top: 8rem;
    height: 248px;
  }

  img {
    width: auto;
  }


 @media (max-width: 1279px) {
    picture {
      margin-top: 3.25rem;
      height: 14rem;
    }

    picture.of_number_two {
      margin-top: 4rem;
      height: 13.5rem;
    }

    picture.of_number_three {
      grid-column: 4 / span 2;
      margin-top: 5.75rem;
      height: 13.5rem;
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 1 / span 6;
      grid-row: 1;
      margin-top: 1.875rem;
      height: 7rem;
    }

    picture.of_number_one {
      grid-column: 1 / span 6;
      text-align: center;
    }

    picture.of_number_two,
    picture.of_number_three {
      grid-column: 2 / span 4;
      margin-top: 0;
      height: 7rem;
    }

    picture.of_number_three {
      grid-column: 3 / span 2;
      text-align: center;
    }
  }
`

class Manifest extends PureComponent {
  renderItem = ({ title, altText, descriptionLines, isCups, image }, index) =>
    <Fragment key={index}>
      <section className='grid-container'>
        <PictureForAllResolutions
          className={cn(picture.className, {
            of_number_one: index === 0,
            of_number_two: index === 1,
            of_number_three: index === 2,
          })}
          image={{ namespace: 'school', key: image, alt: altText }}
        />
        <div>
          <h3 className='font_h2-regular' dangerouslySetInnerHTML={{ __html: title }} />
          {descriptionLines.map((line, lineIndex) =>
            <p
              key={lineIndex}
              className='font_p16-regular'
              dangerouslySetInnerHTML={{ __html: line }}
            />
          )}
        </div>
      </section>
      { isCups && <Cups /> }
      <style jsx>{`
        section {
          grid-column: 1 / span 12;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
        }

        div {
          grid-column: 6 / span 5;
          grid-row: 1;
        }

        h3 {
          margin-top: 9.5625rem;
        }

        p {
          margin-top: 0.5rem;
        }

        p + p {
          margin-top: 1rem;
        }

        section:nth-of-type(3) {
          margin-top: 6rem; //TODO: Во второй версии школу понизить отступ до 2rem, сейчас ужасно близко
        }

        section:nth-of-type(3) div {
          grid-column: 4 / span 4;
        }

        section:nth-of-type(3) h3 {
          margin-top: -0.4375rem;
        }

        section:nth-of-type(4) div {
          grid-column: 6 / span 5;
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
            width: 944px;
          }

          div {
            grid-column: 6 / span 5;
          }

          h3 {
            margin-top: 6.5625rem;
            font-size: 1rem;
            line-height: 2rem;
          }

          p {
            margin-top: 0.125rem;
            font-size: 1rem;
            line-height: 1.5rem;
          }

          p + p {
            margin-top: 0.8125rem;
          }

          section:nth-of-type(3) {
            margin-top: 3rem;
          }

          section:nth-of-type(3) div {
            margin-top: 0rem;
            grid-column: 4 / span 5;
          }

          section:nth-of-type(3) h3 {
            margin-top: 6.8125rem;
          }

          section:nth-of-type(4) {
            margin-top: -1.75rem;
          }

          section:nth-of-type(4) div {
            grid-column: 6 / span 4;
          }

          section:nth-of-type(4) h3 {
            margin-top: 9.0625rem;
          }
        }

        @media (max-width: 767px) {
          section {
            grid-column: 1 / span 6;
            width: 20.5rem;
          }

          h3 {
            padding-bottom: 0;
            font-family: Roboto Slab;
            font-size: 1rem;
            line-height: 2rem;
          }

          p {
            margin-top: 0.8125rem;
            padding-bottom: 0;
            font-size: 1rem;
            line-height: 1.5rem;
          }

          p + p {
            margin-top: 1rem;
          }

          section:nth-of-type(3) {
            margin-top: 4rem;
          }

          section:nth-of-type(n) div {
            grid-column: 1 / span 6;
            margin-top: 1.125rem;
            grid-row: 2;
            height: auto;
            text-align: center;
          }

          section:nth-of-type(n) h3 {
            margin-top: 0;
          }

          section:nth-of-type(4) {
            margin-top: 3.5rem;
          }
        }
      `}
      </style>
      {picture.styles}
    </Fragment>

  render() {
    const { t } = this.props
    return (
      <Fragment>
        <article className='grid-container' id='manifest'>
          <h2 className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('school:manifest.title') }} />
          <p className='font_p24-strong' dangerouslySetInnerHTML={{ __html: t('school:manifest.text') }} />

          {manifestMock.items.map(this.renderItem)}
        </article>
        <style jsx>{`
          article {
            margin-left: auto;
            margin-right: auto;
            width: 1792px;
          }

          h2, p {
            grid-column: 3 / span 8;
            text-align: center;
          }

          h2 {
            margin-bottom: 5.5rem;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            article {
              width: 1328px;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            article {
              width: 1232px;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            article {
              padding-top: 6.5rem;
              width: 944px;
            }

            h2 {
              margin-bottom: 2.6875rem;
            }

            @media (max-width: 1023px) {
              article {
                width: 59rem;
              }
            }
          }

          @media (max-width: 767px) {
            article {
              margin-top: 0.5rem;
              width: 20.5rem;
            }

            h2 {
              grid-column: 1 / span 6;
              margin-bottom: 1.1875rem;
            }

            p {
              grid-column: 1 / span 6;
              text-align: center;
              grid-row: 2;
            }
           }
        `}</style>
        {picture.styles}
      </Fragment>
    )
  }
}

export default translate()(Manifest)

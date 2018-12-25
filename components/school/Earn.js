import React, { Fragment, PureComponent } from 'react'
import css from 'styled-jsx/css'
import { translate } from 'react-i18next'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    grid-column: 7 / span 6;
    grid-row: 1;
    z-index: -1;
    margin-top: -4rem;
    height: 640px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      grid-column: 8 / span 6;
      height: 23rem;
    }

    @media (max-width: 1023px) {
      picture {
        grid-column: 7 / span 6;
        height: 20.75rem;
        margin-top: -2rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 1 / span 6;
      grid-row: 2;
      text-align: center;
      margin-top: 1.4375rem;
      height: 13.5rem;
    }
  }
`

class Earn extends PureComponent {
  state = {
    showScrollButton: false,
  }

  render() {
    const { t } = this.props

    return (
      <Fragment>
        <article id='competence' className='grid-container'>
          <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'school', key: 'cover', alt: t('school:imgAlt.earn') }}
          />
          <h1 className='font_h1-slab' >
            <span dangerouslySetInnerHTML={{ __html: t('school:school.title') }} />
            <span className='mark' dangerouslySetInnerHTML={{ __html: t('school:school.tool') }} />
            <span className='font_subhead-slab' dangerouslySetInnerHTML={{ __html: t('school:school.subTitle') }} />
          </h1>

        </article><style jsx>{`
          article {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            padding-top: 12rem;
            width: 1792px;
            height: 57rem;
          }

          h1 {
            grid-column: 2 / span 7;
            grid-row: 1;
            margin-bottom: 5rem;
          }

          .font_subhead-slab {
            padding-top: 4.5rem;
            line-height: 4rem;
          }

          span {
            padding-top: 1rem;
            display: block;
          }

          .mark {
            display: inline-block;
            position: relative;
            padding-top: 0;
          }
          .mark::before {
            content: '';
            position: absolute;
            background: #ffee1f;
            top: 55%;
            bottom: -0.5rem;
            left: 1rem;
            right: -1rem;
            z-index: -1;
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
              width: 1024px;
              height: 31rem;
            }
            h1 {
              grid-column: 2 / span 7;
              margin-bottom: 3.8125rem;
            }

            .font_subhead-slab {
              margin-top: 0rem;
              line-height: 2rem;
            }

            .font_subhead-slab {
              padding-top: 1.6875rem;
              line-height: 2rem;
            }

            @media (max-width: 1023px) {
              article {
                width: 59rem;
                padding-top: 10rem;
              }
              h1 {
                grid-column: 2 / span 5;
                padding-top: 0rem;
              }

              .font_subhead-slab {
                padding-top: 2rem;
                line-height: 2rem;
              }

              span {
                padding-top: 1rem;
                display: block;
              }
            }
          }

          @media (max-width: 767px) {
            article {
              padding-top: 5rem;
              width: 20.5rem;
              height: auto;
              min-height: 37rem;
            }

            h1 {
              grid-column: 1 / span 6;
              grid-row: 1;
              margin-bottom: 1.375rem;
              text-align: center;
            }

            .font_subhead-slab {
              padding-top: 0.6875rem;
              line-height: 2rem;
            }

          }

        `}</style>
        {picture.styles}
      </Fragment>
    )
  }
}

export default translate()(Earn)

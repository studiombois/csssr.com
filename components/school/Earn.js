import React, { Fragment, PureComponent } from 'react'
import css from 'styled-jsx/css'
import translate from '../../utils/translate-wrapper'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    grid-column: 7 / span 6;
    grid-row: 1;
    z-index: -1;
    margin-top: -3rem;
    height: 640px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      grid-column: 7 / span 6;
      margin-top: -1rem;
      height: 23rem;
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 2 / span 4;
      grid-row: 2;
      margin-top: 3rem;
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
        <article className='grid-container'>
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
            margin-top: 11rem;
            width: 1792px;
            height: 46rem;
          }

          h1 {
            grid-column: 2 / span 7;
            grid-row: 1;
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
              margin-top: 9rem;
              width: 944px;
              height: 22rem;
            }

            h1 {
              grid-column: 2 / span 5;
            }

            .font_subhead-slab {
              padding-top: 2.1875rem;
              line-height: 2rem;
            }

            .mark::before {
              top: 45%;
              bottom: -0.5rem;
              left: 0.5rem;
              right: -1rem;
              z-index: -1;
            }

            @media (max-width: 1023px) {
              article {
                width: 59rem;
              }
            }
          }

          @media (max-width: 767px) {
            article {
              margin-top: 4rem;
              width: 20.5rem;
              height: auto;
              min-height: 37rem;
            }

            h1 {
              grid-column: 1 / span 6;
              grid-row: 1;
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

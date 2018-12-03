import React, { Fragment } from 'react'
import { translate } from 'react-i18next'
import cn from 'classnames'
import css from 'styled-jsx/css'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    grid-column: 9 / span 2;
    grid-row: 1;
    z-index: -1;
    margin-top: 8rem;
    height: 248px;
  }
  
  picture.left {
    grid-column: 2 / span 2;
    margin-top: 9.5rem;
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
      height: 43.4375rem;
    }
  }
`

const Win = ({ t }) =>
  <Fragment>
    <section className='grid-container' id='manifest'>
      <PictureForAllResolutions
        className={picture.className}
        image={{ namespace: 'school', key: 'win2', alt: t('school:imgAlt.school') }}
      />
      <h2 id='manifest' className='font_h2-regular' dangerouslySetInnerHTML={{ __html: t('school:manifest.win_title') }} />
      <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: t('school:manifest.win_text') }} />
    </section>
    <section className='grid-container second' id='manifest'>
      <PictureForAllResolutions
        className={cn(picture.className, 'left')}
        image={{ namespace: 'school', key: 'win3', alt: t('school:imgAlt.school') }}
      />
      <h2 id='manifest' className='font_h2-regular right' dangerouslySetInnerHTML={{ __html: t('school:manifest.full_title') }} />
      <p className='font_p16-regular right' dangerouslySetInnerHTML={{ __html: t('school:manifest.full_text') }} />
    </section>
    <style jsx>{`
      section {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        padding-top: 0rem;
        width: 1792px;
        margin-bottom: 0rem;
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
        margin-top: 14rem;
      }

      .second {
        margin-top: -1.5rem;
      }

      .font_h2-regular {
        grid-column: 3 / span 4;
        grid-row: 1;
        text-align: left;
        margin-top: 11rem;
      }

      .right {
        grid-column: 6 / span 5;
      }

      .left {
        grid-column: 6 / span 4;
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

export default translate()(Win)

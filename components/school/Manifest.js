import React, { Fragment } from 'react'
import { translate } from 'react-i18next'
import css from 'styled-jsx/css'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    grid-column: 2 / span 2;
    grid-row: 2;
    z-index: -1;
    margin-top: 8rem;
    height: 248px;
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

const Manifest = ({ t, image }) =>
  <Fragment>
    <section className='grid-container' id='manifest'>
      <h2 id='manifest' className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('school:manifest.title') }} />
      <p className='font_p24-strong' dangerouslySetInnerHTML={{ __html: t('school:manifest.text') }} />
      <PictureForAllResolutions
        className={picture.className}
        image={{ namespace: 'school', key: 'win1', alt: t('school:imgAlt.school') }}
      />
      <h2 id='manifest' className='font_h2-regular' dangerouslySetInnerHTML={{ __html: t('school:manifest.point') }} />
      <div className='point'>
        <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: t('school:manifest.point_text') }} />
        <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: t('school:manifest.point_text_title') }} />
      </div>
    </section>
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

        h2 {
          margin-bottom: 1.1875rem;
        }

       }
    `}</style>
    {picture.styles}
  </Fragment>

export default translate()(Manifest)

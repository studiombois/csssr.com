import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    grid-column: 3 / span 8;
    grid-row: 1;
    z-index: -1;
    margin-top: 2rem;
    height: 568px;
  }

 @media (max-width: 1279px) {
    picture {
      margin-top: 1.5625rem;
      height: 432px;
    }

    @media (max-width: 1023px) {
      picture {
        height: 27rem;
      }
    }
  }
`

export default ({ title, text, image, style }) =>
  <Fragment>
    <section className='grid-container' style={style}>
      <h2 className='font_subhead-slab' dangerouslySetInnerHTML={{ __html: title }} />
      <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: text }} />

      <PictureForAllResolutions
        className={picture.className}
        image={image}
      />
    </section>
    <style jsx>{`
      section {
        margin-left: auto;
        margin-right: auto;
        padding-top: 9.5rem;
        width: 1792px;
      }

      h2 {
        grid-column: 3 / span 2;
        grid-row: 1;
      }

      p {
        grid-column: 5 / span 6;
        grid-row: 2;
        margin-top: 3rem;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        section {
          width: 1328px;
        }

        h2 {
          grid-column: 3 / span 3;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        section {
          width: 1232px;
        }

        h2 {
          grid-column: 3 / span 3;
        }
      }

     @media (max-width: 1279px) {
        section {
          padding-top: 6.1875rem;
          width: 944px;
        }

        h2 {
          grid-column: 3 / span 3;
        }

        p {
          margin-top: 3.25rem;
        }

        @media (max-width: 1023px) {
          section {
            width: 59rem;
          }
        }
      }
    `}</style>
    {picture.styles}
  </Fragment>

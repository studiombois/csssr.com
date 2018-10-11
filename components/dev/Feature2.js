import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Picture from '../Picture'

const { className, styles } = css.resolve`
  picture {
    grid-column: 3 / span 8;
    grid-row: 1;
    z-index: -1;
    margin-top: 2rem;
    height: 35.5rem;
  }

  img {
    height: 100%;
  }

  @media (min-width: 368px) and (max-width: 1279px) {
    picture {
      margin-top: 1.5625rem;
      height: 27rem;
    }
  }
`

export default ({ title, text, imagesKey, style }) =>
  <Fragment>
    <section className='grid-container' style={style}>
      <h2 className='font_subhead-slab' dangerouslySetInnerHTML={{ __html: title }} />
      <p className='font_p16-regular'>
        {text}
      </p>

      <Picture className={className} imagesKey={imagesKey}/>
    </section>
    {styles}
    <style jsx>{`
      section {
        margin-left: auto;
        margin-right: auto;
        padding-top: 9.5rem;
        width: 112rem;
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
          width: 83rem;
        }

        h2 {
          grid-column: 3 / span 3;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        section {
          width: 77rem;
        }

        h2 {
          grid-column: 3 / span 3;
        }
      }

      @media (min-width: 368px) and (max-width: 1279px) {
        section {
          padding-top: 6.1875rem;
          width: 59rem;
        }

        picture {
          margin-top: 1.5625rem;
          height: 27rem;
        }

        p {
          grid-column: 5 / span 6;
          grid-row: 2;
          margin-top: 3.25rem;
        }
      }
    `}</style>
  </Fragment>

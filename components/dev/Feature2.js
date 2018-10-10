import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Picture from "../Picture";

const { className, styles } = css.resolve`
  picture {
    grid-column: 3 / span 8;
    grid-row: 1;
    z-index: -1;
    margin-top: 2rem;
    height: 568px;
  }

  img {
    height: 100%;
  }
`

export default ({ title, text, imagesKey, style }) =>
  <Fragment>
    <section className='grid-container' style={style}>
      <h2 className='font_subhead-slab' dangerouslySetInnerHTML={{ __html: title }} />
      <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: text }} />

      <Picture className={className} imagesKey={imagesKey}/>
    </section>
    {styles}
    <style jsx>{`
      section {
        margin-left: auto;
        margin-right: auto;
        padding-left: 3rem;
        padding-right: 3rem;
        padding-top: 9.5rem;
        width: 1888px;
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
          width: 1344px;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }

        h2 {
          grid-column: 3 / span 3;
        }
      }

      @media (max-width: 1359px) {
        section {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          width: 1248px;
        }

        h2 {
          grid-column: 3 / span 3;
        }
      }
    `}</style>
  </Fragment>

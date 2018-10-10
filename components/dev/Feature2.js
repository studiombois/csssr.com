import React, { Fragment } from 'react'

export default ({ title, text, images, style }) =>
  <Fragment>
    <section className='grid-container' style={style}>
      <h2 className='font_subhead-slab' dangerouslySetInnerHTML={{ __html: title }} />
      <p className='font_p16-regular'>
        {text}
      </p>

      <picture>
        <source media='(min-width: 1360px) and (max-width: 1919px)' srcSet={images.w1360} />
        <source media='(min-width: 1280px) and (max-width: 1359px)' srcSet={images.w1280} />
        <source media='(min-width: 1024px) and (max-width: 1279px)' srcSet={images.w1024} />
        <img srcSet={images.w1920} alt={images.alt} />
      </picture>
    </section><style jsx>{`
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

      @media (min-width: 1024px) and (max-width: 1279px) {
        section {
          padding-top: 6.1875rem;
          width: 944px;
        }

        picture {
          margin-top: 1.5625rem;
          height: 432px;
        }

        p {
          grid-column: 5 / span 6;
          grid-row: 2;
          margin-top: 3.25rem;
        }
      }
    `}</style>
  </Fragment>

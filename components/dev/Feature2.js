import React, { Fragment } from 'react'

export default ({ title, text, images, style }) =>
  <Fragment>
    <section className='grid-container' style={style}>
      <h2 className='font_subhead-slab'>
        {title}
      </h2>

      <p className='font_p16-regular'>
        {text}
      </p>

      {/* TODO: вставить правильную ссылку на картинку и нормальный alt */}
      <picture>
        <source media='(min-width: 1360px) and (max-width: 1919px)' srcSet={images.w1360} />
        <source media='(max-width: 1359px)' srcSet={images.w1280} />
        <img src={images.w1920} alt='' />
      </picture>
    </section>

    <style jsx>{`
      section {
        margin-left: auto;
        margin-right: auto;
        padding-left: 8rem;
        padding-right: 8rem;
        padding-top: 19rem;
        width: 1920px;
      }

      h2 {
        grid-column: 3 / span 2;
        grid-row: 1;
      }

      picture {
        grid-column: 3 / span 8;
        grid-row: 1;
        z-index: -1;
        margin-top: 4rem;
      }

      p {
        grid-column: 5 / span 6;
        grid-row: 2;
        margin-top: 6rem;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        section {
          width: 1360px;
          padding-left: 2rem;
          padding-right: 2rem;
        }

        h2 {
          grid-column: 3 / span 3;
        }
      }

      @media (max-width: 1359px) {
        section {
          padding-left: 3rem;
          padding-right: 3rem;
          width: 1280px;
        }

        h2 {
          grid-column: 3 / span 3;
        }
      }
    `}</style>
  </Fragment>

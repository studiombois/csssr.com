import React, { Fragment } from 'react'

export default ({ images }) =>
  <Fragment>
    <section className='grid-container'>
      <h2 id='competence-and-services' className='font_h2-slab'>
        We&nbsp;create web services for&nbsp;millions to&nbsp;use
      </h2>

      <p className='font_p24-strong'>
        We&rsquo;re engineers, and our true calling is&nbsp;to&nbsp;find the most elegant and economical solutions for business challenges. We&nbsp;use a&nbsp;variety of&nbsp;tools, technologies and programming languages, but more often than not, we&nbsp;use JavaScript.
      </p>

      <p className='font_feature_1'>
        MVP
      </p>

      <p className='font_feature_2'>
        Support and development of&nbsp;high load web applications
      </p>

      <p className='font_feature_3'>
        Stack migration
      </p>

      <picture>
        <source media='(min-width: 1360px) and (max-width: 1919px)' srcSet={images.w1360} />
        <source media='(min-width: 1280px) and (max-width: 1359px)' srcSet={images.w1280} />
        <source media='(min-width: 368px) and (max-width: 1279px)' srcSet={images.w1024} />
        <img srcSet={images.w1920} alt={images.alt} />
      </picture>

      <footer className='grid-container'>
        <h2 className='font_h2-regular'>
          Open source technologies only
        </h2>

        <p className='font_p16-regular'>
          We&nbsp;are the part of&nbsp;the global community of&nbsp;developers who use popular open source technologies and frameworks, such as&nbsp;React, Angular, Vue, Node and many others.
        </p>
      </footer>
    </section><style jsx>{`
      section {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        padding-top: 9rem;
        width: 112rem;
      }

      h2 {
        grid-column: 5 / span 4;
        grid-row: 1;
        margin-bottom: 5.5rem;
        text-align: center;
      }

      p {
        grid-column: 3 / span 4;
        grid-row: 2;
      }

      picture {
        grid-column: 2 / span 10;
        grid-row: 2;
        z-index: -1;
        margin-top: 5.5rem;
        height: 48rem;
      }

      img {
        height: 100%;
      }

      footer {
        grid-row: 3;
        grid-column: 1 / span 12;
        margin-top: 7rem;
      }

      footer h2,
      footer p {
        grid-column: 7 / span 5;
      }

      footer h2 {
        text-align: left;
        margin-bottom: 0.5rem;
      }

      .font_feature_1,
      .font_feature_2,
      .font_feature_3 {
        position: absolute;
      }

      .font_feature_1 {
        top: 36.875rem;
        left: 11.5rem;
      }

      .font_feature_2 {
        width: 21rem;
        height: 15rem;
        top: 27.375rem;
        left: 28.5rem;
      }

      .font_feature_3 {
        width: 18rem;
        height: 10rem;
        top: 9.875rem;
        left: 47.875rem;
        text-align: right;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        section {
          width: 83rem;
        }

        h2 {
          grid-column: 4 / span 6;
        }

        .font_feature_1 {
          left: 2.1875rem;
        }

        .font_feature_2 {
          left: 19.1875rem;
        }

        .font_feature_3 {
          left: 38.5rem;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        section {
          width: 77rem;
        }

        h2 {
          grid-column: 4 / span 6;
        }

        .font_feature_1 {
          left: 0.1875rem;
        }

        .font_feature_2 {
          left: 16.875rem;
        }

        .font_feature_3 {
          left: 36.5rem;
        }
      }

      @media (min-width: 368px) and (max-width: 1279px) {
        section {
          padding-top: 30rem;
          width: 59rem;
        }

        h2 {
          margin-bottom: 2.5rem;
        }

        picture {
          margin-top: 5rem;
          height: 32rem;
        }

        /* TODO: переписать как появятся картинки */
        .font_feature_1,
        .font_feature_2,
        .font_feature_3 {
          display: none;
        }

        footer {
          margin-top: 3.5rem;
        }

         footer h2 {
          margin-bottom: 0.8125rem;
        }
      }
    `}</style>
  </Fragment>

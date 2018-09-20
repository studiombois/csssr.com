import React, { Fragment } from 'react'

export default () =>
  <Fragment>
    <section className='grid-container'>
      <h2 id='competence-and-services' className='font_h2-slab'>
        We&nbsp;create web services for&nbsp;millions to&nbsp;use
      </h2>

      <p className='font_p24-strong'>
        We&rsquo;re engineers, and our true calling is&nbsp;to&nbsp;find the most elegant and economical solutions for business challenges. We&nbsp;use a&nbsp;variety of&nbsp;tools, technologies and programming languages, but more often than not, we&nbsp;use JavaScript.
      </p>

      {/* TODO: вставить правильную ссылку на картинку и нормальный alt */}
      <picture>
        <source media='(min-width: 1360px) and (max-width: 1919px)' srcSet='https://via.placeholder.com/1104x768' />
        <source media='(max-width: 1359px)' srcSet='https://via.placeholder.com/1024x768' />
        <img src='https://via.placeholder.com/1488x768' alt='' />
      </picture>

      <footer className='grid-container'>
        <h2 className='font_h2-regular'>
          Open source technologies only
        </h2>

        <p className='font_p16-regular'>
          We&nbsp;are the part of&nbsp;the global community of&nbsp;developers who use popular open source technologies and frameworks, such as&nbsp;React, Angular, Vue, Node and many others.
        </p>
      </footer>
    </section>

    <style jsx>{`
      section {
        margin-left: auto;
        margin-right: auto;
        padding-left: 8rem;
        padding-right: 8rem;
        padding-top: 18rem;
        width: 1920px;
      }

      h2 {
        grid-column: 5 / span 4;
        grid-row: 1;
        margin-bottom: 11rem;
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
        margin-top: 11rem;
      }

      footer {
        grid-row: 3;
        grid-column: 1 / span 12;
        margin-top: 14rem;
      }

      footer h2,
      footer p {
        grid-column: 7 / span 5;
      }

      footer h2 {
        text-align: left;
        margin-bottom: 1rem;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        section {
          width: 1360px;
          padding-left: 2rem;
          padding-right: 2rem;
        }

        h2 {
          grid-column: 4 / span 6;
        }
      }

      @media (max-width: 1359px) {
        section {
          padding-left: 3rem;
          padding-right: 3rem;
          width: 1280px;
        }

        h2 {
          grid-column: 4 / span 6;
        }
      }
    `}</style>
  </Fragment>

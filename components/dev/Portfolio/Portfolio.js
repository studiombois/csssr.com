import React, { Fragment } from 'react'
import { bool, arrayOf, shape, string, number } from 'prop-types'
import translate from '../../../utils/translate-wrapper'
import ProjectsList from './ProjectsList'
import ProjectsListMobile from './ProjectsListMobile'

const Portfolio = ({ t, isMobile, portfolio }) =>
  <Fragment>
    <article className='grid-container' id='portfolio'>
      <h2 className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('dev:portfolio.title') }} />
      <p className='font_subhead-regular' dangerouslySetInnerHTML={{ __html: t('dev:portfolio.text') }} />
      { isMobile
        ? portfolio.map(projectGroup =>
          <Fragment key={projectGroup.id}>
            <h3 dangerouslySetInnerHTML={{ __html: t(`dev:tabs.${projectGroup.id}`) }} />
            <div className='project-container'>
              <ProjectsListMobile projects={projectGroup.projects} />
            </div>
          </Fragment>
        )
        : <ProjectsList portfolio={portfolio} />
      }
    </article>
    <style jsx>{`
      article {
        margin-left: auto;
        margin-right: auto;
        padding-top: 8.125rem;
        width: 1792px;
      }

      h2,
      p {
        text-align: center;
      }

      h2 {
        grid-column: 4 / span 6;
      }

      p {
        grid-column: 4 / span 6;
        margin-top: 0.875rem;
        margin-bottom: 4.1875rem;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        article {
          width: 1328px;
        }

        h2,
        p {
          grid-column: 3 / span 8;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        article {
          width: 1232px;
        }

        h2,
        p {
          grid-column: 3 / span 8;
        }
      }

      @media (min-width: 768px) and (max-width: 1279px)  {
        article {
          padding-top: 5.8125rem;
          width: 944px;
        }

        p {
          margin-top: 0.625rem;
          margin-bottom: 2.1875rem;
        }

        @media (max-width: 1023px) {
          article {
            width: 59rem;
          }
        }
      }

      @media (max-width: 767px) {
        article {
          padding-top: 5.8125rem;
          width: 20.5rem;
        }

        h2,
        h3,
        p {
          grid-column: 1 / span 6;
        }

        p {
          margin-top: 0.625rem;
          margin-bottom: 0.3125rem;
        }

        h3 {
          height: 1.75rem;
          font-family: 'Roboto', 'Arial', sans-serif;
          font-size: 0.75rem;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: 1rem;
          letter-spacing: 0.09375rem;
          text-transform: uppercase;
          color: #345eff;
        }

        h3 {
          margin-top: 3.3125rem;
        }

        h3:first-of-type {
          margin-top: 2rem;
        }

        .project-container {
          grid-column: 1 / span 6;
          overflow-x: scroll;
        }
      }
    `}</style>
    <style jsx>{`
      :global(.ie11) article {
        -ms-grid-row: (auto)[4];
      }

      :global(.ie11) h2 {
        -ms-grid-column: 7;
        -ms-grid-column-span: 11;
        -ms-grid-row: 1;
      }

      :global(.ie11) p {
        -ms-grid-column: 7;
        -ms-grid-column-span: 11;
        -ms-grid-row: 2;
      }

      @media (min-width: 1360px) {
        :global(.ie11) h2,
        :global(.ie11) p {
          -ms-grid-column: 5;
          -ms-grid-column-span: 15;
        }
      }

      @media (max-width: 767px) {
        :global(.ie11) h2,
        :global(.ie11) h3,
        :global(.ie11) p {
          grid-column: 1 / span 6;
          -ms-grid-column: 1;
          -ms-grid-column-span: 11;
        }

        :global(.ie11) .project-container {
          -ms-grid-column: 1;
          -ms-grid-column-span: 11;
        }
      }
    `}</style>
  </Fragment>

Portfolio.propTypes = {
  isMobile: bool,
  porfolio: arrayOf(shape({
    id: string,
    projects: arrayOf(shape({
      id: string,
      type: string,
      slides: arrayOf(number),
      href: string,
    })),
  })),
}

export default translate()(Portfolio)

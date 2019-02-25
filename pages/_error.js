import React, { Fragment } from 'react'
import Link from 'next/link'
import css from 'styled-jsx/css'
import * as Sentry from '@sentry/node'
import withI18next from '../utils/withI18next'
import Common from '../components/Common'
import Settings from '../components/Settings'
import Text from '../components/Text'
import Head from '../components/Head'
import PictureForAllResolutions from '../components/PictureForAllResolutions'
import LogoIcon from '../static/icons/csssr_logo.svg'
import LineFromTopToBottomIcon from '../static/icons/lineFromTopToBottom.svg'
import NotFound from '../static/icons/notFound.svg'
import ServerError from '../static/icons/serverError.svg'
import navItems from '../data/error/navItems'

const titleLocalesByStatusCode = {
  404: 'error:errors.notFound.title',
  500: 'error:errors.serverError.title',
}

const subtitleLocalesByStatusCode = {
  404: 'error:errors.notFound.subtitle',
  500: 'error:errors.serverError.subtitle',
}

const codeIconByStatusCode = {
  404: <NotFound width='auto' height='100%' />,
  500: <ServerError width='auto' height='100%' />,
}

const picture = css.resolve`
  picture {
    grid-column: 2 / span 7;
    grid-row: 2 / span 10;
    margin-top: 1.5rem;
    z-index: -1;
    height: 51.5rem;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    picture {
      height: 38.5rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    picture {
      height: 35.5rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      height: 27rem;
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 1 / span 6;
      grid-row: 2;
      height: 16.5rem;
    }
  }
`

class MyError extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  renderNav = ({ sectionTitle, href }) =>
    <li key={sectionTitle}>
      <a
        href={href}
        className='font_burger-menu'
        dangerouslySetInnerHTML={{ __html: this.props.t(`${sectionTitle}`) }}
      /><style jsx>{`
        a {
          margin-top: 0;
          padding-bottom: 0;
          height: 3rem;
        }
      `}</style>
    </li>

  render() {
    const { t, lng: lngCodeFromI18n, statusCode, i18n } = this.props
    const lng = i18n.services.languageUtils.getLanguagePartFromCode(lngCodeFromI18n)
    const rootUrl = `/${lng}`

    if (!navItems[lng]) {
      Sentry.withScope(scope => {
        scope.setExtra('lngCodeFromI18n', lngCodeFromI18n)
        scope.setExtra('lng', lng)
        Sentry.captureMessage('Опять что-то не так с определением языка, смотри url и дополнительные параметры')
      })
    }

    return <Fragment>
      <Common />
      <Settings />
      <Text />
      <Head
        title={t('error:meta.title')}
        description={t('error:meta.description')}
      />

      <header className='grid-container'>
        <Link prefetch href={rootUrl}>
          <a>
            <LogoIcon width='100%' height='100%' />
          </a>
        </Link>
      </header>

      <main className={`grid-container error-code_${statusCode}`}>
        <h1
          className='font_h1-slab'
          dangerouslySetInnerHTML={{ __html: t(`${titleLocalesByStatusCode[statusCode]}`) }}
        />

        <PictureForAllResolutions
          className={picture.className}
          image={{ namespace: 'error', key: `${statusCode}`, alt: `${statusCode}` }}
        />

        <div className={`code-wrapper error-code_${statusCode}`}>
          {codeIconByStatusCode[statusCode]}
        </div>

        <h2
          className='font_subhead-slab'
          dangerouslySetInnerHTML={{ __html: [
            t(`${subtitleLocalesByStatusCode[statusCode]}`),
            statusCode === 500 ? '<a style="color: #345eff" href="mailto:sales@csssr.io">sales@csssr.io</a>' : null,
          ].join('') }}
        />
        {statusCode === 404 &&
          <Fragment>
            <div className='arrow-wrapper'>
              <LineFromTopToBottomIcon width='100%' height='100%' />
            </div>

            <ul>
              { navItems[lng].map(this.renderNav) }
            </ul>
          </Fragment>
        }

      </main><style jsx>{`
        main {
          padding-bottom: 4rem;
        }

        a {
          grid-column: 2 / span 2;
          margin-top: 5.25rem;
          width: 11.5rem;
          height: 2.875rem;
          color: black;
        }

        h1 {
          margin-top: 3.875rem;
          grid-column: 2 / span 7;
          grid-row: 1;
        }

        h2, ul {
          grid-column: 10 / span 2;
        }

        h2 {
          margin-top: -3.1875rem;
          grid-row: 2;
        }

        .error-code_500 h2 {
          grid-column: 9 / span 4;
        }

        ul {
          margin-top: -0.125rem;
          grid-row: 4;
        }

        .code-wrapper {
          grid-column: 2 / span 6;
          grid-row: 2 / span 10;
          margin-top: 2.5rem;
          width: calc(100% + 1rem);
          height: 25rem;
        }

        .arrow-wrapper {
          grid-column: 10 / span 1;
          grid-row: 3;
          margin-top: 1.5rem;
          width: 0.625rem;
          height: 3.875rem;
        }

        .grid-container {
          margin-left: auto;
          margin-right: auto;
          width: 1792px;
        }

        @media (min-width: 1360px) and (max-width: 1919px) {
          ul {
            grid-column: 10 / span 3;
          }

          .grid-container {
            width: 1328px;
          }

          .code-wrapper {
            margin-top: 3.5rem;
            width: 41.75rem;
            height: 18.625rem;
          }
        }

        @media (min-width: 1280px) and (max-width: 1359px) {
          ul {
            grid-column: 10 / span 3;
          }

          .grid-container {
            width: 1232px;
          }

          .code-wrapper {
            margin-top: 2.5rem;
            width: 41.75rem;
            height: 18.625rem;
          }

          .arrow-wrapper {
            grid-column: 10 / span 1;
            grid-row: 3;
            margin-top: 0;
            padding-top: 1.5rem;
            width: 0.625rem;
            height: 5.375rem;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) {
          .grid-container {
            width: 59rem;
          }

          ul {
            grid-column: 10 / span 3;
          }

          h1 {
            margin-top: 5.6875rem;
          }

          h2 {
            margin-top: -2.375rem;
          }

          .code-wrapper {
            margin-top: 2.5rem;
            width: 30.5rem;
            height: 13.625rem;
          }
        }

        @media (max-width: 767px) {
          main {
            padding-bottom: 2.875rem;
          }

          a {
            grid-column: 1 / span 3;
            margin-top: 3.625rem;
            width: 10rem;
            height: 2.5rem;
            color: black;
          }

          h1 {
            grid-column: 1 / span 6;
            grid-row: 1;
            margin-top: 3.6875rem;
          }

          h2 {
            margin-top: 2.625rem;
            grid-column: 1 / span 2;
            grid-row: 3;
          }

          .error-code_500 h2 {
            grid-column: 1 / span 4;
          }

          ul {
            grid-column: 1 / span 4;
            grid-row: 5;
            margin-top: 0.1875rem;
          }

          .arrow-wrapper {
            grid-column: 1;
            grid-row: 4;
            margin-top: 0;
            padding-top: 0rem;
            width: 0.625rem;
            height: 3.0625rem;
          }

          .code-wrapper {
            grid-column: 1 / span 5;
            grid-row: 2;
            margin-top: 3.5625rem;
            margin-left: 0.1875rem;
            width: 16.125rem;
            height: 7.25rem;
          }

          .error-code_500 .code-wrapper {
            margin-top: 0;
            margin-left: 0;
            width: 17.875rem;
            height: 8.5rem;
            width: 18.75rem;
            height: 8.9375rem;
          }

          .grid-container {
            width: 20.5rem;
          }
        }
      `}</style>
      {picture.styles}
    </Fragment>
  }
}

export default withI18next(['error'])(MyError)

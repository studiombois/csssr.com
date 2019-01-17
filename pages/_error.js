import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import withI18next from '../utils/withI18next'
import Common from '../components/Common'
import Settings from '../components/Settings'
import Text from '../components/Text'
import Head from '../components/Head'
import PictureForAllResolutions from '../components/PictureForAllResolutions'
import LogoIcon from '../static/icons/csssr_logo.svg'
import LineFromTopToBottomIcon from '../static/icons/lineFromTopToBottom.svg'
import NotFound from '../static/icons/notFound.svg'
import navItems from '../data/error/navItems'
import getISO639LanguageCode from '../utils/getISO639LanguageCode'


const localesByStatusCode = {
  404: 'error:errors.notFound.title',
}

const codeIconByStatusCode = {
  404: <NotFound width='auto' height='100%' />,
}

const picture = css.resolve`
  picture {
    grid-column: 2 / span 7;
    grid-row: 2 / span 10;
    z-index: -1;
    height: 51.5rem;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    picture {
      margin-top: 1.5rem;
      height: 38.5rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    picture {
      margin-top: 1.5rem;
      height: 35.5rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: 1.5rem;
      height: 27rem;
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 1 / span 6;
      grid-row: 2;
      margin-top: 1.5rem;
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
    const { t, lng: lngCodeFromI18n, statusCode } = this.props
    const lng = getISO639LanguageCode(lngCodeFromI18n)

    return <Fragment>
      <Common />
      <Settings />
      <Text />
      <Head
        title={t('error:head.title')}
        description={t('error:head.description')}
      />

      <header className='grid-container'>
        <a href={ lng === 'ru' ? '/ru' : '/en' }>
          <LogoIcon width='100%' height='100%' />
        </a>
      </header>

      <main className='grid-container'>
        <h1
          className='font_h1-slab'
          dangerouslySetInnerHTML={{ __html: t(`${localesByStatusCode[statusCode]}`) }}
        />

        <PictureForAllResolutions
          className={picture.className}
          image={{ namespace: 'error', key: '404', alt: t('error:imgAlt.notFound') }}
        />
        <div className='code-wrapper'>
          {codeIconByStatusCode[statusCode]}
        </div>

        <h2
          className='font_subhead-slab'
          dangerouslySetInnerHTML={{ __html: t('error:listTitle') }}
        />

        <div className='arrow-wrapper'>
          <LineFromTopToBottomIcon width='100%' height='100%' />
        </div>

        <ul>
          { navItems[lng].map(this.renderNav) }
        </ul>
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

        ul {
          margin-top: -0.125rem;
          grid-row: 4;
        }

        .code-wrapper {
          grid-column: 2 / span 6;
          grid-row: 4;
          margin-top: -5.5rem;
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
            margin-top: -4.5rem;
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
            margin-top: -6rem;
            margin-left: 0.75rem;
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
            margin-top: -5rem;
            margin-left: 0.5rem;
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

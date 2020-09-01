import React, { Fragment } from 'react'
import Link from 'next/link'
import * as Sentry from '@sentry/node'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import cn from 'classnames'

import styles from './ErrorPage.styles'
import Grid from '../ui-kit/core-design/Grid'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import DevTools from '../DevTools'
import Head from '../Head'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import { ReactComponent as LogoIcon } from '../../static/icons/csssr_logo.svg'
import { ReactComponent as LineFromTopToBottomIcon } from '../../static/icons/lineFromTopToBottom.svg'
import { ReactComponent as NotFound } from '../../static/icons/notFound.svg'

import navItems from '../../data/error/navItems'

import globalStyles from '../Layout/Layout.styles'
import { L10nConsumer } from '../../utils/l10nProvider'

const error404 = require.context('../../public/images/error/404?csssr-images')

class Error404Page extends React.Component {
  renderNav = ({ title, id, links }) => {
    const {
      l10n: { language, translations },
    } = this.props

    const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/

    if (id === 'solutions' && language === 'ru') return
    return (
      <span key={id}>
        <h3
          className="font_burger-menu"
          dangerouslySetInnerHTML={{ __html: title(translations) }}
        />

        {links && (
          <ul className="menu">
            {links.map(({ id, title, href }) => {
              if (id === 'express' && language === 'ru') return

              return (
                <li key={id}>
                  {linkRegExp.test(href) ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu-item"
                      href={href}
                      dangerouslySetInnerHTML={{ __html: title(translations) }}
                    />
                  ) : (
                    <Link href={`/${language}/${href}`}>
                      <a
                        className="menu-item"
                        dangerouslySetInnerHTML={{ __html: title(translations) }}
                      />
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </span>
    )
  }

  render() {
    const {
      className,
      l10n: { language, translations },
    } = this.props

    const rootUrl = `/${language}`

    if (!language) {
      Sentry.withScope((scope) => {
        scope.setExtra('language', language)
        Sentry.captureMessage(
          'Опять что-то не так с определением языка, смотри url и дополнительные параметры',
        )
      })
    }

    return (
      <Fragment>
        <Global styles={globalStyles} />
        <DevTools />

        <Head
          title={translations.error.meta.title}
          description={translations.error.meta.description}
        >
          <meta name="robots" content="noindex" />
        </Head>

        <Grid as="header" className={className}>
          <Link href={rootUrl}>
            <a className="logo">
              <LogoIcon width="100%" height="100%" />
            </a>
          </Link>
        </Grid>

        <Grid as="main" className={cn(className, `error-code_404`)}>
          <h1
            className="font_h1-slab"
            dangerouslySetInnerHTML={{ __html: translations.error.errors.notFound.title }}
          />

          <PictureSmart className="picture" requireImages={error404} />

          <div className={'code-wrapper'}>
            <NotFound width="auto" height="100%" />
          </div>

          <h2
            className="font_subhead-slab"
            dangerouslySetInnerHTML={{
              __html: translations.error.errors.notFound.subtitle,
            }}
          />
          <Fragment>
            <div className="arrow-wrapper">
              <LineFromTopToBottomIcon width="100%" height="100%" />
            </div>

            <div className="navList">{navItems.map(this.renderNav)}</div>
          </Fragment>
        </Grid>
      </Fragment>
    )
  }
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Error404Page)`
    ${styles}
  `),
)

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
import PictureForAllResolutions from '../PictureForAllResolutions'

import { ReactComponent as LogoIcon } from '../../static/icons/csssr_logo.svg'
import { ReactComponent as LineFromTopToBottomIcon } from '../../static/icons/lineFromTopToBottom.svg'
import { ReactComponent as NotFound } from '../../static/icons/notFound.svg'
import { ReactComponent as ServerError } from '../../static/icons/serverError.svg'

import navItems from '../../data/error/navItems'

import globalStyles from '../Layout/Layout.styles'
import { L10nConsumer } from '../../utils/l10nProvider'

const possibleStatusCodes = [404, 500]

const defaultStatusCode = 500

const errorNameByStatusCode = {
  404: 'notFound',
  500: 'serverError',
}

const codeIconByStatusCode = {
  404: <NotFound height="100%" />,
  500: <ServerError height="100%" />,
}

class ErrorPage extends React.Component {
  renderNav = ({ title, id, links }) => {
    const {
      l10n: { language, translations },
    } = this.props

    const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/

    if (id === 'products' && language === 'ru') return
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
                    <Link href={href}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="menu-item"
                        dangerouslySetInnerHTML={{ __html: title(translations) }}
                      />
                    </Link>
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

    const statusCode =
      possibleStatusCodes.indexOf(this.props.statusCode) !== -1
        ? this.props.statusCode
        : defaultStatusCode

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

        <Grid as="main" className={cn(className, `error-code_${statusCode}`)}>
          <h1
            className="font_h1-slab"
            dangerouslySetInnerHTML={{
              __html: translations.error.errors[errorNameByStatusCode[statusCode]].title,
            }}
          />

          <PictureForAllResolutions
            className="picture"
            image={{ namespace: 'error', key: `${statusCode}`, alt: `${statusCode}` }}
          />

          <div className={'code-wrapper'}>{codeIconByStatusCode[statusCode]}</div>

          <h2
            className="font_subhead-slab"
            dangerouslySetInnerHTML={{
              __html: [
                translations.error.errors[errorNameByStatusCode[statusCode]].subtitle,
                statusCode === 500
                  ? '<a style="color: #345eff" href="mailto:sales@csssr.io">sales@csssr.io</a>'
                  : null,
              ].join(''),
            }}
          />
          {statusCode === 404 && (
            <Fragment>
              <div className="arrow-wrapper">
                <LineFromTopToBottomIcon width="100%" height="100%" />
              </div>

              <div className="navList">{navItems.map((items) => this.renderNav(items))}</div>
            </Fragment>
          )}
        </Grid>
      </Fragment>
    )
  }
}

export default L10nConsumer(
  MsBrowserConsumer(styled(ErrorPage)`
    ${styles}
  `),
)

import React, { Fragment, useContext } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Header, getLocaleFromUrl, PageContent, getDevPathname } from '@csssr/csssr-shared-header'
import * as Sentry from '@sentry/node'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import cn from 'classnames'

import styles from './ErrorPage.styles'
import Grid from '../ui-kit/core-design/Grid'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import { DeviceContext } from '../../utils/deviceProvider'
import spaceOrigin from '../../utils/csssrSpaceOrigin'
import DevTools from '../DevTools'
import Head from '../Head'
import PictureForAllResolutions from '../PictureForAllResolutions'

import { ReactComponent as LineFromTopToBottomIcon } from '../../static/icons/lineFromTopToBottom.svg'
import { ReactComponent as NotFound } from '../../static/icons/notFound.svg'

import navItems from '../../data/error/navItems'

import globalStyles from '../Layout/Layout.styles'
import { L10nConsumer } from '../../utils/l10nProvider'

const Error404Page = ({ className, l10n, router }) => {
  const { language, translations } = l10n

  const renderNav = ({ title, id, links }) => {
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

  if (!language) {
    Sentry.withScope((scope) => {
      scope.setExtra('language', language)
      Sentry.captureMessage(
        'Опять что-то не так с определением языка, смотри url и дополнительные параметры',
      )
    })
  }

  const { isMobile } = useContext(DeviceContext)
  const appRootElement = typeof window === 'object' ? document.getElementById('__next') : null
  const lng = getLocaleFromUrl(router.asPath)
  const pathname = getDevPathname(router.asPath)

  return (
    <>
      <Global styles={globalStyles} />
      <DevTools />

      <Head title={translations.error.meta.title} description={translations.error.meta.description}>
        <meta name="robots" content="noindex" />
      </Head>

      <Header
        isMobile={isMobile}
        appRootElement={appRootElement}
        pathname={pathname}
        lng={lng}
        NextLink={Link}
        jobsDomain={spaceOrigin}
      />

      <PageContent>
        <Grid as="main" className={cn(className, `error-code_404`)}>
          <h1
            className="font_h1-slab"
            dangerouslySetInnerHTML={{ __html: translations.error.errors.notFound.title }}
          />

          <PictureForAllResolutions
            className="picture"
            image={{ namespace: 'error', key: '404', alt: '404' }}
          />

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

            <div className="navList">{navItems.map(renderNav)}</div>
          </Fragment>
        </Grid>
      </PageContent>
    </>
  )
}

export default withRouter(
  L10nConsumer(
    MsBrowserConsumer(styled(Error404Page)`
      ${styles}
    `),
  ),
)

import React, { useContext } from 'react'
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

import { ReactComponent as ServerError } from '../../static/icons/serverError.svg'

import globalStyles from '../Layout/Layout.styles'
import { L10nConsumer } from '../../utils/l10nProvider'

const possibleStatusCodes = [500]

const defaultStatusCode = 500

const errorNameByStatusCode = {
  500: 'serverError',
}

const codeIconByStatusCode = {
  500: <ServerError width="100%" height="100%" />,
}

const ErrorPage = ({ className, l10n, router }) => {
  const { language, translations } = l10n

  const statusCode = possibleStatusCodes.indexOf(statusCode) !== -1 ? statusCode : defaultStatusCode

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
                  ? '<a style="color: #345eff" href="mailto:launch@csssr.com">launch@csssr.com</a>'
                  : null,
              ].join(''),
            }}
          />
        </Grid>
      </PageContent>
    </>
  )
}

export default withRouter(
  L10nConsumer(
    MsBrowserConsumer(styled(ErrorPage)`
      ${styles}
    `),
  ),
)

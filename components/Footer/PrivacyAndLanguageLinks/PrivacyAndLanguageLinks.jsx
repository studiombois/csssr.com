import React from 'react'
import { string, func } from 'prop-types'
import { withRouter } from 'next/router'
import styled from '@emotion/styled'

import styles from './PrivacyAndLanguageLinks.styles'
import Link from '../../ui-kit/core-design/Link'
import Text from '../../ui-kit/core-design/Text'
import translate from '../../../utils/translate-wrapper'
import { PagesListConsumer } from '../../../utils/pagesListProvider'
import getPagePathnameInLanguage from '../../../common/get-page-pathname-in-language'

const PrivacyAndLanguageLinks = ({ className, lng, t, pagesList, router: { pathname } }) => {
  const lngToRedirect = lng === 'ru' ? 'en' : 'ru'
  const lngChange = {
    en: 'en',
    ru: 'ru'
  }

  const otherLanguagePathname = getPagePathnameInLanguage(pathname, lngToRedirect, pagesList)

  return (
    <ul className={className}>
      <li>
        <Link className="link ru-link" href={otherLanguagePathname}>
          <Text
            className="link-text"
            dangerouslySetInnerHTML={{ __html: lngChange.ru }}
            type="perforator"
            size="s"
          />
        </Link>

        <Link className="link en-link" href={otherLanguagePathname}>
          <Text
            className="link-text"
            dangerouslySetInnerHTML={{ __html: lngChange.en }}
            type="perforator"
            size="s"
          />
        </Link>
      </li>

      <li>
        <Link className="link" href={`/${lng}/privacy-policy`} isNextLink>
          <Text
            className="link-text"
            dangerouslySetInnerHTML={{ __html: t('common:footer.privacy') }}
            type="perforator"
            size="s"
          />
        </Link>

        {lng === 'en' && (
          <Link className="link policy-link" href={`/${lng}/cookies-policy`} isNextLink>
            <Text
              className="link-text"
              dangerouslySetInnerHTML={{ __html: t('common:footer.cookies') }}
              type="perforator"
              size="s"
            />
          </Link>
        )}
      </li>
    </ul>
  )
}
PrivacyAndLanguageLinks.propTypes = {
  className: string,
  lng: string,
  t: func,
}

export default translate(
  withRouter(
    PagesListConsumer(
      styled(PrivacyAndLanguageLinks)`
        ${styles}
      `,
    ),
  ),
)

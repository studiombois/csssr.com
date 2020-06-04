import React from 'react'
import { string } from 'prop-types'
import { withRouter } from 'next/router'
import styled from '@emotion/styled'

import styles from './PrivacyAndLanguageLinks.styles'
import Link from '../../ui-kit/core-design/Link'
import Text from '../../ui-kit/core-design/Text'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { PagesListConsumer } from '../../../utils/pagesListProvider'
import getPagePathnameInLanguage from '../../../common/get-page-pathname-in-language'

const PrivacyAndLanguageLinks = ({
  className,
  l10n: { language, translations },
  pagesList,
  router: { pathname },
}) => {
  const languageToRedirect = language === 'ru' ? 'en' : 'ru'

  const otherLanguagePathname = getPagePathnameInLanguage(pathname, languageToRedirect, pagesList)

  return (
    <ul className={className}>
      <li>
        <Link className="link language-link" href={otherLanguagePathname}>
          <Text
            className="link-text"
            dangerouslySetInnerHTML={{ __html: languageToRedirect }}
            type="perforator"
            size="s"
          />
        </Link>
      </li>

      <li>
        <Link className="link" href={`/${language}/privacy-policy`} isNextLink>
          <Text
            className="link-text"
            dangerouslySetInnerHTML={{ __html: translations.common.footer.privacy }}
            type="perforator"
            size="s"
          />
        </Link>

        {language === 'en' && (
          <Link className="link policy-link" href={`/${language}/cookies-policy`} isNextLink>
            <Text
              className="link-text"
              dangerouslySetInnerHTML={{ __html: translations.common.footer.cookies }}
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
}

export default L10nConsumer(
  withRouter(
    PagesListConsumer(
      styled(PrivacyAndLanguageLinks)`
        ${styles}
      `,
    ),
  ),
)

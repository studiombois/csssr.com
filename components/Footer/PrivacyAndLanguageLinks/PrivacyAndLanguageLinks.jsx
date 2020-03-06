import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './PrivacyAndLanguageLinks.styles'

import Link from '../../ui-kit/core-design/Link'
import Text from '../../ui-kit/core-design/Text'
import translate from '../../../utils/translate-wrapper'

const PrivacyAndLanguageLinks = ({ className, lng, t }) => {
  const lngToRedirect = lng === 'ru' ? 'en' : 'ru'

  return (
    <ul className={className}>
      <li>
        <Link className="link" href={`/${lngToRedirect}`}>
          <Text
            className="link-text"
            dangerouslySetInnerHTML={{ __html: lngToRedirect }}
            type="perforator"
            size="s"
          />
        </Link>
      </li>

      <li>
        <Link className="link" href={`${lng}/privacy-policy`} isNextLink>
          <Text
            className="link-text"
            dangerouslySetInnerHTML={{ __html: t('common:footer.privacy') }}
            type="perforator"
            size="s"
          />
        </Link>
      </li>

      {lng === 'en' && (
        <li>
          <Link className="link" href={`${lng}/cookies-policy`} isNextLink>
            <Text
              className="link-text"
              dangerouslySetInnerHTML={{ __html: t('common:footer.cookies') }}
              type="perforator"
              size="s"
            />
          </Link>
        </li>
      )}
    </ul>
  )
}
PrivacyAndLanguageLinks.propTypes = {
  className: string,
  lng: string,
  t: func,
}

export default translate()(styled(PrivacyAndLanguageLinks)`
  ${styles}
`)

import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './LinksList.styles'

import Link from '../../../ui-kit/core-design/Link'

import { L10nConsumer } from '../../../../utils/l10nProvider'

const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/
const LinksList = ({
  className,
  linksGroupName,
  links,
  l10n: { translations, language, locale },
}) => (
  <ul className={className}>
    {links.map(({ id, testId, href, useLocale }) => {
      if (language === 'ru' && id === 'express') {
        return
      }

      return (
        <li key={id}>
          {linkRegExp.test(href) ? (
            <Link
              href={href}
              className="link"
              type="list"
              size="s"
              target="_blank"
              rel="noopener nofollow"
              dangerouslySetInnerHTML={{ __html: translations.common.footer[linksGroupName][id] }}
              data-testid={testId}
            />
          ) : (
            <Link
              href={`/${useLocale ? locale : language}/${href}`}
              className="link"
              type="list"
              size="s"
              dangerouslySetInnerHTML={{ __html: translations.common.footer[linksGroupName][id] }}
              data-testid={testId}
              isNextLink
            />
          )}
        </li>
      )
    })}
  </ul>
)

LinksList.propTypes = {
  className: string,
  linksGroupName: string,
  links: arrayOf(
    shape({
      id: string,
      href: string,
    }),
  ),
}

export default L10nConsumer(styled(LinksList)`
  ${styles}
`)

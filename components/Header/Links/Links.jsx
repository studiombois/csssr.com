import React from 'react'
import { withRouter } from 'next/router'
import { string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Links.styles'

import Link from '../../ui-kit/core-design/Link'

import headerLinks from '../../../data/headerLinks'

import { L10nConsumer } from '../../../utils/l10nProvider'

const { links } = headerLinks
const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/
const Links = ({ className, router, l10n: { translations, locale, language } }) => (
  <ul className={className}>
    {links.map(({ title, href }) => {
      const loc = href === 'jobs' ? locale : language

      return (
        <li key={title}>
          {linkRegExp.test(href) ? (
            <Link
              data-testid={`Header:link.${title(translations)}`}
              href={`${href}/${language}`}
              className="link"
              type="top_menu"
              target="_blank"
            >
              {title(translations)}
            </Link>
          ) : (
            <Link
              data-testid={`Header:link.${href}`}
              href={`/${loc}/${href}`}
              className={cn('link', {
                link_active: router.pathname === `/${loc}/${href}`,
              })}
              isNextLink
              type="top_menu"
            >
              {title(translations)}
            </Link>
          )}
        </li>
      )
    })}
  </ul>
)

Links.propTypes = {
  className: string,
}

export default withRouter(
  L10nConsumer(styled(Links)`
    ${styles}
  `),
)

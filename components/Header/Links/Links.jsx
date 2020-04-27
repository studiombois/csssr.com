import React from 'react'
import { withRouter } from 'next/router'
import { func, string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Links.styles'

import Link from '../../ui-kit/core-design/Link'

import headerLinks from '../../../data/headerLinks'

import translate from '../../../utils/translate-wrapper'

const { links } = headerLinks
const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/
const Links = ({ className, router, t, lng, locale }) => (
  <ul className={className}>
    {links.map(({ title, href }) => {
      const loc = href === 'jobs' ? locale : lng

      if (lng === 'ru' && href === 'https://blog.csssr.com') {
        return
      }

      return (
        <li key={title}>
          {linkRegExp.test(href) ? (
            <Link href={`${href}/${lng}`} type="top_menu" target="_blank">
              {t(title)}
            </Link>
          ) : (
            <Link
              href={`/${loc}/${href}`}
              className={cn('link', {
                link_active: router.pathname === `/${loc}/${href}`,
              })}
              isNextLink
              type="top_menu"
            >
              {t(title)}
            </Link>
          )}
        </li>
      )
    })}
  </ul>
)

Links.propTypes = {
  className: string,
  t: func,
}

export default withRouter(
  translate(styled(Links)`
    ${styles}
  `),
)

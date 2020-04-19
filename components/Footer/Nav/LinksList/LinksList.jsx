import React from 'react'
import { arrayOf, func, shape, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './LinksList.styles'

import Link from '../../../ui-kit/core-design/Link'

import translate from '../../../../utils/translate-wrapper'

const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/
const LinksList = ({ className, linksGroupName, links, t, lng, locale }) => (
  <ul className={className}>
    {links.map(({ id, href, useLocale }) => {
      if (lng === 'ru' && id === 'express') {
        return
      }

      return (
        <li key={id}>
          {linkRegExp.test(href) ? (
            <Link
              href={href}
              type="list"
              size="s"
              target="_blank"
              rel="noopener nofollow"
              dangerouslySetInnerHTML={{ __html: t(`common:footer.${linksGroupName}.${id}`) }}
            />
          ) : (
            <Link
              href={`/${useLocale ? locale : lng}/${href}`}
              type="list"
              size="s"
              dangerouslySetInnerHTML={{ __html: t(`common:footer.${linksGroupName}.${id}`) }}
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
  t: func,
  lng: string,
}

export default translate(styled(LinksList)`
  ${styles}
`)

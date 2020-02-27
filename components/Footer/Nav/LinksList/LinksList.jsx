import React from 'react'
import { string, func, arrayOf, shape } from 'prop-types'
import styled from '@emotion/styled'
import styles from './LinksList.styles'

import Link from '../../../ui-kit/core-design/Link'

import translate from '../../../../utils/translate-wrapper'

const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/
const LinksList = ({ className, linksGroupName, links, t, lng }) => (
  <ul className={className}>
    {links.map(({ id, href }) => (
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
            href={`/${lng}/${href}`}
            type="list"
            size="s"
            dangerouslySetInnerHTML={{ __html: t(`common:footer.${linksGroupName}.${id}`) }}
            isNextLink
          />
        )}
      </li>
    ))}
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

export default translate()(styled(LinksList)`
  ${styles}
`)

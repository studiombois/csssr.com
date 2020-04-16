import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Nav.styles'

import LinksList from './LinksList'
import Heading from '../../ui-kit/core-design/Heading'

import { nav } from '../../../data/footerLinks'
import translate from '../../../utils/translate-wrapper'

const Nav = ({ className, t, lng }) => (
  <nav className={className}>
    {nav.map(({ id, links }) => {
      if (lng === 'ru' && id ==='products') {
        return
      }

      return (
        <div key={id} className="nav-item">
          <Heading
            as="p"
            className="title"
            type="regular"
            size="s"
            dangerouslySetInnerHTML={{ __html: t(`common:footer.${id}.title`) }}
          />

          <LinksList linksGroupName={id} links={links} />
        </div>
    )})}
  </nav>
)

Nav.propTypes = {
  className: string,
  t: func,
}

export default translate(styled(Nav)`
  ${styles}
`)

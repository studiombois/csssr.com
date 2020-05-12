import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './SocialLinks.styles'

import { socials } from '../../../data/footerLinks'
import translate from '../../../utils/translate-wrapper'

const SocialLinks = ({ className, lng }) => (
  <ul className={cn(className, `${className}_${lng}`)}>
    {socials.map(({ id, href, icon: Icon }) => {
      if (lng !== 'ru') {
        if (id === 'soundcloud' || id === 'telegram' || id === 'twitter' || id === 'vk') {
          return
        }
      }
      return (
        <li key={id}>
          <a href={href} target="_blank" rel="noopener nofollow">
            <Icon />
          </a>
        </li>
      )
    })}
  </ul>
)

SocialLinks.propTypes = {
  className: string,
  lng: string,
}

export default translate(styled(SocialLinks)`
  ${styles}
`)

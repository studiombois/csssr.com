import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './SocialLinks.styles'

import { socials } from '../../../data/footerLinks'
import translate from '../../../utils/translate-wrapper'

const SocialLinks = ({ className, lng }) => (
  <ul className={className}>
    {socials.map(({ id, href, icon: Icon }) => {
      if (lng !== 'ru') {
        if (id === 'soundcloud' || id === 'telegram' || id === 'twitter' || id === 'vk') {
          return
        }
      }
      return (
        <li key={id}>
          <a href={href} target="_blank" rel="noopener nofollow">
            <Icon className={`social-icon icon_${id}`}/>
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

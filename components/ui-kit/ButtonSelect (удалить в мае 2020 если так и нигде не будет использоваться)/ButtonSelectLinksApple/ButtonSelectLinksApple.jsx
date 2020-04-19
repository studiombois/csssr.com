import React from 'react'
import { arrayOf, bool, func, shape, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './ButtonSelectLinksApple.styles'
import translate from '../../../../utils/translate-wrapper'

const iconsByLabel = {
  Email: null,
  Telegram: null,
  Messenger: null,
}

const ButtonSelectLinksApple = (props) => {
  const handleLinkClick = (dataLayerEvent) => () => {
    props.onLinkClick(dataLayerEvent)
  }

  return props.links.map(({ label, localeLink, href, external, dataLayerEvent, testid }) => (
    <li className={props.className} key={label}>
      <a
        href={href}
        onClick={handleLinkClick(dataLayerEvent)}
        target={external ? '_blank' : null}
        rel="noopener"
        data-testid={testid}
      >
        {iconsByLabel[label]}
        <span>
          {props.t(label === 'Messenger' ? 'common:floatingButton.facebookMessenger' : localeLink)}
        </span>
      </a>
    </li>
  ))
}

ButtonSelectLinksApple.propTypes = {
  onLinkClick: func,
  t: func,
  links: arrayOf(
    shape({
      label: string,
      localeLink: string,
      href: string,
      external: bool,
      dataLayerEvent: string,
    }),
  ),
}

export default styled(translate(ButtonSelectLinksApple))`
  ${styles}
`

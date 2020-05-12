import React from 'react'
import { arrayOf, bool, func, shape, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './ButtonSelectLinksApple.styles'
import { L10nConsumer } from '../../../../utils/l10nProvider'

const iconsByLabel = {
  Email: null,
  Telegram: null,
  Messenger: null,
}

const ButtonSelectLinksApple = ({ onLinkClick, links, className, l10n: { translations } }) => {
  const handleLinkClick = (dataLayerEvent) => () => {
    onLinkClick(dataLayerEvent)
  }

  return links.map(({ label, localeLink, href, external, dataLayerEvent, testid }) => (
    <li className={className} key={label}>
      <a
        href={href}
        onClick={handleLinkClick(dataLayerEvent)}
        target={external ? '_blank' : null}
        rel="noopener nofollow"
        data-testid={testid}
      >
        {iconsByLabel[label]}
        <span>
          {label === 'Messenger'
            ? translations.common.floatingButton.facebookMessenger
            : localeLink(translations)}
        </span>
      </a>
    </li>
  ))
}

ButtonSelectLinksApple.propTypes = {
  onLinkClick: func,
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

export default styled(L10nConsumer(ButtonSelectLinksApple))`
  ${styles}
`

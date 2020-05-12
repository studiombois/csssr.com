import React from 'react'
import Transition from 'react-transition-group/Transition'
import { bool, func } from 'prop-types'
import OutsideClickHandler from 'react-outside-click-handler'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './ButtonSelectList.styles'
import ButtonSelectLinksApple from '../ButtonSelectLinksApple'
import ButtonSelectLinksDefault from '../ButtonSelectLinksDefault'
import { L10nConsumer } from '../../../../utils/l10nProvider'

const links = [
  {
    label: 'Messenger',
    localeLink: (t) => t.common.floatingButton.messenger,
    href: 'https://messenger.com/t/csssr',
    external: true,
    dataLayerEvent: 'floating_button_fb',
    testid: 'moreLinks:link.messenger',
  },
  {
    label: 'Telegram',
    localeLink: (t) => t.common.floatingButton.telegram,
    href: 'http://t.me/sputnik_one_bot',
    external: true,
    dataLayerEvent: 'floating_button_tg',
    testid: 'moreLinks:link.telegram',
  },
  {
    label: 'Email',
    localeLink: (t) => t.common.floatingButton.email,
    href: 'mailto:sales@csssr.com',
    dataLayerEvent: 'floating_button_email',
    testid: 'moreLinks:link.email',
  },
]

const ButtonSelectList = (props) => {
  const {
    className,
    isDropdownVisible,
    isAppleDevice,
    onLinkClick,
    onCloseButtonClick,
    l10n: { translations },
  } = props
  const animationDuration = 300
  const Links = isAppleDevice ? ButtonSelectLinksApple : ButtonSelectLinksDefault

  return (
    <Transition in={isDropdownVisible} timeout={animationDuration}>
      {(animationState) =>
        isDropdownVisible && (
          <OutsideClickHandler onOutsideClick={onCloseButtonClick} display="flex">
            <ul
              className={cn(className, `is_${animationState}`, {
                is_appleDevice: isAppleDevice,
              })}
            >
              <li
                dangerouslySetInnerHTML={{ __html: translations.common.floatingButton.question }}
                data-testid="buttonSelect:text.question"
              />
              <Links links={links} onLinkClick={onLinkClick} />
              <li>
                <button
                  className="close-button"
                  dangerouslySetInnerHTML={{ __html: translations.common.floatingButton.closeText }}
                  onClick={onCloseButtonClick}
                  data-testid="moreLinks:button.closeDropdown"
                />
              </li>
            </ul>
          </OutsideClickHandler>
        )
      }
    </Transition>
  )
}

ButtonSelectList.propTypes = {
  isDropdownVisible: bool,
  isAppleDevice: bool,
  onLinkClick: func,
  onCloseButtonClick: func,
}

export default L10nConsumer(styled(ButtonSelectList)`
  ${styles}
`)

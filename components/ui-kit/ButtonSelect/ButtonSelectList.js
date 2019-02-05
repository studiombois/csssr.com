import React, { Fragment } from 'react'
import Transition from 'react-transition-group/Transition'
import translate from '../../../utils/translate-wrapper'
import { string, bool, func } from 'prop-types'
import ClickOutside from '../ClickOutside'
import ButtonSelectLinksApple from './ButtonSelectLinksApple'
import ButtonSelectLinksDefault from './ButtonSelectLinksDefault'
import appleListStyles from './styles/stylesForAppleList'

const links = [{
  label: 'Messenger',
  localeLink: 'common:floatingButton.messenger',
  href: 'https://m.me/csssr',
  external: true,
  dataLayerEvent: 'floating_button_fb',
}, {
  label: 'Telegram',
  localeLink: 'common:floatingButton.telegram',
  href: 'http://t.me/sputnik_one_bot',
  external: true,
  dataLayerEvent: 'floating_button_tg',
}, {
  label: 'Email',
  localeLink: 'common:floatingButton.email',
  href: 'mailto:sales@csssr.com',
  dataLayerEvent: 'floating_button_form',
}]

const ButtonSelectList = props => {
  const { t, lng, isDropdownVisible, isAppleDevice, onLinkClick, onCloseButtonClick } = props
  const animationDuration = 300
  const Links = isAppleDevice ? ButtonSelectLinksApple : ButtonSelectLinksDefault
  const unstableStyles = isAppleDevice ? appleListStyles : ''

  return (
    <Fragment>
      <Transition in={isDropdownVisible} timeout={animationDuration}>
        {animationState => isDropdownVisible &&
          <ClickOutside onOutsideClick={onCloseButtonClick}>
            <ul className={`is_${animationState}`}>
              <li dangerouslySetInnerHTML={{ __html: t('common:floatingButton.question') }} />
              <Links links={links} onLinkClick={onLinkClick} />
              <li>
                <button
                  className='close-button'
                  dangerouslySetInnerHTML={{ __html: t('common:floatingButton.closeText') }}
                  onClick={onCloseButtonClick}
                />
              </li>
            </ul>
          </ClickOutside>
        }
      </Transition>
      <style jsx>{`
        ul {
          margin-bottom: 0.5rem;
          width: 312px;
          height: 0;
          padding: 0;
          background-color: #fff;
          transition: height 0.3s ease-out, border 0.3s ease-out;
          overflow: hidden;
        }

        ul.is_entering {
          height: 0
        }

        ul.is_entered {
          padding-top: 0.9375rem;
          padding-bottom: 0.5rem;
          height: 11.5rem;
          border: 1px solid black;
        }

        li:first-child,
        li:last-child {
          padding: 0.5rem 1rem;
        }

        li:first-child {
          padding-top: 0;
          padding-bottom: 0.5rem;
          font-family: Roboto;
          font-size: 0.875rem;
          font-weight: 300;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.5rem;
          letter-spacing: normal;
          color: #4a4a4a;
        }

        li:last-child {
          display: none;
        }

        @media (min-width: 1360px) and (max-width: 1919px) {
          ul {
            width: 248px;
          }
        }

        @media (min-width: 1280px) and (max-width: 1359px) {
          ul {
            width: 14.5rem;
          }

          ul.is_entered {
            height: 13rem;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) {
          ul {
            width: 14.5rem;
          }

          ul.is_entered {
            height: 13rem;
          }
        }

        @media (max-width: 767px) {
          ul {
            margin-bottom: 0;
            width: 100%;
            background-color: white;
          }

          ul.is_entered {
            margin-top: auto;
            padding-top: 0;
            padding-bottom: 0.5rem;
            height: 20.5rem;
            border: none;
          }

          li:first-child {
            padding-top: 1.5rem;
            padding-bottom: 0;
            cursor: default;
          }

          li:last-child button {
            padding-top: 1.5rem;
            padding-bottom: 1rem;
            display: block;
            width: 100%;
            height: auto;
            font-family: Roboto;
            font-size: 1rem;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.5rem;
            letter-spacing: normal;
            color: #a7a7a8;
            text-align: left;
            border: none;
            background-color: white;
            -webkit-tap-highlight-color: transparent;
          }

          li:last-child {
            margin: 0;
            display: block;
            background-color: white;
          }
      `}</style>
      <style jsx>{`
        @media (min-width: 1360px) and (max-width: 1919px) {
          ul.is_entered {
            height: ${lng === 'ru' ? 13 : 11.5}rem;
          }
        }
      `}</style>
      <style jsx>{unstableStyles}</style>
    </Fragment>
  )
}

ButtonSelectList.propTypes = {
  lng: string,
  isDropdownVisible: bool,
  isAppleDevice: bool,
  onLinkClick: func,
  onCloseButtonClick: func,
  t: func,
}

export default translate()(ButtonSelectList)

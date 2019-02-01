import React from 'react'
import { func } from 'prop-types'
import translate from '../../../utils/translate-wrapper'

const links = [{
  label: 'Messenger',
  localeLink: 'common:floatingButton.facebookMessenger',
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

const iconsByLabel = {
  Email: null,
  Telegram: null,
  Messenger: null,
}

const ButtonSelectLinksDefault = props => {
  const handleLinkClick = dataLayerEvent => () => {
    props.onLinkClick(dataLayerEvent)
  }

  return (
    links.map(({ label, localeLink, href, external, dataLayerEvent }) =>
      <li key={label}>
        <a
          href={href}
          onClick={handleLinkClick(dataLayerEvent)}
          target={external ? '_blank' : null}
          rel='noopener'
        >
          {iconsByLabel[label]}
          <span>
            {props.t(localeLink)}
          </span>
        </a>
        <style jsx>{`
          li {
            margin: 0;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            height: 2.5rem;
            border-top: 0.0625rem solid #cccccc;
            text-align: center;
            background-color: white;
          }

          li:nth-child(4) {
            border-radius: 0 0 0.375rem 0.375rem;
          }

          span {
            font-family: Roboto;
            font-size: 1rem;
            font-weight: normal;
            line-height: 1.5rem;
            color: #4a4a4a;
          }

          a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 1.5rem;
            font-family: Roboto;
            font-size: 1rem;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.5rem;
            letter-spacing: normal;
            color: #345eff;
            cursor: pointer;
          }

          a[href^="mailto"] span {
            color: #f45b53;
          }
        `}</style>
      </li>
    )
  )
}

ButtonSelectLinksDefault.propTypes = {
  onLinkClick: func,
  t: func,
}

export default translate()(ButtonSelectLinksDefault)

import React from 'react'
import { func } from 'prop-types'
import translate from '../../../utils/translate-wrapper'
import Email from '../../../static/icons/email.svg'
import Telegram from '../../../static/icons/telegram.svg'
import Messenger from '../../../static/icons/messenger.svg'
import HandsetWithBackground from '../../../static/icons/handsetWithBackground.svg'

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
  label: 'Call',
  localeLink: 'common:floatingButton.call',
  href: 'tel: +7-499-704-38-27',
  dataLayerEvent: 'floating_button_phone',
}, {
  label: 'Email',
  text: 'Email',
  localeLink: 'common:floatingButton.email',
  href: 'mailto:sales@csssr.com',
  dataLayerEvent: 'floating_button_form',
}]

const iconsByLabel = {
  Email: <Email />,
  Telegram: <Telegram />,
  Messenger: <Messenger />,
  Call: <HandsetWithBackground />,
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
            padding: 0.5rem 1rem;
          }

          li:nth-child(4) {
            display: none;
          }

          a {
            display: flex;
            align-items: center;
            height: 1.5rem;
            font-family: Roboto;
            font-size: 1rem;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.5rem;
            letter-spacing: normal;
            color: black;
            cursor: pointer;
          }

          span {
            margin-left: 0.5rem;
            display: inline-block;
            font-weight: 300;
            text-decoration: underline;
            color: #345eff;
          }

          a[href^="mailto"] span {
            color: #f45b53;
          }

          @media (max-width: 767px) {
            li {
              margin-top: 1.5rem;
            }

            li:nth-child(4) {
              display: block;
            }

            li:hover {
              background-color: white;
            }

            a {
              color: black;
            }

            span {
              color: #4a4a4a;
              text-decoration: none;
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

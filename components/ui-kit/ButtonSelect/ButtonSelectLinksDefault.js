import React from 'react'
import { func, arrayOf, shape, string, bool } from 'prop-types'
import translate from '../../../utils/translate-wrapper'
import Email from '../../../static/icons/email.svg'
import Telegram from '../../../static/icons/telegram.svg'
import Messenger from '../../../static/icons/messenger.svg'

const iconsByLabel = {
  Email: <Email />,
  Telegram: <Telegram />,
  Messenger: <Messenger />,
}

const ButtonSelectLinksDefault = props => {
  const handleLinkClick = dataLayerEvent => () => {
    props.onLinkClick(dataLayerEvent)
  }

  return (
    props.links.map(({ label, localeLink, href, external, dataLayerEvent, testid }) =>
      <li key={label}>
        <a
          href={href}
          onClick={handleLinkClick(dataLayerEvent)}
          target={external ? '_blank' : null}
          rel='noopener'
          data-testid={testid}
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

          a {
            display: flex;
            align-items: center;
            height: 1.5rem;
            font-family: 'Roboto', 'Arial', sans-serif;
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
  links: arrayOf(shape({
    label: string,
    localeLink: string,
    href: string,
    external: bool,
    dataLayerEvent: string,
  })),
}

export default translate()(ButtonSelectLinksDefault)

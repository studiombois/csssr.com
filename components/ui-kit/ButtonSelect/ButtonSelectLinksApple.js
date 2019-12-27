import React from 'react'
import { func, arrayOf, shape, string, bool } from 'prop-types'
import translate from '../../../utils/translate-wrapper'

const iconsByLabel = {
  Email: null,
  Telegram: null,
  Messenger: null,
}

const ButtonSelectLinksDefault = props => {
  const handleLinkClick = dataLayerEvent => () => {
    props.onLinkClick(dataLayerEvent)
  }

  return props.links.map(({ label, localeLink, href, external, dataLayerEvent, testid }) => (
    <li key={label}>
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
          font-family: 'Roboto', 'Arial', sans-serif;
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
          font-family: 'Roboto', 'Arial', sans-serif;
          font-size: 1rem;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.5rem;
          letter-spacing: normal;
          color: #345eff;
          cursor: pointer;
        }

        a[href^='mailto'] span {
          color: #f45b53;
        }
      `}</style>
    </li>
  ))
}

ButtonSelectLinksDefault.propTypes = {
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

export default translate()(ButtonSelectLinksDefault)

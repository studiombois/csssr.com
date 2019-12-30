import React, { Fragment, Component } from 'react'
import cn from 'classnames'
import { arrayOf, string, func } from 'prop-types'
import translate from '../../utils/translate-wrapper'

class Tabs extends Component {
  render() {
    const { t, tabs, activeTabId, onClick } = this.props
    return (
      <Fragment>
        <ul>
          {tabs.map(tabId => (
            <li className={cn({ active: tabId === activeTabId })} key={tabId}>
              <button
                onClick={() => onClick(tabId)}
                value={tabId}
                dangerouslySetInnerHTML={{ __html: t(`dev:tabs.${tabId}`) }}
              />
            </li>
          ))}
        </ul>
        <style jsx>{`
          ul {
            grid-column: 1 / span 12;
            display: flex;
            justify-content: center;
          }

          li button {
            font-family: 'Roboto', 'Arial', sans-serif;
            font-size: 0.75rem;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1rem;
            letter-spacing: 0.09375rem;
            text-transform: uppercase;
            color: #345eff;
          }

          li:hover button {
            color: #223fdb;
            cursor: pointer;
          }

          button {
            background: none;
            border: none;
          }

          li:not(:last-child) {
            margin-right: 2.5rem;
          }

          li.active {
            border-bottom: 2px solid #345eff;
            pointer-events: none;
          }
        `}</style>
        <style jsx>
          {`
            :global(.ie11) ul {
              -ms-grid-column: 1;
              -ms-grid-column-span: 23;
              -ms-grid-row: 3;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

Tabs.propTypes = {
  tabs: arrayOf(string),
  onClick: func,
}

export default translate()(Tabs)

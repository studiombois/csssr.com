import React, { Fragment } from 'react'
import cn from 'classnames'
import { arrayOf, string, func } from 'prop-types'
import translate from '../../utils/translate-wrapper'

const Tabs = ({ t, tabs, activeTabId, onClick }) =>
  <Fragment>
    <ul>
      {tabs.map(tabId =>
        <li className={cn({ active: tabId === activeTabId })} key={tabId}>
          <button
            onClick={() => onClick(tabId)}
            value={tabId}
            dangerouslySetInnerHTML={{ __html: t(`dev:tabs.${tabId}`) }}
          />
        </li>
      )}
    </ul>
    <style jsx>{`
      ul {
        grid-column: 1 / span 12;
        display: flex;
        justify-content: center;
      }

      li button {
        font-family: Roboto;
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
  </Fragment>

Tabs.propTypes = {
  tabs: arrayOf(string),
  onClick: func,
}

export default translate()(Tabs)

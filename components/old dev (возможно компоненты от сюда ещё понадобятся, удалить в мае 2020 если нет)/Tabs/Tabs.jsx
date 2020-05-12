import React from 'react'
import cn from 'classnames'
import { arrayOf, func, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Tabs.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Tabs = ({ className, tabs, activeTabId, onClick, l10n: { translations } }) => (
  <ul className={className}>
    {tabs.map((tabId) => (
      <li className={cn({ active: tabId === activeTabId })} key={tabId}>
        <button
          onClick={() => onClick(tabId)}
          value={tabId}
          dangerouslySetInnerHTML={{ __html: translations.dev.tabs[tabId] }}
        />
      </li>
    ))}
  </ul>
)

Tabs.propTypes = {
  tabs: arrayOf(string),
  onClick: func,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Tabs)`
    ${styles}
  `),
)

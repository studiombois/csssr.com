import React from 'react'
import cn from 'classnames'
import { arrayOf, string, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Tabs.styles'
import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Tabs = ({ className, t, tabs, activeTabId, onClick }) => (
  <ul className={className}>
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
)

Tabs.propTypes = {
  tabs: arrayOf(string),
  onClick: func,
}

export default translate(
  MsBrowserConsumer(styled(Tabs)`
    ${styles}
  `),
)

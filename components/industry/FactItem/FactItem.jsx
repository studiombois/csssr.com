import React from 'react'
import { func, string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './FactItem.styles'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import { L10nConsumer } from '../../../utils/l10nProvider'

const FactItem = ({ number, text, className, itemClassName, l10n: { translations } }) => (
  <div className={cn(className, itemClassName)}>
    <Heading
      as="p"
      type="slab"
      size="l"
      dangerouslySetInnerHTML={{ __html: number(translations) }}
      className="fact-number"
    />

    <Text
      type="strong"
      className="fact-text"
      size="m"
      dangerouslySetInnerHTML={{ __html: text(translations) }}
    />
  </div>
)

FactItem.propTypes = {
  number: func,
  text: func,
  itemClassName: string,
}

export default L10nConsumer(
  styled(FactItem)`
    ${styles}
  `,
)

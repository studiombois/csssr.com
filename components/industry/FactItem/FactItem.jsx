import React from 'react'
import { func, string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './FactItem.styles'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import translate from '../../../utils/translate-wrapper'

const FactItem = ({ t, number, text, className, itemClassName }) => (
  <div className={cn(className, itemClassName)}>
    <Heading
      as="p"
      type="slab"
      size="l"
      dangerouslySetInnerHTML={{ __html: t(number) }}
      className="fact-number"
    />

    <Text
      type="strong"
      className="fact-text"
      size="m"
      dangerouslySetInnerHTML={{ __html: t(text) }}
    />
  </div>
)

FactItem.propTypes = {
  t: func,
  number: string,
  text: string,
  itemClassName: string,
}

export default translate(
  styled(FactItem)`
    ${styles}
  `,
)

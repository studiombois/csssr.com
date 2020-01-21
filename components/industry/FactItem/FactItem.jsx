import React from 'react'
import { string, func } from 'prop-types'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const FactItem = ({ t, number, text, itemClassName }) => (
  <div className={itemClassName}>
    <Heading
      as="p"
      type="slab"
      size="l"
      dangerouslySetInnerHTML={{ __html: t(number) }}
      className="fact-number"
    />

    <Text type="strong" dangerouslySetInnerHTML={{ __html: t(text) }} />
  </div>
)

FactItem.propTypes = {
  t: func,
  number: string,
  text: string,
  itemClassName: string,
}

export default translate()(MsBrowserConsumer(FactItem))

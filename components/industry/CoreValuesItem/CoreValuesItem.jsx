import React from 'react'
import { array, object, string } from 'prop-types'
import { L10nConsumer } from '../../../utils/l10nProvider'
import cn from 'classnames'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'

const CoreValuesItem = ({ images, imgAlt, title, text, itemClassName, l10n: { translations } }) => (
  <div className={cn('card', itemClassName)}>
    <PictureForAllResolutions
      images={images}
      fallback={images['desktop.all'].png}
      alt={imgAlt(translations)}
      className={cn(itemClassName, 'image')}
    />
    <Heading className={cn(itemClassName, 'title')} as="h3" type="regular" size="m">
      {title(translations)}
    </Heading>

    <Text
      type="regular"
      size="m"
      dangerouslySetInnerHTML={{ __html: text(translations) }}
      className={cn(itemClassName, 'text')}
    />
  </div>
)

CoreValuesItem.propTypes = {
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default L10nConsumer(CoreValuesItem)

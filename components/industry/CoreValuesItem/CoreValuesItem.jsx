import React from 'react'
import { array, func, object, string } from 'prop-types'
import translate from '../../../utils/translate-wrapper'
import cn from 'classnames'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'

const CoreValuesItem = ({ t, images, imgAlt, title, text, itemClassName }) => (
  <div className={cn('card', itemClassName)}>
    <PictureForAllResolutions
      images={images}
      fallback={images['desktop.all'].png}
      alt={imgAlt}
      className={cn(itemClassName, 'image')}
    />
    <Heading className={cn(itemClassName, 'title')} as="h3" type="regular" size="m">
      {t(title)}
    </Heading>

    <Text
      type="regular"
      size="m"
      dangerouslySetInnerHTML={{ __html: t(text) }}
      className={cn(itemClassName, 'text')}
    />
  </div>
)

CoreValuesItem.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default translate(CoreValuesItem)

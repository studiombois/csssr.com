import React from 'react'
import { string, object, array, func } from 'prop-types'
import translate from '../../../utils/translate-wrapper'
import cn from 'classnames'
import Text from '../../ui-kit/core-design/Text'
import Link from '../../ui-kit/core-design/Link'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'

const CoreValuesItem = ({ t, lng, images, imgAlt, link, href, text, itemClassName }) => (
  <>
    <PictureForAllResolutions
      images={images}
      fallback={images['desktop.all'].png}
      alt={imgAlt}
      className={cn(itemClassName, 'image')}
    />

    <Link
      isNextLink
      href={`/${lng}/core-values`}
      as={`/${lng}/core-values${href}`}
      type="list"
      size="m"
      scroll
      dangerouslySetInnerHTML={{ __html: t(link) }}
      className={cn(itemClassName, 'link')}
    />

    <Text
      type="regular"
      dangerouslySetInnerHTML={{ __html: t(text) }}
      className={cn(itemClassName, 'text')}
    />
  </>
)

CoreValuesItem.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default translate()(CoreValuesItem)

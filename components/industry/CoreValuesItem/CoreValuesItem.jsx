import React from 'react'
import { string, object, array, func } from 'prop-types'
import NextLink from 'next/link'
import translate from '../../../utils/translate-wrapper'
import cn from 'classnames'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import ArrowIcon from '../../../static/icons/main/arrow.svg'

const CoreValuesItem = ({ t, images, imgAlt, title, text, itemClassName }) => (
  <NextLink href="/">
    <a className={cn('card', itemClassName)}>
      <PictureForAllResolutions
        images={images}
        fallback={images['desktop.all'].png}
        alt={imgAlt}
        className={cn(itemClassName, 'image')}
      />
      <Heading className={cn(itemClassName, 'title')} as="h3" type="regular" size="m">
        {t(title)}
        <ArrowIcon className="icon" />
      </Heading>

      <Text
        type="regular"
        size="m"
        dangerouslySetInnerHTML={{ __html: t(text) }}
        className={cn(itemClassName, 'text')}
      />
    </a>
  </NextLink>
)

CoreValuesItem.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default translate()(CoreValuesItem)

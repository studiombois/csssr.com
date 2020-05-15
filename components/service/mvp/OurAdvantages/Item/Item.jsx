import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Item.styles'
import { L10nConsumer } from '../../../../../utils/l10nProvider'

import Heading from '../../../../ui-kit/core-design/Heading'
import Text from '../../../../ui-kit/core-design/Text'
import Link from '../../../../ui-kit/core-design/Link'
import PictureForAllResolutions from '../../../../ui-kit/PictureForAllResolutions'

const Item = ({ className, l10n: { translations, language }, groupId, itemId, link, images }) => (
  <div className={className}>
    <PictureForAllResolutions
      className="picture"
      images={images}
      fallback={images['desktop.all'].png}
      alt={translations.mvp.imgAlt.ourAdvantages[groupId][itemId]}
    />

    <Heading
      className="title"
      as="h3"
      type="regular"
      size="m"
      dangerouslySetInnerHTML={{
        __html: translations.mvp.ourAdvantages.advantages[groupId][itemId].title,
      }}
    />

    <Text
      className="description"
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{
        __html: translations.mvp.ourAdvantages.advantages[groupId][itemId].description,
      }}
    />

    {link && (
      <Link
        className="link"
        href={`/${language}/${link}`}
        type="list"
        size="m"
        isNextLink
        dangerouslySetInnerHTML={{
          __html: translations.mvp.ourAdvantages.advantages[groupId][itemId].link,
        }}
      />
    )}
  </div>
)

Item.propTypes = {
  className: string,
}

export default L10nConsumer(styled(Item)`
  ${styles}
`)

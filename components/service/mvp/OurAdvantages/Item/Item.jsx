import React, { Fragment } from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import styles from './Item.styles'
import translate from '../../../../../utils/translate-wrapper'

import Heading from '../../../../ui-kit/core-design/Heading'
import Text from '../../../../ui-kit/core-design/Text'
import Link from '../../../../ui-kit/core-design/Link'
import PictureForAllResolutions from '../../../../ui-kit/PictureForAllResolutions'

import unescapeHtmlEntities from '../../../../../utils/unescapeHtmlEntities'

const Item = ({ className, t, lng, id, link, images }) => (
  <div className={className}>
    <PictureForAllResolutions
      className="picture"
      images={images}
      fallback={images['desktop.all'].png}
      alt={t(`mvp:imageAlt.ourAdvantages.${id}`)}
    />

    <Heading
      className="title"
      as="h3"
      type="regular"
      size="m"
      dangerouslySetInnerHTML={{
        __html: t(`mvp:ourAdvantages.advantages.${id}.title`),
      }}
    />

    <Text
      className="description"
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{
        __html: t(`mvp:ourAdvantages.advantages.${id}.description`),
      }}
    />

    {link && (
      <Link
        className="link"
        href={`/${lng}/${link}`}
        type="list"
        size="m"
        isNextLink
        dangerouslySetInnerHTML={{
          __html: t(`mvp:ourAdvantages.advantages.${id}.link`),
        }}
      />
    )}
  </div>
)

Item.propTypes = {
  className: string,
  t: func,
  lng: string,
}

export default translate(styled(Item)`
  ${styles}
`)

import React from 'react'
import { func, string } from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import styles from './Item.styles'
import translate from '../../../../../utils/translate-wrapper'

import SubHeading from '../../../../ui-kit/core-design/SubHeading'
import Text from '../../../../ui-kit/core-design/Text'
import Link from '../../../../ui-kit/core-design/Link'

import unescapeHtmlEntities from '../../../../../utils/unescapeHtmlEntities'

const Item = ({ className, t, id, lng, link }) => (
  <div className={className}>
    <SubHeading
      className="title"
      type="slab"
      as="h3"
      dangerouslySetInnerHTML={{ __html: t(`mvp:process.stages.${id}.title`) }}
    />

    {link ? (
      <Text className="description" as="p" type="strong" size="m">
        {unescapeHtmlEntities(t(`mvp:process.stages.${id}.description.0`))}
        <Link
          key="link"
          href={`/${lng}/${link}`}
          type="list"
          size="m"
          css={css`
            display: inline-block;
          `}
          isNextLink
          dangerouslySetInnerHTML={{
            __html: t(`mvp:process.stages.${id}.link`),
          }}
        />
        {unescapeHtmlEntities(t(`mvp:process.stages.${id}.description.1`))}
      </Text>
    ) : (
      <Text
        className="description"
        as="p"
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{
          __html: t(`mvp:process.stages.${id}.description`),
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

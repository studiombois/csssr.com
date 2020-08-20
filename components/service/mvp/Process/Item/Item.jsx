import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import styles from './Item.styles'
import { L10nConsumer } from '../../../../../utils/l10nProvider'

import SubHeading from '../../../../ui-kit/core-design/SubHeading'
import Text from '../../../../ui-kit/core-design/Text'
import Link from '../../../../ui-kit/core-design/Link'

import unescapeHtmlEntities from '../../../../../utils/unescapeHtmlEntities'

const Item = ({ className, id, link, l10n: { translations, language } }) => (
  <div className={className}>
    <SubHeading
      className="title"
      type="slab"
      as="h3"
      dangerouslySetInnerHTML={{ __html: translations.mvp.process.stages[id].title }}
    />

    {link ? (
      <Text className="description" as="p" type="strong" size="m">
        {unescapeHtmlEntities(translations.mvp.process.stages[id].description[0])}
        <Link
          key="link"
          href={`/${language}/${link}`}
          type="list"
          size="m"
          css={css`
            display: inline-block;
          `}
          isNextLink
          dangerouslySetInnerHTML={{
            __html: translations.mvp.process.stages[id].link.title,
          }}
          data-testid={translations.mvp.process.stages[id].link.testid}
        />
        {unescapeHtmlEntities(translations.mvp.process.stages[id].description[1])}
      </Text>
    ) : (
      <Text
        className="description"
        as="p"
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{
          __html: translations.mvp.process.stages[id].description,
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

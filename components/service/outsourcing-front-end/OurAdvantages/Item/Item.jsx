import React, { Fragment } from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import styles from './Item.styles'
import { L10nConsumer } from '../../../../../utils/l10nProvider'

import Heading from '../../../../ui-kit/core-design/Heading'
import Text from '../../../../ui-kit/core-design/Text'
import Link from '../../../../ui-kit/core-design/Link'

const Item = ({ className, l10n: { translations, language }, groupId, itemId, link, images }) => (
  <div className={className}>
    <PictureSmart
      className="picture"
      requireImages={images}
      alt={translations.outsourcingFrontEnd.imgAlt.ourAdvantages[groupId][itemId]}
      loading="lazy"
    />

    <Heading
      className="title"
      as="h3"
      type="regular"
      size="m"
      dangerouslySetInnerHTML={{
        __html: translations.outsourcingFrontEnd.ourAdvantages.advantages[groupId][itemId].title,
      }}
    />
    <Fragment>
      <Text
        className="description"
        as="p"
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{
          __html:
            translations.outsourcingFrontEnd.ourAdvantages.advantages[groupId][itemId].description,
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
            __html: translations.outsourcingFrontEnd.ourAdvantages.advantages[groupId][itemId].link,
          }}
          data-testid={
            translations.outsourcingFrontEnd.ourAdvantages.advantages[groupId][itemId].testId
          }
        />
      )}
    </Fragment>
  </div>
)

Item.propTypes = {
  className: string,
}

export default L10nConsumer(styled(Item)`
  ${styles}
`)

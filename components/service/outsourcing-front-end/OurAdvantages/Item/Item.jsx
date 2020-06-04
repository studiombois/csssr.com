import React, { Fragment } from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import styles from './Item.styles'
import { L10nConsumer } from '../../../../../utils/l10nProvider'

import Heading from '../../../../ui-kit/core-design/Heading'
import Text from '../../../../ui-kit/core-design/Text'
import Link from '../../../../ui-kit/core-design/Link'
import PictureForAllResolutions from '../../../../ui-kit/PictureForAllResolutions'

import unescapeHtmlEntities from '../../../../../utils/unescapeHtmlEntities'

const Item = ({ className, l10n: { translations, language }, groupId, itemId, link, images }) => (
  <div className={className}>
    <PictureForAllResolutions
      className="picture"
      images={images}
      fallback={images['desktop.all'].png}
      alt={translations.outsourcingFrontEnd.imgAlt.ourAdvantages[groupId][itemId]}
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

    {link && link === '/en/service/express-front-end' && language === 'en' ? (
      <Text className="description" as="p" type="strong" size="m">
        {unescapeHtmlEntities(
          translations.outsourcingFrontEnd.ourAdvantages.advantages[groupId][itemId].description[0],
        )}
        <Link
          key="link"
          href={link}
          type="list"
          size="m"
          css={css`
            display: inline-block;
          `}
          isNextLink
          dangerouslySetInnerHTML={{
            __html: translations.outsourcingFrontEnd.ourAdvantages.advantages[groupId][itemId].link,
          }}
        />
        {unescapeHtmlEntities(
          translations.outsourcingFrontEnd.ourAdvantages.advantages[groupId][itemId].description[1],
        )}
      </Text>
    ) : (
      <Fragment>
        <Text
          className="description"
          as="p"
          type="strong"
          size="m"
          dangerouslySetInnerHTML={{
            __html:
              translations.outsourcingFrontEnd.ourAdvantages.advantages[groupId][itemId]
                .description,
          }}
        />

        {!link || (link === '/en/service/express-front-end' && language === 'ru') ? null : (
          <Link
            className="link"
            href={`/${language}/${link}`}
            type="list"
            size="m"
            isNextLink
            dangerouslySetInnerHTML={{
              __html:
                translations.outsourcingFrontEnd.ourAdvantages.advantages[groupId][itemId].link,
            }}
          />
        )}
      </Fragment>
    )}
  </div>
)

Item.propTypes = {
  className: string,
}

export default L10nConsumer(styled(Item)`
  ${styles}
`)

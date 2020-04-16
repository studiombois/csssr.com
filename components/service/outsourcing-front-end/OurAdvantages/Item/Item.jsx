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
      alt={t(`outsourcingFrontEnd:imageAlt.ourAdvantages.${id}`)}
    />

    <Heading
      className="title"
      as="h3"
      type="regular"
      size="m"
      dangerouslySetInnerHTML={{
        __html: t(`outsourcingFrontEnd:ourAdvantages.advantages.${id}.title`),
      }}
    />

    {link && link === '/en/service/express-front-end' && lng === 'en' ? (
      <Text className="description" as="p" type="strong" size="m">
        {unescapeHtmlEntities(
          t(`outsourcingFrontEnd:ourAdvantages.advantages.${id}.description.0`),
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
            __html: t(`outsourcingFrontEnd:ourAdvantages.advantages.${id}.link`),
          }}
        />
        {unescapeHtmlEntities(
          t(`outsourcingFrontEnd:ourAdvantages.advantages.${id}.description.1`),
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
            __html: t(`outsourcingFrontEnd:ourAdvantages.advantages.${id}.description`),
          }}
        />

        {!link || link === '/en/service/express-front-end' && lng === 'ru' ? null : (
          <Link
            className="link"
            href={`/${lng}/${link}`}
            type="list"
            size="m"
            isNextLink
            dangerouslySetInnerHTML={{
              __html: t(`outsourcingFrontEnd:ourAdvantages.advantages.${id}.link`),
            }}
          />
        )}
      </Fragment>
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

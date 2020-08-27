import React, { Fragment } from 'react'
import { bool, func, string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Card.styles'

import NextLink from 'next/link'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const Card = ({
  l10n: { translations },
  className,
  id,
  testId,
  title,
  description,
  href,
  images,
  imagesHovered,
  isNextLink,
  isLink,
  children,
  isMobile,
  isTablet,
}) => {
  const CardBody = () => (
    <Fragment>
      <div className={cn('picture-wrap', { 'picture-wrap_radio': id === 'radio' })}>
        <PictureSmart
          className={cn('card-picture', `card-picture_${id}`)}
          requireImages={images}
          alt={translations.main.imgAlt[id]}
        />

        {!isMobile && !isTablet && imagesHovered && (
          <PictureSmart
            className={'card-picture-hovered'}
            requireImages={imagesHovered}
            alt={translations.main.imgAlt[id]}
          />
        )}
      </div>

      {id === 'radio' ? (
        <a className="card-link" href={href} target="_blank" rel="noopener nofollow">
          <Heading
            className="card-title"
            as="h3"
            dangerouslySetInnerHTML={{ __html: title(translations) }}
            type="regular"
            size="m"
          />
        </a>
      ) : (
        <Heading
          className="card-title"
          as="h3"
          dangerouslySetInnerHTML={{ __html: title(translations) }}
          type="regular"
          size="m"
        />
      )}

      <Text
        className="card-description"
        as="p"
        dangerouslySetInnerHTML={{ __html: description(translations) }}
        type="regular"
        size="m"
      />

      <div className="break" />
    </Fragment>
  )

  if (isLink && id !== 'radio') {
    return (
      <a className={cn('card', className)} href={href} target="_blank" rel="noopener nofollow">
        <CardBody />
        {children}
      </a>
    )
  }

  if (isNextLink) {
    return (
      <NextLink href={href}>
        <a className={cn('card', className)} data-testid={testId}>
          <CardBody />
          {children}
        </a>
      </NextLink>
    )
  }

  return (
    <div className={cn('card', className)}>
      <CardBody />
      {children}
    </div>
  )
}

Card.propTypes = {
  className: string,
  id: string,
  testId: string,
  title: func,
  description: func,
  href: string,
  isLink: bool,
  next: bool,
  isMobile: bool,
  isTablet: bool,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Card)`
      ${styles}
    `),
  ),
)

import React, { Fragment } from 'react'
import { bool, func, string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Card.styles'

import NextLink from 'next/link'
import Heading from '../ui-kit/core-design/Heading'
import Text from '../ui-kit/core-design/Text'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import { L10nConsumer } from '../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../utils/deviceProvider'

const Card = ({
  l10n: { translations, language },
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
  alt,
}) => {
  const CardBody = () => (
    <Fragment>
      <div
        className={cn('picture-wrap', { 'picture-wrap_radio': id === 'radio' })}
        data-testid={testId}
      >
        <PictureSmart
          className={cn('card-picture', `card-picture_${id}`)}
          requireImages={images}
          alt={alt(translations)}
          testId={`Project:${id}.img`}
        />

        {!isMobile && !isTablet && imagesHovered && (
          <PictureSmart
            className={'card-picture-hovered'}
            requireImages={imagesHovered}
            alt={alt(translations)}
            testId={`Project:${id}.img-hovered`}
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
            data-testid={`Project:${id}.title`}
          />
        </a>
      ) : (
        <Heading
          className="card-title"
          as="h3"
          dangerouslySetInnerHTML={{ __html: title(translations) }}
          type="regular"
          size="m"
          data-testid={`Project:${id}.title`}
        />
      )}

      <Text
        className="card-description"
        as="p"
        dangerouslySetInnerHTML={{ __html: description(translations) }}
        type="regular"
        size="m"
        data-testid={`Project:${id}.text`}
      />

      <div className="break" />
    </Fragment>
  )

  if (isLink && id !== 'radio') {
    const url = id === 'blog' ? `${href}/${language}` : href

    return (
      <a
        className={cn('card', className)}
        href={url}
        target="_blank"
        rel="noopener nofollow"
        data-testid={testId}
      >
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
  alt: func,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Card)`
      ${styles}
    `),
  ),
)

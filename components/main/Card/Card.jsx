import React, { Fragment } from 'react'
import { string, func, bool } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Card.styles'

import NextLink from 'next/link'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'

import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const Card = ({
  className,
  id,
  title,
  description,
  href,
  images,
  imagesHovered,
  fallback,
  t,
  isNextLink,
  isLink,
  children,
  isMobile,
  isTablet,
}) => {
  const CardBody = () => (
    <Fragment>
      <div className={cn('picture-wrap', { 'picture-wrap_radio': id === 'radio' })}>
        <PictureForAllResolutions
          className={cn('card-picture', `card-picture_${id}`)}
          images={images}
          fallback={fallback}
          alt={t(`main:imageAlt.${id}`)}
        />

        {!isMobile && !isTablet && imagesHovered && (
          <PictureForAllResolutions
            className={'card-picture-hovered'}
            images={imagesHovered}
            fallback={fallback}
            alt={t(`main:imageAlt.${id}`)}
          />
        )}
      </div>

      {id === 'radio' ? (
        <a className="card-link" href={href} target="_blank" rel="noopener nofollow">
          <Heading
            className="card-title"
            as="h3"
            dangerouslySetInnerHTML={{ __html: t(title) }}
            type="regular"
            size="m"
          />
        </a>
      ) : (
        <Heading
          className="card-title"
          as="h3"
          dangerouslySetInnerHTML={{ __html: t(title) }}
          type="regular"
          size="m"
        />
      )}

      <Text
        className="card-description"
        as="p"
        dangerouslySetInnerHTML={{ __html: t(description) }}
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
        <a className={cn('card', className)}>
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
  title: string,
  description: string,
  href: string,
  lng: string,
  isLink: bool,
  next: bool,
  isMobile: bool,
  isTablet: bool,
  t: func,
}

export default translate(
  DeviceConsumer(
    MsBrowserConsumer(styled(Card)`
      ${styles}
    `),
  ),
)

import React, { Fragment } from 'react'
import { string, func, bool } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Card.styles'

import NextLink from 'next/link'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'

import ArrowIcon from '../../../static/icons/main/arrow.svg'

import translate from '../../../utils/translate-wrapper'

const Card = ({
  className,
  id,
  title,
  description,
  href,
  images,
  fallback,
  t,
  isNextLink,
  isLink,
  children,
}) => {
  const CardBody = () => (
    <Fragment>
      <PictureForAllResolutions
        className={cn('card-picture', `card-picture_${id}`)}
        images={images}
        fallback={fallback}
        alt={t(`main:imageAlt.${id}`)}
      />

      <Heading
        className="card-title"
        as="h3"
        dangerouslySetInnerHTML={{ __html: t(title) }}
        type="regular"
        size="m"
      />

      <Text
        className="card-description"
        as="p"
        dangerouslySetInnerHTML={{ __html: t(description) }}
        type="regular"
        size="m"
      />

      <ArrowIcon className="card-icon" />
      <div className="break" />
    </Fragment>
  )

  if (isLink) {
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
  t: func,
}

export default styled(translate()(Card))`
  ${styles}
`

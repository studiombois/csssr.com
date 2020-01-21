import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Industry.styles'

import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'

import ArrowIcon from '../../../../static/icons/main/arrow.svg'

import translate from '../../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

const Industry = ({ className, id, href, images, lng, t }) => {
  return (
    <a href={`${lng}/industry/${href}`} className={cn('industry', className)}>
      <PictureForAllResolutions
        className="picture"
        images={images}
        fallback={images['desktop.l'].png}
        alt={t(`main:imageAlt.${id}`)}
      />

      <Heading
        className="title"
        as="h3"
        dangerouslySetInnerHTML={{ __html: t(`main:industries.${id}.title`) }}
        type="regular"
        size="m"
      />

      <ArrowIcon className="icon" />

      <Text
        className="description"
        as="p"
        dangerouslySetInnerHTML={{ __html: t(`main:industries.${id}.description`) }}
        type="regular"
        size="m"
      />
    </a>
  )
}

Industry.propTypes = {
  className: string,
  id: string,
  href: string,
  lng: string,
  t: func,
}

export default styled(translate()(MsBrowserConsumer(Industry)))`
  ${styles}
`

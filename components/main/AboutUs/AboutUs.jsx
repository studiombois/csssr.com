import React, { useState } from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import cn from 'classnames'
import styles, { loveBackgroundImagesStyles } from './AboutUs.styles'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import Grid from '../../ui-kit/core-design/Grid'
import Link from '../../ui-kit/core-design/Link'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import Picture from '../../ui-kit/Picture'

import facts from '../../../data/main/aboutUs/facts'
import images from '../../../data/main/aboutUs/images'

import translate from '../../../utils/translate-wrapper'
import unescapeHtmlEntities from '../../../utils/unescapeHtmlEntities'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const AboutUs = ({ className, isMobile, t, lng }) => {
  const [visibleImage, setVisibleImage] = useState(null)
  const isDesktop = !isMobile
  const handleHover = visibleImage => event => {
    if (!isDesktop) {
      event.preventDefault()
      return
    }

    setVisibleImage(visibleImage)
  }

  return (
    <Grid as="article" className={cn('about-us', className)}>
      <Heading
        className="about-us-title"
        as="h2"
        dangerouslySetInnerHTML={{ __html: t('main:aboutUs.title') }}
        type="slab"
        size="m"
      />

      <aside
        className={cn('picture-wrapper', {
          'picture-wrapper_volleyball': visibleImage === 'volleyball',
          'picture-wrapper_elbrus': visibleImage === 'elbrus',
        })}
      >
        <PictureForAllResolutions
          className={cn('picture', 'picture_love')}
          images={lng === 'ru' ? images.love_ru : images.love_en}
          fallback={
            lng === 'ru' ? images.love_ru['desktop.all'].png : images.love_en['desktop.all'].png
          }
          alt={t('main:imageAlt.aboutUs')}
        />

        {/* <Picture
          className={cn('picture', 'picture_volleyball')}
          images={images.volleyball}
          fallback={images.volleyball.jpg}
          alt={t('main:imageAlt.volleyball')}
        /> */}

        <Picture
          className={cn('picture', 'picture_elbrus')}
          images={images.elbrus}
          fallback={images.elbrus.jpg}
          alt={t('main:imageAlt.elbrus')}
        />
      </aside>

      <SubHeading
        className="about-us-description"
        as="p"
        type="slab"
        dangerouslySetInnerHTML={{ __html: t('main:aboutUs.description') }}
      />

      {facts.map(({ id }) => (
        <div className="fact" key={id}>
          <Heading
            className="fact-title"
            as="h3"
            dangerouslySetInnerHTML={{ __html: t(`main:aboutUs.${id}.title`) }}
            type="slab"
            size="l"
          />

          <Text className="fact-description" as="p" type="strong" size="m">
            {id === 'fact4' && (
              <span
                className="italic"
                onMouseOver={handleHover('elbrus')}
                onMouseLeave={handleHover(null)}
              >
                {t(`main:aboutUs.${id}.hero`)}
              </span>
            )}
            <span dangerouslySetInnerHTML={{ __html: t(`main:aboutUs.${id}.description`) }} />
          </Text>
        </div>
      ))}

      {/* <Link
        className="link"
        href={`${lng}/about-us`}
        type="list"
        size="m"
        dangerouslySetInnerHTML={{ __html: t('main:aboutUs.link') }}
        onMouseOver={handleHover('volleyball')}
        onMouseLeave={handleHover(null)}
        isNextLink
      /> */}

      <Global styles={loveBackgroundImagesStyles} />
    </Grid>
  )
}

AboutUs.propTypes = {
  className: string,
  t: func,
}

export default translate(
  DeviceConsumer(
    MsBrowserConsumer(styled(AboutUs)`
      ${styles}
    `),
  ),
)

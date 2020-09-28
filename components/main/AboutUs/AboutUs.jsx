import React, { useState } from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import cn from 'classnames'
import styles, { loveBackgroundImagesStyles } from './AboutUs.styles'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import Grid from '../../ui-kit/core-design/Grid'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import facts from '../../../data/main/aboutUs/facts'
import images from '../../../data/main/aboutUs/images'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const AboutUs = ({ className, isMobile, l10n: { translations, language } }) => {
  const [visibleImage, setVisibleImage] = useState(null)
  const isDesktop = !isMobile
  const handleHover = (visibleImage) => (event) => {
    if (!isDesktop) {
      event.preventDefault()
      return
    }

    setVisibleImage(visibleImage)
  }

  return (
    <Grid as="article" className={cn('about-us', className)} data-testid="Home:block.about-us">
      <Heading
        className="about-us-title"
        as="h2"
        dangerouslySetInnerHTML={{ __html: translations.main.aboutUs.title }}
        type="slab"
        size="m"
      />

      <aside
        className={cn('picture-wrapper', {
          'picture-wrapper_volleyball': visibleImage === 'volleyball',
          'picture-wrapper_elbrus': visibleImage === 'elbrus',
        })}
      >
        <PictureSmart
          className={cn('picture', 'picture_love')}
          requireImages={language === 'ru' ? images.love_ru : images.love_en}
          alt={translations.main.imgAlt.aboutUs}
        />

        {/* <Picture
          className={cn('picture', 'picture_volleyball')}
          images={images.volleyball}
          fallback={images.volleyball.jpg}
          alt={translations.main.imgAlt.volleyball}
        /> */}

        <PictureSmart
          className={cn('picture', 'picture_elbrus')}
          requireImages={images.elbrus}
          alt={translations.main.imgAlt.elbrus}
          testId="Home:img.elbrus"
        />
      </aside>

      <SubHeading
        className="about-us-description"
        as="p"
        type="slab"
        dangerouslySetInnerHTML={{ __html: translations.main.aboutUs.description }}
      />

      {facts.map(({ id }) => (
        <div className="fact" key={id}>
          <Heading
            className="fact-title"
            as="h3"
            dangerouslySetInnerHTML={{ __html: translations.main.aboutUs[id].title }}
            type="slab"
            size="l"
          />

          <Text className="fact-description" as="p" type="strong" size="m">
            {id === 'fact4' && (
              <span
                className="italic"
                onMouseOver={handleHover('elbrus')}
                onMouseLeave={handleHover(null)}
                data-testid="Home:text.elbrus"
              >
                {translations.main.aboutUs[id].hero}
              </span>
            )}
            <span dangerouslySetInnerHTML={{ __html: translations.main.aboutUs[id].description }} />
          </Text>
        </div>
      ))}

      {/* <Link
        className="link"
        href={`${language}/about-us`}
        type="list"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.main.aboutUs.link }}
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
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(AboutUs)`
      ${styles}
    `),
  ),
)

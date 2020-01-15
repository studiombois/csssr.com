import React, { useState } from 'react'
import { string } from 'prop-types'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles, { mobileBackgroundImagesStyles } from './Services.styles'

import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import Link from '../../ui-kit/core-design/Link'
import Picture from '../../ui-kit/Picture'
import Grid from '../../ui-kit/core-design/Grid'

import figures from '../../../data/main/figures'
import services from '../../../data/main/services'

import translate from '../../../utils/translate-wrapper'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Services = ({ className, t, isMobile }) => {
  const [hoveredService, setHoveredService] = useState(null)

  return (
    <Grid as="article" className={className}>
      <Heading
        className="title_main"
        as="h2"
        dangerouslySetInnerHTML={{ __html: t('main:services.title') }}
        type="slab"
        size="m"
      />

      <nav className="navigation">
        <ul>
          {services.map(({ id, title, subtitle, icon: Icon, iconName, href }) => {
            const handleHover = hoveredService => event => {
              if (isMobile) {
                event.preventDefault()
                return
              }

              setHoveredService(hoveredService)
            }

            return (
              <li
                key={id}
                className={cn('service', `service_${id}`)}
                onMouseOver={handleHover(iconName)}
                onMouseLeave={handleHover(null)}
              >
                <Heading
                  className="service-title"
                  as="h3"
                  type="slab"
                  size="l"
                  dangerouslySetInnerHTML={{ __html: `<a href=${href}>${t(title)}</a>` }}
                />

                <Text
                  className="service-subtitle"
                  as="p"
                  type="strong"
                  size="m"
                  dangerouslySetInnerHTML={{ __html: t(subtitle) }}
                />

                <Link
                  className="service-link"
                  href="/"
                  type="list"
                  size="m"
                  dangerouslySetInnerHTML={{ __html: t('main:services.link') }}
                />

                <Icon className={cn('service-icon', `service-icon_${iconName}`)} />
              </li>
            )
          })}
        </ul>
      </nav>

      {!isMobile && (
        <div className="picture-wrapper">
          <img
            className={cn('picture', 'picture_figures')}
            src={require('../../../static/icons/main/figures.svg').default}
            alt={t('main:imageAlt.figures')}
          />

          {figures.map(({ name, images, fallback }) => (
            <Picture
              key={name}
              className={cn('picture', `picture_${name}`, {
                picture_is_visible: name === hoveredService,
              })}
              images={images}
              fallback={fallback}
              alt={t(`main:imageAlt.${name}`)}
            />
          ))}
        </div>
      )}

      <Global styles={mobileBackgroundImagesStyles} />
    </Grid>
  )
}

Services.propTypes = {
  className: string,
}

export default styled(translate()(DeviceConsumer(MsBrowserConsumer(Services))))`
  ${styles}
`

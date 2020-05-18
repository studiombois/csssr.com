import React, { Fragment, useState } from 'react'
import { bool, func, string } from 'prop-types'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles, { mobileBackgroundImagesStyles } from './Services.styles'

import NextLink from 'next/link'
import Figures from './Figures'
import OurFeatures from './OurFeatures'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import Grid from '../../ui-kit/core-design/Grid'

import services from '../../../data/main/services'

import translate from '../../../utils/translate-wrapper'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Services = ({ className, t, lng, isMobile }) => {
  const [hoveredService, setHoveredService] = useState(null)

  return (
    <Fragment>
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
              const handleHover = (hoveredService) => (event) => {
                if (isMobile) {
                  event.preventDefault()
                  return
                }

                setHoveredService(hoveredService)
              }

              if (lng === 'ru' && id === 'express') {
                return
              }

              return (
                <li
                  key={id}
                  className={cn('service', `service_${id}`)}
                  onMouseOver={handleHover(iconName)}
                  onMouseLeave={handleHover(null)}
                >
                  <Heading className="service-title" as="h3" type="slab" size="l">
                    <NextLink href={`${lng}/service/${href}`}>
                      <a
                        dangerouslySetInnerHTML={{
                          __html: t(title),
                        }}
                      />
                    </NextLink>
                  </Heading>

                  <Text
                    className="service-subtitle"
                    as="p"
                    type="strong"
                    size="m"
                    dangerouslySetInnerHTML={{ __html: t(subtitle) }}
                  />

                  <Icon className={cn('service-icon', `service-icon_${iconName}`)} />
                </li>
              )
            })}
          </ul>
        </nav>

        {!isMobile && <Figures hoveredService={hoveredService} />}

        <Global styles={mobileBackgroundImagesStyles(lng)} />
      </Grid>

      <OurFeatures />
    </Fragment>
  )
}

Services.propTypes = {
  className: string,
  t: func,
  lng: string,
  isMobile: bool,
}

export default translate(
  DeviceConsumer(
    MsBrowserConsumer(styled(Services)`
      ${styles}
    `),
  ),
)

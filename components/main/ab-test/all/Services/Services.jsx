import React, { Fragment, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { bool, string } from 'prop-types'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles, { mobileBackgroundImagesStyles } from './Services.styles'

import NextLink from 'next/link'
import Figures from './Figures'
import OurFeatures from './OurFeatures'
import Heading from '../../../../ui-kit/core-design/Heading'
import Text from '../../../../ui-kit/core-design/Text'
import Grid from '../../../../ui-kit/core-design/Grid'

import services from '../../../../../data/main/services'

import { L10nConsumer } from '../../../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../../../utils/msBrowserProvider'

const Services = ({ className, l10n: { translations, language }, isMobile }) => {
  const [hoveredService, setHoveredService] = useState(null)

  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  useEffect(() => {
    if (inView) {
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'scrolled_to_services' })
      }
    }
  }, [inView])

  return (
    <Fragment>
      <Grid as="article" className={className}>
        <h2 className="title_main">Оur Services</h2>

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

              if (language === 'ru' && id === 'express') {
                return
              }

              return (
                <li
                  key={id}
                  ref={language === 'en' && id === 'mvp' ? ref : null}
                  className={cn('service', `service_${id}`)}
                  onMouseOver={handleHover(iconName)}
                  onMouseLeave={handleHover(null)}
                >
                  <Heading className="service-title" as="h3" type="slab" size="l">
                    <NextLink href={`${language}/service/${href}`}>
                      <a
                        dangerouslySetInnerHTML={{
                          __html: title(translations),
                        }}
                      />
                    </NextLink>
                  </Heading>

                  <Text
                    className="service-subtitle"
                    as="p"
                    type="strong"
                    size="m"
                    dangerouslySetInnerHTML={{ __html: subtitle(translations) }}
                  />

                  <Icon className={cn('service-icon', `service-icon_${iconName}`)} />
                </li>
              )
            })}
          </ul>
        </nav>

        {!isMobile && <Figures hoveredService={hoveredService} />}

        <Global styles={mobileBackgroundImagesStyles(language)} />
      </Grid>

      <OurFeatures />
    </Fragment>
  )
}

Services.propTypes = {
  className: string,
  isMobile: bool,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Services)`
      ${styles}
    `),
  ),
)

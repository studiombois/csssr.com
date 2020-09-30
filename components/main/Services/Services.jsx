import React from 'react'
import { bool, string } from 'prop-types'
import cn from 'classnames'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import styles, { backgroundImagesStyles } from './Services.styles'

import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import Grid from '../../ui-kit/core-design/Grid'

import { L10nConsumer } from '../../../utils/l10nProvider'

import { servicesByLng } from '../../../data/main/services'

const Services = ({ className, l10n: { translations, language } }) => {
  const services = servicesByLng[language]

  return (
    <Grid
      as="article"
      className={cn(className, {
        '_has_one-row': services.length <= 3,
        '_has_two-rows': services.length > 3,
      })}
      data-testid="Home:block.services"
    >
      <Heading
        className="title"
        as="h2"
        dangerouslySetInnerHTML={{ __html: translations.main.services.title }}
        type="slab"
        size="m"
      />

      <Text
        className="description"
        as="p"
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.main.services.description }}
      />

      <ul className="services">
        {services.map(({ id, href, images }) => (
          <li key={id} className={cn('service', `service_${id}`)}>
            <Global styles={backgroundImagesStyles(`.service_${id}`, images)} />
            <NextLink href={`/${language}/service/${href}`}>
              <a>
                <h3
                  className="service-title"
                  dangerouslySetInnerHTML={{ __html: translations.main.services[id].title }}
                />

                <p
                  className="service-description"
                  dangerouslySetInnerHTML={{ __html: translations.main.services[id].description }}
                />
              </a>
            </NextLink>
          </li>
        ))}
      </ul>
    </Grid>
  )
}

Services.propTypes = {
  className: string,
  isMobile: bool,
}

export default L10nConsumer(styled(Services)`
  ${styles}
`)

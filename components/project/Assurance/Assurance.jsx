import React, { useState, useEffect } from 'react'
import { string, object } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Assurance.styles'

import { PictureSmart } from '@csssr/csssr.images/dist/react'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import Grid from '../../ui-kit/core-design/Grid'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Assurance = ({
  className,
  l10n: { translations, language },
  isMobile,
  content: { quality, roi, images },
}) => {
  const [offset, setOffset] = useState(0)
  const [offsetMin, setOffsetMin] = useState(0)
  const isWindowContext = typeof window !== 'undefined'
  const desktopL = isWindowContext && window.innerWidth >= 1920
  const desktopM = isWindowContext && window.innerWidth >= 1360 && window.innerWidth < 1920
  const desktopS = isWindowContext && window.innerWidth >= 1280 && window.innerWidth < 1360
  const tablet = isWindowContext && window.innerWidth >= 768 && window.innerWidth < 1280

  useEffect(() => {
    const handleResize = () => {
      if (desktopL) {
        setOffsetMin(7000)
      } else if (desktopM) {
        setOffsetMin(8100)
      } else if (desktopS) {
        setOffsetMin(8200)
      } else if (tablet) {
        setOffsetMin(4800)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [desktopL, desktopM, desktopS, tablet])

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset

      if (offset >= offsetMin) {
        setOffset(offset)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offsetMin])

  return (
    <Grid as="section" className={className}>
      <div className="container">
        <div className="assurance-wrapper">
          <div className="quality">
            <Heading.H2
              type="slab"
              size="m"
              dangerouslySetInnerHTML={{ __html: quality.heading(translations) }}
              className="heading"
            />
            <SubHeading
              as="p"
              type="slab"
              size="m"
              dangerouslySetInnerHTML={{ __html: quality.subheading(translations) }}
              className="subheading"
            />
            <Text
              dangerouslySetInnerHTML={{ __html: quality.message(translations) }}
              className="message"
            />
          </div>
          <div className="roi">
            <Text
              as="span"
              dangerouslySetInnerHTML={{ __html: roi.percent(translations) }}
              className="percent"
            />
            <Text
              as="span"
              dangerouslySetInnerHTML={{ __html: roi.label(translations) }}
              className="label"
            />
            <Text
              dangerouslySetInnerHTML={{ __html: roi.description(translations) }}
              className="description"
            />
          </div>
        </div>

        <div className="picture-container">
          <PictureSmart
            requireImages={isMobile ? images.screenMobile : images.screenDesktop}
            alt={images.screenAlt(translations)}
          />
          {!isMobile && (
            <div className="screen-container screen-container_left">
              <PictureSmart
                requireImages={language === 'ru' ? images.designerRu : images.designerEn}
                alt={images.designerAlt(translations)}
              />
            </div>
          )}
          <div className="screen-container screen-container_right">
            <div
              style={{
                transform: isMobile
                  ? 'translateY(0)'
                  : `translateY(-${(offset - offsetMin) * 0.1}px)`,
              }}
            >
              <PictureSmart
                requireImages={language === 'ru' ? images.projectsRu : images.projectsEn}
                alt={images.projectsAlt(translations)}
              />
            </div>
          </div>
        </div>
      </div>
    </Grid>
  )
}

Assurance.propTypes = {
  className: string,
  content: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Assurance)`
      ${styles}
    `),
  ),
)

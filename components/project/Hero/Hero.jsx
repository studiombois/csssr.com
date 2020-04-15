import React from 'react'
import { string, object, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Hero.styles'
import translate from '../../../utils/translate-wrapper'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import Link from 'next/link'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Hero = ({ 
    t,
    className,
    id,
    content: { heading, link, subHeading, text, images, imgAlt },
    isMobile,
    isTablet,
}) => {
    const textType = isMobile || isTablet ? 'regular' : 'strong'
    return (
        <Grid className={className} as="section" id={id}>
            <Heading.H2
            type="slab"
            size="m"
            dangerouslySetInnerHTML={{ __html: t(heading) }}
            className="heading"
            />

            <Link href={t(link)}>
                <a className="mvp-link">{t(link)}</a>
            </Link>

            <SubHeading
            type="slab"
            dangerouslySetInnerHTML={{ __html: t(subHeading) }}
            className="sub-heading"
            />

            <Text
                type={textType}
                size="m"
                dangerouslySetInnerHTML={{ __html: t(text) }}
                className="text"
            />

            <PictureForAllResolutions
            images={images}
            fallback={images['desktop.l'].png}
            alt={t(imgAlt)}
            className="image"
            />

        </Grid>
    )
}

Hero.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object
}

export default translate(
  MsBrowserConsumer(styled(Hero)`
    ${styles}
  `),
)

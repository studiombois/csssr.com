import React from 'react'
import { string, object, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Team.styles'
import translate from '../../../utils/translate-wrapper'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Team = ({ 
    t,
    className,
    id,
    content: { heading, images, imgAlt, teamItems },
}) => {
    return (
        <Grid className={className} as="section" id={id}>
            <Heading.H2
                type="slab"
                size="m"
                dangerouslySetInnerHTML={{ __html: t(heading) }}
                className="heading"
            />
            <ul className="list">
            {teamItems.map(({number, text}) => (
              <>
                <li className="list-item number-item" key={number}>
                  <Text type="regular" as="span" dangerouslySetInnerHTML={{ __html: t(number) }} />
                </li>
                <li className="list-item text-item" key={text}>
                  <Text type="strong" as="span" dangerouslySetInnerHTML={{ __html: t(text) }} />
                </li>
              </>
            ))}
            </ul>

            <PictureForAllResolutions
                images={images}
                fallback={images['desktop.l'].png}
                alt={t(imgAlt)}
                className="image"
            />
        </Grid>
    )
}

Team.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object
}

export default translate(
  MsBrowserConsumer(styled(Team)`
    ${styles}
  `),
)
